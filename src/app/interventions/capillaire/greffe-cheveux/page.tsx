import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { GreffeCheveuxInteractiveSimulator } from "@/components/interventions/GreffeCheveuxInteractiveSimulator";
import Link from 'next/link';

export const metadata = {
    title: "Greffe de Cheveux Tunisie | FUE & DHI — 1900€ Tout Compris",
    description: "Retrouvez une chevelure dense avec la greffe de cheveux en Tunisie (Techniques FUE Saphir et DHI). Mega Session jusqu'à 5000 greffons. PRP et Séjour VIP inclus.",
};

export default function GreffeCheveuxPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Greffe Capillaire", url: "https://venus-estetika.com/interventions/capillaire" },
        { name: "Greffe de Cheveux (FUE/DHI)", url: "https://venus-estetika.com/interventions/capillaire/greffe-cheveux" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('greffe-cheveux'),
                faq: getFaqData('greffe-cheveux'),
                howTo: getHowToData('greffe-cheveux'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        {/* Placeholder gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0f172a] to-brand-navy/90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                Excellence Capillaire Mondiale
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Greffe de Cheveux en Tunisie : La Densité au Naturel
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Retrouvez une chevelure dense avec les techniques FUE Saphir et DHI. Jusqu'à 5000 greffons implantés (Mega Session). Séjour VIP et PRP inclus à <b className="text-brand-gold text-2xl">1 900€</b> <span className="line-through text-sm opacity-60 ml-2">4 500€ en Europe</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=greffe-cheveux">
                                        Obtenir mon Diagnostic Gratuit <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">L'Expertise Capillaire de Pointe</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La greffe de cheveux en Tunisie est reconnue mondialement pour son excellence. Nous combinons l'art du tracé de la ligne frontale à la précision micrométrique des dernières technologies (Lames en Saphir, Stylos implanteurs Choi).
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Contrairement aux anciennes méthodes (FUT) qui laissaient des cicatrices, nos techniques prélèvent avec une extrême délicatesse les follicules un par un, garantissant une repousse 100% naturelle et dense.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Technique DHI</h4>
                                        <p className="text-sm text-gray-500">Implantation directe avec le stylo Choi. Densité maximale, idéal pour redessiner la ligne frontale et les golfes.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">FUE Saphir</h4>
                                        <p className="text-sm text-gray-500">Canaux d'ouverture créés avec une lame en pierre de saphir. Cicatrisation 3 fois plus rapide et densité accrue.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans chaque Greffe</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Mega Session (Nombre de greffons illimité)",
                                        "1 Séance de Plasma Riche en Plaquettes (PRP)",
                                        "Anesthésie locale indolore (Dermojet sans aiguille)",
                                        "Tracé 3D de la ligne frontale sur-mesure",
                                        "Kit médical complet post-opératoire (Shampoing, lotions)"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                            <CheckCircle2 className="text-brand-gold w-6 h-6 shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ANIMATION A++ INTERACTIVE (Norwood Scale) */}
                <GreffeCheveuxInteractiveSimulator />

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarif et Forfaits Greffe de Cheveux</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Notre tarification est claire et sans surprise. Elle inclut l'intervention avec greffons illimités ainsi que l'intégralité du séjour médical et convalescence.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Greffe FUE Saphir / DHI</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-gold">1 900 €</span>
                                        <span className="text-xl text-gray-400 line-through mb-1">4 500 €</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Extraction et Implantation (Greffons Illimités)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Séance de PRP incluse
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Hôtel 5 étoiles VIP (3 Nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Consultations pré et post-opératoires
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Transferts aéroport, hôtel et clinique inclus
                                        </li>
                                    </ul>
                                </div>

                                {/* Results & Timeline */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Évolution des Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        La greffe capillaire est un processus patient. Les croûtes tombent au bout d'une dizaine de jours. Un &quot;shock loss&quot; (chute des cheveux greffés) survient le premier mois, c'est tout à fait normal. La repousse définitive débute dès le troisième mois, offrant un résultat final spectaculaire entre 12 et 15 mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=greffe-cheveux">Obtenir une évaluation gratuite</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur la Greffe</h2>
                        </div>
                        <FAQAccordion data={getFaqData('greffe-cheveux')} />
                    </div>
                </section>
            </div>
        </>
    );
}
