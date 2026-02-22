import { getFaqData } from '@/lib/schema/faq';
import { ArrowRight, CheckCircle2, Shield, Star, Clock, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'BBL Tunisie (Brazilian Butt Lift) Prix & Avis | Venus Estetika',
    description: 'Augmentation des fesses par lipofilling en Tunisie. Résultat naturel et définitif sans prothèses. Prix forfait tout compris à partir de 3200€.',
};

export default function BBLPage() {
    const faqSchema = getFaqData('bbl');
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
                        alt="Résultat BBL"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-sm mb-6">
                        <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                        Top Intervention 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
                        BBL : Brazilian Butt Lift en <span className="text-brand-gold">Tunisie</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Sculptez votre taille en sablier. Liposuccion HD de l'abdomen et des hanches, suivie d'une réinjection de votre propre graisse pour des fesses rebondies et naturelles.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8 h-14 rounded-xl w-full sm:w-auto shadow-lg shadow-brand-gold/20">
                            <Link href="/devis?intervention=bbl">
                                Demander un Devis Gratuit <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <div className="text-white/80 text-sm font-medium flex items-center gap-2">
                            À partir de <span className="text-2xl text-white font-bold block">3 200€</span> <span className="opacity-70">(Vol + Hôtel 5★ inclus)</span>
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
                                <h4 className="font-bold text-gray-900">Durée d'intervention</h4>
                                <p className="text-sm text-gray-500">2 à 3 heures (Sous AG)</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-gold" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Résultat Définitif</h4>
                                <p className="text-sm text-gray-500">6 mois (Permanent)</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Convalescence</h4>
                                <p className="text-sm text-gray-500">2 semaines (Coussin BBL)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION USING PROVIDED SCHEMA DATA */}
            <section className="py-24 px-4 bg-white" id="faq">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">Questions Fréquentes</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Tout Savoir sur le BBL</h2>
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
