import type { InterventionData } from '../types';

export const lipofillingMammaire: InterventionData = {
  slug: 'lipofilling-mammaire',
  categorySlug: 'chirurgie-mammaire',
  name: 'Lipofilling Mammaire',
  fullTitle: 'Lipofilling Mammaire en Tunisie',

  hero: {
    title: "Lipofilling mammaire en Tunisie : augmentation naturelle sans proth\u00e8se",
    subtitle: "Augmentez vos seins d'1 \u00e0 1,5 bonnet avec votre propre graisse \u2014 sans implant, sans corps \u00e9tranger, avec un r\u00e9sultat 100 % naturel au toucher. Double b\u00e9n\u00e9fice : seins augment\u00e9s et silhouette affin\u00e9e.",
    price: "2 800 \u20ac",
    priceOld: "5 000-7 000 \u20ac",
    badge: "Augmentation Naturelle",
    stats: "+2 500 patientes accompagn\u00e9es | Note 4.8/5 sur Google | Graisse autologue 100% naturelle",
    image: "/images/heroes/chirurgie-mammaire-hero.jpg",
    imageAlt: "Lipofilling mammaire Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-imen-ben-gaied',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que le lipofilling mammaire ? Tout comprendre",
      content: `<p>Le lipofilling mammaire, ou lipostructure de Coleman, est une technique d'augmentation des seins par injection de graisse autologue \u2014 c'est-\u00e0-dire votre propre graisse, pr\u00e9lev\u00e9e sur votre corps (abdomen, cuisses, flancs), purifi\u00e9e et r\u00e9inject\u00e9e dans les seins. Il n'y a aucun corps \u00e9tranger, aucun implant : le r\u00e9sultat est naturel \u00e0 100 %, tant visuellement qu'au toucher.</p>
<p>Chez Venus Estetika, notre chirurgien plasticien dipl\u00f4m\u00e9 en France ma\u00eetrise la technique de Coleman dans sa version la plus raffin\u00e9e : pr\u00e9l\u00e8vement atraumatique, centrifugation de la graisse, micro-injections stratifi\u00e9es pour une prise maximale. Le double b\u00e9n\u00e9fice est imm\u00e9diat : vos seins gagnent en volume et vos zones donneuses sont affin\u00e9es en une seule intervention.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de lipofilling mammaire',
      items: [
        {
          name: 'Lipostructure de Coleman',
          description: "La graisse est pr\u00e9lev\u00e9e \u00e0 la canule fine sur l'abdomen, les cuisses ou les flancs, puis purifi\u00e9e par centrifugation. Les micro-injections sont r\u00e9alis\u00e9es en plusieurs couches dans le tissu mammaire pour maximiser la vascularisation et la survie des cellules graisseuses.",
        },
        {
          name: 'Augmentation Mod\u00e9r\u00e9e et Naturelle',
          description: "Le lipofilling permet un gain d'environ 1 \u00e0 1,5 bonnet, id\u00e9al pour un r\u00e9sultat hyper-naturel. Une r\u00e9sorption de 30 % est normale dans les premiers mois. Le r\u00e9sultat stable, obtenu \u00e0 3-4 mois, est d\u00e9finitif pour la graisse int\u00e9gr\u00e9e.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre lipofilling mammaire ?',
      items: [
        { icon: 'Shield', title: "Chirurgien dipl\u00f4m\u00e9 en France", description: "Notre chirurgien ma\u00eetrise la technique de Coleman dans sa version la plus pr\u00e9cise. Dipl\u00f4m\u00e9 de la Facult\u00e9 de M\u00e9decine de Paris, sp\u00e9cialiste de la chirurgie mammaire." },
        { icon: 'Award', title: "Aucun corps \u00e9tranger", description: "Votre propre graisse est utilis\u00e9e. Z\u00e9ro risque de rejet, z\u00e9ro coque p\u00e9ri-proth\u00e9tique, z\u00e9ro allergie. Le r\u00e9sultat est naturel au toucher et visuellement ind\u00e9tectable." },
        { icon: 'Plane', title: "Double b\u00e9n\u00e9fice inclus", description: "La liposuccion de la zone donneuse (abdomen, cuisses ou flancs) est incluse dans le forfait. Vos seins augmentent et votre silhouette s'affine en une seule op\u00e9ration." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations \u00e0 1, 3, 6 et 12 mois pour suivre la prise de greffe et l'\u00e9volution du volume. Votre chirurgien reste disponible pour toute question." },
        { icon: 'Heart', title: "R\u00e9sultat hyper-naturel", description: "Id\u00e9al pour une augmentation discr\u00e8te et authentique. Le sein garde sa souplesse naturelle et r\u00e9agit comme un sein normal \u00e0 la palpation." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du lipofilling mammaire : France vs Venus',
    rows: [
      { label: 'Lipofilling mammaire \u2014 Lipostructure de Coleman', priceVenus: '2 800 \u20ac', priceFrance: '5 000-7 000 \u20ac' },
      { label: 'Lipofilling + Lifting mammaire combin\u00e9', priceVenus: '3 800 \u20ac', priceFrance: '8 000-10 000 \u20ac' },
    ],
    includes: [
      'Chirurgien plasticien',
      'Liposuccion zone donneuse incluse',
      'Clinique 1 nuit',
      'Soutien-gorge m\u00e9dical',
      'H\u00f4tel 5\u2605 5 nuits',
      'Suivi post-op\u00e9ratoire 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'Camille R.',
      city: 'Lyon',
      quote: "Je voulais quelque chose de naturel, sans proth\u00e8se. Le Dr Ben Gaied a utilis\u00e9 ma graisse abdominale et le r\u00e9sultat est bluffant \u2014 personne ne se doute que j'ai \u00e9t\u00e9 op\u00e9r\u00e9e. Mes seins sont plus ronds et totalement naturels au toucher.",
      intervention: 'Lipofilling mammaire',
      savings: '3 500 \u20ac',
      rating: 5,
    },
    {
      name: 'Nathalie V.',
      city: 'Bruxelles',
      quote: "J'avais une petite poitrine et de la graisse en trop sur les hanches. Le lipofilling a r\u00e9solu les deux en m\u00eame temps ! Six mois apr\u00e8s, le volume s'est bien stabilis\u00e9. Je recommande \u00e0 100%.",
      intervention: 'Lipofilling mammaire + affinement hanches',
      savings: '4 200 \u20ac',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      city: 'Paris',
      quote: "L'\u00e9quipe de Venus Estetika m'a expliqu\u00e9 chaque \u00e9tape avant et apr\u00e8s. La convalescence a \u00e9t\u00e9 plus douce que pr\u00e9vu. Mon r\u00e9sultat \u00e0 4 mois est exactement ce que j'esp\u00e9rais : discret, f\u00e9minin et 100% naturel.",
      intervention: 'Lipofilling mammaire',
      savings: '2 800 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Lipofilling Mammaire Tunisie | Augmentation Naturelle d\u00e8s 2 800\u20ac \u2014 Venus Estetika',
    description: "Lipofilling mammaire en Tunisie : augmentation des seins par injection de graisse autologue. R\u00e9sultat 100% naturel, sans proth\u00e8se. D\u00e8s 2 800\u20ac.",
    ogImage: '/images/heroes/chirurgie-mammaire-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire',
  },

  devisSlug: 'lipofilling-mammaire',
};
