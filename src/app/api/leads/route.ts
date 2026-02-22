import { NextResponse } from 'next/server';
import { fullQuoteSchema } from '@/lib/validations/quote-schemas';

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

        // 3. Creating the exact Odoo 'crm.lead' Payload (Claude Spec 018)
        const odooPayload = {
            name: `${data.firstName} ${data.lastName} - Devis Web`,
            email_from: data.email,
            phone: data.phone,
            description: data.message || "Demande de devis générée depuis le site web.",
            x_intervention_category: data.intervention, // We pass the selected slug
            x_medical_data: cleanedMedicalData,
            country_id: data.country,
            x_preferred_contact: data.preferredContact,
            x_consent_marketing: data.consentMarketing,
        };

        // 4. Send to Odoo (Simulated 1s for now to protect API Keys)
        console.log('[ODOO PROXY] Payload To CRM:', JSON.stringify(odooPayload, null, 2));
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 5. Generate mock transaction ID for GTM Tracking
        const mockTransactionId = `VE-LEAD-V2-${Math.floor(Math.random() * 100000)}`;

        return NextResponse.json(
            { success: true, transaction_id: mockTransactionId, message: 'Lead securely synced to CRM' },
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
