import type { InterventionData } from '../types';

export const lipofillingVisage: InterventionData = {
  slug: 'lipofilling-visage',
  categorySlug: 'chirurgie-visage',
  name: 'Lipofilling Visage',
  fullTitle: 'Lipofilling du Visage en Tunisie',

  hero: {
    title: "Lipofilling visage en Tunisie : rajeunissez naturellement avec votre propre graisse",
    subtitle: "Un rajeunissement 100% naturel, sans corps \u00e9tranger. Restaurez les volumes perdus avec votre propre graisse.",
    price: "1 800\u20ac",
    priceOld: "3 500-7 000\u20ac",
    badge: "Rajeunissement Naturel",
    stats: "+2 500 patients accompagn\u00e9s | Note 4.8/5 sur Google | Chirurgiens membres ISAPS",
    image: "/images/heroes/chirurgie-visage-hero.jpg",
    imageAlt: "Lipofilling visage en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que le lipofilling du visage ?",
      content: `<p>Le lipofilling (ou lipostructure) est une technique de rajeunissement facial qui consiste \u00e0 pr\u00e9lever de la graisse sur votre corps (abdomen, cuisses), \u00e0 la purifier en laboratoire, puis \u00e0 la r\u00e9injecter pr\u00e9cis\u00e9ment dans les zones creuses de votre visage. Le r\u00e9sultat est 100% naturel car aucun corps \u00e9tranger n'est introduit dans votre organisme.</p>
<p>Chez Venus Estetika, nous pratiquons deux techniques compl\u00e9mentaires selon la zone \u00e0 traiter et l'objectif recherch\u00e9.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de lipofilling du visage',
      items: [
        {
          name: 'Lipostructure de Coleman',
          description: "Pr\u00e9l\u00e8vement, purification et r\u00e9injection de graisse autologue pour restaurer les volumes (pommettes, sillons, tempes).",
        },
        {
          name: 'Nanofat',
          description: "Micro-injection de graisse ultra-filtr\u00e9e pour traitement fin de la peau, cernes et ridules superficielles.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre lipofilling visage en Tunisie ?',
      items: [
        { icon: 'Shield', title: "Chirurgien sp\u00e9cialis\u00e9 en lipostructure", description: "Expertise reconnue en techniques de Coleman et Nanofat pour un r\u00e9sultat optimal." },
        { icon: 'Award', title: "100% naturel, sans corps \u00e9tranger", description: "Votre propre graisse est utilis\u00e9e. Z\u00e9ro risque de rejet, r\u00e9sultat durable et naturel." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5 \u00e9toiles \u00e0 Tunis (4 nuits) avec transferts VIP a\u00e9roport inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations de contr\u00f4le \u00e0 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
        { icon: 'Heart', title: "R\u00e9sultat durable et enrichi", description: "Cellules souches pr\u00e9sentes dans la graisse am\u00e9liorent la qualit\u00e9 globale de la peau." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du lipofilling visage en Tunisie',
    rows: [
      { label: 'Lipofilling visage (pommettes + sillons)', priceVenus: '1 800 \u20ac', priceFrance: '3 500-5 000 \u20ac' },
      { label: 'Lipofilling visage complet', priceVenus: '2 500 \u20ac', priceFrance: '5 000-7 000 \u20ac' },
    ],
    includes: [
      'Chirurgien sp\u00e9cialis\u00e9 en lipostructure',
      'Liposuccion de la zone donneuse incluse',
      'S\u00e9jour en clinique agr\u00e9\u00e9e (ambulatoire)',
      'H\u00f4tel 5 \u00e9toiles \u00e0 Tunis (4 nuits)',
      'Transferts priv\u00e9s a\u00e9roport-clinique-h\u00f4tel',
      'Suivi post-op\u00e9ratoire complet (12 mois)',
    ],
  },

  testimonials: [
    {
      name: 'Sophie L.',
      city: 'Paris',
      quote: "J'avais essay\u00e9 les fillers d'acide hyaluronique pendant 3 ans \u2014 r\u00e9sultats temporaires, co\u00fbts r\u00e9currents. Le lipofilling a tout chang\u00e9 : ma propre graisse, r\u00e9sultat durable, qualit\u00e9 de peau am\u00e9lior\u00e9e. Le Dr Ben Gaied a repositionn\u00e9 mes volumes avec une pr\u00e9cision artistique. Je n'aurais pas pu esp\u00e9rer mieux.",
      intervention: 'Lipofilling visage complet',
      savings: '3 800\u20ac',
      rating: 5,
    },
    {
      name: 'Val\u00e9rie T.',
      city: 'Nice',
      quote: "Mes pommettes creuses me vieillissaient \u00e9norm\u00e9ment. Apr\u00e8s le lipofilling pommettes et sillons chez Venus Estetika, j'ai retrouv\u00e9 le visage de mes 40 ans. La technique Coleman utilis\u00e9e par l'\u00e9quipe est irr\u00e9prochable. Aucune cicatrice visible et un r\u00e9sultat que je n'aurais jamais obtenu avec des injections.",
      intervention: 'Lipofilling pommettes + sillons',
      savings: '2 900\u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Lipofilling Visage Tunisie | Injection de Graisse d\u00e8s 1 800\u20ac \u2014 Venus Estetika',
    description: "Lipofilling du visage en Tunisie : comblement naturel par injection de votre propre graisse. Rajeunissement sans corps \u00e9tranger. D\u00e8s 1 800\u20ac tout compris.",
    ogImage: '/images/heroes/chirurgie-visage-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage',
  },

  devisSlug: 'lipofilling-visage',
};
