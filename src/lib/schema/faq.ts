export function getFaqData(slug: string) {
    if (slug === 'sleeve-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une sleeve gastrique en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une sleeve gastrique en Tunisie chez Venus Estetika est de 3 500€ tout compris (chirurgie, anesthésie, hospitalisation, hôtel 5* pour 5 nuits, transferts aéroport, suivi post-opératoire 12 mois). En comparaison, la même intervention coûte entre 8 000€ et 15 000€ en France."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelles sont les conditions pour être éligible à une sleeve gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La sleeve gastrique est recommandée pour les patients ayant un IMC supérieur à 35 (obésité morbide) ou un IMC supérieur à 30 avec des comorbidités (diabète de type 2, hypertension, apnée du sommeil). Un bilan pré-opératoire complet est réalisé avant toute décision."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de poids peut-on perdre après une sleeve gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "En moyenne, les patients perdent entre 50% et 60% de leur excès de poids dans les 12 à 18 mois suivant la sleeve gastrique. Par exemple, un patient de 120 kg avec un poids idéal de 70 kg (excès de 50 kg) peut espérer perdre 25 à 30 kg."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment se déroule le séjour médical en Tunisie pour une sleeve ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le séjour dure en moyenne 5 à 7 jours : Jour 1 - Accueil à l'aéroport et transfert à l'hôtel 5*. Jour 2 - Bilan pré-opératoire et consultation avec le chirurgien. Jour 3 - Intervention (60-90 min sous coelioscopie). Jours 3-5 - Hospitalisation et surveillance. Jours 5-7 - Récupération à l'hôtel avec suivi médical quotidien. Le suivi post-opératoire se poursuit à distance pendant 12 mois."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La sleeve gastrique en Tunisie est-elle sûre ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui. Venus Estetika travaille exclusivement avec des chirurgiens diplômés en France et des cliniques agréées par le Ministère de la Santé tunisien (Clinique Pasteur, Clinique Internationale Hannibal, Centre Hospitalier International Carthagène). Le taux de complications est comparable aux standards européens. Un suivi post-opératoire de 12 mois est systématiquement inclus."
                    }
                }
            ]
        };
    }
    return {};
}
