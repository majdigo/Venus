import type { InterventionData } from '../types';

export const couronnes: InterventionData = {
  slug: 'couronnes',
  categorySlug: 'dentaire',
  name: 'Couronnes Dentaires',
  fullTitle: 'Couronnes Dentaires en Tunisie',

  hero: {
    title: "Couronnes dentaires en Tunisie : restaurez vos dents avec précision",
    subtitle: "Reconstituez une dent abîmée, dévitalisée ou fracturée avec nos couronnes zircone sur-mesure, fabriquées en 72h dans notre laboratoire intégré.",
    price: "250 €",
    priceOld: "700-1 200 €",
    badge: "Prothèse Dentaire Premium",
    stats: "+4 000 couronnes posées | Note 4.9/5 sur Google | Labo certifié ISO",
    image: "/images/heroes/dentaire-hero.jpg",
    imageAlt: "Couronnes Dentaires Zircone Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramses-mouelhi',

  sections: [
    {
      type: 'intro',
      title: "La couronne dentaire : solidité et esthétique au sommet",
      content: `<p>La couronne dentaire est une prothèse qui recouvre entièrement une dent naturelle fragilisée pour lui redonner forme, solidité et esthétique. Elle est indiquée pour les dents dévitalisées, très cariées, fracturées ou dans le cadre d'un traitement implantaire.</p>
<p>Notre laboratoire prothétique intégré, certifié ISO, fabrique chaque couronne sur-mesure à partir d'empreintes optiques 3D pour un ajustement parfait et une esthétique inégalée.</p>`,
    },
    {
      type: 'techniques',
      title: 'Types de couronnes dentaires',
      items: [
        { name: "Couronne Zircone", description: "Matériau le plus résistant et esthétique. Translucidité naturelle identique à l'émail, sans métal, sans noircissement des gencives." },
        { name: "Couronne Céramo-Métallique", description: "Option économique robuste. Armature en métal + céramique. Idéale pour les molaires soumises à de fortes contraintes masticatoires." },
      ],
    },
    {
      type: 'ideal-profile',
      title: 'Inclus dans votre forfait',
      items: [
        "Chirurgien dentiste spécialisé en prothèse",
        "Empreinte optique 3D de précision",
        "Fabrication au laboratoire intégré (72h)",
        "Couronne provisoire pendant la fabrication",
        "Hôtel 5 étoiles 5 nuits (pack 6+ couronnes)",
        "Transferts VIP aéroport-clinique",
        "Suivi et ajustement post-pose",
      ],
    },
  ],

  pricing: {
    title: 'Tarifs Couronnes Dentaires Tunisie',
    rows: [
      { label: 'Couronne Zircone', priceVenus: '250 €', priceFrance: '700-1 200 €' },
      { label: 'Couronne Céramo-Métallique', priceVenus: '180 €', priceFrance: '500-800 €' },
    ],
    includes: [
      'Pack 6+ couronnes : hôtel et transferts inclus',
      'Fabrication laboratoire intégré certifié ISO',
      'Empreinte optique 3D',
      'Couronne provisoire incluse',
    ],
  },

  testimonials: [
    { name: "Stéphane M.", city: "Lyon", quote: "J'avais 8 dents à couronner suite à des caries profondes. Le labo intégré a tout fabriqué en 72h. Les couronnes zircone sont parfaites, indiscernables des vraies dents. Un séjour très bien organisé.", intervention: "8 couronnes zircone", savings: "3 800 €", rating: 5 },
    { name: "Nathalie F.", city: "Marseille", quote: "Ma dent dévitalisée s'était fracturée. La couronne zircone posée à Tunis est d'une qualité irréprochable. Ajustement parfait de l'occlusion, aucune gêne depuis la pose. Je reviens pour les 3 autres.", intervention: "Couronne zircone unitaire", savings: "650 €", rating: 5 },
    { name: "Antoine B.", city: "Bruxelles", quote: "Pack 12 couronnes avec séjour hôtel inclus. Rapport qualité-prix exceptionnel par rapport à la Belgique. Le Dr Mouelhi prend le temps d'expliquer chaque étape. Je repars avec un sourire entièrement refait.", intervention: "Pack 12 couronnes tout inclus", savings: "9 000 €", rating: 5 },
  ],

  meta: {
    title: "Couronnes Dentaires Tunisie | Zircone dès 250€ — Venus Estetika",
    description: "Couronnes dentaires en Tunisie : zircone, céramo-métallique. Restauration dent abîmée. Laboratoire intégré. Dès 250€/couronne.",
    canonical: 'https://venus-estetika.com/interventions/dentaire/couronnes',
  },

  devisSlug: 'couronnes',

  modules: {
    guidedTour: true,
  },
};
