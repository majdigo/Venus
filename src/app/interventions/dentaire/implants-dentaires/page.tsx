import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Shield, Star, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import Link from 'next/link';

export const metadata = {
    title: "Implants Dentaires Tunisie | Dès 600€/implant — Venus Estetika",
    description: "Implants dentaires en Tunisie (Straumann, Nobel). Remplacement dents manquantes. All-on-4 dès 4 500€. Chirurgien dentiste spécialisé. Devis gratuit.",
};

export default function ImplantsDentairesPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Dentisterie Esthétique", url: "https://venus-estetika.com/interventions/dentaire" },
        { name: "Implants Dentaires", url: "https://venus-estetika.com/interventions/dentaire/implants-dentaires" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('implants-dentaires'),
                faq: getFaqData('implants-dentaires'),
                howTo: getHowToData('implants-dentaires'),
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
                                Implantologie Premium
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Implants dentaires en Tunisie : retrouvez un sourire complet et fonctionnel
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Remplacez vos dents manquantes avec des implants Straumann ou Nobel, les références mondiales de l&apos;implantologie. Dès <b className="text-brand-gold text-2xl">600€/implant</b> <span className="line-through text-sm opacity-60 ml-2">1 800-2 500€ en France</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=implants-dentaires">
                                        Devis gratuit en 24h <ArrowRight className="ml-2 w-5 h-5" />
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La solution définitive pour les dents manquantes</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    L&apos;implant dentaire est une racine artificielle en titane (biomatériau compatible avec l&apos;organisme) qui est vissée dans l&apos;os de la mâchoire. Après ostéo-intégration, une couronne en zircone est fixée sur l&apos;implant, reconstituant une dent esthétique et fonctionnelle à 100%.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Nos chirurgiens utilisent exclusivement des implants de marques premium certifiées (Straumann, Nobel Biocare, Osstem), garantissant une durée de vie de 20 à 30 ans avec un entretien approprié.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Implant Unitaire</h4>
                                        <p className="text-sm text-gray-500">Racine artificielle en titane + couronne zircone, pour remplacer une dent manquante sans toucher aux dents adjacentes.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">All-on-4 / All-on-6</h4>
                                        <p className="text-sm text-gray-500">4 à 6 implants pour une arcade complète. Prothèse fixe en zircone, idéal pour l&apos;édentement total ou quasi-total.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans chaque forfait</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Chirurgien dentiste spécialisé en implantologie",
                                        "Implants marque premium (Straumann / Nobel / Osstem)",
                                        "Scanner 3D (CBCT) pré-opératoire",
                                        "Couronne en zircone sur-mesure",
                                        "Hôtel 5 étoiles 5 nuits (sur forfait)",
                                        "Transferts VIP aéroport-clinique",
                                        "Suivi et contrôle 12 mois"
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
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarifs Implants Dentaires Tunisie</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Des forfaits transparents pour chaque situation. Économisez jusqu&apos;à 75% par rapport aux tarifs européens sans compromis sur la qualité.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Nos Forfaits Implants</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="border border-gray-100 rounded-xl p-5 hover:border-brand-gold transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Implant unitaire complet</span>
                                                <span className="text-2xl font-bold text-brand-gold">600 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Implant + couronne zircone. <span className="line-through">1 800-2 500€ en France</span></p>
                                        </div>
                                        <div className="border border-brand-gold rounded-xl p-5 bg-brand-gold/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">All-on-4 (une arcade)</span>
                                                <span className="text-2xl font-bold text-brand-gold">4 500 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Arcade complète fixe. <span className="line-through">12 000-18 000€ en France</span></p>
                                            <div className="mt-2 flex items-center gap-1">
                                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                                <span className="text-xs font-semibold text-brand-gold">Le plus populaire</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                            Scanner 3D et plan de traitement personnalisé inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                            Hôtel 5 étoiles et transferts inclus
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Le Déroulement de Votre Séjour</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Votre plan de traitement est établi en amont grâce à un scanner 3D. La pose des implants est réalisée sous anesthésie locale lors de votre premier séjour. Après la période d&apos;ostéo-intégration (3-6 mois), les couronnes définitives en zircone sont posées lors d&apos;une seconde visite courte, ou livrées avec fixation par votre dentiste local.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=implants-dentaires">Obtenir mon devis gratuit</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur les Implants Dentaires</h2>
                        </div>
                        <FAQAccordion data={getFaqData('implants-dentaires')} />
                    </div>
                </section>
            </div>
        </>
    );
}
