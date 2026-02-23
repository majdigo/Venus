import type { InterventionData } from '../types';

export const implantsDentaires: InterventionData = {
  slug: 'implants-dentaires',
  categorySlug: 'dentaire',
  name: 'Implants Dentaires',
  fullTitle: 'Implants Dentaires en Tunisie',

  hero: {
    title: "Implants dentaires en Tunisie : retrouvez un sourire complet et fonctionnel",
    subtitle: "Remplacez vos dents manquantes avec des implants Straumann ou Nobel, les références mondiales de l'implantologie.",
    price: "600 €",
    priceOld: "1 800-2 500 €",
    badge: "Implantologie Premium",
    stats: "+2 500 implants posés | Note 4.9/5 sur Google | Implants Straumann & Nobel",
    image: "/images/heroes/dentaire-hero.jpg",
    imageAlt: "Implants Dentaires Straumann Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramses-mouelhi',

  sections: [
    {
      type: 'intro',
      title: "La solution définitive pour les dents manquantes",
      content: `<p>L'implant dentaire est une racine artificielle en titane (biomatériau compatible avec l'organisme) qui est vissée dans l'os de la mâchoire. Après ostéo-intégration, une couronne en zircone est fixée sur l'implant, reconstituant une dent esthétique et fonctionnelle à 100%.</p>
<p>Nos chirurgiens utilisent exclusivement des implants de marques premium certifiées (Straumann, Nobel Biocare, Osstem), garantissant une durée de vie de 20 à 30 ans avec un entretien approprié.</p>`,
    },
    {
      type: 'techniques',
      title: "Types d'implants dentaires",
      items: [
        { name: "Implant Unitaire", description: "Racine artificielle en titane + couronne zircone, pour remplacer une dent manquante sans toucher aux dents adjacentes." },
        { name: "All-on-4 / All-on-6", description: "4 à 6 implants pour une arcade complète. Prothèse fixe en zircone, idéal pour l'édentement total ou quasi-total." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Inclus dans chaque forfait',
      items: [
        "Chirurgien dentiste spécialisé en implantologie",
        "Implants marque premium (Straumann / Nobel / Osstem)",
        "Scanner 3D (CBCT) pré-opératoire",
        "Couronne en zircone sur-mesure",
        "Hôtel 5 étoiles 5 nuits (sur forfait)",
        "Transferts VIP aéroport-clinique",
        "Suivi et contrôle 12 mois",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Implants Dentaires Tunisie',
    rows: [
      { label: 'Implant unitaire complet', priceVenus: '600 €', priceFrance: '1 800-2 500 €' },
      { label: 'All-on-4 (une arcade)', priceVenus: '4 500 €', priceFrance: '12 000-18 000 €' },
    ],
    includes: [
      'Scanner 3D et plan de traitement personnalisé inclus',
      'Hôtel 5 étoiles et transferts inclus',
      'Implants marque premium certifiée',
      'Couronne zircone sur-mesure',
    ],
  },

  testimonials: [
    { name: "Bernard L.", city: "Paris", quote: "J'avais perdu 3 dents suite à des caries profondes. Les implants Straumann posés à Tunis sont d'une qualité irréprochable. Aucune douleur post-opératoire, le résultat est naturel à 100%. Un gain de 4 000€ par rapport à mon dentiste parisien.", intervention: "3 implants unitaires Straumann", savings: "4 200 €", rating: 5 },
    { name: "Christine V.", city: "Toulouse", quote: "All-on-4 sur l'arcade inférieure. J'avais peur de l'intervention mais le Dr Mouelhi est extrêmement compétent et rassurant. Résultat bluffant : des dents fixes, stables, comme les vraies. Le séjour à l'hôtel était un bonus appréciable.", intervention: "All-on-4 arcade inférieure", savings: "8 500 €", rating: 5 },
    { name: "Philippe T.", city: "Genève", quote: "Édenté depuis des années, j'hésitais à me lancer. Venus Estetika a tout pris en charge : le scanner 3D en amont, le séjour, et le suivi. Mes deux arcades All-on-6 en zircone sont magnifiques. Je peux manger normalement pour la première fois depuis 10 ans.", intervention: "All-on-6 deux arcades", savings: "22 000 €", rating: 5 },
  ],

  meta: {
    title: "Implants Dentaires Tunisie | Dès 600€/implant — Venus Estetika",
    description: "Implants dentaires en Tunisie (Straumann, Nobel). Remplacement dents manquantes. All-on-4 dès 4 500€. Chirurgien dentiste spécialisé. Devis gratuit.",
    canonical: 'https://venus-estetika.com/interventions/dentaire/implants-dentaires',
  },

  devisSlug: 'implants-dentaires',

  modules: {
    interactiveAnatomy: 'ImplantsDentairesInteractiveAnatomy',
    guidedTour: true,
  },
};
