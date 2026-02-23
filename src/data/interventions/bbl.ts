import type { InterventionData } from '../types';

export const bbl: InterventionData = {
  slug: 'bbl',
  categorySlug: 'chirurgie-silhouette',
  name: 'BBL (Brazilian Butt Lift)',
  fullTitle: 'BBL (Brazilian Butt Lift) en Tunisie',
  isPopular: true,

  hero: {
    title: "BBL : Brazilian Butt Lift en Tunisie",
    subtitle: "Sculptez votre taille en sablier. Liposuccion HD de l'abdomen et des hanches, suivie d'une r\u00e9injection de votre propre graisse pour des fesses rebondies et naturelles.",
    price: "3 200\u20ac",
    priceOld: "7 500\u20ac",
    badge: "Top Intervention 2026",
    stats: "Consultation gratuite | Chirurgiens dipl\u00f4m\u00e9s | R\u00e9ponse sous 24h",
    image: "/images/heroes/chirurgie-silhouette-hero.jpg",
    imageAlt: "BBL Brazilian Butt Lift en Tunisie \u2014 Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que le BBL (Brazilian Butt Lift) ?",
      content: `<p>Le BBL (Brazilian Butt Lift) est une intervention de chirurgie esth\u00e9tique qui consiste \u00e0 augmenter le volume et galber les fesses en utilisant votre propre graisse. La graisse est pr\u00e9lev\u00e9e par liposuccion VASER sur les zones rebelles (ventre, hanches, culotte de cheval), purifi\u00e9e par centrifugation, puis r\u00e9inject\u00e9e finement dans les cadrans sup\u00e9rieurs des fesses.</p>
<p>Contrairement aux proth\u00e8ses fessi\u00e8res, il n'y a aucun risque de rejet corporel ou d'allergie (c'est votre propre graisse). Le r\u00e9sultat est le fameux profil en forme de "Sablier" ou "Hourglass", avec une taille affin\u00e9e et des courbes g\u00e9n\u00e9reuses.</p>`,
    },
    {
      type: 'authentic',
      title: "L'Augmentation des Fesses en Tunisie",
      description: "Le Lipofilling Permet de R\u00e9aliser Une Augmentation Naturelle et D\u00e9finitive Du Relief Des Fesses Avec Sa Propre Graisse, Sans Proth\u00e8se. Le lipofilling Fessier Est Une Excellente Solution Pour Regalber Les Fesses Plates. Chirurgien, Clinique N*1 et Prix Pas Cher: Tout Savoir!",
      snippets: [
        "Le but est de regalber les fesses plates ou tombantes de mani\u00e8re 100% naturelle et harmonieuse.",
        "La graisse est pr\u00e9lev\u00e9e par liposuccion VASER sur les zones rebelles (ventre, hanches, culotte de cheval).",
        "Cette graisse purifi\u00e9e (centrifug\u00e9e) est r\u00e9inject\u00e9e finement dans les cadrans sup\u00e9rieurs des fesses.",
        "Contrairement aux proth\u00e8ses fessi\u00e8res, il n'y a aucun risque de rejet corporel ou d'allergie (c'est votre propre graisse).",
        "Le r\u00e9sultat est le fameux profil en forme de 'Sablier' ou 'Hourglass', avec une taille affin\u00e9e et des courbes g\u00e9n\u00e9reuses.",
        "L'intervention n\u00e9cessite le port d'un v\u00eatement de contention (Panty) pendant 1 mois et l'interdiction de s'asseoir directement sur les fesses pendant 15 jours (utilisation d'un coussin BBL).",
      ],
      images: [
        "/images/interventions/bbl/augmentation-fesses.jpg",
        "/images/interventions/bbl/augmentation-fesses-avant-apres.jpg",
        "/images/interventions/bbl/augmentation-fesse-schema.jpg",
      ],
    },
    {
      type: 'advantages',
      title: "Pourquoi choisir Venus Estetika pour votre BBL ?",
      items: [
        { icon: 'Shield', title: "Chirurgiens experts BBL", description: "Nos chirurgiens sont sp\u00e9cialistes du BBL avec des techniques de liposuccion VASER de derni\u00e8re g\u00e9n\u00e9ration." },
        { icon: 'Award', title: "100% naturel, sans proth\u00e8se", description: "Votre propre graisse est utilis\u00e9e. Z\u00e9ro risque de rejet. R\u00e9sultat d\u00e9finitif et naturel au toucher." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5\u2605 partenaire avec coussin BBL fourni pour votre convalescence." },
        { icon: 'Clock', title: "R\u00e9sultat d\u00e9finitif \u00e0 6 mois", description: "La graisse int\u00e9gr\u00e9e est permanente. Le r\u00e9sultat d\u00e9finitif s'appr\u00e9cie \u00e0 6 mois." },
        { icon: 'Heart', title: "Double b\u00e9n\u00e9fice", description: "Taille affin\u00e9e + fesses galb\u00e9es en une seule intervention. Le profil Sablier tant recherch\u00e9." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du BBL en Tunisie',
    rows: [
      { label: 'BBL (Liposuccion + Lipofilling fessier)', priceVenus: '3 200 \u20ac', priceFrance: '7 500 \u20ac' },
      { label: 'BBL + Lipo compl\u00e8te (360\u00b0)', priceVenus: '3 800 \u20ac', priceFrance: '9 000 \u20ac' },
    ],
    includes: [
      'Chirurgien plasticien sp\u00e9cialiste BBL',
      'Liposuccion VASER incluse',
      'Clinique 1 \u00e0 2 nuits',
      'Coussin BBL + Panty de contention',
      'H\u00f4tel 5\u2605 5 nuits',
      'Transferts VIP inclus',
      'Suivi post-op\u00e9ratoire 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'Sofia D.',
      city: 'Gen\u00e8ve',
      quote: "Je complexais sur mes fesses plates. L'op\u00e9ration s'est super bien pass\u00e9e, avec un vrai suivi post-op. Les infirmi\u00e8res \u00e0 l'h\u00f4tel \u00e9taient adorables.",
      intervention: 'BBL & Lipo VASER',
      savings: '5 000 \u20ac',
      rating: 5,
    },
    {
      name: 'Am\u00e9lie K.',
      city: 'Paris',
      quote: "J'ai retrouv\u00e9 une taille de gu\u00eape et des fesses bomb\u00e9es. Le coussin BBL fourni est indispensable ! Le Dr Balti a des mains en or.",
      intervention: 'Lipo compl\u00e8te + BBL',
      savings: '6 500 \u20ac',
      rating: 5,
    },
    {
      name: 'Yasmine R.',
      city: 'Strasbourg',
      quote: "R\u00e9sultat naturel et magnifique. Rien \u00e0 voir avec des proth\u00e8ses. La cicatrisation s'est tr\u00e8s bien pass\u00e9e et le staff m\u00e9dical est au top du professionnalisme.",
      intervention: 'Brazilian Butt Lift + Lipo hanches',
      savings: '4 800 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'BBL Tunisie (Brazilian Butt Lift) Prix & Avis | Venus Estetika',
    description: "Augmentation des fesses par lipofilling en Tunisie. R\u00e9sultat naturel et d\u00e9finitif sans proth\u00e8ses. Prix forfait tout compris \u00e0 partir de 3200\u20ac.",
    ogImage: '/images/heroes/chirurgie-silhouette-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/bbl',
  },

  devisSlug: 'bbl',

  modules: {
    interactiveAnatomy: 'BBLInteractiveAnatomy',
  },
};
