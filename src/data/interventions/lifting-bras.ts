import type { InterventionData } from '../types';

export const liftingBras: InterventionData = {
  slug: 'lifting-bras',
  categorySlug: 'chirurgie-silhouette',
  name: 'Lifting des Bras',
  fullTitle: 'Lifting des Bras (Brachioplastie) en Tunisie',

  hero: {
    title: "Lifting des Bras en Tunisie",
    subtitle: "Retrouvez des bras fermes et toniques. La brachioplastie retire l'exc\u00e8s de peau tombante \u2014 effet ailes de chauve-souris \u2014 souvent li\u00e9 \u00e0 l'\u00e2ge ou \u00e0 une perte de poids massive.",
    price: "2 200\u20ac",
    priceOld: "5 000\u20ac",
    badge: "Chirurgie Post-Bariatrique",
    stats: "Consultation gratuite | Chirurgiens dipl\u00f4m\u00e9s | R\u00e9ponse sous 24h",
    image: "/images/heroes/chirurgie-silhouette-hero.jpg",
    imageAlt: "Lifting des Bras (Brachioplastie) en Tunisie \u2014 Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la brachioplastie (lifting des bras) ?",
      content: `<p>La brachioplastie, ou lifting des bras, est une intervention de chirurgie esth\u00e9tique qui permet de retirer l'exc\u00e8s de peau et de graisse de la face interne des bras. Souvent appel\u00e9 "effet ailes de chauve-souris", ce rel\u00e2chement est fr\u00e9quent apr\u00e8s une perte de poids massive ou avec le vieillissement naturel.</p>
<p>L'intervention dure 1,5 \u00e0 2 heures sous anesth\u00e9sie g\u00e9n\u00e9rale. La cicatrice est plac\u00e9e \u00e0 l'int\u00e9rieur du bras pour \u00eatre la plus discr\u00e8te possible. L'hospitalisation est de 1 \u00e0 2 nuits selon le profil du patient.</p>`,
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre lifting des bras ?',
      items: [
        { icon: 'Shield', title: "Chirurgien expert", description: "Nos chirurgiens sont sp\u00e9cialistes de la chirurgie post-bariatrique et du remodelage corporel." },
        { icon: 'Award', title: "Cicatrices discr\u00e8tes", description: "Technique optimis\u00e9e pour des cicatrices plac\u00e9es \u00e0 l'int\u00e9rieur du bras, \u00e0 peine visibles." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5\u2605 partenaire (5 nuits) avec suivi infirmier inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations programm\u00e9es pour surveiller la cicatrisation et l'\u00e9volution." },
        { icon: 'Heart', title: "Bras fermes et toniques", description: "Retrouvez la libert\u00e9 de porter des v\u00eatements sans manches en toute confiance." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du lifting des bras en Tunisie',
    rows: [
      { label: 'Brachioplastie bilat\u00e9rale', priceVenus: '2 200 \u20ac', priceFrance: '5 000 \u20ac' },
      { label: 'Brachioplastie + Lipo bras', priceVenus: '2 800 \u20ac', priceFrance: '6 000 \u20ac' },
    ],
    includes: [
      'Chirurgien plasticien sp\u00e9cialiste',
      'Clinique 1 \u00e0 2 nuits',
      'Manchons de contention',
      'H\u00f4tel 5\u2605 5 nuits',
      'Transferts VIP inclus',
      'Suivi post-op\u00e9ratoire 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'Christine V.',
      city: 'Lyon',
      quote: "Apr\u00e8s avoir perdu 40 kg avec la sleeve, mes bras pendaient et me complexaient terriblement. Le Dr Balti a r\u00e9alis\u00e9 un travail magnifique. Mes bras sont enfin toniques et la cicatrice est \u00e0 peine visible.",
      intervention: 'Brachioplastie post-bariatrique',
      savings: '3 200 \u20ac',
      rating: 5,
    },
    {
      name: 'Martine D.',
      city: 'Nantes',
      quote: "Je n'osais plus porter de robes sans manches depuis des ann\u00e9es. Apr\u00e8s la brachioplastie \u00e0 Tunis, je me sens lib\u00e9r\u00e9e. L'h\u00f4tel 5 \u00e9toiles et le suivi par l'infirmi\u00e8re ont rendu la convalescence tr\u00e8s confortable.",
      intervention: 'Lifting des bras bilat\u00e9ral',
      savings: '2 900 \u20ac',
      rating: 5,
    },
    {
      name: 'Val\u00e9rie G.',
      city: 'Bruxelles',
      quote: "J'avais peur des cicatrices, mais elles sont vraiment discr\u00e8tes et bien plac\u00e9es \u00e0 l'int\u00e9rieur du bras. Le Dr Balti a pris le temps de tout expliquer avant l'op\u00e9ration. Je recommande \u00e0 100%.",
      intervention: 'Brachioplastie + Lipo bras',
      savings: '3 600 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Lifting des Bras Tunisie (Brachioplastie) Prix & Cicatrices | Venus Estetika',
    description: "Chirurgie pour retendre la peau des bras. S\u00e9jour tout compris en Tunisie \u00e0 partir de 2200\u20ac. Supprimez l'effet \"ailes de chauve-souris\".",
    ogImage: '/images/heroes/chirurgie-silhouette-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-bras',
  },

  devisSlug: 'lifting-bras',
};
