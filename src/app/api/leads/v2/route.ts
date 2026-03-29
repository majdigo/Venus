/**
 * Venus Estetika — Lead Processing API v2 (Agentic)
 *
 * POST /api/leads/v2
 *
 * Full pipeline: Intake → Qualify → Score → CRM Sync → Activate → Audit
 * Returns structured result with score, actions, and audit trail.
 */

import { NextResponse } from 'next/server';
import { fullQuoteSchema } from '@/lib/validations/quote-schemas';
import { processLead } from '@/lib/agents/orchestrator';
import { sendConfirmationEmail } from '@/lib/email/templates';
import { notifyTeam } from '@/lib/notifications/slack';
import type { LeadIntake } from '@/lib/domain/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Server-side validation
    const validated = fullQuoteSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validated.data;

    // 2. Build LeadIntake from validated form data
    const medicalData: Record<string, unknown> = {};
    const medicalFields = [
      'age', 'gender', 'weight', 'height',
      'currentSize', 'desiredSize', 'ptosis',
      'targetZones', 'weightFluctuation', 'pregnancies',
      'faceIssues', 'previousFaceSurgery',
      'hairLossType', 'beardTransplant', 'norwoodStage',
      'dentalNeeds', 'jawIssues',
    ];
    for (const field of medicalFields) {
      if ((data as Record<string, unknown>)[field] != null) {
        medicalData[field] = (data as Record<string, unknown>)[field];
      }
    }

    // Extract UTM from request headers or body
    const referer = request.headers.get('referer') || '';

    const intake: LeadIntake = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      intervention: data.intervention,
      subIntervention: data.subIntervention,
      medicalData: Object.keys(medicalData).length > 0 ? medicalData : undefined,
      preferredContact: data.preferredContact,
      desiredDate: data.desiredDate,
      message: data.message,
      attribution: {
        // UTMs would come from cookies/query params in production
        utm_source: (body.utm_source as string) || undefined,
        utm_medium: (body.utm_medium as string) || undefined,
        utm_campaign: (body.utm_campaign as string) || undefined,
        utm_content: (body.utm_content as string) || undefined,
        utm_term: (body.utm_term as string) || undefined,
        referrer: referer || undefined,
        landingPage: (body.landing_page as string) || undefined,
      },
      consentRGPD: true,
      consentMarketing: data.consentMarketing || false,
      channel: 'website_form',
      capturedAt: new Date().toISOString(),
      deviceType: (body.device_type as string) || undefined,
      landingPage: (body.landing_page as string) || undefined,
    };

    // 3. Process through agentic pipeline
    const result = await processLead(intake);

    // 4. Background notifications (don't block response)
    if (result.success) {
      Promise.all([
        sendConfirmationEmail({
          to: data.email,
          firstName: data.firstName,
          intervention: data.intervention,
          leadRef: result.leadId,
        }),
        notifyTeam({
          leadId: result.odooSync.odooLeadId || 0,
          name: `${data.firstName} ${data.lastName}`,
          intervention: data.intervention,
          score: result.score.value,
          source: intake.attribution.utm_source || 'Direct',
          device: intake.deviceType || 'Unknown',
        }),
      ]).catch(err => console.error('[NOTIFICATIONS] Background error:', err));
    }

    // 5. Return structured response
    return NextResponse.json({
      success: result.success,
      lead_id: result.leadId,
      transaction_id: result.leadId,
      score: {
        value: result.score.value,
        category: result.score.category,
        factors: result.score.factors,
      },
      odoo: {
        synced: result.odooSync.success,
        lead_id: result.odooSync.odooLeadId,
      },
      recommended_actions: result.recommendedActions.map(a => ({
        type: a.type,
        description: a.description,
        priority: a.priority,
        requires_approval: a.requiresApproval,
      })),
      audit_trail: result.auditTrail.map(e => ({
        timestamp: e.timestamp,
        actor: e.actor,
        action: e.action,
        reasoning: e.reasoning,
        policy_check: e.policyCheck,
      })),
      explain_url: result.explainUrl,
    }, { status: 200 });

  } catch (error) {
    console.error('[API Leads v2] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
