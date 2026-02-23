import type { InterventionData } from '../types';

export const liftingCervicoFacial: InterventionData = {
  slug: 'lifting-cervico-facial',
  categorySlug: 'chirurgie-visage',
  name: 'Lifting Cervico-Facial',
  fullTitle: 'Lifting Cervico-Facial en Tunisie',

  hero: {
    title: "Lifting cervico-facial en Tunisie : rajeunissez visage et cou durablement",
    subtitle: "Repositionnez les tissus rel\u00e2ch\u00e9s du visage et du cou pour un r\u00e9sultat naturel de 8 \u00e0 12 ans. Clinique agr\u00e9\u00e9e, h\u00f4tel 5 \u00e9toiles, suivi 12 mois inclus.",
    price: "3 500\u20ac",
    priceOld: "6 000-10 000\u20ac",
    badge: "Rajeunissement Facial Premium",
    stats: "+2 500 patients accompagn\u00e9s | Note 4.8/5 sur Google | Chirurgiens membres ISAPS",
    image: "/images/heroes/chirurgie-visage-hero.jpg",
    imageAlt: "Lifting cervico-facial en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-atef-ghedira',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que le lifting cervico-facial ?",
      content: `<p>Le lifting cervico-facial est l'intervention reine du rajeunissement facial. Elle consiste \u00e0 repositionner les structures profondes du visage (SMAS), \u00e0 retirer l'exc\u00e8s de peau et \u00e0 red\u00e9finir l'ovale du visage et le galbe du cou. Le r\u00e9sultat est naturel, sans effet "tir\u00e9", gr\u00e2ce aux techniques modernes de repositionnement.</p>
<p>Chez Venus Estetika, nos chirurgiens sp\u00e9cialis\u00e9s proposent deux approches compl\u00e9mentaires selon votre degr\u00e9 de rel\u00e2chement et vos attentes.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de lifting cervico-facial',
      items: [
        {
          name: 'SMAS Lifting',
          description: "Repositionnement musculaire profond pour un r\u00e9sultat naturel et durable. Recommand\u00e9 pour les rel\u00e2chements importants.",
        },
        {
          name: 'Mini-Lift',
          description: "Version all\u00e9g\u00e9e pour rel\u00e2chement mod\u00e9r\u00e9. Cicatrices r\u00e9duites et convalescence plus courte.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre lifting cervico-facial ?',
      items: [
        { icon: 'Shield', title: "Chirurgien sp\u00e9cialiste du lifting facial", description: "Nos chirurgiens sont sp\u00e9cialistes reconnus du lifting cervico-facial, avec des r\u00e9sultats naturels et durables." },
        { icon: 'Award', title: "Cliniques agr\u00e9\u00e9es", description: "Nous op\u00e9rons exclusivement dans des cliniques agr\u00e9\u00e9es par le Minist\u00e8re de la Sant\u00e9 tunisien avec mat\u00e9riel de pointe." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5 \u00e9toiles \u00e0 Tunis (5 nuits) avec transferts VIP a\u00e9roport inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations de contr\u00f4le \u00e0 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
        { icon: 'Heart', title: "R\u00e9sultat durable 8 \u00e0 12 ans", description: "Techniques modernes de repositionnement SMAS pour un r\u00e9sultat naturel et durable." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du lifting cervico-facial en Tunisie',
    rows: [
      { label: 'Lifting cervico-facial complet', priceVenus: '3 500 \u20ac', priceFrance: '6 000-10 000 \u20ac' },
      { label: 'Mini-lift (short-scar)', priceVenus: '2 500 \u20ac', priceFrance: '4 000-6 000 \u20ac' },
    ],
    includes: [
      'Chirurgien sp\u00e9cialiste du lifting facial',
      'S\u00e9jour en clinique agr\u00e9\u00e9e (2 nuits)',
      'H\u00f4tel 5 \u00e9toiles \u00e0 Tunis (5 nuits)',
      'Transferts priv\u00e9s a\u00e9roport-clinique-h\u00f4tel',
      'Suivi post-op\u00e9ratoire complet (12 mois)',
    ],
  },

  testimonials: [
    {
      name: 'Sylvie B.',
      city: 'Marseille',
      quote: "\u00c0 58 ans, j'avais le visage qui ne correspondait plus \u00e0 l'\u00e9nergie que je ressentais. Mon lifting chez Venus Estetika m'a rendu 12 ans. Le Dr Ghedira a r\u00e9alis\u00e9 un travail d'une pr\u00e9cision remarquable \u2014 le r\u00e9sultat est naturel, personne ne voit que j'ai \u00e9t\u00e9 op\u00e9r\u00e9e. Je me sens simplement mieux dans ma peau.",
      intervention: 'Lifting cervico-facial SMAS',
      savings: '5 800\u20ac',
      rating: 5,
    },
    {
      name: 'Nathalie P.',
      city: 'Strasbourg',
      quote: "J'avais demand\u00e9 des devis en France \u2014 entre 8 000 et 11 000 euros. Venus Estetika m'a propos\u00e9 un forfait complet \u00e0 3 500 euros avec h\u00f4tel 5 \u00e9toiles inclus. La qualit\u00e9 du soin a \u00e9t\u00e9 exemplaire. Six mois apr\u00e8s, mon ovale de visage est red\u00e9fini et mon cou est parfaitement galb\u00e9.",
      intervention: 'Lifting cervico-facial complet',
      savings: '6 200\u20ac',
      rating: 5,
    },
    {
      name: 'Fran\u00e7oise M.',
      city: 'Bordeaux',
      quote: "Le suivi post-op\u00e9ratoire \u00e0 distance via t\u00e9l\u00e9consultation est une vraie valeur ajout\u00e9e. Mon chirurgien a \u00e9t\u00e9 disponible \u00e0 chaque \u00e9tape de la cicatrisation. R\u00e9sultat \u00e0 6 mois : naturel, durable, et exactement ce que je voulais. Je recommande Venus Estetika sans h\u00e9sitation.",
      intervention: 'Mini-lift',
      savings: '4 100\u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Lifting Visage Tunisie | Lifting Cervico-Facial d\u00e8s 3 500\u20ac \u2014 Venus Estetika',
    description: 'Lifting cervico-facial en Tunisie. Rajeunissement complet du visage et du cou. R\u00e9sultat naturel, chirurgien expert. Forfait tout compris d\u00e8s 3 500\u20ac.',
    ogImage: '/images/heroes/chirurgie-visage-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial',
  },

  devisSlug: 'lifting-visage',
};
