import type { InterventionData } from '../types';

export const liposuccion: InterventionData = {
  slug: 'liposuccion',
  categorySlug: 'chirurgie-silhouette',
  name: 'Liposuccion',
  fullTitle: 'Liposuccion en Tunisie',
  isPopular: true,

  hero: {
    title: "Sculptez votre corps définitivement avec la Liposuccion HD",
    subtitle: "Éliminez définitivement les amas graisseux résistants au sport. Hôtel 5★ et suivi 12 mois inclus.",
    price: "1 500€",
    priceOld: "3 500€",
    badge: "N°1 de la chirurgie de la silhouette",
    stats: "Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h",
    image: "/images/heroes/liposuccion-hero.png",
    imageAlt: "Liposuccion Haute Définition en Tunisie",
  },

  primarySurgeon: 'dr-atef-ghedira',

  sections: [
    {
      type: 'authentic',
      title: 'La Liposuccion en Tunisie',
      description: "Traitement De Choix et Définitivement Pas Cher Pour Se Débarrasser De La Graisse Mal Placée. L'intervention permet d'aspirer les amas graisseux en excès pour remodeler la silhouette de façon définitive.",
      snippets: [
        "Les cellules graisseuses n'ont pas la faculté de se multiplier. Dès lors qu'on a détruit certaines par la liposuccion, la graisse ne réapparaît généralement pas.",
        "Généralement, pour la sécurité du patient, le chirurgien esthétique prélève environ 5 Litres lors de chaque séance.",
        "Le port d'un vêtement de contention (Panty) est indispensable tout au long du premier mois pour résorber l'inflammation.",
        "La méthode est particulièrement efficace pour enlever les bouées au niveau du ventre, les poignées d'amour, ou la culotte de cheval que ni sport ni régime alimentaire ne pourraient vaincre.",
        "Le résultat (avant-après Vaser) est particulièrement spectaculaire sur les patients jeunes dont la peau a conservé une bonne élasticité.",
      ],
      images: [
        "/images/interventions/liposuccion/liposuccion.jpg",
        "/images/interventions/liposuccion/zones-lipoaspiration.png",
      ],
    },
    {
      type: 'intro',
      title: "Qu'est-ce que la Liposuccion ?",
      content: `<p>La liposuccion (ou lipoaspiration) consiste à aspirer les dépôts de graisse localisés à l'aide de fines canules, afin de remodeler la silhouette. Elle cible spécifiquement les amas graisseux résistants au sport et aux régimes.</p>
<p>Chez Venus Estetika, nous maîtrisons la technique <strong>VASER (Ultrasons)</strong> pour une liposuccion de haute définition (VASER Lipo) : moins de bleus, une meilleure rétraction de la peau, et des courbes sculptées avec la précision d'orfèvre de nos chirurgiens spécialisés.</p>`,
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika ?',
      items: [
        { icon: 'Shield', title: "Chirurgien Expert", description: "Cartographie précise des zones et sculpture sur mesure par des chirurgiens spécialisés." },
        { icon: 'Award', title: "Technologie VASER", description: "Aspiration douce par ultrasons pour une peau retendue et un résultat plus lisse." },
        { icon: 'Plane', title: "Séjour tout compris", description: "Hôtel 5 étoiles (5 nuits), transferts privés et vêtement de compression médical inclus." },
        { icon: 'Clock', title: "Suivi 12 mois", description: "Consultations de suivi à distance sur 12 mois pour un résultat optimal." },
      ],
    },
  ],

  pricing: {
    title: 'Prix de la Liposuccion en Tunisie',
    rows: [
      { label: '1 zone (abdomen ou flancs)', priceVenus: '1 500 €', priceFrance: '3 500 €' },
      { label: '2 zones (abdomen + flancs)', priceVenus: '2 000 €', priceFrance: '5 000 €' },
      { label: '3 zones (abd. + flancs + cuisses)', priceVenus: '2 500 €', priceFrance: '6 500 €' },
      { label: '360° (abdomen + flancs + dos)', priceVenus: '3 000 €', priceFrance: '7 500 €' },
      { label: 'Liposuccion + Lipofilling fesses', priceVenus: '3 500 €', priceFrance: '8 500 €' },
    ],
    includes: [
      'Intervention chirurgicale VASER/PAL',
      'Séjour en clinique agréée (1 nuit)',
      'Vêtement de compression médical (Panty)',
      'Hôtel 5 étoiles à Tunis (5 nuits)',
      'Transferts privés aéroport-clinique-hôtel',
      'Suivi post-opératoire complet (12 mois)',
    ],
  },

  testimonials: [
    { name: "Myriam A.", city: "Genève", quote: "J'avais des poignées d'amour persistantes malgré le sport. La Lipo Vaser a littéralement sculpté ma taille ! L'hôtel de convalescence était fabuleux.", intervention: "Liposuccion 360°", savings: "4 000 €", rating: 5 },
    { name: "Pauline L.", city: "Bordeaux", quote: "Clinique ultra-moderne et chirurgien à l'écoute. Aucune douleur insurmontable, des bleus qui partent vite. Je regrette de ne pas l'avoir fait plus tôt.", intervention: "Lipo Ventre + Cuisses", savings: "3 500 €", rating: 5 },
    { name: "Sandra K.", city: "Lille", quote: "Le Dr Ghedira est un artiste. Mes flancs et mon ventre sont méconnaissables. Le suivi par infirmière à l'hôtel 5 étoiles est un vrai luxe que je n'attendais pas.", intervention: "Lipo Flancs + Ventre (VASER)", savings: "3 800 €", rating: 5 },
  ],

  meta: {
    title: "Liposuccion Tunisie | Prix Tout Compris 1 500€ — Venus Estetika",
    description: "Liposuccion en Tunisie par un chirurgien diplômé en France. Forfait tout compris dès 1 500€ : abdomen, flancs, cuisses. Clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit.",
    ogImage: '/images/heroes/chirurgie-silhouette-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion',
  },

  devisSlug: 'liposuccion',

  modules: {
    interactiveAnatomy: 'LiposuccionInteractiveAnatomy',
    photoUpload: true,
    guidedTour: true,
  },
};
