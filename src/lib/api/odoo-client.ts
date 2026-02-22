// src/lib/api/odoo-client.ts
// Mock API Client for Odoo CMS Integration (Sprint 4)

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

// MOCK DATA - To be replaced by actual Odoo XML-RPC/REST fetch calls

const MOCK_DOCTORS: Doctor[] = [
    { id: 1, slug: 'dr-walid-balti', name: 'Dr Walid Balti', specialty: 'Chirurgie Plastique, Esthétique et Reconstructrice', image_url: '/images/doctors/dr-walid-balti.jpg', is_featured: true },
    { id: 2, slug: 'dr-atef-ghedira', name: 'Dr Atef Ghedira', specialty: 'Chirurgie Plastique, Esthétique et Reconstructrice', image_url: '/images/doctors/dr-atef-ghedira.jpg', is_featured: true },
    { id: 3, slug: 'dr-imen-ben-gaied', name: 'Dr Imen Ben Gaied', specialty: 'Chirurgie Plastique, Esthétique et Reconstructrice', image_url: '/images/doctors/dr-imen-ben-gaied.jpeg', is_featured: true },
    { id: 4, slug: 'dr-ramzi-nouira', name: 'Dr Ramzi Nouira', specialty: 'Chirurgie Bariatrique (Obésité)', image_url: '/images/doctors/dr-ramzi-nouira.jpg', is_featured: true },
    { id: 5, slug: 'dr-samaher-bouchnak', name: 'Dr Samaher Bouchnak', specialty: 'Greffe Capillaire, Médecine Esthétique', image_url: '/images/doctors/dr-samaher-bouchnak.jpg', is_featured: true },
    { id: 6, slug: 'dr-ramses-mouelhi', name: 'Dr Ramses Mouelhi', specialty: 'Chirurgien Dentiste (Implantologie & Facettes)', image_url: '/images/doctors/dr-ramses-mouelhi.jpg', is_featured: true },
    { id: 7, slug: 'dr-hassen-ben-jemaa', name: 'Dr Hassen Ben Jemaa', specialty: 'Chirurgie Plastique, Esthétique et Reconstructrice', image_url: '/images/doctors/dr-hassen-ben-jemaa.jpg', is_featured: true },
    { id: 8, slug: 'pr-mehdi-fendri', name: 'Pr Mehdi Fendri', specialty: 'Ophtalmologie, Oculoplastie (Chirurgie Esthétique des Yeux)', image_url: '/images/doctors/pr-mehdi-fendri.jpg', is_featured: true },
    { id: 9, slug: 'dr-borhene-belkhiria', name: 'Dr Borhene Belkhiria', specialty: 'Chirurgie Plastique, Esthétique et Reconstructrice', image_url: '/images/doctors/dr-borhene-belkhiria.jpg', is_featured: true },
];

const MOCK_INTERVENTIONS: Intervention[] = [
    { id: 101, slug: 'rhinoplastie', category_slug: 'chirurgie-visage', category_name: 'Chirurgie du Visage', title: 'Rhinoplastie', price_min: 2200, price_max: 3200, description_short: 'Remodelage esthétique et fonctionnel du nez.', featured_doctors_slugs: ['dr-walid-balti', 'dr-imen-ben-gaied', 'dr-hassen-ben-jemaa'] },
    { id: 102, slug: 'lifting-cervico-facial', category_slug: 'chirurgie-visage', category_name: 'Chirurgie du Visage', title: 'Lifting Cervico-Facial', price_min: 3500, description_short: 'Rajeunissement global de l\'ovale du visage et du cou.', featured_doctors_slugs: ['dr-atef-ghedira', 'dr-borhene-belkhiria'] },
    { id: 103, slug: 'blepharoplastie', category_slug: 'chirurgie-visage', category_name: 'Chirurgie du Visage', title: 'Blépharoplastie', price_min: 1500, description_short: 'Chirurgie des paupières pour un regard rajeuni.', featured_doctors_slugs: ['dr-walid-balti', 'pr-mehdi-fendri'] },
    { id: 201, slug: 'augmentation-mammaire', category_slug: 'chirurgie-mammaire', category_name: 'Chirurgie Mammaire', title: 'Augmentation Mammaire', price_min: 2500, description_short: 'Augmentation du volume des seins par implants de haute qualité.', featured_doctors_slugs: ['dr-walid-balti', 'dr-atef-ghedira', 'dr-imen-ben-gaied'] },
    { id: 202, slug: 'lipofilling-mammaire', category_slug: 'chirurgie-mammaire', category_name: 'Chirurgie Mammaire', title: 'Lipofilling Mammaire', price_min: 2800, description_short: 'Augmentation mammaire naturelle par transfert de graisse.', featured_doctors_slugs: ['dr-imen-ben-gaied'] },
    { id: 301, slug: 'abdominoplastie', category_slug: 'chirurgie-silhouette', category_name: 'Chirurgie de la Silhouette', title: 'Abdominoplastie', price_min: 2900, description_short: 'Remise en tension de la paroi abdominale et retrait d\'excédent cutané.', featured_doctors_slugs: ['dr-walid-balti', 'dr-hassen-ben-jemaa'] },
    { id: 302, slug: 'liposuccion', category_slug: 'chirurgie-silhouette', category_name: 'Chirurgie de la Silhouette', title: 'Liposuccion', price_min: 2000, price_max: 3000, description_short: 'Aspiration des amas graisseux localisés.', featured_doctors_slugs: ['dr-atef-ghedira', 'dr-borhene-belkhiria'] },
    { id: 401, slug: 'sleeve-gastrique', category_slug: 'bariatrique', category_name: 'Chirurgie de l\'Obésité', title: 'Sleeve Gastrique', price_min: 3500, description_short: 'Réduction de l\'estomac pour une perte de poids définitive.', featured_doctors_slugs: ['dr-ramzi-nouira'] },
    { id: 402, slug: 'bypass-gastrique', category_slug: 'bariatrique', category_name: 'Chirurgie de l\'Obésité', title: 'Bypass Gastrique', price_min: 4500, description_short: 'Court-circuit gastrique pour traiter l\'obésité sévère à morbide.', featured_doctors_slugs: ['dr-ramzi-nouira'] },
    { id: 501, slug: 'greffe-cheveux-fue', category_slug: 'greffe-cheveux', category_name: 'Greffe de Cheveux FUE', title: 'Greffe Capillaire FUE', price_min: 1900, description_short: 'Implantation follicule par follicule sans cicatrice visible.', featured_doctors_slugs: ['dr-samaher-bouchnak'] },
    { id: 601, slug: 'facettes-dentaires', category_slug: 'dentaire', category_name: 'Dentisterie Esthétique', title: 'Facettes Dentaires', price_min: 300, description_short: 'Sourire hollywoodien parfait avec des facettes E-max.', featured_doctors_slugs: ['dr-ramses-mouelhi'] },
];

/**
 * Récupère la liste des chirurgiens (Mock Odoo API)
 */
export async function getDoctors(featuredOnly: boolean = false): Promise<Doctor[]> {
    // Simulate network delay
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
    const categoriesMap = new Map<string, { title: string, items: Set<string>, link: string }>();

    MOCK_INTERVENTIONS.forEach(int => {
        if (!categoriesMap.has(int.category_slug)) {
            let baseLink = `/interventions/${int.category_slug}`;
            if (int.category_slug === 'bariatrique') baseLink = '/interventions/bariatrique/sleeve-gastrique';
            if (int.category_slug === 'dentaire') baseLink = '/interventions/dentaire';
            if (int.category_slug === 'greffe-cheveux') baseLink = '/interventions/greffe-cheveux';

            categoriesMap.set(int.category_slug, {
                title: int.category_name,
                items: new Set(),
                link: baseLink
            });
        }
        categoriesMap.get(int.category_slug)!.items.add(int.title);
    });

    return Array.from(categoriesMap.values()).map(cat => ({
        title: cat.title,
        items: Array.from(cat.items),
        link: cat.link
    }));
}
