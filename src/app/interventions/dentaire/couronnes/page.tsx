import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Shield, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata = {
    title: "Couronnes Dentaires Tunisie | Zircone dès 250€ — Venus Estetika",
    description: "Couronnes dentaires en Tunisie : zircone, céramo-métallique. Restauration dent abîmée. Laboratoire intégré. Dès 250€/couronne.",
};

export default function CouronnesDentairesPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Dentisterie Esthétique", url: "https://venus-estetika.com/interventions/dentaire" },
        { name: "Couronnes Dentaires", url: "https://venus-estetika.com/interventions/dentaire/couronnes" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('couronnes'),
                faq: getFaqData('couronnes'),
                howTo: getHowToData('couronnes'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <InterventionHero
                    title="Couronnes dentaires en Tunisie : restaurez vos dents avec précision"
                    subtitle="Reconstituez une dent abîmée, dévitalisée ou fracturée avec nos couronnes zircone sur-mesure, fabriquées en 72h dans notre laboratoire intégré."
                    price="250 €"
                    priceOld="700-1 200 €"
                    imageSrc="/images/heroes/dentaire-hero.jpg"
                    imageAlt="Couronnes Dentaires Zircone Tunisie - Venus Estetika"
                    badge="Prothèse Dentaire Premium"
                    devisSlug="couronnes"
                    stats="+4 000 couronnes posées | Note 4.9/5 sur Google | Labo certifié ISO"
                    doctorName="Dr Ramses Mouelhi"
                    doctorImage="/images/doctors/dr-ramses-mouelhi.jpg"
                    doctorSpecialty="Chirurgien Dentiste, Implantologie & Facettes"
                />

                {/* INTRODUCTION & TECHNIQUES */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La couronne dentaire : solidité et esthétique au sommet</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    La couronne dentaire est une prothèse qui recouvre entièrement une dent naturelle fragilisée pour lui redonner forme, solidité et esthétique. Elle est indiquée pour les dents dévitalisées, très cariées, fracturées ou dans le cadre d&apos;un traitement implantaire.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Notre laboratoire prothétique intégré, certifié ISO, fabrique chaque couronne sur-mesure à partir d&apos;empreintes optiques 3D pour un ajustement parfait et une esthétique inégalée.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Couronne Zircone</h4>
                                        <p className="text-sm text-gray-500">Matériau le plus résistant et esthétique. Translucidité naturelle identique à l&apos;émail, sans métal, sans noircissement des gencives.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Couronne Céramo-Métallique</h4>
                                        <p className="text-sm text-gray-500">Option économique robuste. Armature en métal + céramique. Idéale pour les molaires soumises à de fortes contraintes masticatoires.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans votre forfait</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Chirurgien dentiste spécialisé en prothèse",
                                        "Empreinte optique 3D de précision",
                                        "Fabrication au laboratoire intégré (72h)",
                                        "Couronne provisoire pendant la fabrication",
                                        "Hôtel 5 étoiles 5 nuits (pack 6+ couronnes)",
                                        "Transferts VIP aéroport-clinique",
                                        "Suivi et ajustement post-pose"
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
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Tarifs Couronnes Dentaires Tunisie</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Des prix transparents pour chaque type de couronne, fabriquée sur-mesure dans notre laboratoire intégré en 72h.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-8">Nos Tarifs par Couronne</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="border border-brand-blue rounded-xl p-5 bg-brand-blue/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Couronne Zircone</span>
                                                <span className="text-2xl font-bold text-brand-blue">250 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Matériau premium, esthétique maximale. <span className="line-through">700-1 200€ en France</span></p>
                                        </div>
                                        <div className="border border-gray-100 rounded-xl p-5 hover:border-brand-blue transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Couronne Céramo-Métallique</span>
                                                <span className="text-2xl font-bold text-brand-blue">180 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Robuste et économique. <span className="line-through">500-800€ en France</span></p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                                            Pack 6+ couronnes : hôtel et transferts inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                                            Fabrication laboratoire intégré certifié ISO
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Le Déroulement (4-5 Jours)</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Jour 1 : consultation, empreinte optique 3D et préparation des dents. Des couronnes provisoires sont posées pendant que notre laboratoire intégré fabrique vos couronnes définitives en zircone ou céramo-métallique en 72h. Jour 4-5 : pose des couronnes définitives et ajustements fins de l&apos;occlusion.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=couronnes">Générer mon devis personnalisé</Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Questions Fréquentes sur les Couronnes Dentaires</h2>
                        </div>
                        <FAQAccordion data={getFaqData('couronnes')} />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Ils ont retrouvé un sourire fonctionnel et esthétique"
                    testimonials={[
                        {
                            name: "Stéphane M.",
                            city: "Lyon",
                            quote: "J'avais 8 dents à couronner suite à des caries profondes. Le labo intégré a tout fabriqué en 72h. Les couronnes zircone sont parfaites, indiscernables des vraies dents. Un séjour très bien organisé.",
                            intervention: "8 couronnes zircone",
                            savings: "3 800 €",
                            rating: 5
                        },
                        {
                            name: "Nathalie F.",
                            city: "Marseille",
                            quote: "Ma dent dévitalisée s'était fracturée. La couronne zircone posée à Tunis est d'une qualité irréprochable. Ajustement parfait de l'occlusion, aucune gêne depuis la pose. Je reviens pour les 3 autres.",
                            intervention: "Couronne zircone unitaire",
                            savings: "650 €",
                            rating: 5
                        },
                        {
                            name: "Antoine B.",
                            city: "Bruxelles",
                            quote: "Pack 12 couronnes avec séjour hôtel inclus. Rapport qualité-prix exceptionnel par rapport à la Belgique. Le Dr Mouelhi prend le temps d'expliquer chaque étape. Je repars avec un sourire entièrement refait.",
                            intervention: "Pack 12 couronnes tout inclus",
                            savings: "9 000 €",
                            rating: 5
                        }
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIEN RÉFÉRENT */}
                <SurgeonReferenceSection
                    title="Votre prothésiste dentaire référent"
                    subtitle="Un chirurgien dentiste expert en prothèse et restauration coronaire, travaillant avec notre laboratoire intégré certifié ISO."
                    surgeons={[
                        {
                            name: "Dr Ramses Mouelhi",
                            specialty: "Chirurgien Dentiste — Implantologie & Facettes",
                            image: "/images/doctors/dr-ramses-mouelhi.jpg",
                            experience: "15 ans d'expertise en prothèse dentaire"
                        }
                    ]}
                    devisSlug="couronnes"
                />
            </div>
        </>
    );
}
