import { SURGEONS, getSurgeon } from '@/data/surgeons';
import { getInterventionData } from '@/data/interventions';
import { getCategoryForIntervention } from '@/data/categories';

/**
 * Generate Schema.org Physician JSON-LD for a given surgeon slug.
 * Derives all data from centralized src/data/ — single source of truth.
 */
export function getPhysicianData(slug: string) {
    const surgeon = getSurgeon(slug);
    if (!surgeon) return {};

    const availableServices = surgeon.interventions.slice(0, 5).map(intSlug => {
        const data = getInterventionData(intSlug);
        const cat = getCategoryForIntervention(intSlug);
        const url = cat
            ? `https://venus-estetika.com/interventions/${cat.slug}/${intSlug}`
            : `https://venus-estetika.com/interventions`;
        return {
            "@type": "MedicalProcedure" as const,
            "@id": `${url}#procedure`,
            "name": data?.name ?? intSlug,
        };
    });

    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        "@id": `https://venus-estetika.com/chirurgiens/${slug}#physician`,
        "name": surgeon.name,
        "jobTitle": surgeon.specialty,
        "description": surgeon.experience || `${surgeon.name}, ${surgeon.specialty}`,
        "medicalSpecialty": [
            {
                "@type": "MedicalSpecialty",
                "name": surgeon.specialty,
            },
        ],
        "hospitalAffiliation": [
            {
                "@type": "Hospital",
                "name": "Clinique Médicale Pasteur",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Tunis",
                    "addressCountry": "TN",
                },
            },
            {
                "@type": "Hospital",
                "name": "Clinique Médicale Internationale Hannibal",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Tunis",
                    "addressCountry": "TN",
                },
            },
        ],
        "availableService": availableServices,
        "image": `https://venus-estetika.com${surgeon.image}`,
        "url": `https://venus-estetika.com/chirurgiens/${slug}`,
        "worksFor": {
            "@type": "MedicalClinic",
            "@id": "https://venus-estetika.com/#clinic",
        },
        "knowsLanguage": ["fr", "ar", "en"],
    };
}

/**
 * Get all physician schemas (for chirurgiens page or sitemap).
 */
export function getAllPhysicianData() {
    return Object.keys(SURGEONS).map(slug => getPhysicianData(slug));
}
