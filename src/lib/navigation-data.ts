// Navigation data for mega-menu and mobile nav
// Centralized data source for all navigation components

export interface NavIntervention {
  name: string;
  slug: string;
  price: string;
  isPopular?: boolean;
}

export interface NavCategory {
  name: string;
  slug: string;
  interventions: NavIntervention[];
}

export const NAVIGATION_CATEGORIES: NavCategory[] = [
  {
    name: 'Chirurgie du Visage',
    slug: 'chirurgie-visage',
    interventions: [
      { name: 'Rhinoplastie', slug: 'rhinoplastie', price: 'dès 2 200€', isPopular: true },
      { name: 'Blépharoplastie', slug: 'blepharoplastie', price: 'dès 1 500€' },
      { name: 'Lifting Cervico-Facial', slug: 'lifting-cervico-facial', price: 'dès 3 500€' },
      { name: 'Otoplastie', slug: 'otoplastie', price: 'dès 1 500€' },
      { name: 'Lipofilling Visage', slug: 'lipofilling-visage', price: 'dès 1 800€' },
      { name: 'Génioplastie', slug: 'genioplastie', price: 'dès 2 000€' },
    ],
  },
  {
    name: 'Chirurgie Mammaire',
    slug: 'chirurgie-mammaire',
    interventions: [
      { name: 'Augmentation Mammaire', slug: 'augmentation-mammaire', price: 'dès 2 500€', isPopular: true },
      { name: 'Réduction Mammaire', slug: 'reduction-mammaire', price: 'dès 2 800€' },
      { name: 'Lifting des Seins', slug: 'lifting-seins', price: 'dès 2 500€' },
      { name: 'Lipofilling Mammaire', slug: 'lipofilling-mammaire', price: 'dès 2 800€' },
    ],
  },
  {
    name: 'Chirurgie Silhouette',
    slug: 'chirurgie-silhouette',
    interventions: [
      { name: 'Liposuccion', slug: 'liposuccion', price: 'dès 2 000€', isPopular: true },
      { name: 'Abdominoplastie', slug: 'abdominoplastie', price: 'dès 2 900€', isPopular: true },
      { name: 'BBL', slug: 'bbl', price: 'dès 3 200€' },
      { name: 'Mommy Makeover', slug: 'mommy-makeover', price: 'dès 4 500€' },
      { name: 'Lifting des Bras', slug: 'lifting-bras', price: 'dès 2 000€' },
      { name: 'Lifting des Cuisses', slug: 'lifting-cuisses', price: 'dès 2 200€' },
    ],
  },
  {
    name: 'Chirurgie Bariatrique',
    slug: 'bariatrique',
    interventions: [
      { name: 'Sleeve Gastrique', slug: 'sleeve-gastrique', price: 'dès 3 500€', isPopular: true },
      { name: 'Bypass Gastrique', slug: 'bypass-gastrique', price: 'dès 4 500€' },
      { name: 'Anneau Gastrique', slug: 'anneau-gastrique', price: 'dès 2 500€' },
    ],
  },
  {
    name: 'Santé Dentaire',
    slug: 'dentaire',
    interventions: [
      { name: 'Facettes', slug: 'facettes', price: 'dès 300€/dent', isPopular: true },
      { name: 'Implants Dentaires', slug: 'implants-dentaires', price: 'dès 500€' },
      { name: 'Couronnes', slug: 'couronnes', price: 'dès 200€' },
      { name: 'Blanchiment', slug: 'blanchiment', price: 'dès 250€' },
    ],
  },
  {
    name: 'Greffe Capillaire',
    slug: 'capillaire',
    interventions: [
      { name: 'Greffe FUE', slug: 'greffe-cheveux', price: 'dès 1 900€', isPopular: true },
      { name: 'Greffe DHI', slug: 'greffe-dhi', price: 'dès 2 200€' },
      { name: 'Greffe de Barbe', slug: 'greffe-barbe', price: 'dès 1 500€' },
    ],
  },
];

export const WHATSAPP_NUMBER = '21650606780';
export const PHONE_NUMBER_FR = '+216 50 606 780';
export const PHONE_NUMBER_HREF = 'tel:+21650606780';
export const EMAIL = 'contact@venus-estetika.com';
export const ADDRESS = 'Lac Malaren, Les Berges du Lac, 1053 Tunis, Tunisie';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Venus Estetika, je souhaite obtenir des informations sur vos interventions.')}`;
