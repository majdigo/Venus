import { NextResponse } from 'next/server';
import { fullQuoteSchema } from '@/lib/validations/quote-schemas';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Validation Zod Côté Serveur
        const validatedData = fullQuoteSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { success: false, errors: validatedData.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const data = validatedData.data;

        // 2. Simulation Appel API Odoo (Mock 1 seconde)
        // Dans le Sprint 5 réel, ici nous utiliserons Odoo XML-RPC ou REST
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 3. Log de la structure Odoo attendue (pour vérification)
        const odooPayload = {
            name: `${data.intervention} - ${data.firstName} ${data.lastName}`,
            email_from: data.email,
            phone: data.phone,
            description: `Avis médical requis.
Age: ${data.age}
Genre: ${data.gender}
Poids: ${data.weight || 'N/A'} kg
Taille: ${data.height || 'N/A'} cm
Chirurgie Précédente: ${data.previousSurgery ? 'Oui' : 'Non'}
Détails: ${data.previousSurgeryDetails || 'N/A'}
Date Souhaitée: ${data.desiredDate || 'N/A'}
Message: ${data.message || 'Aucun'}`,
            country_id: data.country, // Nécessitera un mapping Odoo ID
            x_preferred_contact: data.preferredContact,
            x_consent_marketing: data.consentMarketing,
        };

        console.log('[ODOO MOCK] Nouveau Lead reçu et mappé :', odooPayload);

        // 4. Génération d'un ID Transaction Mocké pour le GTM
        const mockTransactionId = `VE-LEAD-${Math.floor(Math.random() * 100000)}`;

        return NextResponse.json(
            { success: true, transaction_id: mockTransactionId, message: 'Devis envoyé avec succès' },
            { status: 200 }
        );

    } catch (error) {
        console.error('[API Leads] Erreur de traitement:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}
