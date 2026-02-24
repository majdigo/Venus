export function getClinicData() {
    return {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "@id": "https://venus-estetika.com/#clinic",
        "name": "Venus Estetika",
        "alternateName": "Venus Esthétique Tunisie",
        "description": "Clinique de tourisme médical en Tunisie spécialisée en chirurgie esthétique, bariatrique, dentaire et greffe capillaire. Chirurgiens diplômés en France, cliniques agréées, hôtels 5*.",
        "url": "https://venus-estetika.com",
        "logo": "https://venus-estetika.com/images/logo-venus-estetika.png",
        "image": "https://venus-estetika.com/images/clinique-venus-estetika.jpg",
        "telephone": "+21650606780",
        "email": "contact@venus-estetika.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue du Lac Léman, Les Berges du Lac",
            "addressLocality": "Tunis",
            "postalCode": "1053",
            "addressCountry": "TN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "36.8333",
            "longitude": "10.1833"
        },
        "areaServed": [
            { "@type": "Country", "name": "France" },
            { "@type": "Country", "name": "Suisse" },
            { "@type": "Country", "name": "Belgique" }
        ],
        "medicalSpecialty": [
            "Chirurgie esthétique",
            "Chirurgie bariatrique",
            "Dentisterie esthétique",
            "Greffe capillaire FUE"
        ],
        "availableService": [
            { "@type": "MedicalProcedure", "name": "Sleeve Gastrique" },
            { "@type": "MedicalProcedure", "name": "Bypass Gastrique" },
            { "@type": "MedicalProcedure", "name": "Rhinoplastie" },
            { "@type": "MedicalProcedure", "name": "Augmentation Mammaire" },
            { "@type": "MedicalProcedure", "name": "Liposuccion" },
            { "@type": "MedicalProcedure", "name": "Abdominoplastie" },
            { "@type": "MedicalProcedure", "name": "Greffe Capillaire FUE" },
            { "@type": "MedicalProcedure", "name": "Facettes Dentaires" },
            { "@type": "MedicalProcedure", "name": "Implants Dentaires" }
        ],
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Cliniques partenaires agréées par le Ministère de la Santé tunisien"
            }
        ],
        "knowsLanguage": ["fr", "ar", "en"],
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Virement bancaire, Carte bancaire",
        "sameAs": [
            "https://www.facebook.com/venusestetika",
            "https://www.instagram.com/venusestetika"
        ]
    };
}
