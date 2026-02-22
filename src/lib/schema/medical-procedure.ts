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
    if (slug === 'botox') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/botox#procedure",
            "name": "Botox en Tunisie — Injections Anti-Rides",
            "alternateName": ["Toxine botulique", "Injection botulique", "Neuromodulateur"],
            "description": "Injections de toxine botulique de type A pour le traitement des rides dynamiques (front, rides du lion, pattes d'oie). Séance réalisée par un médecin esthétique qualifié à Tunis. Résultat naturel dès 3 à 5 jours.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Visage",
            "followup": "Aucune éviction sociale. Résultat visible J3-J5. Durée 4-6 mois. Retouche recommandée 2-3x/an.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Lissage des rides dynamiques avec préservation naturelle des expressions faciales.",
            "url": "https://venus-estetika.com/interventions/medecine-esthetique/botox",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/medecine-esthetique/botox",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/medecine-esthetique/botox#offer",
                "name": "Injection Botox — 1 zone",
                "price": "150",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'acide-hyaluronique') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique#procedure",
            "name": "Acide Hyaluronique en Tunisie — Injections de Comblement",
            "alternateName": ["AH", "Filler", "Comblement rides", "Injection lèvres"],
            "description": "Injections d'acide hyaluronique réticulé pour le comblement des rides, l'augmentation des lèvres et la restauration des volumes du visage. Résultat immédiat et naturel. Réversible.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Visage",
            "followup": "Légères rougeurs 24-48h. Résultat immédiat. Durée 8-18 mois selon zone et produit.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Comblement des rides, repulpage des lèvres et restauration des volumes du visage avec un résultat naturel et immédiat.",
            "url": "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique#offer",
                "name": "Injection Acide Hyaluronique — 1 seringue",
                "price": "200",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'peeling') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/peeling#procedure",
            "name": "Peeling Chimique en Tunisie — TCA & Acide Glycolique",
            "alternateName": ["Peeling TCA", "Chemical peel", "Peeling visage"],
            "description": "Peeling chimique réalisé par un médecin esthétique à Tunis : renouvellement cutané en profondeur, traitement des taches pigmentaires, des cicatrices d'acné et des ridules. Peeling moyen TCA ou superficiel glycolique selon indication.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Visage",
            "followup": "Peeling moyen : desquamation 5-7 jours, éviction sociale 1 semaine. Peeling superficiel : léger tiraillement 24h.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Teint plus lumineux, réduction des taches et des cicatrices d'acné, peau lissée et renouvelée.",
            "url": "https://venus-estetika.com/interventions/medecine-esthetique/peeling",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/medecine-esthetique/peeling",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/medecine-esthetique/peeling#offer",
                "name": "Peeling Moyen TCA",
                "price": "250",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'mesolift') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/mesolift#procedure",
            "name": "Mésolift en Tunisie — Mésothérapie du Visage",
            "alternateName": ["Mésothérapie visage", "Skin booster", "Cocktail vitaminé"],
            "description": "Le mésolift (mésothérapie du visage) consiste à injecter un cocktail personnalisé de vitamines, d'acide hyaluronique non réticulé et d'antioxydants dans le derme superficiel. Résultat éclat immédiat, peau revitalisée et hydratée en profondeur.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Visage",
            "followup": "Aucune éviction sociale. Rougeurs 2-4h. Éclat immédiat. Protocole idéal : 3 séances espacées de 15 jours.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Peau hydratée, éclat amélioré, ridules de déshydratation atténuées, teint uniformisé et revitalisé.",
            "url": "https://venus-estetika.com/interventions/medecine-esthetique/mesolift",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/medecine-esthetique/mesolift",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/medecine-esthetique/mesolift#offer",
                "name": "Mésolift — 1 séance",
                "price": "150",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'bypass-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique#procedure",
            "name": "Bypass Gastrique en Tunisie",
            "alternateName": ["Bypass gastrique Roux-en-Y", "Gastric bypass", "Court-circuit gastrique"],
            "description": "Le bypass gastrique est une intervention bariatrique qui consiste à créer une petite poche gastrique et à dériver une partie de l'intestin grêle, combinant restriction alimentaire et malabsorption. Réalisé par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Estomac",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Obésité morbide (IMC > 40) ou obésité sévère (IMC > 35) avec comorbidités (diabète de type 2, hypertension, apnée du sommeil, dyslipidémie)"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Troubles alimentaires non traités, dépendance active à l'alcool ou au tabac, grossesse en cours, contre-indications à l'anesthésie générale, pathologie psychiatrique non stabilisée"
            },
            "preparation": "Bilan pré-opératoire complet (analyses sanguines, échographie abdominale, endoscopie gastrique, évaluation psychologique et nutritionnelle). Régime hyper-protéiné 2 semaines avant l'intervention. Arrêt du tabac 4 semaines avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale par voie coelioscopique. Durée : environ 2 heures. Création d'une petite poche gastrique (30 ml) et anastomose avec l'intestin grêle en Y (anse alimentaire de 150 cm).",
            "followup": "Hospitalisation 3-4 nuits en clinique. Reprise alimentaire progressive (liquide → mixé → solide sur 4 semaines). Supplémentation en vitamines et minéraux à vie. Suivi nutritionnel à 1 mois, 3 mois, 6 mois et 12 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Perte de 60 à 70% de l'excès de poids dans les 12 à 18 mois suivant l'intervention. Taux de rémission du diabète de type 2 supérieur à 80%. Amélioration significative de l'hypertension et de l'apnée du sommeil.",
            "image": "https://venus-estetika.com/images/interventions/bypass-gastrique-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique",
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
                "@id": "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique#offer",
                "name": "Bypass Gastrique Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, hospitalisation 3-4 nuits, hôtel 5* (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "4500",
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
    if (slug === 'anneau-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique#procedure",
            "name": "Anneau Gastrique en Tunisie",
            "alternateName": ["Gastroplastie par anneau", "Gastric banding", "Anneau gastrique ajustable"],
            "description": "L'anneau gastrique est une intervention bariatrique réversible qui consiste à placer un anneau ajustable autour de la partie supérieure de l'estomac pour réduire la quantité d'aliments ingérés. Réalisé par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Estomac",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Obésité modérée à sévère (IMC entre 30 et 40), patient motivé et prêt à modifier durablement ses habitudes alimentaires"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Troubles alimentaires non traités (boulimie, grignotage compulsif), hernie hiatale volumineuse, contre-indications à l'anesthésie générale, manque de motivation pour le suivi"
            },
            "preparation": "Bilan pré-opératoire complet (analyses sanguines, échographie abdominale, endoscopie gastrique, évaluation psychologique et nutritionnelle). Régime hyper-protéiné 1 semaine avant l'intervention. Arrêt du tabac 4 semaines avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale par voie coelioscopique (3 à 4 incisions de 5-12mm). Durée : 45 à 60 minutes. Placement d'un anneau en silicone ajustable autour de la partie supérieure de l'estomac, relié à un boîtier sous-cutané.",
            "followup": "Hospitalisation 1-2 nuits en clinique. Reprise alimentaire progressive (liquide → mixé → solide sur 3 semaines). Ajustements réguliers de l'anneau (3-5 la première année). Suivi nutritionnel à 1 mois, 3 mois, 6 mois et 12 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Perte de 40 à 50% de l'excès de poids dans les 12 à 24 mois suivant l'intervention. Perte de poids progressive et régulière. Intervention entièrement réversible.",
            "image": "https://venus-estetika.com/images/interventions/anneau-gastrique-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique",
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
                "@id": "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique#offer",
                "name": "Anneau Gastrique Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, hospitalisation 1-2 nuits, hôtel 5* (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "2800",
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
    if (slug === 'abdominoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie#procedure",
            "name": "Abdominoplastie en Tunisie",
            "alternateName": ["Plastie abdominale", "Tummy tuck", "Dermolipectomie abdominale"],
            "description": "L'abdominoplastie est une intervention de chirurgie esthétique qui consiste à retirer l'excès de peau et de graisse au niveau de l'abdomen et à resserrer les muscles abdominaux pour retrouver un ventre plat et tonique. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Abdomen",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Excès de peau et de graisse abdominal résistant au sport, relâchement post-grossesse, diastasis des grands droits, séquelles de perte de poids importante"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Grossesse en cours ou projet de grossesse à court terme, obésité non stabilisée, troubles de la coagulation, contre-indications à l'anesthésie générale, tabagisme actif"
            },
            "preparation": "Bilan pré-opératoire complet (analyses sanguines, consultation anesthésie). Arrêt du tabac 4 semaines avant. Stabilisation du poids depuis au moins 6 mois. Photos pré-opératoires et marquage chirurgical la veille.",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 2 à 3 heures. Incision basse dans le pli du bikini. Décollement cutané, réparation du diastasis des grands droits, retrait de l'excès de peau et de graisse, repositionnement du nombril.",
            "followup": "Hospitalisation 1-2 nuits en clinique. Port de la gaine de contention abdominale pendant 4-6 semaines. Marche dès le lendemain (position semi-fléchie). Suivi post-opératoire à 1 mois, 3 mois, 6 mois et 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Ventre plat et tonique, muscles abdominaux resserrés, excès de peau éliminé. Cicatrice basse dissimulée sous le bikini. Résultat définitif à 3-6 mois.",
            "image": "https://venus-estetika.com/images/interventions/abdominoplastie-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie#offer",
                "name": "Abdominoplastie Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, hospitalisation 1-2 nuits, gaine de contention, hôtel 5* (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "2800",
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
    if (slug === 'liposuccion') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion#procedure",
            "name": "Liposuccion en Tunisie",
            "alternateName": ["Lipoaspiration", "Liposculpture", "Liposuction"],
            "description": "La liposuccion est une intervention de chirurgie esthétique qui consiste à aspirer les amas graisseux localisés résistants aux régimes et au sport, pour affiner et sculpter la silhouette. Technique multi-zones réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Corps (multizones)",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Amas graisseux localisés résistants au sport et aux régimes (ventre, flancs, cuisses, bras, dos, double menton, culotte de cheval)"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Obésité (la liposuccion n'est pas un traitement de l'obésité), troubles de la coagulation, grossesse en cours, contre-indications à l'anesthésie générale, attentes irréalistes"
            },
            "preparation": "Bilan pré-opératoire complet (analyses sanguines, consultation anesthésie). Arrêt du tabac 4 semaines avant. Photos pré-opératoires et marquage des zones à traiter debout la veille de l'intervention.",
            "howPerformed": "Intervention réalisée sous anesthésie générale ou locale selon l'étendue. Durée : 1 à 3 heures selon le nombre de zones. Technique tumescente avec canules fines. Aspiration contrôlée des cellules graisseuses via des micro-incisions de 3-4mm.",
            "followup": "Hospitalisation ambulatoire ou 1 nuit selon le volume aspiré. Port du vêtement de contention pendant 4-6 semaines. Ecchymoses et œdème pendant 2-3 semaines. Suivi post-opératoire à 1 mois, 3 mois et 6 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Silhouette affinée et sculptée, amas graisseux éliminés définitivement. Résultat visible dès 1 mois, définitif à 3 mois après résorption de l'œdème.",
            "image": "https://venus-estetika.com/images/interventions/liposuccion-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion#offer",
                "name": "Liposuccion Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, hospitalisation, vêtement de contention, hôtel 5* (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "2000",
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
    if (slug === 'bbl') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/bbl#procedure",
            "name": "BBL en Tunisie (Brazilian Butt Lift) — Augmentation des Fesses par Lipofilling",
            "alternateName": ["Brazilian Butt Lift", "Lipofilling fessier", "Augmentation fesses par graisse"],
            "description": "Le Brazilian Butt Lift (BBL) est une intervention de chirurgie esthétique qui augmente le volume et améliore la forme des fesses en utilisant la propre graisse du patient. Intervention deux-en-un : liposuccion des zones en excès puis réinjection de la graisse purifiée dans les fesses. Résultat naturel, sans corps étranger. Réalisée par nos chirurgiens certifiés en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Fesses",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Fesses plates ou peu volumineuses avec réserves de graisse suffisantes dans les zones donneuses (ventre, hanches, dos, cuisses)"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Réserves de graisse insuffisantes (patientes très minces), troubles de la coagulation, grossesse en cours, contre-indications à l'anesthésie générale, tabagisme actif"
            },
            "preparation": "Consultation à distance avec photos (face, profil, dos, 3/4). Bilan sanguin. Arrêt du tabac 4 semaines avant (le tabac réduit la survie des cellules graisseuses). Pas de régime amaigrissant — les réserves de graisse doivent être maintenues.",
            "howPerformed": "Intervention sous anesthésie générale (2h30-3h30). Phase 1 : liposuccion de 2 à 4 litres de graisse des zones donneuses par technique tumescente. Phase 2 : purification par centrifugation. Phase 3 : réinjection en micro-gouttelettes à différents niveaux (sous-cutané, intramusculaire) sous contrôle échographique.",
            "followup": "1-2 nuits en clinique. Port d'une gaine de compression et coussin BBL. Interdiction de s'asseoir directement sur les fesses pendant 2 semaines. Drainage lymphatique (3 séances incluses). Résultat intermédiaire à M+1, définitif à M+3. Suivi à distance 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Fesses galbées et volumineuses avec un résultat 100% naturel. 60-70% de la graisse réinjectée survit définitivement. Double bénéfice : silhouette affinée par la liposuccion et fesses sculptées.",
            "image": "https://venus-estetika.com/images/interventions/bbl-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-silhouette/bbl",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-silhouette/bbl",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/bbl#offer",
                "name": "BBL (Brazilian Butt Lift) Tout Compris",
                "description": "Séjour tout compris : liposuccion + lipofilling fesses, anesthésie, hospitalisation 1-2 nuits, hôtel 5* (5 nuits), transferts aéroport, gaine + coussin BBL, 3 drainages lymphatiques, suivi 12 mois",
                "price": "3200",
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
    if (slug === 'mommy-makeover') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover#procedure",
            "name": "Mommy Makeover en Tunisie — Chirurgie Post-Grossesse Complète",
            "alternateName": ["Chirurgie post-grossesse", "Package maman", "Mommy Makeover"],
            "description": "Le Mommy Makeover est un ensemble d'interventions réalisées en une seule session opératoire pour corriger les transformations corporelles causées par la grossesse et l'allaitement : abdominoplastie, chirurgie mammaire et liposuccion. Package personnalisé, une seule anesthésie, une seule convalescence. Réalisé par nos chirurgiens certifiés en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Corps (Abdomen + Poitrine)",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Séquelles corporelles de la grossesse et de l'allaitement : diastasis des grands droits, excès de peau abdominale, ptôse mammaire, perte de volume mammaire, amas graisseux résistants. Poids stable, projet familial terminé."
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Grossesse future envisagée, poids instable, moins de 6 mois post-accouchement, allaitement en cours, tabagisme actif, contre-indications à l'anesthésie générale"
            },
            "preparation": "Consultation à distance avec photos complètes (face, profil, 3/4 — ventre, poitrine, silhouette). Téléconsultation chirurgien pour composition du package personnalisé. Bilan sanguin. Arrêt du tabac 4 semaines avant. Prévoir une aide à domicile les 2 premières semaines post-retour.",
            "howPerformed": "Intervention sous anesthésie générale (3h30-5h30). Ordre opératoire : 1) Liposuccion (flancs, dos, cuisses) 45-60 min, 2) Abdominoplastie (retrait peau + réparation diastasis + repositionnement ombilic) 1h30-2h, 3) Chirurgie mammaire (augmentation et/ou lifting) 1h-1h30. Incision abdominale bikini, drains posés.",
            "followup": "2-3 nuits en clinique. Gaine de compression abdominale + soutien-gorge de maintien 6 semaines. Drainage lymphatique (2-3 séances incluses). Reprise travail sédentaire 2-3 semaines. Résultat visible dès M+1, définitif M+6 à M+12. Suivi à distance 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Transformation complète en une seule intervention : ventre plat, poitrine regalbée, silhouette affinée. Taux de satisfaction le plus élevé de la chirurgie esthétique (98%). Résultat harmonieux et proportionnel.",
            "image": "https://venus-estetika.com/images/interventions/mommy-makeover-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover#offer",
                "name": "Mommy Makeover Classique Tout Compris",
                "description": "Séjour tout compris : abdominoplastie + augmentation mammaire + liposuccion, anesthésie, hospitalisation 3 nuits, hôtel 5* (5 nuits), transferts aéroport, gaine + soutien-gorge, 3 drainages lymphatiques, suivi 12 mois",
                "price": "4500",
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
    if (slug === 'lifting-bras') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras#procedure",
            "name": "Lifting des Bras (Brachioplastie) en Tunisie",
            "alternateName": ["Brachioplastie", "Lifting brachial", "Plastie des bras"],
            "description": "La brachioplastie retire l'excès de peau et de graisse de la face interne des bras (effet « chauve-souris »). Intervention fréquemment demandée après une perte de poids importante ou liée au vieillissement cutané. Cicatrice cachée sur la face interne du bras. Réalisée par nos chirurgiens certifiés en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Bras",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Excès cutané et graisseux de la face interne des bras après perte de poids massive (post-bariatrique) ou vieillissement cutané"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Troubles de la coagulation, infection cutanée active, contre-indications à l'anesthésie générale, perte de poids non stabilisée"
            },
            "preparation": "Consultation à distance avec photos des bras. Bilan sanguin. Arrêt du tabac 4 semaines avant. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention sous anesthésie générale (1h30-2h). Incision face interne du bras (cachée le bras le long du corps). Retrait de l'excès cutané et graisseux. Liposuccion complémentaire si nécessaire. Suture en deux plans.",
            "followup": "Manchons de compression 4 semaines. Bras enflés et ecchymosés 2 semaines. Pas de port de charges lourdes 3 semaines. Résultat visible dès J+15, définitif M+3 à M+6. Suivi à distance 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Bras lisses et fermes. Cicatrice face interne, cachée quand les bras sont le long du corps. Résultat définitif et durable.",
            "image": "https://venus-estetika.com/images/interventions/lifting-bras-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras#offer",
                "name": "Brachioplastie Bilatérale Tout Compris",
                "description": "Séjour tout compris : brachioplastie bilatérale, anesthésie, hospitalisation 1 nuit, hôtel 5* (4 nuits), transferts aéroport, manchons de compression, suivi 12 mois",
                "price": "2200",
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
    if (slug === 'lifting-cuisses') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses#procedure",
            "name": "Lifting des Cuisses (Cruroplastie) en Tunisie",
            "alternateName": ["Cruroplastie", "Lifting crural", "Plastie des cuisses"],
            "description": "La cruroplastie retire l'excès de peau et de graisse de la face interne des cuisses. Intervention fréquemment demandée après perte de poids massive ou liée au vieillissement cutané. Cicatrice dissimulée dans le pli inguinal. Réalisée par nos chirurgiens certifiés en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Cuisses",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Excès cutané et graisseux de la face interne des cuisses après perte de poids massive (post-bariatrique) ou vieillissement cutané"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Troubles de la coagulation, infection cutanée active, contre-indications à l'anesthésie générale, perte de poids non stabilisée"
            },
            "preparation": "Consultation à distance avec photos des cuisses. Bilan sanguin. Arrêt du tabac 4 semaines avant. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention sous anesthésie générale (1h30-2h30). Incision dans le pli inguinal avec extension possible sur la face interne de la cuisse selon l'excès. Retrait de l'excès cutané. Liposuccion complémentaire fréquente. Suture en tension contrôlée.",
            "followup": "1-2 nuits en clinique. Gaine de compression 6 semaines. Gonflement et ecchymoses 2-3 semaines. Marche dès J+1 (jambes écartées les premiers jours). Résultat visible M+1, définitif M+6. Suivi à distance 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Cuisses fermes et galbées. Cicatrice dans le pli inguinal, cachée en sous-vêtements. Résultat définitif et durable.",
            "image": "https://venus-estetika.com/images/interventions/lifting-cuisses-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses#offer",
                "name": "Cruroplastie Bilatérale Tout Compris",
                "description": "Séjour tout compris : cruroplastie bilatérale, anesthésie, hospitalisation 1-2 nuits, hôtel 5* (5 nuits), transferts aéroport, gaine de compression, suivi 12 mois",
                "price": "2500",
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
