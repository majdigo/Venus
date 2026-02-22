import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Sparkles, RefreshCw, Sun } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import Link from 'next/link';

export const metadata = {
    title: "Peeling Tunisie | Peeling Moyen TCA dès 250€ — Venus Estetika",
    description: "Peeling chimique en Tunisie : renouvellement cutané, éclat du teint, traitement taches et cicatrices d'acné. Dès 250€.",
};

export default function PeelingPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Médecine Esthétique", url: "https://venus-estetika.com/interventions/medecine-esthetique" },
        { name: "Peeling", url: "https://venus-estetika.com/interventions/medecine-esthetique/peeling" },
    ];

    const whatItTreats = [
        "Taches pigmentaires",
        "Cicatrices d'acné",
        "Teint terne et irrégulier",
        "Ridules superficielles",
        "Pores dilatés",
    ];

    const pricingRows = [
        { label: "Peeling moyen TCA", price: "250 €", france: "400–700 €" },
        { label: "Peeling superficiel (acide glycolique)", price: "150 €", france: "200–400 €" },
        { label: "Cure 3 séances (superficiel)", price: "400 €", france: "600–1 200 €" },
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('peeling'),
                faq: getFaqData('peeling'),
                howTo: getHowToData('peeling'),
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
                            <li className="text-brand-navy font-medium" aria-current="page">Peeling</li>
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
                                Peeling en Tunisie : renouvelez votre peau en profondeur
                            </h1>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Peeling chimique TCA ou glycolique réalisé par un médecin esthétique. Taches, cicatrices d'acné, teint terne — une solution dermatologique éprouvée.{" "}
                                <b className="text-brand-gold text-xl">Dès 250€</b>{" "}
                                <span className="line-through text-sm opacity-60 ml-2">400–700€ en France</span>.
                            </p>
                            <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                <Link href="/devis?intervention=peeling">
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
                                    Un renouvellement cutané contrôlé et précis
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                    Le peeling chimique consiste à appliquer une solution acide sur la peau pour en provoquer un renouvellement contrôlé. La couche superficielle ou moyenne de la peau est éliminée, révélant une peau neuve, plus lisse, plus lumineuse et aux teintes uniformisées.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Le type de peeling (superficiel ou moyen) est déterminé par le médecin en fonction de votre type de peau, de la profondeur des imperfections à traiter et de votre tolérance. Le peeling TCA offre des résultats marqués sur les taches et cicatrices d'acné.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Zap className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Peeling Moyen (TCA)</h4>
                                        <p className="text-sm text-gray-500">Acide trichloroacétique pour traitement en profondeur. Résultat marqué sur taches et cicatrices.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Sun className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Peeling Superficiel</h4>
                                        <p className="text-sm text-gray-500">Acide glycolique pour éclat et entretien. Aucune éviction sociale, idéal en cure répétée.</p>
                                    </div>
                                </div>
                            </div>

                            {/* What it treats */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                                    Quels problèmes traite le peeling ?
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
                                            <span className="font-semibold text-brand-navy">Convalescence :</span> Peeling moyen TCA — desquamation 5-7 jours, éviction sociale 1 semaine. Peeling superficiel — léger tiraillement 24h, reprise immédiate.
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
                                Tarifs Peeling Chimique en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Des prix jusqu'à 3x inférieurs à la France pour un acte médical réalisé par un dermatologue ou médecin esthétique qualifié.
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
                                        Intégré à votre séjour médical
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                        Le peeling se combine idéalement avec d'autres traitements de médecine esthétique ou peut être réalisé avant ou après une intervention chirurgicale lors de votre séjour en Tunisie. Un protocole personnalisé vous sera proposé lors du bilan médical.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=peeling">
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
                                Questions Fréquentes sur le Peeling
                            </h2>
                        </div>
                        <FAQAccordion data={getFaqData('peeling')} />
                    </div>
                </section>

            </div>
        </>
    );
}
