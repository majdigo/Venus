// Navigation data for mega-menu and mobile nav
// DERIVED from centralized data — single source of truth for prices

import { CATEGORIES_ORDERED } from '@/data/categories';
import { getInterventionData } from '@/data/interventions';

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

/**
 * Navigation categories derived from data/categories + data/interventions.
 * Prices come from each intervention's hero.price — ONE source of truth.
 */
export const NAVIGATION_CATEGORIES: NavCategory[] = CATEGORIES_ORDERED.map(cat => ({
  name: cat.name,
  slug: cat.slug,
  interventions: cat.interventions.map(slug => {
    const data = getInterventionData(slug);
    return {
      name: data?.name ?? slug,
      slug,
      price: data ? `dès ${data.hero.price}` : '',
      isPopular: data?.isPopular,
    };
  }),
}));

export const WHATSAPP_NUMBER = '21650606780';
export const PHONE_NUMBER_FR = '+216 50 606 780';
export const PHONE_NUMBER_HREF = 'tel:+21650606780';
export const EMAIL = 'contact@venus-estetika.com';
export const ADDRESS = 'Lac Malaren, Les Berges du Lac, 1053 Tunis, Tunisie';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Venus Estetika, je souhaite obtenir des informations sur vos interventions.')}`;
