import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Award, Clock } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import Link from 'next/link';
import { InterventionHero } from '@/components/interventions/InterventionHero';
import { SurgeonReferenceSection } from '@/components/interventions/SurgeonReferenceSection';
import { PatientTestimonialSection } from '@/components/interventions/PatientTestimonialSection';
import { GuaranteeSection } from '@/components/interventions/GuaranteeSection';

export const metadata: Metadata = {
    title: 'Génioplastie Tunisie | Chirurgie du Menton dès 2 000€ — Venus Estetika',
    description: 'Génioplastie en Tunisie : correction du menton fuyant ou proéminent. Prothèse ou ostéotomie. Profiloplastie possible. Dès 2 000€ tout compris.',
};

export default function GenioplastiePage() {
    const breadcrumbs = [
        { name: 'Accueil', url: 'https://venus-estetika.com' },
        { name: 'Chirurgie du Visage', url: 'https://venus-estetika.com/interventions/chirurgie-visage' },
        { name: 'Génioplastie', url: 'https://venus-estetika.com/interventions/chirurgie-visage/genioplastie' },
    ];

    const procedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/genioplastie#procedure',
        'name': 'Génioplastie en Tunisie',
        'alternateName': ['Chirurgie du menton', 'Mentoplastie', 'Prothèse mentonnière', 'Chin augmentation Tunisie'],
        'description': 'La génioplastie est une intervention chirurgicale visant à corriger le menton fuyant (rétrognathie) ou proéminent (prognathie) pour harmoniser le profil facial. Elle peut être réalisée par pose d\'une prothèse mentonnière en silicone ou par ostéotomie (repositionnement osseux). La profiloplastie (rhinoplastie + génioplastie) est la combinaison idéale pour harmoniser l\'ensemble du profil. Forfait tout compris à partir de 2 000€ en Tunisie.',
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Menton (région mentonnière)',
        'url': 'https://venus-estetika.com/interventions/chirurgie-visage/genioplastie',
        'offers': {
            '@type': 'Offer',
            'price': '2000',
            'priceCurrency': 'EUR',
            'priceValidUntil': '2026-12-31',
            'availability': 'https://schema.org/InStock',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/genioplastie#faq',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Quel est le prix d\'une génioplastie en Tunisie tout compris ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Le prix d\'une génioplastie par prothèse mentonnière en Tunisie chez Venus Estetika est de 2 000€ tout compris (prothèse incluse). La profiloplastie (rhinoplastie + génioplastie) est à 3 500€. Le forfait inclut l\'intervention, l\'anesthésie, une nuit en clinique, 5 nuits en hôtel 5 étoiles, les transferts VIP et un suivi de 12 mois. En France, la même intervention coûte entre 3 500€ et 10 000€.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle différence entre génioplastie par prothèse et par ostéotomie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'La prothèse mentonnière (implant en silicone) est la technique la plus simple : elle s\'insère par une incision intra-buccale (pas de cicatrice visible), permettant un ajout de volume au menton. L\'ostéotomie consiste à couper l\'os du menton pour l\'avancer, le reculer ou le remonter/abaisser. Elle est recommandée pour les corrections importantes ou quand une asymétrie osseuse est présente. La décision est prise après analyse céphalométrique.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Qu\'est-ce que la profiloplastie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'La profiloplastie est la combinaison d\'une rhinoplastie (chirurgie du nez) et d\'une génioplastie (chirurgie du menton) réalisées lors de la même intervention. Cette association permet d\'harmoniser l\'ensemble du profil facial en une seule fois, avec un résultat spectaculaire et naturel. Chez Venus Estetika, la profiloplastie est à 3 500€ tout compris, contre 6 000-10 000€ en France.',
                },
            },
            {
                '@type': 'Question',
                'name': 'La génioplastie laisse-t-elle des cicatrices visibles ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Non. La pose de prothèse mentonnière est réalisée par voie intra-buccale (à l\'intérieur de la bouche), ne laissant absolument aucune cicatrice visible sur la peau. L\'ostéotomie peut nécessiter une micro-incision sous le menton, dont la cicatrice est très discrète et devient invisible en quelques mois.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après une génioplastie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'L\'oedème se résorbe en 2 semaines. Une alimentation molle est recommandée pendant 10 jours pour les patients opérés par voie intra-buccale. Le résultat définitif est apprécié à 2-3 mois. La plupart des patients reprennent leurs activités professionnelles après 7 à 10 jours.',
                },
            },
        ],
    };

    const includedItems = [
        'Chirurgien spécialisé en chirurgie faciale',
        'Prothèse mentonnière en silicone (incluse)',
        'Séjour en clinique agréée (1 nuit)',
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
                    title="Génioplastie en Tunisie : harmonisez votre profil par la chirurgie du menton"
                    subtitle="Corrigez un menton fuyant ou proéminent pour un profil parfaitement équilibré. Prothèse ou ostéotomie. Profiloplastie possible."
                    price="2 000€"
                    priceOld="3 500-10 000€"
                    imageSrc="/images/heroes/chirurgie-visage-hero.jpg"
                    imageAlt="Génioplastie en Tunisie - Venus Estetika"
                    badge="Harmonie du Profil"
                    devisSlug="genioplastie"
                    stats="+2 500 patients accompagnés | Note 4.8/5 sur Google | Chirurgiens membres ISAPS"
                    doctorName="Dr Walid Balti"
                    doctorImage="/images/doctors/dr-walid-balti.jpg"
                    doctorSpecialty="Chirurgie Plastique & Esthétique"
                />

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Left: Description + Technique Cards */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                    Qu&apos;est-ce que la génioplastie ?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La génioplastie (ou mentoplastie) est la chirurgie esthétique du menton.
                                    Elle permet de corriger un menton fuyant (trop en retrait) ou proéminent
                                    (trop en avant) pour rétablir l&apos;équilibre du profil facial. Un menton bien
                                    proportionné est la clé d&apos;un visage harmonieux — il détermine le galbe
                                    global du profil et valorise le nez, les lèvres et la mâchoire.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Chez Venus Estetika, deux techniques chirurgicales sont proposées selon
                                    l&apos;importance de la correction et la structure osseuse du patient.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Prothèse Mentonnière</h4>
                                        <p className="text-sm text-gray-500">
                                            Implant en silicone posé par voie intra-buccale. Pas de cicatrice
                                            visible. Correction précise du volume et de la projection.
                                        </p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Ostéotomie</h4>
                                        <p className="text-sm text-gray-500">
                                            Avancement ou recul de l&apos;os du menton pour les modifications
                                            importantes. Résultat permanent et naturel.
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
                                Prix de la génioplastie en Tunisie
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
                                            { zone: 'Génioplastie (prothèse mentonnière)', fr: '3 500-5 500 €', tn: '2 000 €' },
                                            { zone: 'Profiloplastie (rhinoplastie + génioplastie)', fr: '6 000-10 000 €', tn: '3 500 €' },
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
                                        Oedème résorbé en 2 semaines. Alimentation molle 10 jours. Résultat
                                        définitif apprécié à 2-3 mois. La prothèse est permanente —
                                        aucun entretien ni renouvellement nécessaire.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=genioplastie">
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
                                Questions fréquentes sur la génioplastie
                            </h2>
                        </div>
                        <FAQAccordion data={faqSchema} title="Questions fréquentes sur la génioplastie" />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages génioplastie"
                    testimonials={[
                        {
                            name: 'Thomas R.',
                            city: 'Paris',
                            quote: "Mon menton fuyant me donnait un profil que je n'aimais pas depuis l'adolescence. La profiloplastie (rhinoplastie + génioplastie) réalisée à Tunis a complètement harmonisé mon visage. Mon chirurgien a parfaitement analysé les proportions. Le résultat est naturel et exactement ce que j'espérais.",
                            intervention: 'Profiloplastie',
                            savings: '6 500€',
                            rating: 5,
                        },
                        {
                            name: 'Aurélie C.',
                            city: 'Genève',
                            quote: "J'avais peur que la prothèse mentonnière soit visible ou artificielle au toucher. Il n'en est rien — deux mois après, même mes proches ne devinent pas que j'ai été opérée. Ils remarquent juste que mon visage est plus harmonieux. L'équipe de Venus Estetika a été parfaite du devis au suivi.",
                            intervention: 'Génioplastie par prothèse',
                            savings: '3 200€',
                            rating: 5,
                        },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos chirurgiens pour la génioplastie"
                    surgeons={[
                        {
                            name: 'Dr Walid Balti',
                            specialty: 'Chirurgie Plastique & Esthétique',
                            image: '/images/doctors/dr-walid-balti.jpg',
                            experience: '15+ ans d\'expérience',
                        },
                    ]}
                    devisSlug="genioplastie"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Un profil équilibré change tout
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            La génioplastie est l&apos;une des interventions les plus transformatrices du visage.
                            Obtenez votre devis gratuit et découvrez votre simulation de profil.
                        </p>
                        <Button size="lg" asChild className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                            <Link href="/devis?intervention=genioplastie">
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
