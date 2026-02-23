import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Star, ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Sleeve Gastrectomie Tunisie dès 3 500€ — Venus Estetika | Économisez 71%",
    description:
        "Sleeve gastrique en Tunisie à partir de 3 500€ tout compris. Économisez 71% vs la France (12 000€). Dr Ramzi Nouira, chirurgien bariatrique expert. Perte de 60-70% de l'excès de poids. Suivi nutritionnel 12 mois. Devis gratuit en 24h.",
    robots: { index: false, follow: false },
};

export default function SleeveGastriqueTunisiePage() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── 1. HERO ── */}
            <section className="bg-brand-navy text-white py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-5xl">
                    <div className="max-w-3xl">
                        <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
                            Venus Estetika · Chirurgie Bariatrique · Tunis
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Sleeve Gastrique en Tunisie
                            <span className="block text-brand-blue mt-2">
                                à partir de 3&nbsp;500&nbsp;€
                            </span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                            Retrouvez votre poids de forme avec le Dr&nbsp;Ramzi Nouira, chirurgien
                            bariatrique expert. Perdez 60 à 70&nbsp;% de votre excès de poids —
                            séjour complet et suivi nutritionnel 12&nbsp;mois inclus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-brand-blue text-brand-navy font-bold text-base px-8 py-4 h-auto rounded-full hover:bg-brand-blue/90 transition-all shadow-lg"
                            >
                                <Link href="/devis?intervention=sleeve-gastrique">
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
                            <p className="font-heading text-3xl font-bold">800+</p>
                            <p className="text-white/80 text-sm mt-1">Sleeves réalisées</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">71&nbsp;%</p>
                            <p className="text-white/80 text-sm mt-1">Économies vs France</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">4,8&nbsp;/5</p>
                            <p className="text-white/80 text-sm mt-1">Satisfaction patients</p>
                        </div>
                        <div>
                            <p className="font-heading text-3xl font-bold">12&nbsp;ans</p>
                            <p className="text-white/80 text-sm mt-1">D&apos;expertise bariatrique</p>
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
                                Chirurgien bariatrique expert
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Le Dr&nbsp;Ramzi Nouira est spécialisé en chirurgie bariatrique
                                laparoscopique depuis 12&nbsp;ans. Il prend en charge les patients
                                avec un IMC supérieur à 35 et assure lui-même le suivi post-opératoire.
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Shield className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Forfait tout compris
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Bilan préopératoire complet, intervention coelioscopique, anesthésie,
                                3 nuits en chambre privée, transferts aéroport-clinique et kit
                                nutritionnel de départ. Zéro frais caché.
                            </p>
                        </div>
                        <div className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Clock className="w-10 h-10 text-brand-teal mb-4 flex-shrink-0" />
                            <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">
                                Suivi nutritionnel 12 mois
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Un programme de suivi personnalisé de 12&nbsp;mois : consultations
                                mensuelles avec votre diététicienne, bilans sanguins trimestriels et
                                téléconsultation avec le Dr&nbsp;Nouira à 1, 3, 6 et 12&nbsp;mois.
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
                        Jusqu&apos;à 8&nbsp;500&nbsp;€ d&apos;économies pour un résultat équivalent
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
                            ["Honoraires chirurgicaux", "7 000 €", "Inclus"],
                            ["Anesthésie &amp; bloc", "1 500 €", "Inclus"],
                            ["Hospitalisation (3 nuits)", "2 500 €", "Inclus"],
                            ["Suivi nutritionnel 12 mois", "1 000 €", "Inclus"],
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
                                12&nbsp;000&nbsp;€
                            </div>
                            <div className="py-5 px-6 text-center font-bold text-brand-navy text-base border-l border-gray-100">
                                3&nbsp;500&nbsp;€
                                <span className="block text-brand-teal text-xs font-semibold mt-0.5">
                                    Économie : 8&nbsp;500&nbsp;€
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
                        La transformation de nos patients
                    </h2>
                    <div className="bg-brand-navy/5 rounded-2xl p-8 md:p-10 border border-brand-navy/10 text-left relative">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                            ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                            &laquo;&nbsp;J&apos;avais un IMC de 42 et de nombreuses comorbidités. En
                            France, le parcours bariatrique m&apos;aurait pris 2 ans. À Venus
                            Estetika, tout a été rapide, professionnel et humain. 18 mois après la
                            sleeve, j&apos;ai perdu 45&nbsp;kg. Le Dr&nbsp;Nouira m&apos;a
                            accompagné à chaque étape. C&apos;est une renaissance.&nbsp;&raquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold font-heading text-base">
                                K
                            </div>
                            <div>
                                <p className="font-bold text-brand-navy text-sm">Karim B.</p>
                                <p className="text-gray-400 text-xs">Lyon, France · Sleeve gastrique · &minus;45 kg</p>
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
                                q: "Suis-je éligible à la sleeve gastrique ?",
                                a: "La sleeve est indiquée pour les patients avec un IMC supérieur ou égal à 35 kg/m², ou à partir de 30 kg/m² en présence de comorbidités (diabète type 2, hypertension, apnée du sommeil). Un bilan médical complet est effectué avant toute décision chirurgicale.",
                            },
                            {
                                q: "Quelle perte de poids puis-je espérer après la sleeve ?",
                                a: "En moyenne, les patients perdent entre 60 et 70 % de leur excès de poids dans les 12 à 18 mois suivant l'intervention. Le résultat dépend du suivi nutritionnel et de l'activité physique post-opératoire.",
                            },
                            {
                                q: "Combien de temps dure le séjour en Tunisie ?",
                                a: "Comptez 5 à 6 jours : bilan préopératoire à l'arrivée, chirurgie le lendemain, 3 nuits d'hospitalisation, puis 1 à 2 jours de repos avant le retour. Le vol en classe économique est possible dès J+4.",
                            },
                            {
                                q: "Le suivi après la sleeve est-il assuré depuis la France ?",
                                a: "Oui. Un programme de suivi 12 mois est inclus dans votre forfait : téléconsultations avec le Dr Nouira à 1, 3, 6 et 12 mois, accompagnement diététique mensuel et bilans sanguins sur ordonnance transmise à votre médecin traitant en France.",
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
                        Commencez votre transformation
                    </h2>
                    <p className="text-brand-navy/70 text-lg mb-8 max-w-xl mx-auto">
                        Recevez votre devis personnalisé sous 24&nbsp;h. Consultation médicale en
                        ligne gratuite avec le Dr&nbsp;Ramzi Nouira.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-brand-navy text-white font-bold text-base px-10 py-4 h-auto rounded-full hover:bg-brand-navy/90 transition-all shadow-xl"
                    >
                        <Link href="/devis?intervention=sleeve-gastrique">
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
