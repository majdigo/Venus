import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Clock, RefreshCw } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import Link from 'next/link';

export const metadata = {
    title: "Botox Tunisie | Injections Anti-Rides dès 150€ — Venus Estetika",
    description: "Injections de Botox en Tunisie : traitement anti-rides du front, rides du lion, pattes d'oie. Résultat naturel. Dès 150€/zone.",
};

export default function BotoxPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Médecine Esthétique", url: "https://venus-estetika.com/interventions/medecine-esthetique" },
        { name: "Botox", url: "https://venus-estetika.com/interventions/medecine-esthetique/botox" },
    ];

    const whatItTreats = [
        "Rides du front",
        "Rides du lion (entre les sourcils)",
        "Pattes d'oie",
        "Transpiration excessive (hyperhidrose)",
        "Bruxisme (mâchoire)",
    ];

    const pricingRows = [
        { label: "1 zone (front, lion ou pattes d'oie)", price: "150 €", france: "250–350 €" },
        { label: "3 zones — Full Face", price: "350 €", france: "600–800 €" },
        { label: "Mâchoire (bruxisme)", price: "200 €", france: "300–500 €" },
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('botox'),
                faq: getFaqData('botox'),
                howTo: getHowToData('botox'),
                breadcrumb: getBreadcrumbData(breadcrumbs),
            }} />

            <div className="min-h-screen bg-white">

                {/* BREADCRUMB */}
                <nav aria-label="Fil d'Ariane" className="bg-slate-50 border-b border-slate-100 mt-20">
                    <div className="container mx-auto px-4 py-3">
                        <ol className="flex items-center gap-2 text-sm text-slate-500">
                            <li><Link href="/" className="hover:text-brand-navy transition-colors">Accueil</Link></li>
                            <li aria-hidden="true" className="text-slate-300">/</li>
                            <li><Link href="/interventions/medecine-esthetique" className="hover:text-brand-navy transition-colors">Médecine Esthétique</Link></li>
                            <li aria-hidden="true" className="text-slate-300">/</li>
                            <li className="text-brand-navy font-medium" aria-current="page">Botox</li>
                        </ol>
                    </div>
                </nav>

                {/* HERO */}
                <section className="relative h-[60vh] min-h-[460px] flex items-center justify-center overflow-hidden bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-brand-navy/90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4 text-brand-gold" />
                                Médecine Esthétique
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5 leading-tight">
                                Botox en Tunisie : lissez vos rides sans chirurgie
                            </h1>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Injections de toxine botulique par un médecin expert. Résultat naturel, aucune éviction sociale.{" "}
                                <b className="text-brand-gold text-xl">Dès 150€/zone</b>{" "}
                                <span className="line-through text-sm opacity-60 ml-2">250–800€ en France</span>.
                            </p>
                            <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                <Link href="/devis?intervention=botox">
                                    Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="py-20 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Description */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                    Un lissage ciblé, un résultat naturel
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                    Le Botox (toxine botulique de type A) agit en bloquant temporairement la contraction des muscles responsables des rides d'expression. Le résultat est un lissage ciblé qui préserve entièrement vos expressions naturelles.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    La séance dure 15 à 30 minutes. Vous pouvez reprendre vos activités immédiatement. Les premiers effets apparaissent à J3-J5 et durent 4 à 6 mois.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Clock className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Botox Classique</h4>
                                        <p className="text-sm text-gray-500">Toxine botulique type A, relâchement ciblé des muscles responsables des rides.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Baby Botox</h4>
                                        <p className="text-sm text-gray-500">Micro-doses pour un résultat ultra-naturel, toutes les expressions sont parfaitement préservées.</p>
                                    </div>
                                </div>
                            </div>

                            {/* What it treats */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                                    Quelles zones traite le Botox ?
                                </h3>
                                <div className="space-y-3 mb-8">
                                    {whatItTreats.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                            <CheckCircle2 className="text-brand-gold w-5 h-5 shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-brand-navy/5 rounded-xl p-4 border border-brand-navy/10">
                                    <div className="flex items-start gap-3">
                                        <RefreshCw className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-brand-navy">Convalescence :</span> Aucune éviction sociale. Résultat visible J3-J5. Effet dure 4-6 mois. Retouche recommandée 2-3x/an.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GUIDED TOUR */}
                <GuidedTourTimeline />

                {/* PRICING */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
                                Tarifs Botox en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Des prix transparents, jusqu'à 3x moins chers qu'en France, pour un résultat de même qualité médicale.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Grille tarifaire</h3>
                                    <div className="space-y-4">
                                        {pricingRows.map((row, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                <span className="text-gray-700 font-medium text-sm pr-4">{row.label}</span>
                                                <div className="text-right shrink-0">
                                                    <span className="text-brand-gold font-bold text-lg block">{row.price}</span>
                                                    <span className="text-xs text-gray-400 line-through">{row.france}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA panel */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Séjour esthétique tout compris
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                        Combinez votre Botox avec d'autres soins (acide hyaluronique, mésolift, peeling) lors d'un séjour médical en Tunisie. Transferts VIP et hôtel partenaire inclus dans nos forfaits combinés.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=botox">
                                            Demander mon devis personnalisé
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
                                Questions Fréquentes sur le Botox
                            </h2>
                        </div>
                        <FAQAccordion data={getFaqData('botox')} />
                    </div>
                </section>

            </div>
        </>
    );
}
