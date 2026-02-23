import type { InterventionData } from '../types';

export const peeling: InterventionData = {
  slug: 'peeling',
  categorySlug: 'medecine-esthetique',
  name: 'Peeling',
  fullTitle: 'Peeling en Tunisie',

  hero: {
    title: "Peeling en Tunisie : renouvelez votre peau en profondeur",
    subtitle: "Peeling chimique TCA ou glycolique réalisé par un médecin esthétique. Taches, cicatrices d'acné, teint terne — une solution dermatologique éprouvée.",
    price: "250€",
    priceOld: "400–700€",
    badge: "Médecine Esthétique",
    stats: "Résultats visibles en 2–3 semaines · TCA ou glycolique · Sur mesure",
    image: "/images/heroes/medecine-esthetique-hero.jpg",
    imageAlt: "Peeling chimique TCA Tunisie — Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "Un renouvellement cutané contrôlé et précis",
      content: `<p>Le peeling chimique consiste à appliquer une solution acide sur la peau pour en provoquer un renouvellement contrôlé. La couche superficielle ou moyenne de la peau est éliminée, révélant une peau neuve, plus lisse, plus lumineuse et aux teintes uniformisées.</p>
<p>Le type de peeling (superficiel ou moyen) est déterminé par le médecin en fonction de votre type de peau, de la profondeur des imperfections à traiter et de votre tolérance. Le peeling TCA offre des résultats marqués sur les taches et cicatrices d'acné.</p>`,
    },
    {
      type: 'techniques',
      title: 'Types de peeling',
      items: [
        { name: "Peeling Moyen (TCA)", description: "Acide trichloroacétique pour traitement en profondeur. Résultat marqué sur taches et cicatrices." },
        { name: "Peeling Superficiel", description: "Acide glycolique pour éclat et entretien. Aucune éviction sociale, idéal en cure répétée." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Quels problèmes traite le peeling ?',
      items: [
        "Taches pigmentaires",
        "Cicatrices d'acné",
        "Teint terne et irrégulier",
        "Ridules superficielles",
        "Pores dilatés",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Peeling Chimique en Tunisie',
    rows: [
      { label: 'Peeling moyen TCA', priceVenus: '250 €', priceFrance: '400–700 €' },
      { label: 'Peeling superficiel (acide glycolique)', priceVenus: '150 €', priceFrance: '200–400 €' },
      { label: 'Cure 3 séances (superficiel)', priceVenus: '400 €', priceFrance: '600–1 200 €' },
    ],
    includes: [
      'Consultation médicale incluse',
      'Protocole personnalisé selon type de peau',
      'Conseils post-peeling détaillés',
      'Résultats visibles en 2 à 3 semaines',
    ],
  },

  testimonials: [
    { name: "Amandine C.", city: "Marseille", quote: "J'avais des taches pigmentaires importantes sur le front et les joues, séquelles d'une grossesse. Après le peeling TCA, le résultat au bout de 3 semaines était bluffant. La moitié des taches avaient disparu et le teint était parfaitement unifié. Le Dr Bouchnak m'a très bien préparée au protocole de soin post-peeling.", intervention: "Peeling moyen TCA — taches pigmentaires", savings: "300 €", rating: 5 },
    { name: "Justine F.", city: "Lille", quote: "Des cicatrices d'acné me complexaient depuis l'adolescence. J'avais essayé des produits en pharmacie sans succès. Le peeling chimique a vraiment creusé dans ces cicatrices — la peau s'est renouvelée et les marques se sont considérablement atténuées. Je suis enfin à l'aise sans fond de teint.", intervention: "Peeling TCA — cicatrices acné", savings: "250 €", rating: 5 },
    { name: "Patricia G.", city: "Nice", quote: "J'ai opté pour la cure de 3 séances de peeling superficiel pendant mon séjour à Tunis. C'était parfait : aucune éviction sociale, je pouvais profiter de mon séjour entre les séances. Mon teint est maintenant lumineux et mes pores sont nettement moins visibles. Je reviendrai chaque année.", intervention: "Cure peeling glycolique 3 séances", savings: "400 €", rating: 5 },
  ],

  meta: {
    title: "Peeling Tunisie | Peeling Moyen TCA dès 250€ — Venus Estetika",
    description: "Peeling chimique en Tunisie : renouvellement cutané, éclat du teint, traitement taches et cicatrices d'acné. Dès 250€.",
    canonical: 'https://venus-estetika.com/interventions/medecine-esthetique/peeling',
  },

  devisSlug: 'peeling',

  modules: {
    guidedTour: true,
  },
};
