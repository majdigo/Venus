import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Shield, Star, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import Link from 'next/link';

export const metadata = {
    title: "Greffe de Barbe Tunisie | Dès 1 600€ Tout Compris — Venus Estetika",
    description: "Greffe de barbe en Tunisie (FUE/DHI). Comblez les zones clairsemées, créez une barbe complète. Résultat définitif et naturel. Dès 1 600€.",
};

export default function GreffeBarbe() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Greffe Capillaire", url: "https://venus-estetika.com/interventions/capillaire" },
        { name: "Greffe de Barbe", url: "https://venus-estetika.com/interventions/capillaire/greffe-barbe" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('greffe-barbe'),
                faq: getFaqData('greffe-barbe'),
                howTo: getHowToData('greffe-barbe'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0f172a] to-brand-navy/90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                Greffe Capillaire Spécialisée
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Greffe de barbe en Tunisie : une barbe dense et naturelle
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Comblez les zones clairsemées ou créez une barbe complète et dense grâce à la greffe FUE ou DHI. Résultat définitif, naturel, et rasable. Dès <b className="text-brand-gold text-2xl">1 600€</b> <span className="line-through text-sm opacity-60 ml-2">4 000-10 000€ en France</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=greffe-barbe">
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La greffe de barbe : une expertise de précision</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La greffe de barbe est une technique spécialisée qui prélève des follicules pileux dans la zone occipitale (nuque) et les implante sur le visage — joues, menton, moustache, favoris — avec une précision extrême pour respecter la direction naturelle des poils.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Le résultat est définitif et entièrement naturel : la barbe greffée pousse, se rase et se taille exactement comme une barbe naturelle. Nos spécialistes dessinent le contour idéal selon votre morphologie pour un rendu harmonieux.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">FUE Barbe</h4>
                                        <p className="text-sm text-gray-500">Prélèvement zone occipitale + implantation sur le visage. Technique éprouvée pour de grands volumes de greffons.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">DHI Barbe</h4>
                                        <p className="text-sm text-gray-500">Stylo Choi pour un contrôle parfait de la direction et de la densité des poils. Idéal pour les zones frontales et le contour.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans chaque forfait</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Spécialiste capillaire certifié",
                                        "Greffons illimités (selon la zone traitée)",
                                        "1 séance PRP (Plasma Riche en Plaquettes)",
                                        "Anesthésie Dermojet sans aiguille",
                                        "Kit post-opératoire complet",
                                        "Hôtel 5 étoiles 3 nuits",
                                        "Transferts VIP aéroport-clinique"
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

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarifs Greffe de Barbe Tunisie</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Des forfaits adaptés à chaque besoin, du renforcement partiel à la barbe complète. Prix tout compris, sans surprise.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Nos Forfaits Greffe de Barbe</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="border border-gray-100 rounded-xl p-5 hover:border-brand-gold transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Barbe Partielle</span>
                                                <span className="text-2xl font-bold text-brand-gold">1 600 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Joues ou menton seulement. <span className="line-through">4 000-6 000€ en France</span></p>
                                        </div>
                                        <div className="border border-brand-gold rounded-xl p-5 bg-brand-gold/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Barbe Complète</span>
                                                <span className="text-2xl font-bold text-brand-gold">2 400 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Joues + menton + moustache + favoris. <span className="line-through">8 000-10 000€ en France</span></p>
                                            <div className="mt-2 flex items-center gap-1">
                                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                                <span className="text-xs font-semibold text-brand-gold">Le plus demandé</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                            PRP et kit post-op inclus dans tous les forfaits
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                            Hôtel 5 étoiles et transferts inclus
                                        </li>
                                    </ul>
                                </div>

                                {/* Results & Timeline */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Évolution Post-Greffe</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Les croûtes tombent entre le 7e et le 10e jour. Une chute temporaire des poils greffés survient au premier mois, c&apos;est tout à fait normal. La repousse démarre dès le 3e mois, avec un résultat final visible entre 8 et 12 mois. La barbe greffée se rase, se taille et repousse exactement comme une barbe naturelle — définitivement.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=greffe-barbe">Obtenir une évaluation gratuite</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur la Greffe de Barbe</h2>
                        </div>
                        <FAQAccordion data={getFaqData('greffe-barbe')} />
                    </div>
                </section>
            </div>
        </>
    );
}
