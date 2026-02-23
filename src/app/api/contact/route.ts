import { NextResponse } from 'next/server';
import { z } from 'zod';
import { odoo } from '@/lib/api/odoo-rpc';

const contactSchema = z.object({
    name: z.string().min(2, "Le nom est trop court"),
    email: z.string().email("Adresse email invalide"),
    phone: z.string().min(8, "Numéro de téléphone invalide"),
    message: z.string().min(10, "Le message est trop court"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = contactSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { success: false, errors: validatedData.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, email, phone, message } = validatedData.data;

        const odooPayload = {
            name: `Contact Général - ${name}`,
            contact_name: name,
            email_from: email,
            phone: phone,
            description: `Message envoyé depuis le formulaire de contact:\n\n${message}`,
            x_intervention: "contact_general",
        };

        console.log('[ODOO PROXY] Pushing Contact to CRM...');
        const leadId = await odoo.createLead(odooPayload);

        return NextResponse.json(
            { success: true, lead_id: leadId, message: 'Message securely synced to CRM' },
            { status: 200 }
        );

    } catch (error) {
        console.error('[API Contact] CRM Sync Error:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}
