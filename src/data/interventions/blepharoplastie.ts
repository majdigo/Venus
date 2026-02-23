import type { InterventionData } from '../types';

export const blepharoplastie: InterventionData = {
  slug: 'blepharoplastie',
  categorySlug: 'chirurgie-visage',
  name: 'Bl\u00e9pharoplastie',
  fullTitle: 'Bl\u00e9pharoplastie en Tunisie',

  hero: {
    title: "Bl\u00e9pharoplastie en Tunisie : retrouvez un regard jeune et repos\u00e9",
    subtitle: "Corrigez les paupi\u00e8res tombantes et les poches sous les yeux.",
    price: "1 500\u20ac",
    priceOld: "3 000-7 500\u20ac",
    badge: "Rajeunissement du Regard",
    stats: "+2 500 patients accompagn\u00e9s | Note 4.8/5 sur Google | Chirurgiens membres ISAPS",
    image: "/images/heroes/chirurgie-visage-hero.jpg",
    imageAlt: "Bl\u00e9pharoplastie en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la bl\u00e9pharoplastie ?",
      content: `<p>La bl\u00e9pharoplastie est l'intervention chirurgicale de rajeunissement des paupi\u00e8res. Elle permet de corriger le ptosis (chute des paupi\u00e8res), les poches sous les yeux et l'exc\u00e8s de peau qui alourdit le regard. R\u00e9alis\u00e9e sous anesth\u00e9sie locale avec s\u00e9dation ou sous anesth\u00e9sie g\u00e9n\u00e9rale selon les cas, elle offre un r\u00e9sultat naturel et durable.</p>
<p>Chez Venus Estetika, nos chirurgiens sp\u00e9cialis\u00e9s ma\u00eetrisent les deux techniques principales pour un r\u00e9sultat personnalis\u00e9 selon votre anatomie et vos objectifs.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de bl\u00e9pharoplastie',
      items: [
        {
          name: 'Paupi\u00e8res Sup\u00e9rieures',
          description: "Retrait de l'exc\u00e8s de peau et de la graisse. Cicatrice cach\u00e9e dans le pli naturel de la paupi\u00e8re.",
        },
        {
          name: 'Paupi\u00e8res Inf\u00e9rieures',
          description: "Retrait des poches sous les yeux par voie transconjonctivale. Aucune cicatrice visible sur la peau.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre bl\u00e9pharoplastie en Tunisie ?',
      items: [
        { icon: 'Shield', title: "Chirurgien sp\u00e9cialis\u00e9 en chirurgie palp\u00e9brale", description: "Nos chirurgiens sont sp\u00e9cialistes de la chirurgie des paupi\u00e8res, avec une expertise reconnue." },
        { icon: 'Award', title: "Cliniques agr\u00e9\u00e9es", description: "Nous op\u00e9rons exclusivement dans des cliniques agr\u00e9\u00e9es par le Minist\u00e8re de la Sant\u00e9 tunisien avec mat\u00e9riel de pointe." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5 \u00e9toiles \u00e0 Tunis (5 nuits) avec transferts VIP a\u00e9roport inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations de contr\u00f4le \u00e0 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
        { icon: 'Heart', title: "R\u00e9sultat naturel garanti", description: "Un regard rajeuni de 10 \u00e0 15 ans, effet naturel, cicatrices invisibles." },
      ],
    },
  ],

  pricing: {
    title: 'Prix de la bl\u00e9pharoplastie en Tunisie',
    rows: [
      { label: 'Paupi\u00e8res sup\u00e9rieures', priceVenus: '1 500 \u20ac', priceFrance: '3 000 \u20ac' },
      { label: '4 paupi\u00e8res (sup. + inf.)', priceVenus: '2 500 \u20ac', priceFrance: '5 000-7 500 \u20ac' },
    ],
    includes: [
      'Chirurgien sp\u00e9cialis\u00e9 en chirurgie palp\u00e9brale',
      'S\u00e9jour en clinique agr\u00e9\u00e9e (1 nuit)',
      'H\u00f4tel 5 \u00e9toiles \u00e0 Tunis (5 nuits)',
      'Transferts priv\u00e9s a\u00e9roport-clinique-h\u00f4tel',
      'Suivi post-op\u00e9ratoire complet (12 mois)',
    ],
  },

  testimonials: [
    {
      name: 'Isabelle M.',
      city: 'Lyon',
      quote: "J'avais les paupi\u00e8res tellement tombantes que j'avais l'air \u00e9puis\u00e9e en permanence. Apr\u00e8s ma bl\u00e9pharoplastie chez Venus Estetika, mon regard est compl\u00e8tement transform\u00e9 \u2014 10 ans de jeunesse retrouv\u00e9s en une semaine. L'\u00e9quipe a \u00e9t\u00e9 aux petits soins tout au long du s\u00e9jour.",
      intervention: 'Bl\u00e9pharoplastie 4 paupi\u00e8res',
      savings: '4 500\u20ac',
      rating: 5,
    },
    {
      name: 'Christine D.',
      city: 'Bruxelles',
      quote: "Les poches sous mes yeux me complexaient depuis des ann\u00e9es. Je n'osais plus sortir sans fond de teint. La technique transconjonctivale du Dr Balti n'a laiss\u00e9 aucune cicatrice et le r\u00e9sultat est bluffant. Je regrette seulement de ne pas l'avoir fait plus t\u00f4t.",
      intervention: 'Bl\u00e9pharoplastie inf\u00e9rieure',
      savings: '2 800\u20ac',
      rating: 5,
    },
    {
      name: 'Marie-France L.',
      city: 'Paris',
      quote: "Service irr\u00e9prochable du premier contact jusqu'au suivi post-op\u00e9ratoire. Mon chirurgien a pris le temps de m'expliquer chaque \u00e9tape. J'ai \u00e9conomis\u00e9 plus de 4 000\u20ac par rapport aux devis parisiens pour une qualit\u00e9 largement sup\u00e9rieure.",
      intervention: 'Bl\u00e9pharoplastie sup\u00e9rieure',
      savings: '4 200\u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'Bl\u00e9pharoplastie Tunisie | Chirurgie des Paupi\u00e8res d\u00e8s 1 500\u20ac \u2014 Venus Estetika',
    description: 'Bl\u00e9pharoplastie en Tunisie : chirurgie des paupi\u00e8res sup\u00e9rieures et inf\u00e9rieures. Regard rajeuni, cicatrices invisibles. Forfait tout compris d\u00e8s 1 500\u20ac. Devis gratuit.',
    ogImage: '/images/heroes/chirurgie-visage-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie',
  },

  devisSlug: 'blepharoplastie',
};
