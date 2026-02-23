import type { InterventionData } from '../types';

export const facettes: InterventionData = {
  slug: 'facettes',
  categorySlug: 'dentaire',
  name: 'Facettes Dentaires',
  fullTitle: 'Facettes Dentaires en Tunisie',
  isPopular: true,

  hero: {
    title: "Facettes Dentaires en Tunisie : Votre Hollywood Smile",
    subtitle: "Retrouvez un sourire éclatant et parfaitement aligné avec des facettes en céramique E-max ou Lumineers ultra-fines. Réalisé en 5 jours seulement.",
    price: "250 €",
    priceOld: "900 €",
    badge: "Esthétique Dentaire Premium",
    stats: "+5 000 sourires créés | Note 4.9/5 sur Google | Laboratoire certifié ISO",
    image: "/images/heroes/dentaire-hero.jpg",
    imageAlt: "Facettes Dentaires Emax Tunisie - Venus Estetika",
  },

  primarySurgeon: 'dr-ramses-mouelhi',

  sections: [
    {
      type: 'authentic',
      title: 'La Pose de Facette Dentaire en Tunisie',
      description: "Facette dentaire Tunisie : Dents Blanches et Alignées Prix Pas Cher! A Partir de 280€ la Facette. Séjour Tout Inclus! Photos Avant Après pour la Pose des Facettes.",
      snippets: [
        "Le Hollywood Smile est la solution la plus demandée en Tunisie pour corriger tous les défauts dentaires en un minimum de temps.",
        "Les facettes EMAX Ultra fines, conçues sur mesure dans nos laboratoires partenaires, sont de l'épaisseur d'une lentille de contact. Elles ne nécessitent généralement pas ou très peu de fraisage de vos dents naturelles.",
        "En seulement deux séances (empreinte 3D puis collage définitif), vous repartez avec un sourire éclatant, blanc et parfaitement aligné, résistant aux taches de café et tabac.",
      ],
      images: [
        "/images/interventions/facettes/facette-dentaire.jpg",
        "/images/interventions/facettes/avant-apres-dentaire-1.jpg",
        "/images/interventions/facettes/avant-apres-dentaire-2.jpg",
      ],
    },
    {
      type: 'intro',
      title: 'Sublimez vos dents instantanément',
      content: `<p>Les facettes dentaires sont de fines coquilles en céramique ou en porcelaine, confectionnées sur-mesure, venant recouvrir la face visible de vos dents naturelles.</p>
<p>Cette intervention indolore permet de masquer totalement les défauts esthétiques, tout en préservant la vitalité et la structure de la racine de votre dent, contrairement aux couronnes dentaires.</p>`,
    },
    {
      type: 'ideal-profile',
      title: 'Quels problèmes corrigent les facettes ?',
      items: [
        'Dents tachées, jaunies ou grises (insensibles au blanchiment)',
        'Dents ébréchées, usées, cassées ou abîmées',
        'Léger chevauchement (traitement orthodontique rapide)',
        'Espaces interdentaires inesthétiques (diastèmes)',
        'Forme asymétrique ou dents jugées trop courtes',
      ],
    },
    {
      type: 'advantages',
      title: 'Pourquoi choisir Venus Estetika ?',
      items: [
        { icon: 'Award', title: "Céramique E-max", description: "Matériau de pointe (Disilicate de Lithium). Translucidité naturelle et résistance mécanique 4x supérieure à l'émail." },
        { icon: 'Shield', title: "Longévité Exceptionnelle", description: "Une durée de vie estimée entre 15 et 20 ans, avec une couleur qui ne jaunit jamais dans le temps." },
        { icon: 'Sparkles', title: "Laboratoire certifié ISO", description: "Facettes fabriquées dans un laboratoire certifié avec les technologies les plus avancées." },
        { icon: 'Clock', title: "Résultat en 5 jours", description: "Empreinte optique 3D, Digital Smile Design, fabrication express et collage définitif en un séjour." },
      ],
    },
  ],

  pricing: {
    title: 'Le Forfait Hollywood Smile',
    rows: [
      { label: 'Facette Premium E-max (par unité)', priceVenus: '250 €', priceFrance: '900 €' },
      { label: 'Pack Hollywood Smile (20 facettes)', priceVenus: '5 000 €', priceFrance: '18 000 €' },
    ],
    includes: [
      'Surfaçage ultra-léger et conception 3D',
      'Facettes provisoires pendant la fabrication',
      'Séjour Hôtel 5★ de 5 Nuits (dès 20 facettes)',
      'Transferts VIP Aéroport & Clinique',
      'Suivi post-opératoire',
    ],
  },

  testimonials: [
    { name: "Laura T.", city: "Lyon", quote: "J'avais des dents jaunies et légèrement écartées. Le résultat avec 20 facettes E-max est juste bluffant. Un vrai sourire de star, sans douleur !", intervention: "Pack Hollywood Smile", savings: "12 000 €", rating: 5 },
    { name: "Nicolas P.", city: "Bruxelles", quote: "Clinique ultra moderne, équipement au top. Le séjour à l'hôtel était fantastique. Mes nouvelles dents ont changé mon visage.", intervention: "24 Facettes Lumineers", savings: "15 000 €", rating: 5 },
  ],

  meta: {
    title: "Facettes Dentaires Tunisie | Hollywood Smile E-max — Dès 250€",
    description: "Retrouvez un sourire éclatant avec les facettes dentaires en Tunisie (Emax & Lumineers). Design de sourire 3D personnalisé. Résultat naturel en 3 étapes.",
    ogImage: '/images/heroes/dentaire-hero.jpg',
    canonical: 'https://venus-estetika.com/interventions/dentaire/facettes',
  },

  devisSlug: 'facettes',

  modules: {
    interactiveAnatomy: 'FacettesInteractiveAnatomy',
    photoUpload: true,
    guidedTour: true,
  },
};
