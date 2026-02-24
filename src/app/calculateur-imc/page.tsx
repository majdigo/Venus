import { Metadata } from 'next';
import { BmiCalculator } from '@/components/calculators/BmiCalculator';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/ui/faq-accordion';

export const metadata: Metadata = {
    title: 'Calculateur IMC Gratuit — Éligibilité Chirurgie Bariatrique',
    description: 'Calculez votre Indice de Masse Corporelle (IMC) gratuitement. Évaluez votre éligibilité à la sleeve gastrique ou au bypass en Tunisie. Résultat instantané.',
    alternates: {
        canonical: 'https://venus-estetika.com/calculateur-imc/',
    },
};

const FAQ_ITEMS = [
    {
        question: "Comment calculer son IMC ?",
        answer: "L'IMC se calcule en divisant le poids (en kg) par la taille (en mètres) au carré. Exemple : pour 85 kg et 1,70 m → 85 / (1,70 × 1,70) = 29,4. Un IMC supérieur à 30 indique une obésité.",
    },
    {
        question: "À partir de quel IMC peut-on envisager une sleeve gastrique ?",
        answer: "La sleeve gastrique est généralement recommandée à partir d'un IMC de 35, ou à partir de 30 en présence de comorbidités (diabète de type 2, hypertension, apnée du sommeil). Seul un chirurgien bariatrique peut confirmer votre éligibilité après un bilan complet.",
    },
    {
        question: "Quelle est la différence entre sleeve et bypass ?",
        answer: "La sleeve gastrique retire environ 75% de l'estomac pour réduire son volume. Le bypass gastrique crée un court-circuit intestinal en plus de la réduction gastrique, entraînant une malabsorption des nutriments. Le bypass est généralement recommandé pour les IMC supérieurs à 40 ou en cas de diabète sévère.",
    },
    {
        question: "L'IMC est-il un indicateur fiable ?",
        answer: "L'IMC est un outil de dépistage reconnu par l'OMS, mais il a des limites. Il ne distingue pas la masse grasse de la masse musculaire, et ne tient pas compte de la répartition des graisses. Un sportif musclé peut avoir un IMC élevé sans être en surpoids. C'est pourquoi un bilan médical complet est indispensable avant toute décision chirurgicale.",
    },
    {
        question: "Combien coûte une chirurgie bariatrique en Tunisie ?",
        answer: "Chez Venus Estetika, la sleeve gastrique est proposée à partir de 3 500€ tout compris (intervention, anesthésie, clinique, hôtel 5 étoiles, transferts). Le bypass gastrique débute à 4 200€. En France, les mêmes interventions coûtent entre 8 000€ et 15 000€ hors hospitalisation.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
    })),
};

export default function CalculateurImcPage() {
    return (
        <>
            <JsonLd data={faqSchema} />

            <div className="min-h-screen bg-slate-50">
                {/* Hero */}
                <section className="bg-primary text-primary-foreground py-20 px-4">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Calculateur d&apos;IMC Gratuit
                        </h1>
                        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                            Évaluez votre Indice de Masse Corporelle et découvrez si vous êtes éligible
                            à une chirurgie bariatrique en Tunisie.
                        </p>
                    </div>
                </section>

                {/* Calculator */}
                <section className="py-16 px-4 -mt-8">
                    <div className="container mx-auto max-w-2xl">
                        <BmiCalculator variant="full" />
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">
                            Comprendre votre IMC
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                            {[
                                { range: "< 18.5", label: "Insuffisance pondérale", color: "bg-blue-100 text-blue-800 border-blue-200" },
                                { range: "18.5 – 24.9", label: "Poids normal", color: "bg-green-100 text-green-800 border-green-200" },
                                { range: "25 – 29.9", label: "Surpoids", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
                                { range: "30 – 34.9", label: "Obésité modérée", color: "bg-orange-100 text-orange-800 border-orange-200" },
                                { range: "35 – 39.9", label: "Obésité sévère", color: "bg-red-100 text-red-800 border-red-200" },
                                { range: "≥ 40", label: "Obésité morbide", color: "bg-rose-100 text-rose-800 border-rose-200" },
                            ].map((item) => (
                                <div key={item.range} className={`p-4 rounded-xl border ${item.color}`}>
                                    <div className="text-2xl font-bold mb-1">{item.range}</div>
                                    <div className="text-sm font-medium">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
                            Questions Fréquentes
                        </h2>
                        <FAQAccordion data={faqSchema} title="" />
                    </div>
                </section>
            </div>
        </>
    );
}
