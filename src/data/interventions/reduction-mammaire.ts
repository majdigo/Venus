import type { InterventionData } from '../types';

export const reductionMammaire: InterventionData = {
  slug: 'reduction-mammaire',
  categorySlug: 'chirurgie-mammaire',
  name: 'R\u00e9duction Mammaire',
  fullTitle: 'R\u00e9duction Mammaire en Tunisie',

  hero: {
    title: "R\u00e9duction mammaire en Tunisie : lib\u00e9rez-vous du poids de l'hypertrophie",
    subtitle: "Douleurs dorsales, mauvaise posture, complexes vestimentaires \u2014 l'hypertrophie mammaire impacte votre quotidien. Notre chirurgien dipl\u00f4m\u00e9 en France vous propose une r\u00e9duction pr\u00e9cise et harmonieuse.",
    price: "2 800 \u20ac",
    priceOld: "5 000-8 000 \u20ac",
    badge: "Chirurgie Mammaire Experte",
    stats: "+2 500 patientes accompagn\u00e9es | Note 4.8/5 sur Google | Chirurgien dipl\u00f4m\u00e9 en France",
    image: "/images/heroes/chirurgie-mammaire-hero.jpg",
    imageAlt: "R\u00e9duction mammaire Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la r\u00e9duction mammaire ? Tout comprendre",
      content: `<p>La r\u00e9duction mammaire, ou mammoplastie de r\u00e9duction, est une intervention chirurgicale qui consiste \u00e0 retirer l'exc\u00e8s de tissu glandulaire, adipeux et cutan\u00e9 du sein. Elle permet de diminuer le volume, de remonter la poitrine et d'am\u00e9liorer son galbe g\u00e9n\u00e9ral. Au-del\u00e0 de l'aspect esth\u00e9tique, c'est une chirurgie fonctionnelle qui soulage des douleurs dorsales, des cervicalgies et des sillons cutan\u00e9s souvent invalidants.</p>
<p>Chez Venus Estetika, la r\u00e9duction mammaire est r\u00e9alis\u00e9e par notre chirurgien plasticien et reconstructeur, dipl\u00f4m\u00e9 de la Facult\u00e9 de M\u00e9decine de Paris. Fort de plus de 15 ans d'exp\u00e9rience, il adapte la technique \u00e0 votre morphologie pour un r\u00e9sultat naturel, proportionn\u00e9 et durable.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de r\u00e9duction mammaire',
      items: [
        {
          name: 'Technique T invers\u00e9',
          description: "Recommand\u00e9e pour les fortes r\u00e9ductions. La cicatrice, discr\u00e8te, suit le contour de l'ar\u00e9ole, descend verticalement et suit le sillon sous-mammaire. Elle permet de retirer un volume important tout en remodelant parfaitement le sein.",
        },
        {
          name: 'Technique Verticale',
          description: "Id\u00e9ale pour les r\u00e9ductions mod\u00e9r\u00e9es. La cicatrice plus courte se limite au contour de l'ar\u00e9ole et \u00e0 une ligne verticale. Elle offre un r\u00e9sultat esth\u00e9tique excellent avec un minimum de marques.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre r\u00e9duction mammaire ?',
      items: [
        { icon: 'Shield', title: "Chirurgien dipl\u00f4m\u00e9 en France", description: "Notre chirurgien est dipl\u00f4m\u00e9 de la Facult\u00e9 de M\u00e9decine de Paris et membre de soci\u00e9t\u00e9s chirurgicales internationales. Plus de 15 ans d'exp\u00e9rience en chirurgie mammaire." },
        { icon: 'Award', title: "Clinique agr\u00e9\u00e9e aux normes ISO", description: "Bloc op\u00e9ratoire certifi\u00e9 aux normes europ\u00e9ennes. \u00c9quipe d'anesth\u00e9sie et de r\u00e9animation d\u00e9di\u00e9e pour votre s\u00e9curit\u00e9 maximale." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "Apr\u00e8s 2 nuits en clinique, r\u00e9cup\u00e9rez confortablement dans un h\u00f4tel 5\u2605 partenaire. Notre infirmi\u00e8re passe vous voir chaque jour." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations programm\u00e9es \u00e0 1, 3, 6 et 12 mois. Votre chirurgien surveille vos cicatrices et r\u00e9pond \u00e0 toutes vos questions." },
        { icon: 'Heart', title: "R\u00e9sultat naturel et harmonieux", description: "Technique adapt\u00e9e \u00e0 votre morphologie pour une poitrine proportionn\u00e9e, f\u00e9minine et en parfaite harmonie avec votre silhouette." },
      ],
    },
  ],

  pricing: {
    title: 'Prix de la r\u00e9duction mammaire : France vs Venus',
    rows: [
      { label: 'R\u00e9duction mammaire \u2014 Technique T invers\u00e9', priceVenus: '2 800 \u20ac', priceFrance: '8 000 \u20ac' },
      { label: 'R\u00e9duction mammaire \u2014 Technique Verticale', priceVenus: '2 800 \u20ac', priceFrance: '5 000 \u20ac' },
      { label: 'R\u00e9duction + Lifting (mastopexie)', priceVenus: '3 500 \u20ac', priceFrance: '9 500 \u20ac' },
    ],
    includes: [
      'Chirurgien plasticien',
      'Clinique 2 nuits',
      'Soutien-gorge m\u00e9dical',
      'H\u00f4tel 5\u2605 5 nuits',
      'Transferts VIP inclus',
      'Suivi post-op\u00e9ratoire 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'Isabelle C.',
      city: 'Paris',
      quote: "J'avais des douleurs dorsales chroniques depuis des ann\u00e9es. Apr\u00e8s ma r\u00e9duction avec le Dr Balti, c'est une lib\u00e9ration totale. Je peux enfin faire du sport sans souffrir. Le r\u00e9sultat est proportionn\u00e9 et tr\u00e8s naturel.",
      intervention: 'R\u00e9duction mammaire',
      savings: '5 200 \u20ac',
      rating: 5,
    },
    {
      name: 'Laura M.',
      city: 'Gen\u00e8ve',
      quote: "La prise en charge de Venus Estetika est vraiment compl\u00e8te. L'h\u00f4tel 5 \u00e9toiles, les transferts, le suivi post-op... tout \u00e9tait parfait. Ma cicatrisation s'est tr\u00e8s bien pass\u00e9e et mes cicatrices s'estompent rapidement.",
      intervention: 'Mammoplastie de r\u00e9duction',
      savings: '4 800 \u20ac',
      rating: 5,
    },
    {
      name: 'Amandine F.',
      city: 'Toulouse',
      quote: "En France j'avais un devis \u00e0 7 500 \u20ac, chez Venus j'ai pay\u00e9 moins de la moiti\u00e9 pour une qualit\u00e9 \u00e9quivalente. Le Dr Ghedira est tr\u00e8s professionnel et \u00e0 l'\u00e9coute. Je referai mes soins esth\u00e9tiques en Tunisie sans h\u00e9siter.",
      intervention: 'R\u00e9duction mammaire',
      savings: '4 700 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'R\u00e9duction Mammaire Tunisie | D\u00e8s 2 800\u20ac Tout Compris \u2014 Venus Estetika',
    description: "R\u00e9duction mammaire en Tunisie : diminuez le volume de votre poitrine. Fin des douleurs dorsales. Chirurgien expert. Forfait tout compris d\u00e8s 2 800\u20ac.",
    ogImage: '/images/heroes/chirurgie-mammaire-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire',
  },

  devisSlug: 'reduction-mammaire',
};
