import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Clock, Sparkles } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import Link from 'next/link';
import { InterventionHero } from '@/components/interventions/InterventionHero';
import { SurgeonReferenceSection } from '@/components/interventions/SurgeonReferenceSection';
import { PatientTestimonialSection } from '@/components/interventions/PatientTestimonialSection';
import { GuaranteeSection } from '@/components/interventions/GuaranteeSection';

export const metadata: Metadata = {
    title: 'Blépharoplastie Tunisie | Chirurgie des Paupières dès 1 500€ — Venus Estetika',
    description: 'Blépharoplastie en Tunisie : chirurgie des paupières supérieures et inférieures. Regard rajeuni, cicatrices invisibles. Forfait tout compris dès 1 500€. Devis gratuit.',
};

export default function BlepharoplastiePage() {
    const breadcrumbs = [
        { name: 'Accueil', url: 'https://venus-estetika.com' },
        { name: 'Chirurgie du Visage', url: 'https://venus-estetika.com/interventions/chirurgie-visage' },
        { name: 'Blépharoplastie', url: 'https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie' },
    ];

    const procedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie#procedure',
        'name': 'Blépharoplastie en Tunisie',
        'alternateName': ['Chirurgie des paupières', 'Chirurgie des yeux esthétique', 'Blepharoplasty'],
        'description': 'La blépharoplastie est une intervention de chirurgie esthétique des paupières visant à retirer l\'excès de peau et les poches de graisse des paupières supérieures et/ou inférieures. Réalisée par un chirurgien spécialisé dans une clinique agréée en Tunisie, avec un forfait tout compris à partir de 1 500€.',
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Paupières supérieures et inférieures',
        'url': 'https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie',
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
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/blepharoplastie#faq',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Quel est le prix d\'une blépharoplastie en Tunisie tout compris ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Le prix d\'une blépharoplastie en Tunisie chez Venus Estetika commence à 1 500€ pour les paupières supérieures seules et à 2 500€ pour les 4 paupières. Ce forfait tout compris inclut l\'intervention, l\'anesthésie, une nuit en clinique, 5 nuits en hôtel 5 étoiles, les transferts VIP et un suivi de 12 mois. En France, la même intervention coûte entre 3 000€ et 7 500€.',
                },
            },
            {
                '@type': 'Question',
                'name': 'La blépharoplastie laisse-t-elle des cicatrices visibles ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Non, les cicatrices sont pratiquement invisibles. Pour les paupières supérieures, l\'incision est cachée dans le pli naturel de la paupière et disparaît en 2 à 3 mois. Pour les paupières inférieures, la technique transconjonctivale (passage à l\'intérieur de la paupière) ne laisse aucune cicatrice visible sur la peau.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après une blépharoplastie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Les ecchymoses et l\'œdème se résorbent généralement en 7 à 10 jours. La plupart des patients peuvent reprendre leurs activités professionnelles après 10 à 14 jours. Le résultat définitif est apprécié à 3 mois. Le maquillage peut être repris dès J+10.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Combien d\'années de jeunesse retrouve-t-on avec une blépharoplastie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Une blépharoplastie complète (4 paupières) peut rajeunir le regard de 10 à 15 ans. L\'effet est naturel et durable, avec une longévité de 8 à 12 ans selon le patient. L\'association avec un lipofilling périorbitaire peut encore améliorer le résultat global.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Peut-on combiner la blépharoplastie avec d\'autres interventions ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Oui, la blépharoplastie se combine fréquemment avec un lifting cervico-facial, une rhinoplastie ou un lipofilling du visage lors du même séjour, optimisant ainsi le résultat global et les économies réalisées. Votre chirurgien vous guidera lors de la consultation préopératoire.',
                },
            },
        ],
    };

    const includedItems = [
        'Chirurgien spécialisé en chirurgie palpébrale',
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
                    title="Blépharoplastie en Tunisie : retrouvez un regard jeune et reposé"
                    subtitle="Corrigez les paupières tombantes et les poches sous les yeux."
                    price="1 500€"
                    priceOld="3 000-7 500€"
                    imageSrc="/images/heroes/chirurgie-visage-hero.jpg"
                    imageAlt="Blépharoplastie en Tunisie - Venus Estetika"
                    badge="Rajeunissement du Regard"
                    devisSlug="blepharoplastie"
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
                                    Qu&apos;est-ce que la blépharoplastie ?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La blépharoplastie est l&apos;intervention chirurgicale de rajeunissement des paupières.
                                    Elle permet de corriger le ptosis (chute des paupières), les poches sous les yeux et
                                    l&apos;excès de peau qui alourdit le regard. Réalisée sous anesthésie locale avec sédation
                                    ou sous anesthésie générale selon les cas, elle offre un résultat naturel et durable.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Chez Venus Estetika, nos chirurgiens spécialisés maîtrisent les deux techniques
                                    principales pour un résultat personnalisé selon votre anatomie et vos objectifs.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Sparkles className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Paupières Supérieures</h4>
                                        <p className="text-sm text-gray-500">
                                            Retrait de l&apos;excès de peau et de la graisse. Cicatrice cachée dans le pli naturel de la paupière.
                                        </p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Paupières Inférieures</h4>
                                        <p className="text-sm text-gray-500">
                                            Retrait des poches sous les yeux par voie transconjonctivale. Aucune cicatrice visible sur la peau.
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
                                Prix de la blépharoplastie en Tunisie
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
                                            { zone: 'Paupières supérieures', fr: '3 000 €', tn: '1 500 €' },
                                            { zone: '4 paupières (sup. + inf.)', fr: '5 000-7 500 €', tn: '2 500 €' },
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
                                        Oedème et ecchymoses se résorbent en 7 à 10 jours. Le résultat définitif est
                                        apprécié à 3 mois. Une blépharoplastie 4 paupières permet de rajeunir le regard
                                        de 10 ans de façon naturelle et durable.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=blepharoplastie">
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
                                Questions fréquentes sur la blépharoplastie
                            </h2>
                        </div>
                        <FAQAccordion data={faqSchema} title="Questions fréquentes sur la blépharoplastie" />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages blépharoplastie"
                    testimonials={[
                        {
                            name: 'Isabelle M.',
                            city: 'Lyon',
                            quote: "J'avais les paupières tellement tombantes que j'avais l'air épuisée en permanence. Après ma blépharoplastie chez Venus Estetika, mon regard est complètement transformé — 10 ans de jeunesse retrouvés en une semaine. L'équipe a été aux petits soins tout au long du séjour.",
                            intervention: 'Blépharoplastie 4 paupières',
                            savings: '4 500€',
                            rating: 5,
                        },
                        {
                            name: 'Christine D.',
                            city: 'Bruxelles',
                            quote: "Les poches sous mes yeux me complexaient depuis des années. Je n'osais plus sortir sans fond de teint. La technique transconjonctivale du Dr Balti n'a laissé aucune cicatrice et le résultat est bluffant. Je regrette seulement de ne pas l'avoir fait plus tôt.",
                            intervention: 'Blépharoplastie inférieure',
                            savings: '2 800€',
                            rating: 5,
                        },
                        {
                            name: 'Marie-France L.',
                            city: 'Paris',
                            quote: "Service irréprochable du premier contact jusqu'au suivi post-opératoire. Mon chirurgien a pris le temps de m'expliquer chaque étape. J'ai économisé plus de 4 000€ par rapport aux devis parisiens pour une qualité largement supérieure.",
                            intervention: 'Blépharoplastie supérieure',
                            savings: '4 200€',
                            rating: 5,
                        },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos chirurgiens pour la blépharoplastie"
                    surgeons={[
                        {
                            name: 'Dr Walid Balti',
                            specialty: 'Chirurgie Plastique & Esthétique',
                            image: '/images/doctors/dr-walid-balti.jpg',
                            experience: '15+ ans d\'expérience',
                        },
                        {
                            name: 'Pr Mehdi Fendri',
                            specialty: 'Oculoplastie',
                            image: '/images/doctors/pr-mehdi-fendri.jpg',
                            experience: 'Spécialiste palpébral',
                        },
                    ]}
                    devisSlug="blepharoplastie"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Retrouvez un regard rajeuni dès votre retour
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Des patients de toute l&apos;Europe nous confient leur blépharoplastie chaque mois.
                            Obtenez votre devis gratuit et réservez votre date opératoire.
                        </p>
                        <Button size="lg" asChild className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                            <Link href="/devis?intervention=blepharoplastie">
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
