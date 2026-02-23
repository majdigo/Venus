import type { InterventionData } from '../types';

export const greffeDhi: InterventionData = {
  slug: 'greffe-dhi',
  categorySlug: 'capillaire',
  name: 'Greffe DHI',
  fullTitle: 'Greffe DHI en Tunisie',

  hero: {
    title: "Greffe DHI en Tunisie : la technique d'implantation directe pour une densité maximale",
    subtitle: "Le stylo Choi révolutionne la greffe capillaire : implantation directe sans incision préalable, densité maximale, récupération accélérée.",
    price: "2 200€",
    priceOld: "5 000-8 000€",
    badge: "Excellence Capillaire",
    stats: "Stylo Choi dernière génération — greffons illimités — résultat naturel garanti",
    image: "/images/interventions/greffe-de-cheveux.jpg",
    imageAlt: "Greffe DHI en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "La technique DHI : l'avant-garde de la greffe capillaire",
      content: `<p>La technique DHI (Direct Hair Implantation) représente l'évolution ultime de la greffe FUE. Le stylo implanteur Choi permet d'extraire et d'implanter chaque follicule en un seul geste, sans créer de canal préalable dans le cuir chevelu. Le résultat : une densité inégalée et une récupération accélérée.</p>
<p>Nos spécialistes capillaires contrôlent avec une précision millimétrique l'angle, la direction et la profondeur d'implantation de chaque greffon, pour un résultat 100% naturel indétectable.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de greffe DHI',
      items: [
        { name: "Stylo Choi (DHI)", description: "Implantation directe sans canal préalable. Contrôle parfait de l'angle, de la direction et de la profondeur de chaque greffon." },
        { name: "DHI Sans Rasage", description: "Option pour les patients ne souhaitant pas raser la zone donneuse. Discrétion totale, idéal pour les femmes et les cheveux longs." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Inclus dans chaque Greffe DHI',
      items: [
        "Spécialiste capillaire certifié",
        "Mega Session — greffons illimités",
        "Stylo Choi dernière génération",
        "1 séance PRP (Plasma Riche en Plaquettes)",
        "Anesthésie Dermojet sans aiguille",
        "Kit post-opératoire complet",
        "Hôtel 5 étoiles 3 nuits",
        "Transferts VIP aéroport-clinique",
      ],
    },
  ],

  pricing: {
    title: 'Tarif Greffe DHI Tout Compris',
    rows: [
      { label: 'Greffe DHI Stylo Choi', priceVenus: '2 200 €', priceFrance: '5 000-8 000 €' },
    ],
    includes: [
      'Mega Session — nombre de greffons illimité',
      'PRP et Dermojet inclus',
      'Hôtel 5 étoiles (3 Nuits)',
      'Résultat final visible M12-M15',
    ],
  },

  testimonials: [
    { name: "Thomas G.", city: "Paris", quote: "J'avais choisi la DHI pour sa précision sur la ligne frontale. Dr Bouchnak a travaillé follicule par follicule avec le stylo Choi. À 13 mois, la densité est impressionnante et personne ne devinerait que j'ai eu une greffe. Expérience parfaite du début à la fin.", intervention: "Greffe DHI Stylo Choi", savings: "4 500€", rating: 5 },
    { name: "Fatima L.", city: "Bruxelles", quote: "En tant que femme, je voulais la DHI sans rasage pour rester discrète. Venus Estetika a parfaitement géré ça. Le résultat à 12 mois est naturel, dense et harmonieux. Mon coiffeur dit que ma chevelure a l'air en excellente santé. Je suis ravie.", intervention: "Greffe DHI Sans Rasage", savings: "3 800€", rating: 5 },
    { name: "Vincent M.", city: "Bordeaux", quote: "Après des années de complexes liés à ma calvitie, j'ai enfin sauté le pas. Prise en charge impeccable depuis le diagnostic à distance jusqu'au suivi post-op. Le shock loss m'avait inquiété mais Dr Bouchnak m'avait prévenu. À 15 mois, c'est magnifique.", intervention: "Greffe DHI Mega Session", savings: "5 800€", rating: 5 },
  ],

  meta: {
    title: "Greffe DHI Tunisie | Implantation Directe dès 2 200€ — Venus Estetika",
    description: "Greffe de cheveux DHI en Tunisie (stylo Choi). Implantation directe sans incision préalable. Densité maximale. Dès 2 200€ tout compris.",
    canonical: 'https://venus-estetika.com/interventions/capillaire/greffe-dhi',
  },

  devisSlug: 'greffe-dhi',

  modules: {
    guidedTour: true,
  },
};
