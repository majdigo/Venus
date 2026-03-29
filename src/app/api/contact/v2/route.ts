/**
 * Venus Estetika — Contact Form API v2 (Agentic)
 *
 * POST /api/contact/v2
 *
 * Routes contact form submissions through the agentic pipeline.
 */

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { processLead } from '@/lib/agents/orchestrator';
import type { LeadIntake } from '@/lib/domain/types';

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  message: z.string().min(10, "Le message est trop court"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validated.data;
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(' ') || '-';

    const intake: LeadIntake = {
      firstName,
      lastName,
      email,
      phone,
      country: 'OTHER',
      intervention: 'contact_general',
      preferredContact: 'email',
      message,
      attribution: {
        referrer: request.headers.get('referer') || undefined,
        landingPage: '/contact',
      },
      consentRGPD: true,
      consentMarketing: false,
      channel: 'contact_form',
      capturedAt: new Date().toISOString(),
    };

    const result = await processLead(intake);

    return NextResponse.json({
      success: result.success,
      lead_id: result.leadId,
      score: {
        value: result.score.value,
        category: result.score.category,
      },
      message: 'Message reçu et synchronisé au CRM',
    }, { status: 200 });

  } catch (error) {
    console.error('[API Contact v2] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
