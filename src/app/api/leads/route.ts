import { NextResponse } from 'next/server';
import { fullQuoteSchema } from '@/lib/validations/quote-schemas';
import { odoo } from '@/lib/api/odoo-rpc';
import { sendConfirmationEmail } from '@/lib/email/templates';
import { notifyTeam } from '@/lib/notifications/slack';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Server-side Zod Validation
        const validatedData = fullQuoteSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { success: false, errors: validatedData.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const data = validatedData.data;

        // 2. Formatting the deep dynamic medical data payload for Odoo CRM
        const medicalDataPayload = {
            age: data.age,
            gender: data.gender,
            // Bariatric
            weight: data.weight,
            height: data.height,
            // Breast
            currentSize: data.currentSize,
            desiredSize: data.desiredSize,
            ptosis: data.ptosis,
            // Body Contour (Silhouette)
            targetZones: data.targetZones,
            weightFluctuation: data.weightFluctuation,
            pregnancies: data.pregnancies,
            // Face
            faceIssues: data.faceIssues,
            previousFaceSurgery: data.previousFaceSurgery,
            // Hair
            hairLossType: data.hairLossType,
            beardTransplant: data.beardTransplant,
            // Dental
            dentalNeeds: data.dentalNeeds,
            jawIssues: data.jawIssues
        };

        // Filter out undefined values to keep the Odoo payload clean
        const cleanedMedicalData = Object.fromEntries(
            Object.entries(medicalDataPayload).filter(([_, v]) => v != null)
        );

        // 3. Creating the exact Odoo 'crm.lead' Payload combining fields safely
        const odooPayload = {
            name: `Devis Web - ${data.intervention} - ${data.firstName} ${data.lastName}`,
            email_from: data.email,
            phone: data.phone,
            description: `${data.message || "Demande classique."}\n\n=== Données Patient ===\nPays: ${data.country}\nSexe: ${data.gender || 'N/A'}\nAge: ${data.age || 'N/A'}\n\n=== Données Médicales ===\n${JSON.stringify(cleanedMedicalData, null, 2)}`,
            x_intervention: data.intervention,
            x_preferred_contact: data.preferredContact,
            x_rgpd_consent: true,
            x_marketing_consent: data.consentMarketing || false,
        };

        // 4. Send to Odoo via XML-RPC
        console.log('[ODOO PROXY] Pushing Payload To CRM...');
        const leadId = await odoo.createLead(odooPayload);
        console.log(`[ODOO PROXY] Lead created successfully with ID: ${leadId}`);

        // 5. Generate transaction ID for GTM Tracking
        const transactionId = `VE-2026-${leadId}`;

        // 6. Send notifications asynchronously (don't block the response)
        Promise.all([
            sendConfirmationEmail({
                to: data.email,
                firstName: data.firstName,
                intervention: data.intervention,
                leadRef: transactionId,
            }),
            notifyTeam({
                leadId: typeof leadId === 'number' ? leadId : parseInt(leadId as any) || 0,
                name: `${data.firstName} ${data.lastName}`,
                intervention: data.intervention,
                score: 10, // Simulated initial score
                source: 'Direct',
                device: 'Inconnu',
            })
        ]).catch(err => console.error('[NOTIFICATIONS] Background error:', err));

        return NextResponse.json(
            { success: true, transaction_id: transactionId, lead_id: leadId, message: 'Lead securely synced to CRM' },
            { status: 200 }
        );

    } catch (error) {
        console.error('[API Leads] CRM Sync Error:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur interne du serveur lors de la synchronisation CRM' },
            { status: 500 }
        );
    }
}
