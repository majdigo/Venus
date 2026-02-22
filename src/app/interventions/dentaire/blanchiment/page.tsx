import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Shield, Sparkles, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import Link from 'next/link';

export const metadata = {
    title: "Blanchiment Dentaire Tunisie | Dès 250€ — Venus Estetika",
    description: "Blanchiment dentaire professionnel en Tunisie. Technologie LED. Résultat immédiat, gain de 4 à 8 teintes. Dès 250€.",
};

export default function BlanchimentDentairePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Dentisterie Esthétique", url: "https://venus-estetika.com/interventions/dentaire" },
        { name: "Blanchiment Dentaire", url: "https://venus-estetika.com/interventions/dentaire/blanchiment" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('blanchiment'),
                faq: getFaqData('blanchiment'),
                howTo: getHowToData('blanchiment'),
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
                                Esthétique Dentaire
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Blanchiment dentaire en Tunisie : un sourire éclatant en 1 séance
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Gagnez 4 à 8 teintes en une seule séance de blanchiment LED professionnel. Un résultat immédiat et spectaculaire dès <b className="text-brand-gold text-2xl">250€</b> <span className="line-through text-sm opacity-60 ml-2">500-800€ en France</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=blanchiment">
                                        Réserver ma séance <ArrowRight className="ml-2 w-5 h-5" />
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La technologie LED pour un éclat maximal</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Le blanchiment dentaire professionnel au fauteuil utilise un gel à base de peroxyde d&apos;hydrogène activé par une lampe LED haute puissance. Ce processus oxyde les pigments colorés incrustés dans l&apos;émail sans altérer la structure de la dent, pour un résultat immédiat et homogène.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Contrairement aux kits de blanchiment vendus en pharmacie, notre protocole professionnel garantit un gain de 4 à 8 teintes en une seule séance de 90 minutes, avec un résultat uniforme sur toutes les dents.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Blanchiment au fauteuil</h4>
                                        <p className="text-sm text-gray-500">Gel peroxyde d&apos;hydrogène + lampe LED haute puissance. Résultat immédiat, gain garanti de 4 à 8 teintes en 90 minutes.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Kit de maintien</h4>
                                        <p className="text-sm text-gray-500">Gouttières sur-mesure + gel de maintenance pour entretien à domicile et prolongation du résultat sur 1 à 3 ans.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans votre séance</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Dentiste spécialisé en esthétique dentaire",
                                        "Détartrage préalable offert",
                                        "Séance complète de blanchiment LED (90 min)",
                                        "Mesure de la teinte avant/après",
                                        "Kit de maintien à domicile (gouttières + gel)"
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
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Forfait Blanchiment Dentaire</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une séance, un résultat visible immédiatement. Aucune convalescence requise, reprise des activités le jour même.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Blanchiment LED Professionnel</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-gold">250 €</span>
                                        <span className="text-xl text-gray-400">tout compris</span>
                                        <span className="text-sm text-gray-400 line-through mb-1 ml-2">500-800€</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Résultat visible dès la fin de la séance
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Gain de 4 à 8 teintes garanti
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Aucune convalescence requise
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Sensibilité transitoire 24-48h (normale)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Résultat dure 1 à 3 ans
                                        </li>
                                    </ul>
                                </div>

                                {/* Convalescence Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Conseils Post-Séance</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Aucune convalescence n&apos;est nécessaire. Vous pouvez reprendre vos activités immédiatement après la séance. Il est conseillé d&apos;éviter les aliments et boissons colorants (café, thé, vin rouge) pendant 48 heures pour optimiser et stabiliser le résultat. Une légère sensibilité peut survenir dans les 24-48h suivant le traitement, c&apos;est tout à fait normal et transitoire.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=blanchiment">Réserver ma séance de blanchiment</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur le Blanchiment Dentaire</h2>
                        </div>
                        <FAQAccordion data={getFaqData('blanchiment')} />
                    </div>
                </section>
            </div>
        </>
    );
}
