export interface Review {
    _id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
    interventionSlug?: string;
    intervention?: {
        title: string;
    };
}

export const REVIEWS: Review[] = [
    {
        _id: 'r1',
        author: 'Marie L.',
        rating: 5,
        comment: "Excellent séjour, clinique magnifique et résultat au-delà de mes espérances. Le Dr Balti a été très à l'écoute.",
        date: "2023-11-15",
        interventionSlug: 'augmentation-mammaire',
        intervention: { title: 'Augmentation Mammaire' }
    },
    {
        _id: 'r2',
        author: 'Sophie D.',
        rating: 5,
        comment: "L'hôtel 5 étoiles était parfait pour la convalescence. Prise en charge VIP de l'aéroport jusqu'au bloc.",
        date: "2024-01-10",
        interventionSlug: 'rhinoplastie',
        intervention: { title: 'Rhinoplastie' }
    },
    {
        _id: 'r3',
        author: 'Amine K.',
        rating: 5,
        comment: "Pour ma greffe de cheveux, la technique DHI a été indolore. L'équipe médicale tunisienne est extrêmement professionnelle.",
        date: "2023-09-05",
        interventionSlug: 'greffe-cheveux',
        intervention: { title: 'Greffe de Cheveux' }
    }
];

export function getReviewsForIntervention(slug: string) {
    return REVIEWS.filter(r => r.interventionSlug === slug);
}

export function getAllReviews() {
    return REVIEWS;
}
