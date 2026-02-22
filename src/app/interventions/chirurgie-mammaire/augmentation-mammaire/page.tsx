import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Award, Plane, Clock, Heart } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { BreastAugmentationInteractiveAnatomy } from "@/components/interventions/BreastAugmentationInteractiveAnatomy";
import { FAQAccordion } from "@/components/ui/faq-accordion";

export const metadata: Metadata = {
    title: 'Augmentation Mammaire Tunisie | Prix Tout Compris 2 800€ — Venus Estetika',
    description: 'Augmentation mammaire en Tunisie avec prothèses de qualité européenne. Forfait tout compris dès 2 800€ : clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit.',
};

export default function AugmentationMammairePage() {

    // JSON-LD Extrait scrupuleusement de la doc de Claude (TICKET-007)
    const surgicalProcedureSchema = {
        "@context": "https://schema.org",
        "@type": "SurgicalProcedure",
        "@id": "https://venus-estetika.com/interventions/chirurgie-mammaire/augmentation-mammaire#procedure",
        "name": "Augmentation mammaire en Tunisie",
        "alternateName": ["Implants mammaires Tunisie", "Prothèses mammaires Tunisie", "Breast augmentation Tunisia", "Augmentation des seins Tunisie", "Mammoplastie d'augmentation"],
        "description": "L'augmentation mammaire est une intervention de chirurgie esthétique visant à augmenter le volume des seins par la mise en place de prothèses mammaires en silicone cohésif de marque européenne. Réalisée par le Dr Balti, chirurgien diplômé en France, avec la technique Dual Plane pour un résultat naturel. Forfait tout compris à partir de 2 800 €.",
        "procedureType": { "@type": "MedicalProcedureType", "name": "Surgical" },
        "bodyLocation": "Seins (région mammaire : glande mammaire, muscle grand pectoral, sillon sous-mammaire)",
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quel est le prix d'une augmentation mammaire en Tunisie tout compris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une augmentation mammaire en Tunisie chez Venus Estetika est à partir de 2 800 € tout compris avec des prothèses en silicone de marque européenne. Ce forfait inclut l'intervention, l'anesthésie, les prothèses, une nuit en clinique agréée, 5 nuits en hôtel 5 étoiles, les transferts VIP, le soutien-gorge de contention et un suivi de 12 mois. En France, la même intervention coûte entre 6 000 et 7 500 €, soit une économie de plus de 50%."
                }
            },
            {
                "@type": "Question",
                "name": "Prothèses rondes ou anatomiques : comment choisir ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les prothèses rondes offrent un décolleté marqué et un effet push-up naturel. Les prothèses anatomiques reproduisent la forme naturelle du sein en goutte d'eau avec plus de volume en bas. Le choix dépend de votre morphologie, de l'épaisseur de vos tissus et du résultat souhaité. Le chirurgien vous conseille lors de la téléconsultation."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle est la durée de vie des implants mammaires ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les prothèses en silicone cohésif modernes durent au minimum 10 à 15 ans, souvent bien au-delà. Les fabricants européens (Motiva, Mentor, Sebbin) offrent une garantie à vie en cas de rupture. Un remplacement n'est nécessaire qu'en cas de complication. Un suivi régulier par échographie mammaire annuelle permet de vérifier leur intégrité."
                }
            },
            {
                "@type": "Question",
                "name": "Peut-on allaiter après une augmentation mammaire ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, dans la très grande majorité des cas. La technique Dual Plane place la prothèse derrière le muscle pectoral sans toucher la glande mammaire ni les canaux lactifères. La voie d'incision sous-mammaire préserve également la glande. L'allaitement reste possible après l'augmentation mammaire."
                }
            },
            {
                "@type": "Question",
                "name": "Quand peut-on reprendre le sport après une augmentation mammaire ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les activités légères sont possibles dès la première semaine. Le sport modéré (vélo, natation) est autorisé à partir de 4 à 6 semaines. Les sports intensifs sollicitant les pectoraux (musculation, tennis, crossfit) doivent attendre au minimum 8 semaines. Le port d'un soutien-gorge de sport est recommandé pendant les 3 premiers mois."
                }
            },
            {
                "@type": "Question",
                "name": "L'augmentation mammaire est-elle douloureuse ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "L'intervention est sous anesthésie générale, il n'y a aucune douleur pendant l'opération. Les premiers jours, une sensation de tension thoracique comparable à des courbatures est ressentie car les muscles pectoraux sont étirés. Cette sensation diminue en 3 à 5 jours avec des antalgiques. La douleur est évaluée entre 3 et 5 sur 10 les premiers jours."
                }
            },
            {
                "@type": "Question",
                "name": "Quels sont les risques de l'augmentation mammaire ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les complications graves sont rares. Les risques principaux incluent la coque péri-prothétique (3-5%), l'hématome (1-2%), l'infection (< 1%), la perte de sensibilité mamelonnaire (généralement temporaire), le déplacement de prothèse et la rupture d'implant (très rare avec les prothèses modernes). Le taux de complication global est inférieur à 8%."
                }
            }
        ]
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
                            Intervention la plus demandée en chirurgie esthétique
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                            Augmentation mammaire en Tunisie : l'excellence européenne au meilleur prix
                        </h1>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Gagnez en volume et en confiance grâce à des implants mammaires posés par un chirurgien diplômé en France. Prothèses de marque européenne garanties, technique Dual Plane pour un résultat naturel. Forfait tout compris à partir de <b className="text-brand-gold text-3xl mx-2">2 800 €</b> <span className="line-through text-sm opacity-60">6 500 € en France</span>. Hôtel 5 étoiles et suivi 12 mois inclus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/devis" className="w-full sm:w-auto" ctaText="Obtenir mon devis gratuit" ctaLocation="hero_augmentation_mammaire">
                                <Button size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-14 px-8 text-lg w-full">
                                    Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                        <p className="mt-8 text-sm font-medium opacity-80">+2 500 patientes accompagnées | Note 4.8/5 sur Google | Prothèses garanties à vie</p>
                    </div>
                </section>

                {/* INTRODUCTION MÉDICALE */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
                            Qu'est-ce que l'augmentation mammaire ? Tout comprendre
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                            <p>
                                L'augmentation mammaire est l'intervention de chirurgie esthétique la plus pratiquée dans le monde. Elle consiste à augmenter le volume des seins par la mise en place d'implants mammaires (prothèses) afin d'obtenir une poitrine plus généreuse, mieux proportionnée et en harmonie avec la silhouette.
                            </p>
                            <p>
                                Chez Venus Estetika, l'augmentation mammaire est réalisée par le <strong>Dr Balti</strong>, chirurgien esthétique et reconstructeur diplômé de la Faculté de Médecine de Paris. Fort de plus de 15 ans d'expérience, le Dr Balti maîtrise les techniques les plus récentes pour offrir un résultat à la fois esthétique et naturel (comme la technique Dual Plane).
                            </p>

                            <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">La technique Dual Plane</h3>
                            <p>
                                Le Dr Balti privilégie la technique <strong>Dual Plane</strong> pour la majorité des augmentations mammaires. Cette technique de placement consiste à positionner la partie supérieure de la prothèse sous le muscle pectoral (pour un décolleté naturel et une meilleure couverture) et la partie inférieure sous la glande mammaire (pour un galbe voluptueux dans la partie basse du sein). Le Dual Plane offre le meilleur compromis entre résultat naturel, risque réduit de coque et confort au quotidien.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ANIMATION A++ INTERACTIVE */}
                <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <BreastAugmentationInteractiveAnatomy />
                    </div>
                </section>

                {/* AVANTAGES (CRO) */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-12 text-center">
                            Pourquoi choisir Venus Estetika pour vos implants ?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Shield, title: "Chirurgien diplômé en France", desc: "Le Dr Balti est diplômé de la Faculté de Médecine de Paris et membre de l'ISAPS. Plus de 15 ans d'expérience." },
                                { icon: Award, title: "Prothèses européennes", desc: "Nous utilisons exclusivement des prothèses certifiées CE (Motiva, Mentor, Sebbin), garanties à vie contre la rupture." },
                                { icon: Plane, title: "Hôtel 5 étoiles & VIP", desc: "Après la clinique, vous récupérez dans un hôtel 5* avec chambre privée et visites médicales de notre équipe." },
                                { icon: Clock, title: "Suivi post-op 12 mois", desc: "Téléconsultations de suivi à 1, 3, 6 et 12 mois. Le Dr Balti surveille la descente des prothèses en direct." },
                                { icon: Heart, title: "Résultat naturel Dual Plane", desc: "Le Dr Balti adapte le type de prothèse (ronde ou anatomique) et la technique Dual Plane à votre torse." }
                            ].map((adv, i) => (
                                <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
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
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Prix de l'augmentation mammaire : France vs Venus</h2>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-lg font-medium">Prothèses rondes (silicone CE)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">6 000 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 600 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4 pt-2">
                                    <span className="text-lg font-medium">Prothèses anatomiques / Ergonomix</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">6 500 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 800 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">Augmentation + Lifting (Mastopexie)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">8 500 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">3 800 €</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-brand-gold/10 rounded-2xl border border-brand-gold/30">
                                <h4 className="font-bold text-brand-gold mb-4 text-lg">Inclus dans notre forfait tout compris :</h4>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Intervention & anesthésie</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Prothèses certifiées CE / Motiva</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Hôtel 5 étoiles (5 nuits minimum)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Soutien-gorge médical ZeeBa</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Suivi post-opératoire 12 mois</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-white">
                    <div className="container mx-auto px-4">
                        <FAQAccordion data={faqSchema} title="Questions fréquentes sur les implants" />
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">Prête à franchir le pas pour un nouveau galbe ?</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Des centaines de patientes venues d'Europe nous ont fait confiance. Remplissez notre formulaire pour que le Dr Balti puisse étudier vos photos et vous conseiller le meilleur volume.
                        </p>
                        <TrackedLink href="/devis" ctaText="Obtenir mon devis gratuit" ctaLocation="footer_augmentation_mammaire">
                            <Button size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                                Recevoir ma simulation de devis
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">Consultation gratuite | Simulateur 3D sur devis | Réponse sous 24h</p>
                    </div>
                </section>
            </div>
        </>
    );
}
