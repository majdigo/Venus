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
    return {};
}
