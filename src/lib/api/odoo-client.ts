// src/lib/api/odoo-client.ts
// Mock API Client for Odoo CMS Integration (Sprint 5)
// Data DERIVED from centralized src/data/ — single source of truth

import { SURGEONS } from '@/data/surgeons';
import { CATEGORIES_ORDERED } from '@/data/categories';
import { getInterventionData } from '@/data/interventions';

export interface Doctor {
    id: number;
    slug: string;
    name: string;
    specialty: string;
    image_url: string;
    is_featured: boolean;
}

export interface Intervention {
    id: number;
    slug: string;
    category_slug: string;
    category_name: string;
    title: string;
    price_min: number;
    price_max?: number;
    description_short: string;
    featured_doctors_slugs: string[];
}

// Derive doctors from centralized surgeons data
const MOCK_DOCTORS: Doctor[] = Object.values(SURGEONS).map((s, i) => ({
    id: i + 1,
    slug: s.slug,
    name: s.name,
    specialty: s.specialty,
    image_url: s.image,
    is_featured: true,
}));

// Derive interventions from centralized data
const MOCK_INTERVENTIONS: Intervention[] = (() => {
    let id = 100;
    const result: Intervention[] = [];
    for (const cat of CATEGORIES_ORDERED) {
        for (const slug of cat.interventions) {
            const data = getInterventionData(slug);
            if (!data) continue;
            const priceNum = parseInt(data.hero.price.replace(/[^\d]/g, ''), 10) || 0;
            result.push({
                id: ++id,
                slug: data.slug,
                category_slug: cat.slug,
                category_name: cat.name,
                title: data.name,
                price_min: priceNum,
                description_short: data.hero.subtitle.slice(0, 100),
                featured_doctors_slugs: Object.values(SURGEONS)
                    .filter(s => s.interventions.includes(slug))
                    .map(s => s.slug),
            });
        }
    }
    return result;
})();

/**
 * Récupère la liste des chirurgiens (Mock Odoo API)
 */
export async function getDoctors(featuredOnly: boolean = false): Promise<Doctor[]> {
    await new Promise(resolve => setTimeout(resolve, 50));

    if (featuredOnly) {
        return MOCK_DOCTORS.filter(d => d.is_featured);
    }
    return MOCK_DOCTORS;
}

/**
 * Récupère un chirurgien par son slug
 */
export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return MOCK_DOCTORS.find(d => d.slug === slug) || null;
}

/**
 * Récupère la liste de toutes les interventions, groupées ou non
 */
export async function getInterventions(): Promise<Intervention[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return MOCK_INTERVENTIONS;
}

/**
 * Récupère la liste des Catégories principales avec leurs interventions (pour les menus/homepage)
 */
export async function getGroupedCategories(): Promise<{ title: string, items: string[], link: string }[]> {
    return CATEGORIES_ORDERED.map(cat => ({
        title: cat.name,
        items: cat.interventions
            .map(slug => getInterventionData(slug)?.name ?? slug)
            .filter(Boolean),
        link: `/interventions/${cat.slug}/${cat.interventions[0]}`,
    }));
}
