import type { InterventionData } from '../types';

export const liftingSeins: InterventionData = {
  slug: 'lifting-seins',
  categorySlug: 'chirurgie-mammaire',
  name: 'Lifting des Seins',
  fullTitle: 'Lifting des Seins en Tunisie',

  hero: {
    title: "Lifting des seins en Tunisie : retrouvez une poitrine haute et ferme",
    subtitle: "Pt\u00f4se, seins tombants apr\u00e8s grossesse ou perte de poids \u2014 la mastopexie redonne hauteur, fermet\u00e9 et jeunesse \u00e0 votre poitrine. Avec ou sans proth\u00e8se, selon vos souhaits.",
    price: "2 500 \u20ac",
    priceOld: "4 500 \u20ac",
    badge: "Rajeunissement Mammaire",
    stats: "+2 500 patientes accompagn\u00e9es | Note 4.8/5 sur Google | Chirurgien dipl\u00f4m\u00e9 en France",
    image: "/images/interventions/lifting-seins/lifting-des-seins1.jpg",
    imageAlt: "Lifting mammaire Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la mastopexie (lifting des seins) ? Tout comprendre",
      content: `<p>La mastopexie, commun\u00e9ment appel\u00e9e lifting des seins, est une intervention chirurgicale qui corrige la pt\u00f4se mammaire \u2014 l'affaissement des seins d\u00fb \u00e0 la grossesse, l'allaitement, une perte de poids ou simplement le vieillissement naturel. L'objectif est de repositionner la glande mammaire, de remonter le complexe ar\u00e9olo-mamelonnaire et de supprimer l'exc\u00e8s de peau pour une poitrine ferme, haute et harmonieuse.</p>
<p>Chez Venus Estetika, notre chirurgien plasticien dipl\u00f4m\u00e9 en France \u00e9value le degr\u00e9 de pt\u00f4se (classification de Regnault) et vous propose la technique la plus adapt\u00e9e : mastopexie pure pour conserver votre volume ou mastopexie avec proth\u00e8se si vous souhaitez gagner en galbe.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de lifting mammaire',
      items: [
        {
          name: 'Mastopexie Pure',
          description: "Remise en tension et repositionnement de la glande sans implant. Id\u00e9ale pour les patientes qui souhaitent retrouver une poitrine haute et ferme en conservant leur volume naturel.",
        },
        {
          name: 'Mastopexie + Proth\u00e8se',
          description: "Combinaison du lifting et de l'augmentation mammaire en une seule intervention. Parfaite pour retrouver volume et fermet\u00e9 simultan\u00e9ment.",
        },
      ],
    },
    {
      type: 'authentic',
      title: 'Le Lifting Mammaire en Tunisie',
      description: "Le lifting des seins (ou mastopexie), est une intervention de chirurgie esth\u00e9tique des seins, dont l'objectif principal est de remodeler les seins tombants et retendre la peau pour corriger l'effet de pt\u00f4se mammaire.",
      snippets: [
        "Le but du lifting des seins est simple et clair : corriger les seins qui tombent \u00e0 cause du ph\u00e9nom\u00e8ne de pt\u00f4se mammaire.",
        "L'hypertrophie mammaire est un d\u00e9sagr\u00e9ment inesth\u00e9tique non n\u00e9gligeable. G\u00e9n\u00e9ralement due aux al\u00e9as de la vie comme une perte de poids cons\u00e9quente, une grossesse, la taille et le port de la poitrine ou suite simplement aux effets chronologiques du temps.",
        "Le chirurgien supprime le rel\u00e2chement de peau exc\u00e9dentaire, pour proc\u00e9der par la suite \u00e0 un rehaussement puis remodelage afin de galber, regalber, redresser, remonter les seins.",
        "Au cas o\u00f9 une perte de volume est constat\u00e9e, il est recommand\u00e9 de mettre en place des proth\u00e8ses mammaires pour redonner un certain volume. L'intervention prend de ce fait l'appellation de mastopexie avec mise en place de proth\u00e8ses (ou lifting mammaire avec proth\u00e8ses).",
      ],
      images: [
        "/images/interventions/lifting-seins/lifting-des-seins1.jpg",
        "/images/interventions/lifting-seins/lifting-mammaire-avant-apres.jpg",
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre lifting des seins ?',
      items: [
        { icon: 'Shield', title: "Chirurgien dipl\u00f4m\u00e9 en France", description: "Notre chirurgien est dipl\u00f4m\u00e9 de la Facult\u00e9 de M\u00e9decine de Paris. Sp\u00e9cialiste de la chirurgie mammaire avec plus de 15 ans d'exp\u00e9rience." },
        { icon: 'Award', title: "Technique adapt\u00e9e \u00e0 votre pt\u00f4se", description: "Apr\u00e8s \u00e9valuation pr\u00e9cise du degr\u00e9 de pt\u00f4se (classification de Regnault), la technique chirurgicale est choisie sur-mesure pour optimiser le r\u00e9sultat." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "Convalescence dans un h\u00f4tel partenaire de luxe avec suivi infirmier quotidien. Vous r\u00e9cup\u00e9rez dans les meilleures conditions." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations \u00e0 1, 3, 6 et 12 mois pour surveiller la cicatrisation et l'\u00e9volution du r\u00e9sultat. Disponibilit\u00e9 totale de l'\u00e9quipe." },
        { icon: 'Heart', title: "R\u00e9sultat durable et naturel", description: "La mastopexie offre un r\u00e9sultat de 10 \u00e0 15 ans. Notre chirurgien privil\u00e9gie l'harmonie anatomique pour un rendu 100% naturel." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du lifting des seins : France vs Venus',
    rows: [
      { label: 'Mastopexie seule (sans proth\u00e8se)', priceVenus: '2 500 \u20ac', priceFrance: '4 500-7 000 \u20ac' },
      { label: 'Mastopexie + Proth\u00e8se (augmentation)', priceVenus: '3 500 \u20ac', priceFrance: '6 000-9 000 \u20ac' },
    ],
    includes: [
      'Chirurgien plasticien',
      'Clinique 1 \u00e0 2 nuits',
      'Soutien-gorge m\u00e9dical',
      'H\u00f4tel 5\u2605 5 nuits',
      'Transferts VIP inclus',
      'Suivi post-op\u00e9ratoire 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'Marie L.',
      city: 'Paris',
      quote: "Apr\u00e8s ma perte de poids, ma poitrine \u00e9tait vid\u00e9e. Le Dr Balti a fait des miracles avec un lifting et proth\u00e8ses. R\u00e9sultat magnifique !",
      intervention: 'Lifting seins avec proth\u00e8ses',
      savings: '4 000 \u20ac',
      rating: 5,
    },
    {
      name: 'Julie D.',
      city: 'Gen\u00e8ve',
      quote: "L'\u00e9quipe est aux petits soins, la clinique est tr\u00e8s moderne. Mon lifting sans proth\u00e8se a un rendu super naturel, les cicatrices sont tr\u00e8s fines.",
      intervention: 'Mastopexie sans proth\u00e8se',
      savings: '5 500 \u20ac',
      rating: 5,
    },
    {
      name: 'Sarah B.',
      city: 'Marseille',
      quote: "J'avais tr\u00e8s peur de l'op\u00e9ration, mais l'accompagnement Venus a \u00e9t\u00e9 irr\u00e9prochable. Mon s\u00e9jour \u00e0 l'h\u00f4tel \u00e9tait tr\u00e8s reposant.",
      intervention: 'Mastopexie',
      savings: '3 800 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Lifting des Seins Tunisie | Mastopexie d\u00e8s 2 500\u20ac \u2014 Venus Estetika',
    description: "Lifting mammaire (mastopexie) en Tunisie. Remontez et raffermissez votre poitrine. Avec ou sans proth\u00e8se. D\u00e8s 2 500\u20ac tout compris.",
    ogImage: '/images/heroes/chirurgie-mammaire-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins',
  },

  devisSlug: 'lifting-seins',
};
