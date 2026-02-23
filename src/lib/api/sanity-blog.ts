/**
 * Static blog data provider.
 * Replaces Sanity CMS queries with hardcoded blog posts for SSG.
 * When Sanity CMS is configured, swap back to real queries.
 */

export interface SanityCategory {
    _id: string;
    title: string;
    description?: string;
}

export interface SanityPost {
    _id: string;
    title: string;
    slug: { current: string };
    author?: { name: string; image?: string };
    mainImage?: string;
    categories?: SanityCategory[];
    publishedAt: string;
    excerpt?: string;
    body?: any[];
}

const STATIC_CATEGORIES: SanityCategory[] = [
    { _id: 'cat-1', title: 'Chirurgie Esthétique', description: 'Articles sur la chirurgie esthétique en Tunisie' },
    { _id: 'cat-2', title: 'Chirurgie Bariatrique', description: 'Articles sur la chirurgie de l\'obésité' },
    { _id: 'cat-3', title: 'Greffe Capillaire', description: 'Articles sur la greffe de cheveux' },
];

const STATIC_POSTS: SanityPost[] = [
    {
        _id: 'post-1',
        title: 'Rhinoplastie en Tunisie : Le Guide Complet 2025',
        slug: { current: 'rhinoplastie-tunisie-guide' },
        author: { name: 'Dr. Karim Bouzid' },
        mainImage: '/images/interventions/rhinoplastie.jpg',
        categories: [STATIC_CATEGORIES[0]],
        publishedAt: '2025-01-15T10:00:00Z',
        excerpt: 'Tout ce que vous devez savoir sur la rhinoplastie en Tunisie : techniques, prix, résultats, convalescence. Un guide complet par nos chirurgiens experts.',
    },
    {
        _id: 'post-2',
        title: 'Sleeve Gastrique en Tunisie : Prix, Déroulement et Résultats',
        slug: { current: 'sleeve-gastrique-prix-tunisie' },
        author: { name: 'Dr. Mohamed Sahli' },
        mainImage: '/images/interventions/sleeve-gastrique.jpg',
        categories: [STATIC_CATEGORIES[1]],
        publishedAt: '2025-02-01T10:00:00Z',
        excerpt: 'La sleeve gastrique est l\'intervention bariatrique la plus demandée en Tunisie. Découvrez les prix, le déroulement de l\'opération et les résultats attendus.',
    },
    {
        _id: 'post-3',
        title: 'Greffe de Cheveux FUE en Tunisie : Technique, Prix et Résultats',
        slug: { current: 'greffe-cheveux-fue-tunisie' },
        author: { name: 'Dr. Ahmed Mansour' },
        mainImage: '/images/interventions/greffe-cheveux.jpg',
        categories: [STATIC_CATEGORIES[2]],
        publishedAt: '2025-02-10T10:00:00Z',
        excerpt: 'La greffe de cheveux FUE en Tunisie offre des résultats naturels à un prix accessible. Découvrez la technique, les tarifs et les résultats de nos patients.',
    },
];

export async function getAllPosts(): Promise<SanityPost[]> {
    return STATIC_POSTS;
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
    return STATIC_POSTS.find(p => p.slug.current === slug) || null;
}

export async function getCategories(): Promise<SanityCategory[]> {
    return STATIC_CATEGORIES;
}
