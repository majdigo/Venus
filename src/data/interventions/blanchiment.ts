import type { InterventionData } from '../types';

export const blanchiment: InterventionData = {
  slug: 'blanchiment',
  categorySlug: 'dentaire',
  name: 'Blanchiment Dentaire',
  fullTitle: 'Blanchiment Dentaire en Tunisie',

  hero: {
    title: "Blanchiment dentaire en Tunisie : un sourire éclatant en 1 séance",
    subtitle: "Gagnez 4 à 8 teintes en une seule séance de blanchiment LED professionnel. Un résultat immédiat et spectaculaire.",
    price: "250 €",
    priceOld: "500-800 €",
    badge: "Esthétique Dentaire",
    stats: "+3 000 sourires blanchis | Note 4.9/5 sur Google | Résultat garanti",
    image: "/images/heroes/dentaire-hero.jpg",
    imageAlt: "Blanchiment Dentaire LED Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramses-mouelhi',

  sections: [
    {
      type: 'intro',
      title: "La technologie LED pour un éclat maximal",
      content: `<p>Le blanchiment dentaire professionnel au fauteuil utilise un gel à base de peroxyde d'hydrogène activé par une lampe LED haute puissance. Ce processus oxyde les pigments colorés incrustés dans l'émail sans altérer la structure de la dent, pour un résultat immédiat et homogène.</p>
<p>Contrairement aux kits de blanchiment vendus en pharmacie, notre protocole professionnel garantit un gain de 4 à 8 teintes en une seule séance de 90 minutes, avec un résultat uniforme sur toutes les dents.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de blanchiment',
      items: [
        { name: "Blanchiment au fauteuil", description: "Gel peroxyde d'hydrogène + lampe LED haute puissance. Résultat immédiat, gain garanti de 4 à 8 teintes en 90 minutes." },
        { name: "Kit de maintien", description: "Gouttières sur-mesure + gel de maintenance pour entretien à domicile et prolongation du résultat sur 1 à 3 ans." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Inclus dans votre séance',
      items: [
        "Dentiste spécialisé en esthétique dentaire",
        "Détartrage préalable offert",
        "Séance complète de blanchiment LED (90 min)",
        "Mesure de la teinte avant/après",
        "Kit de maintien à domicile (gouttières + gel)",
      ],
    },
  ],

  pricing: {
    title: 'Forfait Blanchiment Dentaire',
    rows: [
      { label: 'Blanchiment LED Professionnel', priceVenus: '250 €', priceFrance: '500-800 €' },
    ],
    includes: [
      'Résultat visible dès la fin de la séance',
      'Gain de 4 à 8 teintes garanti',
      'Aucune convalescence requise',
      'Sensibilité transitoire 24-48h (normale)',
      'Résultat dure 1 à 3 ans',
    ],
  },

  testimonials: [
    { name: "Camille D.", city: "Paris", quote: "J'avais les dents jaunies par des années de café. Après la séance LED au fauteuil, j'ai gagné 7 teintes en 90 minutes. Mon entourage n'en revenait pas. Un résultat bluffant pour un prix imbattable.", intervention: "Blanchiment LED au fauteuil", savings: "300 €", rating: 5 },
    { name: "Mathieu G.", city: "Bordeaux", quote: "J'avais essayé tous les kits en pharmacie sans résultat. Le blanchiment professionnel à Tunis a tout changé. Résultat immédiat, zéro douleur, et le kit de maintien m'a permis de tenir le résultat plus d'un an.", intervention: "Blanchiment + Kit de maintien", savings: "250 €", rating: 5 },
    { name: "Isabelle R.", city: "Genève", quote: "Super expérience de bout en bout. Le Dr Mouelhi est très attentionné et le résultat est vraiment naturel. Mes dents sont blanches sans paraître fausses. Je recommande à 100%.", intervention: "Blanchiment LED professionnel", savings: "400 €", rating: 5 },
  ],

  meta: {
    title: "Blanchiment Dentaire Tunisie | Dès 250€ — Venus Estetika",
    description: "Blanchiment dentaire professionnel en Tunisie. Technologie LED. Résultat immédiat, gain de 4 à 8 teintes. Dès 250€.",
    canonical: 'https://venus-estetika.com/interventions/dentaire/blanchiment',
  },

  devisSlug: 'blanchiment',

  modules: {
    guidedTour: true,
  },
};
