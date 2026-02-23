import { getFaqData } from '@/lib/schema/faq';
import { CheckCircle2, Shield, Clock, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BBLInteractiveAnatomy } from '@/components/interventions/BBLInteractiveAnatomy';
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { TrackedLink } from '@/components/tracking/TrackedLink';

export const metadata = {
    title: 'BBL Tunisie (Brazilian Butt Lift) Prix & Avis | Venus Estetika',
    description: 'Augmentation des fesses par lipofilling en Tunisie. Résultat naturel et définitif sans prothèses. Prix forfait tout compris à partir de 3200€.',
};

export default function BBLPage() {
    const faqSchema = getFaqData('bbl');

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* INJECT SEO SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <InterventionHero
                title="BBL : Brazilian Butt Lift en Tunisie"
                subtitle="Sculptez votre taille en sablier. Liposuccion HD de l'abdomen et des hanches, suivie d'une réinjection de votre propre graisse pour des fesses rebondies et naturelles."
                price="3 200€"
                priceOld="7 500€"
                imageSrc="/images/heroes/chirurgie-silhouette-hero.jpg"
                imageAlt="BBL Brazilian Butt Lift en Tunisie — Venus Estetika"
                badge="Top Intervention 2026"
                devisSlug="bbl"
                stats="Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h"
                doctorName="Dr Walid Balti"
                doctorImage="/images/doctors/dr-walid-balti.jpg"
                doctorSpecialty="Chirurgie Plastique et Reconstructrice"
            />

            {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
            <AuthenticLandingSection
                title="L'Augmentation des Fesses en Tunisie"
                description="Le Lipofilling Permet de Réaliser Une Augmentation Naturelle et Définitive Du Relief Des Fesses Avec Sa Propre Graisse, Sans Prothèse. Le lipofilling Fessier Est Une Excellente Solution Pour Regalber Les Fesses Plates. Chirurgien, Clinique N*1 et Prix Pas Cher: Tout Savoir!"
                images={[
                    "https://venus-estetika.com/wp-content/uploads/2017/11/augmentation-fesses.jpg",
                    "https://venus-estetika.com/wp-content/uploads/2017/11/augmentation-fesses-photo-avant-apres.jpg",
                    "https://venus-estetika.com/wp-content/uploads/2017/11/augmentation-fesse-schema.jpg"
                ]}
                contentSnippets={[
                    "Le but est de regalber les fesses plates ou tombantes de manière 100% naturelle et harmonieuse.",
                    "La graisse est prélevée par liposuccion VASER sur les zones rebelles (ventre, hanches, culotte de cheval).",
                    "Cette graisse purifiée (centrifugée) est réinjectée finement dans les cadrans supérieurs des fesses.",
                    "Contrairement aux prothèses fessières, il n'y a aucun risque de rejet corporel ou d'allergie (c'est votre propre graisse).",
                    "Le résultat est le fameux profil en forme de 'Sablier' ou 'Hourglass', avec une taille affinée et des courbes généreuses.",
                    "L'intervention nécessite le port d'un vêtement de contention (Panty) pendant 1 mois et l'interdiction de s'asseoir directement sur les fesses pendant 15 jours (utilisation d'un coussin BBL)."
                ]}
                mainColor="navy"
            />

            {/* KEY INFO HIGHLIGHTS */}
            <section className="py-12 px-4 -mt-10 relative z-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6 text-brand-navy" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Durée d'intervention</h4>
                                <p className="text-sm text-gray-500">2 à 3 heures (Sous AG)</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Résultat Définitif</h4>
                                <p className="text-sm text-gray-500">6 mois (Permanent)</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Convalescence</h4>
                                <p className="text-sm text-gray-500">2 semaines (Coussin BBL)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE SVG ANIMATION */}
            <BBLInteractiveAnatomy />

            {/* FAQ SECTION USING PROVIDED SCHEMA DATA */}
            <section className="bg-white py-16" id="faq">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Questions Fréquentes</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Tout Savoir sur le BBL</h2>
                    </div>
                    <FAQAccordion data={faqSchema} title="" />
                </div>
            </section>

            {/* TÉMOIGNAGES PATIENTS */}
            <PatientTestimonialSection
                title="Témoignages BBL (Brazilian Butt Lift)"
                testimonials={[
                    { name: "Sofia D.", city: "Genève", quote: "Je complexais sur mes fesses plates. L'opération s'est super bien passée, avec un vrai suivi post-op. Les infirmières à l'hôtel étaient adorables.", intervention: "BBL & Lipo VASER", savings: "5 000 €", rating: 5 },
                    { name: "Amélie K.", city: "Paris", quote: "J'ai retrouvé une taille de guêpe et des fesses bombées. Le coussin BBL fourni est indispensable ! Le Dr Balti a des mains en or.", intervention: "Lipo complète + BBL", savings: "6 500 €", rating: 5 },
                    { name: "Yasmine R.", city: "Strasbourg", quote: "Résultat naturel et magnifique. Rien à voir avec des prothèses. La cicatrisation s'est très bien passée et le staff médical est au top du professionnalisme.", intervention: "Brazilian Butt Lift + Lipo hanches", savings: "4 800 €", rating: 5 },
                ]}
            />

            {/* GARANTIES */}
            <GuaranteeSection />

            {/* CHIRURGIENS RÉFÉRENTS */}
            <SurgeonReferenceSection
                title="Nos chirurgiens experts en BBL"
                surgeons={[
                    { name: "Dr Walid Balti", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-walid-balti.jpg", experience: "+15 ans d'expérience" },
                    { name: "Dr Imen Ben Gaied", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-imen-ben-gaied.jpeg", experience: "+12 ans d'expérience" },
                ]}
                devisSlug="bbl"
            />

            {/* CTA FINAL */}
            <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                        Prête pour votre transformation 'Sablier' ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Notre équipe médicale analyse vos photos gratuitement pour vous confirmer la faisabilité du BBL. Réponse rapide et devis 100% transparent.
                    </p>
                    <TrackedLink
                        href="/devis?intervention=bbl"
                        ctaText="Obtenir mon devis gratuit"
                        ctaLocation="footer_bbl"
                    >
                        <Button
                            size="lg"
                            className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                        >
                            Recevoir mon diagnostic photo
                        </Button>
                    </TrackedLink>
                    <p className="mt-6 text-sm font-medium text-slate-500">
                        Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h
                    </p>
                </div>
            </section>
        </div>
    );
}
