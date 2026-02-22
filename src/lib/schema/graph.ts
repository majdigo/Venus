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
        "image": "https://venus-estetika.com/images/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Les Berges du Lac 2",
            "addressLocality": "Tunis",
            "addressRegion": "Tunis",
            "postalCode": "1053",
            "addressCountry": "Tunisia"
        },
        "telephone": "+33100000000",
        "priceRange": "$$$"
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
