import type { InterventionData } from '../types';

export const greffeCheveux: InterventionData = {
  slug: 'greffe-cheveux',
  categorySlug: 'capillaire',
  name: 'Greffe de Cheveux',
  fullTitle: 'Greffe de Cheveux en Tunisie',
  isPopular: true,

  hero: {
    title: "Greffe de Cheveux en Tunisie : La Densité au Naturel",
    subtitle: "Retrouvez une chevelure dense avec les techniques FUE Saphir et DHI. Jusqu'à 5000 greffons implantés (Mega Session). Séjour VIP et PRP inclus.",
    price: "1 900 €",
    priceOld: "4 500 €",
    badge: "Excellence Capillaire Mondiale",
    stats: "Greffons illimités | PRP inclus | Résultat naturel garanti",
    image: "/images/interventions/greffe-de-cheveux.jpg",
    imageAlt: "Greffe de cheveux FUE en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "L'Expertise Capillaire de Pointe",
      content: `<p>La greffe de cheveux en Tunisie est reconnue mondialement pour son excellence. Nous combinons l'art du tracé de la ligne frontale à la précision micrométrique des dernières technologies (Lames en Saphir, Stylos implanteurs Choi).</p>
<p>Contrairement aux anciennes méthodes (FUT) qui laissaient des cicatrices, nos techniques prélèvent avec une extrême délicatesse les follicules un par un, garantissant une repousse 100% naturelle et dense.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de greffe capillaire',
      items: [
        { name: 'Technique DHI', description: "Implantation directe avec le stylo Choi. Densité maximale, idéal pour redessiner la ligne frontale et les golfes." },
        { name: 'FUE Saphir', description: "Canaux d'ouverture créés avec une lame en pierre de saphir. Cicatrisation 3 fois plus rapide et densité accrue." },
      ],
    },
    {
      type: 'authentic',
      title: 'La Greffe de Cheveux FUE en Tunisie',
      description: "Une Méthode Non Invasives D'extraction D'unités Folliculaires (FUE) Qui Est La Technique Majeure D'implant Capillaire. On prélève chaque racine du cuir chevelu une à une sans laisser de cicatrices visibles.",
      snippets: [
        "La greffe de cheveux FUE est la technique de prélèvement la plus moderne et la plus avancée dans le domaine de la chirurgie de restauration capillaire.",
        "L'extraction se fait systématiquement à l'aide d'un petit punch de forme cylindrique dont le diamètre est compris entre 0,7 et 1 millimètre.",
        "Le grand avantage réside dans la non-incision du cuir chevelu, ce qui signifie implicitement que la méthode ne laissera aucune cicatrice visible contrairement à la FUT.",
        "Les racines transplantées recommenceront à se régénérer dans un intervalle de temps variant de 2 à 4 mois post-opératoire. Les cheveux implantés avec succès vont ainsi subir un cycle de croissance qui demeurera à vie.",
        "Nos Mega-Sessions (jusqu'à 5000 greffons) permettent de recouvrir de vastes zones lors d'une même intervention. La durée d'intervention varie de 4 à 8 heures, durant lesquelles notre équipe reste à vos petits soins.",
      ],
      images: [
        "/images/interventions/greffe-cheveux/microgreffe.jpg",
        "/images/interventions/greffe-cheveux/hair-transplant.jpg",
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika ?',
      items: [
        { icon: 'Shield', title: "Spécialiste FUE/DHI", description: "Le Dr Bouchnak est spécialiste des techniques FUE Saphir et DHI avec des milliers de greffes réalisées." },
        { icon: 'Award', title: "Mega Session illimitée", description: "Jusqu'à 5 000 greffons en une seule session pour une couverture maximale." },
        { icon: 'Stethoscope', title: "PRP inclus", description: "Séance de Plasma Riche en Plaquettes incluse pour stimuler la repousse." },
        { icon: 'Plane', title: "Séjour VIP tout compris", description: "Hôtel 5 étoiles (3 nuits), transferts privés et kit médical post-opératoire inclus." },
      ],
    },
  ],

  pricing: {
    title: 'Tarif et Forfaits Greffe de Cheveux',
    rows: [
      { label: 'Greffe FUE Saphir / DHI (greffons illimités)', priceVenus: '1 900 €', priceFrance: '4 500 €' },
    ],
    includes: [
      'Extraction et Implantation (Greffons Illimités)',
      'Séance de PRP incluse',
      'Hôtel 5 étoiles VIP (3 Nuits)',
      'Consultations pré et post-opératoires',
      'Transferts aéroport, hôtel et clinique inclus',
    ],
  },

  testimonials: [
    { name: "Julien D.", city: "Lyon", quote: "4500 greffons en une seule session. À 12 mois, le résultat est bluffant. Mes collègues pensent que j'ai toujours eu ces cheveux.", intervention: "FUE Saphir", savings: "2 600 €", rating: 5 },
    { name: "Mehdi A.", city: "Strasbourg", quote: "J'ai testé la DHI pour la ligne frontale : densité parfaite, résultat ultra-naturel. Le PRP inclus a vraiment boosté la repousse.", intervention: "DHI + PRP", savings: "3 100 €", rating: 5 },
    { name: "Paul C.", city: "Genève", quote: "Le séjour VIP à l'hôtel était un bonus inattendu. Clinique impeccable, zéro douleur avec le Dermojet. Résultat spectaculaire.", intervention: "Mega Session FUE", savings: "5 000 €", rating: 5 },
  ],

  meta: {
    title: "Greffe de Cheveux Tunisie | FUE & DHI — 1900€ Tout Compris",
    description: "Retrouvez une chevelure dense avec la greffe de cheveux en Tunisie (Techniques FUE Saphir et DHI). Mega Session jusqu'à 5000 greffons. PRP et Séjour VIP inclus.",
    ogImage: '/images/heroes/capillaire-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/capillaire/greffe-cheveux',
  },

  devisSlug: 'greffe-cheveux',

  modules: {
    interactiveAnatomy: 'GreffeCheveuxInteractiveSimulator',
    photoUpload: true,
    guidedTour: true,
  },
};
