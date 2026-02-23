import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Award, Plane, Clock, Heart } from 'lucide-react';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { GuidedTourTimeline } from '@/components/ui/GuidedTourTimeline';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";

export const metadata: Metadata = {
    title: 'Lifting des Seins Tunisie | Mastopexie dès 2 500€ — Venus Estetika',
    description:
        'Lifting mammaire (mastopexie) en Tunisie. Remontez et raffermissez votre poitrine. Avec ou sans prothèse. Dès 2 500€ tout compris.',
};

export default function LiftingSeinsPage() {

    const surgicalProcedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'SurgicalProcedure',
        '@id': 'https://venus-estetika.com/interventions/chirurgie-mammaire/lifting-seins#procedure',
        'name': 'Lifting des seins (mastopexie) en Tunisie',
        'alternateName': [
            'Mastopexie Tunisie',
            'Lifting mammaire Tunisie',
            'Breast lift Tunisia',
            'Ptose mammaire chirurgie',
            'Remontée des seins Tunisie',
        ],
        'description':
            "La mastopexie (lifting des seins) est une intervention chirurgicale qui permet de remonter et de redonner de la fermeté à des seins ptosés (tombants) en excisant l'excès de peau et en repositionnant la glande mammaire et le complexe aréolo-mamelonnaire. Réalisée avec ou sans prothèse selon le souhait de volume. Forfait tout compris à partir de 2 500 €.",
        'procedureType': { '@type': 'MedicalProcedureType', 'name': 'Surgical' },
        'bodyLocation': 'Seins (région mammaire : glande mammaire, complexe aréolo-mamelonnaire, peau)',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': "Quel est le prix d'un lifting des seins en Tunisie tout compris ?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le forfait mastopexie chez Venus Estetika est à partir de 2 500 € (sans prothèse) et 3 500 € (avec prothèse). Tout est inclus : l'intervention, l'anesthésie, 1 à 2 nuits en clinique, 5 nuits en hôtel 5 étoiles, les transferts VIP, le soutien-gorge médical et le suivi 12 mois. En France, la mastopexie coûte entre 4 500 et 9 000 €.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la différence entre mastopexie pure et mastopexie avec prothèse ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "La mastopexie pure consiste à remonter et remodeler les seins sans modifier leur volume, uniquement par repositionnement de la glande et résection de peau. Elle convient aux patientes satisfaites de leur volume mais qui souhaitent une poitrine plus haute et plus ferme. La mastopexie avec prothèse combine le lifting au placement d'implants mammaires, pour des seins à la fois remontés et plus volumineux. C'est l'option idéale après une grossesse ou une perte de poids importante.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Quelle est la durée de convalescence après une mastopexie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le port d'un soutien-gorge médical jour et nuit pendant 6 semaines est indispensable. La reprise d'une activité légère est possible après 2 à 3 semaines. Les sports sollicitant le buste sont autorisés à partir de 2 mois. Le résultat définitif est apprécié entre 3 et 6 mois, une fois l'œdème totalement résorbé.",
                },
            },
            {
                '@type': 'Question',
                'name': "Combien de temps dure le résultat d'un lifting des seins?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Le résultat d'une mastopexie est durable : 10 à 15 ans en moyenne selon les facteurs naturels (grossesse, variation de poids, vieillissement cutané). Pour maximiser la longévité du résultat, il est recommandé d'éviter les fluctuations de poids importantes après l'intervention et de porter un soutien-gorge de sport lors des activités physiques.",
                },
            },
            {
                '@type': 'Question',
                'name': 'Y a-t-il des cicatrices visibles après une mastopexie ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Toute mastopexie laisse des cicatrices, mais elles sont soigneusement placées pour être discrètes. Selon la technique, elles suivent le contour de l'aréole (toujours) et peuvent s'étendre verticalement ou en T inversé selon le degré de ptose. Avec un soin correct (crèmes cicatrisantes, protection solaire) les cicatrices s'estompent significativement en 12 à 18 mois.",
                },
            },
            {
                '@type': 'Question',
                'name': 'La mastopexie est-elle possible après une grossesse ou un allaitement ?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Oui, la mastopexie est souvent demandée après une ou plusieurs grossesses, un allaitement ou une perte de poids significative. Il est recommandé d'attendre au minimum 6 mois après l'arrêt de l'allaitement et d'avoir un poids stable depuis au moins 6 mois avant d'envisager l'intervention.",
                },
            },
            {
                '@type': 'Question',
                'name': "Quels sont les risques d'une mastopexie ?",
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': "Les risques sont similaires à ceux de toute chirurgie mammaire : hématome, infection, asymétrie (rare), cicatrisation hypertrophique, modification de la sensibilité mamelonnaire (souvent temporaire). Des complications graves sont exceptionnelles dans un établissement agréé. Notre chirurgien vous détaillera tous les risques en consultation préopératoire.",
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
                <InterventionHero
                    title="Lifting des seins en Tunisie : retrouvez une poitrine haute et ferme"
                    subtitle="Ptose, seins tombants après grossesse ou perte de poids — la mastopexie redonne hauteur, fermeté et jeunesse à votre poitrine. Avec ou sans prothèse, selon vos souhaits."
                    price="2 500 €"
                    priceOld="4 500 €"
                    imageSrc="https://venus-estetika.com/wp-content/uploads/2017/11/lifting-des-seins1.jpg"
                    imageAlt="Lifting mammaire Tunisie - Venus Estetika"
                    badge="Rajeunissement Mammaire"
                    devisSlug="lifting-seins"
                    stats="+2 500 patientes accompagnées | Note 4.8/5 sur Google | Chirurgien diplômé en France"
                    doctorName="Dr Walid Balti"
                    doctorImage="/images/doctors/dr-walid-balti.jpg"
                    doctorSpecialty="Chirurgie Plastique, diplômé en France"
                />

                {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
                <AuthenticLandingSection
                    title="Le Lifting Mammaire en Tunisie"
                    description="Le lifting des seins (ou mastopexie), est une intervention de chirurgie esthétique des seins, dont l’objectif principal est de remodeler les seins tombants et retendre la peau pour corriger l’effet de de ptôse mammaire."
                    images={[
                        "https://venus-estetika.com/wp-content/uploads/2017/11/lifting-des-seins1.jpg",
                        "https://venus-estetika.com/wp-content/uploads/2021/12/lifting-Mammaire-tunisie-avant-apres-venus.jpg"
                    ]}
                    contentSnippets={[
                        "Le but du lifting des seins est simple et clair : corriger les seins qui tombent à cause du phénomène de ptôse mammaire.",
                        "L'hyper trophie mammaire est un désagrément inesthétique non négligeable. Généralement due aux aléas de la vie comme une perte de poids conséquente, une grossesse, la taille et le port de la poitrine ou suite simplement aux effets chronologiques du temps.",
                        "Le chirurgien supprime le relâchement de peau excédentaire, pour procéder par la suite à un rehaussement puis remodelage afin de galber, regalber, redresser, remonter les seins.",
                        "Au cas où une perte de volume est constatée, il est recommandé de mettre en place des prothèses mammaires pour redonner un certain volume. L'intervention prend de ce fait l'appellation de mastopexie avec mise en place de prothèses (ou lifting mammaire avec prothèses)."
                    ]}
                    mainColor="navy"
                />

                {/* INTRODUCTION MÉDICALE */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
                            Qu'est-ce que la mastopexie (lifting des seins) ? Tout comprendre
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                            <p>
                                La mastopexie, communément appelée lifting des seins, est une intervention
                                chirurgicale qui corrige la ptose mammaire — l'affaissement des seins dû à la
                                grossesse, l'allaitement, une perte de poids ou simplement le vieillissement
                                naturel. L'objectif est de repositionner la glande mammaire, de remonter le
                                complexe aréolo-mamelonnaire et de supprimer l'excès de peau pour une poitrine
                                ferme, haute et harmonieuse.
                            </p>
                            <p>
                                Chez Venus Estetika, notre chirurgien plasticien diplômé en France évalue le degré
                                de ptose (classification de Regnault) et vous propose la technique la plus adaptée :
                                mastopexie pure pour conserver votre volume ou mastopexie avec prothèse si vous
                                souhaitez gagner en galbe.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-10">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Mastopexie Pure
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Remise en tension et repositionnement de la glande sans implant. Idéale pour
                                        les patientes qui souhaitent retrouver une poitrine haute et ferme en
                                        conservant leur volume naturel. Résultat sobre et élégant.
                                    </p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                                        Mastopexie + Prothèse
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Combinaison du lifting et de l'augmentation mammaire en une seule
                                        intervention. Parfaite pour retrouver volume et fermeté simultanément,
                                        notamment après une grossesse ou une perte de poids importante.
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
                            Pourquoi choisir Venus Estetika pour votre lifting des seins ?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: 'Chirurgien diplômé en France',
                                    desc: "Notre chirurgien est diplômé de la Faculté de Médecine de Paris. Spécialiste de la chirurgie mammaire avec plus de 15 ans d'expérience.",
                                },
                                {
                                    icon: Award,
                                    title: 'Technique adaptée à votre ptose',
                                    desc: 'Après évaluation précise du degré de ptose (classification de Regnault), la technique chirurgicale est choisie sur-mesure pour optimiser le résultat.',
                                },
                                {
                                    icon: Plane,
                                    title: 'Hôtel 5 étoiles inclus',
                                    desc: 'Convalescence dans un hôtel partenaire de luxe avec suivi infirmier quotidien. Vous récupérez dans les meilleures conditions.',
                                },
                                {
                                    icon: Clock,
                                    title: 'Suivi post-op 12 mois',
                                    desc: "Téléconsultations à 1, 3, 6 et 12 mois pour surveiller la cicatrisation et l'évolution du résultat.Disponibilité totale de l'équipe.",
                                },
                                {
                                    icon: Heart,
                                    title: 'Résultat durable et naturel',
                                    desc: "La mastopexie offre un résultat de 10 à 15 ans. Notre chirurgien privilégie l'harmonie anatomique pour un rendu 100 % naturel.",
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
                            Prix du lifting des seins : France vs Venus
                        </h2>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-lg font-medium">Mastopexie seule (sans prothèse)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">4 500-7 000 €</span>
                                        <span className="text-2xl font-bold text-brand-blue">2 500 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">Mastopexie + Prothèse (augmentation)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">6 000-9 000 €</span>
                                        <span className="text-2xl font-bold text-brand-blue">3 500 €</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-brand-blue/10 rounded-2xl border border-brand-blue/30">
                                <h4 className="font-bold text-brand-blue mb-4 text-lg">
                                    Inclus dans notre forfait tout compris :
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Chirurgien plasticien
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Clinique 1 à 2 nuits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Soutien-gorge médical
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Hôtel 5★ 5 nuits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Transferts VIP inclus
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Suivi post-opératoire 12 mois
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-white">
                    <FAQAccordion data={faqSchema} title="Questions fréquentes sur le lifting des seins" />
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Témoignages lifting mammaire"
                    testimonials={[
                        { name: "Marie L.", city: "Paris", quote: "Après ma perte de poids, ma poitrine était vidée. Le Dr Balti a fait des miracles avec un lifting et prothèses. Résultat magnifique !", intervention: "Lifting seins avec prothèses", savings: "4 000 €", rating: 5 },
                        { name: "Julie D.", city: "Genève", quote: "L'équipe est aux petits soins, la clinique est très moderne. Mon lifting sans prothèse a un rendu super naturel, les cicatrices sont très fines.", intervention: "Mastopexie sans prothèse", savings: "5 500 €", rating: 5 },
                        { name: "Sarah B.", city: "Marseille", quote: "J'avais très peur de l'opération, mais l'accompagnement Venus a été irréprochable. Mon séjour à l'hôtel était très reposant.", intervention: "Mastopexie", savings: "3 800 €", rating: 5 },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos chirurgiens pour le lifting mammaire"
                    surgeons={[
                        { name: "Dr Walid Balti", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-walid-balti.jpg", experience: "+15 ans d'expérience" },
                        { name: "Dr Imen Ben Gaied", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-imen-ben-gaied.jpeg", experience: "+12 ans d'expérience" },
                        { name: "Dr Hassen Ben Jemaa", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-hassen-ben-jemaa.jpg", experience: "+10 ans d'expérience" },
                    ]}
                    devisSlug="lifting-seins"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prête à retrouver une poitrine haute, ferme et rajeunie ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Nos patientes venues de France, Belgique et Suisse repartent transformées et
                            confiantes. Envoyez vos photos à notre chirurgien pour une évaluation personnalisée
                            gratuite. Réponse sous 24h.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=lifting-seins"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_lifting_seins"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
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
