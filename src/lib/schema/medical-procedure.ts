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
                "price": "4200",
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
                "price": "1800",
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
                "price": "1500",
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
    if (slug === 'implants-dentaires') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/dentaire/implants-dentaires#procedure",
            "name": "Implants Dentaires en Tunisie",
            "alternateName": ["Implant dentaire", "Dental implant", "Implantologie dentaire"],
            "description": "Pose d'implants dentaires en titane de marque premium par des chirurgiens-dentistes qualifiés en Tunisie. Technique d'ostéo-intégration garantissant une durabilité à vie. Greffe osseuse disponible si nécessaire.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Mâchoire",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Dent manquante, édentement partiel ou total, remplacement de prothèses amovibles, échec d'un bridge dentaire"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Volume osseux insuffisant sans possibilité de greffe, diabète non contrôlé, tabagisme actif, traitement par bisphosphonates, maladie parodontale non traitée"
            },
            "preparation": "Radiographie panoramique et scanner 3D (cone beam) pour évaluer le volume osseux. Bilan bucco-dentaire complet. Traitement des caries et maladies parodontales préalable. Arrêt du tabac recommandé.",
            "howPerformed": "Intervention réalisée sous anesthésie locale. Durée : 1 à 2 heures par implant. Incision gingivale, forage osseux progressif et insertion de l'implant en titane. Suture et pose d'une prothèse provisoire. Phase d'ostéo-intégration de 3 à 6 mois avant la pose de la couronne définitive.",
            "followup": "Contrôle à 7 jours pour retrait des points. Suivi radiographique à 3 et 6 mois pour vérifier l'ostéo-intégration. Pose de la couronne définitive après validation. Suivi annuel recommandé.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Remplacement définitif de la dent manquante avec un résultat esthétique et fonctionnel identique à une dent naturelle. Durée de vie de l'implant : à vie avec un entretien approprié.",
            "image": "https://venus-estetika.com/images/interventions/implants-dentaires-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/dentaire/implants-dentaires",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/dentaire/implants-dentaires",
            "location": {
                "@type": "MedicalClinic",
                "@id": "https://venus-estetika.com/#clinic"
            },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/dentaire/implants-dentaires#offer",
                "name": "Implant Dentaire — par implant",
                "description": "Prix par implant tout compris : implant titane premium, pilier, chirurgie, anesthésie locale, radiographie panoramique, hôtel, transferts",
                "price": "600",
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
    if (slug === 'couronnes') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/dentaire/couronnes#procedure",
            "name": "Couronnes Dentaires en Tunisie",
            "alternateName": ["Couronne dentaire", "Dental crown", "Prothèse dentaire fixe"],
            "description": "Pose de couronnes dentaires en zircone, céramique ou E-Max par des dentistes qualifiés en Tunisie. Fabrication sur mesure au laboratoire avec empreinte numérique pour un ajustement parfait et un rendu naturel.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Dents",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Dent fragilisée par une carie importante, dent dévitalisée, dent fracturée, remplacement d'une ancienne couronne, finition sur implant dentaire"
            },
            "followup": "Contrôle d'occlusion et ajustement si nécessaire dans les 2 semaines suivant la pose. Hygiène bucco-dentaire rigoureuse. Contrôle annuel recommandé.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Restauration esthétique et fonctionnelle de la dent. Durée de vie de 10 à 15 ans selon le matériau et l'entretien. Résultat naturel indiscernable d'une dent saine.",
            "image": "https://venus-estetika.com/images/interventions/couronnes-dentaires-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/dentaire/couronnes",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/dentaire/couronnes",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/dentaire/couronnes#offer",
                "name": "Couronne Dentaire — par couronne",
                "description": "Prix par couronne tout compris : préparation, empreinte numérique, fabrication sur mesure, pose et ajustement",
                "price": "250",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-01-01",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'blanchiment') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/dentaire/blanchiment#procedure",
            "name": "Blanchiment Dentaire en Tunisie",
            "alternateName": ["Blanchiment des dents", "Teeth whitening", "Éclaircissement dentaire"],
            "description": "Blanchiment dentaire professionnel au fauteuil avec lampe LED réalisé par un dentiste qualifié en Tunisie. Gain de 2 à 8 teintes en une seule séance. Gouttières de maintien personnalisées incluses.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Dents",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Dents jaunies ou tachées par le café, thé, vin rouge, tabac. Coloration intrinsèque légère à modérée. Souhait d'un sourire plus blanc et lumineux."
            },
            "followup": "Sensibilité dentaire possible 24-48h. Éviter les aliments colorants pendant 48h. Utilisation des gouttières de maintien à domicile pour prolonger les résultats.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Gain de 2 à 8 teintes sur l'échelle VITA. Sourire plus blanc et lumineux. Résultats durables 6 à 12 mois avec entretien.",
            "image": "https://venus-estetika.com/images/interventions/blanchiment-dentaire-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/dentaire/blanchiment",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/dentaire/blanchiment",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/dentaire/blanchiment#offer",
                "name": "Blanchiment Dentaire Professionnel",
                "description": "Séance tout compris : détartrage, blanchiment au fauteuil avec lampe LED, gouttières de maintien personnalisées",
                "price": "250",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-01-01",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'facettes') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/dentaire/facettes#procedure",
            "name": "Facettes Dentaires en Tunisie",
            "alternateName": ["Facette dentaire", "Dental veneers", "Hollywood Smile", "Facettes E-Max"],
            "description": "Pose de facettes dentaires en céramique E-Max ou Lumineers par des dentistes esthétiques qualifiés en Tunisie. Fabrication sur mesure pour un sourire Hollywood Smile naturel et éclatant. Package 8 à 10 facettes disponible.",
            "procedureType": { "@type": "MedicalProcedureType", "name": "Non-Surgical" },
            "bodyLocation": "Dents",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Dents tachées résistant au blanchiment, dents légèrement mal alignées, diastème (espaces entre les dents), dents usées ou ébréchées, souhait d'un Hollywood Smile"
            },
            "followup": "Contrôle d'occlusion à 1 semaine. Hygiène bucco-dentaire rigoureuse. Éviter de mordre des objets durs. Contrôle annuel chez le dentiste.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Sourire harmonieux et éclatant. Facettes résistantes aux taches. Durée de vie de 15 à 20 ans avec un entretien approprié.",
            "image": "https://venus-estetika.com/images/interventions/facettes-dentaires-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/dentaire/facettes",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/dentaire/facettes",
            "location": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" },
            "offers": {
                "@type": "Offer",
                "@id": "https://venus-estetika.com/interventions/dentaire/facettes#offer",
                "name": "Facette Dentaire — par facette",
                "description": "Prix par facette E-Max tout compris : bilan dentaire, empreinte numérique, fabrication sur mesure, pose et ajustement",
                "price": "250",
                "priceCurrency": "EUR",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-01-01",
                "seller": { "@type": "MedicalClinic", "@id": "https://venus-estetika.com/#clinic" }
            }
        };
    }
    if (slug === 'greffe-cheveux') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-cheveux#procedure",
            "name": "Greffe de Cheveux FUE Saphir en Tunisie",
            "alternateName": ["Greffe capillaire FUE", "Hair transplant FUE Sapphire", "Transplantation capillaire"],
            "description": "Greffe de cheveux par technique FUE Saphir réalisée par des chirurgiens spécialisés en Tunisie. Extraction folliculaire unitaire avec lames en saphir pour une cicatrisation optimale et un résultat naturel. Jusqu'à 4 000 greffons en une seule séance.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Cuir chevelu",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Alopécie androgénétique masculine (Norwood II à VI), calvitie frontale, golfes temporaux dégarnis, vertex clairsemé, cicatrices du cuir chevelu"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Zone donneuse insuffisante, alopécie diffuse non stabilisée, troubles de la coagulation, dermatose du cuir chevelu non traitée, attentes irréalistes"
            },
            "preparation": "Bilan capillaire complet avec analyse de la zone donneuse et receveuse. Photos selon la classification Norwood. Arrêt des anticoagulants et du minoxidil 1 semaine avant. Pas de rasage préalable nécessaire.",
            "howPerformed": "Intervention réalisée sous anesthésie locale. Durée : 6 à 8 heures. Extraction individuelle des greffons de la zone occipitale avec micro-punch de 0,7-0,9mm. Ouverture des canaux de réception avec lames en saphir. Implantation manuelle des greffons un par un.",
            "followup": "Croûtes pendant 7-10 jours. Chute des cheveux greffés à S2-S4 (normale). Repousse à partir de M3. Résultat visible à M6-M8. Résultat définitif à M12-M18. Suivi photographique inclus.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Chevelure naturelle et dense sur les zones traitées. Résultat définitif et permanent. Taux de repousse de 90 à 95% des greffons implantés.",
            "image": "https://venus-estetika.com/images/interventions/greffe-cheveux-fue-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/capillaire/greffe-cheveux",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/capillaire/greffe-cheveux",
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
                "@id": "https://venus-estetika.com/interventions/capillaire/greffe-cheveux#offer",
                "name": "Greffe de Cheveux FUE Saphir Tout Compris",
                "description": "Séjour tout compris : greffe FUE Saphir jusqu'à 4 000 greffons, anesthésie locale, kit de soins post-opératoires, hôtel 5★ (4 nuits), transferts aéroport, suivi 12 mois",
                "price": "1900",
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
    if (slug === 'greffe-dhi') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-dhi#procedure",
            "name": "Greffe DHI en Tunisie",
            "alternateName": ["Greffe capillaire DHI", "Direct Hair Implantation", "Implantation directe au stylo Choi"],
            "description": "Greffe de cheveux par technique DHI (Direct Hair Implantation) au stylo Choi réalisée par des chirurgiens spécialisés en Tunisie. Implantation directe sans incision préalable pour une densité maximale et un résultat ultra-naturel.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Cuir chevelu",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Alopécie androgénétique Norwood II à IV, densification de la ligne frontale, renforcement d'une greffe précédente, zones nécessitant une haute densité"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Zone donneuse insuffisante, calvitie trop étendue (Norwood VI-VII), troubles de la coagulation, dermatose du cuir chevelu non traitée"
            },
            "preparation": "Bilan capillaire complet avec analyse de la zone donneuse et receveuse. Photos selon la classification Norwood. Arrêt des anticoagulants 1 semaine avant. Rasage minimal de la zone donneuse uniquement.",
            "howPerformed": "Intervention réalisée sous anesthésie locale. Durée : 6 à 8 heures. Extraction individuelle des greffons de la zone occipitale. Implantation directe avec stylo Choi (implanter) qui contrôle simultanément la profondeur, l'angle et la direction de chaque greffon.",
            "followup": "Croûtes pendant 7-10 jours. Reprise d'activité à J3. Chute des cheveux greffés à S2-S4. Repousse à partir de M3. Résultat visible à M6-M8. Résultat définitif à M12-M18. Suivi photographique inclus.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Densité capillaire maximale sur les zones ciblées. Ligne frontale ultra-naturelle. Taux de repousse de 90 à 95%. Résultat permanent.",
            "image": "https://venus-estetika.com/images/interventions/greffe-dhi-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/capillaire/greffe-dhi",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/capillaire/greffe-dhi",
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
                "@id": "https://venus-estetika.com/interventions/capillaire/greffe-dhi#offer",
                "name": "Greffe DHI Tout Compris",
                "description": "Séjour tout compris : greffe DHI au stylo Choi jusqu'à 3 500 greffons, anesthésie locale, kit de soins post-opératoires, hôtel 5★ (4 nuits), transferts aéroport, suivi 12 mois",
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
    if (slug === 'greffe-barbe') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-barbe#procedure",
            "name": "Greffe de Barbe en Tunisie",
            "alternateName": ["Greffe de barbe FUE", "Beard transplant", "Implantation de barbe"],
            "description": "Greffe de barbe par technique FUE réalisée par des chirurgiens spécialisés en Tunisie. Implantation de greffons prélevés sur le cuir chevelu pour une barbe dense, fournie et naturelle. Résultat définitif et permanent.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Visage (barbe)",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Barbe clairsemée ou inexistante, zones sans poils sur les joues ou le menton, cicatrices dans la zone de barbe, asymétrie de la pilosité faciale"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Zone donneuse insuffisante, dermatose faciale non traitée, acné active sur la zone de barbe, troubles de la coagulation"
            },
            "preparation": "Bilan capillaire avec analyse de la zone donneuse et du visage. Photos de la barbe souhaitée. Définition du dessin de barbe avec le chirurgien. Arrêt des anticoagulants 1 semaine avant.",
            "howPerformed": "Intervention réalisée sous anesthésie locale. Durée : 4 à 6 heures selon le nombre de greffons. Extraction FUE des greffons de la zone occipitale. Implantation manuelle respectant le sens de pousse, l'angle et la densité naturelle du poil de barbe.",
            "followup": "Micro-croûtes pendant 7-10 jours. Rougeurs 2-3 semaines. Chute des poils greffés à S2-S4. Repousse à partir de M3. Premier rasage doux à S3. Résultat définitif à M8-M12.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Barbe dense, fournie et naturelle. Résultat définitif et permanent. Les poils greffés poussent et se rasent comme des poils de barbe naturels.",
            "image": "https://venus-estetika.com/images/interventions/greffe-barbe-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/capillaire/greffe-barbe",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/capillaire/greffe-barbe",
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
                "@id": "https://venus-estetika.com/interventions/capillaire/greffe-barbe#offer",
                "name": "Greffe de Barbe Tout Compris",
                "description": "Séjour tout compris : greffe de barbe FUE jusqu'à 3 000 greffons, anesthésie locale, kit de soins post-opératoires, hôtel 5★ (3 nuits), transferts aéroport, suivi 12 mois",
                "price": "1600",
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
    if (slug === 'rhinoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie#procedure",
            "name": "Rhinoplastie en Tunisie",
            "alternateName": ["Chirurgie du nez", "Rhinoplasty", "Rhinoseptoplastie"],
            "description": "La rhinoplastie est une intervention de chirurgie esthétique qui corrige la forme et la taille du nez pour un résultat harmonieux avec le visage. Technique ouverte ou fermée selon l'indication. Possibilité de corriger une déviation septale dans le même temps. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Nez",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Bosse nasale, nez trop large ou trop long, pointe tombante ou bulbeuse, déviation de la cloison nasale, asymétrie nasale, gêne respiratoire"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Croissance osseuse non terminée (avant 16-17 ans), attentes irréalistes, troubles de la coagulation, contre-indications à l'anesthésie générale, tabagisme actif"
            },
            "preparation": "Consultation à distance avec photos (face, profil, 3/4). Simulation numérique du résultat. Bilan pré-opératoire complet. Arrêt du tabac 4 semaines avant. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 1h30 à 2h30. Technique fermée (incisions intranasales) ou ouverte (incision columellaire) selon la complexité. Remodelage du cartilage et de l'os nasal. Pose d'un plâtre nasal en fin d'intervention.",
            "followup": "Plâtre nasal porté 7 jours. Œdème et ecchymoses 2-3 semaines. Résultat visible à 3 mois. Résultat définitif à 12 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Nez harmonieux, proportionné et naturel. Amélioration possible de la respiration nasale en cas de septoplastie associée. Résultat définitif à 12 mois.",
            "image": "https://venus-estetika.com/images/interventions/rhinoplastie-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie#offer",
                "name": "Rhinoplastie Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, clinique 1 nuit, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    if (slug === 'blepharoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie#procedure",
            "name": "Blépharoplastie en Tunisie",
            "alternateName": ["Chirurgie des paupières", "Blepharoplasty", "Lifting des paupières"],
            "description": "La blépharoplastie est une intervention de chirurgie esthétique qui corrige l'excès de peau, de graisse et le relâchement des paupières supérieures et/ou inférieures pour rajeunir le regard. Cicatrices invisibles dissimulées dans le pli naturel. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Paupières",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Paupières supérieures tombantes, poches sous les yeux, regard fatigué, excès de peau palpébrale, gêne du champ visuel"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Sécheresse oculaire sévère, glaucome non contrôlé, troubles de la coagulation, maladie thyroïdienne non stabilisée, contre-indications à l'anesthésie"
            },
            "preparation": "Consultation à distance avec photos du regard. Bilan ophtalmologique si nécessaire. Bilan pré-opératoire complet. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention réalisée sous anesthésie locale avec sédation ou générale. Durée : 1h à 1h30. Incision dans le pli naturel de la paupière supérieure et/ou sous les cils (paupière inférieure). Retrait de l'excès de peau et des poches graisseuses. Suture fine résorbable.",
            "followup": "Œdème et ecchymoses maximaux à J2-J3. Fils retirés J5-J7. Maquillage possible à J10. Résultat visible à 1 mois. Résultat définitif à 3 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Regard rajeuni et reposé. Cicatrices invisibles dans le pli naturel. Résultat durable 7 à 10 ans.",
            "image": "https://venus-estetika.com/images/interventions/blepharoplastie-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie#offer",
                "name": "Blépharoplastie Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, clinique, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "1500",
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
    if (slug === 'lifting-cervico-facial') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial#procedure",
            "name": "Lifting Cervico-Facial en Tunisie",
            "alternateName": ["Lifting du visage", "Facelift", "Rhytidectomie"],
            "description": "Le lifting cervico-facial est une intervention de chirurgie esthétique qui corrige le relâchement cutané du visage et du cou pour un rajeunissement global et naturel. Résultat durable 8 à 12 ans. Cicatrices dissimulées derrière les oreilles et dans le cuir chevelu. Réalisé par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Visage et Cou",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Relâchement cutané du visage et du cou, bajoues, ovale du visage affaissé, plis profonds, cou relâché avec bandes platismales"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Troubles de la coagulation, tabagisme actif, pathologie cardiaque non stabilisée, contre-indications à l'anesthésie générale, attentes irréalistes"
            },
            "preparation": "Consultation à distance avec photos (face, profil, 3/4). Bilan pré-opératoire complet. Arrêt du tabac 4 semaines avant. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 3 à 4 heures. Incision péri-auriculaire (devant et derrière l'oreille) se prolongeant dans le cuir chevelu. Décollement et remise en tension du SMAS (couche musculaire profonde). Retrait de l'excès cutané. Suture en deux plans.",
            "followup": "Bandage compressif 48-72h. Hospitalisation 1-2 nuits. Œdème et ecchymoses 2-3 semaines. Résultat visible à 1 mois. Résultat définitif à 3-6 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Visage rajeuni de 8 à 12 ans. Ovale du visage restauré, bajoues corrigées, cou redéfini. Cicatrices invisibles derrière les oreilles. Résultat naturel et durable.",
            "image": "https://venus-estetika.com/images/interventions/lifting-cervico-facial-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial#offer",
                "name": "Lifting Cervico-Facial Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, clinique 1-2 nuits, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    if (slug === 'otoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/otoplastie#procedure",
            "name": "Otoplastie en Tunisie",
            "alternateName": ["Chirurgie des oreilles décollées", "Otoplasty", "Correction oreilles proéminentes"],
            "description": "L'otoplastie est une intervention de chirurgie esthétique qui corrige les oreilles décollées en remodelant le cartilage auriculaire pour un positionnement naturel. Réalisable dès 7 ans. Cicatrice cachée derrière l'oreille. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Oreilles",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Oreilles décollées (proéminentes), asymétrie auriculaire, absence de pli de l'anthélix, hypertrophie de la conque"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Enfant de moins de 7 ans (cartilage non mature), infection auriculaire active, troubles de la coagulation, contre-indications à l'anesthésie"
            },
            "preparation": "Consultation à distance avec photos des oreilles (face et dos). Bilan pré-opératoire. Pas d'aspirine ou anticoagulants 10 jours avant.",
            "howPerformed": "Intervention sous anesthésie locale avec sédation (adulte) ou générale (enfant). Durée : 1h à 1h30. Incision derrière l'oreille. Remodelage du cartilage par scoring et/ou sutures de plicature. Repositionnement de l'oreille contre le crâne.",
            "followup": "Bandage compressif 7 jours. Bandeau de contention nocturne 15 jours. Douleurs légères 3-5 jours. Résultat visible dès le retrait du bandage. Résultat définitif à 1 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Oreilles naturellement positionnées contre le crâne. Résultat définitif et permanent. Cicatrice invisible derrière l'oreille.",
            "image": "https://venus-estetika.com/images/interventions/otoplastie-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-visage/otoplastie",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-visage/otoplastie",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-visage/otoplastie#offer",
                "name": "Otoplastie Bilatérale Tout Compris",
                "description": "Séjour tout compris : otoplastie bilatérale, anesthésie, clinique, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "1500",
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
    if (slug === 'lipofilling-visage') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage#procedure",
            "name": "Lipofilling Visage en Tunisie",
            "alternateName": ["Injection de graisse visage", "Facial fat grafting", "Lipostructure du visage"],
            "description": "Le lipofilling du visage consiste à prélever de la graisse autologue (propre graisse du patient), la purifier, puis la réinjecter dans le visage pour restaurer les volumes, combler les cernes et rajeunir le teint. Résultat naturel et semi-permanent. Réalisé par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Visage",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Cernes creux, pommettes affaissées, tempes creuses, sillons nasogéniens marqués, perte de volume liée au vieillissement, rajeunissement global du visage"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Réserves graisseuses insuffisantes, troubles de la coagulation, infection cutanée active, contre-indications à l'anesthésie, tabagisme actif"
            },
            "preparation": "Consultation à distance avec photos (face, profil, 3/4). Bilan pré-opératoire complet. Arrêt aspirine et anticoagulants 10 jours avant. Pas de régime amaigrissant avant l'intervention.",
            "howPerformed": "Intervention sous anesthésie locale avec sédation ou générale. Durée : 1h à 1h30. Phase 1 : lipoaspiration douce d'une petite quantité de graisse (ventre, hanches). Phase 2 : purification par centrifugation. Phase 3 : micro-injections précises dans les zones à traiter avec des canules ultra-fines.",
            "followup": "Œdème et ecchymoses modérés 5-10 jours. Éviction sociale 7-10 jours. Résultat visible à 1 mois. Résultat définitif à 3-6 mois (après stabilisation de la graisse). Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Visage rajeuni et repulpé avec un résultat 100% naturel. 60 à 70% de la graisse s'intègre définitivement. Effet régénérant sur la qualité de la peau grâce aux cellules souches adipeuses.",
            "image": "https://venus-estetika.com/images/interventions/lipofilling-visage-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage#offer",
                "name": "Lipofilling Visage Tout Compris",
                "description": "Séjour tout compris : lipoaspiration + lipofilling visage, anesthésie, clinique, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
                "price": "1800",
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
    if (slug === 'genioplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-visage/genioplastie#procedure",
            "name": "Génioplastie en Tunisie",
            "alternateName": ["Chirurgie du menton", "Mentoplastie", "Chin surgery"],
            "description": "La génioplastie est une intervention de chirurgie esthétique qui modifie la forme et la projection du menton par implant ou ostéotomie pour harmoniser le profil facial. Cicatrice invisible à l'intérieur de la bouche. Se combine idéalement avec une rhinoplastie (profiloplastie). Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Menton",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Menton fuyant (rétrogénie), menton trop projeté (progénie), asymétrie du menton, disharmonie du profil facial"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Croissance osseuse non terminée, malocclusion dentaire non traitée, troubles de la coagulation, infection buccale active, contre-indications à l'anesthésie générale"
            },
            "preparation": "Consultation à distance avec photos (face, profil). Analyse céphalométrique si nécessaire. Bilan pré-opératoire complet. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention sous anesthésie générale. Durée : 1h à 1h30. Incision intra-orale (entre la lèvre inférieure et la gencive). Pose d'un implant en silicone ou ostéotomie avec avancement/recul osseux selon l'indication. Suture résorbable.",
            "followup": "Œdème du menton et lèvre inférieure 7-10 jours. Alimentation molle 10 jours. Bains de bouche antiseptiques. Résultat visible à 1 mois. Résultat définitif à 2-3 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Profil facial harmonieux et équilibré. Menton proportionné au nez et au front. Aucune cicatrice visible (voie intra-orale). Résultat définitif et stable.",
            "image": "https://venus-estetika.com/images/interventions/genioplastie-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-visage/genioplastie",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-visage/genioplastie",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-visage/genioplastie#offer",
                "name": "Génioplastie Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, clinique 1 nuit, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    if (slug === 'augmentation-mammaire') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire#procedure",
            "name": "Augmentation Mammaire en Tunisie",
            "alternateName": ["Implants mammaires", "Breast augmentation", "Prothèses mammaires"],
            "description": "L'augmentation mammaire est une intervention de chirurgie esthétique qui augmente le volume de la poitrine par la pose d'implants en silicone cohésif de marques certifiées CE. Choix entre implants ronds et anatomiques. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Poitrine",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Hypoplasie mammaire (poitrine trop petite), asymétrie mammaire, perte de volume après grossesse ou perte de poids, souhait d'une poitrine plus volumineuse"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Grossesse en cours ou allaitement, cancer du sein non traité, troubles de la coagulation, contre-indications à l'anesthésie générale, tabagisme actif"
            },
            "preparation": "Consultation à distance avec photos (face, profil, 3/4). Choix du volume et de la forme des implants avec le chirurgien. Mammographie si plus de 35 ans. Bilan pré-opératoire complet. Arrêt du tabac 4 semaines avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 1h à 1h30. Incision sous-mammaire (la plus courante), péri-aréolaire ou axillaire. Création de la loge rétro-musculaire ou prépectorale. Insertion de l'implant en silicone cohésif. Suture en deux plans.",
            "followup": "Soutien-gorge médical porté jour et nuit pendant 4-6 semaines. Douleurs modérées 5-7 jours. Résultat visible immédiatement. Résultat définitif à 3 mois (descente naturelle de l'implant). Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Poitrine plus volumineuse, harmonieuse et naturelle. Décolleté amélioré. Implants de dernière génération à durée de vie de 10-15 ans. Allaitement possible dans la majorité des cas.",
            "image": "https://venus-estetika.com/images/interventions/augmentation-mammaire-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire#offer",
                "name": "Augmentation Mammaire Tout Compris",
                "description": "Séjour tout compris : prothèses silicone certifiées, intervention chirurgicale, anesthésie, clinique 1 nuit, soutien-gorge médical, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    if (slug === 'reduction-mammaire') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire#procedure",
            "name": "Réduction Mammaire en Tunisie",
            "alternateName": ["Plastie mammaire de réduction", "Breast reduction", "Réduction de la poitrine"],
            "description": "La réduction mammaire est une intervention de chirurgie esthétique et reconstructrice qui réduit le volume des seins hypertrophiés, soulageant les douleurs dorsales et améliorant la silhouette. Technique en T inversé ou verticale selon le volume à retirer. Réalisée par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Poitrine",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Hypertrophie mammaire causant douleurs dorsales, cervicales et d'épaules, gêne fonctionnelle et sportive, macération sous les seins, complexe esthétique"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Grossesse en cours ou projet de grossesse immédiat, allaitement en cours, cancer du sein non traité, troubles de la coagulation, contre-indications à l'anesthésie générale, tabagisme actif"
            },
            "preparation": "Consultation à distance avec photos (face, profil, 3/4). Mammographie préalable. Bilan pré-opératoire complet. Arrêt du tabac 4 semaines avant. Arrêt aspirine et anticoagulants 10 jours avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 2h à 3h. Technique en T inversé (ancre) ou verticale selon le volume à retirer. Résection du tissu mammaire excédentaire, repositionnement de l'aréole et du mamelon, suture en plusieurs plans.",
            "followup": "Soutien-gorge médical porté jour et nuit pendant 4-6 semaines. Drains retirés à J1-J2. Résultat visible immédiatement. Cicatrices évoluent sur 12-18 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Poitrine proportionnée et allégée. Soulagement des douleurs dorsales et cervicales. Cicatrices en T inversé ou verticales qui s'estompent progressivement. Résultat définitif à 6 mois.",
            "image": "https://venus-estetika.com/images/interventions/reduction-mammaire-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire#offer",
                "name": "Réduction Mammaire Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, clinique 1-2 nuits, soutien-gorge médical, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    if (slug === 'lifting-seins') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins#procedure",
            "name": "Lifting des Seins (Mastopexie) en Tunisie",
            "alternateName": ["Mastopexie", "Breast lift", "Lifting mammaire"],
            "description": "Le lifting des seins (mastopexie) est une intervention de chirurgie esthétique qui remonte et remodèle les seins ptosés (tombants) pour restaurer une poitrine ferme et galbée. Réalisable avec ou sans implants. Réalisé par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Poitrine",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Ptose mammaire (seins tombants) après grossesse, allaitement, perte de poids ou vieillissement, aréoles orientées vers le bas, perte de fermeté"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Grossesse en cours ou projet de grossesse immédiat, allaitement en cours, cancer du sein non traité, troubles de la coagulation, contre-indications à l'anesthésie générale, tabagisme actif"
            },
            "preparation": "Consultation à distance avec photos (face, profil, 3/4). Mammographie préalable si plus de 35 ans. Bilan pré-opératoire complet. Arrêt du tabac 4 semaines avant.",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 1h30 à 2h30. Technique péri-aréolaire (ptose légère), verticale (ptose modérée) ou en T inversé (ptose importante). Repositionnement de l'aréole et du mamelon, retrait de l'excès cutané, remodelage du cône mammaire. Pose d'implants possible dans le même temps.",
            "followup": "Soutien-gorge médical porté jour et nuit pendant 4-6 semaines. Douleurs modérées 5-7 jours. Résultat visible immédiatement. Résultat définitif à 3-6 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Poitrine remontée, ferme et galbée. Aréoles repositionnées. Résultat naturel et durable 8 à 10 ans avec maintien d'un poids stable.",
            "image": "https://venus-estetika.com/images/interventions/lifting-seins-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins#offer",
                "name": "Lifting des Seins (Mastopexie) Tout Compris",
                "description": "Séjour tout compris : intervention chirurgicale, anesthésie, clinique 1 nuit, soutien-gorge médical, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    if (slug === 'lipofilling-mammaire') {
        return {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire#procedure",
            "name": "Lipofilling Mammaire en Tunisie",
            "alternateName": ["Augmentation mammaire par graisse", "Breast fat transfer", "Lipofilling seins"],
            "description": "Le lipofilling mammaire est une intervention de chirurgie esthétique qui augmente le volume des seins en utilisant la propre graisse de la patiente. Alternative naturelle aux implants. Gain d'environ 1 bonnet par séance. Réalisé par nos chirurgiens diplômés en France, dans des cliniques agréées en Tunisie.",
            "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Surgical"
            },
            "bodyLocation": "Poitrine",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Augmentation mammaire modérée sans implant, correction d'asymétrie mammaire, comblement de défauts après chirurgie mammaire, complément d'un lifting des seins"
            },
            "contraindication": {
                "@type": "MedicalContraindication",
                "name": "Réserves graisseuses insuffisantes, cancer du sein non traité, grossesse en cours ou allaitement, troubles de la coagulation, contre-indications à l'anesthésie générale"
            },
            "preparation": "Consultation à distance avec photos. Mammographie préalable si plus de 35 ans. Bilan pré-opératoire complet. Arrêt du tabac 4 semaines avant. Pas de régime amaigrissant avant l'intervention (les réserves graisseuses doivent être maintenues).",
            "howPerformed": "Intervention réalisée sous anesthésie générale. Durée : 2h à 2h30. Phase 1 : lipoaspiration douce des zones donneuses (ventre, hanches, cuisses). Phase 2 : purification de la graisse par centrifugation. Phase 3 : réinjection en micro-gouttelettes dans les seins à différents niveaux.",
            "followup": "Soutien-gorge médical porté 4-6 semaines. Écchymoses zones donneuses 2 semaines. Résultat visible immédiatement. Résorption de 30-40% du volume sur 3-6 mois. Résultat définitif à 6 mois. Suivi post-opératoire inclus pendant 12 mois.",
            "status": "https://schema.org/ActiveActionStatus",
            "outcome": "Augmentation mammaire naturelle d'environ 1 bonnet. Résultat 100% naturel au toucher et en mouvement. 60-70% de la graisse survit définitivement. Double bénéfice : silhouette affinée par la liposuccion.",
            "image": "https://venus-estetika.com/images/interventions/lipofilling-mammaire-tunisie.jpg",
            "url": "https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire",
            "mainEntityOfPage": "https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire",
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
                "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire#offer",
                "name": "Lipofilling Mammaire Tout Compris",
                "description": "Séjour tout compris : lipoaspiration + lipofilling mammaire, anesthésie, clinique 1 nuit, soutien-gorge médical, hôtel 5★ (5 nuits), transferts aéroport, suivi post-opératoire 12 mois",
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
    return {};
}
