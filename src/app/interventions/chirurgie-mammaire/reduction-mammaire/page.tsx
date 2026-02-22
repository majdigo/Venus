import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, Award, Plane, Clock, Heart } from 'lucide-react';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import { FAQAccordion } from '@/components/ui/faq-accordion';

export const metadata: Metadata = {
    title: 'Réduction Mammaire Tunisie | Dès 2 800€ Tout Compris — Venus Estetika',
    description:
        'Réduction mammaire en Tunisie : diminuez le volume de votre poitrine. Fin des douleurs dorsales. Chirurgien expert. Forfait tout compris dès 2 800€.',
};

export default function ReductionMammairePage() {

    const surgicalProcedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-mammaire/reduction-mammaire#procedure',
        'name': 'Réduction mammaire en Tunisie',
        'alternateName': [
            'Réduction des seins Tunisie',
            'Mammoplastie de réduction Tunisie',
            'Breast reduction Tunisia',
            'Hypertrophie mammaire traitement',
        ],
        'description':
            "La réduction mammaire (mammoplastie de réduction) est une intervention chirurgicale visant à diminuer le volume et le poids des seins en excès, à supprimer les douleurs dorsales et à améliorer la silhouette. Réalisée par un chirurgien diplômé en France. Forfait tout compris à partir de 2 800 €.",
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Seins (région mammaire : glande mammaire, tissu adipeux, peau)',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': "Quel est le prix d'une réduction mammaire en Tunisie tout compris ?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le forfait réduction mammaire chez Venus Estetika est à partir de 2 800 € tout compris. Il inclut l'intervention, l'anesthésie, 2 nuits en clinique agréée, 5 nuits en hôtel 5 étoiles, les transferts VIP, le soutien-gorge médical et le suivi 12 mois. En France, la même intervention coûte entre 5 000 et 8 000 €.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle technique est utilisée pour la réduction mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Deux techniques principales sont utilisées selon le volume à retirer. La technique en T inversé (cicatrice autour de l'aréole + verticale + horizontale dans le sillon) est recommandée pour les réductions importantes. La technique verticale (cicatrice autour de l'aréole + verticale uniquement) convient aux réductions modérées et laisse une cicatrice plus courte. Le chirurgien vous conseille lors de la téléconsultation.",
                },
            },
            {
                '@type': 'Question',
                'name': 'La réduction mammaire est-elle remboursée en France ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "En France, la réduction mammaire peut être partiellement remboursée par l'Assurance Maladie si le poids du tissu retiré dépasse 300 g par sein et si des critères médicaux sont remplis (douleurs dorsales, sillons cutanés). Cela n'est pas applicable pour les soins à l'étranger. Venus Estetika vous propose un devis transparent sans frais cachés.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Peut-on allaiter après une réduction mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "L'allaitement après une réduction mammaire dépend de la technique utilisée et de la quantité de glande préservée. Dans la majorité des cas, une partie de la glande et des canaux lactifères est conservée, rendant l'allaitement possible, même si la production peut être réduite. Cette question doit être abordée en consultation préopératoire.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après une réduction mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Après une réduction mammaire, le port d'un soutien-gorge médical jour et nuit pendant 6 semaines est obligatoire. La reprise d'une activité légère est possible au bout de 2 à 3 semaines. Le sport est autorisé à partir de 2 mois. Les cicatrices continuent à s'estomper pendant 12 à 18 mois. Le résultat définitif est apprécié à 6 mois.",
                },
            },
            {
                '@type': 'Question',
                'name': "Quels sont les risques d'une réduction mammaire?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Les complications sont rares mais incluent l'hématome, l'infection, la désunion des cicatrices, la nécrose partielle de l'aréole (très rare) et une modification de la sensibilité mamelonnaire (souvent temporaire). Le risque global est inférieur à 5 % dans une clinique agréée. Notre équipe vous accompagne à chaque étape pour minimiser ces risques.",
                },
            },
            {
                '@type': 'Question',
                'name': 'À partir de quel âge peut-on faire une réduction mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "La réduction mammaire est recommandée après la stabilisation du volume mammaire, généralement à partir de 18 ans. Il est conseillé d'attendre la fin de la croissance. Pour les mineures présentant une hypertrophie sévère et invalidante, une intervention peut être envisagée avec accord parental et avis médical.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd data={surgicalProcedureSchema} />
            <JsonLd data={faqSchema} />

            <div className="min-h-screen bg-slate-50">

                {/* HERO INTERVENTION */}
                <section className="bg-brand-navy text-white py-24 px-4 mt-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
                    <div className="container mx-auto max-w-5xl text-center relative z-20">
                        <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-semibold tracking-wider text-sm mb-6 border border-brand-gold/50">
                            Chirurgie Mammaire Experte
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                            Réduction mammaire en Tunisie : libérez-vous du poids de l'hypertrophie
                        </h1>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Douleurs dorsales, mauvaise posture, complexes vestimentaires — l'hypertrophie mammaire
                            impacte votre quotidien. Notre chirurgien diplômé en France vous propose une réduction
                            précise et harmonieuse. Forfait tout compris à partir de{' '}
                            <b className="text-brand-gold text-3xl mx-2">2 800 €</b>{' '}
                            <span className="line-through text-sm opacity-60">5 000-8 000 € en France</span>.
                            Hôtel 5 étoiles et suivi 12 mois inclus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink
                                href="/devis?intervention=reduction-mammaire"
                                className="w-full sm:w-auto"
                                ctaText="Obtenir mon devis gratuit"
                                ctaLocation="hero_reduction_mammaire"
                            >
                                <Button
                                    size="lg"
                                    className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-14 px-8 text-lg w-full"
                                >
                                    Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                        <p className="mt-8 text-sm font-medium opacity-80">
                            +2 500 patientes accompagnées | Note 4.8/5 sur Google | Chirurgien diplômé en France
                        </p>
                    </div>
                </section>

                {/* INTRODUCTION MÉDICALE */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
                            Qu'est-ce que la réduction mammaire ? Tout comprendre
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                            <p>
                                La réduction mammaire, ou mammoplastie de réduction, est une intervention
                                chirurgicale qui consiste à retirer l'excès de tissu glandulaire, adipeux et cutané
                                du sein. Elle permet de diminuer le volume, de remonter la poitrine et d'améliorer
                                son galbe général. Au-delà de l'aspect esthétique, c'est une chirurgie fonctionnelle
                                qui soulage des douleurs dorsales, des cervicalgies et des sillons cutanés souvent
                                invalidants.
                            </p>
                            <p>
                                Chez Venus Estetika, la réduction mammaire est réalisée par notre chirurgien
                                plasticien et reconstructeur, diplômé de la Faculté de Médecine de Paris. Fort de
                                plus de 15 ans d'expérience, il adapte la technique à votre morphologie pour un
                                résultat naturel, proportionné et durable.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-10">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Technique T inversé
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Recommandée pour les fortes réductions. La cicatrice, discrète, suit le
                                        contour de l'aréole, descend verticalement et suit le sillon sous-mammaire.
                                        Elle permet de retirer un volume important tout en remodelant parfaitement
                                        le sein.
                                    </p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Technique Verticale
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Idéale pour les réductions modérées. La cicatrice plus courte se limite au
                                        contour de l'aréole et à une ligne verticale. Elle offre un résultat
                                        esthétique excellent avec un minimum de marques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GUIDED TOUR TIMELINE */}
                <GuidedTourTimeline />

                {/* AVANTAGES (CRO) */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-12 text-center">
                            Pourquoi choisir Venus Estetika pour votre réduction mammaire ?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: 'Chirurgien diplômé en France',
                                    desc: "Notre chirurgien est diplômé de la Faculté de Médecine de Paris et membre de sociétés chirurgicales internationales. Plus de 15 ans d'expérience en chirurgie mammaire.",
                                },
                                {
                                    icon: Award,
                                    title: 'Clinique agréée aux normes ISO',
                                    desc: "Bloc opératoire certifié aux normes européennes. Équipe d'anesthésie et de réanimation dédiée pour votre sécurité maximale.",
                                },
                                {
                                    icon: Plane,
                                    title: 'Hôtel 5 étoiles inclus',
                                    desc: 'Après 2 nuits en clinique, récupérez confortablement dans un hôtel 5★ partenaire. Notre infirmière passe vous voir chaque jour.',
                                },
                                {
                                    icon: Clock,
                                    title: 'Suivi post-op 12 mois',
                                    desc: 'Téléconsultations programmées à 1, 3, 6 et 12 mois. Votre chirurgien surveille vos cicatrices et répond à toutes vos questions.',
                                },
                                {
                                    icon: Heart,
                                    title: 'Résultat naturel et harmonieux',
                                    desc: 'Technique adaptée à votre morphologie pour une poitrine proportionnée, féminine et en parfaite harmonie avec votre silhouette.',
                                },
                            ].map((adv, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
                                >
                                    <div className="w-14 h-14 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-6">
                                        <adv.icon className="w-7 h-7 text-brand-navy" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">{adv.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{adv.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRIX ET FORFAIT */}
                <section className="py-20 px-4 bg-brand-navy text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
                            Prix de la réduction mammaire : France vs Venus
                        </h2>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-lg font-medium">Réduction mammaire — Technique T inversé</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">8 000 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 800 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4 pt-2">
                                    <span className="text-lg font-medium">Réduction mammaire — Technique Verticale</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">5 000 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 800 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">Réduction + Lifting (mastopexie)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">9 500 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">3 500 €</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-brand-gold/10 rounded-2xl border border-brand-gold/30">
                                <h4 className="font-bold text-brand-gold mb-4 text-lg">
                                    Inclus dans notre forfait tout compris :
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Chirurgien plasticien
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Clinique 2 nuits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Soutien-gorge médical
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Hôtel 5★ 5 nuits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Transferts VIP inclus
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Suivi post-opératoire 12 mois
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-white">
                    <div className="container mx-auto px-4">
                        <FAQAccordion
                            data={faqSchema}
                            title="Questions fréquentes sur la réduction mammaire"
                        />
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prête à retrouver légèreté et confort au quotidien ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Douleurs dorsales, sillons cutanés, complexes vestimentaires : notre chirurgien
                            analyse votre dossier et vous propose la technique la plus adaptée à votre morphologie.
                            Réponse sous 24h, devis gratuit et sans engagement.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=reduction-mammaire"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_reduction_mammaire"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                            >
                                Recevoir ma simulation de devis
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Consultation gratuite | Chirurgien diplômé Paris | Réponse sous 24h
                        </p>
                    </div>
                </section>

            </div>
        </>
    );
}
