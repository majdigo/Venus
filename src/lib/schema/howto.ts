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
    if (slug === 'botox') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/botox#howto",
            "name": "Comment se faire injecter du Botox en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape pour réaliser vos injections de Botox en Tunisie, de la demande de devis jusqu'au résultat final.",
            "totalTime": "P1D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "150" },
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Demande de devis gratuit", "text": "Contactez-nous via le formulaire ou WhatsApp. Un coordinateur vous recontacte sous 24h pour établir votre plan de traitement.", "url": "https://venus-estetika.com/devis?intervention=botox" },
                { "@type": "HowToStep", "position": 2, "name": "Consultation médicale en ligne", "text": "Téléconsultation vidéo avec le médecin esthétique pour analyser vos rides, définir les zones à traiter et valider l'indication." },
                { "@type": "HowToStep", "position": 3, "name": "Arrivée et accueil VIP", "text": "Transfert aéroport, installation à l'hôtel ou directement à la clinique selon votre planning." },
                { "@type": "HowToStep", "position": 4, "name": "Séance d'injection (15-30 min)", "text": "Le médecin réalise les injections de Botox avec des aiguilles ultra-fines. La séance est rapide et sans éviction sociale." },
                { "@type": "HowToStep", "position": 5, "name": "Résultat et suivi", "text": "Les premiers effets sont visibles à J3-J5. Un suivi est assuré à distance. Retouche recommandée après 4 à 6 mois." }
            ]
        };
    }
    if (slug === 'acide-hyaluronique') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique#howto",
            "name": "Comment se faire injecter de l'acide hyaluronique en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape pour réaliser vos injections d'acide hyaluronique en Tunisie, du bilan esthétique au résultat.",
            "totalTime": "P1D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "200" },
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Demande de devis gratuit", "text": "Contactez-nous via le formulaire ou WhatsApp avec des photos de face et profil. Un coordinateur vous recontacte sous 24h.", "url": "https://venus-estetika.com/devis?intervention=acide-hyaluronique" },
                { "@type": "HowToStep", "position": 2, "name": "Bilan esthétique médical", "text": "Analyse de votre visage par le médecin : zones à traiter, volume de produit nécessaire, technique (comblement ou volumétrie)." },
                { "@type": "HowToStep", "position": 3, "name": "Arrivée et accueil VIP", "text": "Transfert aéroport depuis Tunis et installation dans votre hôtel partenaire ou directement à la clinique." },
                { "@type": "HowToStep", "position": 4, "name": "Séance d'injection (30-45 min)", "text": "Application d'une crème anesthésiante puis injections précises d'acide hyaluronique. Résultat immédiatement visible." },
                { "@type": "HowToStep", "position": 5, "name": "Suivi et entretien", "text": "Légères rougeurs 24-48h. Résultat dure 8 à 18 mois selon la zone. Suivi à distance inclus." }
            ]
        };
    }
    if (slug === 'peeling') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/peeling#howto",
            "name": "Comment réaliser un peeling chimique en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape pour un peeling chimique en Tunisie, de la consultation au renouvellement cutané complet.",
            "totalTime": "P7D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "250" },
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Demande de devis gratuit", "text": "Contactez-nous via le formulaire avec des photos de votre peau (taches, cicatrices). Un coordinateur vous recontacte sous 24h.", "url": "https://venus-estetika.com/devis?intervention=peeling" },
                { "@type": "HowToStep", "position": 2, "name": "Bilan cutané médical", "text": "Analyse du type de peau, des indications (taches, cicatrices, teint terne) et choix du type de peeling (TCA ou glycolique)." },
                { "@type": "HowToStep", "position": 3, "name": "Arrivée et accueil VIP", "text": "Transfert aéroport et installation à l'hôtel. Consultation pré-peeling en clinique le même jour." },
                { "@type": "HowToStep", "position": 4, "name": "Séance de peeling (30-60 min)", "text": "Application du produit chimique par le médecin. Légère chaleur ressentie. Neutralisation du produit après la durée requise." },
                { "@type": "HowToStep", "position": 5, "name": "Phase de desquamation et résultat", "text": "Desquamation 5-7 jours (peeling TCA). Application des soins recommandés. Peau neuve, lumineuse et unifiée à J7-J10." }
            ]
        };
    }
    if (slug === 'mesolift') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/mesolift#howto",
            "name": "Comment réaliser un mésolift en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape pour une séance de mésolift en Tunisie, du bilan peau au coup d'éclat immédiat.",
            "totalTime": "P1D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "150" },
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Demande de devis gratuit", "text": "Contactez-nous via le formulaire ou WhatsApp. Un coordinateur vous recontacte sous 24h.", "url": "https://venus-estetika.com/devis?intervention=mesolift" },
                { "@type": "HowToStep", "position": 2, "name": "Bilan peau médical", "text": "Analyse du type et état de la peau par le médecin esthétique. Définition du cocktail personnalisé (vitamines, AH, antioxydants)." },
                { "@type": "HowToStep", "position": 3, "name": "Arrivée et accueil VIP", "text": "Transfert aéroport depuis Tunis et installation dans l'hôtel partenaire ou directement à la clinique." },
                { "@type": "HowToStep", "position": 4, "name": "Séance de mésolift (30-45 min)", "text": "Application d'une crème anesthésiante puis micro-injections du cocktail vitaminé dans le derme. Éclat immédiatement perceptible." },
                { "@type": "HowToStep", "position": 5, "name": "Suivi et protocole", "text": "Légères rougeurs 2-4h. Résultat optimal avec 3 séances espacées de 15 jours. Suivi à distance inclus dans votre forfait." }
            ]
        };
    }
    if (slug === 'bypass-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique#howto",
            "name": "Comment se faire opérer d'un bypass gastrique en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un bypass gastrique en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "4500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp. Un coordinateur médical vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Envoi de votre bilan médical (analyses, IMC, antécédents). Le chirurgien bariatrique évalue votre éligibilité au bypass et vous propose un plan opératoire personnalisé lors d'une téléconsultation vidéo."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5*, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique le lendemain (analyses, endoscopie, consultation anesthésiste)."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale",
                    "text": "Bypass gastrique par voie coelioscopique (environ 2h). Hospitalisation 3-4 nuits en clinique avec suivi médical 24h/24."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5* avec visites de contrôle quotidiennes. Reprise alimentaire progressive sous supervision médicale. Transfert aéroport pour le retour à J6-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi nutritionnel et médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Supplémentation en vitamines et suivi de la perte de poids."
                }
            ]
        };
    }
    if (slug === 'anneau-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique#howto",
            "name": "Comment se faire poser un anneau gastrique en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour la pose d'un anneau gastrique en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp. Un coordinateur médical vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Envoi de votre bilan médical (analyses, IMC, habitudes alimentaires). Le chirurgien évalue votre éligibilité à l'anneau gastrique et votre motivation lors d'une téléconsultation vidéo."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5*, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique le lendemain (analyses, endoscopie gastrique, consultation anesthésiste)."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale",
                    "text": "Pose de l'anneau gastrique par voie coelioscopique (45-60 min). Hospitalisation 1-2 nuits en clinique avec suivi médical."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5* avec visites de contrôle. Premier ajustement de l'anneau à 4-6 semaines. Transfert aéroport pour le retour à J5-J6."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi nutritionnel et médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Ajustements de l'anneau planifiés selon la perte de poids."
                }
            ]
        };
    }
    if (slug === 'abdominoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie#howto",
            "name": "Comment se faire opérer d'une abdominoplastie en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une abdominoplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre abdomen (face et profil). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Le chirurgien analyse vos photos, évalue le degré de relâchement cutané et la présence d'un diastasis. Téléconsultation vidéo pour définir la technique (mini ou complète) et le plan opératoire personnalisé."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5*, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire en clinique et marquage chirurgical debout avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale",
                    "text": "Abdominoplastie sous anesthésie générale (2-3h). Retrait de l'excès de peau, réparation des muscles, repositionnement du nombril. Hospitalisation 1-2 nuits."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5* avec gaine de contention. Visites de contrôle quotidiennes. Position semi-fléchie les premiers jours. Transfert aéroport pour le retour à J6-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Protocole de cicatrisation (gels silicone, massages) inclus dans votre forfait."
                }
            ]
        };
    }
    if (slug === 'liposuccion') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion#howto",
            "name": "Comment se faire opérer d'une liposuccion en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une liposuccion en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2000"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos des zones à traiter. Un coordinateur médical vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Le chirurgien analyse vos photos, identifie les zones de surcharge graisseuse et évalue la qualité de votre peau. Téléconsultation vidéo pour définir les zones à traiter et le volume estimé."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5*, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire en clinique et marquage des zones debout avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale",
                    "text": "Liposuccion par technique tumescente (1-3h selon le nombre de zones). Micro-incisions de 3-4mm. Hospitalisation ambulatoire ou 1 nuit selon le volume aspiré."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5* avec vêtement de contention. Visites de contrôle. Marche dès le lendemain pour favoriser la circulation. Transfert aéroport pour le retour à J5-J6."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois et 6 mois. Conseils nutritionnels et sportifs pour pérenniser le résultat."
                }
            ]
        };
    }
    if (slug === 'bbl') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/bbl#howto",
            "name": "Comment se faire opérer d'un BBL (Brazilian Butt Lift) en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un BBL en Tunisie, de la demande de devis jusqu'au résultat définitif.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "3200"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos (face, profil, dos, 3/4). Un coordinateur médical vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation chirurgien à distance",
                    "text": "Le chirurgien évalue vos réserves de graisse (zones donneuses), la morphologie de vos fesses et vous propose un plan de liposculpture personnalisé (volume à prélever, zones à affiner, projection souhaitée)."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Confirmation du devis. Bilan sanguin à réaliser dans votre pays. Arrêt du tabac 4 semaines avant. Venus Estetika organise le voyage : hôtel 5*, transferts aéroport-clinique-hôtel."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation hôtel 5 étoiles. Consultation préopératoire en clinique : marquage des zones de liposuccion et des zones d'injection, planification du volume (300 à 500 cc par fesse)."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention : liposuccion + réinjection (2h30-3h30)",
                    "text": "Sous anesthésie générale : liposuccion des zones donneuses (ventre, flancs, dos, cuisses), purification de la graisse par centrifugation, puis réinjection en micro-gouttelettes dans les fesses à différents niveaux sous contrôle échographique."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération avec coussin BBL",
                    "text": "1-2 nuits en clinique. Port d'une gaine de compression et du coussin BBL. Interdiction de s'asseoir directement sur les fesses pendant 2 semaines. Drainage lymphatique (3 séances incluses). Consultation de contrôle à J+5."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois. Port de la gaine 6 semaines. Résultat intermédiaire visible dès M+1 (après résorption de l'œdème). Résultat définitif à M+3 : la graisse intégrée est stable définitivement."
                }
            ]
        };
    }
    if (slug === 'mommy-makeover') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover#howto",
            "name": "Comment se faire opérer d'un Mommy Makeover en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un Mommy Makeover en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P10D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "4500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos complètes (face, profil, 3/4 — ventre, poitrine, silhouette). Un coordinateur médical vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Téléconsultation et plan opératoire personnalisé",
                    "text": "Vidéo ou WhatsApp avec votre chirurgien. Discussion de chaque composante du package (abdominoplastie, chirurgie mammaire, liposuccion). Choix des implants mammaires si applicable. Validation du plan chirurgical. Bilan sanguin prescrit."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Confirmation du devis. Bilan sanguin à réaliser dans votre pays. Arrêt du tabac 4 semaines avant. Venus Estetika organise le voyage : hôtel 5*, transferts, accompagnement. Prévoir une aide à domicile pour les 2 premières semaines post-retour."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation hôtel 5 étoiles. Consultation en clinique : marquage chirurgical détaillé, essayage des implants (sizers), validation finale du plan. Rencontre avec l'anesthésiste."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention combinée (3h30-5h30)",
                    "text": "Sous anesthésie générale : 1) Liposuccion des flancs, dos, cuisses (45-60 min), 2) Abdominoplastie avec réparation diastasis et repositionnement ombilic (1h30-2h), 3) Chirurgie mammaire augmentation et/ou lifting (1h-1h30). Hospitalisation 2-3 nuits."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération avec gaine de compression",
                    "text": "Retour hôtel à J+3/J+4 avec gaine de compression abdominale et soutien-gorge de maintien. Drainage lymphatique (2-3 séances incluses). Consultation de contrôle avec le chirurgien à J+5. Retour possible à J+8/J+10."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois. Gaine 6 semaines, soutien-gorge 6 semaines. Reprise travail sédentaire à 2-3 semaines, sport à M+2. Résultat visible dès M+1, définitif M+6 à M+12."
                }
            ]
        };
    }
    if (slug === 'lifting-bras') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras#howto",
            "name": "Comment se faire opérer d'un lifting des bras en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une brachioplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2200"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de vos bras (face interne, bras levés). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Le chirurgien analyse vos photos, évalue le degré d'excès cutané et graisseux et détermine la technique adaptée (mini-lifting, brachioplastie classique ou liposuccion seule). Téléconsultation vidéo pour valider le plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Confirmation du devis. Bilan sanguin à réaliser dans votre pays. Arrêt du tabac 4 semaines avant. Venus Estetika organise le voyage : hôtel 5*, transferts aéroport-clinique-hôtel."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire en clinique et marquage chirurgical avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale (1h30-2h)",
                    "text": "Brachioplastie sous anesthésie générale. Incision face interne du bras, retrait de l'excès cutané et graisseux, liposuccion complémentaire si nécessaire. Suture en deux plans. Hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et suivi à distance (12 mois)",
                    "text": "Récupération à l'hôtel 5* avec manchons de compression. Bras enflés 2 semaines. Pas de port de charges lourdes 3 semaines. Résultat visible dès J+15, définitif M+3 à M+6. Suivi médical à distance pendant 12 mois."
                }
            ]
        };
    }
    if (slug === 'implants-dentaires') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/dentaire/implants-dentaires#howto",
            "name": "Comment se faire poser des implants dentaires en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour la pose d'implants dentaires en Tunisie, de la demande de devis jusqu'à la couronne définitive.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec votre panoramique dentaire si disponible. Un coordinateur médical vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Panoramique dentaire et bilan",
                    "text": "Réalisation ou envoi de votre radiographie panoramique dentaire et scanner 3D (cone beam). Le chirurgien-dentiste évalue le volume osseux disponible et planifie la position de chaque implant."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et consultation en clinique",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Consultation en clinique dentaire : examen buccal complet, radiographies complémentaires si nécessaire, validation du plan de traitement."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Pose de l'implant (1-2h par implant)",
                    "text": "Chirurgie sous anesthésie locale : incision gingivale, forage osseux progressif, insertion de l'implant en titane. Pose d'une prothèse provisoire esthétique le même jour. Greffe osseuse dans le même temps si nécessaire."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Cicatrisation et ostéo-intégration (3-6 mois)",
                    "text": "Phase de cicatrisation osseuse de 3 à 6 mois pendant laquelle l'implant s'intègre à l'os de la mâchoire. Prothèse provisoire en place pour préserver l'esthétique. Suivi à distance avec votre coordinateur."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Pose de la couronne définitive",
                    "text": "Second séjour court (2-3 jours) ou réalisation lors d'un séjour combiné : empreinte numérique, fabrication de la couronne sur mesure au laboratoire, pose et ajustement final. Résultat définitif identique à une dent naturelle."
                }
            ]
        };
    }
    if (slug === 'couronnes') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/dentaire/couronnes#howto",
            "name": "Comment se faire poser des couronnes dentaires en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour la pose de couronnes dentaires en Tunisie, de la demande de devis jusqu'au sourire final.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "250"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Contactez-nous via le formulaire ou WhatsApp avec des photos de vos dents et votre panoramique dentaire. Un coordinateur vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Bilan dentaire à distance",
                    "text": "Le dentiste analyse vos photos et radiographies, détermine le nombre de couronnes nécessaires et le matériau recommandé (zircone, céramique ou E-Max) selon la position des dents."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et préparation des dents (Visite 1)",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Première visite en clinique : préparation des dents (taillage), empreinte numérique et pose de couronnes provisoires."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Fabrication au laboratoire (3-5 jours)",
                    "text": "Les couronnes définitives sont fabriquées sur mesure au laboratoire dentaire partenaire. Profitez de votre séjour à Tunis : visites touristiques, repos à l'hôtel, soins complémentaires."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Pose et ajustement des couronnes définitives (Visite 2-3)",
                    "text": "Essayage des couronnes définitives, vérification de la couleur, de la forme et de l'occlusion. Ajustement si nécessaire. Scellement définitif. Contrôle final et conseils d'entretien. Transfert aéroport pour le retour."
                }
            ]
        };
    }
    if (slug === 'blanchiment') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/dentaire/blanchiment#howto",
            "name": "Comment réaliser un blanchiment dentaire en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un blanchiment dentaire professionnel en Tunisie, de la demande de devis jusqu'au sourire éclatant.",
            "totalTime": "P3D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "200"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Contactez-nous via le formulaire ou WhatsApp avec une photo de votre sourire. Un coordinateur vous recontacte sous 24h pour planifier votre séance.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Arrivée et bilan dentaire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Consultation en clinique : examen buccal, évaluation de la teinte actuelle sur l'échelle VITA, détartrage préalable si nécessaire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Séance de blanchiment au fauteuil (45-60 min)",
                    "text": "Application du gel de blanchiment professionnel (peroxyde d'hydrogène à concentration contrôlée) sur les dents. Activation par lampe LED. 2 à 3 cycles d'application pour un résultat optimal."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Fabrication des gouttières de maintien",
                    "text": "Empreinte de vos arcades dentaires et fabrication de gouttières personnalisées sur mesure. Ces gouttières serviront à appliquer un gel de rappel à domicile pour prolonger les résultats."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Résultat et conseils d'entretien",
                    "text": "Gain immédiat de 2 à 8 teintes. Le dentiste vous remet les gouttières de maintien et le gel de rappel. Conseils : éviter café, thé, vin rouge et tabac pendant 48h. Résultats durables 6 à 12 mois avec entretien."
                }
            ]
        };
    }
    if (slug === 'facettes') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/dentaire/facettes#howto",
            "name": "Comment se faire poser des facettes dentaires en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour la pose de facettes dentaires (Hollywood Smile) en Tunisie, de la demande de devis jusqu'au sourire parfait.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "350"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Contactez-nous via le formulaire ou WhatsApp avec des photos de votre sourire (face, profil, bouche ouverte). Un coordinateur vous recontacte sous 24h avec un devis personnalisé.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Design du sourire à distance",
                    "text": "Le dentiste esthétique analyse vos photos, propose un design de sourire numérique (Digital Smile Design) et recommande le type de facettes adapté (E-Max ou Lumineers). Validation de la forme, couleur et nombre de facettes."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et préparation des dents (Visite 1)",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Première visite : préparation minimale des dents (limage de 0,3 à 0,5 mm pour E-Max, aucun pour Lumineers), empreinte numérique et pose de facettes provisoires."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Fabrication des facettes au laboratoire (3-5 jours)",
                    "text": "Fabrication sur mesure des facettes en céramique pressée au laboratoire dentaire partenaire. Contrôle qualité de la translucidité, de la couleur et de l'ajustement. Profitez de votre séjour à Tunis."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Pose et ajustement des facettes définitives (Visite 2-3)",
                    "text": "Essayage des facettes définitives, vérification de l'esthétique et de l'occlusion. Collage définitif avec résine composite. Polissage final. Contrôle du résultat et conseils d'entretien. Votre Hollywood Smile est prêt."
                }
            ]
        };
    }
    if (slug === 'greffe-cheveux') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-cheveux#howto",
            "name": "Comment se faire greffer des cheveux (FUE Saphir) en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une greffe de cheveux FUE Saphir en Tunisie, de la demande de devis jusqu'au suivi de la repousse.",
            "totalTime": "P5D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2200"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre crâne (face, profil, dessus, arrière). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Analyse photos et classification Norwood",
                    "text": "Le chirurgien analyse vos photos selon l'échelle Norwood, évalue la densité de votre zone donneuse (arrière du crâne) et détermine le nombre de greffons nécessaires. Téléconsultation vidéo pour définir la ligne frontale souhaitée."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et consultation pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Consultation en clinique : examen du cuir chevelu, dessin de la ligne frontale, validation du nombre de greffons et du plan d'implantation."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Extraction des greffons (2-3h)",
                    "text": "Sous anesthésie locale : rasage de la zone donneuse, extraction individuelle des greffons avec micro-punch de 0,7-0,9mm. Les greffons sont conservés dans une solution nutritive à température contrôlée."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Implantation avec lames saphir (3-4h)",
                    "text": "Ouverture des micro-canaux dans la zone receveuse avec lames en saphir (cicatrisation optimale). Implantation manuelle de chaque greffon en respectant l'angle, la direction et la densité naturelle des cheveux."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Soins post-opératoires J1-J5",
                    "text": "Premier lavage en clinique à J+1 avec démonstration du protocole. Kit de soins post-greffe remis (lotion, spray, shampooing spécial). Consignes : ne pas toucher la zone greffée, dormir surélevé, éviter le soleil."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi de la croissance (12 mois)",
                    "text": "Suivi photographique à distance à M1, M3, M6, M9 et M12. Chute normale des cheveux greffés à S2-S4. Repousse visible à M3. 60-70% du résultat à M6-M8. Résultat définitif à M12-M18."
                }
            ]
        };
    }
    if (slug === 'greffe-dhi') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-dhi#howto",
            "name": "Comment se faire greffer des cheveux (DHI) en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une greffe de cheveux DHI au stylo Choi en Tunisie, de la demande de devis jusqu'au suivi de la repousse.",
            "totalTime": "P5D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre crâne (face, profil, dessus, arrière). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Analyse photos et plan DHI personnalisé",
                    "text": "Le chirurgien analyse vos photos, évalue la zone donneuse et détermine si la DHI est la technique la plus adaptée (densité ciblée, ligne frontale, rasage minimal). Téléconsultation vidéo pour valider le plan d'implantation."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et consultation pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Consultation en clinique : examen du cuir chevelu, dessin de la ligne frontale, validation du nombre de greffons et choix des stylos Choi."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Extraction des greffons (2-3h)",
                    "text": "Sous anesthésie locale : rasage minimal de la zone donneuse uniquement. Extraction individuelle des greffons avec micro-punch. Les greffons sont chargés un par un dans les stylos Choi (implanters)."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Implantation directe au stylo Choi (3-4h)",
                    "text": "Implantation directe des greffons avec le stylo Choi, sans ouverture de canaux préalable. Le stylo contrôle simultanément la profondeur, l'angle et la direction de chaque greffon, permettant une densité maximale de 80-90 greffons/cm²."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Soins post-opératoires J1-J5",
                    "text": "Premier lavage en clinique à J+1 avec démonstration du protocole. Kit de soins post-greffe remis. Consignes identiques à la FUE : ne pas toucher la zone greffée, dormir surélevé, éviter le soleil. Reprise d'activité possible dès J3."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi de la croissance (12 mois)",
                    "text": "Suivi photographique à distance à M1, M3, M6, M9 et M12. Chute normale des cheveux greffés à S2-S4. Repousse visible à M3. Densité optimale à M6-M8. Résultat définitif à M12-M18."
                }
            ]
        };
    }
    if (slug === 'greffe-barbe') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-barbe#howto",
            "name": "Comment se faire greffer la barbe en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une greffe de barbe en Tunisie, de la demande de devis jusqu'au résultat définitif.",
            "totalTime": "P4D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "1800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Contactez-nous via le formulaire ou WhatsApp avec des photos de votre visage (face, profil, 3/4) montrant les zones clairsemées. Un coordinateur vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Analyse et design de la barbe",
                    "text": "Le chirurgien analyse vos photos, évalue la zone donneuse (arrière du crâne) et dessine le contour de barbe souhaité. Téléconsultation vidéo pour valider le design, la densité et le nombre de greffons nécessaires."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et consultation pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Consultation en clinique : examen du visage, dessin définitif de la barbe au feutre chirurgical, validation du plan d'implantation."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Extraction et implantation (4-6h)",
                    "text": "Sous anesthésie locale : extraction FUE des greffons de la zone occipitale. Implantation manuelle sur le visage en respectant le sens de pousse naturel du poil de barbe, l'angle et la densité progressive par zone (menton, joues, moustache)."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Soins post-opératoires et consignes",
                    "text": "Kit de soins remis. Consignes : ne pas toucher, frotter ou gratter la zone greffée pendant 10 jours. Micro-croûtes pendant 7-10 jours. Premier rasage doux à la tondeuse après 3 semaines minimum."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi de la croissance (12 mois)",
                    "text": "Suivi photographique à distance à M1, M3, M6 et M12. Chute normale des poils greffés à S2-S4. Repousse visible à M3. Résultat définitif entre M8 et M12. Les poils greffés poussent et se rasent comme des poils de barbe naturels."
                }
            ]
        };
    }
    if (slug === 'lifting-cuisses') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses#howto",
            "name": "Comment se faire opérer d'un lifting des cuisses en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une cruroplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de vos cuisses (face interne, debout). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Le chirurgien analyse vos photos, évalue le degré d'excès cutané et détermine la technique adaptée (lifting horizontal dans le pli de l'aine ou lifting vertical pour les excès importants). Téléconsultation vidéo pour valider le plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Confirmation du devis. Bilan sanguin à réaliser dans votre pays. Arrêt du tabac 4 semaines avant. Venus Estetika organise le voyage : hôtel 5*, transferts aéroport-clinique-hôtel."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire en clinique et marquage chirurgical debout avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale (1h30-2h30)",
                    "text": "Cruroplastie sous anesthésie générale. Incision dans le pli inguinal avec extension possible sur la face interne de la cuisse. Retrait de l'excès cutané, liposuccion complémentaire. Suture en tension contrôlée. Hospitalisation 1-2 nuits."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et suivi à distance (12 mois)",
                    "text": "Récupération à l'hôtel 5* avec gaine de compression. Gonflement 2-3 semaines. Marche dès J+1. Gaine 6 semaines. Résultat visible M+1, définitif M+6. Suivi médical à distance pendant 12 mois."
                }
            ]
        };
    }
    if (slug === 'rhinoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie#howto",
            "name": "Comment se faire opérer d'une rhinoplastie en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une rhinoplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre nez (face, profil, 3/4). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et simulation numérique",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse de la morphologie nasale, simulation numérique du résultat attendu, choix de la technique (ouverte ou fermée) et validation du plan opératoire personnalisé."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5★, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique et consultation préopératoire avec le chirurgien pour validation finale."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale (1h30-2h30)",
                    "text": "Rhinoplastie sous anesthésie générale. Remodelage du cartilage et de l'os nasal selon le plan opératoire. Correction septale si nécessaire. Pose du plâtre nasal. Hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retrait du plâtre",
                    "text": "Récupération à l'hôtel 5★ avec visites de contrôle. Retrait du plâtre nasal à J7. Premiers résultats visibles. Transfert aéroport pour le retour."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Résultat définitif apprécié à 12 mois, après résorption complète de l'œdème."
                }
            ]
        };
    }
    if (slug === 'blepharoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie#howto",
            "name": "Comment se faire opérer d'une blépharoplastie en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une blépharoplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "1800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre regard (face, yeux ouverts et fermés). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse de l'excès de peau et des poches des paupières. Choix entre blépharoplastie supérieure, inférieure ou complète. Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Bilan pré-opératoire complet en clinique. Consultation préopératoire avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Intervention chirurgicale (1h-1h30)",
                    "text": "Blépharoplastie sous anesthésie locale avec sédation ou générale. Incision dans le pli naturel de la paupière. Retrait de l'excès de peau et des poches graisseuses. Suture fine résorbable. Sortie le jour même ou hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★ avec application de compresses froides. Retrait des fils entre J5 et J7. Visites de contrôle. Transfert aéroport pour le retour."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois et 3 mois. Maquillage possible à J10. Résultat définitif apprécié à 3 mois."
                }
            ]
        };
    }
    if (slug === 'lifting-cervico-facial') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial#howto",
            "name": "Comment se faire opérer d'un lifting cervico-facial en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un lifting cervico-facial en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P10D",
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
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre visage (face, profil, 3/4). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et plan de rajeunissement",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse du relâchement cutané du visage et du cou. Évaluation des zones à traiter (bajoues, ovale, cou). Possibilité de combiner avec une blépharoplastie. Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5★, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique. Consultation préopératoire et marquage chirurgical avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale (3-4h)",
                    "text": "Lifting cervico-facial sous anesthésie générale. Incision péri-auriculaire. Décollement et remise en tension du SMAS. Retrait de l'excès cutané. Bandage compressif. Hospitalisation 1-2 nuits."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★. Retrait du bandage compressif à 48-72h. Visites de contrôle quotidiennes. Retrait des fils à J7-J10. Transfert aéroport pour le retour."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Résultat visible dès le retrait du bandage, définitif à 3-6 mois."
                }
            ]
        };
    }
    if (slug === 'otoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/otoplastie#howto",
            "name": "Comment se faire opérer d'une otoplastie en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une otoplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "1500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de vos oreilles (face et dos). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et validation médicale",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse du degré de décollage et de la morphologie des oreilles. Choix de la technique adaptée (plicature, scoring). Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Bilan pré-opératoire en clinique. Consultation préopératoire avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Intervention chirurgicale (1h-1h30)",
                    "text": "Otoplastie sous anesthésie locale avec sédation (adulte) ou générale (enfant). Incision derrière l'oreille. Remodelage du cartilage et repositionnement. Pose du bandage compressif. Sortie le jour même ou hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★ avec bandage compressif pendant 7 jours. Visite de contrôle. Transfert aéroport pour le retour. Port du bandeau de contention nocturne pendant 15 jours supplémentaires."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois. Résultat visible dès le retrait du bandage à J7. Résultat définitif à 1 mois. Les oreilles gardent leur nouvelle position de manière permanente."
                }
            ]
        };
    }
    if (slug === 'lipofilling-visage') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage#howto",
            "name": "Comment se faire opérer d'un lipofilling du visage en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un lipofilling du visage en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2000"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre visage (face, profil, 3/4). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et plan de traitement",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse des volumes du visage et des zones à traiter (cernes, pommettes, tempes, sillons). Définition du plan d'injection personnalisé."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Bilan pré-opératoire en clinique. Consultation préopératoire avec le chirurgien et validation finale du plan d'injection."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Intervention : lipoaspiration + réinjection (1h-1h30)",
                    "text": "Lipofilling sous anesthésie locale avec sédation ou générale. Lipoaspiration douce d'une petite quantité de graisse (ventre, hanches). Purification par centrifugation. Micro-injections précises dans les zones du visage à traiter."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★. Œdème et ecchymoses modérés 5-10 jours. Visites de contrôle. Transfert aéroport pour le retour."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois et 6 mois. Résultat visible dès 1 mois. Résultat définitif à 3-6 mois après stabilisation de la graisse (60-70% s'intègre définitivement)."
                }
            ]
        };
    }
    if (slug === 'genioplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/genioplastie#howto",
            "name": "Comment se faire opérer d'une génioplastie en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une génioplastie en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P6D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2200"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre visage (face et profil). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et analyse du profil",
                    "text": "Téléconsultation vidéo avec le chirurgien. Analyse céphalométrique du profil facial. Choix entre implant mentonnier et ostéotomie. Discussion de la possibilité de combiner avec une rhinoplastie (profiloplastie). Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Bilan pré-opératoire en clinique. Consultation préopératoire avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Intervention chirurgicale (1h-1h30)",
                    "text": "Génioplastie sous anesthésie générale. Incision intra-orale (aucune cicatrice visible). Pose d'implant en silicone ou ostéotomie avec repositionnement osseux. Suture résorbable. Hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★. Alimentation molle pendant 10 jours. Bains de bouche antiseptiques. Œdème du menton 7-10 jours. Visites de contrôle. Transfert aéroport pour le retour."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois et 3 mois. Résultat visible dès 1 mois. Résultat définitif à 2-3 mois après résorption complète de l'œdème."
                }
            ]
        };
    }
    if (slug === 'augmentation-mammaire') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire#howto",
            "name": "Comment se faire opérer d'une augmentation mammaire en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une augmentation mammaire en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre poitrine (face, profil, 3/4). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et choix des implants",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse de votre morphologie. Choix de la forme (rond ou anatomique), du volume, du profil et de la voie d'abord (sous-mammaire, péri-aréolaire ou axillaire). Simulation du résultat."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5★, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique. Essayage des sizers (implants d'essai) pour valider le volume final avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale (1h-1h30)",
                    "text": "Augmentation mammaire sous anesthésie générale. Pose des implants en silicone cohésif certifiés CE. Soutien-gorge médical posé en fin d'intervention. Hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★ avec soutien-gorge médical. Visites de contrôle. Douleurs modérées bien contrôlées. Transfert aéroport pour le retour à J5-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Port du soutien-gorge médical 4-6 semaines. Résultat visible immédiatement, définitif à 3 mois."
                }
            ]
        };
    }
    if (slug === 'reduction-mammaire') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire#howto",
            "name": "Comment se faire opérer d'une réduction mammaire en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour une réduction mammaire en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre poitrine (face, profil, 3/4). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et plan opératoire",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse du volume mammaire, du degré de ptose et de vos souhaits. Choix de la technique (T inversé ou verticale) et du volume cible. Mammographie préalable. Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Organisation du séjour",
                    "text": "Venus Estetika organise votre voyage : billets d'avion (assistance possible), réservation hôtel 5★, transferts aéroport-clinique-hôtel, accompagnement francophone."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel. Bilan pré-opératoire complet en clinique. Marquage chirurgical debout avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Intervention chirurgicale (2h-3h)",
                    "text": "Réduction mammaire sous anesthésie générale. Résection du tissu excédentaire, repositionnement de l'aréole et du mamelon. Pose de drains et soutien-gorge médical. Hospitalisation 1-2 nuits."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★ avec soutien-gorge médical. Retrait des drains à J1-J2. Visites de contrôle. Transfert aéroport pour le retour à J5-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois, 6 mois et 12 mois. Port du soutien-gorge médical 4-6 semaines. Protocole de cicatrisation inclus. Résultat définitif à 6 mois."
                }
            ]
        };
    }
    if (slug === 'lifting-seins') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins#howto",
            "name": "Comment se faire opérer d'un lifting des seins en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un lifting des seins (mastopexie) en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2500"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre poitrine (face, profil, 3/4). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et choix de la technique",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Analyse du degré de ptose. Choix de la technique (péri-aréolaire, verticale ou T inversé) et discussion de l'ajout éventuel d'implants. Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Bilan pré-opératoire complet en clinique. Marquage chirurgical debout avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Intervention chirurgicale (1h30-2h30)",
                    "text": "Lifting des seins sous anesthésie générale. Repositionnement de l'aréole et du mamelon, retrait de l'excès cutané, remodelage du cône mammaire. Pose d'implants si souhaité. Soutien-gorge médical posé en fin d'intervention. Hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★ avec soutien-gorge médical. Visites de contrôle. Douleurs modérées bien contrôlées. Transfert aéroport pour le retour à J5-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois et 6 mois. Port du soutien-gorge médical 4-6 semaines. Protocole de cicatrisation inclus. Résultat définitif à 3-6 mois."
                }
            ]
        };
    }
    if (slug === 'lipofilling-mammaire') {
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire#howto",
            "name": "Comment se faire opérer d'un lipofilling mammaire en Tunisie avec Venus Estetika",
            "description": "Guide étape par étape du parcours patient pour un lipofilling mammaire en Tunisie, de la demande de devis jusqu'au suivi post-opératoire.",
            "totalTime": "P7D",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "2800"
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Demande de devis gratuit",
                    "text": "Remplissez le formulaire de devis en ligne ou contactez-nous par WhatsApp avec des photos de votre poitrine et de votre silhouette (face, profil). Un coordinateur médical vous recontacte sous 24h.",
                    "url": "https://venus-estetika.com/devis-gratuit"
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Consultation et évaluation des réserves graisseuses",
                    "text": "Téléconsultation vidéo avec le chirurgien plasticien. Évaluation de vos réserves graisseuses (zones donneuses) et du volume d'augmentation souhaité. Discussion de la possibilité de combiner avec un lifting des seins. Validation du plan opératoire."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Arrivée et bilan pré-opératoire",
                    "text": "Accueil VIP à l'aéroport de Tunis. Installation à l'hôtel 5★. Bilan pré-opératoire complet en clinique. Mammographie si nécessaire. Consultation préopératoire avec le chirurgien."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Intervention : lipoaspiration + réinjection (2h-2h30)",
                    "text": "Lipofilling mammaire sous anesthésie générale. Lipoaspiration douce des zones donneuses (ventre, hanches, cuisses). Purification de la graisse par centrifugation. Réinjection en micro-gouttelettes dans les seins. Soutien-gorge médical. Hospitalisation 1 nuit."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Récupération et retour",
                    "text": "Récupération à l'hôtel 5★ avec soutien-gorge médical. Ecchymoses zones donneuses 2 semaines. Visites de contrôle. Transfert aéroport pour le retour à J5-J7."
                },
                {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Suivi post-opératoire à distance (12 mois)",
                    "text": "Suivi médical à distance pendant 12 mois : consultations vidéo à 1 mois, 3 mois et 6 mois. Résultat visible immédiatement. Résorption de 30-40% du volume sur 3-6 mois. Résultat définitif à 6 mois. Deuxième séance possible si gain supplémentaire souhaité."
                }
            ]
        };
    }
    return {};
}
