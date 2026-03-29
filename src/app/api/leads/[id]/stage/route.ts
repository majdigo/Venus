/**
 * Venus Estetika — Lead Stage Update API
 *
 * PATCH /api/leads/{id}/stage
 *
 * Moves a lead through the sales pipeline.
 * All transitions are validated by the Policy Guardian.
 */

import { NextResponse } from 'next/server';
import { getLead } from '@/lib/agents/orchestrator';
import { validateStageTransition, getValidTransitions } from '@/lib/agents/policy-guardian';
import { saveLead } from '@/lib/agents/store';
import { saveAuditEvents } from '@/lib/agents/store';
import type { SalesStage } from '@/lib/domain/types';

const VALID_STAGES: SalesStage[] = [
  'new', 'qualified', 'consultation_scheduled',
  'quote_sent', 'quote_accepted', 'booking_confirmed',
  'completed', 'lost',
];

export async function PATCH(
  request: Request,
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

  const body = await request.json();
  const targetStage = body.stage as SalesStage;

  if (!targetStage || !VALID_STAGES.includes(targetStage)) {
    return NextResponse.json(
      {
        error: 'Invalid stage',
        valid_stages: VALID_STAGES,
        current_stage: lead.stage,
        valid_transitions: getValidTransitions(lead.stage),
      },
      { status: 400 }
    );
  }

  if (targetStage === lead.stage) {
    return NextResponse.json(
      { error: 'Lead is already in this stage', current_stage: lead.stage },
      { status: 400 }
    );
  }

  // Policy Guardian validates the transition
  const validation = validateStageTransition(lead, targetStage);

  // Save audit event regardless of outcome
  saveAuditEvents([validation.auditEvent]);

  if (!validation.allowed) {
    return NextResponse.json(
      {
        allowed: false,
        lead_id: id,
        current_stage: lead.stage,
        requested_stage: targetStage,
        policy_checks: validation.checks,
        valid_transitions: getValidTransitions(lead.stage),
      },
      { status: 403 }
    );
  }

  if (validation.requiresApproval) {
    return NextResponse.json(
      {
        allowed: true,
        requires_approval: true,
        approver_role: validation.approverRole,
        lead_id: id,
        current_stage: lead.stage,
        requested_stage: targetStage,
        message: `Transition requires approval from ${validation.approverRole}. Use ?approved=true to confirm.`,
        policy_checks: validation.checks,
      },
      { status: 202 }
    );
  }

  // Apply the transition
  lead.stage = targetStage;
  lead.updatedAt = new Date().toISOString();
  saveLead(lead);

  return NextResponse.json({
    success: true,
    lead_id: id,
    previous_stage: validation.auditEvent.input?.from,
    current_stage: lead.stage,
    policy_checks: validation.checks,
    audit_event: {
      timestamp: validation.auditEvent.timestamp,
      actor: validation.auditEvent.actor,
      action: validation.auditEvent.action,
      reasoning: validation.auditEvent.reasoning,
    },
  });
}
