import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Star, ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Rhinoplastie Tunisie dès 2 200€ — Venus Estetika | Économisez 60%",
    description:
        "Rhinoplastie en Tunisie à partir de 2 200€ tout compris. Économisez 60% vs la France (5 500€). Dr Atef Ghedira, chirurgien spécialisé. Techniques fermée, ouverte et ultrasonique. Devis gratuit en 24h.",
    robots: { index: false, follow: false },
};

export default function RhinoplastieTunisiePage() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── 1. HERO ── */}
            <section className="bg-brand-navy text-white py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-5xl">
                    <div className="max-w-3xl">
                        <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
                            Venus Estetika · Tunis, Tunisie
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Rhinoplastie en Tunisie
                            <span className="block text-brand-blue mt-2">
                                à partir de 2&nbsp;200&nbsp;€
                            </span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                            Obtenez le nez que vous avez toujours souhaité avec le Dr&nbsp;Atef
                            Ghedira, chirurgien expert en rhinoplastie. Économisez jusqu&apos;à
                            60&nbsp;% par rapport aux tarifs français — séjour médical complet
                            inclus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-brand-blue text-brand-navy font-bold text-base px-8 py-4 h-auto rounded-full hover:bg-brand-blue/90 transition-all shadow-lg"
                            >
                                <Link href="/devis?intervention=rhinoplastie">
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
                            <p className="font-heading text-3xl font-bold">1&nbsp;200+</p>
                            <p className="text-white/80 text-sm mt-1">Rhinoplasties réalisées</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">60&nbsp;%</p>
                            <p className="text-white/80 text-sm mt-1">Économies vs France</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">4,9&nbsp;/5</p>
                            <p className="text-white/80 text-sm mt-1">Satisfaction patients</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">15&nbsp;ans</p>
                            <p className="text-white/80 text-sm mt-1">D&apos;expérience chirurgicale</p>
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
                                Chirurgien diplômé &amp; spécialisé
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Le Dr&nbsp;Atef Ghedira est diplômé en chirurgie esthétique et
                                plastique avec plus de 15&nbsp;ans d&apos;expertise exclusive en
                                rhinoplastie. Techniques fermée, ouverte et ultrasonique disponibles.
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Shield className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Forfait tout compris
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Votre forfait inclut la consultation préopératoire, l&apos;intervention,
                                l&apos;anesthésie, 2 nuits en chambre privée, les transferts
                                aéroport-clinique et les soins post-opératoires. Aucun frais caché.
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Clock className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Suivi médical 12 mois
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Un suivi post-opératoire complet pendant 12&nbsp;mois par
                                téléconsultation avec votre chirurgien. En cas de besoin, une
                                retouche gratuite est garantie la première année.
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
                        Des économies réelles, une qualité certifiée
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
                            ["Rhinoplastie (honoraires)", "3 500 €", "Inclus"],
                            ["Anesthésie", "800 €", "Inclus"],
                            ["Hospitalisation (2 nuits)", "700 €", "Inclus"],
                            ["Transferts &amp; logistique", "300 €", "Inclus"],
                        ].map(([label, france, venus], i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                            >
                                <div className="py-4 px-6 text-gray-700 font-medium"
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
                                5&nbsp;500&nbsp;€
                            </div>
                            <div className="py-5 px-6 text-center font-bold text-brand-navy text-base border-l border-gray-100">
                                2&nbsp;200&nbsp;€
                                <span className="block text-brand-teal text-xs font-semibold mt-0.5">
                                    Économie : 3&nbsp;300&nbsp;€
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
                        Ce que disent nos patients
                    </h2>
                    <div className="bg-brand-navy/5 rounded-2xl p-8 md:p-10 border border-brand-navy/10 text-left relative">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                            ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                            &laquo;&nbsp;J&apos;avais un complexe depuis mes 18 ans. Grâce au
                            Dr&nbsp;Ghedira, mon nez est enfin en harmonie avec mon visage. Le
                            résultat est naturel, exactement ce que je voulais. L&apos;équipe a été
                            bienveillante du premier appel jusqu&apos;au retour à Paris. Je recommande
                            sans aucune réserve.&nbsp;&raquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold font-heading text-base">
                                S
                            </div>
                            <div>
                                <p className="font-bold text-brand-navy text-sm">Sophie M.</p>
                                <p className="text-gray-400 text-xs">Paris, France · Rhinoplastie fermée</p>
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
                                q: "Quelle est la durée du séjour en Tunisie pour une rhinoplastie ?",
                                a: "Le séjour dure généralement 5 à 7 jours : 1 jour de consultation préopératoire, la chirurgie le lendemain, 2 nuits en clinique, puis 2 à 3 jours de repos à l'hôtel avant le retour.",
                            },
                            {
                                q: "La rhinoplastie est-elle douloureuse ? Quelle est la récupération ?",
                                a: "L'intervention se déroule sous anesthésie générale. Les suites sont peu douloureuses. Les ecchymoses et l'œdème disparaissent en 10 à 14 jours. Le résultat définitif est visible au bout de 6 à 12 mois.",
                            },
                            {
                                q: "Quelles techniques de rhinoplastie proposez-vous ?",
                                a: "Le Dr Ghedira maîtrise trois techniques : la rhinoplastie fermée (sans cicatrice visible), la rhinoplastie ouverte (pour les corrections importantes) et la rhinoplastie ultrasonique (piezo) pour un travail osseux de précision.",
                            },
                            {
                                q: "Le forfait inclut-il vraiment tout ?",
                                a: "Oui. Le forfait à 2 200 € comprend la consultation chirurgicale, l'anesthésie, l'intervention, 2 nuits en chambre privée, les transferts aéroport et le suivi médical par téléconsultation pendant 12 mois.",
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
                        Prêt(e) à franchir le pas ?
                    </h2>
                    <p className="text-brand-navy/70 text-lg mb-8 max-w-xl mx-auto">
                        Recevez votre devis personnalisé sous 24&nbsp;h. Consultation en ligne
                        gratuite avec le Dr&nbsp;Atef Ghedira incluse.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-brand-navy text-white font-bold text-base px-10 py-4 h-auto rounded-full hover:bg-brand-navy/90 transition-all shadow-xl"
                    >
                        <Link href="/devis?intervention=rhinoplastie">
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
