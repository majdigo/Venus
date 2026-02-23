import type { InterventionData } from '../types';

export const bypassGastrique: InterventionData = {
  slug: 'bypass-gastrique',
  categorySlug: 'bariatrique',
  name: 'Bypass Gastrique',
  fullTitle: 'Bypass Gastrique en Tunisie',

  hero: {
    title: "Bypass Gastrique en Tunisie : La Solution Radicale",
    subtitle: "Traitement de l'obésité sévère et du diabète de type 2. Court-circuit gastrique avec suivi nutritionnel sur 12 mois. Séjour 5 étoiles inclus.",
    price: "4 200€",
    priceOld: "9 500€",
    badge: "Centre d'Excellence Bariatrique",
    stats: "Rémission du diabète chez 80% des patients — clinique accréditée — suivi 12 mois",
    image: "/images/heroes/bariatrique-hero.jpg",
    imageAlt: "Bypass Gastrique en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramzi-nouira',

  sections: [
    {
      type: 'intro',
      title: "L'intervention de référence mondiale",
      content: `<p>Le Bypass Gastrique (Roux-en-Y) est l'intervention de référence contre l'obésité morbide. Dite "mixte" ou de "malabsorption", elle est plus complexe et radicale que la Sleeve.</p>
<p>Contrairement à la Sleeve, elle ne fait pas que réduire la taille de l'estomac. Elle modifie physiquement le circuit digestif pour réduire drastiquement l'absorption des graisses et des sucres par l'intestin. Le résultat sur la perte de poids et les maladies métaboliques est fulgurant.</p>`,
    },
    {
      type: 'advantages',
      items: [
        { icon: 'Shield', title: "Rémission du Diabète", description: "Action miracle constatée chez 80% des patients diabétiques de type 2." },
        { icon: 'Award', title: "Action Anti-Reflux", description: "L'opération guérit instantanément le reflux gastro-œsophagien (RGO)." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Le Profil Idéal pour le Bypass',
      items: [
        "IMC supérieur à 40 (Obésité morbide)",
        "IMC > 35 avec pathologies (Diabète, Hypertension)",
        "Patients souffrant de reflux gastrique intense",
        "Grands mangeurs de sucreries ('Sweet Eaters')",
        "Échec d'une précédente intervention (Anneau/Sleeve)",
      ],
    },
  ],

  pricing: {
    title: 'Le Forfait Bariatrique Tout Compris',
    rows: [
      { label: 'Bypass Gastrique (Roux-en-Y)', priceVenus: '4 200 €', priceFrance: '9 500 €' },
    ],
    includes: [
      'Intervention par cœlioscopie (Chirurgie)',
      'Anesthésie générale & Médicaments',
      'Séjour en clinique accréditée (3 nuits)',
      'Hôtel de luxe 5 étoiles (Convalescence de 4 nuits)',
      'Transferts VIP aéroport & accompagnateur 24/7',
    ],
  },

  testimonials: [
    { name: "Thierry L.", city: "Paris", quote: "Diabétique de type 2 depuis 8 ans, j'ai subi un bypass chez Venus Estetika. Deux mois après l'opération, mon médecin traitant a supprimé toute mon insuline. C'est littéralement une renaissance. L'équipe du Dr Nouira est exceptionnelle.", intervention: "Bypass Gastrique", savings: "5 300€", rating: 5 },
    { name: "Christine V.", city: "Toulouse", quote: "J'avais essayé l'anneau gastrique il y a 4 ans sans succès durable. Le bypass a tout changé. En 14 mois, j'ai perdu 48 kg. Le suivi nutritionnel inclus m'a appris à me nourrir correctement. Je ne regrette pas une seule seconde.", intervention: "Bypass Gastrique", savings: "6 000€", rating: 5 },
    { name: "Marc A.", city: "Strasbourg", quote: "Organisation parfaite de A à Z. Le coordinateur était joignable à toute heure, la clinique était propre et moderne, et le Dr Nouira m'a expliqué chaque étape avec beaucoup de pédagogie. Résultat : -38 kg en un an.", intervention: "Bypass Gastrique", savings: "4 800€", rating: 5 },
  ],

  meta: {
    title: "Bypass Gastrique Tunisie | Traitement Obésité & Diabète — 4200€ Tout Compris",
    description: "Le Bypass Gastrique (Roux-en-Y) en Tunisie est la solution radicale contre l'obésité morbide et le diabète. Perte de poids garantie. Séjour VIP inclus.",
    ogImage: '/images/heroes/bariatrique-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/bariatrique/bypass-gastrique',
  },

  devisSlug: 'bypass-gastrique',

  modules: {
    interactiveAnatomy: 'BypassGastriqueInteractiveAnatomy',
    bmiCalculator: true,
    guidedTour: true,
  },
};
