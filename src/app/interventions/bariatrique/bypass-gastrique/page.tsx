import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { BmiCalculator } from "@/components/calculators/BmiCalculator";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { BypassGastriqueInteractiveAnatomy } from "@/components/interventions/BypassGastriqueInteractiveAnatomy";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata = {
    title: "Bypass Gastrique Tunisie | Traitement Obésité & Diabète — 4200€ Tout Compris",
    description: "Le Bypass Gastrique (Roux-en-Y) en Tunisie est la solution radicale contre l'obésité morbide et le diabète. Perte de poids garantie. Séjour VIP inclus.",
};

export default function BypassGastriquePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie Bariatrique", url: "https://venus-estetika.com/interventions/bariatrique" },
        { name: "Bypass Gastrique", url: "https://venus-estetika.com/interventions/bariatrique/bypass-gastrique" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('bypass-gastrique'),
                faq: getFaqData('bypass-gastrique'),
                howTo: getHowToData('bypass-gastrique'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <InterventionHero
                    title="Bypass Gastrique en Tunisie : La Solution Radicale"
                    subtitle="Traitement de l'obésité sévère et du diabète de type 2. Court-circuit gastrique avec suivi nutritionnel sur 12 mois. Séjour 5 étoiles inclus."
                    price="4 200€"
                    priceOld="9 500€"
                    imageSrc="/images/heroes/bariatrique-hero.jpg"
                    imageAlt="Bypass Gastrique en Tunisie - Venus Estetika"
                    badge="Centre d'Excellence Bariatrique"
                    devisSlug="bypass-gastrique"
                    stats="Rémission du diabète chez 80% des patients — clinique accréditée — suivi 12 mois"
                    doctorName="Dr Ramzi Nouira"
                    doctorImage="/images/doctors/dr-ramzi-nouira.jpg"
                    doctorSpecialty="Chirurgie Bariatrique"
                />

                {/* INTRODUCTION & PROFIL IDEAL */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">L&apos;intervention de référence mondiale</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Le Bypass Gastrique (Roux-en-Y) est l&apos;intervention de référence contre l&apos;obésité morbide. Dite &quot;mixte&quot; ou de &quot;malabsorption&quot;, elle est plus complexe et radicale que la Sleeve.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Contrairement à la Sleeve, elle ne fait pas que réduire la taille de l&apos;estomac. Elle modifie physiquement le circuit digestif pour réduire drastiquement l&apos;absorption des graisses et des sucres par l&apos;intestin. Le résultat sur la perte de poids et les maladies métaboliques est fulgurant.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Rémission du Diabète</h4>
                                        <p className="text-sm text-gray-500">Action miracle constatée chez 80% des patients diabétiques de type 2.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Action Anti-Reflux</h4>
                                        <p className="text-sm text-gray-500">L&apos;opération guérit instantanément le reflux gastro-œsophagien (RGO).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Le Profil Idéal pour le Bypass</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "IMC supérieur à 40 (Obésité morbide)",
                                        "IMC > 35 avec pathologies (Diabète, Hypertension)",
                                        "Patients souffrant de reflux gastrique intense",
                                        "Grands mangeurs de sucreries ('Sweet Eaters')",
                                        "Échec d'une précédente intervention (Anneau/Sleeve)"
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

                {/* ANIMATION A++ INTERACTIVE TECHNIQUE */}
                <BypassGastriqueInteractiveAnatomy />

                {/* BMI CALCULATOR SECTION */}
                <section className="py-24 px-4 bg-slate-50 border-t border-gray-200 border-b">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Êtes-vous éligible au Bypass ?</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Calculez votre Indice de Masse Corporelle (IMC) en quelques secondes pour savoir si cette intervention vous est recommandée.
                            </p>
                        </div>
                        <BmiCalculator variant="full" />
                    </div>
                </section>

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Le Forfait Bariatrique Tout Compris</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Vous bénéficiez d&apos;une prise en charge globale, allant de la chirurgie de pointe jusqu&apos;à la convalescence en hôtel 5 étoiles, sans aucun frais caché.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Bypass Gastrique (Roux-en-Y)</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-blue">4 200 €</span>
                                        <span className="text-xl text-gray-400 line-through mb-1">9 500 €</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Intervention par cœlioscopie (Chirurgie)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Anesthésie générale & Médicaments
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Séjour en clinique accréditée (3 nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Hôtel de luxe 5 étoiles (Convalescence de 4 nuits)
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Transferts VIP aéroport & accompagnateur 24/7
                                        </li>
                                    </ul>
                                </div>

                                {/* Convalescence Preview */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Post-Opératoire & Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        L&apos;intervention nécessite au moins 3 à 4 jours d&apos;hospitalisation. L&apos;alimentation sera strictement liquide pendant les deux premières semaines, puis mixée. Des suppléments vitaminiques à vie seront prescrits. La perte de poids est fulgurante sur les 12 premiers mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=bypass-gastrique">Démarrer une télé-consultation gratuite</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <PatientTestimonialSection
                    title="Témoignages Bypass Gastrique"
                    testimonials={[
                        {
                            name: "Thierry L.",
                            city: "Paris",
                            quote: "Diabétique de type 2 depuis 8 ans, j'ai subi un bypass chez Venus Estetika. Deux mois après l'opération, mon médecin traitant a supprimé toute mon insuline. C'est littéralement une renaissance. L'équipe du Dr Nouira est exceptionnelle.",
                            intervention: "Bypass Gastrique",
                            savings: "5 300€",
                            rating: 5
                        },
                        {
                            name: "Christine V.",
                            city: "Toulouse",
                            quote: "J'avais essayé l'anneau gastrique il y a 4 ans sans succès durable. Le bypass a tout changé. En 14 mois, j'ai perdu 48 kg. Le suivi nutritionnel inclus m'a appris à me nourrir correctement. Je ne regrette pas une seule seconde.",
                            intervention: "Bypass Gastrique",
                            savings: "6 000€",
                            rating: 5
                        },
                        {
                            name: "Marc A.",
                            city: "Strasbourg",
                            quote: "Organisation parfaite de A à Z. Le coordinateur était joignable à toute heure, la clinique était propre et moderne, et le Dr Nouira m'a expliqué chaque étape avec beaucoup de pédagogie. Résultat : -38 kg en un an.",
                            intervention: "Bypass Gastrique",
                            savings: "4 800€",
                            rating: 5
                        }
                    ]}
                />

                {/* GUARANTEES */}
                <GuaranteeSection />

                {/* SURGEON REFERENCE */}
                <SurgeonReferenceSection
                    title="Votre chirurgien bariatrique référent"
                    subtitle="Spécialiste du Bypass Gastrique Roux-en-Y, formé en France et reconnu à l'échelle internationale."
                    surgeons={[
                        {
                            name: "Dr Ramzi Nouira",
                            specialty: "Chirurgie Bariatrique & Viscérale",
                            image: "/images/doctors/dr-ramzi-nouira.jpg",
                            experience: "Plus de 1 200 interventions bariatriques"
                        }
                    ]}
                    devisSlug="bypass-gastrique"
                />

                {/* FAQ */}
                <section className="py-16 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                        </div>
                        <FAQAccordion data={getFaqData('bypass-gastrique')} />
                    </div>
                </section>
            </div>
        </>
    );
}
