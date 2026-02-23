import type { InterventionData } from '../types';

export const sleeveGastrique: InterventionData = {
  slug: 'sleeve-gastrique',
  categorySlug: 'bariatrique',
  name: 'Sleeve Gastrique',
  fullTitle: 'Sleeve Gastrique en Tunisie',
  isPopular: true,

  hero: {
    title: "Sleeve Gastrique en Tunisie : perdez jusqu'à 60% de votre excès de poids",
    subtitle: "Reprenez le contrôle de votre santé grâce à la chirurgie bariatrique. Intervention réalisée par un spécialiste de l'obésité dans une clinique agréée.",
    price: "3 500 €",
    priceOld: "8 000 €",
    badge: "Chirurgie de l'obésité",
    stats: "+1 200 patients accompagnés | IMC > 35 | Suivi nutritionnel 12 mois",
    image: "/images/heroes/bariatrique-hero.jpg",
    imageAlt: "Sleeve gastrique en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramzi-nouira',

  sections: [
    {
      type: 'intro',
      title: "Qu'est-ce que la Sleeve Gastrectomie ?",
      content: `<p>La sleeve gastrique est une intervention chirurgicale de l'obésité qui consiste à retirer environ 75% de l'estomac. Cette réduction de volume crée une sensation de satiété rapide et diminue la sécrétion de l'hormone de la faim (ghréline), facilitant ainsi une perte de poids durable.</p>`,
    },
    {
      type: 'ideal-profile',
      title: 'Le profil idéal',
      items: [
        'IMC (Indice de Masse Corporelle) > 35',
        'IMC > 30 avec pathologies associées (diabète...)',
        'Échecs répétés des régimes restrictifs',
        "Volonté d'adopter une nouvelle hygiène de vie",
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre sleeve ?',
      items: [
        { icon: 'Shield', title: "Chirurgien spécialiste", description: "Le Dr Nouira est expert en chirurgie bariatrique avec +2 000 interventions réalisées." },
        { icon: 'Award', title: "Clinique agréée", description: "Intervention par cœlioscopie dans une clinique certifiée par le Ministère de la Santé tunisien." },
        { icon: 'Stethoscope', title: "Suivi nutritionnel", description: "Programme nutritionnel personnalisé sur 12 mois pour garantir une perte de poids durable." },
        { icon: 'Plane', title: "Séjour tout compris", description: "Hôtel 5 étoiles, transferts VIP et séjour en clinique (2-3 nuits) inclus dans le forfait." },
      ],
    },
  ],

  pricing: {
    title: 'Prix de la sleeve gastrique : France vs Venus Estetika',
    rows: [
      { label: 'Sleeve gastrique par cœlioscopie', priceVenus: '3 500 €', priceFrance: '8 000 €' },
    ],
    includes: [
      'Intervention chirurgicale & anesthésie',
      'Séjour en clinique partenaire (2-3 nuits)',
      'Hôtel 5 étoiles pour la convalescence',
      'Transferts aéroport-clinique-hôtel VIP',
      'Suivi post-opératoire sur 12 mois',
    ],
  },

  testimonials: [
    { name: "Mohamed R.", city: "Paris", quote: "J'ai perdu 45 kg en 8 mois après ma sleeve. Le Dr Nouira m'a suivi avec un vrai programme nutritionnel. Ma vie a changé.", intervention: "Sleeve gastrique", savings: "4 500 €", rating: 5 },
    { name: "Isabelle T.", city: "Nice", quote: "Après des années de régimes yo-yo, la sleeve m'a enfin libérée. L'équipe Venus est bienveillante et le suivi est sérieux.", intervention: "Sleeve gastrique", savings: "5 000 €", rating: 5 },
  ],

  meta: {
    title: "Sleeve Gastrique Tunisie | Prix Tout Compris dès 4 200 € — Venus Estetika",
    description: "Sleeve gastrique en Tunisie : chirurgie bariatrique par cœlioscopie, perte de 25 à 35 kg. Prix tout compris 4 200 € (clinique, hôtel 5★, suivi 12 mois). Devis gratuit.",
    ogImage: '/images/heroes/bariatrique-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique',
  },

  devisSlug: 'sleeve-gastrique',

  modules: {
    interactiveAnatomy: 'SleeveGastriqueInteractiveAnatomy',
    bmiCalculator: true,
    guidedTour: true,
  },
};
