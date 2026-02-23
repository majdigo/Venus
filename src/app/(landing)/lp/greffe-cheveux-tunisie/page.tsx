import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Star, ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Greffe de Cheveux Tunisie dès 1 500€ — Venus Estetika | Économisez 76%",
    description:
        "Greffe de cheveux FUE en Tunisie à partir de 1 500€ tout compris. Économisez 76% vs la France (8 000€). Dr Samaher Bouchnak, spécialiste trichologue. 2 000 à 5 000 greffons, 1 patient par jour. Devis gratuit en 24h.",
    robots: { index: false, follow: false },
};

export default function GreffeCheveuxtunisiePage() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── 1. HERO ── */}
            <section className="bg-brand-navy text-white py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-5xl">
                    <div className="max-w-3xl">
                        <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
                            Venus Estetika · Greffe FUE · Tunis
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Greffe de Cheveux en Tunisie
                            <span className="block text-brand-blue mt-2">
                                à partir de 1&nbsp;500&nbsp;€
                            </span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                            Retrouvez une chevelure dense et naturelle avec la
                            Dr&nbsp;Samaher Bouchnak, spécialiste en greffe FUE. Un seul
                            patient par jour pour un résultat d&apos;exception — économisez
                            76&nbsp;% par rapport aux tarifs français.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-brand-blue text-brand-navy font-bold text-base px-8 py-4 h-auto rounded-full hover:bg-brand-blue/90 transition-all shadow-lg"
                            >
                                <Link href="/devis?intervention=greffe-cheveux">
                                    Demander mon devis gratuit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <a
                                href="tel:+21650606780"
                                className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all text-base"
                            >
                                Appeler maintenant
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. STATS BAR ── */}
            <section className="bg-brand-teal text-white py-8 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="font-heading text-3xl font-bold">2&nbsp;000+</p>
                            <p className="text-white/80 text-sm mt-1">Greffes réalisées</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">76&nbsp;%</p>
                            <p className="text-white/80 text-sm mt-1">Économies vs France</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">97&nbsp;%</p>
                            <p className="text-white/80 text-sm mt-1">Taux de repousse</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">1&nbsp;patient/j</p>
                            <p className="text-white/80 text-sm mt-1">Attention exclusive</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. 3 BENEFITS ── */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">
                        Pourquoi choisir Venus Estetika ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle2 className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Spécialiste dédiée &amp; 1 patient/jour
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                La Dr&nbsp;Samaher Bouchnak ne réalise qu&apos;une seule greffe
                                par jour pour garantir une attention totale et une précision
                                maximale sur chaque greffon. Entre 2&nbsp;000 et 5&nbsp;000
                                greffons transplantés en une seule session.
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Shield className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Forfait tout compris
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Votre forfait inclut la consultation capillaire, l&apos;extraction
                                et l&apos;implantation FUE, les médicaments post-opératoires,
                                1 nuit en clinique, les transferts et le kit de soins
                                capillaires. Prix fixe, sans surprise.
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Clock className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Suivi repousse 12 mois
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Un protocole de suivi photographique mensuel pendant 12&nbsp;mois.
                                La Dr&nbsp;Bouchnak analyse la repousse à 3, 6 et 12&nbsp;mois.
                                En cas de résultat insuffisant, une retouche gratuite est proposée.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. PRICE COMPARISON ── */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
                        Comparatif des tarifs
                    </h2>
                    <p className="text-gray-500 text-center mb-10 text-base">
                        Jusqu&apos;à 6&nbsp;500&nbsp;€ d&apos;économies, même qualité
                    </p>
                    <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                        <div className="grid grid-cols-3 bg-brand-navy text-white text-sm font-bold uppercase tracking-wide">
                            <div className="py-4 px-6">Prestation</div>
                            <div className="py-4 px-6 text-center border-l border-white/10">
                                France
                            </div>
                            <div className="py-4 px-6 text-center border-l border-white/10 text-brand-blue">
                                Venus Estetika
                            </div>
                        </div>
                        {[
                            ["Greffe FUE (jusqu&apos;à 5 000 greffons)", "6 000 €", "Inclus"],
                            ["Consultation trichologique", "150 €", "Inclus"],
                            ["Médicaments &amp; kit capillaire", "300 €", "Inclus"],
                            ["Nuit clinique &amp; transferts", "550 €", "Inclus"],
                        ].map(([label, france, venus], i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                            >
                                <div
                                    className="py-4 px-6 text-gray-700 font-medium"
                                    dangerouslySetInnerHTML={{ __html: label }}
                                />
                                <div className="py-4 px-6 text-center text-gray-500 border-l border-gray-100 line-through">
                                    {france}
                                </div>
                                <div className="py-4 px-6 text-center text-brand-teal font-bold border-l border-gray-100">
                                    {venus}
                                </div>
                            </div>
                        ))}
                        <div className="grid grid-cols-3 bg-brand-navy/5 border-t-2 border-brand-navy">
                            <div className="py-5 px-6 font-bold text-brand-navy text-base">
                                Total estimé
                            </div>
                            <div className="py-5 px-6 text-center font-bold text-gray-500 border-l border-gray-100 line-through text-base">
                                8&nbsp;000&nbsp;€
                            </div>
                            <div className="py-5 px-6 text-center font-bold text-brand-navy text-base border-l border-gray-100">
                                1&nbsp;500&nbsp;€
                                <span className="block text-brand-teal text-xs font-semibold mt-0.5">
                                    Économie : 6&nbsp;500&nbsp;€
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. TESTIMONIAL ── */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="font-heading text-3xl font-bold text-brand-navy mb-10">
                        Ils ont retrouvé leur chevelure
                    </h2>
                    <div className="bg-brand-navy/5 rounded-2xl p-8 md:p-10 border border-brand-navy/10 text-left relative">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                            ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                            &laquo;&nbsp;À 34 ans, ma calvitie me complexait énormément. J&apos;avais
                            rencontré plusieurs cliniques en France — les devis dépassaient
                            7&nbsp;000&nbsp;€. Chez Venus Estetika, la Dr&nbsp;Bouchnak a pris le
                            temps de tout m&apos;expliquer. 8 mois après la greffe, j&apos;ai une
                            densité que je n&apos;aurais jamais espérée. Résultat naturel,
                            équipe au top.&nbsp;&raquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold font-heading text-base">
                                T
                            </div>
                            <div>
                                <p className="font-bold text-brand-navy text-sm">Thomas R.</p>
                                <p className="text-gray-400 text-xs">
                                    Bruxelles, Belgique · Greffe FUE · 3&nbsp;200 greffons
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. FAQ ── */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="font-heading text-3xl font-bold text-brand-navy text-center mb-10">
                        Questions fréquentes
                    </h2>
                    <div className="space-y-3">
                        {[
                            {
                                q: "Combien de greffons puis-je transplanter en une session ?",
                                a: "Entre 2 000 et 5 000 greffons FUE sont transplantables en une seule journée selon la surface à traiter et la densité de votre zone donneuse. La Dr Bouchnak évalue ce nombre lors de la consultation préopératoire.",
                            },
                            {
                                q: "Quand vais-je voir les résultats de ma greffe ?",
                                a: "Les premiers cheveux transplantés tombent entre la 2e et la 4e semaine (chute de choc normale). La repousse commence vers le 3e mois, et le résultat définitif est visible à 12 mois avec une densité complète.",
                            },
                            {
                                q: "La greffe est-elle douloureuse ? Puis-je reprendre l'avion rapidement ?",
                                a: "La procédure se déroule sous anesthésie locale et est indolore. Vous pouvez prendre l'avion dès le lendemain de l'intervention. Le cuir chevelu est légèrement sensible pendant 3 à 5 jours, traité par des analgésiques simples.",
                            },
                            {
                                q: "La greffe FUE est-elle permanente ?",
                                a: "Oui. Les follicules prélevés en zone donneuse résistante (nuque, tempes) sont génétiquement insensibles à la DHT responsable de la chute. Ils poussent définitivement une fois transplantés, comme les cheveux natifs de la zone donneuse.",
                            },
                        ].map(({ q, a }, i) => (
                            <details
                                key={i}
                                className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                            >
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-brand-navy text-base select-none">
                                    <span>{q}</span>
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-navy/10 text-brand-navy flex items-center justify-center text-lg font-bold transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-4">
                                    {a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. FINAL CTA ── */}
            <section className="bg-brand-blue py-16 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <Users className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        Retrouvez votre confiance
                    </h2>
                    <p className="text-brand-navy/70 text-lg mb-8 max-w-xl mx-auto">
                        Recevez votre analyse capillaire gratuite sous 24&nbsp;h.
                        La Dr&nbsp;Samaher Bouchnak étudie votre cas personnellement.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-brand-navy text-white font-bold text-base px-10 py-4 h-auto rounded-full hover:bg-brand-navy/90 transition-all shadow-xl"
                    >
                        <Link href="/devis?intervention=greffe-cheveux">
                            Demander mon devis gratuit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <p className="text-brand-navy/50 text-xs mt-4">
                        Sans engagement · Réponse sous 24h · 100% confidentiel
                    </p>
                </div>
            </section>

        </div>
    );
}
