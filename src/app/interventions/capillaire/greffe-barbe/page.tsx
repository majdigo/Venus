import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Shield, Star, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
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
                <InterventionHero
                    title="Greffe de barbe en Tunisie : une barbe dense et naturelle"
                    subtitle="Comblez les zones clairsemées ou créez une barbe complète et dense grâce à la greffe FUE ou DHI. Résultat définitif, naturel, et rasable."
                    price="1 600€"
                    priceOld="4 000-10 000€"
                    imageSrc="/images/interventions/greffe-de-cheveux.jpg"
                    imageAlt="Greffe de Barbe en Tunisie - Venus Estetika"
                    badge="Greffe Capillaire Spécialisée"
                    devisSlug="greffe-barbe"
                    stats="Résultat définitif — technique FUE & DHI — diagnostic gratuit en 24h"
                    doctorName="Dr Samaher Bouchnak"
                    doctorImage="/images/doctors/dr-samaher-bouchnak.jpg"
                    doctorSpecialty="Greffe Capillaire"
                />

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
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">FUE Barbe</h4>
                                        <p className="text-sm text-gray-500">Prélèvement zone occipitale + implantation sur le visage. Technique éprouvée pour de grands volumes de greffons.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
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
                                            <CheckCircle2 className="text-brand-blue w-6 h-6 shrink-0" />
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
                                        <div className="border border-gray-100 rounded-xl p-5 hover:border-brand-blue transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Barbe Partielle</span>
                                                <span className="text-2xl font-bold text-brand-blue">1 600 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Joues ou menton seulement. <span className="line-through">4 000-6 000€ en France</span></p>
                                        </div>
                                        <div className="border border-brand-blue rounded-xl p-5 bg-brand-blue/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Barbe Complète</span>
                                                <span className="text-2xl font-bold text-brand-blue">2 400 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Joues + menton + moustache + favoris. <span className="line-through">8 000-10 000€ en France</span></p>
                                            <div className="mt-2 flex items-center gap-1">
                                                <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
                                                <span className="text-xs font-semibold text-brand-blue">Le plus demandé</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                                            PRP et kit post-op inclus dans tous les forfaits
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                                            Hôtel 5 étoiles et transferts inclus
                                        </li>
                                    </ul>
                                </div>

                                {/* Results & Timeline */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
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

                {/* TESTIMONIALS */}
                <PatientTestimonialSection
                    title="Témoignages Greffe de Barbe"
                    testimonials={[
                        {
                            name: "Karim S.",
                            city: "Paris",
                            quote: "J'avais des zones complètement imberbes sur les joues depuis l'adolescence. Après la greffe DHI chez Venus Estetika, ma barbe est enfin complète et uniforme. Le Dr Bouchnak a dessiné le contour parfaitement selon ma morphologie. Résultat bluffant à 10 mois.",
                            intervention: "Greffe de Barbe DHI",
                            savings: "6 400€",
                            rating: 5
                        },
                        {
                            name: "Sébastien R.",
                            city: "Lyon",
                            quote: "J'avais peur que ça fasse non naturel. Franchement, même mon coiffeur ne voit pas la différence. La direction des poils est parfaite, la densité est homogène. Séjour très bien organisé, hôtel superbe, et Dr Bouchnak très pédagogue.",
                            intervention: "Greffe de Barbe FUE",
                            savings: "3 800€",
                            rating: 5
                        },
                        {
                            name: "Alexandre T.",
                            city: "Nantes",
                            quote: "Opération indolore grâce à l'anesthésie Dermojet. J'ai passé une bonne semaine à Tunis et je suis rentré avec un bandage discret. À 9 mois, la barbe est bien fournie et entièrement rasable. Je recommande à tous les hommes qui souffrent de clairsemé.",
                            intervention: "Greffe de Barbe Complète",
                            savings: "5 200€",
                            rating: 5
                        }
                    ]}
                />

                {/* GUARANTEES */}
                <GuaranteeSection />

                {/* SURGEON REFERENCE */}
                <SurgeonReferenceSection
                    title="Votre spécialiste capillaire référente"
                    subtitle="Experte en greffe de barbe FUE et DHI, reconnue pour la précision de son tracé et la naturalité de ses résultats."
                    surgeons={[
                        {
                            name: "Dr Samaher Bouchnak",
                            specialty: "Spécialiste Greffe Capillaire & Barbe",
                            image: "/images/doctors/dr-samaher-bouchnak.jpg",
                            experience: "Plus de 2 000 greffes capillaires réalisées"
                        }
                    ]}
                    devisSlug="greffe-barbe"
                />

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
