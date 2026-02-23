import type { InterventionData } from '../types';

export const botox: InterventionData = {
  slug: 'botox',
  categorySlug: 'medecine-esthetique',
  name: 'Botox',
  fullTitle: 'Botox en Tunisie',

  hero: {
    title: "Botox en Tunisie : lissez vos rides sans chirurgie",
    subtitle: "Injections de toxine botulique par un médecin expert. Résultat naturel, aucune éviction sociale.",
    price: "150€/zone",
    priceOld: "250–800€",
    badge: "Médecine Esthétique",
    stats: "Séance 15–30 min · Résultat J3–J5 · Effet 4–6 mois",
    image: "/images/heroes/medecine-esthetique-hero.jpg",
    imageAlt: "Injections Botox Tunisie — Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "Un lissage ciblé, un résultat naturel",
      content: `<p>Le Botox (toxine botulique de type A) agit en bloquant temporairement la contraction des muscles responsables des rides d'expression. Le résultat est un lissage ciblé qui préserve entièrement vos expressions naturelles.</p>
<p>La séance dure 15 à 30 minutes. Vous pouvez reprendre vos activités immédiatement. Les premiers effets apparaissent à J3-J5 et durent 4 à 6 mois.</p>`,
    },
    {
      type: 'techniques',
      title: 'Types de Botox',
      items: [
        { name: "Botox Classique", description: "Toxine botulique type A, relâchement ciblé des muscles responsables des rides." },
        { name: "Baby Botox", description: "Micro-doses pour un résultat ultra-naturel, toutes les expressions sont parfaitement préservées." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Quelles zones traite le Botox ?',
      items: [
        "Rides du front",
        "Rides du lion (entre les sourcils)",
        "Pattes d'oie",
        "Transpiration excessive (hyperhidrose)",
        "Bruxisme (mâchoire)",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Botox en Tunisie',
    rows: [
      { label: "1 zone (front, lion ou pattes d'oie)", priceVenus: '150 €', priceFrance: '250–350 €' },
      { label: '3 zones — Full Face', priceVenus: '350 €', priceFrance: '600–800 €' },
      { label: 'Mâchoire (bruxisme)', priceVenus: '200 €', priceFrance: '300–500 €' },
    ],
    includes: [
      'Consultation médicale incluse',
      'Résultat naturel garanti',
      'Aucune éviction sociale',
      'Effet dure 4 à 6 mois',
    ],
  },

  testimonials: [
    { name: "Sophie L.", city: "Paris 8e", quote: "Mes rides du front et mes pattes d'oie me complexaient vraiment. Trois zones traitées en moins de 20 minutes par le Dr Bouchnak. Le résultat est naturel — mes expressions sont intactes, juste les rides qui ont disparu. J'aurais dû le faire bien plus tôt !", intervention: "Botox 3 zones", savings: "300 €", rating: 5 },
    { name: "Marie-Claire V.", city: "Genève", quote: "Je voulais absolument éviter l'effet figé que j'avais vu sur certaines personnes. Le Dr Bouchnak m'a expliqué l'approche 'baby botox' et le résultat est exactement ce que j'espérais : un visage reposé et détendu, mais 100 % naturel. Je reviens tous les 5 mois.", intervention: "Baby Botox — rides du lion", savings: "180 €", rating: 5 },
    { name: "Aurélie T.", city: "Toulouse", quote: "J'avais des douleurs chroniques liées au bruxisme. La consultation médicale a été très sérieuse, le traitement par Botox a soulagé mes contractures en deux semaines. Un double bénéfice thérapeutique et esthétique que je n'attendais pas. Très professionnelle, cette équipe.", intervention: "Botox bruxisme (mâchoire)", savings: "150 €", rating: 5 },
  ],

  meta: {
    title: "Botox Tunisie | Injections Anti-Rides dès 150€ — Venus Estetika",
    description: "Injections de Botox en Tunisie : traitement anti-rides du front, rides du lion, pattes d'oie. Résultat naturel. Dès 150€/zone.",
    ogImage: '/images/heroes/medecine-esthetique-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/medecine-esthetique/botox',
  },

  devisSlug: 'botox',

  modules: {
    guidedTour: true,
  },
};
