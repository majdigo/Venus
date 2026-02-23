import { NextResponse } from 'next/server';
import { z } from 'zod';
import { odoo } from '@/lib/api/odoo-rpc';

const newsletterSchema = z.object({
    email: z.string().email("Adresse email invalide"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = newsletterSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { success: false, errors: validatedData.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { email } = validatedData.data;

        const odooPayload = {
            name: `Newsletter Subscription - ${email}`,
            email_from: email,
            description: `Inscription à la newsletter depuis le footer du site web.`,
            x_intervention: "newsletter",
            x_marketing_consent: true, // Par définition pour une newsletter
        };

        console.log('[ODOO PROXY] Pushing Newsletter Subscription to CRM...');
        const leadId = await odoo.createLead(odooPayload);

        return NextResponse.json(
            { success: true, lead_id: leadId, message: 'Subscription securely synced to CRM' },
            { status: 200 }
        );

    } catch (error) {
        console.error('[API Newsletter] CRM Sync Error:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}
