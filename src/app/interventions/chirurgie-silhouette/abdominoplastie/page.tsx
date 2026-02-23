import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { AbdominoplastieInteractiveAnatomy } from "@/components/interventions/AbdominoplastieInteractiveAnatomy";
import { AuthenticLandingSection } from '@/components/interventions/AuthenticLandingSection';
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { TrackedLink } from '@/components/tracking/TrackedLink';
import Link from 'next/link';

export const metadata = {
    title: "Abdominoplastie Tunisie | Ventre Plat Tout Compris dès 1800€ — Venus Estetika",
    description: "Chirurgie du ventre en Tunisie (Plastie abdominale). Traitez le ventre tablier, le diastasis et l'excès de peau. Séjour de luxe 5★ inclus. Devis Gratuit.",
};

export default function AbdominoplastiePage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Chirurgie de la Silhouette", url: "https://venus-estetika.com/interventions/chirurgie-silhouette" },
        { name: "Abdominoplastie", url: "https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie" }
    ];

    return (
        <>
            <JsonLd graph={{
                procedure: getMedicalProcedureData('abdominoplastie'),
                faq: getFaqData('abdominoplastie'),
                howTo: getHowToData('abdominoplastie'),
                breadcrumb: getBreadcrumbData(breadcrumbs)
            }} />

            <div className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <InterventionHero
                    title="Retrouvez un Ventre Plat avec l'Abdominoplastie HD"
                    subtitle="Correction du diastasis, retrait de l'excès de peau tablier et liposuccion des flancs. Une transformation définitive."
                    price="1 800€"
                    priceOld="4 000€"
                    imageSrc="/images/interventions/abdominoplastie.jpg"
                    imageAlt="Abdominoplastie en Tunisie — Venus Estetika"
                    badge="Excellence en Reconstruction Corporelle"
                    devisSlug="abdominoplastie"
                    stats="Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h"
                    doctorName="Dr Walid Balti"
                    doctorImage="/images/doctors/dr-walid-balti.jpg"
                    doctorSpecialty="Chirurgie Plastique et Reconstructrice"
                />

                {/* AUTHENTIC CONTENT SCRAPED FROM ORIGINAL SITE */}
                <AuthenticLandingSection
                    title="L'Abdominoplastie en Tunisie"
                    description="L'abdominoplastie ou Chirurgie du Ventre, Permet De Retirer L'excès De Peau et La Graisse Du Ventre (Traitement du Tablier Abdominal) Tout en Rétablissant Une Solide Musculature. Ventre Plat Garanti Pour Un Prix Définitivement Pas Cher!"
                    images={[
                        "https://venus-estetika.com/wp-content/uploads/2017/11/abdominoplastie.jpg",
                        "https://venus-estetika.com/wp-content/uploads/2017/11/abdominoplastie-incisions.jpg"
                    ]}
                    contentSnippets={[
                        "Une chirurgie esthétique du ventre est indiquée quand il y a des lésions trop importantes sur la peau.",
                        "Cette intervention agit sur les 3 composantes qui déterminent la taille du ventre : la peau, la graisse et les muscles (le diastasis).",
                        "Les cicatrices postopératoires dépendent de la surface de la peau enlevée (mini-lift = cicatrice courte, complète = de hanche à hanche). La cicatrice est placée très bas pour être dissimulée dans les sous-vêtements.",
                        "L'opération se déroule sous anesthésie générale et dure entre 1h et 2h30 selon les cas.",
                        "Dans de nombreux cas, la liposuccion (aspiration des amas graisseux) est associée pendant l'Abdominoplastie. Chez Venus Estetika, cette Lipo est systématiquement incluse pour un résultat optimal."
                    ]}
                    mainColor="navy"
                />

                {/* INTRODUCTION & PROFIL IDEAL */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">La chirurgie reconstructrice du ventre</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    L'abdominoplastie (ou plastie abdominale) est bien plus qu'une simple liposuccion. C'est la seule intervention capable de retirer chirurgicalement l'excès de peau distendue (le "tablier abdominal") et de resserrer les muscles grands droits écartés (le diastasis).
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Elle est l'intervention de référence dans 3 cas précis : après de multiples grossesses (Mommy Makeover), à la suite d'une perte de poids massive (chirurgie bariatrique), ou lors du vieillissement naturel de la peau.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Shield className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Cure de Diastasis</h4>
                                        <p className="text-sm text-gray-500">Resserrement du corset musculaire interne pour un ventre plat solide.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <Award className="w-8 h-8 text-brand-blue mb-3" />
                                        <h4 className="font-bold text-brand-navy mb-2">Cicatrices Basses</h4>
                                        <p className="text-sm text-gray-500">Placées stratégiquement pour être cachées dans vos sous-vêtements.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inclus dans notre forfait</h3>
                                <div className="space-y-4">
                                    {[
                                        "Clinique Haut de Gamme (2 à 3 nuits post-op)",
                                        "Liposuccion associée (flancs et ventre)",
                                        "Gaine de contention (Panty) sur-mesure",
                                        "Hôtel 5 étoiles de convalescence (5 nuits)",
                                        "Transferts VIP (Aéroport, Clinique, Hôtel)",
                                        "Soins infirmiers à l'hôtel et suivi 12 mois"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                            <CheckCircle2 className="text-brand-blue w-6 h-6 shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ANIMATION A++ INTERACTIVE TECHNIQUE */}
                <AbdominoplastieInteractiveAnatomy />

                {/* PATIENT JOURNEY / VISITE GUIDEE */}
                <GuidedTourTimeline />

                {/* PRICING & CRO */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Prix de l'Abdominoplastie en Tunisie</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une tarification tout compris, transparente. Nous déterminons la variante nécessaire avec vous lors du pré-diagnostic photo.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                {/* Pricing Table */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Les Variantes Tarifaires</h3>
                                    <div className="space-y-5">
                                        {[
                                            { zone: "Mini-Abdominoplastie", fr: "3 500 €", tn: "1 800 €" },
                                            { zone: "Abdominoplastie Complète (sans lipo)", fr: "4 500 €", tn: "2 200 €" },
                                            { zone: "Abdo Complète + Lipo (Flancs/Ventre)", fr: "5 500 €", tn: "2 500 €" },
                                            { zone: "Abdominoplastie Circulaire (Bodylift)", fr: "7 000 €", tn: "3 200 €" },
                                        ].map((price, idx) => (
                                            <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="font-semibold text-gray-800">{price.zone}</p>
                                                    <p className="text-sm text-gray-400 line-through mt-0.5">France: {price.fr}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-2xl text-brand-blue">{price.tn}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Convalescence Preview */}
                                <div className="p-8 bg-slate-50">
                                    <Clock className="w-10 h-10 text-brand-blue mb-4" />
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Post-Opératoire & Résultats</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        L'intervention nécessite 2 à 3 nuits d'hospitalisation en raison des drains. Le port de la gaine de contention est obligatoire nuit et jour pendant 4 à 6 semaines. Vous pourrez apprécier le ventre plat final après 3 mois, et la maturation de la cicatrice prendra 12 mois.
                                    </p>
                                    <Button asChild className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 h-12">
                                        <Link href="/devis?intervention=abdominoplastie">Démarrer le diagnostic photo</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Questions Fréquentes</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Tout Savoir sur l'Abdominoplastie</h2>
                        </div>
                        <FAQAccordion data={getFaqData('abdominoplastie')} />
                    </div>
                </section>

                {/* TÉMOIGNAGES PATIENTS */}
                <PatientTestimonialSection
                    title="Avis et Témoignages Abdominoplastie"
                    testimonials={[
                        { name: "Céline B.", city: "Lyon", quote: "Après ma deuxième grossesse, j'avais un tablier qui me complexait énormément. Le Dr Balti m'a rendu un ventre plat et tendu. L'hôtel est digne d'un palace !", intervention: "Abdominoplastie + Lipo", savings: "3 800 €", rating: 5 },
                        { name: "Nadia F.", city: "Marseille", quote: "J'avais très peur de l'anesthésie. Tout le monde a été hyper rassurant. Le résultat est au-delà de mes espérances, la cicatrice est très basse.", intervention: "Plastie abdominale complète", savings: "4 200 €", rating: 5 },
                        { name: "Isabelle M.", city: "Bruxelles", quote: "Suite à ma sleeve, j'avais un ventre tablier insupportable. Le Dr Ben Jemaa a fait un travail remarquable. Je me sens enfin libre dans mon corps.", intervention: "Abdominoplastie post-bariatrique", savings: "5 100 €", rating: 5 },
                    ]}
                />

                {/* GARANTIES */}
                <GuaranteeSection />

                {/* CHIRURGIENS RÉFÉRENTS */}
                <SurgeonReferenceSection
                    title="Nos chirurgiens en chirurgie de l'abdomen"
                    surgeons={[
                        { name: "Dr Walid Balti", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-walid-balti.jpg", experience: "+15 ans d'expérience" },
                        { name: "Dr Hassen Ben Jemaa", specialty: "Chirurgie Plastique, Esthétique et Reconstructrice", image: "/images/doctors/dr-hassen-ben-jemaa.jpg", experience: "+18 ans d'expérience" },
                    ]}
                    devisSlug="abdominoplastie"
                />

                {/* CTA FINAL */}
                <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                            Prête à retrouver un Ventre Plat ?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Notre équipe médicale analyse vos clichés gratuitement pour vous confirmer le type d'abdominoplastie ou liposuccion nécessaire. Réponse rapide et devis 100% transparent.
                        </p>
                        <TrackedLink
                            href="/devis?intervention=abdominoplastie"
                            ctaText="Obtenir mon devis gratuit"
                            ctaLocation="footer_abdominoplastie"
                        >
                            <Button
                                size="lg"
                                className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                            >
                                Recevoir mon diagnostic gratuit
                            </Button>
                        </TrackedLink>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
