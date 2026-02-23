import { getFaqData } from '@/lib/schema/faq';
import { CheckCircle2, Shield, Clock, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { TrackedLink } from '@/components/tracking/TrackedLink';

export const metadata = {
    title: 'Lifting des Cuisses Tunisie (Cruroplastie) Prix | Venus Estetika',
    description: 'Chirurgie pour retendre la peau des cuisses après perte de poids. Prix forfait tout compris à partir de 2500€ en Tunisie avec séjour 5 étoiles.',
};

export default function ThighLiftPage() {
    const faqSchema = getFaqData('lifting-cuisses');
    const faqs = faqSchema?.mainEntity || [];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* INJECT SEO SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <InterventionHero
                title="Lifting des Cuisses en Tunisie"
                subtitle="Éliminez le frottement et l'excès de peau. La cruroplastie sculpte et raffermit l'intérieur de vos cuisses pour retrouver des jambes fuselées et confortables."
                price="2 500€"
                priceOld="5 500€"
                imageSrc="/images/heroes/chirurgie-silhouette-hero.jpg"
                imageAlt="Lifting des Cuisses (Cruroplastie) en Tunisie — Venus Estetika"
                badge="Silhouette Post-Accouchement & Bariatrique"
                devisSlug="lifting-cuisses"
                stats="Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h"
                doctorName="Dr Walid Balti"
                doctorImage="/images/doctors/dr-walid-balti.jpg"
                doctorSpecialty="Chirurgie Plastique et Reconstructrice"
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
                                <h4 className="font-bold text-gray-900">Temps Opératoire</h4>
                                <p className="text-sm text-gray-500">2 Heures en moyenne</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Hospitalisation</h4>
                                <p className="text-sm text-gray-500">Généralement 1 Nuit</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Panty de Maintien</h4>
                                <p className="text-sm text-gray-500">Obligatoire (4 Semaines)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION USING PROVIDED SCHEMA DATA */}
            <section className="py-24 px-4 bg-white" id="faq">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Détails de l'Opération</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
                            <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                                    {faq.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed md:ml-9">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TÉMOIGNAGES PATIENTS */}
            <PatientTestimonialSection
                title="Avis et Témoignages Lifting des Cuisses"
                testimonials={[
                    { name: "Aurélie P.", city: "Paris", quote: "La peau de mes cuisses internes frottait constamment et me causait des irritations. Après la cruroplastie en Tunisie, je me sens enfin à l'aise. Le résultat est naturel et je peux enfin porter des jupes courtes.", intervention: "Cruroplastie bilatérale", savings: "3 000 €", rating: 5 },
                    { name: "Sophie L.", city: "Lausanne", quote: "Suite à ma perte de poids de 35 kg, mes cuisses avaient un excès de peau important. Le Dr Balti a réalisé un lifting parfait. La cicatrice est dans le pli de l'aine et totalement invisible.", intervention: "Lifting cuisses post-bariatrique", savings: "3 400 €", rating: 5 },
                    { name: "Élodie M.", city: "Bordeaux", quote: "L'équipe médicale de Venus Estetika est exceptionnelle. On se sent prise en charge du début à la fin. Mon séjour à l'hôtel 5 étoiles pendant la convalescence était un vrai bonheur. Je suis ravie du résultat.", intervention: "Cruroplastie + Lipo interne", savings: "3 800 €", rating: 5 },
                ]}
            />

            {/* GARANTIES */}
            <GuaranteeSection />

            {/* CHIRURGIENS RÉFÉRENTS */}
            <SurgeonReferenceSection
                title="Notre chirurgien expert en lifting des cuisses"
                surgeons={[
                    { name: "Dr Walid Balti", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-walid-balti.jpg", experience: "+15 ans d'expérience" },
                ]}
                devisSlug="lifting-cuisses"
            />

            {/* CTA FINAL */}
            <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                        Prête à retrouver des cuisses fuselées et confortables ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Notre équipe médicale analyse vos photos gratuitement pour confirmer la faisabilité de la cruroplastie. Devis 100% transparent et réponse rapide.
                    </p>
                    <TrackedLink
                        href="/devis?intervention=lifting-cuisses"
                        ctaText="Obtenir mon devis gratuit"
                        ctaLocation="footer_lifting-cuisses"
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
    );
}
