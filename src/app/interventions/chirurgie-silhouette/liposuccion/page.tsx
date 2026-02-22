import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { LiposuccionInteractiveAnatomy } from "@/components/interventions/LiposuccionInteractiveAnatomy";
import Image from "next/image";
import Link from 'next/link';

export const metadata = {
    title: "Liposuccion Tunisie | Prix Tout Compris 1 500€ — Venus Estetika",
    description: "Liposuccion en Tunisie par un chirurgien diplômé en France. Forfait tout compris dès 1 500€ : abdomen, flancs, cuisses. Clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit.",
};

export default function LiposuccionPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie de la Silhouette", url: "https://venus-estetika.com/interventions/chirurgie-silhouette" },
        { name: "Liposuccion", url: "https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('liposuccion'),
                faq: getFaqData('liposuccion'),
                howTo: getHowToData('liposuccion'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION - Premium Look */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/heroes/liposuccion-hero.png"
                            alt="Liposuccion Haute Définition en Tunisie"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-2xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                                N°1 de la chirurgie de la silhouette
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Sculptez votre corps définitivement avec la Liposuccion HD
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                                Éliminez définitivement les amas graisseux résistants au sport. Forfait tout compris à partir de <b className="text-brand-gold text-2xl">1 500€</b> <span className="line-through text-sm opacity-60 ml-2">3 500€ en France</span>. Hôtel 5★ et suivi 12 mois inclus.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=liposuccion">
                                        Configurer mon intervention <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION & AVANTAGES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">Qu&apos;est-ce que la Liposuccion ?</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La liposuccion (ou lipoaspiration) consiste à aspirer les dépôts de graisse localisés à l&apos;aide de fines canules, afin de remodeler la silhouette. Elle cible spécifiquement les amas graisseux résistants au sport et aux régimes.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Chez Venus Estetika, nous maîtrisons la technique <strong>VASER (Ultrasons)</strong> pour une liposuccion de haute définition (VASER Lipo) : moins de bleus, une meilleure rétraction de la peau, et des courbes sculptées avec la précision d&apos;orfèvre de nos chirurgiens spécialisés.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Chirurgien Expert</h4>
                                        <p className="text-sm text-gray-500">Cartographie précise des zones et sculpture sur mesure.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Technologie VASER</h4>
                                        <p className="text-sm text-gray-500">Aspiration douce par ultrasons pour une peau retendue.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans notre forfait</h3>
                                <div className="space-y-4">
                                    {[
                                        "Intervention chirurgicale VASER/PAL",
                                        "Séjour en clinique agréée (1 nuit)",
                                        "Vêtement de compression médical (Panty)",
                                        "Hôtel 5 étoiles à Tunis (5 nuits)",
                                        "Transferts privés aéroport-clinique-hôtel",
                                        "Suivi post-opératoire complet (12 mois)"
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
                <LiposuccionInteractiveAnatomy />

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Prix de la Liposuccion en Tunisie</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une tarification transparente, sans frais cachés. Économisez jusqu&apos;à 60% par rapport aux tarifs européens pour une prestation de luxe équivalente.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Comparatif des tarifs</h3>
                                    <div className="space-y-5">
                                        {[
                                            { zone: "1 zone (abdomen ou flancs)", fr: "3 500 €", tn: "1 500 €" },
                                            { zone: "2 zones (abdomen + flancs)", fr: "5 000 €", tn: "2 000 €" },
                                            { zone: "3 zones (abd. + flancs + cuisses)", fr: "6 500 €", tn: "2 500 €" },
                                            { zone: "360° (abdomen + flancs + dos)", fr: "7 500 €", tn: "3 000 €" },
                                            { zone: "Liposuccion + Lipofilling fesses", fr: "8 500 €", tn: "3 500 €" },
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

                                {/* FAQ Preview */}
                                <div className="p-8 bg-slate-50">
                                    <Clock className="w-10 h-10 text-brand-gold mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Convalescence & Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Le port du panty est essentiel pendant 4 à 6 semaines. Les ecchymoses se résorbent en 15 jours. Le résultat définitif est apprécié entre 3 et 6 mois, le temps que la peau se rétracte et que l&apos;œdème disparaisse complètement.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=liposuccion">Démarrer votre consultation en ligne</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                        </div>
                        <FAQAccordion data={getFaqData('liposuccion')} />
                    </div>
                </section>
            </div>
        </>
    );
}
