/**
 * Venus Estetika — Activation Agent
 *
 * Determines next-best-actions based on lead score and category.
 * Generates follow-up plans with SLA-aware scheduling.
 */

import type {
  LeadScore,
  LeadIntake,
  RecommendedAction,
  FollowUpPlan,
  FollowUpAction,
  AuditEvent,
} from '@/lib/domain/types';
import { generateId } from '@/lib/agents/utils';

// ============================================================
// SLA RULES (Policy-driven)
// ============================================================

const SLA_HOURS: Record<string, number> = {
  HOT: 2,
  WARM: 24,
  NURTURE: 72,
  COLD: 168, // 7 days
};

// ============================================================
// ACTION GENERATION
// ============================================================

export interface ActivationResult {
  recommendedActions: RecommendedAction[];
  followUpPlan: FollowUpPlan;
  auditEvent: AuditEvent;
}

export function generateActivationPlan(
  intake: LeadIntake,
  score: LeadScore
): ActivationResult {
  const now = new Date();
  const slaHours = SLA_HOURS[score.category];
  const slaDeadline = new Date(now.getTime() + slaHours * 60 * 60 * 1000);

  const recommendedActions: RecommendedAction[] = [];
  const followUpActions: FollowUpAction[] = [];

  // Action 1: First response based on preferred contact
  const firstResponseAction = buildFirstResponse(intake, score, slaDeadline);
  recommendedActions.push(firstResponseAction.recommended);
  followUpActions.push(firstResponseAction.followUp);

  // Action 2: Odoo activity creation
  recommendedActions.push({
    type: 'create_odoo_activity',
    description: `Créer une activité Odoo: Répondre au lead ${score.category} sous ${slaHours}h`,
    priority: score.category === 'HOT' ? 'immediate' : 'scheduled',
    scheduledFor: slaDeadline.toISOString(),
    requiresApproval: false,
  });

  followUpActions.push({
    type: 'activity',
    scheduledAt: slaDeadline.toISOString(),
    status: 'pending',
    content: `SLA ${score.category}: Répondre avant ${slaDeadline.toLocaleString('fr-FR')}`,
  });

  // Action 3: Category-specific actions
  if (score.category === 'HOT') {
    recommendedActions.push({
      type: 'priority_alert',
      description: 'Alerte prioritaire: Lead HOT nécessite une réponse immédiate',
      priority: 'immediate',
      requiresApproval: false,
    });
  }

  if (score.category === 'NURTURE' || score.category === 'COLD') {
    // Schedule nurture sequence
    const dayOffsets = score.category === 'NURTURE' ? [3, 7, 14] : [7, 21, 45];
    for (const offset of dayOffsets) {
      const schedDate = new Date(now.getTime() + offset * 24 * 60 * 60 * 1000);
      followUpActions.push({
        type: 'email',
        scheduledAt: schedDate.toISOString(),
        status: 'pending',
        content: `Email de relance #${dayOffsets.indexOf(offset) + 1} - ${intake.intervention}`,
      });
      recommendedActions.push({
        type: 'nurture_email',
        description: `Email de relance J+${offset}: contenu personnalisé ${intake.intervention}`,
        priority: 'scheduled',
        scheduledFor: schedDate.toISOString(),
        requiresApproval: score.category === 'NURTURE', // COLD can be auto
      });
    }
  }

  const followUpPlan: FollowUpPlan = {
    actions: followUpActions,
    createdBy: 'agent:activation',
    createdAt: now.toISOString(),
  };

  const auditEvent: AuditEvent = {
    id: generateId('audit'),
    timestamp: now.toISOString(),
    actor: 'agent:activation',
    action: 'generate_activation_plan',
    target: 'lead:pending',
    input: {
      score: score.value,
      category: score.category,
      preferredContact: intake.preferredContact,
    },
    output: {
      actionsCount: recommendedActions.length,
      slaDeadline: slaDeadline.toISOString(),
      firstResponseType: intake.preferredContact,
    },
    reasoning: `Lead ${score.category} (score ${score.value}): SLA ${slaHours}h, ${recommendedActions.length} actions planned. First response via ${intake.preferredContact}.`,
    policyCheck: {
      passed: true,
      policy: 'response_sla',
      details: `SLA deadline set: ${slaHours}h for ${score.category} lead`,
    },
  };

  return { recommendedActions, followUpPlan, auditEvent };
}

function buildFirstResponse(
  intake: LeadIntake,
  score: LeadScore,
  slaDeadline: Date
): { recommended: RecommendedAction; followUp: FollowUpAction } {
  const contactMethodMap = {
    email: 'Envoyer un email personnalisé',
    whatsapp: 'Envoyer un message WhatsApp',
    phone: 'Appeler le prospect',
  };

  const description = `${contactMethodMap[intake.preferredContact]} pour ${intake.intervention} (${score.category})`;

  return {
    recommended: {
      type: `first_response_${intake.preferredContact}`,
      description,
      priority: score.category === 'HOT' ? 'immediate' : 'scheduled',
      scheduledFor: slaDeadline.toISOString(),
      requiresApproval: score.category === 'HOT', // HOT leads: human validates before sending
    },
    followUp: {
      type: intake.preferredContact === 'phone' ? 'call' : intake.preferredContact,
      scheduledAt: slaDeadline.toISOString(),
      status: 'pending',
      content: description,
    },
  };
}
