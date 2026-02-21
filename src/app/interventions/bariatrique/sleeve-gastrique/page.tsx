import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { BmiCalculator } from "@/components/calculators/BmiCalculator";

export default function SleeveGastriquePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie Bariatrique", url: "https://venus-estetika.com/interventions/bariatrique" },
        { name: "Sleeve Gastrique", url: "https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique" }
    ];

    return (
        <>
            <JsonLd data={getMedicalProcedureData('sleeve-gastrique')} />
            <JsonLd data={getFaqData('sleeve-gastrique')} />
            <JsonLd data={getHowToData('sleeve-gastrique')} />
            <JsonLd data={getBreadcrumbData(breadcrumbs)} />

            <main className="min-h-screen bg-slate-50">
                {/* HERO INTERVENTION */}
                <section className="bg-primary text-primary-foreground py-20 px-4 mt-20">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sleeve Gastrique en Tunisie</h1>
                        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                            Perdez jusqu&apos;à 60% de votre excès de poids. Séjour de luxe tout compris à partir de <b className="text-secondary text-2xl">3 500€</b> <span className="line-through text-sm opacity-60 ml-2">8 000€ en France</span>.
                        </p>
                        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                            Obtenir un devis personnalisé <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </section>

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

                        {/* Simulateur IMC interactif */}
                        <div className="mb-16">
                            <BmiCalculator variant="full" />
                        </div>

                        {/* Synchronized AI/UI FAQ */}
                        <FAQAccordion data={getFaqData('sleeve-gastrique')} />

                    </div>
                </section>
            </main>
        </>
    );
}
