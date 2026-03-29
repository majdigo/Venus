/**
 * Venus Estetika — Qualification Agent
 *
 * Scores and classifies leads based on business rules.
 * Every decision is traceable with reasoning.
 */

import type {
  LeadIntake,
  LeadScore,
  LeadCategory,
  ScoreFactor,
  AuditEvent,
  Decision,
} from '@/lib/domain/types';
import { generateId } from '@/lib/agents/utils';

// ============================================================
// SCORING RULES (Policy-driven)
// ============================================================

const HIGH_VALUE_INTERVENTIONS = [
  'bypass-gastrique', 'mommy-makeover', 'sleeve-gastrique',
  'augmentation-mammaire', 'abdominoplastie', 'rhinoplastie',
  'lifting-cervico-facial', 'liposuccion',
];

const MEDIUM_VALUE_INTERVENTIONS = [
  'blepharoplastie', 'reduction-mammaire', 'lifting-seins',
  'lipofilling-mammaire', 'bbl', 'greffe-cheveux',
  'greffe-dhi', 'implants-dentaires',
];

const COUNTRY_SCORES: Record<string, number> = {
  FR: 20,
  CH: 20,
  BE: 15,
  TN: 5,
  OTHER: 10,
};

const URGENCY_SCORES: Record<string, number> = {
  asap: 20,
  '1-2-months': 15,
  '3-6-months': 10,
  'just-looking': 5,
};

// ============================================================
// SCORING ENGINE
// ============================================================

function scoreInterventionValue(intervention: string): ScoreFactor {
  const slug = intervention.toLowerCase().replace(/\s+/g, '-');

  if (HIGH_VALUE_INTERVENTIONS.some(h => slug.includes(h))) {
    return {
      name: 'intervention_value',
      points: 25,
      maxPoints: 25,
      reasoning: `High-value intervention: ${intervention}`,
    };
  }

  if (MEDIUM_VALUE_INTERVENTIONS.some(m => slug.includes(m))) {
    return {
      name: 'intervention_value',
      points: 15,
      maxPoints: 25,
      reasoning: `Medium-value intervention: ${intervention}`,
    };
  }

  return {
    name: 'intervention_value',
    points: 10,
    maxPoints: 25,
    reasoning: `Standard intervention: ${intervention}`,
  };
}

function scoreCountry(country: string): ScoreFactor {
  const points = COUNTRY_SCORES[country] ?? 10;
  return {
    name: 'country',
    points,
    maxPoints: 20,
    reasoning: `Country: ${country} → ${points} points`,
  };
}

function scoreUrgency(desiredDate?: string): ScoreFactor {
  if (!desiredDate) {
    return {
      name: 'urgency',
      points: 8,
      maxPoints: 20,
      reasoning: 'No urgency specified — default medium score',
    };
  }

  const points = URGENCY_SCORES[desiredDate] ?? 8;
  return {
    name: 'urgency',
    points,
    maxPoints: 20,
    reasoning: `Desired date: ${desiredDate} → ${points} points`,
  };
}

function scoreCompleteness(intake: LeadIntake): ScoreFactor {
  let points = 0;
  const details: string[] = [];

  if (intake.email) { points += 3; details.push('email'); }
  if (intake.phone) { points += 3; details.push('phone'); }
  if (intake.medicalData && Object.keys(intake.medicalData).length > 0) {
    points += 5;
    details.push('medical data');
  }
  if (intake.message && intake.message.length > 20) {
    points += 2;
    details.push('detailed message');
  }
  if (intake.consentMarketing) {
    points += 2;
    details.push('marketing consent');
  }

  return {
    name: 'completeness',
    points: Math.min(points, 15),
    maxPoints: 15,
    reasoning: `Fields provided: ${details.join(', ')} → ${Math.min(points, 15)} points`,
  };
}

function scoreChannelQuality(channel: string): ScoreFactor {
  const channelPoints: Record<string, number> = {
    website_form: 10,
    contact_form: 8,
    email: 8,
    whatsapp: 6,
    phone: 5,
    chat: 7,
  };

  const points = channelPoints[channel] ?? 5;
  return {
    name: 'channel_quality',
    points,
    maxPoints: 10,
    reasoning: `Channel: ${channel} → ${points} points`,
  };
}

function categorize(score: number): LeadCategory {
  if (score >= 70) return 'HOT';
  if (score >= 40) return 'WARM';
  if (score >= 20) return 'NURTURE';
  return 'COLD';
}

// ============================================================
// PUBLIC API
// ============================================================

export interface QualificationResult {
  score: LeadScore;
  decision: Decision;
  auditEvent: AuditEvent;
}

export function qualifyLead(intake: LeadIntake): QualificationResult {
  const agentRunId = generateId('run');
  const now = new Date().toISOString();

  // Compute factors
  const factors: ScoreFactor[] = [
    scoreInterventionValue(intake.intervention),
    scoreCountry(intake.country),
    scoreUrgency(intake.desiredDate),
    scoreCompleteness(intake),
    scoreChannelQuality(intake.channel),
  ];

  const totalScore = factors.reduce((sum, f) => sum + f.points, 0);
  const category = categorize(totalScore);

  const score: LeadScore = {
    value: totalScore,
    category,
    factors,
    computedAt: now,
    agentRunId,
  };

  const reasoning = factors
    .map(f => `${f.name}: ${f.points}/${f.maxPoints} — ${f.reasoning}`)
    .join('\n');

  const decision: Decision = {
    type: 'lead_qualification',
    reasoning: `Lead scored ${totalScore}/100 → ${category}\n\n${reasoning}`,
    confidence: 0.85, // Rule-based, high confidence
    factors: Object.fromEntries(factors.map(f => [f.name, f.points])),
    action: {
      type: 'classify_lead',
      target: `lead:pending`,
      payload: { score: totalScore, category },
      requiresApproval: false,
      status: 'executed',
    },
  };

  const auditEvent: AuditEvent = {
    id: generateId('audit'),
    timestamp: now,
    actor: 'agent:qualification',
    action: 'score_lead',
    target: 'lead:pending',
    input: {
      intervention: intake.intervention,
      country: intake.country,
      desiredDate: intake.desiredDate,
      channel: intake.channel,
    },
    output: { score: totalScore, category },
    reasoning: decision.reasoning,
    policyCheck: {
      passed: true,
      policy: 'lead_qualification_sop',
      details: `Score ${totalScore} classified as ${category} per qualification SOP`,
    },
    agentRunId,
  };

  return { score, decision, auditEvent };
}
