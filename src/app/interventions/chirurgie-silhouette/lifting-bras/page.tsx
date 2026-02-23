import { getFaqData } from '@/lib/schema/faq';
import { CheckCircle2, Shield, Clock, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { TrackedLink } from '@/components/tracking/TrackedLink';

export const metadata = {
    title: 'Lifting des Bras Tunisie (Brachioplastie) Prix & Cicatrices | Venus Estetika',
    description: "Chirurgie pour retendre la peau des bras. Séjour tout compris en Tunisie à partir de 2200€. Supprimez l'effet \"ailes de chauve-souris\".",
};

export default function ArmLiftPage() {
    const faqSchema = getFaqData('lifting-bras');
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
                title="Lifting des Bras en Tunisie"
                subtitle="Retrouvez des bras fermes et toniques. La brachioplastie retire l'excès de peau tombante — effet ailes de chauve-souris — souvent lié à l'âge ou à une perte de poids massive."
                price="2 200€"
                priceOld="5 000€"
                imageSrc="/images/heroes/chirurgie-silhouette-hero.jpg"
                imageAlt="Lifting des Bras (Brachioplastie) en Tunisie — Venus Estetika"
                badge="Chirurgie Post-Bariatrique"
                devisSlug="lifting-bras"
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
                                <h4 className="font-bold text-gray-900">Bloc Opératoire</h4>
                                <p className="text-sm text-gray-500">1.5 à 2 heures (AG)</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Hospitalisation</h4>
                                <p className="text-sm text-gray-500">1 à 2 Nuit(s) selon profil</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Séjour Hôtel 5★</h4>
                                <p className="text-sm text-gray-500">5 nuits de convalescence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION USING PROVIDED SCHEMA DATA */}
            <section className="py-24 px-4 bg-white" id="faq">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Détails Pratiques</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">FAQ Brachioplastie</h2>
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
                title="Avis et Témoignages Lifting des Bras"
                testimonials={[
                    { name: "Christine V.", city: "Lyon", quote: "Après avoir perdu 40 kg avec la sleeve, mes bras pendaient et me complexaient terriblement. Le Dr Balti a réalisé un travail magnifique. Mes bras sont enfin toniques et la cicatrice est à peine visible.", intervention: "Brachioplastie post-bariatrique", savings: "3 200 €", rating: 5 },
                    { name: "Martine D.", city: "Nantes", quote: "Je n'osais plus porter de robes sans manches depuis des années. Après la brachioplastie à Tunis, je me sens libérée. L'hôtel 5 étoiles et le suivi par l'infirmière ont rendu la convalescence très confortable.", intervention: "Lifting des bras bilatéral", savings: "2 900 €", rating: 5 },
                    { name: "Valérie G.", city: "Bruxelles", quote: "J'avais peur des cicatrices, mais elles sont vraiment discrètes et bien placées à l'intérieur du bras. Le Dr Balti a pris le temps de tout expliquer avant l'opération. Je recommande à 100%.", intervention: "Brachioplastie + Lipo bras", savings: "3 600 €", rating: 5 },
                ]}
            />

            {/* GARANTIES */}
            <GuaranteeSection />

            {/* CHIRURGIENS RÉFÉRENTS */}
            <SurgeonReferenceSection
                title="Notre chirurgien expert en lifting des bras"
                surgeons={[
                    { name: "Dr Walid Balti", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-walid-balti.jpg", experience: "+15 ans d'expérience" },
                ]}
                devisSlug="lifting-bras"
            />

            {/* CTA FINAL */}
            <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                        Prête à retrouver des bras fermes et toniques ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Notre équipe médicale analyse vos photos gratuitement pour confirmer la faisabilité de la brachioplastie. Devis 100% transparent et réponse rapide.
                    </p>
                    <TrackedLink
                        href="/devis?intervention=lifting-bras"
                        ctaText="Obtenir mon devis gratuit"
                        ctaLocation="footer_lifting-bras"
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
