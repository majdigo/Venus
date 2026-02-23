import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Shield, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata = {
    title: "Greffe DHI Tunisie | Implantation Directe dès 2 200€ — Venus Estetika",
    description: "Greffe de cheveux DHI en Tunisie (stylo Choi). Implantation directe sans incision préalable. Densité maximale. Dès 2 200€ tout compris.",
};

export default function GreffeDhiPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Greffe Capillaire", url: "https://venus-estetika.com/interventions/capillaire" },
        { name: "Greffe DHI", url: "https://venus-estetika.com/interventions/capillaire/greffe-dhi" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('greffe-dhi'),
                faq: getFaqData('greffe-dhi'),
                howTo: getHowToData('greffe-dhi'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <InterventionHero
                    title="Greffe DHI en Tunisie : la technique d'implantation directe pour une densité maximale"
                    subtitle="Le stylo Choi révolutionne la greffe capillaire : implantation directe sans incision préalable, densité maximale, récupération accélérée."
                    price="2 200€"
                    priceOld="5 000-8 000€"
                    imageSrc="/images/interventions/greffe-de-cheveux.jpg"
                    imageAlt="Greffe DHI en Tunisie - Venus Estetika"
                    badge="Excellence Capillaire"
                    devisSlug="greffe-dhi"
                    stats="Stylo Choi dernière génération — greffons illimités — résultat naturel garanti"
                    doctorName="Dr Samaher Bouchnak"
                    doctorImage="/images/doctors/dr-samaher-bouchnak.jpg"
                    doctorSpecialty="Greffe Capillaire"
                />

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La technique DHI : l&apos;avant-garde de la greffe capillaire</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La technique DHI (Direct Hair Implantation) représente l&apos;évolution ultime de la greffe FUE. Le stylo implanteur Choi permet d&apos;extraire et d&apos;implanter chaque follicule en un seul geste, sans créer de canal préalable dans le cuir chevelu. Le résultat : une densité inégalée et une récupération accélérée.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Nos spécialistes capillaires contrôlent avec une précision millimétrique l&apos;angle, la direction et la profondeur d&apos;implantation de chaque greffon, pour un résultat 100% naturel indétectable.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Stylo Choi (DHI)</h4>
                                        <p className="text-sm text-gray-500">Implantation directe sans canal préalable. Contrôle parfait de l&apos;angle, de la direction et de la profondeur de chaque greffon.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">DHI Sans Rasage</h4>
                                        <p className="text-sm text-gray-500">Option pour les patients ne souhaitant pas raser la zone donneuse. Discrétion totale, idéal pour les femmes et les cheveux longs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans chaque Greffe DHI</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Spécialiste capillaire certifié",
                                        "Mega Session — greffons illimités",
                                        "Stylo Choi dernière génération",
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
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarif Greffe DHI Tout Compris</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Prix fixe, greffons illimités. Toute la prise en charge médicale et le séjour VIP inclus.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Greffe DHI Stylo Choi</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-blue">2 200 €</span>
                                        <span className="text-xl text-gray-400">tout compris</span>
                                        <span className="text-sm text-gray-400 line-through mb-1 ml-2">5 000-8 000€</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Mega Session — nombre de greffons illimité
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            PRP et Dermojet inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Hôtel 5 étoiles (3 Nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Résultat final visible M12-M15
                                        </li>
                                    </ul>
                                </div>

                                {/* Results & Timeline */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Évolution Post-Greffe DHI</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Les croûtes tombent naturellement vers le 10e jour. Un &quot;shock loss&quot; (chute temporaire des cheveux greffés) survient au premier mois, c&apos;est un signe normal du processus de repousse. Les nouveaux cheveux commencent à pousser dès le 3e mois, avec un résultat final spectaculaire entre 12 et 15 mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=greffe-dhi">Obtenir une évaluation gratuite</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <PatientTestimonialSection
                    title="Témoignages Greffe DHI"
                    testimonials={[
                        {
                            name: "Thomas G.",
                            city: "Paris",
                            quote: "J'avais choisi la DHI pour sa précision sur la ligne frontale. Dr Bouchnak a travaillé follicule par follicule avec le stylo Choi. À 13 mois, la densité est impressionnante et personne ne devinerait que j'ai eu une greffe. Expérience parfaite du début à la fin.",
                            intervention: "Greffe DHI Stylo Choi",
                            savings: "4 500€",
                            rating: 5
                        },
                        {
                            name: "Fatima L.",
                            city: "Bruxelles",
                            quote: "En tant que femme, je voulais la DHI sans rasage pour rester discrète. Venus Estetika a parfaitement géré ça. Le résultat à 12 mois est naturel, dense et harmonieux. Mon coiffeur dit que ma chevelure a l'air en excellente santé. Je suis ravie.",
                            intervention: "Greffe DHI Sans Rasage",
                            savings: "3 800€",
                            rating: 5
                        },
                        {
                            name: "Vincent M.",
                            city: "Bordeaux",
                            quote: "Après des années de complexes liés à ma calvitie, j'ai enfin sauté le pas. Prise en charge impeccable depuis le diagnostic à distance jusqu'au suivi post-op. Le shock loss m'avait inquiété mais Dr Bouchnak m'avait prévenu. À 15 mois, c'est magnifique.",
                            intervention: "Greffe DHI Mega Session",
                            savings: "5 800€",
                            rating: 5
                        }
                    ]}
                />

                {/* GUARANTEES */}
                <GuaranteeSection />

                {/* SURGEON REFERENCE */}
                <SurgeonReferenceSection
                    title="Votre spécialiste DHI référente"
                    subtitle="Experte en technique DHI Stylo Choi, reconnue pour la précision de ses implantations et la naturalité de ses résultats."
                    surgeons={[
                        {
                            name: "Dr Samaher Bouchnak",
                            specialty: "Spécialiste Greffe Capillaire DHI & FUE",
                            image: "/images/doctors/dr-samaher-bouchnak.jpg",
                            experience: "Plus de 2 000 greffes capillaires réalisées"
                        }
                    ]}
                    devisSlug="greffe-dhi"
                />

                {/* FAQ */}
                <section className="py-16 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur la Greffe DHI</h2>
                        </div>
                        <FAQAccordion data={getFaqData('greffe-dhi')} />
                    </div>
                </section>
            </div>
        </>
    );
}
