import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Plane, Clock, Heart } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { RhinoplastyInteractiveAnatomy } from "@/components/interventions/RhinoplastyInteractiveAnatomy";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { DynamicDoctors } from "@/components/interventions/DynamicDoctors";
import { DynamicReviews } from "@/components/interventions/DynamicReviews";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { AvantApresGallery } from "@/components/interventions/AvantApresGallery";

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
                <InterventionHero
                    title="Rhinoplastie en Tunisie : un nez harmonieux, par un chirurgien diplômé en France"
                    subtitle="Corrigez les imperfections de votre nez et retrouvez un profil équilibré. Intervention réalisée dans une clinique agréée par un chirurgien formé en France."
                    price="2 200 €"
                    priceOld="5 500 €"
                    imageSrc="/images/interventions/rhinoplastie.jpg"
                    imageAlt="Rhinoplastie en Tunisie - Venus Estetika"
                    badge="Intervention N°1 en chirurgie esthétique"
                    devisSlug="rhinoplastie"
                    stats="+2 500 patients accompagnés | Note 4.8/5 sur Google | Chirurgiens membres ISAPS"
                    doctorName="Dr Walid Balti"
                    doctorImage="/images/doctors/dr-walid-balti.jpg"
                    doctorSpecialty="Chirurgie Plastique, diplômé en France"
                />

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

                {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
                <AuthenticLandingSection
                    title="La Rhinoplastie en Tunisie"
                    description="La rhinoplastie simple, est une opération de chirurgie esthétique dont l’objectif est de réparer et remodeler le nez ; sa morphologie, et de le rendre plus parfait, esthétiquement en harmonie avec le visage."
                    images={[
                        "https://venus-estetika.com/wp-content/uploads/2017/12/rhinoplastie-1.jpg",
                        "https://venus-estetika.com/wp-content/uploads/2017/12/rhinoplastie.jpg"
                    ]}
                    contentSnippets={[
                        "Ces défauts sont soit congénitaux, c’est-à-dire qui existent dès la naissance et s’accentuent lors du développement et de la croissance, ou consécutifs à des traumatismes que le nez va subir accidentellement au cours de la vie.",
                        "L'opération s'attache à remodeler délicatement l'os de l'appendice nasal et à corriger les défauts du cartilage.",
                        "Une incision à l'intérieur des narines permet l'accès chirurgical (une micro incision presque invisible peut également être effectuée sur la columelle).",
                        "Qu’il s’agisse d’une chirurgie du nez ou de toute autre chirurgie d’embellissement du visage, un interrogatoire vous concernant est toujours effectué.",
                        "A la fin de l’intervention, des mèches grasses sont placées dans les fosses nasales et une attelle est apposée pour la consolidation."
                    ]}
                    mainColor="navy"
                />

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

                {/* GALERIE AVANT/APRÈS */}
                <AvantApresGallery interventionSlug="rhinoplastie" />

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
                                        <span className="text-2xl font-bold text-brand-blue">2 000 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4 pt-2">
                                    <span className="text-lg font-medium">Rhinoplastie complète</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">5 500 €</span>
                                        <span className="text-2xl font-bold text-brand-blue">2 200 €</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">Rhinoplastie ultrasonique (piézo)</span>
                                    <div className="text-right">
                                        <span className="text-sm line-through opacity-50 block">7 000 €</span>
                                        <span className="text-2xl font-bold text-brand-blue">2 800 €</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-brand-blue/10 rounded-2xl border border-brand-blue/30">
                                <h4 className="font-bold text-brand-blue mb-4 text-lg">Inclus dans notre forfait tout compris :</h4>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Intervention & anesthésie</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Séjour en clinique (1 nuit)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Hôtel 5 étoiles (6 nuits)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Transferts VIP aéroport/hôtel</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Suivi post-opératoire 12 mois</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-white">
                    <FAQAccordion data={faqSchema} title="Questions fréquentes sur la rhinoplastie" />
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <DynamicReviews interventionSlug="rhinoplastie" title="Témoignages rhinoplastie" />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <DynamicDoctors interventionSlug="rhinoplastie" title="Nos chirurgiens pour la rhinoplastie" />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">Votre nouvelle harmonie commence ici</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Chaque mois, des patients de France et de Suisse nous confient leur rhinoplastie. Obtenez votre devis maintenant pour réserver votre date opératoire.
                        </p>
                        <TrackedLink href="/devis?intervention=rhinoplastie" ctaText="Obtenir mon devis gratuit" ctaLocation="footer_rhinoplastie">
                            <Button size="lg" className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
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
