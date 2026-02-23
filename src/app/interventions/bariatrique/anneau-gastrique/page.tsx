import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata = {
    title: "Anneau Gastrique Tunisie | Dès 2 800€ Tout Compris — Venus Estetika",
    description: "Anneau gastrique ajustable en Tunisie. Intervention réversible pour IMC 30-40. Suivi nutritionnel 12 mois. Dès 2 800€ tout compris.",
};

export default function AnneauGastriquePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie Bariatrique", url: "https://venus-estetika.com/interventions/bariatrique" },
        { name: "Anneau Gastrique", url: "https://venus-estetika.com/interventions/bariatrique/anneau-gastrique" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('anneau-gastrique'),
                faq: getFaqData('anneau-gastrique'),
                howTo: getHowToData('anneau-gastrique'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <InterventionHero
                    title="Anneau gastrique en Tunisie : une solution réversible contre l'obésité"
                    subtitle="Perdez durablement du poids avec l'anneau gastrique ajustable, la seule intervention bariatrique 100% réversible."
                    price="2 800€"
                    priceOld="5 000-8 000€"
                    imageSrc="/images/heroes/bariatrique-hero.jpg"
                    imageAlt="Anneau Gastrique en Tunisie - Venus Estetika"
                    badge="Chirurgie Bariatrique"
                    devisSlug="anneau-gastrique"
                    stats="Séjour tout compris — clinique accréditée — suivi nutritionnel 12 mois"
                    doctorName="Dr Ramzi Nouira"
                    doctorImage="/images/doctors/dr-ramzi-nouira.jpg"
                    doctorSpecialty="Chirurgie Bariatrique"
                />

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">L&apos;anneau gastrique : une restriction douce et contrôlée</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    L&apos;anneau gastrique ajustable est un dispositif en silicone médical placé chirurgicalement autour de la partie supérieure de l&apos;estomac. Il crée une petite poche qui ralentit le passage des aliments, induisant une sensation de satiété rapide avec de petites quantités.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    L&apos;intervention est réalisée sous laparoscopie (3 petites incisions) et dure environ 45 minutes. Le volume de l&apos;anneau est réglable via un boîtier sous-cutané, permettant des ajustements réguliers selon votre progression.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Anneau Ajustable</h4>
                                        <p className="text-sm text-gray-500">Anneau en silicone placé autour de l&apos;estomac, ajustable par un boîtier sous-cutané sans nouvelle intervention chirurgicale.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Réversibilité</h4>
                                        <p className="text-sm text-gray-500">Seule intervention bariatrique 100% réversible. Retrait possible à tout moment, sans modification permanente de l&apos;anatomie digestive.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans votre forfait</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Chirurgien bariatrique certifié",
                                        "Anneau (marque médicale certifiée CE)",
                                        "Clinique partenaire 1-2 nuits",
                                        "Hôtel 5 étoiles 5 nuits",
                                        "Transferts VIP aéroport-clinique-hôtel",
                                        "Suivi nutritionnel personnalisé 12 mois"
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
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarif Anneau Gastrique Tout Compris</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Un prix transparent, sans surprises. L&apos;intégralité de votre prise en charge médicale et de votre séjour en Tunisie est incluse.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Anneau Gastrique Ajustable</h3>

                                    <div className="flex items-end gap-4 mb-8">
                                        <span className="text-5xl font-bold text-brand-blue">2 800 €</span>
                                        <span className="text-xl text-gray-400">tout compris</span>
                                        <span className="text-sm text-gray-400 line-through mb-1 ml-2">5 000-8 000€</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Alimentation liquide 2 semaines post-op
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Alimentation mixée les 2 semaines suivantes
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Perte de poids attendue : 15-25 kg la 1re année
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Ajustements réguliers du serrage inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                                            Profil idéal : IMC entre 30 et 40
                                        </li>
                                    </ul>
                                </div>

                                {/* Convalescence Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Convalescence & Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        La reprise des activités légères est possible dès 5 à 7 jours. L&apos;alimentation évolue progressivement sur 4 semaines. Des ajustements réguliers du serrage de l&apos;anneau sont planifiés lors du suivi nutritionnel sur 12 mois pour optimiser votre perte de poids.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=anneau-gastrique">Générer mon devis personnalisé</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <PatientTestimonialSection
                    title="Témoignages Anneau Gastrique"
                    testimonials={[
                        {
                            name: "Isabelle M.",
                            city: "Lyon",
                            quote: "J'ai longtemps hésité entre la sleeve et l'anneau. Le fait que l'anneau soit réversible a été décisif pour moi. L'équipe du Dr Nouira m'a accompagnée à chaque étape. En 10 mois, j'ai perdu 22 kg et je me sens enfin libre.",
                            intervention: "Anneau Gastrique",
                            savings: "3 800€",
                            rating: 5
                        },
                        {
                            name: "Patrick D.",
                            city: "Bordeaux",
                            quote: "Opération sans douleur, récupération rapide. Le séjour à l'hôtel 5 étoiles à Tunis était vraiment agréable. Le suivi nutritionnel sur 12 mois m'a aidé à changer mes habitudes durablement. Je recommande Venus Estetika sans hésiter.",
                            intervention: "Anneau Gastrique",
                            savings: "4 200€",
                            rating: 5
                        },
                        {
                            name: "Nathalie B.",
                            city: "Marseille",
                            quote: "Mon IMC était à 36, avec des douleurs articulaires. En France, les délais étaient de 18 mois. En Tunisie, tout s'est fait en 3 semaines. L'anneau est bien ajusté, la perte de poids progressive, et je suis enfin hors de danger pour mes genoux.",
                            intervention: "Anneau Gastrique",
                            savings: "5 000€",
                            rating: 5
                        }
                    ]}
                />

                {/* GUARANTEES */}
                <GuaranteeSection />

                {/* SURGEON REFERENCE */}
                <SurgeonReferenceSection
                    title="Votre chirurgien bariatrique référent"
                    subtitle="Expert en chirurgie bariatrique, formé en France et membre de l'Ordre National des Médecins de Tunisie."
                    surgeons={[
                        {
                            name: "Dr Ramzi Nouira",
                            specialty: "Chirurgie Bariatrique & Viscérale",
                            image: "/images/doctors/dr-ramzi-nouira.jpg",
                            experience: "Plus de 1 200 interventions bariatriques"
                        }
                    ]}
                    devisSlug="anneau-gastrique"
                />

                {/* FAQ */}
                <section className="py-16 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur l&apos;Anneau Gastrique</h2>
                        </div>
                        <FAQAccordion data={getFaqData('anneau-gastrique')} />
                    </div>
                </section>
            </div>
        </>
    );
}
