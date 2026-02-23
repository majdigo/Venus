import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Sparkles, RefreshCw, Sun } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Link from 'next/link';

export const metadata = {
    title: "Peeling Tunisie | Peeling Moyen TCA dès 250€ — Venus Estetika",
    description: "Peeling chimique en Tunisie : renouvellement cutané, éclat du teint, traitement taches et cicatrices d'acné. Dès 250€.",
};

export default function PeelingPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Médecine Esthétique", url: "https://venus-estetika.com/interventions/medecine-esthetique" },
        { name: "Peeling", url: "https://venus-estetika.com/interventions/medecine-esthetique/peeling" },
    ];

    const whatItTreats = [
        "Taches pigmentaires",
        "Cicatrices d'acné",
        "Teint terne et irrégulier",
        "Ridules superficielles",
        "Pores dilatés",
    ];

    const pricingRows = [
        { label: "Peeling moyen TCA", price: "250 €", france: "400–700 €" },
        { label: "Peeling superficiel (acide glycolique)", price: "150 €", france: "200–400 €" },
        { label: "Cure 3 séances (superficiel)", price: "400 €", france: "600–1 200 €" },
    ];

    const testimonials = [
        {
            name: "Amandine C.",
            city: "Marseille",
            quote: "J'avais des taches pigmentaires importantes sur le front et les joues, séquelles d'une grossesse. Après le peeling TCA, le résultat au bout de 3 semaines était bluffant. La moitié des taches avaient disparu et le teint était parfaitement unifié. Le Dr Bouchnak m'a très bien préparée au protocole de soin post-peeling.",
            intervention: "Peeling moyen TCA — taches pigmentaires",
            savings: "300 €",
            rating: 5,
        },
        {
            name: "Justine F.",
            city: "Lille",
            quote: "Des cicatrices d'acné me complexaient depuis l'adolescence. J'avais essayé des produits en pharmacie sans succès. Le peeling chimique a vraiment creusé dans ces cicatrices — la peau s'est renouvelée et les marques se sont considérablement atténuées. Je suis enfin à l'aise sans fond de teint.",
            intervention: "Peeling TCA — cicatrices acné",
            savings: "250 €",
            rating: 5,
        },
        {
            name: "Patricia G.",
            city: "Nice",
            quote: "J'ai opté pour la cure de 3 séances de peeling superficiel pendant mon séjour à Tunis. C'était parfait : aucune éviction sociale, je pouvais profiter de mon séjour entre les séances. Mon teint est maintenant lumineux et mes pores sont nettement moins visibles. Je reviendrai chaque année.",
            intervention: "Cure peeling glycolique 3 séances",
            savings: "400 €",
            rating: 5,
        },
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('peeling'),
                faq: getFaqData('peeling'),
                howTo: getHowToData('peeling'),
                breadcrumb: getBreadcrumbData(breadcrumbs),
            }} />

            <div className="min-h-screen bg-white">

                <InterventionHero
                    title="Peeling en Tunisie : renouvelez votre peau en profondeur"
                    subtitle="Peeling chimique TCA ou glycolique réalisé par un médecin esthétique. Taches, cicatrices d'acné, teint terne — une solution dermatologique éprouvée."
                    price="250€"
                    priceOld="400–700€"
                    imageSrc="/images/heroes/medecine-esthetique-hero.jpg"
                    imageAlt="Peeling chimique TCA Tunisie — Venus Estetika"
                    badge="Médecine Esthétique"
                    devisSlug="peeling"
                    stats="Résultats visibles en 2–3 semaines · TCA ou glycolique · Sur mesure"
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
                                    Un renouvellement cutané contrôlé et précis
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                    Le peeling chimique consiste à appliquer une solution acide sur la peau pour en provoquer un renouvellement contrôlé. La couche superficielle ou moyenne de la peau est éliminée, révélant une peau neuve, plus lisse, plus lumineuse et aux teintes uniformisées.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Le type de peeling (superficiel ou moyen) est déterminé par le médecin en fonction de votre type de peau, de la profondeur des imperfections à traiter et de votre tolérance. Le peeling TCA offre des résultats marqués sur les taches et cicatrices d'acné.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Zap className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Peeling Moyen (TCA)</h4>
                                        <p className="text-sm text-gray-500">Acide trichloroacétique pour traitement en profondeur. Résultat marqué sur taches et cicatrices.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-blue transition-colors">
                                        <Sun className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Peeling Superficiel</h4>
                                        <p className="text-sm text-gray-500">Acide glycolique pour éclat et entretien. Aucune éviction sociale, idéal en cure répétée.</p>
                                    </div>
                                </div>
                            </div>

                            {/* What it treats */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                                    Quels problèmes traite le peeling ?
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
                                            <span className="font-semibold text-brand-navy">Convalescence :</span> Peeling moyen TCA — desquamation 5-7 jours, éviction sociale 1 semaine. Peeling superficiel — léger tiraillement 24h, reprise immédiate.
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
                                Tarifs Peeling Chimique en Tunisie
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Des prix jusqu'à 3x inférieurs à la France pour un acte médical réalisé par un dermatologue ou médecin esthétique qualifié.
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
                                        Intégré à votre séjour médical
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                        Le peeling se combine idéalement avec d'autres traitements de médecine esthétique ou peut être réalisé avant ou après une intervention chirurgicale lors de votre séjour en Tunisie. Un protocole personnalisé vous sera proposé lors du bilan médical.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=peeling">
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
                                Questions Fréquentes sur le Peeling
                            </h2>
                        </div>
                        <FAQAccordion data={getFaqData('peeling')} />
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <PatientTestimonialSection
                    title="Teint transformé, patientes conquises"
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
                    devisSlug="peeling"
                />

            </div>
        </>
    );
}
