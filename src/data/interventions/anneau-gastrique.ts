import type { InterventionData } from '../types';

export const anneauGastrique: InterventionData = {
  slug: 'anneau-gastrique',
  categorySlug: 'bariatrique',
  name: 'Anneau Gastrique',
  fullTitle: 'Anneau Gastrique en Tunisie',

  hero: {
    title: "Anneau gastrique en Tunisie : une solution réversible contre l'obésité",
    subtitle: "Perdez durablement du poids avec l'anneau gastrique ajustable, la seule intervention bariatrique 100% réversible.",
    price: "2 800€",
    priceOld: "5 000-8 000€",
    badge: "Chirurgie Bariatrique",
    stats: "Séjour tout compris — clinique accréditée — suivi nutritionnel 12 mois",
    image: "/images/heroes/bariatrique-hero.jpg",
    imageAlt: "Anneau Gastrique en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramzi-nouira',

  sections: [
    {
      type: 'intro',
      title: "L'anneau gastrique : une restriction douce et contrôlée",
      content: `<p>L'anneau gastrique ajustable est un dispositif en silicone médical placé chirurgicalement autour de la partie supérieure de l'estomac. Il crée une petite poche qui ralentit le passage des aliments, induisant une sensation de satiété rapide avec de petites quantités.</p>
<p>L'intervention est réalisée sous laparoscopie (3 petites incisions) et dure environ 45 minutes. Le volume de l'anneau est réglable via un boîtier sous-cutané, permettant des ajustements réguliers selon votre progression.</p>`,
    },
    {
      type: 'techniques',
      title: "Types d'anneau gastrique",
      items: [
        { name: "Anneau Ajustable", description: "Anneau en silicone placé autour de l'estomac, ajustable par un boîtier sous-cutané sans nouvelle intervention chirurgicale." },
        { name: "Réversibilité", description: "Seule intervention bariatrique 100% réversible. Retrait possible à tout moment, sans modification permanente de l'anatomie digestive." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Inclus dans votre forfait',
      items: [
        "Chirurgien bariatrique certifié",
        "Anneau (marque médicale certifiée CE)",
        "Clinique partenaire 1-2 nuits",
        "Hôtel 5 étoiles 5 nuits",
        "Transferts VIP aéroport-clinique-hôtel",
        "Suivi nutritionnel personnalisé 12 mois",
      ],
    },
  ],

  pricing: {
    title: 'Tarif Anneau Gastrique Tout Compris',
    rows: [
      { label: 'Anneau Gastrique Ajustable', priceVenus: '2 800 €', priceFrance: '5 000-8 000 €' },
    ],
    includes: [
      'Alimentation liquide 2 semaines post-op',
      'Alimentation mixée les 2 semaines suivantes',
      'Perte de poids attendue : 15-25 kg la 1re année',
      'Ajustements réguliers du serrage inclus',
      'Profil idéal : IMC entre 30 et 40',
    ],
  },

  testimonials: [
    { name: "Isabelle M.", city: "Lyon", quote: "J'ai longtemps hésité entre la sleeve et l'anneau. Le fait que l'anneau soit réversible a été décisif pour moi. L'équipe du Dr Nouira m'a accompagnée à chaque étape. En 10 mois, j'ai perdu 22 kg et je me sens enfin libre.", intervention: "Anneau Gastrique", savings: "3 800€", rating: 5 },
    { name: "Patrick D.", city: "Bordeaux", quote: "Opération sans douleur, récupération rapide. Le séjour à l'hôtel 5 étoiles à Tunis était vraiment agréable. Le suivi nutritionnel sur 12 mois m'a aidé à changer mes habitudes durablement. Je recommande Venus Estetika sans hésiter.", intervention: "Anneau Gastrique", savings: "4 200€", rating: 5 },
    { name: "Nathalie B.", city: "Marseille", quote: "Mon IMC était à 36, avec des douleurs articulaires. En France, les délais étaient de 18 mois. En Tunisie, tout s'est fait en 3 semaines. L'anneau est bien ajusté, la perte de poids progressive, et je suis enfin hors de danger pour mes genoux.", intervention: "Anneau Gastrique", savings: "5 000€", rating: 5 },
  ],

  meta: {
    title: "Anneau Gastrique Tunisie | Dès 2 800€ Tout Compris — Venus Estetika",
    description: "Anneau gastrique ajustable en Tunisie. Intervention réversible pour IMC 30-40. Suivi nutritionnel 12 mois. Dès 2 800€ tout compris.",
    canonical: 'https://venus-estetika.com/interventions/bariatrique/anneau-gastrique',
  },

  devisSlug: 'anneau-gastrique',

  modules: {
    guidedTour: true,
  },
};
