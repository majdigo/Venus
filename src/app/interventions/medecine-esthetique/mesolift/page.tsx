import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, FlaskConical, Sparkles, RefreshCw, HeartPulse } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata = {
    title: "Mésolift Tunisie | Mésothérapie Visage dès 150€ — Venus Estetika",
    description: "Mésolift (mésothérapie du visage) en Tunisie : cocktail vitamines, acide hyaluronique et antioxydants. Coup d'éclat immédiat. Dès 150€/séance.",
};

export default function MesoliftPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Médecine Esthétique", url: "https://venus-estetika.com/interventions/medecine-esthetique" },
        { name: "Mésolift", url: "https://venus-estetika.com/interventions/medecine-esthetique/mesolift" },
    ];

    const whatItTreats = [
        "Peau fatiguée et déshydratée",
        "Teint terne",
        "Ridules de déshydratation",
        "Préparation et entretien anti-âge",
    ];

    const pricingRows = [
        { label: "1 séance mésolift", price: "150 €", france: "250–400 €" },
        { label: "Cure 3 séances", price: "400 €", france: "750–1 200 €" },
        { label: "Mésolift + PRP", price: "250 €/séance", france: "400–600 €" },
    ];

    const testimonials = [
        {
            name: "Laure B.",
            city: "Bordeaux",
            quote: "Je revenais d'une période très stressante et ma peau avait vraiment l'air fatiguée. Après la première séance de mésolift, j'ai eu l'impression de retrouver mon teint de 10 ans en arrière. Mes amies m'ont toutes demandé ce que j'avais fait — j'avais l'air reposée et lumineuse.",
            intervention: "Mésolift — cure éclat",
            savings: "200 €",
            rating: 5,
        },
        {
            name: "Hélène D.",
            city: "Strasbourg",
            quote: "J'ai fait la cure complète de 3 séances pendant mon séjour d'une semaine en Tunisie. Le protocole était vraiment personnalisé — le médecin a adapté le cocktail à ma peau mixte. Résultat spectaculaire : peau hydratée, pores réduits, teint unifié. Je rentre au moins une fois par an maintenant.",
            intervention: "Cure mésolift 3 séances",
            savings: "450 €",
            rating: 5,
        },
        {
            name: "Virginie M.",
            city: "Nantes",
            quote: "J'ai combiné le mésolift avec mon lifting cervico-facial. Le Dr Bouchnak m'a conseillée sur le protocole pré-opératoire pour optimiser la qualité de ma peau avant l'intervention. Le suivi était impeccable et le résultat global dépasse mes attentes.",
            intervention: "Mésolift pré-opératoire",
            savings: "280 €",
            rating: 5,
        },
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('mesolift'),
                faq: getFaqData('mesolift'),
                howTo: getHowToData('mesolift'),
                breadcrumb: getBreadcrumbData(breadcrumbs),
            }} />

            <div className="min-h-screen bg-white">

                <InterventionHero
                    title="Mésolift en Tunisie : le cocktail vitaminé pour une peau éclatante"
                    subtitle="Micro-injections d'un cocktail personnalisé de vitamines, AH et antioxydants directement dans le derme. Coup d'éclat immédiat, peau revitalisée en profondeur."
                    price="150€/séance"
                    priceOld="250–400€"
                    imageSrc="/images/heroes/medecine-esthetique-hero.jpg"
                    imageAlt="Mésolift mésothérapie visage Tunisie — Venus Estetika"
                    badge="Médecine Esthétique"
                    devisSlug="mesolift"
                    stats="Éclat immédiat · Protocole 3 séances · Aucune éviction sociale"
                    doctorName="Dr Samaher Bouchnak"
                    doctorImage="/images/doctors/dr-samaher-bouchnak.jpg"
                    doctorSpecialty="Médecine Esthétique"
                />

                {/* INTRODUCTION */}
                <section className="py-20 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Description */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                    Un booster d'éclat et d'hydratation pour votre peau
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                    Le mésolift (ou mésothérapie du visage) consiste à injecter dans le derme superficiel un cocktail personnalisé de vitamines, d'acide hyaluronique non réticulé, d'acides aminés et d'antioxydants. Le résultat : une peau intensément hydratée, un teint unifié et un éclat immédiatement perceptible.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    À la différence des injections de comblement classiques, le mésolift n'a pas d'effet volumateur — il travaille sur la qualité intrinsèque de la peau. C'est un traitement idéal en cure ou en complément de tout protocole anti-âge.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <FlaskConical className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Mésolift Classique</h4>
                                        <p className="text-sm text-gray-500">Micro-injections d'un cocktail vitaminé personnalisé dans le derme pour revitaliser et hydrater.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <HeartPulse className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Mésolift + PRP</h4>
                                        <p className="text-sm text-gray-500">Ajout de plasma riche en plaquettes (PRP) pour une régénération cellulaire intensive et durable.</p>
                                    </div>
                                </div>
                            </div>

                            {/* What it treats */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                                    Pour qui est indiqué le mésolift ?
                                </h3>
                                <div className="space-y-3 mb-8">
                                    {whatItTreats.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                            <CheckCircle2 className="text-brand-blue w-5 h-5 shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-brand-navy/5 rounded-xl p-4 border border-brand-navy/10">
                                    <div className="flex items-start gap-3">
                                        <RefreshCw className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-brand-navy">Convalescence :</span> Aucune éviction sociale. Rougeurs légères 2-4h. Éclat immédiat. Protocole idéal : 3 séances espacées de 15 jours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GUIDED TOUR */}
                <GuidedTourTimeline />

                {/* PRICING */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
                                Tarifs Mésolift en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Un soin médical de qualité européenne à des tarifs accessibles, idéal à intégrer dans votre séjour en Tunisie.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Grille tarifaire</h3>
                                    <div className="space-y-4">
                                        {pricingRows.map((row, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                <span className="text-gray-700 font-medium text-sm pr-4">{row.label}</span>
                                                <div className="text-right shrink-0">
                                                    <span className="text-brand-blue font-bold text-lg block">{row.price}</span>
                                                    <span className="text-xs text-gray-400 line-through">{row.france}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA panel */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Un soin complémentaire à votre séjour
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                        Le mésolift s'intègre parfaitement dans un séjour médical combiné : réalisez votre cure de 3 séances lors de votre semaine en Tunisie et repartez avec une peau transformée. Il peut également accompagner une intervention chirurgicale pour optimiser la qualité de peau en pré ou post-opératoire.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=mesolift">
                                            Demander mon devis personnalisé
                                        </Link>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
                                Questions Fréquentes sur le Mésolift
                            </h2>
                        </div>
                        <FAQAccordion data={getFaqData('mesolift')} />
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <PatientTestimonialSection
                    title="Un éclat retrouvé, des patientes ravies"
                    testimonials={testimonials}
                />

                {/* GUARANTEE */}
                <GuaranteeSection />

                {/* SURGEON */}
                <SurgeonReferenceSection
                    title="Votre médecin esthétique référente"
                    subtitle="Dr Samaher Bouchnak, spécialiste en médecine esthétique, diplômée et inscrite à l'Ordre National des Médecins de Tunisie."
                    surgeons={[
                        {
                            name: "Dr Samaher Bouchnak",
                            specialty: "Médecine Esthétique",
                            image: "/images/doctors/dr-samaher-bouchnak.jpg",
                            experience: "12 ans d'expérience en injections",
                        },
                    ]}
                    devisSlug="mesolift"
                />

            </div>
        </>
    );
}
