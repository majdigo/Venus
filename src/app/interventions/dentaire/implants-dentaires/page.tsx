import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Shield, Star, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { ImplantsDentairesInteractiveAnatomy } from "@/components/interventions/ImplantsDentairesInteractiveAnatomy";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
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
                <InterventionHero
                    title="Implants dentaires en Tunisie : retrouvez un sourire complet et fonctionnel"
                    subtitle="Remplacez vos dents manquantes avec des implants Straumann ou Nobel, les références mondiales de l'implantologie."
                    price="600 €"
                    priceOld="1 800-2 500 €"
                    imageSrc="/images/heroes/dentaire-hero.jpg"
                    imageAlt="Implants Dentaires Straumann Tunisie - Venus Estetika"
                    badge="Implantologie Premium"
                    devisSlug="implants-dentaires"
                    stats="+2 500 implants posés | Note 4.9/5 sur Google | Implants Straumann & Nobel"
                    doctorName="Dr Ramses Mouelhi"
                    doctorImage="/images/doctors/dr-ramses-mouelhi.jpg"
                    doctorSpecialty="Chirurgien Dentiste, Implantologie & Facettes"
                />

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
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Implant Unitaire</h4>
                                        <p className="text-sm text-gray-500">Racine artificielle en titane + couronne zircone, pour remplacer une dent manquante sans toucher aux dents adjacentes.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
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
                                            <CheckCircle2 className="text-brand-blue w-6 h-6 shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3D INTERACTIVE SVG SHOWCASE */}
                <ImplantsDentairesInteractiveAnatomy />

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
                                        <div className="border border-gray-100 rounded-xl p-5 hover:border-brand-blue transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Implant unitaire complet</span>
                                                <span className="text-2xl font-bold text-brand-blue">600 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Implant + couronne zircone. <span className="line-through">1 800-2 500€ en France</span></p>
                                        </div>
                                        <div className="border border-brand-blue rounded-xl p-5 bg-brand-blue/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">All-on-4 (une arcade)</span>
                                                <span className="text-2xl font-bold text-brand-blue">4 500 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Arcade complète fixe. <span className="line-through">12 000-18 000€ en France</span></p>
                                            <div className="mt-2 flex items-center gap-1">
                                                <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
                                                <span className="text-xs font-semibold text-brand-blue">Le plus populaire</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                                            Scanner 3D et plan de traitement personnalisé inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                                            Hôtel 5 étoiles et transferts inclus
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-blue mb-4" />
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

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Ils ont retrouvé un sourire complet et fonctionnel"
                    testimonials={[
                        {
                            name: "Bernard L.",
                            city: "Paris",
                            quote: "J'avais perdu 3 dents suite à des caries profondes. Les implants Straumann posés à Tunis sont d'une qualité irréprochable. Aucune douleur post-opératoire, le résultat est naturel à 100%. Un gain de 4 000€ par rapport à mon dentiste parisien.",
                            intervention: "3 implants unitaires Straumann",
                            savings: "4 200 €",
                            rating: 5
                        },
                        {
                            name: "Christine V.",
                            city: "Toulouse",
                            quote: "All-on-4 sur l'arcade inférieure. J'avais peur de l'intervention mais le Dr Mouelhi est extrêmement compétent et rassurant. Résultat bluffant : des dents fixes, stables, comme les vraies. Le séjour à l'hôtel était un bonus appréciable.",
                            intervention: "All-on-4 arcade inférieure",
                            savings: "8 500 €",
                            rating: 5
                        },
                        {
                            name: "Philippe T.",
                            city: "Genève",
                            quote: "Édenté depuis des années, j'hésitais à me lancer. Venus Estetika a tout pris en charge : le scanner 3D en amont, le séjour, et le suivi. Mes deux arcades All-on-6 en zircone sont magnifiques. Je peux manger normalement pour la première fois depuis 10 ans.",
                            intervention: "All-on-6 deux arcades",
                            savings: "22 000 €",
                            rating: 5
                        }
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIEN RÉFÉRENT */}
                <SurgeonReferenceSection
                    title="Votre implantologiste référent"
                    subtitle="Un chirurgien dentiste spécialisé en implantologie orale, formé aux techniques les plus avancées et aux marques mondiales de référence."
                    surgeons={[
                        {
                            name: "Dr Ramses Mouelhi",
                            specialty: "Chirurgien Dentiste — Implantologie & Facettes",
                            image: "/images/doctors/dr-ramses-mouelhi.jpg",
                            experience: "15 ans d'expertise en implantologie orale"
                        }
                    ]}
                    devisSlug="implants-dentaires"
                />
            </div>
        </>
    );
}
