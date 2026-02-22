import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { AbdominoplastieInteractiveAnatomy } from "@/components/interventions/AbdominoplastieInteractiveAnatomy";
import Image from "next/image";
import Link from 'next/link';

export const metadata = {
    title: "Abdominoplastie Tunisie | Ventre Plat Tout Compris dès 1800€ — Venus Estetika",
    description: "Chirurgie du ventre en Tunisie (Plastie abdominale). Traitez le ventre tablier, le diastasis et l'excès de peau. Séjour de luxe 5★ inclus. Devis Gratuit.",
};

export default function AbdominoplastiePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie de la Silhouette", url: "https://venus-estetika.com/interventions/chirurgie-silhouette" },
        { name: "Abdominoplastie", url: "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('abdominoplastie'),
                faq: getFaqData('abdominoplastie'),
                howTo: getHowToData('abdominoplastie'),
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
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#1e293b] to-brand-navy/80" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-2xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                Excellence en Reconstruction Corporelle
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Retrouvez un Ventre Plat avec l'Abdominoplastie HD
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                                Correction du diastasis, retrait de l'excès de peau tablier et liposuccion des flancs. Une transformation définitive à partir de <b className="text-brand-gold text-2xl">1 800€</b> <span className="line-through text-sm opacity-60 ml-2">4 000€ en France</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=abdominoplastie">
                                        Configurer mon Abdominoplastie <ArrowRight className="ml-2 w-5 h-5" />
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La chirurgie reconstructrice du ventre</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    L'abdominoplastie (ou plastie abdominale) est bien plus qu'une simple liposuccion. C'est la seule intervention capable de retirer chirurgicalement l'excès de peau distendue (le "tablier abdominal") et de resserrer les muscles grands droits écartés (le diastasis).
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Elle est l'intervention de référence dans 3 cas précis : après de multiples grossesses (Mommy Makeover), à la suite d'une perte de poids massive (chirurgie bariatrique), ou lors du vieillissement naturel de la peau.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Cure de Diastasis</h4>
                                        <p className="text-sm text-gray-500">Resserrement du corset musculaire interne pour un ventre plat solide.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Cicatrices Basses</h4>
                                        <p className="text-sm text-gray-500">Placées stratégiquement pour être cachées dans vos sous-vêtements.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans notre forfait</h3>
                                <div className="space-y-4">
                                    {[
                                        "Clinique Haut de Gamme (2 à 3 nuits post-op)",
                                        "Liposuccion associée (flancs et ventre)",
                                        "Gaine de contention (Panty) sur-mesure",
                                        "Hôtel 5 étoiles de convalescence (5 nuits)",
                                        "Transferts VIP (Aéroport, Clinique, Hôtel)",
                                        "Soins infirmiers à l'hôtel et suivi 12 mois"
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
                <AbdominoplastieInteractiveAnatomy />

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Prix de l'Abdominoplastie en Tunisie</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une tarification tout compris, transparente. Nous déterminons la variante nécessaire avec vous lors du pré-diagnostic photo.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Les Variantes Tarifaires</h3>
                                    <div className="space-y-5">
                                        {[
                                            { zone: "Mini-Abdominoplastie", fr: "3 500 €", tn: "1 800 €" },
                                            { zone: "Abdominoplastie Complète (sans lipo)", fr: "4 500 €", tn: "2 200 €" },
                                            { zone: "Abdo Complète + Lipo (Flancs/Ventre)", fr: "5 500 €", tn: "2 500 €" },
                                            { zone: "Abdominoplastie Circulaire (Bodylift)", fr: "7 000 €", tn: "3 200 €" },
                                        ].map((price, idx) => (
                                            <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="font-semibold text-gray-800">{price.zone}</p>
                                                    <p className="text-sm text-gray-400 line-through mt-0.5">France: {price.fr}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-2xl text-brand-gold">{price.tn}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Convalescence Preview */}
                                <div className="p-8 bg-slate-50">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Post-Opératoire & Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        L'intervention nécessite 2 à 3 nuits d'hospitalisation en raison des drains. Le port de la gaine de contention est obligatoire nuit et jour pendant 4 à 6 semaines. Vous pourrez apprécier le ventre plat final après 3 mois, et la maturation de la cicatrice prendra 12 mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=abdominoplastie">Démarrer le diagnostic photo</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                        </div>
                        <FAQAccordion data={getFaqData('abdominoplastie')} />
                    </div>
                </section>
            </div>
        </>
    );
}
