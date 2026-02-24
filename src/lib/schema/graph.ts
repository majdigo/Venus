export interface GraphData {
    procedure?: any;
    faq?: any;
    howTo?: any;
    breadcrumb?: any;
    website?: any;
    clinic?: any;
    physician?: any;
}

export function combineToGraph(data: GraphData) {
    const graph = [];

    // Toujours inclure la clinique comme entité locale "hub"
    graph.push(data.clinic || {
        "@type": "MedicalClinic",
        "@id": "https://venus-estetika.com/#clinic",
        "name": "Venus Estetika",
        "url": "https://venus-estetika.com",
        "image": "https://venus-estetika.com/images/logo/logo-venus-estetika.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue du Lac Léman, Les Berges du Lac",
            "addressLocality": "Tunis",
            "postalCode": "1053",
            "addressCountry": "TN"
        },
        "telephone": "+21650606780",
        "email": "contact@venus-estetika.com",
        "priceRange": "€€"
    });

    if (data.procedure) graph.push(data.procedure);
    if (data.faq) graph.push(data.faq);
    if (data.howTo) graph.push(data.howTo);
    if (data.breadcrumb) graph.push(data.breadcrumb);
    if (data.website) graph.push(data.website);
    if (data.physician) graph.push(data.physician);

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}
