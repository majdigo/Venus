import type { CategoryData } from './types';

export const CATEGORIES: Record<string, CategoryData> = {
  'chirurgie-visage': {
    slug: 'chirurgie-visage',
    name: 'Chirurgie du Visage',
    description: 'Rhinoplastie, blépharoplastie, lifting, otoplastie — retrouvez l\'harmonie de votre visage.',
    heroImage: '/images/heroes/chirurgie-visage-hero.jpg',
    interventions: ['rhinoplastie', 'blepharoplastie', 'lifting-cervico-facial', 'otoplastie', 'genioplastie', 'lipofilling-visage'],
  },
  'chirurgie-mammaire': {
    slug: 'chirurgie-mammaire',
    name: 'Chirurgie Mammaire',
    description: 'Augmentation, réduction, lifting des seins — des résultats naturels et harmonieux.',
    heroImage: '/images/heroes/chirurgie-mammaire-hero.jpg',
    interventions: ['augmentation-mammaire', 'reduction-mammaire', 'lifting-seins', 'lipofilling-mammaire'],
  },
  'chirurgie-silhouette': {
    slug: 'chirurgie-silhouette',
    name: 'Chirurgie de la Silhouette',
    description: 'Liposuccion, abdominoplastie, BBL — sculptez la silhouette de vos rêves.',
    heroImage: '/images/heroes/chirurgie-silhouette-hero.jpg',
    interventions: ['liposuccion', 'abdominoplastie', 'bbl', 'mommy-makeover', 'lifting-bras', 'lifting-cuisses'],
  },
  'bariatrique': {
    slug: 'bariatrique',
    name: 'Chirurgie Bariatrique',
    description: 'Sleeve, bypass, anneau gastrique — une solution durable contre l\'obésité.',
    heroImage: '/images/heroes/bariatrique-hero.jpg',
    interventions: ['sleeve-gastrique', 'bypass-gastrique', 'anneau-gastrique'],
  },
  'dentaire': {
    slug: 'dentaire',
    name: 'Santé Dentaire',
    description: 'Facettes E-max, implants Straumann, couronnes — un sourire parfait à prix maîtrisé.',
    heroImage: '/images/heroes/dentaire-hero.jpg',
    interventions: ['facettes', 'implants-dentaires', 'couronnes', 'blanchiment'],
  },
  'capillaire': {
    slug: 'capillaire',
    name: 'Greffe Capillaire',
    description: 'Greffe FUE, DHI, barbe — retrouvez une chevelure dense et naturelle.',
    heroImage: '/images/heroes/capillaire-hero.jpg',
    interventions: ['greffe-cheveux', 'greffe-dhi', 'greffe-barbe'],
  },
  'medecine-esthetique': {
    slug: 'medecine-esthetique',
    name: 'Médecine Esthétique',
    description: 'Botox, acide hyaluronique, peeling — rajeunissez sans chirurgie.',
    heroImage: '/images/heroes/medecine-esthetique-hero.jpg',
    interventions: ['botox', 'acide-hyaluronique', 'mesolift', 'peeling'],
  },
};

/** Ordered array of categories */
export const CATEGORIES_ORDERED = Object.values(CATEGORIES);

/** Get category by slug */
export function getCategory(slug: string): CategoryData | undefined {
  return CATEGORIES[slug];
}

/** Get category that contains a given intervention */
export function getCategoryForIntervention(interventionSlug: string): CategoryData | undefined {
  return Object.values(CATEGORIES).find(c => c.interventions.includes(interventionSlug));
}
