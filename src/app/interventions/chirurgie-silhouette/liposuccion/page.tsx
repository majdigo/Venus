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
import { LiposuccionInteractiveAnatomy } from "@/components/interventions/LiposuccionInteractiveAnatomy";
import { FastTrackPhotoUpload } from "@/components/cro/FastTrackPhotoUpload";
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { TrackedLink } from '@/components/tracking/TrackedLink';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Liposuccion Tunisie | Prix Tout Compris 1 500€ — Venus Estetika",
    description: "Liposuccion en Tunisie par un chirurgien diplômé en France. Forfait tout compris dès 1 500€ : abdomen, flancs, cuisses. Clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit.",
    alternates: {
        canonical: 'https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion',
    },
    openGraph: {
        title: 'Liposuccion Tunisie dès 1 500€ | Venus Estetika',
        description: 'Liposuccion en Tunisie par chirurgien diplômé en France. Abdomen, flancs, cuisses. Hôtel 5 étoiles + suivi 12 mois. Dès 1 500€.',
        images: [
            {
                url: '/images/heroes/chirurgie-silhouette-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Liposuccion Tunisie — Venus Estetika',
            },
        ],
    },
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
                {/* HERO SECTION */}
                <InterventionHero
                    title="Sculptez votre corps définitivement avec la Liposuccion HD"
                    subtitle="Éliminez définitivement les amas graisseux résistants au sport. Hôtel 5★ et suivi 12 mois inclus."
                    price="1 500€"
                    priceOld="3 500€"
                    imageSrc="/images/heroes/liposuccion-hero.png"
                    imageAlt="Liposuccion Haute Définition en Tunisie"
                    badge="N°1 de la chirurgie de la silhouette"
                    devisSlug="liposuccion"
                    stats="Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h"
                    doctorName="Dr Atef Ghedira"
                    doctorImage="/images/doctors/dr-atef-ghedira.jpg"
                    doctorSpecialty="Chirurgie Plastique, Esthétique et Maxillo-faciale"
                />

                {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
                <AuthenticLandingSection
                    title="La Liposuccion en Tunisie"
                    description="Traitement De Choix et Définitivement Pas Cher Pour Se Débarrasser De La Graisse Mal Placée. L'intervention permet d'aspirer les amas graisseux en excès pour remodeler la silhouette de façon définitive."
                    images={[
                        "/images/interventions/liposuccion/liposuccion.jpg",
                        "/images/interventions/liposuccion/zones-lipoaspiration.png"
                    ]}
                    contentSnippets={[
                        "Les cellules graisseuses n'ont pas la faculté de se multiplier. Dès lors qu'on a détruit certaines par la liposuccion, la graisse ne réapparaît généralement pas.",
                        "Généralement, pour la sécurité du patient, le chirurgien esthétique prélève environ 5 Litres lors de chaque séance.",
                        "Le port d'un vêtement de contention (Panty) est indispensable tout au long du premier mois pour résorber l'inflammation.",
                        "La méthode est particulièrement efficace pour enlever les bouées au niveau du ventre, les poignées d'amour, ou la culotte de cheval que ni sport ni régime alimentaire ne pourraient vaincre.",
                        "Le résultat (avant-après Vaser) est particulièrement spectaculaire sur les patients jeunes dont la peau a conservé une bonne élasticité."
                    ]}
                    mainColor="blue"
                />

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
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Chirurgien Expert</h4>
                                        <p className="text-sm text-gray-500">Cartographie précise des zones et sculpture sur mesure.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
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
                <LiposuccionInteractiveAnatomy />

                {/* CRO/GROWTH HACKING: FAST-TRACK PHOTO DIAGNOSIS */}
                <section className="container mx-auto max-w-5xl px-4 mt-8">
                    <FastTrackPhotoUpload interventionName="Liposuccion" />
                </section>

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
                                                    <p className="font-bold text-2xl text-brand-blue">{price.tn}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* FAQ Preview */}
                                <div className="p-8 bg-slate-50">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
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

                {/* FAQ SECTION */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Questions Fréquentes</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Tout Savoir sur la Liposuccion</h2>
                        </div>
                        <FAQAccordion data={getFaqData('liposuccion')} />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Avis et Témoignages Liposuccion"
                    testimonials={[
                        { name: "Myriam A.", city: "Genève", quote: "J'avais des poignées d'amour persistantes malgré le sport. La Lipo Vaser a littéralement sculpté ma taille ! L'hôtel de convalescence était fabuleux.", intervention: "Liposuccion 360°", savings: "4 000 €", rating: 5 },
                        { name: "Pauline L.", city: "Bordeaux", quote: "Clinique ultra-moderne et chirurgien à l'écoute. Aucune douleur insurmontable, des bleus qui partent vite. Je regrette de ne pas l'avoir fait plus tôt.", intervention: "Lipo Ventre + Cuisses", savings: "3 500 €", rating: 5 },
                        { name: "Sandra K.", city: "Lille", quote: "Le Dr Ghedira est un artiste. Mes flancs et mon ventre sont méconnaissables. Le suivi par infirmière à l'hôtel 5 étoiles est un vrai luxe que je n'attendais pas.", intervention: "Lipo Flancs + Ventre (VASER)", savings: "3 800 €", rating: 5 },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos experts de la sculpture corporelle"
                    surgeons={[
                        { name: "Dr Atef Ghedira", specialty: "Chirurgie Plastique, Esthétique et Maxillo-faciale", image: "/images/doctors/dr-atef-ghedira.jpg", experience: "+20 ans d'expérience" },
                        { name: "Dr Borhene Belkhiria", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-borhene-belkhiria.jpg", experience: "+14 ans d'expérience" },
                    ]}
                    devisSlug="liposuccion"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prête à sculpter votre corps définitivement ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Notre équipe médicale analyse vos photos gratuitement pour déterminer combien de zones peuvent être traitées. Devis 100% transparent et réponse rapide.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=liposuccion"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_liposuccion"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                            >
                                Recevoir mon diagnostic gratuit
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
