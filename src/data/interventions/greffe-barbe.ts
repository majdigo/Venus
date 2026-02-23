import type { InterventionData } from '../types';

export const greffeBarbe: InterventionData = {
  slug: 'greffe-barbe',
  categorySlug: 'capillaire',
  name: 'Greffe de Barbe',
  fullTitle: 'Greffe de Barbe en Tunisie',

  hero: {
    title: "Greffe de barbe en Tunisie : une barbe dense et naturelle",
    subtitle: "Comblez les zones clairsemées ou créez une barbe complète et dense grâce à la greffe FUE ou DHI. Résultat définitif, naturel, et rasable.",
    price: "1 600€",
    priceOld: "4 000-10 000€",
    badge: "Greffe Capillaire Spécialisée",
    stats: "Résultat définitif — technique FUE & DHI — diagnostic gratuit en 24h",
    image: "/images/interventions/greffe-de-cheveux.jpg",
    imageAlt: "Greffe de Barbe en Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-samaher-bouchnak',

  sections: [
    {
      type: 'intro',
      title: "La greffe de barbe : une expertise de précision",
      content: `<p>La greffe de barbe est une technique spécialisée qui prélève des follicules pileux dans la zone occipitale (nuque) et les implante sur le visage — joues, menton, moustache, favoris — avec une précision extrême pour respecter la direction naturelle des poils.</p>
<p>Le résultat est définitif et entièrement naturel : la barbe greffée pousse, se rase et se taille exactement comme une barbe naturelle. Nos spécialistes dessinent le contour idéal selon votre morphologie pour un rendu harmonieux.</p>`,
    },
    {
      type: 'techniques',
      title: 'Techniques de greffe de barbe',
      items: [
        { name: "FUE Barbe", description: "Prélèvement zone occipitale + implantation sur le visage. Technique éprouvée pour de grands volumes de greffons." },
        { name: "DHI Barbe", description: "Stylo Choi pour un contrôle parfait de la direction et de la densité des poils. Idéal pour les zones frontales et le contour." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Inclus dans chaque forfait',
      items: [
        "Spécialiste capillaire certifié",
        "Greffons illimités (selon la zone traitée)",
        "1 séance PRP (Plasma Riche en Plaquettes)",
        "Anesthésie Dermojet sans aiguille",
        "Kit post-opératoire complet",
        "Hôtel 5 étoiles 3 nuits",
        "Transferts VIP aéroport-clinique",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Greffe de Barbe Tunisie',
    rows: [
      { label: 'Barbe Partielle (joues ou menton)', priceVenus: '1 600 €', priceFrance: '4 000-6 000 €' },
      { label: 'Barbe Complète (joues + menton + moustache + favoris)', priceVenus: '2 400 €', priceFrance: '8 000-10 000 €' },
    ],
    includes: [
      'PRP et kit post-op inclus dans tous les forfaits',
      'Hôtel 5 étoiles et transferts inclus',
      'Résultat final visible entre 8 et 12 mois',
    ],
  },

  testimonials: [
    { name: "Karim S.", city: "Paris", quote: "J'avais des zones complètement imberbes sur les joues depuis l'adolescence. Après la greffe DHI chez Venus Estetika, ma barbe est enfin complète et uniforme. Le Dr Bouchnak a dessiné le contour parfaitement selon ma morphologie. Résultat bluffant à 10 mois.", intervention: "Greffe de Barbe DHI", savings: "6 400€", rating: 5 },
    { name: "Sébastien R.", city: "Lyon", quote: "J'avais peur que ça fasse non naturel. Franchement, même mon coiffeur ne voit pas la différence. La direction des poils est parfaite, la densité est homogène. Séjour très bien organisé, hôtel superbe, et Dr Bouchnak très pédagogue.", intervention: "Greffe de Barbe FUE", savings: "3 800€", rating: 5 },
    { name: "Alexandre T.", city: "Nantes", quote: "Opération indolore grâce à l'anesthésie Dermojet. J'ai passé une bonne semaine à Tunis et je suis rentré avec un bandage discret. À 9 mois, la barbe est bien fournie et entièrement rasable. Je recommande à tous les hommes qui souffrent de clairsemé.", intervention: "Greffe de Barbe Complète", savings: "5 200€", rating: 5 },
  ],

  meta: {
    title: "Greffe de Barbe Tunisie | Dès 1 600€ Tout Compris — Venus Estetika",
    description: "Greffe de barbe en Tunisie (FUE/DHI). Comblez les zones clairsemées, créez une barbe complète. Résultat définitif et naturel. Dès 1 600€.",
    canonical: 'https://venus-estetika.com/interventions/capillaire/greffe-barbe',
  },

  devisSlug: 'greffe-barbe',

  modules: {
    guidedTour: true,
  },
};
