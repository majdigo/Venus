import { getFaqData } from '@/lib/schema/faq';
import { ArrowRight, CheckCircle2, Shield, Star, Clock, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
            <section className="relative pt-32 pb-20 px-4 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
                        alt="Résultat Lifting des Cuisses"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-sm mb-6">
                        <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                        Silhouette Post-Accouchement & Bariatrique
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
                        Lifting des Cuisses en <span className="text-brand-gold">Tunisie</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Éliminez le frottement et l'excès de peau. La cruroplastie sculpte et raffermit l'intérieur de vos cuisses pour retrouver des jambes fuselées et confortables.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8 h-14 rounded-xl w-full sm:w-auto shadow-lg shadow-brand-gold/20">
                            <Link href="/devis?intervention=lifting-cuisses">
                                Devis Cruroplastie <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <div className="text-white/80 text-sm font-medium flex items-center gap-2">
                            Package Tout Inclus à <span className="text-2xl text-white font-bold block">2 500€</span>
                        </div>
                    </div>
                </div>
            </section>

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
                            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-gold" />
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
                                <p className="text-sm text-gray-500">Obrigatoire (4 Semaines)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION USING PROVIDED SCHEMA DATA */}
            <section className="py-24 px-4 bg-white" id="faq">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">Détails de l'Opération</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq: any, index: number) => (
                            <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
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
        </div>
    );
}
