import type { InterventionData } from '../types';

export const augmentationMammaire: InterventionData = {
  slug: 'augmentation-mammaire',
  categorySlug: 'chirurgie-mammaire',
  name: 'Augmentation Mammaire',
  fullTitle: 'Augmentation Mammaire en Tunisie',
  isPopular: true,

  hero: {
    title: "Augmentation mammaire en Tunisie : l'excellence européenne au meilleur prix",
    subtitle: "Gagnez en volume et en confiance grâce à des implants mammaires posés par un chirurgien diplômé en France. Prothèses de marque européenne garanties, technique Dual Plane pour un résultat naturel.",
    price: "2 800 €",
    priceOld: "6 500 €",
    badge: "Intervention la plus demandée en chirurgie esthétique",
    stats: "+2 500 patientes accompagnées | Note 4.8/5 sur Google | Prothèses garanties à vie",
    image: "/images/interventions/augmentation-mammaire.jpg",
    imageAlt: "Augmentation mammaire en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-walid-balti',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que l'augmentation mammaire ? Tout comprendre",
      content: `<p>L'augmentation mammaire est l'intervention de chirurgie esthétique la plus pratiquée dans le monde. Elle consiste à augmenter le volume des seins par la mise en place d'implants mammaires (prothèses) afin d'obtenir une poitrine plus généreuse, mieux proportionnée et en harmonie avec la silhouette.</p>
<p>Chez Venus Estetika, l'augmentation mammaire est réalisée par le <strong>Dr Balti</strong>, chirurgien esthétique et reconstructeur diplômé de la Faculté de Médecine de Paris. Fort de plus de 15 ans d'expérience, le Dr Balti maîtrise les techniques les plus récentes pour offrir un résultat à la fois esthétique et naturel (comme la technique Dual Plane).</p>
<h3>La technique Dual Plane</h3>
<p>Le Dr Balti privilégie la technique <strong>Dual Plane</strong> pour la majorité des augmentations mammaires. Cette technique de placement consiste à positionner la partie supérieure de la prothèse sous le muscle pectoral (pour un décolleté naturel et une meilleure couverture) et la partie inférieure sous la glande mammaire (pour un galbe voluptueux dans la partie basse du sein). Le Dual Plane offre le meilleur compromis entre résultat naturel, risque réduit de coque et confort au quotidien.</p>`,
    },
    {
      type: 'authentic',
      title: "L'Augmentation Mammaire en Tunisie",
      description: "L'augmentation mammaire par prothèses est une intervention de chirurgie esthétique qui permet de corriger l'hypoplasie (volume insuffisant) des seins, d'améliorer la forme de la poitrine et de restaurer le galbe.",
      snippets: [
        "Le choix définitif de la forme (ronde ou anatomique), du volume et de la projection de la prothèse mammaire se fait conjointement lors de votre consultation préopératoire.",
        "L'intervention se déroule sous anesthésie générale. Le chirurgien introduit l'implant par une courte cicatrice au niveau de l'aréole, sous le bras ou sous le sein (voie d'abord la plus fréquente).",
        "Pour les seins tubéreux ou après une grossesse, une procédure hybride peut être proposée (lifting des seins associé à la pose d'implants).",
        "Les prothèses contiennent du gel de silicone cohésif qui ne coule pas en cas de rupture, constituant la norme absolue en Europe et garantissant votre sécurité.",
        "Le résultat (après maturation des tissus à 3 mois) modifie profondément l'équilibre esthétique de la silhouette. L'aspect est ferme et naturel au toucher.",
      ],
      images: [
        "/images/interventions/augmentation-mammaire/augmentation-mammaire-avant-apres.jpg",
        "/images/interventions/augmentation-mammaire/augmentation-mammaire.jpg",
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour vos implants ?',
      items: [
        { icon: 'Shield', title: "Chirurgien diplômé en France", description: "Le Dr Balti est diplômé de la Faculté de Médecine de Paris et membre de l'ISAPS. Plus de 15 ans d'expérience." },
        { icon: 'Award', title: "Prothèses européennes", description: "Nous utilisons exclusivement des prothèses certifiées CE (Motiva, Mentor, Sebbin), garanties à vie contre la rupture." },
        { icon: 'Plane', title: "Hôtel 5 étoiles & VIP", description: "Après la clinique, vous récupérez dans un hôtel 5* avec chambre privée et visites médicales de notre équipe." },
        { icon: 'Clock', title: "Suivi post-op 12 mois", description: "Téléconsultations de suivi à 1, 3, 6 et 12 mois. Le Dr Balti surveille la descente des prothèses en direct." },
        { icon: 'Heart', title: "Résultat naturel Dual Plane", description: "Le Dr Balti adapte le type de prothèse (ronde ou anatomique) et la technique Dual Plane à votre torse." },
      ],
    },
  ],

  pricing: {
    title: "Prix de l'augmentation mammaire : France vs Venus",
    rows: [
      { label: 'Prothèses rondes (silicone CE)', priceVenus: '2 600 €', priceFrance: '6 000 €' },
      { label: 'Prothèses anatomiques / Ergonomix', priceVenus: '2 800 €', priceFrance: '6 500 €' },
      { label: 'Augmentation + Lifting (Mastopexie)', priceVenus: '3 800 €', priceFrance: '8 500 €' },
    ],
    includes: [
      'Intervention & anesthésie',
      'Prothèses certifiées CE / Motiva',
      'Hôtel 5 étoiles (5 nuits minimum)',
      'Soutien-gorge médical ZeeBa',
      'Suivi post-opératoire 12 mois',
    ],
  },

  testimonials: [
    { name: "Laura P.", city: "Marseille", quote: "Résultat incroyablement naturel. Le Dr Balti a su choisir le bon volume pour ma morphologie. L'hôtel et le suivi étaient parfaits.", intervention: "Augmentation mammaire", savings: "3 700 €", rating: 5 },
    { name: "Nadia K.", city: "Genève", quote: "J'ai comparé avec la Suisse : même qualité de prothèses Motiva, mais presque 3 fois moins cher. Le séjour tout compris est un vrai plus.", intervention: "Implants anatomiques", savings: "4 200 €", rating: 5 },
    { name: "Chloé D.", city: "Toulouse", quote: "Mon mari et mes amies trouvent le résultat très naturel. Personne ne sait que j'ai des implants. Merci Dr Balti !", intervention: "Augmentation + Lifting", savings: "4 700 €", rating: 5 },
  ],

  meta: {
    title: 'Augmentation Mammaire Tunisie | Prix Tout Compris 2 800€ — Venus Estetika',
    description: "Augmentation mammaire en Tunisie avec prothèses de qualité européenne. Forfait tout compris dès 2 800€ : clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit.",
    ogImage: '/images/heroes/chirurgie-mammaire-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire',
  },

  devisSlug: 'augmentation-mammaire',

  modules: {
    interactiveAnatomy: 'BreastAugmentationInteractiveAnatomy',
    photoUpload: true,
  },
};
