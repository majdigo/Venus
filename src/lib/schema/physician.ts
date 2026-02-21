export function getPhysicianData(slug: string) {
    if (slug === 'dr-balti') {
        return {
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": "https://venus-estetika.com/chirurgiens/dr-balti#physician",
            "name": "Dr Balti",
            "givenName": "Balti",
            "jobTitle": "Chirurgien bariatrique et esthétique",
            "description": "Chirurgien spécialisé en chirurgie bariatrique et esthétique, diplômé en France, exerçant en Tunisie depuis plus de 15 ans.",
            "medicalSpecialty": [
                {
                    "@type": "MedicalSpecialty",
                    "name": "Chirurgie bariatrique"
                },
                {
                    "@type": "MedicalSpecialty",
                    "name": "Chirurgie esthétique"
                }
            ],
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Faculté de Médecine de Paris",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "FR"
                }
            },
            "hospitalAffiliation": [
                {
                    "@type": "Hospital",
                    "name": "Clinique Médicale Pasteur",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Tunis",
                        "addressCountry": "TN"
                    }
                },
                {
                    "@type": "Hospital",
                    "name": "Clinique Médicale Internationale Hannibal",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Tunis",
                        "addressCountry": "TN"
                    }
                }
            ],
            "availableService": [
                {
                    "@type": "MedicalProcedure",
                    "@id": "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique#procedure"
                }
            ],
            "image": "https://venus-estetika.com/images/chirurgiens/dr-balti.jpg",
            "url": "https://venus-estetika.com/chirurgiens/dr-balti",
            "worksFor": {
                "@type": "MedicalClinic",
                "@id": "https://venus-estetika.com/#clinic"
            },
            "knowsLanguage": ["fr", "ar", "en"]
        };
    }
    return {};
}
