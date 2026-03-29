/**
 * Venus Estetika — Policy Guardian Agent
 *
 * Enforces business rules before any action is executed:
 * - Stage transition rules (which stages can follow which)
 * - Outbound communication approval
 * - Consent validation
 * - SLA breach detection
 *
 * Principle: No action bypasses policy. Every check is audited.
 */

import type {
  Lead,
  SalesStage,
  AuditEvent,
  PolicyCheckResult,
} from '@/lib/domain/types';
import { generateId } from '@/lib/agents/utils';

// ============================================================
// STAGE TRANSITION RULES
// ============================================================

interface TransitionRule {
  from: SalesStage;
  to: SalesStage;
  requiredFields: string[];
  requiresApproval: boolean;
  approverRole?: string;
}

const STAGE_TRANSITIONS: TransitionRule[] = [
  // new → qualified: score must exist
  { from: 'new', to: 'qualified', requiredFields: ['score'], requiresApproval: false },
  // qualified → consultation_scheduled: phone/contact must have happened
  { from: 'qualified', to: 'consultation_scheduled', requiredFields: ['score', 'odooLeadId'], requiresApproval: false },
  // consultation_scheduled → quote_sent: requires coordinator approval
  { from: 'consultation_scheduled', to: 'quote_sent', requiredFields: ['score', 'odooLeadId'], requiresApproval: true, approverRole: 'medical_coordinator' },
  // quote_sent → quote_accepted
  { from: 'quote_sent', to: 'quote_accepted', requiredFields: [], requiresApproval: false },
  // quote_accepted → booking_confirmed: requires manager approval
  { from: 'quote_accepted', to: 'booking_confirmed', requiredFields: [], requiresApproval: true, approverRole: 'sales_manager' },
  // booking_confirmed → completed
  { from: 'booking_confirmed', to: 'completed', requiredFields: [], requiresApproval: false },
  // Any stage → lost (always allowed)
  { from: 'new', to: 'lost', requiredFields: [], requiresApproval: false },
  { from: 'qualified', to: 'lost', requiredFields: [], requiresApproval: false },
  { from: 'consultation_scheduled', to: 'lost', requiredFields: [], requiresApproval: false },
  { from: 'quote_sent', to: 'lost', requiredFields: [], requiresApproval: false },
  { from: 'quote_accepted', to: 'lost', requiredFields: [], requiresApproval: false },
];

// ============================================================
// POLICY CHECKS
// ============================================================

export interface PolicyValidation {
  allowed: boolean;
  checks: PolicyCheckResult[];
  auditEvent: AuditEvent;
  requiresApproval: boolean;
  approverRole?: string;
}

/**
 * Validate whether a stage transition is allowed.
 */
export function validateStageTransition(
  lead: Lead,
  targetStage: SalesStage
): PolicyValidation {
  const checks: PolicyCheckResult[] = [];
  const now = new Date().toISOString();

  // Find matching transition rule
  const rule = STAGE_TRANSITIONS.find(
    r => r.from === lead.stage && r.to === targetStage
  );

  if (!rule) {
    checks.push({
      passed: false,
      policy: 'stage_transition_rules',
      details: `Transition ${lead.stage} → ${targetStage} is not allowed. Valid transitions from ${lead.stage}: ${getValidTransitions(lead.stage).join(', ')}`,
    });

    return buildResult(lead, targetStage, false, checks, now);
  }

  // Check required fields
  for (const field of rule.requiredFields) {
    const value = (lead as unknown as Record<string, unknown>)[field];
    const has = value !== undefined && value !== null;
    checks.push({
      passed: has,
      policy: 'required_fields',
      details: has
        ? `Required field '${field}' is present`
        : `Required field '${field}' is missing — cannot transition to ${targetStage}`,
    });
  }

  // Check consent for marketing-related stages
  if (['quote_sent', 'booking_confirmed'].includes(targetStage)) {
    checks.push({
      passed: lead.intake.consentRGPD === true,
      policy: 'consent_policy',
      details: lead.intake.consentRGPD
        ? 'RGPD consent verified for outbound action'
        : 'RGPD consent MISSING — cannot send quote or confirm booking',
    });
  }

  const allPassed = checks.every(c => c.passed);

  return buildResult(
    lead,
    targetStage,
    allPassed,
    checks,
    now,
    rule.requiresApproval,
    rule.approverRole
  );
}

/**
 * Validate whether an outbound communication is allowed.
 */
export function validateOutboundCommunication(
  lead: Lead,
  communicationType: 'email' | 'whatsapp' | 'sms' | 'phone',
  isMarketing: boolean
): PolicyValidation {
  const checks: PolicyCheckResult[] = [];
  const now = new Date().toISOString();

  // Consent check
  if (isMarketing) {
    checks.push({
      passed: lead.intake.consentMarketing === true,
      policy: 'marketing_consent',
      details: lead.intake.consentMarketing
        ? 'Marketing consent granted — outbound marketing allowed'
        : 'Marketing consent NOT granted — marketing communication blocked',
    });
  }

  // RGPD check (always required)
  checks.push({
    passed: lead.intake.consentRGPD === true,
    policy: 'rgpd_consent',
    details: lead.intake.consentRGPD
      ? 'RGPD consent verified'
      : 'RGPD consent missing — all communication blocked',
  });

  // Channel preference check
  if (communicationType !== 'phone') {
    const preferred = lead.intake.preferredContact === communicationType;
    checks.push({
      passed: true, // Not blocking, just advisory
      policy: 'channel_preference',
      details: preferred
        ? `${communicationType} matches patient preference`
        : `Patient preferred ${lead.intake.preferredContact}, using ${communicationType} instead — acceptable but not optimal`,
    });
  }

  const allPassed = checks.every(c => c.passed);

  const auditEvent: AuditEvent = {
    id: generateId('audit'),
    timestamp: now,
    actor: 'agent:policy_guardian',
    action: 'validate_outbound_communication',
    target: `lead:${lead.id}`,
    input: { communicationType, isMarketing },
    output: { allowed: allPassed },
    reasoning: `Outbound ${communicationType} (marketing=${isMarketing}) for lead ${lead.id}: ${allPassed ? 'ALLOWED' : 'BLOCKED'}`,
    policyCheck: {
      passed: allPassed,
      policy: 'outbound_communication',
      details: checks.map(c => `[${c.passed ? 'PASS' : 'FAIL'}] ${c.details}`).join('; '),
    },
  };

  return {
    allowed: allPassed,
    checks,
    auditEvent,
    requiresApproval: isMarketing && lead.score.category === 'HOT',
    approverRole: isMarketing ? 'sales_manager' : undefined,
  };
}

/**
 * Check SLA compliance for a lead.
 */
export function checkSlaCompliance(lead: Lead): PolicyCheckResult {
  const slaHours: Record<string, number> = {
    HOT: 2,
    WARM: 24,
    NURTURE: 72,
    COLD: 168,
  };

  const maxHours = slaHours[lead.score.category] || 168;
  const createdAt = new Date(lead.createdAt).getTime();
  const now = Date.now();
  const elapsedHours = (now - createdAt) / (1000 * 60 * 60);

  if (lead.stage === 'new' && elapsedHours > maxHours) {
    return {
      passed: false,
      policy: 'response_sla',
      details: `SLA BREACH: ${lead.score.category} lead (${lead.id}) has been in 'new' stage for ${Math.round(elapsedHours)}h (max: ${maxHours}h)`,
    };
  }

  return {
    passed: true,
    policy: 'response_sla',
    details: `SLA OK: ${lead.score.category} lead at ${Math.round(elapsedHours)}h / ${maxHours}h max`,
  };
}

// ============================================================
// HELPERS
// ============================================================

function getValidTransitions(from: SalesStage): SalesStage[] {
  return STAGE_TRANSITIONS
    .filter(r => r.from === from)
    .map(r => r.to);
}

function buildResult(
  lead: Lead,
  targetStage: SalesStage,
  allowed: boolean,
  checks: PolicyCheckResult[],
  timestamp: string,
  requiresApproval = false,
  approverRole?: string
): PolicyValidation {
  const auditEvent: AuditEvent = {
    id: generateId('audit'),
    timestamp,
    actor: 'agent:policy_guardian',
    action: 'validate_stage_transition',
    target: `lead:${lead.id}`,
    input: { from: lead.stage, to: targetStage },
    output: { allowed, requiresApproval },
    reasoning: `Stage transition ${lead.stage} → ${targetStage}: ${allowed ? 'ALLOWED' : 'BLOCKED'}${requiresApproval ? ' (requires approval from ' + approverRole + ')' : ''}`,
    policyCheck: {
      passed: allowed,
      policy: 'stage_transition_rules',
      details: checks.map(c => `[${c.passed ? 'PASS' : 'FAIL'}] ${c.details}`).join('; '),
    },
  };

  return { allowed, checks, auditEvent, requiresApproval, approverRole };
}

export { getValidTransitions };
