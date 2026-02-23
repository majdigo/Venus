import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Star, Clock } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import Link from 'next/link';
import { InterventionHero } from '@/components/interventions/InterventionHero';
import { SurgeonReferenceSection } from '@/components/interventions/SurgeonReferenceSection';
import { PatientTestimonialSection } from '@/components/interventions/PatientTestimonialSection';
import { GuaranteeSection } from '@/components/interventions/GuaranteeSection';

export const metadata: Metadata = {
    title: 'Otoplastie Tunisie | Chirurgie des Oreilles dès 1 500€ — Venus Estetika',
    description: 'Otoplastie en Tunisie : correction des oreilles décollées. Intervention indolore, résultat définitif. Forfait tout compris dès 1 500€.',
};

export default function OtoplastiePage() {
    const breadcrumbs = [
        { name: 'Accueil', url: 'https://venus-estetika.com' },
        { name: 'Chirurgie du Visage', url: 'https://venus-estetika.com/interventions/chirurgie-visage' },
        { name: 'Otoplastie', url: 'https://venus-estetika.com/interventions/chirurgie-visage/otoplastie' },
    ];

    const procedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/otoplastie#procedure',
        'name': 'Otoplastie en Tunisie',
        'alternateName': ['Chirurgie des oreilles décollées', 'Pinnaplastie', 'Chirurgie correctrice des oreilles'],
        'description': 'L\'otoplastie est une intervention chirurgicale visant à corriger les oreilles décollées (otapostasis) en remodelant le cartilage auriculaire pour rapprocher les oreilles de la tête. Réalisée sous anesthésie locale ou générale dans une clinique agréée en Tunisie. Forfait tout compris à partir de 1 500€ pour les 2 oreilles.',
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Pavillons auriculaires (oreilles)',
        'url': 'https://venus-estetika.com/interventions/chirurgie-visage/otoplastie',
        'offers': {
            '@type': 'Offer',
            'price': '1500',
            'priceCurrency': 'EUR',
            'priceValidUntil': '2026-12-31',
            'availability': 'https://schema.org/InStock',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/otoplastie#faq',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Quel est le prix d\'une otoplastie en Tunisie tout compris ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Le prix d\'une otoplastie en Tunisie chez Venus Estetika est de 1 500€ tout compris pour les 2 oreilles. Ce forfait inclut l\'intervention, l\'anesthésie (locale ou générale), une nuit en clinique agréée, 4 nuits en hôtel 5 étoiles, les transferts VIP, le bandeau de contention et un suivi de 12 mois. En France, la même intervention coûte entre 3 000€ et 4 500€.',
                },
            },
            {
                '@type': 'Question',
                'name': 'L\'otoplastie est-elle douloureuse ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'L\'otoplastie est généralement peu douloureuse. Réalisée sous anesthésie locale avec sédation ou sous anesthésie générale, la procédure est totalement indolore. Après l\'intervention, une légère gêne est ressentie pendant 2 à 3 jours, bien contrôlée par des antalgiques simples. Le port du bandeau de contention est la principale contrainte post-opératoire.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Peut-on réaliser une otoplastie sur un enfant ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Oui, l\'otoplastie peut être réalisée dès 6-7 ans, âge auquel le cartilage auriculaire est suffisamment développé. Opérer tôt permet d\'éviter les complexes liés aux oreilles décollées à l\'école. L\'intervention est réalisée sous anesthésie générale chez l\'enfant. Venus Estetika pratique l\'otoplastie à partir de 10 ans pour les patients internationaux.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après une otoplastie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'La convalescence est courte : retour aux activités normales en 5 à 7 jours. Le bandeau de contention doit être porté 3 semaines la nuit (et les premiers jours en permanence). Les activités sportives sont reprises progressivement à partir de 3 semaines. Les oreilles doivent être protégées pendant 2 mois.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Le résultat d\'une otoplastie est-il définitif ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Oui, le résultat d\'une otoplastie correctement réalisée est permanent. Le cartilage remodelé conserve sa nouvelle forme de façon définitive. La récidive (re-décollage) est rare (moins de 2%) lorsque la technique chirurgicale est maîtrisée et les soins post-opératoires respectés.',
                },
            },
        ],
    };

    const includedItems = [
        'Chirurgien spécialisé en chirurgie auriculaire',
        'Anesthésie locale ou générale selon indication',
        'Séjour en clinique agréée (1 nuit)',
        'Bandeau de contention post-opératoire',
        'Hôtel 5 étoiles à Tunis (4 nuits)',
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
                    title="Otoplastie en Tunisie : corrigez les oreilles décollées définitivement"
                    subtitle="Une intervention simple et efficace pour retrouver des oreilles harmonieuses. Résultat définitif, cicatrice invisible."
                    price="1 500€"
                    priceOld="3 000-4 500€"
                    imageSrc="/images/heroes/chirurgie-visage-hero.jpg"
                    imageAlt="Otoplastie en Tunisie - Venus Estetika"
                    badge="Chirurgie des Oreilles"
                    devisSlug="otoplastie"
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
                                    Qu&apos;est-ce que l&apos;otoplastie ?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    L&apos;otoplastie (ou pinnaplastie) est l&apos;intervention chirurgicale qui corrige les
                                    oreilles décollées — appelées médicalement &quot;otapostasis&quot;. Elle remodèle le
                                    cartilage auriculaire pour rapprocher les oreilles de la tête et leur donner
                                    une forme harmonieuse. Simple, rapide et sans douleur, c&apos;est l&apos;une des
                                    interventions esthétiques les plus gratifiantes.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Chez Venus Estetika, nos chirurgiens proposent deux techniques éprouvées
                                    selon l&apos;anatomie et les préférences du patient.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Star className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Technique EarFold</h4>
                                        <p className="text-sm text-gray-500">
                                            Mise en place d&apos;un implant fin sous la peau pour remodeler le cartilage.
                                            Intervention minimalement invasive.
                                        </p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Technique Classique</h4>
                                        <p className="text-sm text-gray-500">
                                            Remodelage du cartilage par voie rétro-auriculaire. Cicatrice invisible
                                            derrière l&apos;oreille. Résultat définitif.
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
                                Prix de l&apos;otoplastie en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une tarification transparente, sans frais cachés. Économisez jusqu&apos;à 65%
                                par rapport aux tarifs européens.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Comparatif des tarifs</h3>
                                    <div className="space-y-5">
                                        {[
                                            { zone: 'Otoplastie bilatérale (2 oreilles)', fr: '3 000-4 500 €', tn: '1 500 €' },
                                            { zone: 'Otoplastie unilatérale (1 oreille)', fr: '2 000-2 500 €', tn: '900 €' },
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
                                        Port du bandeau de contention 3 semaines la nuit. Le résultat est
                                        immédiat et stable à vie. Retour aux activités normales en seulement
                                        7 jours. Résultat définitif et naturel, stable à vie.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=otoplastie">
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
                                Questions fréquentes sur l&apos;otoplastie
                            </h2>
                        </div>
                        <FAQAccordion data={faqSchema} title="Questions fréquentes sur l'otoplastie" />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages otoplastie"
                    testimonials={[
                        {
                            name: 'Julien F.',
                            city: 'Toulouse',
                            quote: "J'ai souffert de mes oreilles décollées depuis l'enfance — les moqueries à l'école m'ont longtemps suivi. À 32 ans, j'ai enfin osé passer à l'acte chez Venus Estetika. L'otoplastie a duré moins d'une heure, la douleur était minime, et une semaine plus tard je suis rentré à Toulouse avec des oreilles parfaitement harmonieuses. Un soulagement immense.",
                            intervention: 'Otoplastie bilatérale',
                            savings: '2 300€',
                            rating: 5,
                        },
                        {
                            name: 'Cécile M.',
                            city: 'Nantes',
                            quote: "Je voulais corriger les oreilles décollées de ma fille de 12 ans avant son entrée au collège. Venus Estetika nous a accueillies avec un professionnalisme et une bienveillance remarquables. Le résultat est parfaitement naturel. Ma fille n'a plus à se cacher les oreilles sous ses cheveux. Je recommande vivement.",
                            intervention: 'Otoplastie (enfant)',
                            savings: '2 100€',
                            rating: 5,
                        },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos chirurgiens pour l'otoplastie"
                    surgeons={[
                        {
                            name: 'Dr Walid Balti',
                            specialty: 'Chirurgie Plastique & Esthétique',
                            image: '/images/doctors/dr-walid-balti.jpg',
                            experience: '15+ ans d\'expérience',
                        },
                    ]}
                    devisSlug="otoplastie"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Libérez-vous du complexe des oreilles décollées
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Une intervention simple, un résultat définitif. Obtenez votre devis gratuit
                            et réservez votre date opératoire dès aujourd&apos;hui.
                        </p>
                        <Button size="lg" asChild className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                            <Link href="/devis?intervention=otoplastie">
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
