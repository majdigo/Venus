import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { GreffeCheveuxInteractiveSimulator } from "@/components/interventions/GreffeCheveuxInteractiveSimulator";
import { FastTrackPhotoUpload } from "@/components/cro/FastTrackPhotoUpload";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Greffe de Cheveux Tunisie | FUE & DHI — 1900€ Tout Compris",
    description: "Retrouvez une chevelure dense avec la greffe de cheveux en Tunisie (Techniques FUE Saphir et DHI). Mega Session jusqu'à 5000 greffons. PRP et Séjour VIP inclus.",
    alternates: {
        canonical: 'https://venus-estetika.com/interventions/capillaire/greffe-cheveux',
    },
    openGraph: {
        title: 'Greffe de Cheveux Tunisie FUE & DHI dès 1 900€ | Venus Estetika',
        description: 'Chevelure dense garantie en Tunisie. FUE Saphir & DHI, jusqu\'à 5000 greffons. PRP + séjour VIP inclus. Forfait dès 1 900€.',
        images: [
            {
                url: '/images/heroes/capillaire-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Greffe de Cheveux Tunisie FUE & DHI — Venus Estetika',
            },
        ],
    },
};

export default function GreffeCheveuxPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Greffe Capillaire", url: "https://venus-estetika.com/interventions/capillaire" },
        { name: "Greffe de Cheveux (FUE/DHI)", url: "https://venus-estetika.com/interventions/capillaire/greffe-cheveux" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('greffe-cheveux'),
                faq: getFaqData('greffe-cheveux'),
                howTo: getHowToData('greffe-cheveux'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <InterventionHero
                    title="Greffe de Cheveux en Tunisie : La Densité au Naturel"
                    subtitle="Retrouvez une chevelure dense avec les techniques FUE Saphir et DHI. Jusqu'à 5000 greffons implantés (Mega Session). Séjour VIP et PRP inclus."
                    price="1 900 €"
                    priceOld="4 500 €"
                    imageSrc="/images/interventions/greffe-de-cheveux.jpg"
                    imageAlt="Greffe de cheveux FUE en Tunisie - Venus Estetika"
                    badge="Excellence Capillaire Mondiale"
                    devisSlug="greffe-cheveux"
                    stats="Greffons illimités | PRP inclus | Résultat naturel garanti"
                    doctorName="Dr Samaher Bouchnak"
                    doctorImage="/images/doctors/dr-samaher-bouchnak.jpg"
                    doctorSpecialty="Greffe Capillaire, Médecine Esthétique"
                />

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">L'Expertise Capillaire de Pointe</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La greffe de cheveux en Tunisie est reconnue mondialement pour son excellence. Nous combinons l'art du tracé de la ligne frontale à la précision micrométrique des dernières technologies (Lames en Saphir, Stylos implanteurs Choi).
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Contrairement aux anciennes méthodes (FUT) qui laissaient des cicatrices, nos techniques prélèvent avec une extrême délicatesse les follicules un par un, garantissant une repousse 100% naturelle et dense.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Technique DHI</h4>
                                        <p className="text-sm text-gray-500">Implantation directe avec le stylo Choi. Densité maximale, idéal pour redessiner la ligne frontale et les golfes.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">FUE Saphir</h4>
                                        <p className="text-sm text-gray-500">Canaux d'ouverture créés avec une lame en pierre de saphir. Cicatrisation 3 fois plus rapide et densité accrue.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans chaque Greffe</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Mega Session (Nombre de greffons illimité)",
                                        "1 Séance de Plasma Riche en Plaquettes (PRP)",
                                        "Anesthésie locale indolore (Dermojet sans aiguille)",
                                        "Tracé 3D de la ligne frontale sur-mesure",
                                        "Kit médical complet post-opératoire (Shampoing, lotions)"
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

                {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
                <AuthenticLandingSection
                    title="La Greffe de Cheveux FUE en Tunisie"
                    description="Une Méthode Non Invasives D’extraction D’unités Folliculaires (FUE) Qui Est La Technique Majeure D’implant Capillaire. On prélève chaque racine du cuir chevelu une à une sans laisser de cicatrices visibles."
                    images={[
                        "/images/interventions/greffe-cheveux/microgreffe.jpg",
                        "/images/interventions/greffe-cheveux/hair-transplant.jpg"
                    ]}
                    contentSnippets={[
                        "La greffe de cheveux FUE est la technique de prélèvement la plus moderne et la plus avancée dans le domaine de la chirurgie de restauration capillaire.",
                        "L'extraction se fait systématiquement à l’aide d'un petit punch de forme cylindrique dont le diamètre est compris entre 0,7 et 1 millimètre.",
                        "Le grand avantage réside dans la non-incision du cuir chevelu, ce qui signifie implicitement que la méthode ne laissera aucune cicatrice visible contrairement à la FUT.",
                        "Les racines transplantées recommenceront à se régénérer dans un intervalle de temps variant de 2 à 4 mois post-opératoire. Les cheveux implantés avec succès vont ainsi subir un cycle de croissance qui demeurera à vie.",
                        "Nos Mega-Sessions (jusqu'à 5000 greffons) permettent de recouvrir de vastes zones lors d'une même intervention. La durée d'intervention varie de 4 à 8 heures, durant lesquelles notre équipe reste à vos petits soins."
                    ]}
                    mainColor="navy"
                />

                {/* ANIMATION A++ INTERACTIVE (Norwood Scale) */}
                <GreffeCheveuxInteractiveSimulator />

                {/* CRO/GROWTH HACKING: FAST-TRACK PHOTO DIAGNOSIS */}
                <section className="container mx-auto max-w-5xl px-4 mt-8">
                    <FastTrackPhotoUpload interventionName="Greffe de Cheveux" />
                </section>

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarif et Forfaits Greffe de Cheveux</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Notre tarification est claire et sans surprise. Elle inclut l'intervention avec greffons illimités ainsi que l'intégralité du séjour médical et convalescence.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Greffe FUE Saphir / DHI</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-blue">1 900 €</span>
                                        <span className="text-xl text-gray-400 line-through mb-1">4 500 €</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Extraction et Implantation (Greffons Illimités)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Séance de PRP incluse
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Hôtel 5 étoiles VIP (3 Nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Consultations pré et post-opératoires
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Transferts aéroport, hôtel et clinique inclus
                                        </li>
                                    </ul>
                                </div>

                                {/* Results & Timeline */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Évolution des Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        La greffe capillaire est un processus patient. Les croûtes tombent au bout d'une dizaine de jours. Un &quot;shock loss&quot; (chute des cheveux greffés) survient le premier mois, c'est tout à fait normal. La repousse définitive débute dès le troisième mois, offrant un résultat final spectaculaire entre 12 et 15 mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=greffe-cheveux">Obtenir une évaluation gratuite</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur la Greffe</h2>
                        </div>
                        <FAQAccordion data={getFaqData('greffe-cheveux')} />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages greffe de cheveux"
                    testimonials={[
                        { name: "Julien D.", city: "Lyon", quote: "4500 greffons en une seule session. À 12 mois, le résultat est bluffant. Mes collègues pensent que j'ai toujours eu ces cheveux.", intervention: "FUE Saphir", savings: "2 600 €", rating: 5 },
                        { name: "Mehdi A.", city: "Strasbourg", quote: "J'ai testé la DHI pour la ligne frontale : densité parfaite, résultat ultra-naturel. Le PRP inclus a vraiment boosté la repousse.", intervention: "DHI + PRP", savings: "3 100 €", rating: 5 },
                        { name: "Paul C.", city: "Genève", quote: "Le séjour VIP à l'hôtel était un bonus inattendu. Clinique impeccable, zéro douleur avec le Dermojet. Résultat spectaculaire.", intervention: "Mega Session FUE", savings: "5 000 €", rating: 5 },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIEN RÉFÉRENT */}
                <SurgeonReferenceSection
                    title="Votre spécialiste capillaire"
                    surgeons={[
                        { name: "Dr Samaher Bouchnak", specialty: "Greffe Capillaire, Médecine Esthétique", image: "/images/doctors/dr-samaher-bouchnak.jpg", experience: "Spécialiste FUE Saphir & DHI" },
                    ]}
                    devisSlug="greffe-cheveux"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prêt à retrouver votre densité capillaire ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Notre équipe médicale analyse vos photos (zone donneuse et receveuse) gratuitement pour évaluer le nombre de greffons nécessaires.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=greffe-cheveux"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_greffe-cheveux"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                            >
                                Recevoir mon diagnostic gratuit
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Consultation gratuite | Spécialistes FUE/DHI | Réponse sous 24h
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
