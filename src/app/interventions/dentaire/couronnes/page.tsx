import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Shield, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
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
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-brand-navy/90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4 text-brand-gold" />
                                Prothèse Dentaire Premium
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Couronnes dentaires en Tunisie : restaurez vos dents avec précision
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                Reconstituez une dent abîmée, dévitalisée ou fracturée avec nos couronnes zircone sur-mesure, fabriquées en 72h dans notre laboratoire intégré. Dès <b className="text-brand-gold text-2xl">250€/couronne</b> <span className="line-through text-sm opacity-60 ml-2">700-1 200€ en France</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis?intervention=couronnes">
                                        Obtenir mon devis en 24h <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

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
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Award className="w-8 h-8 text-brand-gold mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Couronne Zircone</h4>
                                        <p className="text-sm text-gray-500">Matériau le plus résistant et esthétique. Translucidité naturelle identique à l&apos;émail, sans métal, sans noircissement des gencives.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                                        <Shield className="w-8 h-8 text-brand-gold mb-3" />
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
                                            <CheckCircle2 className="text-brand-gold w-6 h-6 shrink-0" />
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
                                        <div className="border border-brand-gold rounded-xl p-5 bg-brand-gold/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Couronne Zircone</span>
                                                <span className="text-2xl font-bold text-brand-gold">250 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Matériau premium, esthétique maximale. <span className="line-through">700-1 200€ en France</span></p>
                                        </div>
                                        <div className="border border-gray-100 rounded-xl p-5 hover:border-brand-gold transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-brand-navy">Couronne Céramo-Métallique</span>
                                                <span className="text-2xl font-bold text-brand-gold">180 €</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Robuste et économique. <span className="line-through">500-800€ en France</span></p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                            Pack 6+ couronnes : hôtel et transferts inclus
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                            Fabrication laboratoire intégré certifié ISO
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Details */}
                                <div className="p-8 bg-slate-50 flex flex-col justify-center">
                                    <Sparkles className="w-10 h-10 text-brand-gold mb-4" />
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
            </div>
        </>
    );
}
