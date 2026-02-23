import type { InterventionData } from '../types';

export const mommyMakeover: InterventionData = {
  slug: 'mommy-makeover',
  categorySlug: 'chirurgie-silhouette',
  name: 'Mommy Makeover',
  fullTitle: 'Mommy Makeover en Tunisie',

  hero: {
    title: "Mommy Makeover en Tunisie",
    subtitle: "Retrouvez votre corps d'avant grossesse en une seule intervention. Combinez chirurgies de l'abdomen et des seins dans un forfait VIP tout compris 5 fois moins cher qu'en France.",
    price: "4 500\u20ac",
    priceOld: "12 000\u20ac",
    badge: "Package Chirurgie Post-Maternit\u00e9",
    stats: "Consultation gratuite | Chirurgiens dipl\u00f4m\u00e9s | R\u00e9ponse sous 24h",
    image: "/images/heroes/chirurgie-silhouette-hero.jpg",
    imageAlt: "Mommy Makeover en Tunisie \u2014 Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Que comprend un Mommy Makeover ?",
      content: `<p>Il ne s'agit pas d'une intervention fixe, mais d'une combinaison de chirurgies plastiques personnalis\u00e9es selon les s\u00e9quelles de vos grossesses. Plut\u00f4t que de subir plusieurs anesth\u00e9sies et p\u00e9riodes de r\u00e9cup\u00e9ration, nous traitons tout en un seul temps op\u00e9ratoire.</p>
<p>Le Mommy Makeover combine typiquement : 1) Chirurgie de l'Abdomen (abdominoplastie) pour \u00e9liminer le tablier abdominal et r\u00e9parer le diastasis, 2) Chirurgie Mammaire (lifting mammaire / cure de pt\u00f4se) pour remonter les seins, avec ou sans ajout de proth\u00e8ses, et 3) Liposuccion tumescente pour affiner la silhouette globale (hanches, culotte de cheval, cuisses).</p>`,
    },
    {
      type: 'techniques',
      title: 'Les composantes du Mommy Makeover',
      items: [
        {
          name: "Chirurgie de l'Abdomen (Abdominoplastie)",
          description: "\u00c9limine le tablier abdominal, r\u00e9pare le diastasis (muscles \u00e9cart\u00e9s) et rentre le ventre.",
        },
        {
          name: 'Chirurgie Mammaire',
          description: "Lifting mammaire (cure de pt\u00f4se) pour remonter les seins, avec ou sans ajout de proth\u00e8ses Motiva selon votre volume.",
        },
        {
          name: 'Liposuccion Tumescente',
          description: "Aspiration des graisses tenaces (hanches, culotte de cheval, cuisses) pour affiner la silhouette globale.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre Mommy Makeover ?',
      items: [
        { icon: 'Shield', title: "Chirurgiens experts", description: "Nos chirurgiens sont sp\u00e9cialistes de la chirurgie post-maternit\u00e9 avec plus de 15 ans d'exp\u00e9rience." },
        { icon: 'Award', title: "Une seule anesth\u00e9sie, une seule convalescence", description: "Tout est r\u00e9alis\u00e9 en un seul temps op\u00e9ratoire pour minimiser les risques et le temps de r\u00e9cup\u00e9ration." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5\u2605 partenaire avec suivi infirmier quotidien." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations \u00e0 1, 3, 6 et 12 mois pour surveiller la cicatrisation et l'\u00e9volution." },
        { icon: 'Heart', title: "5x moins cher qu'en France", description: "Forfait tout compris \u00e0 partir de 4 500\u20ac contre 12 000\u20ac en France pour le m\u00eame niveau de qualit\u00e9." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du Mommy Makeover en Tunisie',
    rows: [
      { label: 'Mommy Makeover Standard (Abdo + Seins)', priceVenus: '4 500 \u20ac', priceFrance: '12 000 \u20ac' },
      { label: 'Mommy Makeover Complet (Abdo + Seins + Lipo)', priceVenus: '5 500 \u20ac', priceFrance: '15 000 \u20ac' },
    ],
    includes: [
      'Chirurgien plasticien sp\u00e9cialiste',
      'Clinique 2 \u00e0 3 nuits',
      'Gaine de contention + soutien-gorge m\u00e9dical',
      'H\u00f4tel 5\u2605 5 nuits',
      'Transferts VIP inclus',
      'Suivi post-op\u00e9ratoire 12 mois',
    ],
  },

  testimonials: [
    {
      name: 'Laure F.',
      city: 'Paris',
      quote: "Apr\u00e8s deux grossesses, mon ventre et mes seins avaient \u00e9norm\u00e9ment chang\u00e9. Le Mommy Makeover \u00e0 Tunis m'a redonn\u00e9 confiance en moi. En une seule op\u00e9ration et une seule convalescence, j'ai retrouv\u00e9 mon corps d'avant. Incroyable.",
      intervention: 'Abdominoplastie + Lifting Mammaire',
      savings: '8 500 \u20ac',
      rating: 5,
    },
    {
      name: '\u00c9milie T.',
      city: 'Gen\u00e8ve',
      quote: "J'h\u00e9sitais entre faire plusieurs op\u00e9rations s\u00e9par\u00e9es ou le Mommy Makeover. Le Dr Balti m'a conseill\u00e9 le tout en un. C'\u00e9tait la meilleure d\u00e9cision. Le r\u00e9sultat est harmonieux et naturel. L'h\u00f4tel 5 \u00e9toiles a rendu la r\u00e9cup\u00e9ration tr\u00e8s agr\u00e9able.",
      intervention: 'Abdo + Lipo + Proth\u00e8ses Mammaires',
      savings: '9 200 \u20ac',
      rating: 5,
    },
    {
      name: 'Camille D.',
      city: 'Marseille',
      quote: "L'\u00e9quipe de Venus Estetika m'a accompagn\u00e9e \u00e0 chaque \u00e9tape, de la consultation \u00e0 distance jusqu'au suivi \u00e0 l'h\u00f4tel. Le Dr Imen Ben Gaied est tr\u00e8s attentionn\u00e9e et \u00e0 l'\u00e9coute. Mon ventre est plat et mes seins sont parfaits.",
      intervention: 'Mommy Makeover complet',
      savings: '10 000 \u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Mommy Makeover Tunisie : Prix & Avis (Ventre + Seins) | Venus Estetika',
    description: "Restaurez votre corps apr\u00e8s la grossesse. Forfait Mommy Makeover (Abdominoplastie + Lipo + Seins) tout compris en Tunisie \u00e0 partir de 4500\u20ac.",
    ogImage: '/images/heroes/chirurgie-silhouette-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/mommy-makeover',
  },

  devisSlug: 'mommy-makeover',

  modules: {
    interactiveAnatomy: 'AbdominoplastieInteractiveAnatomy',
  },
};
