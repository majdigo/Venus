import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, Award, Plane, Clock, Heart } from 'lucide-react';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import { FAQAccordion } from '@/components/ui/faq-accordion';

export const metadata: Metadata = {
    title: 'Lipofilling Mammaire Tunisie | Augmentation Naturelle dès 2 800€ — Venus Estetika',
    description:
        'Lipofilling mammaire en Tunisie : augmentation des seins par injection de graisse autologue. Résultat 100% naturel, sans prothèse. Dès 2 800€.',
};

export default function LipofillingMammairePage() {

    const surgicalProcedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-mammaire/lipofilling-mammaire#procedure',
        'name': 'Lipofilling mammaire en Tunisie',
        'alternateName': [
            'Augmentation mammaire par graisse Tunisie',
            'Lipostructure seins Tunisie',
            'Fat transfer breast augmentation Tunisia',
            'Augmentation seins naturelle sans prothèse',
            'Transfert graisse mammaire',
        ],
        'description':
            "Le lipofilling mammaire (lipostructure de Coleman) est une technique d'augmentation des seins par injection de graisse autologue prélevée sur le propre corps de la patiente (abdomen, cuisses, flancs). Résultat 100 % naturel, sans corps étranger. Gain d'environ 1 à 1,5 bonnet. Double bénéfice : seins augmentés et zone donneuse affinée. Forfait tout compris à partir de 2 800 €.",
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Seins (région mammaire) + zone donneuse (abdomen, cuisses ou flancs)',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': "Quel est le prix d'un lipofilling mammaire en Tunisie tout compris ?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le forfait lipofilling mammaire chez Venus Estetika est à partir de 2 800 € tout compris. Il inclut l'intervention, l'anesthésie, la liposuccion de la zone donneuse, 1 nuit en clinique agréée, 5 nuits en hôtel 5 étoiles, les transferts VIP, le soutien-gorge médical et le suivi 12 mois. En France, la même intervention coûte entre 5 000 et 7 000 €.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Combien de volume peut-on gagner avec un lipofilling mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le lipofilling mammaire permet un gain de volume d'environ 1 à 1,5 bonnet (150 à 250 ml injectés par sein). Une résorption naturelle de 30 % est normale dans les 3 à 4 premiers mois : le résultat stable est évalué à partir du 4e mois. Pour un gain de plus de 2 bonnets, une augmentation mammaire avec prothèse reste plus indiquée.",
                },
            },
            {
                '@type': 'Question',
                'name': "Quel est l'avantage du lipofilling vs les prothèses mammaires?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le lipofilling mammaire utilise votre propre graisse (tissu autologue), ce qui élimine tout risque de rejet ou de réaction immunitaire. Il n'y a aucun corps étranger dans le sein, pas de risque de coque péri-prothétique, et la texture du sein est totalement naturelle au toucher. En revanche, le gain volumétrique est limité à environ 1,5 bonnet, contrairement aux prothèses qui permettent des augmentations plus importantes.",
                },
            },
            {
                '@type': 'Question',
                'name': "D'où est prélevée la graisse pour le lipofilling mammaire ?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "La graisse est prélevée sur une ou plusieurs zones donneuses choisies selon votre morphologie : abdomen, cuisses internes ou externes, flancs (poignées d'amour), genoux ou dos. La liposuccion de ces zones est incluse dans le forfait. C'est un double bénéfice : les seins sont augmentés et les zones traitées sont affinées simultanément.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après un lipofilling mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "La convalescence est moins contraignante qu'avec des prothèses. Vous portez un soutien-gorge médical pendant 4 à 6 semaines. Les ecchymoses et l'œdème sur les zones liposucées disparaissent en 3 à 4 semaines. La reprise du travail est possible après 1 semaine. Le résultat stable est apprécié à 3-4 mois, après résorption partielle de la graisse.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Le résultat du lipofilling mammaire est-il permanent ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "La graisse qui survit à la phase de résorption initiale (environ 70 % des cellules injectées) est définitivement intégrée dans les tissus mammaires et dure toute la vie. Ce résultat peut toutefois être légèrement affecté par des variations de poids importantes (la graisse mammaire réagit comme la graisse corporelle).",
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelles sont les contre-indications du lipofilling mammaire ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Les principales contre-indications sont un IMC inférieur à 20 (manque de graisse donneuse), des antécédents familiaux significatifs de cancer du sein (à évaluer avec un oncologue), une grossesse en cours ou un projet de grossesse immédiat. Un bilan mammographique préopératoire est systématiquement réalisé pour s'assurer qu'il n'y a aucune anomalie radiologique.",
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
                            Augmentation Naturelle
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                            Lipofilling mammaire en Tunisie : augmentation naturelle sans prothèse
                        </h1>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Augmentez vos seins d'1 à 1,5 bonnet avec votre propre graisse — sans implant, sans
                            corps étranger, avec un résultat 100 % naturel au toucher. Double bénéfice : seins
                            augmentés et silhouette affinée. Forfait tout compris à partir de{' '}
                            <b className="text-brand-gold text-3xl mx-2">2 800 €</b>{' '}
                            <span className="line-through text-sm opacity-60">5 000-7 000 € en France</span>.
                            Hôtel 5 étoiles et suivi 12 mois inclus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink
                                href="/devis?intervention=lipofilling-mammaire"
                                className="w-full sm:w-auto"
                                ctaText="Obtenir mon devis gratuit"
                                ctaLocation="hero_lipofilling_mammaire"
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
                            +2 500 patientes accompagnées | Note 4.8/5 sur Google | Graisse autologue 100% naturelle
                        </p>
                    </div>
                </section>

                {/* INTRODUCTION MÉDICALE */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
                            Qu'est-ce que le lipofilling mammaire ? Tout comprendre
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                            <p>
                                Le lipofilling mammaire, ou lipostructure de Coleman, est une technique d'augmentation
                                des seins par injection de graisse autologue — c'est-à-dire votre propre graisse,
                                prélevée sur votre corps (abdomen, cuisses, flancs), purifiée et réinjectée dans
                                les seins. Il n'y a aucun corps étranger, aucun implant : le résultat est naturel
                                à 100 %, tant visuellement qu'au toucher.
                            </p>
                            <p>
                                Chez Venus Estetika, notre chirurgien plasticien diplômé en France maîtrise la
                                technique de Coleman dans sa version la plus raffinée : prélèvement atraumatique,
                                centrifugation de la graisse, micro-injections stratifiées pour une prise maximale.
                                Le double bénéfice est immédiat : vos seins gagnent en volume et vos zones
                                donneuses sont affinées en une seule intervention.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-10">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Lipostructure de Coleman
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        La graisse est prélevée à la canule fine sur l'abdomen, les cuisses ou les
                                        flancs, puis purifiée par centrifugation. Les micro-injections sont réalisées
                                        en plusieurs couches dans le tissu mammaire pour maximiser la vascularisation
                                        et la survie des cellules graisseuses.
                                    </p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Augmentation Modérée et Naturelle
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Le lipofilling permet un gain d'environ 1 à 1,5 bonnet, idéal pour un
                                        résultat hyper-naturel. Une résorption de 30 % est normale dans les
                                        premiers mois. Le résultat stable, obtenu à 3-4 mois, est définitif
                                        pour la graisse intégrée.
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
                            Pourquoi choisir Venus Estetika pour votre lipofilling mammaire ?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: 'Chirurgien diplômé en France',
                                    desc: 'Notre chirurgien maîtrise la technique de Coleman dans sa version la plus précise. Diplômé de la Faculté de Médecine de Paris, spécialiste de la chirurgie mammaire.',
                                },
                                {
                                    icon: Award,
                                    title: 'Aucun corps étranger',
                                    desc: 'Votre propre graisse est utilisée. Zéro risque de rejet, zéro coque péri-prothétique, zéro allergie. Le résultat est naturel au toucher et visuellement indétectable.',
                                },
                                {
                                    icon: Plane,
                                    title: 'Double bénéfice inclus',
                                    desc: "La liposuccion de la zone donneuse (abdomen, cuisses ou flancs) est incluse dans le forfait. Vos seins augmentent et votre silhouette s'affine en une seule opération.",
                                },
                                {
                                    icon: Clock,
                                    title: 'Suivi post-op 12 mois',
                                    desc: "Téléconsultations à 1, 3, 6 et 12 mois pour suivre la prise de greffe et l'évolution du volume.Votre chirurgien reste disponible pour toute question.",
                                },
                                {
                                    icon: Heart,
                                    title: 'Résultat hyper-naturel',
                                    desc: 'Idéal pour une augmentation discrète et authentique. Le sein garde sa souplesse naturelle et réagit comme un sein normal à la palpation.',
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
                            Prix du lipofilling mammaire : France vs Venus
                        </h2>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-lg font-medium">
                                        Lipofilling mammaire — Lipostructure de Coleman
                                    </span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">5 000-7 000 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 800 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">
                                        Lipofilling + Lifting mammaire combiné
                                    </span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">8 000-10 000 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">3 800 €</span>
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
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Liposuccion zone donneuse incluse
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Clinique 1 nuit
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Soutien-gorge médical
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Hôtel 5★ 5 nuits
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
                            title="Questions fréquentes sur le lipofilling mammaire"
                        />
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prête pour une augmentation 100 % naturelle, sans implant ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Le lipofilling mammaire est fait pour vous si vous souhaitez un résultat discret,
                            authentique et durable sans corps étranger. Notre chirurgien évalue votre réserve
                            graisseuse et vous confirme votre éligibilité gratuitement.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=lipofilling-mammaire"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_lipofilling_mammaire"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                            >
                                Recevoir ma simulation de devis
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Consultation gratuite | Technique de Coleman | Réponse sous 24h
                        </p>
                    </div>
                </section>

            </div>
        </>
    );
}
