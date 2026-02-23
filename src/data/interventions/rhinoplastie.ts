import type { InterventionData } from '../types';

export const rhinoplastie: InterventionData = {
  slug: 'rhinoplastie',
  categorySlug: 'chirurgie-visage',
  name: 'Rhinoplastie',
  fullTitle: 'Rhinoplastie en Tunisie',
  isPopular: true,

  hero: {
    title: "Rhinoplastie en Tunisie : un nez harmonieux, par un chirurgien diplômé en France",
    subtitle: "Corrigez les imperfections de votre nez et retrouvez un profil équilibré. Intervention réalisée dans une clinique agréée par un chirurgien formé en France.",
    price: "2 200 €",
    priceOld: "5 500 €",
    badge: "Intervention N°1 en chirurgie esthétique",
    stats: "+2 500 patients accompagnés | Note 4.8/5 sur Google | Chirurgiens membres ISAPS",
    image: "/images/interventions/rhinoplastie.jpg",
    imageAlt: "Rhinoplastie en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la rhinoplastie ? Tout savoir sur la chirurgie du nez",
      content: `<p>La rhinoplastie est l'intervention de chirurgie esthétique du visage la plus demandée en France et dans le monde. Elle consiste à remodeler la structure osseuse et cartilagineuse du nez pour corriger une bosse, affiner la pointe, redresser une déviation de la cloison nasale ou réduire les narines. L'objectif est d'obtenir un nez harmonieux, en parfaite cohérence avec les proportions du visage, tout en préservant — ou en améliorant — la fonction respiratoire.</p>
<p>Chez Venus Estetika, la rhinoplastie est réalisée par le <strong>Dr Balti</strong>, chirurgien esthétique et reconstructeur diplômé de la Faculté de Médecine de Paris, exerçant depuis plus de 15 ans. Le Dr Balti maîtrise les trois techniques principales :</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de rhinoplastie',
      items: [
        {
          name: 'La rhinoplastie fermée (endonasale)',
          description: "Les incisions sont pratiquées à l'intérieur des narines. Aucune cicatrice visible. Idéal pour les corrections modérées.",
        },
        {
          name: 'La rhinoplastie ouverte (externe)',
          description: "Une micro-incision sur la columelle permet un accès complet à la structure du nez. Précision maximale pour les corrections complexes.",
        },
        {
          name: 'La rhinoplastie ultrasonique (piézo-rhinoplastie)',
          description: "Technique de dernière génération utilisant des ultrasons pour sculpter l'os nasal sans fracture, réduisant les ecchymoses de 40 à 60%.",
        },
      ],
    },
    {
      type: 'authentic',
      title: 'La Rhinoplastie en Tunisie',
      description: "La rhinoplastie simple, est une opération de chirurgie esthétique dont l'objectif est de réparer et remodeler le nez ; sa morphologie, et de le rendre plus parfait, esthétiquement en harmonie avec le visage.",
      snippets: [
        "Ces défauts sont soit congénitaux, c'est-à-dire qui existent dès la naissance et s'accentuent lors du développement et de la croissance, ou consécutifs à des traumatismes que le nez va subir accidentellement au cours de la vie.",
        "L'opération s'attache à remodeler délicatement l'os de l'appendice nasal et à corriger les défauts du cartilage.",
        "Une incision à l'intérieur des narines permet l'accès chirurgical (une micro incision presque invisible peut également être effectuée sur la columelle).",
        "Qu'il s'agisse d'une chirurgie du nez ou de toute autre chirurgie d'embellissement du visage, un interrogatoire vous concernant est toujours effectué.",
        "A la fin de l'intervention, des mèches grasses sont placées dans les fosses nasales et une attelle est apposée pour la consolidation.",
      ],
      images: [
        "/images/interventions/rhinoplastie/rhinoplastie-1.jpg",
        "/images/interventions/rhinoplastie/rhinoplastie.jpg",
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre rhinoplastie en Tunisie ?',
      items: [
        { icon: 'Shield', title: "Chirurgien diplômé en France", description: "Le Dr Balti a été formé à la Faculté de Médecine de Paris. Membre de l'ISAPS." },
        { icon: 'Award', title: "Cliniques agréées", description: "Nous opérons exclusivement dans des cliniques agréées par le Ministère de la Santé tunisien avec matériel de pointe." },
        { icon: 'Plane', title: "Hôtel 5 étoiles & VIP", description: "Votre convalescence se déroule en hôtel 5* avec transferts VIP aéroport inclus. Le confort absolu." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "Téléconsultations de contrôle à 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
        { icon: 'Heart', title: "Résultat naturel garanti", description: "Analyse morphologique complète en amont pour garantir un nez en harmonie parfaite avec votre visage." },
      ],
    },
  ],

  pricing: {
    title: 'Prix de la rhinoplastie : France vs Venus Estetika',
    rows: [
      { label: 'Rhinoplastie simple', priceVenus: '2 000 €', priceFrance: '4 500 €' },
      { label: 'Rhinoplastie complète', priceVenus: '2 200 €', priceFrance: '5 500 €' },
      { label: 'Rhinoplastie ultrasonique (piézo)', priceVenus: '2 800 €', priceFrance: '7 000 €' },
    ],
    includes: [
      'Intervention & anesthésie',
      'Séjour en clinique (1 nuit)',
      'Hôtel 5 étoiles (6 nuits)',
      'Transferts VIP aéroport/hôtel',
      'Suivi post-opératoire 12 mois',
    ],
  },

  testimonials: [],

  meta: {
    title: 'Rhinoplastie Tunisie | Prix Tout Compris 2 200€ — Venus Estetika',
    description: 'Rhinoplastie en Tunisie par un chirurgien diplômé en France. Forfait tout compris dès 2 200€ : clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit en 24h.',
    ogImage: '/images/heroes/chirurgie-visage-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie',
  },

  devisSlug: 'rhinoplastie',

  modules: {
    interactiveAnatomy: 'RhinoplastyInteractiveAnatomy',
  },
};
