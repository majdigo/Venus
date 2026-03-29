/**
 * Venus Estetika — Lead Explain API
 *
 * GET /api/leads/{id}/explain
 *
 * Returns the full reasoning trace for a processed lead.
 * Supports the explainability requirement of the M%agic AI philosophy.
 */

import { NextResponse } from 'next/server';
import { getLead, getAuditTrail } from '@/lib/agents/orchestrator';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const lead = getLead(id);

  if (!lead) {
    return NextResponse.json(
      { error: 'Lead not found', lead_id: id },
      { status: 404 }
    );
  }

  const auditTrail = getAuditTrail(id);

  return NextResponse.json({
    lead_id: lead.id,
    created_at: lead.createdAt,
    intervention: lead.intake.intervention,
    country: lead.intake.country,
    channel: lead.intake.channel,

    score: {
      value: lead.score.value,
      category: lead.score.category,
      factors: lead.score.factors.map(f => ({
        name: f.name,
        points: f.points,
        max_points: f.maxPoints,
        reasoning: f.reasoning,
      })),
      computed_at: lead.score.computedAt,
    },

    stage: lead.stage,
    assigned_to: lead.assignedTo || 'unassigned',

    odoo: {
      lead_id: lead.odooLeadId,
      synced: !!lead.odooLeadId,
    },

    follow_up_plan: lead.followUpPlan ? {
      created_by: lead.followUpPlan.createdBy,
      actions: lead.followUpPlan.actions.map(a => ({
        type: a.type,
        scheduled_at: a.scheduledAt,
        status: a.status,
        content: a.content,
      })),
    } : null,

    audit_trail: auditTrail.map(e => ({
      timestamp: e.timestamp,
      actor: e.actor,
      action: e.action,
      reasoning: e.reasoning,
      policy_check: e.policyCheck,
    })),

    governance: {
      consent_rgpd: lead.intake.consentRGPD,
      consent_marketing: lead.intake.consentMarketing,
      data_retention_policy: 'RGPD compliant — 36 months max',
      ai_transparency: 'All agent decisions logged with reasoning traces',
    },
  }, { status: 200 });
}
