export function getMedicalProcedureData(slug: string) {
    // In a real app, fetch from CMS based on slug.
    // This is the static representation based on Claude's specifications.
    if (slug === 'sleeve-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique#procedure",
            "name": "Sleeve Gastrique en Tunisie",
            "alternateName": ["Gastrectomie longitudinale", "Sleeve gastrectomy"],
            "description": "La sleeve gastrique est une intervention bariatrique qui consiste à retirer environ 75% de l'estomac pour créer un tube gastrique étroit, réduisant significativement la capacité alimentaire. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Estomac",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Obésité morbide (IMC > 35) ou obésité sévère (IMC > 30) avec comorbidités"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Troubles alimentaires non traités, dépendance active à l'alcool, grossesse en cours, contre-indications à l'anesthésie générale"
            },
            "preparation": "Bilan pré-opératoire complet (analyses sanguines, échographie abdominale, endoscopie gastrique, évaluation psychologique). Régime hyper-protéiné 2 semaines avant l'intervention. Arrêt du tabac 4 semaines avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale par voie coelioscopique (3 à 5 incisions de 5-12mm). Durée : 60 à 90 minutes. Résection de la grande courbure gastrique à l'aide d'une agrafeuse linéaire.",
            "followup": "Hospitalisation 2-3 nuits en clinique. Reprise alimentaire progressive (liquide → mixé → solide sur 4 semaines). Suivi nutritionnel à 1 mois, 3 mois, 6 mois et 12 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Perte de 50 à 60% de l'excès de poids dans les 12 à 18 mois suivant l'intervention. Amélioration ou rémission du diabète de type 2, de l'hypertension et de l'apnée du sommeil.",
            "image": "https://venus-estetika.com/images/interventions/sleeve-gastrique-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique",
            "performer": {
                "@type": "Physician",
                "@id": "https://venus-estetika.com/chirurgiens/dr-balti#physician"
            },
            "location": {
                "@type": "MedicalClinic",
                "@id": "https://venus-estetika.com/#clinic"
            },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique#offer",
                "name": "Sleeve Gastrique Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, hospitalisation 2-3 nuits, hôtel 5* (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "3500",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-01-01",
                "seller": {
                    "@type": "MedicalClinic",
                    "@id": "https://venus-estetika.com/#clinic"
                }
            }
        };
    }
    return {};
}
