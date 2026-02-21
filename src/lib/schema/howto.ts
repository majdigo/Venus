export function getHowToData(slug: string) {
    if (slug === 'sleeve-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique#howto",
            "name": "Comment se faire opérer d'une sleeve gastrique en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une sleeve gastrique en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "3500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp. Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Envoi de votre bilan médical (analyses, photos). Le chirurgien évalue votre éligibilité et vous propose un plan opératoire personnalisé."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5*, transferts aéroport-clinique-hôtel."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique le lendemain."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale",
                    "text": "Sleeve gastrique par voie coelioscopique (60-90 min). Hospitalisation 2-3 nuits en clinique avec suivi médical 24h/24."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5* avec visites de contrôle. Transfert aéroport pour le retour à J5-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance",
                    "text": "Suivi nutritionnel et médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois."
                }
            ]
        };
    }
    return {};
}
