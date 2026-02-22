import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Shield, Award, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { FacettesInteractiveAnatomy } from "@/components/interventions/FacettesInteractiveAnatomy";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Facettes Dentaires Tunisie | Hollywood Smile E-max — Dès 250€",
    description: "Retrouvez un sourire éclatant avec les facettes dentaires en Tunisie (Emax & Lumineers). Design de sourire 3D personnalisé. Résultat naturel en 3 étapes.",
};

export default function FacettesDentairesPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie Dentaire", url: "https://venus-estetika.com/interventions/dentaire" },
        { name: "Facettes Dentaires", url: "https://venus-estetika.com/interventions/dentaire/facettes" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('facettes'),
                faq: getFaqData('facettes'),
                howTo: getHowToData('facettes'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-brand-navy/90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4 text-brand-gold" />
                                Esthétique Dentaire Premium
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Facettes Dentaires en Tunisie : Votre Hollywood Smile
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Retrouvez un sourire éclatant et parfaitement aligné avec des facettes en céramique E-max ou Lumineers ultra-fines. Réalisé en 5 jours seulement. <b className="text-brand-gold text-2xl">Dès 250€/facette</b> <span className="line-through text-sm opacity-60 ml-2">900€ en Europe</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=facettes">
                                        Réserver votre Sourire 3D <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION & PROFIL IDEAL */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">Sublimez vos dents instantanément</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Les facettes dentaires sont de fines coquilles en céramique ou en porcelaine, confectionnées sur-mesure, venant recouvrir la face visible de vos dents naturelles.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Cette intervention indolore permet de masquer totalement les défauts esthétiques, tout en préservant la vitalité et la structure de la racine de votre dent, contrairement aux couronnes dentaires.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Céramique E-max</h4>
                                        <p className="text-sm text-gray-500">Matériau de pointe (Disilicate de Lithium). Translucidité naturelle et résistance mécanique 4x supérieure à l'émail.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Longévité Exceptionnelle</h4>
                                        <p className="text-sm text-gray-500">Une durée de vie estimée entre 15 et 20 ans, avec une couleur qui ne jaunit jamais dans le temps.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Quels problèmes corrigent les facettes ?</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Dents tachées, jaunies ou grises (insensibles au blanchiment)",
                                        "Dents ébréchées, usées, cassées ou abîmées",
                                        "Léger chevauchement (traitement orthodontique rapide)",
                                        "Espaces interdentaires inesthétiques (diastèmes)",
                                        "Forme asymétrique ou dents jugées trop courtes"
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

                {/* ANIMATION A++ INTERACTIVE */}
                <FacettesInteractiveAnatomy />

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Le Forfait Hollywood Smile</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Transformez l'intégralité de votre sourire avec nos packs premium tout en profitant d'un séjour de vacances d'exception.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Facette Premium (E-max / Lumineers)</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-gold">250 €</span>
                                        <span className="text-xl text-gray-400">/ facette</span>
                                        <span className="text-sm text-gray-400 line-through mb-1 ml-2">900 €</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Surfaçage ultra-léger et conception 3D
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Facettes provisoires pendant la fabrication
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 flex-wrap">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            <span className="font-semibold text-brand-navy">Pack Hollywood Smile (Dès 20 facettes) :</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 pl-8">
                                            <Star className="w-4 h-4 text-brand-gold" />
                                            Séjour Hôtel 5★ de 5 Nuits inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 pl-8">
                                            <Star className="w-4 h-4 text-brand-gold" />
                                            Transferts VIP Aéroport & Clinique
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Le Déroulement (5 Jours)</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Votre séjour dure généralement du Lundi au Vendredi. Le premier jour, nous réalisons l'empreinte optique 3D et le Digital Smile Design. Notre laboratoire prothétique (certifié ISO) façonne ensuite vos facettes E-max ultra fines en moins de 72h. Le collage définitif est réalisé lors de votre seconde visite en clinique.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=facettes">Générer mon devis personnalisé</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur les Facettes</h2>
                        </div>
                        <FAQAccordion data={getFaqData('facettes')} />
                    </div>
                </section>
            </div>
        </>
    );
}
