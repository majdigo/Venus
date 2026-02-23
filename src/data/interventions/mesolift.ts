import type { InterventionData } from '../types';

export const mesolift: InterventionData = {
  slug: 'mesolift',
  categorySlug: 'medecine-esthetique',
  name: 'Mésolift',
  fullTitle: 'Mésolift en Tunisie',

  hero: {
    title: "Mésolift en Tunisie : le cocktail vitaminé pour une peau éclatante",
    subtitle: "Micro-injections d'un cocktail personnalisé de vitamines, AH et antioxydants directement dans le derme. Coup d'éclat immédiat, peau revitalisée en profondeur.",
    price: "150€/séance",
    priceOld: "250–400€",
    badge: "Médecine Esthétique",
    stats: "Éclat immédiat · Protocole 3 séances · Aucune éviction sociale",
    image: "/images/heroes/medecine-esthetique-hero.jpg",
    imageAlt: "Mésolift mésothérapie visage Tunisie — Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "Un booster d'éclat et d'hydratation pour votre peau",
      content: `<p>Le mésolift (ou mésothérapie du visage) consiste à injecter dans le derme superficiel un cocktail personnalisé de vitamines, d'acide hyaluronique non réticulé, d'acides aminés et d'antioxydants. Le résultat : une peau intensément hydratée, un teint unifié et un éclat immédiatement perceptible.</p>
<p>À la différence des injections de comblement classiques, le mésolift n'a pas d'effet volumateur — il travaille sur la qualité intrinsèque de la peau. C'est un traitement idéal en cure ou en complément de tout protocole anti-âge.</p>`,
    },
    {
      type: 'techniques',
      title: 'Protocoles de mésolift',
      items: [
        { name: "Mésolift Classique", description: "Micro-injections d'un cocktail vitaminé personnalisé dans le derme pour revitaliser et hydrater." },
        { name: "Mésolift + PRP", description: "Ajout de plasma riche en plaquettes (PRP) pour une régénération cellulaire intensive et durable." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Pour qui est indiqué le mésolift ?',
      items: [
        "Peau fatiguée et déshydratée",
        "Teint terne",
        "Ridules de déshydratation",
        "Préparation et entretien anti-âge",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Mésolift en Tunisie',
    rows: [
      { label: '1 séance mésolift', priceVenus: '150 €', priceFrance: '250–400 €' },
      { label: 'Cure 3 séances', priceVenus: '400 €', priceFrance: '750–1 200 €' },
      { label: 'Mésolift + PRP', priceVenus: '250 €/séance', priceFrance: '400–600 €' },
    ],
    includes: [
      'Cocktail vitaminé personnalisé',
      'Consultation médicale incluse',
      'Aucune éviction sociale',
      'Éclat immédiat dès la 1re séance',
    ],
  },

  testimonials: [
    { name: "Laure B.", city: "Bordeaux", quote: "Je revenais d'une période très stressante et ma peau avait vraiment l'air fatiguée. Après la première séance de mésolift, j'ai eu l'impression de retrouver mon teint de 10 ans en arrière. Mes amies m'ont toutes demandé ce que j'avais fait — j'avais l'air reposée et lumineuse.", intervention: "Mésolift — cure éclat", savings: "200 €", rating: 5 },
    { name: "Hélène D.", city: "Strasbourg", quote: "J'ai fait la cure complète de 3 séances pendant mon séjour d'une semaine en Tunisie. Le protocole était vraiment personnalisé — le médecin a adapté le cocktail à ma peau mixte. Résultat spectaculaire : peau hydratée, pores réduits, teint unifié. Je rentre au moins une fois par an maintenant.", intervention: "Cure mésolift 3 séances", savings: "450 €", rating: 5 },
    { name: "Virginie M.", city: "Nantes", quote: "J'ai combiné le mésolift avec mon lifting cervico-facial. Le Dr Bouchnak m'a conseillée sur le protocole pré-opératoire pour optimiser la qualité de ma peau avant l'intervention. Le suivi était impeccable et le résultat global dépasse mes attentes.", intervention: "Mésolift pré-opératoire", savings: "280 €", rating: 5 },
  ],

  meta: {
    title: "Mésolift Tunisie | Mésothérapie Visage dès 150€ — Venus Estetika",
    description: "Mésolift (mésothérapie du visage) en Tunisie : cocktail vitamines, acide hyaluronique et antioxydants. Coup d'éclat immédiat. Dès 150€/séance.",
    canonical: 'https://venus-estetika.com/interventions/medecine-esthetique/mesolift',
  },

  devisSlug: 'mesolift',

  modules: {
    guidedTour: true,
  },
};
