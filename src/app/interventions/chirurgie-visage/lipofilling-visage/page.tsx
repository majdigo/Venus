import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Droplets, Clock, Sparkles } from 'lucide-react';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lipofilling Visage Tunisie | Injection de Graisse dès 1 800€ — Venus Estetika',
    description: 'Lipofilling du visage en Tunisie : comblement naturel par injection de votre propre graisse. Rajeunissement sans corps étranger. Dès 1 800€ tout compris.',
};

export default function LipofillingVisagePage() {
    const breadcrumbs = [
        { name: 'Accueil', url: 'https://venus-estetika.com' },
        { name: 'Chirurgie du Visage', url: 'https://venus-estetika.com/interventions/chirurgie-visage' },
        { name: 'Lipofilling Visage', url: 'https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage' },
    ];

    const procedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage#procedure',
        'name': 'Lipofilling du Visage en Tunisie',
        'alternateName': ['Lipostructure du visage', 'Greffe de graisse visage', 'Fat transfer facial', 'Coleman lipofilling'],
        'description': 'Le lipofilling du visage (ou lipostructure) consiste à prélever de la graisse autologue du patient (abdomen, cuisses), à la purifier, puis à la réinjecter dans les zones creuses du visage (pommettes, sillons, cernes, tempes) pour un rajeunissement 100% naturel sans corps étranger. Réalisé dans une clinique agréée en Tunisie à partir de 1 800€ tout compris.',
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Visage (pommettes, sillons naso-géniens, cernes, tempes)',
        'url': 'https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage',
        'offers': {
            '@type': 'Offer',
            'price': '1800',
            'priceCurrency': 'EUR',
            'priceValidUntil': '2026-12-31',
            'availability': 'https://schema.org/InStock',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-visage/lipofilling-visage#faq',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Quel est le prix d\'un lipofilling du visage en Tunisie tout compris ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Le prix d\'un lipofilling du visage en Tunisie chez Venus Estetika varie de 1 800€ (pommettes + sillons) à 2 500€ (visage complet). Le forfait tout compris inclut l\'intervention, l\'anesthésie, la liposuccion de la zone donneuse, le séjour en clinique ambulatoire, 4 nuits en hôtel 5 étoiles, les transferts VIP et un suivi de 12 mois. En France, la même intervention coûte entre 3 500€ et 7 000€.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée des résultats d\'un lipofilling du visage ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Après résorption partielle (environ 30% de la graisse injectée dans les 3-4 premiers mois), la graisse restante est définitivement intégrée aux tissus et permanente. Les résultats durent de nombreuses années, bien plus longtemps qu\'avec des fillers synthétiques. Un complément peut être réalisé à 3-4 mois si nécessaire.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle différence entre le lipofilling de Coleman et le Nanofat ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'La lipostructure de Coleman utilise de la graisse macro-filtrée pour combler les volumes (pommettes, mâchoire, tempes). Elle est idéale pour restaurer les volumes perdus. Le Nanofat utilise une graisse ultra-filtrée (micro-fragments) injectée superficiellement pour améliorer la qualité de la peau, effacer les cernes fins et traiter les ridules. Les deux techniques sont souvent combinées pour un résultat optimal.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Le lipofilling du visage est-il plus naturel que les fillers d\'acide hyaluronique ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Oui. Le lipofilling utilise votre propre tissu adipeux (graisse autologue), éliminant tout risque de rejet et offrant un résultat parfaitement naturel au toucher et à l\'apparence. Contrairement aux fillers d\'AH qui nécessitent des traitements d\'entretien réguliers, le lipofilling offre des résultats durables. Il améliore également la qualité globale de la peau grâce aux cellules souches présentes dans la graisse.',
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la convalescence après un lipofilling du visage ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'L\'oedème et les légères ecchymoses se résorbent en 10 à 15 jours. Le visage peut paraître légèrement trop rempli les premières semaines — c\'est normal et temporaire. À 1 mois, 70% de l\'oedème a disparu. À 3-4 mois, le résultat définitif est visible, une fois la résorption partielle de la graisse stabilisée.',
                },
            },
        ],
    };

    const includedItems = [
        'Chirurgien spécialisé en lipostructure',
        'Liposuccion de la zone donneuse incluse',
        'Séjour en clinique agréée (ambulatoire)',
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
                <section className="bg-brand-navy text-white py-24 px-4 mt-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
                    <div className="container mx-auto max-w-5xl text-center relative z-20">
                        <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-semibold tracking-wider text-sm mb-6 border border-brand-gold/50">
                            Rajeunissement Naturel
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                            Lipofilling visage en Tunisie : rajeunissez naturellement avec votre propre graisse
                        </h1>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Un rajeunissement 100% naturel, sans corps étranger. Restaurez les volumes perdus
                            avec votre propre graisse. Forfait tout compris à partir de{' '}
                            <b className="text-brand-gold text-3xl mx-2">1 800€</b>{' '}
                            <span className="line-through text-sm opacity-60">3 500-7 000€ en France</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-14 px-8 text-lg w-full sm:w-auto">
                                <Link href="/devis?intervention=lipofilling-visage">
                                    Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                        <p className="mt-8 text-sm font-medium opacity-80">
                            +2 500 patients accompagnés | Note 4.8/5 sur Google | Chirurgiens membres ISAPS
                        </p>
                    </div>
                </section>

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Left: Description + Technique Cards */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                    Qu&apos;est-ce que le lipofilling du visage ?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Le lipofilling (ou lipostructure) est une technique de rajeunissement facial
                                    qui consiste à prélever de la graisse sur votre corps (abdomen, cuisses),
                                    à la purifier en laboratoire, puis à la réinjecter précisément dans les zones
                                    creuses de votre visage. Le résultat est 100% naturel car aucun corps étranger
                                    n&apos;est introduit dans votre organisme.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Chez Venus Estetika, nous pratiquons deux techniques complémentaires
                                    selon la zone à traiter et l&apos;objectif recherché.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Droplets className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Lipostructure de Coleman</h4>
                                        <p className="text-sm text-gray-500">
                                            Prélèvement, purification et réinjection de graisse autologue pour
                                            restaurer les volumes (pommettes, sillons, tempes).
                                        </p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Sparkles className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Nanofat</h4>
                                        <p className="text-sm text-gray-500">
                                            Micro-injection de graisse ultra-filtrée pour traitement fin
                                            de la peau, cernes et ridules superficielles.
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
                                            <CheckCircle2 className="text-brand-gold w-6 h-6 shrink-0" />
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
                                Prix du lipofilling visage en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une tarification transparente, sans frais cachés. Économisez jusqu&apos;à 70%
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
                                            { zone: 'Lipofilling visage (pommettes + sillons)', fr: '3 500-5 000 €', tn: '1 800 €' },
                                            { zone: 'Lipofilling visage complet', fr: '5 000-7 000 €', tn: '2 500 €' },
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
                                                    <p className="font-bold text-2xl text-brand-gold">{price.tn}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Convalescence Info */}
                                <div className="p-8 bg-slate-50">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Convalescence &amp; Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Oedème 10 à 15 jours. Résultat définitif à 3-4 mois après résorption
                                        partielle d&apos;environ 30%. Le résultat est 100% naturel — pas de corps
                                        étranger, pas de rejet, enrichi en cellules souches.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=lipofilling-visage">
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
                                Questions fréquentes sur le lipofilling du visage
                            </h2>
                        </div>
                        <FAQAccordion data={faqSchema} title="Questions fréquentes sur le lipofilling du visage" />
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Le rajeunissement le plus naturel qui soit
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Votre propre graisse comme médicament. Résultats durables, sans corps étranger,
                            enrichis en cellules souches. Obtenez votre devis gratuit maintenant.
                        </p>
                        <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                            <Link href="/devis?intervention=lipofilling-visage">
                                Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
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
