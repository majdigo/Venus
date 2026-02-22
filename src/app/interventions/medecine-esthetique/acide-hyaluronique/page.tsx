import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Droplets, Sparkles, RefreshCw, Layers } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import Link from 'next/link';

export const metadata = {
    title: "Acide Hyaluronique Tunisie | Injections dès 200€ — Venus Estetika",
    description: "Injections d'acide hyaluronique en Tunisie : comblement des rides, augmentation des lèvres, volumétrie. Résultat immédiat. Dès 200€/seringue.",
};

export default function AcideHyaluroniquePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Médecine Esthétique", url: "https://venus-estetika.com/interventions/medecine-esthetique" },
        { name: "Acide Hyaluronique", url: "https://venus-estetika.com/interventions/medecine-esthetique/acide-hyaluronique" },
    ];

    const whatItTreats = [
        "Sillons nasogéniens",
        "Lèvres (volume et contour)",
        "Pommettes (volumétrie)",
        "Cernes creux",
        "Ovale du visage",
    ];

    const pricingRows = [
        { label: "1 seringue (zone standard)", price: "200–300 €", france: "350–500 €" },
        { label: "Lèvres (1 seringue)", price: "250 €", france: "350–450 €" },
        { label: "Cernes (1 seringue)", price: "300 €", france: "400–500 €" },
        { label: "Full Face (3-4 seringues)", price: "700–900 €", france: "1 200–2 000 €" },
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('acide-hyaluronique'),
                faq: getFaqData('acide-hyaluronique'),
                howTo: getHowToData('acide-hyaluronique'),
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
                            <li className="text-brand-navy font-medium" aria-current="page">Acide Hyaluronique</li>
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
                                Acide hyaluronique en Tunisie : comblez, repulpez, rajeunissez
                            </h1>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Injections de comblement et de volumétrie par un médecin esthétique expert. Résultat immédiat et naturel.{" "}
                                <b className="text-brand-gold text-xl">Dès 200€/seringue</b>{" "}
                                <span className="line-through text-sm opacity-60 ml-2">350–500€ en France</span>.
                            </p>
                            <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                <Link href="/devis?intervention=acide-hyaluronique">
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
                                    Le filler star du rajeunissement naturel
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                    L'acide hyaluronique est une molécule naturellement présente dans la peau, dont la production diminue avec l'âge. Les injections permettent de restaurer les volumes perdus, de combler les rides profondes et de repulper les lèvres — avec un résultat immédiatement visible.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Entièrement réversible grâce à l'hyaluronidase, l'acide hyaluronique est l'un des traitements esthétiques les plus sûrs et les plus plébiscités au monde. La durée du résultat varie de 8 à 18 mois selon la zone.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Droplets className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Comblement</h4>
                                        <p className="text-sm text-gray-500">Injection dans les rides et sillons pour les lisser et restaurer un contour harmonieux.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Layers className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Volumétrie</h4>
                                        <p className="text-sm text-gray-500">Restauration des volumes du visage perdus avec l'âge : pommettes, ovale, tempes.</p>
                                    </div>
                                </div>
                            </div>

                            {/* What it treats */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                                    Quelles zones traite l'acide hyaluronique ?
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
                                            <span className="font-semibold text-brand-navy">Convalescence :</span> Légères rougeurs 24-48h. Résultat immédiat. Durée 8-18 mois selon zone et produit.
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
                                Tarifs Acide Hyaluronique en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Tarifs transparents incluant la consultation, l'acte médical et le suivi post-séance.
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
                                        Full Face Rajeunissement
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                        Combinez acide hyaluronique et Botox pour un résultat rajeunissant complet. Nos médecins proposent un bilan esthétique personnalisé pour définir le traitement le plus adapté à votre visage et à vos objectifs.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=acide-hyaluronique">
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
                                Questions Fréquentes sur l'Acide Hyaluronique
                            </h2>
                        </div>
                        <FAQAccordion data={getFaqData('acide-hyaluronique')} />
                    </div>
                </section>

            </div>
        </>
    );
}
