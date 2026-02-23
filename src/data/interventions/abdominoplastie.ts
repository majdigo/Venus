import type { InterventionData } from '../types';

export const abdominoplastie: InterventionData = {
  slug: 'abdominoplastie',
  categorySlug: 'chirurgie-silhouette',
  name: 'Abdominoplastie',
  fullTitle: 'Abdominoplastie en Tunisie',
  isPopular: true,

  hero: {
    title: "Retrouvez un Ventre Plat avec l'Abdominoplastie HD",
    subtitle: "Correction du diastasis, retrait de l'exc\u00e8s de peau tablier et liposuccion des flancs. Une transformation d\u00e9finitive.",
    price: "1 800\u20ac",
    priceOld: "4 000\u20ac",
    badge: "Excellence en Reconstruction Corporelle",
    stats: "Consultation gratuite | Chirurgiens dipl\u00f4m\u00e9s | R\u00e9ponse sous 24h",
    image: "/images/interventions/abdominoplastie.jpg",
    imageAlt: "Abdominoplastie en Tunisie \u2014 Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "La chirurgie reconstructrice du ventre",
      content: `<p>L'abdominoplastie (ou plastie abdominale) est bien plus qu'une simple liposuccion. C'est la seule intervention capable de retirer chirurgicalement l'exc\u00e8s de peau distendue (le "tablier abdominal") et de resserrer les muscles grands droits \u00e9cart\u00e9s (le diastasis).</p>
<p>Elle est l'intervention de r\u00e9f\u00e9rence dans 3 cas pr\u00e9cis : apr\u00e8s de multiples grossesses (Mommy Makeover), \u00e0 la suite d'une perte de poids massive (chirurgie bariatrique), ou lors du vieillissement naturel de la peau.</p>`,
    },
    {
      type: 'techniques',
      title: "Techniques d'abdominoplastie",
      items: [
        {
          name: 'Cure de Diastasis',
          description: "Resserrement du corset musculaire interne pour un ventre plat solide.",
        },
        {
          name: 'Cicatrices Basses',
          description: "Plac\u00e9es strat\u00e9giquement pour \u00eatre cach\u00e9es dans vos sous-v\u00eatements.",
        },
      ],
    },
    {
      type: 'authentic',
      title: "L'Abdominoplastie en Tunisie",
      description: "L'abdominoplastie ou Chirurgie du Ventre, Permet De Retirer L'exc\u00e8s De Peau et La Graisse Du Ventre (Traitement du Tablier Abdominal) Tout en R\u00e9tablissant Une Solide Musculature. Ventre Plat Garanti Pour Un Prix D\u00e9finitivement Pas Cher!",
      snippets: [
        "Une chirurgie esth\u00e9tique du ventre est indiqu\u00e9e quand il y a des l\u00e9sions trop importantes sur la peau.",
        "Cette intervention agit sur les 3 composantes qui d\u00e9terminent la taille du ventre : la peau, la graisse et les muscles (le diastasis).",
        "Les cicatrices postop\u00e9ratoires d\u00e9pendent de la surface de la peau enlev\u00e9e (mini-lift = cicatrice courte, compl\u00e8te = de hanche \u00e0 hanche). La cicatrice est plac\u00e9e tr\u00e8s bas pour \u00eatre dissimul\u00e9e dans les sous-v\u00eatements.",
        "L'op\u00e9ration se d\u00e9roule sous anesth\u00e9sie g\u00e9n\u00e9rale et dure entre 1h et 2h30 selon les cas.",
        "Dans de nombreux cas, la liposuccion (aspiration des amas graisseux) est associ\u00e9e pendant l'Abdominoplastie. Chez Venus Estetika, cette Lipo est syst\u00e9matiquement incluse pour un r\u00e9sultat optimal.",
      ],
      images: [
        "/images/interventions/abdominoplastie/abdominoplastie.jpg",
        "/images/interventions/abdominoplastie/abdominoplastie-incisions.jpg",
      ],
    },
    {
      type: 'advantages',
      title: "Pourquoi choisir Venus Estetika pour votre abdominoplastie ?",
      items: [
        { icon: 'Shield', title: "Chirurgien dipl\u00f4m\u00e9", description: "Nos chirurgiens sont dipl\u00f4m\u00e9s et sp\u00e9cialis\u00e9s en chirurgie reconstructrice du corps. Plus de 15 ans d'exp\u00e9rience." },
        { icon: 'Award', title: "Liposuccion incluse", description: "Liposuccion des flancs et du ventre syst\u00e9matiquement incluse dans le forfait pour un r\u00e9sultat optimal." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "Convalescence dans un h\u00f4tel 5\u2605 partenaire. Soins infirmiers \u00e0 l'h\u00f4tel inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations programm\u00e9es \u00e0 1, 3, 6 et 12 mois pour surveiller la cicatrisation." },
        { icon: 'Heart', title: "Gaine de contention sur-mesure", description: "Gaine de contention (Panty) sur-mesure fournie et incluse dans le forfait." },
      ],
    },
  ],

  pricing: {
    title: "Prix de l'Abdominoplastie en Tunisie",
    rows: [
      { label: 'Mini-Abdominoplastie', priceVenus: '1 800 \u20ac', priceFrance: '3 500 \u20ac' },
      { label: 'Abdominoplastie Compl\u00e8te (sans lipo)', priceVenus: '2 200 \u20ac', priceFrance: '4 500 \u20ac' },
      { label: 'Abdo Compl\u00e8te + Lipo (Flancs/Ventre)', priceVenus: '2 500 \u20ac', priceFrance: '5 500 \u20ac' },
      { label: 'Abdominoplastie Circulaire (Bodylift)', priceVenus: '3 200 \u20ac', priceFrance: '7 000 \u20ac' },
    ],
    includes: [
      'Clinique Haut de Gamme (2 \u00e0 3 nuits post-op)',
      'Liposuccion associ\u00e9e (flancs et ventre)',
      'Gaine de contention (Panty) sur-mesure',
      'H\u00f4tel 5 \u00e9toiles de convalescence (5 nuits)',
      'Transferts VIP (A\u00e9roport, Clinique, H\u00f4tel)',
      'Soins infirmiers \u00e0 l\'h\u00f4tel et suivi 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'C\u00e9line B.',
      city: 'Lyon',
      quote: "Apr\u00e8s ma deuxi\u00e8me grossesse, j'avais un tablier qui me complexait \u00e9norm\u00e9ment. Le Dr Balti m'a rendu un ventre plat et tendu. L'h\u00f4tel est digne d'un palace !",
      intervention: 'Abdominoplastie + Lipo',
      savings: '3 800 \u20ac',
      rating: 5,
    },
    {
      name: 'Nadia F.',
      city: 'Marseille',
      quote: "J'avais tr\u00e8s peur de l'anesth\u00e9sie. Tout le monde a \u00e9t\u00e9 hyper rassurant. Le r\u00e9sultat est au-del\u00e0 de mes esp\u00e9rances, la cicatrice est tr\u00e8s basse.",
      intervention: 'Plastie abdominale compl\u00e8te',
      savings: '4 200 \u20ac',
      rating: 5,
    },
    {
      name: 'Isabelle M.',
      city: 'Bruxelles',
      quote: "Suite \u00e0 ma sleeve, j'avais un ventre tablier insupportable. Le Dr Ben Jemaa a fait un travail remarquable. Je me sens enfin libre dans mon corps.",
      intervention: 'Abdominoplastie post-bariatrique',
      savings: '5 100 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Abdominoplastie Tunisie | Ventre Plat Tout Compris d\u00e8s 1800\u20ac \u2014 Venus Estetika',
    description: "Chirurgie du ventre en Tunisie (Plastie abdominale). Traitez le ventre tablier, le diastasis et l'exc\u00e8s de peau. S\u00e9jour de luxe 5\u2605 inclus. Devis Gratuit.",
    ogImage: '/images/heroes/chirurgie-silhouette-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie',
  },

  devisSlug: 'abdominoplastie',

  modules: {
    interactiveAnatomy: 'AbdominoplastieInteractiveAnatomy',
  },
};
