import type { InterventionData } from '../types';

export const genioplastie: InterventionData = {
  slug: 'genioplastie',
  categorySlug: 'chirurgie-visage',
  name: 'G\u00e9nioplastie',
  fullTitle: 'G\u00e9nioplastie en Tunisie',

  hero: {
    title: "G\u00e9nioplastie en Tunisie : harmonisez votre profil par la chirurgie du menton",
    subtitle: "Corrigez un menton fuyant ou pro\u00e9minent pour un profil parfaitement \u00e9quilibr\u00e9. Proth\u00e8se ou ost\u00e9otomie. Profiloplastie possible.",
    price: "2 000\u20ac",
    priceOld: "3 500-10 000\u20ac",
    badge: "Harmonie du Profil",
    stats: "+2 500 patients accompagn\u00e9s | Note 4.8/5 sur Google | Chirurgiens membres ISAPS",
    image: "/images/heroes/chirurgie-visage-hero.jpg",
    imageAlt: "G\u00e9nioplastie en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la g\u00e9nioplastie ?",
      content: `<p>La g\u00e9nioplastie (ou mentoplastie) est la chirurgie esth\u00e9tique du menton. Elle permet de corriger un menton fuyant (trop en retrait) ou pro\u00e9minent (trop en avant) pour r\u00e9tablir l'\u00e9quilibre du profil facial. Un menton bien proportionn\u00e9 est la cl\u00e9 d'un visage harmonieux \u2014 il d\u00e9termine le galbe global du profil et valorise le nez, les l\u00e8vres et la m\u00e2choire.</p>
<p>Chez Venus Estetika, deux techniques chirurgicales sont propos\u00e9es selon l'importance de la correction et la structure osseuse du patient.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de g\u00e9nioplastie',
      items: [
        {
          name: 'Proth\u00e8se Mentonni\u00e8re',
          description: "Implant en silicone pos\u00e9 par voie intra-buccale. Pas de cicatrice visible. Correction pr\u00e9cise du volume et de la projection.",
        },
        {
          name: 'Ost\u00e9otomie',
          description: "Avancement ou recul de l'os du menton pour les modifications importantes. R\u00e9sultat permanent et naturel.",
        },
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre g\u00e9nioplastie en Tunisie ?',
      items: [
        { icon: 'Shield', title: "Chirurgien sp\u00e9cialis\u00e9 en chirurgie faciale", description: "Expertise reconnue en chirurgie du profil, profiloplastie et g\u00e9nioplastie." },
        { icon: 'Award', title: "Proth\u00e8se mentonni\u00e8re incluse", description: "La proth\u00e8se mentonni\u00e8re en silicone de qualit\u00e9 est incluse dans le forfait." },
        { icon: 'Plane', title: "H\u00f4tel 5 \u00e9toiles inclus", description: "S\u00e9jour en h\u00f4tel 5 \u00e9toiles \u00e0 Tunis (5 nuits) avec transferts VIP a\u00e9roport inclus." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "T\u00e9l\u00e9consultations de contr\u00f4le \u00e0 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
        { icon: 'Heart', title: "R\u00e9sultat permanent", description: "La proth\u00e8se est permanente \u2014 aucun entretien ni renouvellement n\u00e9cessaire." },
      ],
    },
  ],

  pricing: {
    title: 'Prix de la g\u00e9nioplastie en Tunisie',
    rows: [
      { label: 'G\u00e9nioplastie (proth\u00e8se mentonni\u00e8re)', priceVenus: '2 000 \u20ac', priceFrance: '3 500-5 500 \u20ac' },
      { label: 'Profiloplastie (rhinoplastie + g\u00e9nioplastie)', priceVenus: '3 500 \u20ac', priceFrance: '6 000-10 000 \u20ac' },
    ],
    includes: [
      'Chirurgien sp\u00e9cialis\u00e9 en chirurgie faciale',
      'Proth\u00e8se mentonni\u00e8re en silicone (incluse)',
      'S\u00e9jour en clinique agr\u00e9\u00e9e (1 nuit)',
      'H\u00f4tel 5 \u00e9toiles \u00e0 Tunis (5 nuits)',
      'Transferts priv\u00e9s a\u00e9roport-clinique-h\u00f4tel',
      'Suivi post-op\u00e9ratoire complet (12 mois)',
    ],
  },

  testimonials: [
    {
      name: 'Thomas R.',
      city: 'Paris',
      quote: "Mon menton fuyant me donnait un profil que je n'aimais pas depuis l'adolescence. La profiloplastie (rhinoplastie + g\u00e9nioplastie) r\u00e9alis\u00e9e \u00e0 Tunis a compl\u00e8tement harmonis\u00e9 mon visage. Mon chirurgien a parfaitement analys\u00e9 les proportions. Le r\u00e9sultat est naturel et exactement ce que j'esp\u00e9rais.",
      intervention: 'Profiloplastie',
      savings: '6 500\u20ac',
      rating: 5,
    },
    {
      name: 'Aur\u00e9lie C.',
      city: 'Gen\u00e8ve',
      quote: "J'avais peur que la proth\u00e8se mentonni\u00e8re soit visible ou artificielle au toucher. Il n'en est rien \u2014 deux mois apr\u00e8s, m\u00eame mes proches ne devinent pas que j'ai \u00e9t\u00e9 op\u00e9r\u00e9e. Ils remarquent juste que mon visage est plus harmonieux. L'\u00e9quipe de Venus Estetika a \u00e9t\u00e9 parfaite du devis au suivi.",
      intervention: 'G\u00e9nioplastie par proth\u00e8se',
      savings: '3 200\u20ac',
      rating: 5,
    },
  ],

  meta: {
    title: 'G\u00e9nioplastie Tunisie | Chirurgie du Menton d\u00e8s 2 000\u20ac \u2014 Venus Estetika',
    description: "G\u00e9nioplastie en Tunisie : correction du menton fuyant ou pro\u00e9minent. Proth\u00e8se ou ost\u00e9otomie. Profiloplastie possible. D\u00e8s 2 000\u20ac tout compris.",
    ogImage: '/images/heroes/chirurgie-visage-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-visage/genioplastie',
  },

  devisSlug: 'genioplastie',
};
