import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { CheckCircle2 } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { BmiCalculator } from "@/components/calculators/BmiCalculator";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { SleeveGastriqueInteractiveAnatomy } from "@/components/interventions/SleeveGastriqueInteractiveAnatomy";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";

export default function SleeveGastriquePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie Bariatrique", url: "https://venus-estetika.com/interventions/bariatrique" },
        { name: "Sleeve Gastrique", url: "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('sleeve-gastrique'),
                faq: getFaqData('sleeve-gastrique'),
                howTo: getHowToData('sleeve-gastrique'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-slate-50">
                {/* HERO INTERVENTION */}
                <InterventionHero
                    title="Sleeve Gastrique en Tunisie : perdez jusqu'à 60% de votre excès de poids"
                    subtitle="Reprenez le contrôle de votre santé grâce à la chirurgie bariatrique. Intervention réalisée par un spécialiste de l'obésité dans une clinique agréée."
                    price="3 500 €"
                    priceOld="8 000 €"
                    imageSrc="/images/heroes/bariatrique-hero.jpg"
                    imageAlt="Sleeve gastrique en Tunisie - Venus Estetika"
                    badge="Chirurgie de l'obésité"
                    devisSlug="sleeve-gastrique"
                    stats="+1 200 patients accompagnés | IMC > 35 | Suivi nutritionnel 12 mois"
                    doctorName="Dr Ramzi Nouira"
                    doctorImage="/images/doctors/dr-ramzi-nouira.jpg"
                    doctorSpecialty="Chirurgie Bariatrique"
                />

                {/* CONTENT */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Qu&apos;est-ce que la Sleeve Gastrectomie ?</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            La sleeve gastrique est une intervention chirurgicale de l&apos;obésité qui consiste à retirer environ 75% de l&apos;estomac. Cette réduction de volume crée une sensation de satiété rapide et diminue la sécrétion de l&apos;hormone de la faim (ghréline), facilitant ainsi une perte de poids durable.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-6 rounded-xl border border-border">
                                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="text-secondary" /> Inclus dans notre tarif
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• Intervention chirurgicale & anesthésie</li>
                                    <li>• Séjour en clinique partenaire (2-3 nuits)</li>
                                    <li>• Hôtel 5 étoiles pour la convalescence</li>
                                    <li>• Transferts aéroport-clinique-hôtel VIP</li>
                                    <li>• Suivi post-opératoire sur 12 mois</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-border">
                                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="text-secondary" /> Le profil idéal
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• IMC (Indice de Masse Corporelle) &gt; 35</li>
                                    <li>• IMC &gt; 30 avec pathologies associées (diabète...)</li>
                                    <li>• Échecs répétés des régimes restrictifs</li>
                                    <li>• Volonté d&apos;adopter une nouvelle hygiène de vie</li>
                                </ul>
                            </div>
                        </div>

                        {/* ANIMATION A++ INTERACTIVE */}
                        <div className="my-16 -mx-4 md:mx-0">
                            <SleeveGastriqueInteractiveAnatomy />
                        </div>

                        {/* Simulateur IMC interactif */}
                        <div className="mb-16">
                            <BmiCalculator variant="full" />
                        </div>
                    </div>
                </section>

                {/* VISITE GUIDEE (Patient Journey) */}
                <GuidedTourTimeline />

                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <FAQAccordion data={getFaqData('sleeve-gastrique')} />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages sleeve gastrique"
                    testimonials={[
                        { name: "Mohamed R.", city: "Paris", quote: "J'ai perdu 45 kg en 8 mois après ma sleeve. Le Dr Nouira m'a suivi avec un vrai programme nutritionnel. Ma vie a changé.", intervention: "Sleeve gastrique", savings: "4 500 €", rating: 5 },
                        { name: "Isabelle T.", city: "Nice", quote: "Après des années de régimes yo-yo, la sleeve m'a enfin libérée. L'équipe Venus est bienveillante et le suivi est sérieux.", intervention: "Sleeve gastrique", savings: "5 000 €", rating: 5 },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIEN RÉFÉRENT */}
                <SurgeonReferenceSection
                    title="Votre chirurgien bariatrique"
                    surgeons={[
                        { name: "Dr Ramzi Nouira", specialty: "Chirurgie Bariatrique (Obésité)", image: "/images/doctors/dr-ramzi-nouira.jpg", experience: "Spécialiste sleeve & bypass" },
                    ]}
                    devisSlug="sleeve-gastrique"
                />
            </div>
        </>
    );
}
