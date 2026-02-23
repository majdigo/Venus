import type { InterventionData } from '../types';

export const acideHyaluronique: InterventionData = {
  slug: 'acide-hyaluronique',
  categorySlug: 'medecine-esthetique',
  name: 'Acide Hyaluronique',
  fullTitle: 'Acide Hyaluronique en Tunisie',

  hero: {
    title: "Acide hyaluronique en Tunisie : comblez, repulpez, rajeunissez",
    subtitle: "Injections de comblement et de volumétrie par un médecin esthétique expert. Résultat immédiat et naturel.",
    price: "200€/seringue",
    priceOld: "350–500€",
    badge: "Médecine Esthétique",
    stats: "Résultat immédiat · Durée 8–18 mois · Entièrement réversible",
    image: "/images/heroes/medecine-esthetique-hero.jpg",
    imageAlt: "Injections acide hyaluronique Tunisie — Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "Le filler star du rajeunissement naturel",
      content: `<p>L'acide hyaluronique est une molécule naturellement présente dans la peau, dont la production diminue avec l'âge. Les injections permettent de restaurer les volumes perdus, de combler les rides profondes et de repulper les lèvres — avec un résultat immédiatement visible.</p>
<p>Entièrement réversible grâce à l'hyaluronidase, l'acide hyaluronique est l'un des traitements esthétiques les plus sûrs et les plus plébiscités au monde. La durée du résultat varie de 8 à 18 mois selon la zone.</p>`,
    },
    {
      type: 'techniques',
      title: "Techniques d'injection",
      items: [
        { name: "Comblement", description: "Injection dans les rides et sillons pour les lisser et restaurer un contour harmonieux." },
        { name: "Volumétrie", description: "Restauration des volumes du visage perdus avec l'âge : pommettes, ovale, tempes." },
      ],
    },
    {
      type: 'ideal-profile',
      title: "Quelles zones traite l'acide hyaluronique ?",
      items: [
        "Sillons nasogéniens",
        "Lèvres (volume et contour)",
        "Pommettes (volumétrie)",
        "Cernes creux",
        "Ovale du visage",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Acide Hyaluronique en Tunisie',
    rows: [
      { label: '1 seringue (zone standard)', priceVenus: '200–300 €', priceFrance: '350–500 €' },
      { label: 'Lèvres (1 seringue)', priceVenus: '250 €', priceFrance: '350–450 €' },
      { label: 'Cernes (1 seringue)', priceVenus: '300 €', priceFrance: '400–500 €' },
      { label: 'Full Face (3-4 seringues)', priceVenus: '700–900 €', priceFrance: '1 200–2 000 €' },
    ],
    includes: [
      'Consultation médicale incluse',
      'Produit de marque certifiée',
      'Résultat immédiat et naturel',
      'Durée 8 à 18 mois selon zone',
    ],
  },

  testimonials: [
    { name: "Céline M.", city: "Lyon", quote: "J'avais des lèvres très fines qui me complexaient depuis des années. Le Dr Bouchnak a fait un travail remarquable — naturel, proportionné, exactement ce que je voulais. Aucune ecchymose, résultat visible immédiatement. Je recommande les yeux fermés.", intervention: "Acide hyaluronique lèvres", savings: "180 €", rating: 5 },
    { name: "Isabelle D.", city: "Bruxelles", quote: "Mes sillons nasogéniens me donnaient l'air fatigué. En une séance de 20 minutes, ils ont totalement disparu. Le médecin a pris le temps de bien m'expliquer chaque étape. Le résultat est parfaitement naturel, aucun de mes collègues n'a remarqué que j'avais fait quelque chose.", intervention: "Comblement sillons nasogéniens", savings: "220 €", rating: 5 },
    { name: "Nathalie R.", city: "Paris 16e", quote: "J'ai fait un full face avec 3 seringues pour restaurer mes pommettes et l'ovale du visage. Le tarif était deux fois moins cher qu'à Paris pour une qualité identique. Le suivi post-séance était très rassurant, on m'a rappelée le lendemain pour s'assurer que tout allait bien.", intervention: "Volumétrie complète visage", savings: "650 €", rating: 5 },
  ],

  meta: {
    title: "Acide Hyaluronique Tunisie | Injections dès 200€ — Venus Estetika",
    description: "Injections d'acide hyaluronique en Tunisie : comblement des rides, augmentation des lèvres, volumétrie. Résultat immédiat. Dès 200€/seringue.",
    canonical: 'https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique',
  },

  devisSlug: 'acide-hyaluronique',

  modules: {
    guidedTour: true,
  },
};
