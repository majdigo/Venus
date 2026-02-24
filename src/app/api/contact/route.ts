import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/quote-schemas';
import { odoo } from '@/lib/api/odoo-rpc';

/**
 * POST /api/contact
 *
 * Validates the contact form payload with Zod, then proxies it to Odoo CRM.
 * Email delivery will be wired in Sprint 4.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Server-side Zod validation
        const parsed = contactFormSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    errors: parsed.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { prenom, nom, email, telephone, pays, sujet, message } = parsed.data;

        // 2. Build Odoo CRM payload
        const odooPayload = {
            name: `Contact - ${sujet} - ${prenom} ${nom}`,
            contact_name: `${prenom} ${nom}`,
            email_from: email,
            phone: telephone,
            description: [
                `Pays : ${pays}`,
                `Sujet : ${sujet}`,
                '',
                'Message :',
                message,
            ].join('\n'),
            x_intervention: 'contact_general',
        };

        // 3. Push to Odoo (mock-safe — falls back gracefully when no API key is set)
        console.log('[API Contact] Pushing contact to CRM…');
        const leadId = await odoo.createLead(odooPayload);
        console.log(`[API Contact] Lead created — ID: ${leadId}`);

        return NextResponse.json(
            { success: true, lead_id: leadId },
            { status: 200 }
        );

    } catch (error) {
        console.error('[API Contact] Internal error:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur interne du serveur. Veuillez réessayer.' },
            { status: 500 }
        );
    }
}
