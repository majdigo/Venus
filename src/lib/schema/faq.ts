export function getFaqData(slug: string) {
    if (slug === 'sejour-medical') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/sejour-medical#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Ai-je besoin d'un visa pour me rendre en Tunisie depuis la France, la Belgique ou la Suisse ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, aucun visa n'est requis pour les ressortissants français, belges, suisses, luxembourgeois et canadiens. Un passeport valide 6 mois minimum suffit. Les citoyens d'autres pays doivent vérifier les exigences consulaires tunisiennes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Qui s'occupe de l'organisation de mon séjour médical en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Venus Estetika prend en charge l'intégralité de l'organisation : coordination avec votre chirurgien, réservation de l'hôtel 5 étoiles, chauffeur privé pour tous vos transferts (aéroport, hôtel, clinique), et accompagnement francophone 24/7 via WhatsApp. Vous n'avez qu'à réserver votre billet d'avion."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps dure le séjour médical typique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La durée varie selon l'intervention : 3 à 5 jours pour une rhinoplastie ou une augmentation mammaire, 5 à 7 jours pour une sleeve gastrique ou un bypass, 3 à 4 jours pour une greffe de cheveux. Votre coordinateur vous communique un planning précis lors du devis. L'accompagnant est hébergé gratuitement dans la même chambre d'hôtel."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Est-ce que je rencontre mon chirurgien avant l'intervention ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, absolument. Vous rencontrez d'abord votre chirurgien lors d'une téléconsultation vidéo avant votre départ (20-30 min). Le jour de votre arrivée à Tunis, une consultation préopératoire en présentiel a lieu à la clinique, avec marquage chirurgical si nécessaire. Le chirurgien que vous avez rencontré est celui qui vous opère."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment se passe le suivi après mon retour en France ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le suivi post-opératoire de 12 mois est entièrement inclus dans votre forfait. Il comprend : suivi WhatsApp quotidien les 2 premières semaines, téléconsultation au premier mois, bilans à M3, M6 et M12. En cas de complication ou de besoin de reprise chirurgicale, Venus Estetika prend en charge les frais selon les conditions de votre dossier."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la meilleure période pour partir en Tunisie pour un séjour médical ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les meilleures périodes pour un séjour médical en Tunisie sont octobre-novembre et mars-mai, avec des températures agréables entre 16 et 25°C. Ces saisons intermédiaires offrent un confort optimal pour la convalescence. L'été (juin-août, 30-38°C) est déconseillé car la chaleur peut affecter la cicatrisation. L'hiver (décembre-février) reste tout à fait praticable avec des températures entre 10 et 16°C."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Les cliniques partenaires de Venus Estetika sont-elles agréées ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui. Venus Estetika travaille exclusivement avec des cliniques agréées par le Ministère de la Santé tunisien : Clinique Pasteur, Clinique Internationale Hannibal et Centre Hospitalier International Carthagène. Tous nos chirurgiens sont diplômés d'universités françaises et membres de sociétés savantes reconnues (SOFCPRE, SFAHS)."
                    }
                }
            ]
        };
    }
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
    if (slug === 'bbl') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/bbl#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un BBL (Brazilian Butt Lift) en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'un BBL en Tunisie chez Venus Estetika est de 3 200€ tout compris : liposuccion multi-zones, réinjection lipofilling fesses, anesthésie, clinique, coussin BBL, hôtel 5★ (5 nuits), transferts et suivi post-opératoire 12 mois. En France, la même intervention coûte entre 6 000€ et 9 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps ne peut-on pas s'asseoir après un BBL ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Après un BBL, il est impératif de ne pas s'asseoir directement sur les fesses pendant 3 semaines minimum. Vous devrez utiliser un coussin BBL spécial (inclus dans votre forfait) qui report le poids sur les cuisses. Cette règle est fondamentale pour ne pas comprimer les cellules graisseuses réinjectées et préserver votre résultat."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quel pourcentage des graisses survivent après un BBL ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "En moyenne, 60 à 70% des graisses réinjectées lors d'un BBL survivent et s'intègrent définitivement. Les 30 à 40% restants sont résorbés par l'organisme dans les 3 à 6 mois suivant l'intervention. C'est pourquoi votre chirurgien tient compte de cette résorption dans le volume initial injecté. Le résultat définitif est évalué à 6 mois post-opératoire."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le BBL est-il une intervention dangereuse ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le BBL nécessite une expertise chirurgicale rigoureuse. Chez Venus Estetika, nos chirurgiens sont spécialisés dans cette technique et opèrent dans des cliniques agréées aux normes européennes. La clé de sécurité est l'injection superficielle de la graisse (sous-cutanée), jamais en profondeur. Le taux de complications est faible entre les mains d'un chirurgien expérimenté."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Puis-je combiner un BBL avec d'autres interventions ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le BBL se combine fréquemment avec une abdominoplastie ou une liposuccion complémentaire pour créer une silhouette en sablier harmonieuse. Votre chirurgien évaluera lors de la téléconsultation si une combinaison est médicalement appropriée selon votre profil. Chaque intervention combinée est incluse dans un devis personnalisé."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand voit-on le résultat définitif d'un BBL ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le résultat final d'un BBL est visible à partir de 4 à 6 mois post-opératoire, une fois l'œdème résorbé et la graisse stabilisée. Les premiers résultats sont encourageants dès 6 semaines. Il est normal de constater un dégonflement progressif dans les premiers mois — c'est la résorption naturelle de 30 à 40% du volume injecté. Le résultat obtenu à 6 mois est permanent."
                    }
                }
            ]
        };
    }
    if (slug === 'mommy-makeover') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Qu'est-ce qu'un Mommy Makeover et quelles interventions comprend-il ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le Mommy Makeover est une combinaison d'interventions chirurgicales réalisées en une seule opération pour restaurer le corps après une grossesse. Il comprend généralement une abdominoplastie (ventre plat), une augmentation mammaire ou un lifting des seins, et une liposuccion des flancs et cuisses. L'avantage est de ne subir qu'une seule anesthésie et une seule convalescence pour traiter plusieurs zones."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un Mommy Makeover en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le Mommy Makeover classique (abdominoplastie + augmentation mammaire + liposuccion flancs) est proposé à 4 500€ tout compris chez Venus Estetika. Le package Premium (avec lifting des seins ou liposuccion cuisses supplémentaire) est à 5 500€. En France, ces packages combinés coûtent entre 10 000€ et 15 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand peut-on envisager un Mommy Makeover après l'accouchement ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il est recommandé d'attendre au moins 6 mois après l'accouchement, et 12 mois si vous allaitez. Il est conseillé d'avoir terminé votre projet familial avant d'envisager cette chirurgie, car une nouvelle grossesse pourrait compromettre les résultats obtenus. La stabilité du poids depuis au moins 6 mois est également une condition préalable importante."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de convalescence pour un Mommy Makeover ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La convalescence d'un Mommy Makeover est de 2 à 3 semaines de repos strict, suivies de 3 à 4 semaines avec une activité légère. La gaine de contention et le soutien-gorge médical sont portés pendant 6 semaines. L'avantage majeur est de n'avoir qu'une seule période de convalescence pour toutes les interventions réalisées simultanément. Le résultat final est apprécié entre 3 et 6 mois."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le Mommy Makeover est-il sécurisé en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, sous réserve d'être opérée dans des conditions optimales. Venus Estetika sélectionne uniquement des chirurgiens plasticiens diplômés d'universités françaises avec une spécialisation en chirurgie corporelle. Les interventions sont réalisées dans des cliniques agréées disposant d'unités de soins intensifs. Un bilan préopératoire complet est systématiquement effectué pour évaluer votre aptitude à une chirurgie combinée."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Aurai-je des cicatrices visibles après un Mommy Makeover ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les cicatrices sont placées stratégiquement pour être discrètes : la cicatrice abdominale est basse, dans le pli du bikini ; les cicatrices mammaires sont dans le sillon sous-mammaire. Toutes les cicatrices évoluent favorablement sur 12 à 18 mois pour devenir blanches et estompées. Des protocoles de cicatrisation (gels silicone, massages) sont inclus dans votre suivi post-opératoire."
                    }
                }
            ]
        };
    }
    if (slug === 'lifting-bras') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un lifting des bras en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le lifting des bras (brachioplastie) chez Venus Estetika est proposé à partir de 2 200€ tout compris : chirurgie, anesthésie, clinique 1 nuit, manchons de contention, hôtel 5★ (5 nuits), transferts et suivi 12 mois. En France, la même intervention coûte entre 4 000€ et 6 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Où se situe la cicatrice après une brachioplastie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dans la brachioplastie classique, la cicatrice est placée sur la face interne du bras, de l'aisselle jusqu'au coude. Elle est peu visible bras le long du corps. Dans la mini-brachioplastie (pour relâchement léger), la cicatrice est limitée à l'aisselle. Votre chirurgien déterminera la technique adaptée selon l'étendue du relâchement cutané lors de votre consultation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand envisager un lifting des bras ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Un lifting des bras est indiqué en cas de peau relâchée et tombante sur la face interne des bras, résistant à la musculation et au sport. Cela survient typiquement après une perte de poids importante (chirurgie bariatrique), après 40 ans avec la perte d'élasticité cutanée, ou génétiquement. La liposuccion seule ne suffit pas si la peau est très relâchée."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Peut-on combiner un lifting des bras avec d'autres interventions ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le lifting des bras se combine fréquemment avec un lifting des cuisses et une abdominoplastie lors d'une chirurgie de remodelage post-bariatrique (body lift). Il peut aussi être associé à une liposuccion des bras si un excès de graisse coexiste avec le relâchement cutané. Venus Estetika propose des packages combinés pour optimiser la convalescence et les coûts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de convalescence après une brachioplastie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La durée de convalescence est de 1 à 2 semaines avant la reprise d'une activité légère. Le port des manchons de contention est obligatoire pendant 4 à 6 semaines. Il faut éviter de porter des charges lourdes pendant 1 mois et attendre 6 semaines avant de reprendre le sport. Le résultat définitif — cicatrices stabilisées et bras toniques — est apprécié à 3 mois."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La brachioplastie laisse-t-elle une cicatrice permanente ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Toute chirurgie laisse une cicatrice, et la brachioplastie ne fait pas exception. Cependant, la qualité de la cicatrisation dépend de la technique chirurgicale, de votre génétique et du suivi post-opératoire. Chez Venus Estetika, un protocole de cicatrisation complet (gels silicone, massages, protection solaire) est inclus dans le suivi de 12 mois pour optimiser l'aspect final de la cicatrice."
                    }
                }
            ]
        };
    }
    if (slug === 'lifting-cuisses') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un lifting des cuisses en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le lifting des cuisses (cruroplastie) chez Venus Estetika est proposé à partir de 2 500€ tout compris : chirurgie, anesthésie, clinique 1 à 2 nuits, panty de contention, hôtel 5★ (5 nuits), transferts et suivi 12 mois. En France, la même intervention est facturée entre 4 500€ et 7 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre cruroplastie interne et cruroplastie verticale ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La cruroplastie interne (ou horizontale) traite un relâchement modéré avec une cicatrice discrète dans le pli de l'aine, facilement cachée par le maillot de bain. La cruroplastie verticale traite un relâchement important (typiquement post-bariatrique) avec une cicatrice sur la face interne de la cuisse, de l'aine jusqu'au genou. Votre chirurgien détermine la technique adaptée selon l'étendue du ptosis cutané."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Pour qui est indiquée la chirurgie de lifting des cuisses ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le lifting des cuisses est principalement indiqué après une perte de poids importante consécutive à une chirurgie bariatrique (sleeve, bypass), laissant un excès de peau pendante sur les cuisses. Il est également proposé aux personnes présentant un relâchement cutané dû à l'âge ou à la génétique. La liposuccion seule est insuffisante quand la peau manque d'élasticité."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Peut-on marcher normalement après une cruroplastie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, la marche est encouragée dès le lendemain de l'intervention pour prévenir les complications vasculaires. Une marche légère et régulière favorise la cicatrisation et la circulation sanguine. Il faut cependant éviter les positions prolongées assises ou debout les premiers jours. La reprise d'une activité normale est possible après 2 à 3 semaines, et sportive après 6 semaines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Peut-on combiner un lifting des cuisses avec d'autres interventions ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le lifting des cuisses fait souvent partie d'un programme de chirurgie post-bariatrique complet, associé à une abdominoplastie, un lifting des bras et parfois un lifting mammaire. Ces interventions peuvent être réalisées en une ou deux étapes selon votre état de santé général et la quantité de peau à retirer. Venus Estetika vous propose un plan de traitement personnalisé et échelonné."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de convalescence après un lifting des cuisses ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le port du panty de contention est obligatoire pendant 4 à 6 semaines. Vous pouvez marcher dès le lendemain mais il faut éviter les efforts importants pendant 3 à 4 semaines. La reprise professionnelle (travail de bureau) est possible après 2 à 3 semaines. Le résultat définitif — cuisses raffermies et cicatrices estompées — est apprécié entre 3 et 6 mois post-opératoire."
                    }
                }
            ]
        };
    }
    if (slug === 'botox') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/botox#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Combien coûte une injection de Botox en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix du Botox en Tunisie chez Venus Estetika démarre à 150€ par zone traitée. Un traitement full face (3 zones : front, rides du lion, pattes d'oie) est proposé à 350€. En comparaison, la même séance coûte entre 250€ et 800€ en France."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le Botox est-il douloureux ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les injections de Botox sont réalisées avec des aiguilles très fines et sont généralement bien tolérées. La plupart des patients décrivent une légère sensation de picotement. L'application d'une crème anesthésiante est possible à la demande. La séance dure entre 15 et 30 minutes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Au bout de combien de temps voit-on les résultats du Botox ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les premiers effets du Botox apparaissent entre 3 et 5 jours après l'injection. Le résultat final est visible au bout de 10 à 15 jours. L'effet dure en moyenne 4 à 6 mois, après quoi une retouche est recommandée pour maintenir le résultat."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Y a-t-il une période d'éviction sociale après le Botox ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non. Le Botox ne nécessite aucune éviction sociale. De légères rougeurs ou un léger gonflement peuvent apparaître au niveau des points d'injection pendant quelques heures. Vous pouvez reprendre vos activités normales immédiatement après la séance. Il est conseillé d'éviter l'activité physique intense et l'exposition à la chaleur les 24 premières heures."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Peut-on combiner le Botox avec d'autres traitements lors du séjour en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le Botox se combine très bien avec l'acide hyaluronique pour une approche complète du rajeunissement (le Botox traite les rides dynamiques, l'acide hyaluronique comble les rides statiques et restaure les volumes). Un bilan esthétique personnalisé avec notre médecin vous permettra de définir le plan de traitement le plus adapté à vos objectifs."
                    }
                }
            ]
        };
    }
    if (slug === 'acide-hyaluronique') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Combien coûte une injection d'acide hyaluronique en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les injections d'acide hyaluronique chez Venus Estetika sont proposées dès 200€ à 300€ par seringue selon la zone et le produit utilisé. Un traitement lèvres (1 seringue) est à 250€, un traitement cernes à 300€, et un full face (3-4 seringues) entre 700€ et 900€. En France, le même traitement coûte entre 350€ et 500€ par seringue."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps dure l'acide hyaluronique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La durée de l'acide hyaluronique varie selon la zone traitée et le type de produit utilisé. En général, les résultats durent entre 8 et 18 mois : les lèvres (6-9 mois), les sillons nasogéniens (9-12 mois), les pommettes et l'ovale du visage (12-18 mois). L'acide hyaluronique est naturellement résorbé par l'organisme."
                    }
                },
                {
                    "@type": "Question",
                    "name": "L'acide hyaluronique est-il réversible ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, l'acide hyaluronique est entièrement réversible. En cas d'insatisfaction ou de résultat non souhaité, le médecin peut injecter de l'hyaluronidase, une enzyme qui dissout l'acide hyaluronique en quelques minutes. C'est un avantage majeur par rapport à d'autres traitements esthétiques."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Y a-t-il des effets secondaires après les injections d'acide hyaluronique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Des effets secondaires légers et temporaires peuvent apparaître : rougeurs, légère enflure ou hématomes au point d'injection, qui disparaissent généralement en 24 à 48 heures. Il est conseillé d'éviter l'exposition à la chaleur et l'activité physique intense pendant 24h. Les effets secondaires graves sont rares lorsque l'injection est réalisée par un médecin qualifié."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre le Botox et l'acide hyaluronique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le Botox agit sur les rides dynamiques causées par les contractions musculaires (rides du front, pattes d'oie) en paralysant temporairement le muscle. L'acide hyaluronique comble les rides statiques (sillons nasogéniens, cernes) et restaure les volumes perdus (lèvres, pommettes). Les deux traitements sont souvent combinés pour un résultat de rajeunissement optimal."
                    }
                }
            ]
        };
    }
    if (slug === 'peeling') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/peeling#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Combien coûte un peeling chimique en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Un peeling moyen TCA chez Venus Estetika est proposé à 250€, un peeling superficiel à 150€, et une cure de 3 séances à 400€. En France, le même traitement coûte entre 400€ et 700€. C'est une économie significative pour un acte réalisé par un médecin expérimenté dans une clinique agréée."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps dure la desquamation après un peeling TCA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Après un peeling moyen au TCA (acide trichloroacétique), la desquamation (pelage de la peau) dure entre 5 et 7 jours. La peau rougit d'abord, puis se met à desquamer à partir du 3ème jour, révélant une peau neuve, plus lisse et plus lumineuse. Une éviction sociale d'une semaine est recommandée."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de séances de peeling sont nécessaires ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pour le peeling superficiel, une cure de 3 à 6 séances espacées de 3 à 4 semaines est généralement recommandée. Pour le peeling moyen TCA, une seule séance peut suffire pour un résultat marqué. Une ou deux séances complémentaires peuvent être conseillées selon l'indication (cicatrices d'acné, taches profondes)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le peeling est-il efficace contre les taches et cicatrices d'acné ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le peeling chimique est l'un des traitements les plus efficaces contre les taches pigmentaires et les cicatrices d'acné superficielles à modérées. Le TCA permet d'atteindre les couches plus profondes du derme pour un résultat significatif. Pour les cicatrices plus profondes, il peut être combiné avec la microneedling ou le laser."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Peut-on faire un peeling à tout moment de l'année ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il est recommandé d'éviter les peelings moyens en période de forte exposition solaire (juillet-août). L'automne et l'hiver sont les saisons idéales pour un peeling TCA, car la peau en cours de renouvellement est plus sensible au soleil. Un indice de protection solaire élevé (SPF 50+) est obligatoire pendant et après le traitement."
                    }
                }
            ]
        };
    }
    if (slug === 'mesolift') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/medecine-esthetique/mesolift#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Combien coûte un mésolift en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Une séance de mésolift chez Venus Estetika est proposée à 150€, une cure de 3 séances à 400€ et le mésolift enrichi au PRP à 250€/séance. En France, la même séance coûte entre 250€ et 400€. Le mésolift est souvent réalisé en complément d'une intervention lors du séjour médical en Tunisie."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de séances de mésolift sont nécessaires pour voir des résultats ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Un coup d'éclat est visible dès la première séance. Pour des résultats durables sur la qualité de peau (hydratation, fermeté, éclat), un protocole de 3 séances espacées de 15 jours est recommandé, suivi d'une séance d'entretien tous les 3 à 6 mois."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Qu'est-ce que le cocktail injecté lors du mésolift ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le cocktail du mésolift est une formule personnalisée qui peut contenir : de l'acide hyaluronique non réticulé (hydratation), des vitamines (C, E, B), des acides aminés, des minéraux (zinc, silicium), des antioxydants et des peptides bioactifs. La composition est adaptée à votre type de peau et à vos objectifs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre le mésolift et les injections d'acide hyaluronique classiques ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le mésolift utilise de l'acide hyaluronique non réticulé (liquide) injecté en micro-doses dans le derme superficiel pour hydrater et revitaliser la peau. Il n'a pas d'effet volumateur. Les injections classiques utilisent un gel réticulé (plus dense) pour combler des rides ou augmenter des volumes. Les deux traitements sont complémentaires."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le mésolift est-il douloureux ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le mésolift est réalisé avec des aiguilles très fines ou avec une mésopistole (pistolet d'injection automatique qui minimise la douleur). Une crème anesthésiante est appliquée 30 minutes avant la séance. La plupart des patients décrivent une légère sensation de picotement. La séance dure environ 30 minutes."
                    }
                }
            ]
        };
    }
    if (slug === 'bypass-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un bypass gastrique en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'un bypass gastrique en Tunisie chez Venus Estetika est de 4 500€ tout compris (chirurgie, anesthésie, hospitalisation, hôtel 5* pour 5 nuits, transferts aéroport, suivi post-opératoire 12 mois). En comparaison, la même intervention coûte entre 10 000€ et 18 000€ en France."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelles sont les conditions d'éligibilité pour un bypass gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le bypass gastrique est recommandé pour les patients ayant un IMC supérieur à 40 (obésité morbide) ou un IMC supérieur à 35 avec des comorbidités associées (diabète de type 2, hypertension artérielle, apnée du sommeil, dyslipidémie). Un bilan pré-opératoire complet incluant une évaluation psychologique est systématiquement réalisé avant toute décision."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de poids peut-on perdre après un bypass gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "En moyenne, les patients perdent entre 60% et 70% de leur excès de poids dans les 12 à 18 mois suivant le bypass gastrique. Par exemple, un patient de 130 kg avec un poids idéal de 70 kg (excès de 60 kg) peut espérer perdre 36 à 42 kg. Le bypass est l'intervention bariatrique offrant les meilleurs résultats à long terme sur la perte de poids et la rémission du diabète de type 2."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre un bypass gastrique et une sleeve gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La sleeve gastrique consiste à retirer 75% de l'estomac pour réduire sa capacité. Le bypass gastrique est une technique plus complexe qui crée une dérivation intestinale en plus de réduire l'estomac, entraînant une malabsorption partielle des aliments. Le bypass offre une perte de poids supérieure (60-70% vs 50-60% de l'excès de poids) et une meilleure rémission du diabète, mais nécessite un suivi nutritionnel plus strict avec une supplémentation en vitamines à vie."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le bypass gastrique en Tunisie est-il sûr ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui. Venus Estetika travaille exclusivement avec des chirurgiens bariatriques diplômés en France et des cliniques agréées par le Ministère de la Santé tunisien (Clinique Pasteur, Clinique Internationale Hannibal, Centre Hospitalier International Carthagène). Le bypass est réalisé sous coelioscopie selon les protocoles internationaux. Le taux de complications est comparable aux standards européens et un suivi post-opératoire de 12 mois est systématiquement inclus."
                    }
                }
            ]
        };
    }
    if (slug === 'anneau-gastrique') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un anneau gastrique en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'un anneau gastrique en Tunisie chez Venus Estetika est de 2 800€ tout compris (chirurgie, anesthésie, hospitalisation, hôtel 5* pour 5 nuits, transferts aéroport, suivi post-opératoire 12 mois). En comparaison, la même intervention coûte entre 6 000€ et 10 000€ en France."
                    }
                },
                {
                    "@type": "Question",
                    "name": "L'anneau gastrique est-il réversible ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, l'anneau gastrique est la seule intervention bariatrique entièrement réversible. L'anneau peut être retiré chirurgicalement si nécessaire, et l'estomac retrouve sa forme et sa capacité d'origine. Cette réversibilité est un avantage majeur pour les patients qui hésitent à s'engager dans une chirurgie définitive comme la sleeve ou le bypass."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de poids peut-on perdre avec un anneau gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "En moyenne, les patients perdent entre 40% et 50% de leur excès de poids dans les 12 à 24 mois suivant la pose de l'anneau gastrique. La perte de poids est plus progressive qu'avec une sleeve ou un bypass, mais elle est régulière et durable à condition de suivre les recommandations diététiques et les ajustements réguliers de l'anneau."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Qui est candidat à la pose d'un anneau gastrique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "L'anneau gastrique est recommandé pour les patients ayant un IMC compris entre 30 et 40, motivés et prêts à modifier durablement leurs habitudes alimentaires. Il est particulièrement adapté aux patients jeunes souhaitant une solution réversible. Les patients avec un IMC supérieur à 40 ou présentant des comorbidités sévères sont généralement orientés vers une sleeve ou un bypass pour des résultats plus importants."
                    }
                },
                {
                    "@type": "Question",
                    "name": "L'anneau gastrique nécessite-t-il des ajustements réguliers ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, l'anneau gastrique est ajustable. Il contient un ballonnet gonflable relié à un boîtier sous-cutané. Le médecin peut resserrer ou desserrer l'anneau en injectant ou en retirant du sérum physiologique via ce boîtier, lors d'une consultation rapide et indolore. En moyenne, 3 à 5 ajustements sont nécessaires la première année pour optimiser la restriction alimentaire et la perte de poids."
                    }
                }
            ]
        };
    }
    if (slug === 'abdominoplastie') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une abdominoplastie en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une abdominoplastie en Tunisie chez Venus Estetika est de 2 800€ tout compris (chirurgie, anesthésie, hospitalisation, gaine de contention, hôtel 5* pour 5 nuits, transferts aéroport, suivi post-opératoire 12 mois). En comparaison, la même intervention coûte entre 5 000€ et 8 000€ en France."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Où se situe la cicatrice après une abdominoplastie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La cicatrice d'abdominoplastie est placée très basse, dans le pli naturel du bikini, d'une hanche à l'autre. Elle est entièrement dissimulée par un maillot de bain ou des sous-vêtements. Une seconde petite cicatrice discrète est présente autour du nombril (qui est repositionné). La cicatrice évolue favorablement sur 12 à 18 mois pour devenir fine et blanche grâce au protocole de cicatrisation inclus dans votre suivi."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre une mini-abdominoplastie et une abdominoplastie complète ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La mini-abdominoplastie traite uniquement le relâchement cutané sous le nombril, avec une cicatrice plus courte et sans repositionnement du nombril. Elle est indiquée pour un excès de peau modéré. L'abdominoplastie complète traite l'ensemble de l'abdomen, inclut la réparation des muscles grands droits (diastasis) et le repositionnement du nombril. Votre chirurgien détermine la technique adaptée lors de la téléconsultation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de convalescence après une abdominoplastie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La convalescence après une abdominoplastie est de 2 à 3 semaines de repos avant la reprise d'une activité légère. Le port de la gaine de contention abdominale est obligatoire pendant 4 à 6 semaines. Il faut éviter de porter des charges lourdes et les efforts abdominaux pendant 6 semaines. La reprise sportive est autorisée après 2 mois. Le résultat définitif est apprécié à 3 à 6 mois post-opératoire."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Peut-on combiner une abdominoplastie avec une liposuccion ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, l'association abdominoplastie + liposuccion est très fréquente et recommandée pour un résultat optimal. La liposuccion traite les amas graisseux localisés (flancs, hanches, dos) tandis que l'abdominoplastie retire l'excès de peau et resserre les muscles abdominaux. Cette combinaison, appelée lipoabdominoplastie, permet d'obtenir une silhouette harmonieuse en une seule intervention. Un devis personnalisé vous est proposé."
                    }
                }
            ]
        };
    }
    if (slug === 'implants-dentaires') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/dentaire/implants-dentaires#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un implant dentaire en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'un implant dentaire en Tunisie chez Venus Estetika est de 500€ par implant, tout compris : implant en titane de marque premium, pilier, chirurgie, anesthésie locale, radiographie panoramique, hôtel et transferts. En France, le même implant coûte entre 1 200€ et 2 500€. La couronne définitive est facturée séparément (250€)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de vie d'un implant dentaire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Un implant dentaire bien posé et correctement entretenu peut durer toute la vie. L'implant en titane s'intègre à l'os (ostéo-intégration) et devient une racine artificielle permanente. La couronne posée sur l'implant a une durée de vie de 15 à 20 ans et peut être remplacée sans toucher à l'implant. Une hygiène bucco-dentaire rigoureuse et des contrôles annuels sont essentiels."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps dure la pose d'un implant dentaire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La pose d'un implant dentaire dure entre 1 et 2 heures par implant, sous anesthésie locale. L'intervention est indolore. La phase de cicatrisation osseuse (ostéo-intégration) nécessite 3 à 6 mois avant la pose de la couronne définitive. Pendant cette période, une prothèse provisoire est mise en place pour préserver l'esthétique."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La pose d'un implant dentaire est-elle douloureuse ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, la pose d'un implant dentaire est réalisée sous anesthésie locale et est totalement indolore pendant l'intervention. Après l'opération, une légère gêne et un gonflement peuvent survenir pendant 2 à 3 jours, facilement gérés par des antidouleurs classiques. La plupart des patients reprennent leurs activités normales dès le lendemain."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Faut-il une greffe osseuse avant la pose d'un implant dentaire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Une greffe osseuse n'est nécessaire que si le volume osseux de la mâchoire est insuffisant pour accueillir l'implant. Cela concerne environ 20 à 30% des patients, principalement ceux ayant perdu des dents depuis longtemps. Un scanner panoramique permet d'évaluer précisément le volume osseux disponible. Si une greffe est nécessaire, elle peut être réalisée dans le même temps opératoire ou lors d'une séance préalable."
                    }
                }
            ]
        };
    }
    if (slug === 'couronnes') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/dentaire/couronnes#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une couronne dentaire en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une couronne dentaire en Tunisie chez Venus Estetika est de 250€ par couronne, tout compris : préparation de la dent, empreinte numérique, fabrication sur mesure au laboratoire et pose. En France, une couronne coûte entre 500€ et 1 500€ selon le matériau. Venus Estetika utilise exclusivement des matériaux premium (zircone, céramique, E-Max)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quels sont les différents types de couronnes dentaires proposés ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Venus Estetika propose trois types de couronnes : la couronne en zircone (la plus résistante et esthétique, idéale pour les dents postérieures et antérieures), la couronne en céramique (excellent rendu naturel pour les dents de devant) et la couronne E-Max (ultra-translucide, le summum de l'esthétique dentaire). Votre dentiste vous conseille le matériau le plus adapté selon la position de la dent et vos attentes esthétiques."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de vie d'une couronne dentaire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Une couronne dentaire bien entretenue a une durée de vie de 10 à 15 ans, voire plus. Les couronnes en zircone sont les plus durables avec une longévité pouvant atteindre 20 ans. La durée de vie dépend de l'hygiène bucco-dentaire quotidienne, des contrôles réguliers chez le dentiste et de l'absence de bruxisme non traité."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de visites sont nécessaires pour poser une couronne ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La pose d'une couronne nécessite généralement 2 à 3 visites sur un séjour de 5 à 7 jours. Lors de la première visite, le dentiste prépare la dent et réalise l'empreinte numérique. Une couronne provisoire est posée immédiatement. La couronne définitive est fabriquée au laboratoire en 3 à 5 jours, puis posée et ajustée lors de la dernière visite."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment entretenir une couronne dentaire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "L'entretien d'une couronne dentaire est identique à celui de vos dents naturelles : brossage deux fois par jour, utilisation du fil dentaire quotidiennement et rinçage avec un bain de bouche antiseptique. Il est recommandé de consulter votre dentiste une à deux fois par an pour un contrôle. Évitez de mordre des objets durs (glaçons, stylos) et traitez le bruxisme si nécessaire avec une gouttière de nuit."
                    }
                }
            ]
        };
    }
    if (slug === 'blanchiment') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/dentaire/blanchiment#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'un blanchiment dentaire en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le blanchiment dentaire professionnel en Tunisie chez Venus Estetika est proposé à 200€ tout compris : détartrage préalable, séance de blanchiment au fauteuil avec lampe LED, gouttières de maintien personnalisées. En France, le même traitement coûte entre 400€ et 800€ chez un dentiste."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps durent les résultats du blanchiment dentaire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les résultats d'un blanchiment dentaire professionnel durent entre 6 et 12 mois en moyenne. La durée dépend de vos habitudes alimentaires (café, thé, vin rouge), du tabac et de votre hygiène bucco-dentaire. L'utilisation des gouttières de maintien à domicile avec un gel de rappel permet de prolonger les résultats. Un gain de 2 à 8 teintes est habituellement obtenu."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le blanchiment dentaire provoque-t-il une sensibilité des dents ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Une sensibilité dentaire temporaire est possible dans les 24 à 48 heures suivant le blanchiment. Elle est généralement légère et disparaît spontanément. L'utilisation d'un dentifrice désensibilisant avant et après le traitement minimise cet inconfort. Le dentiste adapte la concentration du produit à votre sensibilité naturelle."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de séances de blanchiment sont nécessaires ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "En général, une seule séance de blanchiment au fauteuil (45 à 60 minutes) suffit pour obtenir un résultat visible et significatif. Pour les colorations plus tenaces (tétracycline, fluorose), deux séances espacées de quelques jours peuvent être recommandées. Le dentiste évalue le nombre de séances nécessaires lors du bilan initial."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le blanchiment dentaire est-il sans danger pour l'émail ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le blanchiment dentaire professionnel réalisé par un dentiste qualifié est totalement sûr pour l'émail. Les produits utilisés en clinique (peroxyde d'hydrogène ou de carbamide à concentration contrôlée) agissent sur les pigments sans altérer la structure de l'émail. Contrairement aux kits en vente libre, le dosage et le temps d'application sont strictement contrôlés par le praticien."
                    }
                }
            ]
        };
    }
    if (slug === 'facettes') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/dentaire/facettes#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix des facettes dentaires en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une facette dentaire en Tunisie chez Venus Estetika est de 350€ par facette. Un sourire complet Hollywood Smile (8 à 10 facettes) est proposé entre 2 800€ et 3 500€ tout compris. En France, une seule facette coûte entre 800€ et 1 500€, soit un Hollywood Smile à plus de 8 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre les facettes E-Max et les Lumineers ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les facettes E-Max sont des facettes en céramique pressée très résistantes (épaisseur 0,5 mm) nécessitant une légère préparation de la dent (limage minimal). Les Lumineers sont des facettes ultra-fines (0,2 à 0,3 mm) qui peuvent être posées sans aucune préparation dentaire (no-prep). Les E-Max offrent un contrôle plus précis de la couleur et de la forme, tandis que les Lumineers préservent totalement la dent naturelle."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de vie des facettes dentaires ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les facettes dentaires en céramique E-Max ont une durée de vie de 15 à 20 ans avec un entretien approprié. Les Lumineers peuvent durer jusqu'à 20 ans également. La longévité dépend de l'hygiène bucco-dentaire, de l'absence de bruxisme non traité et des habitudes alimentaires. Les facettes résistent aux taches de café, thé et vin rouge."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Faut-il limer les dents pour poser des facettes ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pour les facettes E-Max classiques, un limage minimal de 0,3 à 0,5 mm de la surface de l'émail est nécessaire. Cette préparation est indolore et permet un collage optimal. Pour les Lumineers (facettes no-prep), aucun limage n'est requis grâce à leur finesse extrême. Le choix entre les deux techniques dépend de l'alignement de vos dents et de vos attentes esthétiques."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Qu'est-ce que le package Hollywood Smile ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le Hollywood Smile est un package esthétique complet comprenant la pose de 8 à 10 facettes dentaires sur les dents visibles du sourire (de canine à canine, arcade supérieure et parfois inférieure). Chez Venus Estetika, le package inclut : bilan dentaire complet, empreintes numériques, fabrication des facettes sur mesure, pose et ajustement, hébergement hôtel 5★ et transferts. Le séjour dure 5 à 7 jours."
                    }
                }
            ]
        };
    }
    if (slug === 'greffe-cheveux') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-cheveux#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une greffe de cheveux FUE en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une greffe de cheveux FUE Saphir en Tunisie chez Venus Estetika est de 2 200€ tout compris : extraction et implantation jusqu'à 4 000 greffons, anesthésie locale, kit de soins post-opératoires, hôtel 5★ (4 nuits), transferts aéroport et suivi 12 mois. Il n'y a pas de facturation au greffon — le tarif est forfaitaire. En France, la même greffe coûte entre 5 000€ et 8 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre la greffe FUE et la greffe DHI ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La FUE (Follicular Unit Extraction) Saphir utilise des lames en saphir pour créer les micro-incisions dans la zone receveuse après extraction des greffons. La DHI (Direct Hair Implantation) utilise un stylo Choi pour implanter directement les greffons sans incision préalable. La FUE est idéale pour les grandes surfaces (3 000-5 000 greffons), tandis que la DHI offre une densité supérieure sur des zones ciblées."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand voit-on les résultats d'une greffe de cheveux ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les premiers cheveux greffés tombent entre la 2ème et la 4ème semaine (phase de chute normale). La repousse commence à partir du 3ème mois. Les résultats deviennent visibles entre le 6ème et le 8ème mois, avec 60 à 70% des cheveux en place. Le résultat définitif est apprécié entre 12 et 18 mois après la greffe, lorsque tous les cheveux ont atteint leur longueur et densité finales."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La greffe de cheveux est-elle douloureuse ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, la greffe de cheveux est réalisée sous anesthésie locale et est indolore pendant toute la durée de l'intervention. Une légère sensation de tiraillement peut être ressentie lors de l'injection de l'anesthésiant. Après l'opération, des démangeaisons et une sensibilité au niveau de la zone donneuse sont possibles pendant 3 à 5 jours, facilement gérées par les antidouleurs prescrits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de greffons sont nécessaires pour une greffe de cheveux ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le nombre de greffons dépend de la classification Norwood de votre calvitie : Norwood II-III (golfes temporaux) : 1 500 à 2 500 greffons. Norwood III-IV (golfes + vertex) : 2 500 à 3 500 greffons. Norwood V-VI (calvitie avancée) : 3 500 à 5 000 greffons. Lors de votre consultation, le chirurgien évalue précisément le nombre de greffons nécessaires à partir de vos photos et de votre zone donneuse."
                    }
                }
            ]
        };
    }
    if (slug === 'greffe-dhi') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-dhi#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une greffe DHI en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une greffe DHI en Tunisie chez Venus Estetika est de 2 500€ tout compris : extraction et implantation au stylo Choi jusqu'à 3 500 greffons, anesthésie locale, kit de soins post-opératoires, hôtel 5★ (4 nuits), transferts aéroport et suivi 12 mois. En France, la greffe DHI coûte entre 6 000€ et 10 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la différence entre la DHI et la FUE classique ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La différence principale réside dans la technique d'implantation. En FUE, le chirurgien crée d'abord des micro-incisions puis insère les greffons. En DHI, le stylo Choi permet d'implanter directement le greffon sans incision préalable, contrôlant simultanément la profondeur, l'angle et la direction. Cela offre une densité supérieure et un résultat plus naturel, particulièrement sur la ligne frontale."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Qui est un bon candidat pour la greffe DHI ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La greffe DHI est idéale pour les patients souhaitant une densité maximale sur une zone ciblée (ligne frontale, tempes, vertex), pour les calvities Norwood II à IV, et pour les patients qui souhaitent un rasage minimal de la zone donneuse. Elle est aussi recommandée pour densifier une greffe précédente. Un bilan capillaire permet de déterminer si la DHI est la technique la plus adaptée."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de récupération après une greffe DHI ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La récupération après une greffe DHI est rapide : les croûtes formées sur la zone receveuse tombent en 7 à 10 jours. La zone donneuse cicatrise en 5 à 7 jours. La reprise d'activité professionnelle est possible dès le 3ème jour. Le sport intense est à éviter pendant 3 semaines. Le protocole de lavage et de soins post-greffe est fourni et accompagné par votre coordinateur."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La greffe DHI offre-t-elle une meilleure densité que la FUE ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, la technique DHI permet d'atteindre une densité supérieure d'environ 80 à 90 greffons par cm², contre 40 à 60 pour la FUE classique. Le stylo Choi permet d'implanter les greffons très proches les uns des autres, sans abîmer les follicules adjacents. C'est pourquoi la DHI est privilégiée pour la ligne frontale et les zones nécessitant une haute densité."
                    }
                }
            ]
        };
    }
    if (slug === 'greffe-barbe') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/capillaire/greffe-barbe#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une greffe de barbe en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une greffe de barbe en Tunisie chez Venus Estetika est de 1 800€ tout compris : extraction et implantation jusqu'à 3 000 greffons, anesthésie locale, kit de soins post-opératoires, hôtel 5★ (3 nuits), transferts aéroport et suivi 12 mois. En France, la même intervention coûte entre 4 000€ et 6 000€."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le résultat d'une greffe de barbe est-il naturel ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, le résultat est totalement naturel. Le chirurgien respecte le sens de pousse naturel du poil de barbe, son angle d'implantation et la densité progressive des différentes zones du visage (menton, joues, moustache, pattes). Les greffons sont prélevés dans la zone occipitale du cuir chevelu, dont les poils ont une texture très proche du poil de barbe."
                    }
                },
                {
                    "@type": "Question",
                    "name": "D'où proviennent les greffons pour une greffe de barbe ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les greffons sont prélevés dans la zone donneuse située à l'arrière du crâne (zone occipitale), qui est résistante à la chute. Les follicules de cette zone produisent des poils dont la texture et le diamètre sont compatibles avec le poil de barbe. Le prélèvement par technique FUE ne laisse aucune cicatrice visible dans la zone donneuse."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de récupération après une greffe de barbe ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les micro-croûtes formées au niveau des greffons implantés tombent en 7 à 10 jours. Les rougeurs s'estompent en 2 à 3 semaines. La reprise d'activité professionnelle est possible dès le 2ème jour. Il est important de ne pas toucher, frotter ou gratter la zone greffée pendant les 10 premiers jours et d'appliquer les soins prescrits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand peut-on raser la barbe après une greffe ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il faut attendre au minimum 3 semaines avant le premier rasage doux (tondeuse électrique sans contact direct avec la peau). Le rasage au rasoir mécanique ou au coupe-chou est déconseillé pendant 2 mois. La barbe greffée suit le même cycle de croissance que les cheveux : chute des poils greffés à 2-4 semaines, repousse à partir du 3ème mois, résultat définitif entre 8 et 12 mois."
                    }
                }
            ]
        };
    }
    if (slug === 'liposuccion') {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quel est le prix d'une liposuccion en Tunisie ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le prix d'une liposuccion en Tunisie chez Venus Estetika est à partir de 2 000€ tout compris pour 1 à 2 zones (chirurgie, anesthésie, hospitalisation, vêtement de contention, hôtel 5* pour 5 nuits, transferts aéroport, suivi post-opératoire 12 mois). Le tarif varie selon le nombre de zones traitées. En comparaison, la même intervention coûte entre 3 500€ et 6 000€ en France."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelles zones du corps peut-on traiter par liposuccion ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La liposuccion peut traiter de nombreuses zones du corps : ventre, flancs (poignées d'amour), cuisses (internes et externes), genoux, bras, dos, double menton, et culotte de cheval. Plusieurs zones peuvent être traitées lors d'une même intervention pour un résultat harmonieux. Votre chirurgien établit un plan de traitement personnalisé lors de la téléconsultation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La graisse revient-elle après une liposuccion ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, les cellules graisseuses retirées lors de la liposuccion ne se régénèrent pas. Le résultat est donc définitif sur les zones traitées. Cependant, en cas de prise de poids importante, les cellules graisseuses restantes peuvent grossir. Il est donc essentiel de maintenir une hygiène de vie équilibrée (alimentation et activité physique) pour conserver le résultat obtenu."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps faut-il porter le vêtement de contention après une liposuccion ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le port du vêtement de contention (gaine, panty ou manchons selon les zones) est obligatoire pendant 4 semaines jour et nuit, puis 2 semaines supplémentaires uniquement le jour. Ce vêtement est inclus dans votre forfait. Il permet de réduire l'œdème, d'optimiser la rétraction cutanée et de favoriser un résultat lisse et homogène."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la durée de convalescence après une liposuccion ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La convalescence après une liposuccion est de 5 à 7 jours avant la reprise d'une activité légère. Des ecchymoses et un œdème sont normaux les 2 à 3 premières semaines. La reprise professionnelle (travail de bureau) est possible dès 7 à 10 jours. La reprise sportive est autorisée après 4 à 6 semaines. Le résultat définitif est apprécié à 3 mois, une fois l'œdème entièrement résorbé."
                    }
                }
            ]
        };
    }
    return {};
}
