import type { InterventionData } from '../types';

export const liftingCuisses: InterventionData = {
  slug: 'lifting-cuisses',
  categorySlug: 'chirurgie-silhouette',
  name: 'Lifting des Cuisses',
  fullTitle: 'Lifting des Cuisses (Cruroplastie) en Tunisie',

  hero: {
    title: "Lifting des Cuisses en Tunisie",
    subtitle: "Éliminez le frottement et l'excès de peau. La cruroplastie sculpte et raffermit l'intérieur de vos cuisses pour retrouver des jambes fuselées et confortables.",
    price: "2 500€",
    priceOld: "5 500€",
    badge: "Silhouette Post-Accouchement & Bariatrique",
    stats: "Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h",
    image: "/images/heroes/chirurgie-silhouette-hero.jpg",
    imageAlt: "Lifting des Cuisses (Cruroplastie) en Tunisie — Venus Estetika",
  },

  primarySurgeon: 'dr-hassen-ben-jemaa',

  sections: [
    {
      type: 'intro',
      title: "Le lifting des cuisses : retrouvez des jambes fuselées",
      content: `<p>La cruroplastie, ou lifting des cuisses, est une intervention de chirurgie esthétique qui consiste à retendre la peau relâchée de la face interne des cuisses. Elle est particulièrement indiquée après une perte de poids importante ou suite aux effets du vieillissement cutané.</p>
<p>Chez Venus Estetika, cette intervention est réalisée par des chirurgiens plasticiens expérimentés, dans une clinique agréée par le Ministère de la Santé tunisien.</p>`,
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika pour votre cruroplastie ?',
      items: [
        { icon: 'Shield', title: "Chirurgien diplômé", description: "Chirurgiens plasticiens expérimentés avec plus de 15 ans d'expérience." },
        { icon: 'Award', title: "Clinique agréée", description: "Intervention dans une clinique certifiée par le Ministère de la Santé tunisien." },
        { icon: 'Plane', title: "Séjour tout compris", description: "Hôtel 5 étoiles, transferts VIP et séjour en clinique inclus dans le forfait." },
        { icon: 'Clock', title: "Suivi post-opératoire", description: "Téléconsultations de contrôle incluses dans le forfait pour un suivi rigoureux." },
        { icon: 'Heart', title: "Résultat naturel", description: "Cicatrice discrète dans le pli de l'aine pour un résultat esthétique et naturel." },
      ],
    },
  ],

  pricing: {
    title: 'Prix du lifting des cuisses : France vs Venus Estetika',
    rows: [
      { label: 'Cruroplastie bilatérale', priceVenus: '2 500 €', priceFrance: '5 500 €' },
      { label: 'Cruroplastie + Liposuccion interne', priceVenus: '3 200 €', priceFrance: '6 800 €' },
    ],
    includes: [
      'Intervention & anesthésie',
      'Séjour en clinique (1 nuit)',
      'Hôtel 5 étoiles (6 nuits)',
      'Transferts VIP aéroport/hôtel',
      'Panty de maintien inclus',
      'Suivi post-opératoire',
    ],
  },

  testimonials: [
    { name: "Aurélie P.", city: "Paris", quote: "La peau de mes cuisses internes frottait constamment et me causait des irritations. Après la cruroplastie en Tunisie, je me sens enfin à l'aise. Le résultat est naturel et je peux enfin porter des jupes courtes.", intervention: "Cruroplastie bilatérale", savings: "3 000 €", rating: 5 },
    { name: "Sophie L.", city: "Lausanne", quote: "Suite à ma perte de poids de 35 kg, mes cuisses avaient un excès de peau important. Le Dr Balti a réalisé un lifting parfait. La cicatrice est dans le pli de l'aine et totalement invisible.", intervention: "Lifting cuisses post-bariatrique", savings: "3 400 €", rating: 5 },
    { name: "Élodie M.", city: "Bordeaux", quote: "L'équipe médicale de Venus Estetika est exceptionnelle. On se sent prise en charge du début à la fin. Mon séjour à l'hôtel 5 étoiles pendant la convalescence était un vrai bonheur. Je suis ravie du résultat.", intervention: "Cruroplastie + Lipo interne", savings: "3 800 €", rating: 5 },
  ],

  meta: {
    title: 'Lifting des Cuisses Tunisie (Cruroplastie) Prix | Venus Estetika',
    description: 'Chirurgie pour retendre la peau des cuisses après perte de poids. Prix forfait tout compris à partir de 2500€ en Tunisie avec séjour 5 étoiles.',
    canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/lifting-cuisses',
  },

  devisSlug: 'lifting-cuisses',
};
