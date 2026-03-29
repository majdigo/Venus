/**
 * Venus Estetika — Chief Revenue Orchestrator
 *
 * Coordinates the full lead processing pipeline:
 * Intake → Qualify → Score → Sync CRM → Activate → Audit
 *
 * This is the single entry point for processing new leads.
 */

import type {
  LeadIntake,
  Lead,
  LeadProcessingResult,
  AuditEvent,
} from '@/lib/domain/types';
import { qualifyLead } from '@/lib/agents/qualification';
import { generateActivationPlan } from '@/lib/agents/activation';
import { odooAdapter, buildOdooPayload } from '@/lib/adapters/odoo-adapter';
import { generateId, generateLeadId } from '@/lib/agents/utils';

// ============================================================
// IN-MEMORY STORES (to be replaced by persistent store)
// ============================================================

const leadStore = new Map<string, Lead>();
const auditStore: AuditEvent[] = [];

// ============================================================
// ORCHESTRATOR
// ============================================================

export async function processLead(intake: LeadIntake): Promise<LeadProcessingResult> {
  const leadId = generateLeadId();
  const auditTrail: AuditEvent[] = [];
  const now = new Date().toISOString();

  // --- Step 1: Record intake ---
  const intakeAudit: AuditEvent = {
    id: generateId('audit'),
    timestamp: now,
    actor: 'agent:orchestrator',
    action: 'lead_intake',
    target: `lead:${leadId}`,
    input: {
      channel: intake.channel,
      intervention: intake.intervention,
      country: intake.country,
    },
    reasoning: `New lead intake from ${intake.channel}: ${intake.firstName} ${intake.lastName} interested in ${intake.intervention}`,
    policyCheck: {
      passed: intake.consentRGPD === true,
      policy: 'consent_policy',
      details: intake.consentRGPD ? 'RGPD consent granted' : 'RGPD consent MISSING — lead cannot be processed',
    },
  };
  auditTrail.push(intakeAudit);

  if (!intake.consentRGPD) {
    return {
      success: false,
      leadId,
      score: { value: 0, category: 'COLD', factors: [], computedAt: now, agentRunId: '' },
      odooSync: { success: false, error: 'RGPD consent missing', syncedAt: now },
      recommendedActions: [],
      auditTrail,
      explainUrl: `/api/leads/${leadId}/explain`,
    };
  }

  // --- Step 2: Qualify and score ---
  const qualification = qualifyLead(intake);
  qualification.auditEvent.target = `lead:${leadId}`;
  auditTrail.push(qualification.auditEvent);

  // --- Step 3: Sync to Odoo CRM ---
  const odooPayload = buildOdooPayload(intake, qualification.score);
  const odooSync = await odooAdapter.createLead(odooPayload);

  const crmAudit: AuditEvent = {
    id: generateId('audit'),
    timestamp: new Date().toISOString(),
    actor: 'agent:crm_control',
    action: 'create_odoo_lead',
    target: `lead:${leadId}`,
    input: { payloadFields: Object.keys(odooPayload) },
    output: {
      success: odooSync.success,
      odooLeadId: odooSync.odooLeadId,
      error: odooSync.error,
    },
    reasoning: odooSync.success
      ? `Lead synced to Odoo CRM with ID ${odooSync.odooLeadId}. Score: ${qualification.score.value}, Category: ${qualification.score.category}`
      : `Odoo sync failed: ${odooSync.error}. Lead preserved locally.`,
    policyCheck: {
      passed: true,
      policy: 'crm_sync_policy',
      details: 'All CRM writes go through adapter layer',
    },
  };
  auditTrail.push(crmAudit);

  // --- Step 4: Create Odoo activity for SLA ---
  if (odooSync.success && odooSync.odooLeadId) {
    const slaHours = { HOT: 2, WARM: 24, NURTURE: 72, COLD: 168 }[qualification.score.category];
    const deadline = new Date(Date.now() + slaHours * 60 * 60 * 1000);
    const dateStr = deadline.toISOString().split('T')[0];

    await odooAdapter.createActivity(odooSync.odooLeadId, {
      summary: `[SLA ${qualification.score.category}] Répondre au lead`,
      note: `Lead ${leadId} scored ${qualification.score.value}/100. Category: ${qualification.score.category}. Intervention: ${intake.intervention}. Respond within ${slaHours}h.`,
      dateDeadline: dateStr,
    });
  }

  // --- Step 5: Generate activation plan ---
  const activation = generateActivationPlan(intake, qualification.score);
  activation.auditEvent.target = `lead:${leadId}`;
  auditTrail.push(activation.auditEvent);

  // --- Step 6: Store lead ---
  const lead: Lead = {
    id: leadId,
    intake,
    score: qualification.score,
    stage: 'new',
    odooLeadId: odooSync.odooLeadId,
    conversations: [],
    followUpPlan: activation.followUpPlan,
    createdAt: now,
    updatedAt: new Date().toISOString(),
  };

  leadStore.set(leadId, lead);
  auditTrail.forEach(e => auditStore.push(e));

  // --- Return complete result ---
  return {
    success: true,
    leadId,
    score: qualification.score,
    odooSync,
    recommendedActions: activation.recommendedActions,
    auditTrail,
    explainUrl: `/api/leads/${leadId}/explain`,
  };
}

// ============================================================
// QUERY FUNCTIONS
// ============================================================

export function getLead(leadId: string): Lead | undefined {
  return leadStore.get(leadId);
}

export function getAuditTrail(leadId: string): AuditEvent[] {
  return auditStore.filter(e => e.target === `lead:${leadId}`);
}

export function getAllLeads(): Lead[] {
  return Array.from(leadStore.values());
}

export function getStats(): {
  total: number;
  byCategory: Record<string, number>;
  byStage: Record<string, number>;
} {
  const leads = getAllLeads();
  const byCategory: Record<string, number> = {};
  const byStage: Record<string, number> = {};

  for (const lead of leads) {
    byCategory[lead.score.category] = (byCategory[lead.score.category] || 0) + 1;
    byStage[lead.stage] = (byStage[lead.stage] || 0) + 1;
  }

  return { total: leads.length, byCategory, byStage };
}
