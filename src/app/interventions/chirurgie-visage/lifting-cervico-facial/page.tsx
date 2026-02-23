import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Clock, Sparkles } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import Link from 'next/link';
import { InterventionHero } from '@/components/interventions/InterventionHero';
import { SurgeonReferenceSection } from '@/components/interventions/SurgeonReferenceSection';
import { PatientTestimonialSection } from '@/components/interventions/PatientTestimonialSection';
import { GuaranteeSection } from '@/components/interventions/GuaranteeSection';

export const metadata: Metadata = {
    title: 'Lifting Visage Tunisie | Lifting Cervico-Facial dès 3 500€ — Venus Estetika',
    description: 'Lifting cervico-facial en Tunisie. Rajeunissement complet du visage et du cou. Résultat naturel, chirurgien expert. Forfait tout compris dès 3 500€.',
};

export default function LiftingCervicoFacialPage() {
    const breadcrumbs = [
        { name: 'Accueil', url: 'https://venus-estetika.com' },
        { name: 'Chirurgie du Visage', url: 'https://venus-estetika.com/interventions/chirurgie-visage' },
        { name: 'Lifting Cervico-Facial', url: 'https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial' },
    ];

    const procedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial#procedure',
        'name': 'Lifting Cervico-Facial en Tunisie',
        'alternateName': ['Lifting visage', 'Rhytidectomie', 'Facelift Tunisie', 'Lifting facial'],
        'description': 'Le lifting cervico-facial est une intervention de chirurgie esthétique permettant de repositionner les tissus mous du visage et du cou pour corriger le relâchement cutané et retrouver un aspect jeune et naturel. Réalisé par un chirurgien spécialiste dans une clinique agréée en Tunisie. Forfait tout compris à partir de 3 500€.',
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Visage et cou',
        'url': 'https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial',
        'offers': {
            '@type': 'Offer',
            'price': '3500',
            'priceCurrency': 'EUR',
            'priceValidUntil': '2026-12-31',
            'availability': 'https://schema.org/InStock',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/lifting-cervico-facial#faq',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Quel est le prix d\'un lifting cervico-facial en Tunisie tout compris ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Le prix d\'un lifting cervico-facial en Tunisie chez Venus Estetika est à partir de 3 500€ tout compris. Ce forfait inclut l\'intervention chirurgicale, l\'anesthésie, 2 nuits en clinique agréée, 5 nuits en hôtel 5 étoiles, les transferts VIP et un suivi de 12 mois. En France, la même intervention coûte entre 6 000€ et 10 000€, soit une économie de 50 à 65%.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Combien de temps durent les résultats d\'un lifting cervico-facial ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Un lifting cervico-facial bien réalisé offre des résultats durables de 8 à 12 ans. Le vieillissement reprend son cours naturel après l\'intervention, mais à un niveau rajeuni. L\'association avec des soins anti-âge (injections, peelings) peut prolonger et optimiser les résultats.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la différence entre le SMAS lifting et le mini-lift ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Le SMAS lifting agit sur le plan profond musculo-aponévrotique (SMAS) du visage pour un repositionnement naturel et durable des structures. Il est recommandé pour les relâchements importants. Le mini-lift (ou short-scar facelift) est une version allégée avec des incisions réduites, adaptée aux relâchements modérés et aux patients plus jeunes (45-55 ans).',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après un lifting cervico-facial ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'L\'oedème et les ecchymoses sont visibles pendant 2 à 3 semaines. La plupart des patients reprennent une vie sociale normale après 3 à 4 semaines. Le résultat définitif s\'apprécie entre 3 et 6 mois, quand tous les gonflements sont résorbés et que la peau a retrouvé son aspect naturel.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Peut-on combiner le lifting avec d\'autres interventions du visage ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Oui, le lifting cervico-facial se combine fréquemment avec une blépharoplastie (chirurgie des paupières), un lipofilling du visage ou une rhinoplastie lors du même séjour. Cette combinaison optimise le résultat global de rajeunissement du visage et les économies réalisées.',
                },
            },
        ],
    };

    const includedItems = [
        'Chirurgien spécialiste du lifting facial',
        'Séjour en clinique agréée (2 nuits)',
        'Hôtel 5 étoiles à Tunis (5 nuits)',
        'Transferts privés aéroport-clinique-hôtel',
        'Suivi post-opératoire complet (12 mois)',
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: procedureSchema,
                faq: faqSchema,
                breadcrumb: getBreadcrumbData(breadcrumbs),
            }} />

            <div className="min-h-screen bg-white">

                {/* HERO SECTION */}
                <InterventionHero
                    title="Lifting cervico-facial en Tunisie : rajeunissez visage et cou durablement"
                    subtitle="Repositionnez les tissus relâchés du visage et du cou pour un résultat naturel de 8 à 12 ans. Clinique agréée, hôtel 5 étoiles, suivi 12 mois inclus."
                    price="3 500€"
                    priceOld="6 000-10 000€"
                    imageSrc="/images/heroes/chirurgie-visage-hero.jpg"
                    imageAlt="Lifting cervico-facial en Tunisie - Venus Estetika"
                    badge="Rajeunissement Facial Premium"
                    devisSlug="lifting-visage"
                    stats="+2 500 patients accompagnés | Note 4.8/5 sur Google | Chirurgiens membres ISAPS"
                    doctorName="Dr Atef Ghedira"
                    doctorImage="/images/doctors/dr-atef-ghedira.jpg"
                    doctorSpecialty="Chirurgie Plastique & Reconstructrice"
                />

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Left: Description + Technique Cards */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                    Qu&apos;est-ce que le lifting cervico-facial ?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Le lifting cervico-facial est l&apos;intervention reine du rajeunissement facial. Elle
                                    consiste à repositionner les structures profondes du visage (SMAS), à retirer l&apos;excès
                                    de peau et à redéfinir l&apos;ovale du visage et le galbe du cou. Le résultat est naturel,
                                    sans effet &quot;tiré&quot;, grâce aux techniques modernes de repositionnement.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Chez Venus Estetika, nos chirurgiens spécialisés proposent deux approches
                                    complémentaires selon votre degré de relâchement et vos attentes.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">SMAS Lifting</h4>
                                        <p className="text-sm text-gray-500">
                                            Repositionnement musculaire profond pour un résultat naturel et durable.
                                            Recommandé pour les relâchements importants.
                                        </p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Sparkles className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Mini-Lift</h4>
                                        <p className="text-sm text-gray-500">
                                            Version allégée pour relâchement modéré. Cicatrices réduites et
                                            convalescence plus courte.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Included Items */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                                    Inclus dans notre forfait
                                </h3>
                                <div className="space-y-4">
                                    {includedItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                                        >
                                            <CheckCircle2 className="text-brand-blue w-6 h-6 shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PATIENT JOURNEY */}
                <GuidedTourTimeline />

                {/* PRICING SECTION */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                                Prix du lifting cervico-facial en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une tarification transparente, sans frais cachés. Économisez jusqu&apos;à 65%
                                par rapport aux tarifs européens pour une prestation de luxe équivalente.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Comparatif des tarifs</h3>
                                    <div className="space-y-5">
                                        {[
                                            { zone: 'Lifting cervico-facial complet', fr: '6 000-10 000 €', tn: '3 500 €' },
                                            { zone: 'Mini-lift (short-scar)', fr: '4 000-6 000 €', tn: '2 500 €' },
                                        ].map((price, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                                            >
                                                <div>
                                                    <p className="font-semibold text-gray-800">{price.zone}</p>
                                                    <p className="text-sm text-gray-400 line-through mt-0.5">
                                                        France : {price.fr}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-2xl text-brand-blue">{price.tn}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Convalescence Info */}
                                <div className="p-8 bg-slate-50">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Convalescence &amp; Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        L&apos;oedème se résorbe en 2 à 3 semaines. Le résultat définitif s&apos;apprécie à
                                        3-6 mois. La durée du résultat est de 8 à 12 ans selon l&apos;âge et
                                        la qualité de la peau. Un suivi rigoureux maximise la longévité des résultats.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=lifting-visage">
                                            Démarrer votre consultation en ligne
                                        </Link>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
                                Questions fréquentes sur le lifting cervico-facial
                            </h2>
                        </div>
                        <FAQAccordion data={faqSchema} title="Questions fréquentes sur le lifting cervico-facial" />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages lifting cervico-facial"
                    testimonials={[
                        {
                            name: 'Sylvie B.',
                            city: 'Marseille',
                            quote: "À 58 ans, j'avais le visage qui ne correspondait plus à l'énergie que je ressentais. Mon lifting chez Venus Estetika m'a rendu 12 ans. Le Dr Ghedira a réalisé un travail d'une précision remarquable — le résultat est naturel, personne ne voit que j'ai été opérée. Je me sens simplement mieux dans ma peau.",
                            intervention: 'Lifting cervico-facial SMAS',
                            savings: '5 800€',
                            rating: 5,
                        },
                        {
                            name: 'Nathalie P.',
                            city: 'Strasbourg',
                            quote: "J'avais demandé des devis en France — entre 8 000 et 11 000 euros. Venus Estetika m'a proposé un forfait complet à 3 500 euros avec hôtel 5 étoiles inclus. La qualité du soin a été exemplaire. Six mois après, mon ovale de visage est redéfini et mon cou est parfaitement galbe.",
                            intervention: 'Lifting cervico-facial complet',
                            savings: '6 200€',
                            rating: 5,
                        },
                        {
                            name: 'Françoise M.',
                            city: 'Bordeaux',
                            quote: "Le suivi post-opératoire à distance via téléconsultation est une vraie valeur ajoutée. Mon chirurgien a été disponible à chaque étape de la cicatrisation. Résultat à 6 mois : naturel, durable, et exactement ce que je voulais. Je recommande Venus Estetika sans hésitation.",
                            intervention: 'Mini-lift',
                            savings: '4 100€',
                            rating: 5,
                        },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos chirurgiens pour le lifting cervico-facial"
                    surgeons={[
                        {
                            name: 'Dr Atef Ghedira',
                            specialty: 'Chirurgie Plastique & Reconstructrice',
                            image: '/images/doctors/dr-atef-ghedira.jpg',
                            experience: 'Expert lifting facial',
                        },
                        {
                            name: 'Dr Borhene Belkhiria',
                            specialty: 'Chirurgie Esthétique du Visage',
                            image: '/images/doctors/dr-borhene-belkhiria.jpg',
                            experience: '20+ ans d\'expérience',
                        },
                    ]}
                    devisSlug="lifting-visage"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Rajeunissez naturellement, durablement
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Des patients de France, de Belgique et de Suisse nous confient leur lifting chaque mois.
                            Obtenez votre devis gratuit et réservez votre date opératoire.
                        </p>
                        <Button size="lg" asChild className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                            <Link href="/devis?intervention=lifting-visage">
                                Obtenir mon devis gratuit
                            </Link>
                        </Button>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Consultation gratuite | Sans engagement | Réponse sous 24h
                        </p>
                    </div>
                </section>

            </div>
        </>
    );
}
