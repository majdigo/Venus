import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Award, Plane, Clock, Heart } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { RhinoplastyInteractiveAnatomy } from "@/components/interventions/RhinoplastyInteractiveAnatomy";
import { FAQAccordion } from "@/components/ui/faq-accordion";

export const metadata: Metadata = {
    title: 'Rhinoplastie Tunisie | Prix Tout Compris 2 200€ — Venus Estetika',
    description: 'Rhinoplastie en Tunisie par un chirurgien diplômé en France. Forfait tout compris dès 2 200€ : clinique agréée, hôtel 5 étoiles, suivi 12 mois. Devis gratuit en 24h.',
};

export default function RhinoplastiePage() {

    // JSON-LD Extrait scrupuleusement de la doc de Claude (TICKET-007)
    const surgicalProcedureSchema = {
        "@context": "https://schema.org",
        "@type": "SurgicalProcedure",
        "@id": "https://venus-estetika.com/interventions/chirurgie-visage/rhinoplastie#procedure",
        "name": "Rhinoplastie en Tunisie",
        "alternateName": ["Chirurgie du nez", "Chirurgie nasale esthétique", "Rhinoplasty", "Rhinoplastie esthétique Tunisie"],
        "description": "La rhinoplastie est une intervention de chirurgie esthétique visant à remodeler la structure osseuse et cartilagineuse du nez pour corriger une bosse, affiner la pointe, redresser une déviation ou réduire les narines. Réalisée par le Dr Balti, chirurgien diplômé en France, dans des cliniques agréées en Tunisie. Forfait tout compris à partir de 2 200 €.",
        "procedureType": { "@type": "MedicalProcedureType", "name": "Surgical" },
        "bodyLocation": "Nez (pyramide nasale : os propres du nez, cartilages triangulaires, cartilages alaires, cloison nasale)",
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quel est le prix d'une rhinoplastie en Tunisie tout compris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une rhinoplastie en Tunisie chez Venus Estetika est à partir de 2 200 € tout compris. Ce forfait inclut l'intervention chirurgicale, l'anesthésie, une nuit en clinique agréée, 6 nuits en hôtel 5 étoiles, les transferts VIP et un suivi post-opératoire de 12 mois. En comparaison, la même intervention coûte entre 4 500 € et 7 000 € en France (hors frais d'hospitalisation et de suivi), soit une économie de 50 à 60%."
                }
            },
            {
                "@type": "Question",
                "name": "La rhinoplastie est-elle douloureuse ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La rhinoplastie est réalisée sous anesthésie générale, vous ne ressentez donc aucune douleur pendant l'intervention. Après l'opération, la plupart des patients décrivent une gêne (sensation de nez bouché, pression) plutôt qu'une douleur véritable. Des antalgiques sont prescrits pour les premiers jours. L'inconfort diminue significativement dès le retrait de l'attelle à J+7."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle est la différence entre rhinoplastie ouverte et fermée ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La rhinoplastie fermée (endonasale) passe exclusivement par l'intérieur des narines, sans cicatrice visible. Elle convient aux corrections modérées. La rhinoplastie ouverte utilise une micro-incision sur la columelle pour un accès complet aux structures nasales. Elle est recommandée pour les corrections complexes. La cicatrice de la voie ouverte devient invisible en 2 à 3 mois."
                }
            },
            {
                "@type": "Question",
                "name": "Quand voit-on le résultat définitif d'une rhinoplastie ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le premier résultat est visible dès le retrait de l'attelle à J+7, mais le nez est encore gonflé. À 1 mois, 70% de l'œdème a disparu. À 3 mois, le nez a presque sa forme définitive. Le résultat final apparaît entre 6 et 12 mois après l'intervention, une fois l'œdème résiduel de la pointe complètement résorbé."
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
                            Intervention N°1 en chirurgie esthétique
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                            Rhinoplastie en Tunisie : un nez harmonieux, par un chirurgien diplômé en France
                        </h1>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Corrigez les imperfections de votre nez et retrouvez un profil équilibré. Intervention réalisée dans une clinique agréée par un chirurgien formé en France, avec un forfait tout compris à partir de <b className="text-brand-gold text-3xl mx-2">2 200 €</b> <span className="line-through text-sm opacity-60">5 500 € en France</span>. Hôtel 5 étoiles, transferts et suivi post-opératoire 12 mois inclus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/devis" className="w-full sm:w-auto" ctaText="Obtenir mon devis gratuit" ctaLocation="hero_rhinoplastie">
                                <Button size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-14 px-8 text-lg w-full">
                                    Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                        <p className="mt-8 text-sm font-medium opacity-80">+2 500 patients accompagnés | Note 4.8/5 sur Google | Chirurgiens membres ISAPS</p>
                    </div>
                </section>

                {/* INTRODUCTION MÉDICALE */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
                            Qu'est-ce que la rhinoplastie ? Tout savoir sur la chirurgie du nez
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                            <p>
                                La rhinoplastie est l'intervention de chirurgie esthétique du visage la plus demandée en France et dans le monde. Elle consiste à remodeler la structure osseuse et cartilagineuse du nez pour corriger une bosse, affiner la pointe, redresser une déviation de la cloison nasale ou réduire les narines. L'objectif est d'obtenir un nez harmonieux, en parfaite cohérence avec les proportions du visage, tout en préservant — ou en améliorant — la fonction respiratoire.
                            </p>
                            <p>
                                Chez Venus Estetika, la rhinoplastie est réalisée par le <strong>Dr Balti</strong>, chirurgien esthétique et reconstructeur diplômé de la Faculté de Médecine de Paris, exerçant depuis plus de 15 ans. Le Dr Balti maîtrise les trois techniques principales :
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>La rhinoplastie fermée (endonasale) :</strong> Les incisions sont pratiquées à l'intérieur des narines. Aucune cicatrice visible. Idéal pour les corrections modérées.</li>
                                <li><strong>La rhinoplastie ouverte (externe) :</strong> Une micro-incision sur la columelle permet un accès complet à la structure du nez. Précision maximale pour les corrections complexes.</li>
                                <li><strong>La rhinoplastie ultrasonique (piézo-rhinoplastie) :</strong> Technique de dernière génération utilisant des ultrasons pour sculpter l'os nasal sans fracture, réduisant les ecchymoses de 40 à 60%.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ANIMATION A++ INTERACTIVE */}
                <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <RhinoplastyInteractiveAnatomy />
                    </div>
                </section>

                {/* AVANTAGES (CRO) */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-12 text-center">
                            Pourquoi choisir Venus Estetika pour votre rhinoplastie en Tunisie ?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Shield, title: "Chirurgien diplômé en France", desc: "Le Dr Balti a été formé à la Faculté de Médecine de Paris. Membre de l'ISAPS." },
                                { icon: Award, title: "Cliniques agréées", desc: "Nous opérons exclusivement dans des cliniques agréées par le Ministère de la Santé tunisien avec matériel de pointe." },
                                { icon: Plane, title: "Hôtel 5 étoiles & VIP", desc: "Votre convalescence se déroule en hôtel 5* avec transferts VIP aéroport inclus. Le confort absolu." },
                                { icon: Clock, title: "Suivi post-op 12 mois", desc: "Téléconsultations de contrôle à 1, 3, 6 et 12 mois avec votre chirurgien incluses dans le forfait." },
                                { icon: Heart, title: "Résultat naturel garanti", desc: "Analyse morphologique complète en amont pour garantir un nez en harmonie parfaite avec votre visage." }
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
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Prix de la rhinoplastie : France vs Venus Estetika</h2>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-lg font-medium">Rhinoplastie simple</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">4 500 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 000 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4 pt-2">
                                    <span className="text-lg font-medium">Rhinoplastie complète</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">5 500 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 200 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">Rhinoplastie ultrasonique (piézo)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">7 000 €</span>
                                        <span className="text-2xl font-bold text-brand-gold">2 800 €</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-brand-gold/10 rounded-2xl border border-brand-gold/30">
                                <h4 className="font-bold text-brand-gold mb-4 text-lg">Inclus dans notre forfait tout compris :</h4>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Intervention & anesthésie</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Séjour en clinique (1 nuit)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Hôtel 5 étoiles (6 nuits)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Transferts VIP aéroport/hôtel</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Suivi post-opératoire 12 mois</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-white">
                    <FAQAccordion data={faqSchema} title="Questions fréquentes sur la rhinoplastie" />
                </section>

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">Votre nouvelle harmonie commence ici</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Chaque mois, des patients de France et de Suisse nous confient leur rhinoplastie. Obtenez votre devis maintenant pour réserver votre date opératoire.
                        </p>
                        <TrackedLink href="/devis" ctaText="Obtenir mon devis gratuit" ctaLocation="footer_rhinoplastie">
                            <Button size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
                                Obtenir mon devis gratuit
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">Consultation gratuite | Sans engagement | Réponse sous 24h</p>
                    </div>
                </section>
            </div>
        </>
    );
}
