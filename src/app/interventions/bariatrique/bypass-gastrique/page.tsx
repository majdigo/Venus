import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { BmiCalculator } from "@/components/calculators/BmiCalculator";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { BypassGastriqueInteractiveAnatomy } from "@/components/interventions/BypassGastriqueInteractiveAnatomy";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Bypass Gastrique Tunisie | Traitement Obésité & Diabète — 4200€ Tout Compris",
    description: "Le Bypass Gastrique (Roux-en-Y) en Tunisie est la solution radicale contre l'obésité morbide et le diabète. Perte de poids garantie. Séjour VIP inclus.",
};

export default function BypassGastriquePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie Bariatrique", url: "https://venus-estetika.com/interventions/bariatrique" },
        { name: "Bypass Gastrique", url: "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('bypass-gastrique'),
                faq: getFaqData('bypass-gastrique'),
                howTo: getHowToData('bypass-gastrique'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION - Premium Look */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        {/* 
                            NOTE: Image is currently a placeholder gradient until 
                            we resolve the 503 generation issue or Majdi provides it. 
                        */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/80" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                Centre d'Excellence Bariatrique
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Bypass Gastrique en Tunisie : La Solution Radicale
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Traitement de l'obésité sévère et du diabète de type 2. Court-circuit gastrique avec suivi nutritionnel sur 12 mois. Séjour 5★ inclus à partir de <b className="text-brand-gold text-2xl">4 200€</b> <span className="line-through text-sm opacity-60 ml-2">9 500€ en Europe</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=bypass-gastrique">
                                        Démarrer mon dossier bariatrique <ArrowRight className="ml-2 w-5 h-5" />
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">L'intervention de référence mondiale</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Le Bypass Gastrique (Roux-en-Y) est l'intervention de référence contre l'obésité morbide. Dite "mixte" ou de "malabsorption", elle est plus complexe et radicale que la Sleeve.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Contrairement à la Sleeve, elle ne fait pas que réduire la taille de l'estomac. Elle modifie physiquement le circuit digestif pour réduire drastiquement l'absorption des graisses et des sucres par l'intestin. Le résultat sur la perte de poids et les maladies métaboliques est fulgurant.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Rémission du Diabète</h4>
                                        <p className="text-sm text-gray-500">Action miracle constatée chez 80% des patients diabétiques de type 2.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Action Anti-Reflux</h4>
                                        <p className="text-sm text-gray-500">L'opération guérit instantanément le reflux gastro-œsophagien (RGO).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Le Profil Idéal pour le Bypass</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "IMC supérieur à 40 (Obésité morbide)",
                                        "IMC > 35 avec pathologies (Diabète, Hypertension)",
                                        "Patients souffrant de reflux gastrique intense",
                                        "Grands mangeurs de sucreries ('Sweet Eaters')",
                                        "Échec d'une précédente intervention (Anneau/Sleeve)"
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

                {/* ANIMATION A++ INTERACTIVE TECHNIQUE */}
                <BypassGastriqueInteractiveAnatomy />

                {/* BMI CALCULATOR SECTION */}
                <section className="py-24 px-4 bg-slate-50 border-t border-gray-200 border-b">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Êtes-vous éligible au Bypass ?</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Calculez votre Indice de Masse Corporelle (IMC) en quelques secondes pour savoir si cette intervention vous est recommandée.
                            </p>
                        </div>
                        <BmiCalculator variant="full" />
                    </div>
                </section>

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Le Forfait Bariatrique Tout Compris</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Vous bénéficiez d'une prise en charge globale, allant de la chirurgie de pointe jusqu'à la convalescence en hôtel 5 étoiles, sans aucun frais caché.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Bypass Gastrique (Roux-en-Y)</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-gold">4 200 €</span>
                                        <span className="text-xl text-gray-400 line-through mb-1">9 500 €</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Intervention par cœlioscopie (Chirurgie)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Anesthésie générale & Médicaments
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Séjour en clinique accréditée (3 nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Hôtel de luxe 5 étoiles (Convalescence de 4 nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                            Transferts VIP aéroport & accompagnateur 24/7
                                        </li>
                                    </ul>
                                </div>

                                {/* Convalescence Preview */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Post-Opératoire & Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        L'intervention nécessite au moins 3 à 4 jours d'hospitalisation. L'alimentation sera strictement liquide pendant les deux premières semaines, puis mixée. Des suppléments vitaminiques à vie seront prescrits. La perte de poids est fulgurante sur les 12 premiers mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=bypass-gastrique">Démarrer une télé-consultation gratuite</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                        </div>
                        <FAQAccordion data={getFaqData('bypass-gastrique')} />
                    </div>
                </section>
            </div>
        </>
    );
}
