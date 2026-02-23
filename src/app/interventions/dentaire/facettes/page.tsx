import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { CheckCircle2, Star, Shield, Award, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { FacettesInteractiveAnatomy } from "@/components/interventions/FacettesInteractiveAnatomy";
import { FastTrackPhotoUpload } from "@/components/cro/FastTrackPhotoUpload";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Facettes Dentaires Tunisie | Hollywood Smile E-max — Dès 250€",
    description: "Retrouvez un sourire éclatant avec les facettes dentaires en Tunisie (Emax & Lumineers). Design de sourire 3D personnalisé. Résultat naturel en 3 étapes.",
    alternates: {
        canonical: 'https://venus-estetika.com/interventions/dentaire/facettes',
    },
    openGraph: {
        title: 'Facettes Dentaires Tunisie E-max dès 250€ | Venus Estetika',
        description: 'Hollywood Smile en Tunisie avec facettes E-max & Lumineers. Design sourire 3D personnalisé. Résultat naturel en 3 étapes. Dès 250€.',
        images: [
            {
                url: '/images/heroes/dentaire-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Facettes Dentaires Tunisie E-max — Venus Estetika',
            },
        ],
    },
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
                {/* HERO INTERVENTION */}
                <InterventionHero
                    title="Facettes Dentaires en Tunisie : Votre Hollywood Smile"
                    subtitle="Retrouvez un sourire éclatant et parfaitement aligné avec des facettes en céramique E-max ou Lumineers ultra-fines. Réalisé en 5 jours seulement."
                    price="250 €"
                    priceOld="900 €"
                    imageSrc="/images/heroes/dentaire-hero.jpg"
                    imageAlt="Facettes Dentaires Emax Tunisie - Venus Estetika"
                    badge="Esthétique Dentaire Premium"
                    devisSlug="facettes"
                    stats="+5 000 sourires créés | Note 4.9/5 sur Google | Laboratoire certifié ISO"
                    doctorName="Dr Ramses Mouelhi"
                    doctorImage="/images/doctors/dr-ramses-mouelhi.jpg"
                    doctorSpecialty="Chirurgien Dentiste, Implantologie & Facettes"
                />

                {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
                <AuthenticLandingSection
                    title="La Pose de Facette Dentaire en Tunisie"
                    description="Facette dentaire Tunisie : Dents Blanches et Alignées Prix Pas Cher! A Partir de 280€ la Facette. Séjour Tout Inclus! Photos Avant Après pour la Pose des Facettes."
                    images={[
                        "/images/interventions/facettes/facette-dentaire.jpg",
                        "/images/interventions/facettes/avant-apres-dentaire-1.jpg",
                        "/images/interventions/facettes/avant-apres-dentaire-2.jpg"
                    ]}
                    contentSnippets={[
                        "Le Hollywood Smile est la solution la plus demandée en Tunisie pour corriger tous les défauts dentaires en un minimum de temps.",
                        "Les facettes EMAX Ultra fines, conçues sur mesure dans nos laboratoires partenaires, sont de l'épaisseur d'une lentille de contact. Elles ne nécessitent généralement pas ou très peu de fraisage de vos dents naturelles.",
                        "En seulement deux séances (empreinte 3D puis collage définitif), vous repartez avec un sourire éclatant, blanc et parfaitement aligné, résistant aux taches de café et tabac."
                    ]}
                    mainColor="navy"
                />

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
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Céramique E-max</h4>
                                        <p className="text-sm text-gray-500">Matériau de pointe (Disilicate de Lithium). Translucidité naturelle et résistance mécanique 4x supérieure à l'émail.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
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
                                            <CheckCircle2 className="text-brand-blue w-6 h-6 shrink-0" />
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

                {/* CRO/GROWTH HACKING: FAST-TRACK PHOTO DIAGNOSIS */}
                <section className="container mx-auto max-w-5xl px-4">
                    <FastTrackPhotoUpload interventionName="Pose de Facettes Dentaires" />
                </section>

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
                                        <span className="text-5xl font-bold text-brand-blue">250 €</span>
                                        <span className="text-xl text-gray-400">/ facette</span>
                                        <span className="text-sm text-gray-400 line-through mb-1 ml-2">900 €</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Surfaçage ultra-léger et conception 3D
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Facettes provisoires pendant la fabrication
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 flex-wrap">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            <span className="font-semibold text-brand-navy">Pack Hollywood Smile (Dès 20 facettes) :</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 pl-8">
                                            <Star className="w-4 h-4 text-brand-blue" />
                                            Séjour Hôtel 5★ de 5 Nuits inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 pl-8">
                                            <Star className="w-4 h-4 text-brand-blue" />
                                            Transferts VIP Aéroport & Clinique
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-blue mb-4" />
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

                {/* FAQ SECTION */}
                <section className="bg-white">
                    <FAQAccordion data={getFaqData('facettes')} title="Questions fréquentes sur les Facettes Dentaires" />
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages Facettes Dentaires"
                    testimonials={[
                        { name: "Laura T.", city: "Lyon", quote: "J'avais des dents jaunies et légèrement écartées. Le résultat avec 20 facettes E-max est juste bluffant. Un vrai sourire de star, sans douleur !", intervention: "Pack Hollywood Smile", savings: "12 000 €", rating: 5 },
                        { name: "Nicolas P.", city: "Bruxelles", quote: "Clinique ultra moderne, équipement au top. Le séjour à l'hôtel était fantastique. Mes nouvelles dents ont changé mon visage.", intervention: "24 Facettes Lumineers", savings: "15 000 €", rating: 5 },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIEN RÉFÉRENT */}
                <SurgeonReferenceSection
                    title="Votre spécialiste des facettes dentaires"
                    subtitle="Un chirurgien dentiste expert en esthétique du sourire et en Hollywood Smile, formé aux techniques de Digital Smile Design et aux matériaux E-max."
                    surgeons={[
                        {
                            name: "Dr Ramses Mouelhi",
                            specialty: "Chirurgien Dentiste — Implantologie & Facettes",
                            image: "/images/doctors/dr-ramses-mouelhi.jpg",
                            experience: "15 ans d'expertise en esthétique dentaire"
                        }
                    ]}
                    devisSlug="facettes"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prêt(e) pour votre nouveau Hollywood Smile ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Nos patients francophones économisent en moyenne 70% sur leurs soins dentaires, tout en profitant d'un séjour de luxe. Demandez votre diagnostic photo gratuit.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=facettes"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_facettes"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                            >
                                Recevoir mon plan de traitement 3D
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Diagnostic gratuit | Laboratoires certifiés | Réponse sous 24h
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
