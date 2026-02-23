import type { InterventionData } from '../types';

export const otoplastie: InterventionData = {
  slug: 'otoplastie',
  categorySlug: 'chirurgie-visage',
  name: 'Otoplastie',
  fullTitle: 'Otoplastie en Tunisie',

  hero: {
    title: "Otoplastie en Tunisie : corrigez les oreilles d\u00e9coll\u00e9es d\u00e9finitivement",
    subtitle: "Une intervention simple et efficace pour retrouver des oreilles harmonieuses. R\u00e9sultat d\u00e9finitif, cicatrice invisible.",
    price: "1 500\u20ac",
    priceOld: "3 000-4 500\u20ac",
    badge: "Chirurgie des Oreilles",
    stats: "+2 500 patients accompagn\u00e9s | Note 4.8/5 sur Google | Chirurgiens membres ISAPS",
    image: "/images/heroes/chirurgie-visage-hero.jpg",
    imageAlt: "Otoplastie en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que l'otoplastie ?",
      content: `<p>L'otoplastie (ou pinnaplastie) est l'intervention chirurgicale qui corrige les oreilles d\u00e9coll\u00e9es \u2014 appel\u00e9es m\u00e9dicalement "otapostasis". Elle remod\u00e8le le cartilage auriculaire pour rapprocher les oreilles de la t\u00eate et leur donner une forme harmonieuse. Simple, rapide et sans douleur, c'est l'une des interventions esth\u00e9tiques les plus gratifiantes.</p>
<p>Chez Venus Estetika, nos chirurgiens proposent deux techniques \u00e9prouv\u00e9es selon l'anatomie et les pr\u00e9f\u00e9rences du patient.</p>`,
    },
    {
      type: 'techniques',
      title: "Techniques d'otoplastie",
      items: [
        {
          name: 'Technique EarFold',
          description: "Mise en place d'un implant fin sous la peau pour remodeler le cartilage. Intervention minimalement invasive.",
        },
        {
          name: 'Technique Classique',
          description: "Remodelage du cartilage par voie r\u00e9tro-auriculaire. Cicatrice invisible derri\u00e8re l'oreille. R\u00e9sultat d\u00e9finitif.",
        },
      ],
    },
    {
      type: 'advantages',
      title: "Pourquoi choisir Venus Estetika pour votre otoplastie en Tunisie ?",
      items: [
        { icon: 'Shield', title: "Chirurgien sp\u00e9cialis\u00e9 en chirurgie auriculaire", description: "Expertise reconnue en remodelage du cartilage auriculaire pour un r\u00e9sultat naturel et d\u00e9finitif." },
        { icon: 'Award', title: "Cliniques agr\u00e9\u00e9es", description: "Nous op\u00e9rons exclusivement dans des cliniques agr\u00e9\u00e9es par le Minist\u00e8re de la Sant\u00e9 tunisien." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5 \u00e9toiles \u00e0 Tunis (4 nuits) avec transferts VIP a\u00e9roport inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations de contr\u00f4le \u00e0 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
        { icon: 'Heart', title: "R\u00e9sultat d\u00e9finitif et permanent", description: "Le cartilage remodel\u00e9 conserve sa nouvelle forme de fa\u00e7on d\u00e9finitive. R\u00e9cidive inf\u00e9rieure \u00e0 2%." },
      ],
    },
  ],

  pricing: {
    title: "Prix de l'otoplastie en Tunisie",
    rows: [
      { label: 'Otoplastie bilat\u00e9rale (2 oreilles)', priceVenus: '1 500 \u20ac', priceFrance: '3 000-4 500 \u20ac' },
      { label: 'Otoplastie unilat\u00e9rale (1 oreille)', priceVenus: '900 \u20ac', priceFrance: '2 000-2 500 \u20ac' },
    ],
    includes: [
      'Chirurgien sp\u00e9cialis\u00e9 en chirurgie auriculaire',
      'Anesth\u00e9sie locale ou g\u00e9n\u00e9rale selon indication',
      'S\u00e9jour en clinique agr\u00e9\u00e9e (1 nuit)',
      'Bandeau de contention post-op\u00e9ratoire',
      'H\u00f4tel 5 \u00e9toiles \u00e0 Tunis (4 nuits)',
      'Transferts priv\u00e9s a\u00e9roport-clinique-h\u00f4tel',
      'Suivi post-op\u00e9ratoire complet (12 mois)',
    ],
  },

  testimonials: [
    {
      name: 'Julien F.',
      city: 'Toulouse',
      quote: "J'ai souffert de mes oreilles d\u00e9coll\u00e9es depuis l'enfance \u2014 les moqueries \u00e0 l'\u00e9cole m'ont longtemps suivi. \u00c0 32 ans, j'ai enfin os\u00e9 passer \u00e0 l'acte chez Venus Estetika. L'otoplastie a dur\u00e9 moins d'une heure, la douleur \u00e9tait minime, et une semaine plus tard je suis rentr\u00e9 \u00e0 Toulouse avec des oreilles parfaitement harmonieuses. Un soulagement immense.",
      intervention: 'Otoplastie bilat\u00e9rale',
      savings: '2 300\u20ac',
      rating: 5,
    },
    {
      name: 'C\u00e9cile M.',
      city: 'Nantes',
      quote: "Je voulais corriger les oreilles d\u00e9coll\u00e9es de ma fille de 12 ans avant son entr\u00e9e au coll\u00e8ge. Venus Estetika nous a accueillies avec un professionnalisme et une bienveillance remarquables. Le r\u00e9sultat est parfaitement naturel. Ma fille n'a plus \u00e0 se cacher les oreilles sous ses cheveux. Je recommande vivement.",
      intervention: 'Otoplastie (enfant)',
      savings: '2 100\u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Otoplastie Tunisie | Chirurgie des Oreilles d\u00e8s 1 500\u20ac \u2014 Venus Estetika',
    description: "Otoplastie en Tunisie : correction des oreilles d\u00e9coll\u00e9es. Intervention indolore, r\u00e9sultat d\u00e9finitif. Forfait tout compris d\u00e8s 1 500\u20ac.",
    ogImage: '/images/heroes/chirurgie-visage-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-visage/otoplastie',
  },

  devisSlug: 'otoplastie',
};
