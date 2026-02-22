import { getFaqData } from '@/lib/schema/faq';
import { ArrowRight, CheckCircle2, Shield, Star, Clock, HeartPulse, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Mommy Makeover Tunisie : Prix & Avis (Ventre + Seins) | Venus Estetika',
    description: 'Restaurez votre corps après la grossesse. Forfait Mommy Makeover (Abdominoplastie + Lipo + Seins) tout compris en Tunisie à partir de 4500€.',
};

export default function MommyMakeoverPage() {
    const faqSchema = getFaqData('mommy-makeover');
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
                        src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2000&auto=format&fit=crop"
                        alt="Résultat Mommy Makeover"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-sm mb-6">
                        <Sparkles className="w-4 h-4 text-brand-gold" />
                        Package Chirurgie Post-Maternité
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
                        Mommy Makeover en <span className="text-brand-gold">Tunisie</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Retrouvez votre corps d'avant grossesse en une seule intervention. Combinez chirurgies de l'abdomen et des seins dans un forfait VIP tout compris 5 fois moins cher qu'en France.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8 h-14 rounded-xl w-full sm:w-auto shadow-lg shadow-brand-gold/20">
                            <Link href="/devis?intervention=mommy-makeover">
                                Obtenir mon devis sur mesure <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <div className="text-white/80 text-sm font-medium flex items-center gap-2">
                            Package dès <span className="text-2xl text-white font-bold block">4 500€</span>
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
                                <p className="text-sm text-gray-500">4 à 6 heures</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-gold" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Anesthésie & Clinique</h4>
                                <p className="text-sm text-gray-500">Générale / 2-3 nuits</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Convalescence</h4>
                                <p className="text-sm text-gray-500">3 à 4 semaines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS INCLUDED SECTION */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">Sur Mesure</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                Que comprend un Mommy Makeover ?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Il ne s'agit pas d'une intervention fixe, mais d'une combinaison de chirurgies plastiques personnalisées selon les séquelles de vos grossesses. Plutôt que de subir plusieurs anesthésies et périodes de récupération, nous traitons tout en un seul temps opératoire.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Chirurgie de l'Abdomen (Abdominoplastie)</h4>
                                        <p className="text-gray-600 mt-1">Élimine le tablier abdominal, répare le diastasis (muscles écartés) et rentre le ventre.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Chirurgie Mammaire</h4>
                                        <p className="text-gray-600 mt-1">Lifting mammaire (cure de ptôse) pour remonter les seins, avec ou sans ajout de prothèses Motiva selon votre volume.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Liposuccion Tumescente</h4>
                                        <p className="text-gray-600 mt-1">Aspiration des graisses tenaces (hanches, culotte de cheval, cuisses) pour affiner la silhouette globale.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
                                alt="Abdominoplastie et Lifting Mammaire"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 px-4 bg-slate-50" id="faq">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">FAQ Post-Grossesse</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq: any, index: number) => (
                            <div key={index} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
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
