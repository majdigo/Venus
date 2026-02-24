export interface GalleryCase {
    _id: string;
    interventionSlug: string;
    title: string;
    beforeImage: string;
    afterImage: string;
    delay?: string;
    details?: string;
}

export const GALLERY_CASES: GalleryCase[] = [
    {
        _id: 'g1',
        interventionSlug: 'rhinoplastie',
        title: 'Rhinoplastie Ultrasonique',
        beforeImage: '/images/interventions/rhinoplastie/rhinoplastie-1.jpg',
        afterImage: '/images/interventions/rhinoplastie/rhinoplastie.jpg',
        delay: '3 mois',
        details: 'Correction de bosse et affinement de la pointe.'
    },
    {
        _id: 'g2',
        interventionSlug: 'augmentation-mammaire',
        title: 'Augmentation par prothèses rondes',
        beforeImage: '/images/interventions/augmentation-mammaire/augmentation-mammaire.jpg',
        afterImage: '/images/interventions/augmentation-mammaire/augmentation-mammaire-avant-apres.jpg',
        delay: '6 mois',
        details: 'Pose de prothèses Motiva 320cc en Dual Plane.'
    },
    {
        _id: 'g3',
        interventionSlug: 'liposuccion',
        title: 'Liposuccion VASER 360',
        beforeImage: '/images/before-after/avant-apres-liposuccion.jpg',
        afterImage: '/images/interventions/liposuccion/liposuccion.jpg',
        delay: '4 mois',
        details: 'Aspiration ciblée abdomen et flancs.'
    }
];

export function getGalleryCasesForIntervention(slug: string) {
    return GALLERY_CASES.filter(c => c.interventionSlug === slug);
}
