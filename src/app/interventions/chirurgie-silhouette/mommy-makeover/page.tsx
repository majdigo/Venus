import { getFaqData } from '@/lib/schema/faq';
import { CheckCircle2, Clock, HeartPulse, Shield } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AbdominoplastieInteractiveAnatomy } from '@/components/interventions/AbdominoplastieInteractiveAnatomy';
import { InterventionHero } from "@/components/interventions/InterventionHero";
import { PatientTestimonialSection } from "@/components/interventions/PatientTestimonialSection";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { SurgeonReferenceSection } from "@/components/interventions/SurgeonReferenceSection";
import { TrackedLink } from '@/components/tracking/TrackedLink';

export const metadata = {
    title: 'Mommy Makeover Tunisie : Prix & Avis (Ventre + Seins) | Venus Estetika',
    description: 'Restaurez votre corps après la grossesse. Forfait Mommy Makeover (Abdominoplastie + Lipo + Seins) tout compris en Tunisie à partir de 4500€.',
};

export default function MommyMakeoverPage() {
    const faqSchema = getFaqData('mommy-makeover');
    const faqs = faqSchema?.mainEntity || [];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* INJECT SEO SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <InterventionHero
                title="Mommy Makeover en Tunisie"
                subtitle="Retrouvez votre corps d'avant grossesse en une seule intervention. Combinez chirurgies de l'abdomen et des seins dans un forfait VIP tout compris 5 fois moins cher qu'en France."
                price="4 500€"
                priceOld="12 000€"
                imageSrc="/images/heroes/chirurgie-silhouette-hero.jpg"
                imageAlt="Mommy Makeover en Tunisie — Venus Estetika"
                badge="Package Chirurgie Post-Maternité"
                devisSlug="mommy-makeover"
                stats="Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h"
                doctorName="Dr Walid Balti"
                doctorImage="/images/doctors/dr-walid-balti.jpg"
                doctorSpecialty="Chirurgie Plastique et Reconstructrice"
            />

            {/* KEY INFO HIGHLIGHTS */}
            <section className="py-12 px-4 -mt-10 relative z-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6 text-brand-navy" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Durée d'intervention</h4>
                                <p className="text-sm text-gray-500">4 à 6 heures</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Anesthésie & Clinique</h4>
                                <p className="text-sm text-gray-500">Générale / 2-3 nuits</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Convalescence</h4>
                                <p className="text-sm text-gray-500">3 à 4 semaines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS INCLUDED SECTION */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Sur Mesure</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                Que comprend un Mommy Makeover ?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Il ne s'agit pas d'une intervention fixe, mais d'une combinaison de chirurgies plastiques personnalisées selon les séquelles de vos grossesses. Plutôt que de subir plusieurs anesthésies et périodes de récupération, nous traitons tout en un seul temps opératoire.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Chirurgie de l'Abdomen (Abdominoplastie)</h4>
                                        <p className="text-gray-600 mt-1">Élimine le tablier abdominal, répare le diastasis (muscles écartés) et rentre le ventre.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Chirurgie Mammaire</h4>
                                        <p className="text-gray-600 mt-1">Lifting mammaire (cure de ptôse) pour remonter les seins, avec ou sans ajout de prothèses Motiva selon votre volume.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Liposuccion Tumescente</h4>
                                        <p className="text-gray-600 mt-1">Aspiration des graisses tenaces (hanches, culotte de cheval, cuisses) pour affiner la silhouette globale.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/heroes/chirurgie-silhouette-hero.jpg"
                                alt="Abdominoplastie et Lifting Mammaire"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE COMPONENT INJECTION FOR MOMMY MAKEOVER (Abdo focus) */}
            <AbdominoplastieInteractiveAnatomy />

            {/* FAQ SECTION */}
            <section className="py-24 px-4 bg-slate-50" id="faq">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">FAQ Post-Grossesse</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Questions Fréquentes</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
                            <div key={index} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                                    {faq.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed md:ml-9">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TÉMOIGNAGES PATIENTS */}
            <PatientTestimonialSection
                title="Témoignages Mommy Makeover"
                testimonials={[
                    { name: "Laure F.", city: "Paris", quote: "Après deux grossesses, mon ventre et mes seins avaient énormément changé. Le Mommy Makeover à Tunis m'a redonné confiance en moi. En une seule opération et une seule convalescence, j'ai retrouvé mon corps d'avant. Incroyable.", intervention: "Abdominoplastie + Lifting Mammaire", savings: "8 500 €", rating: 5 },
                    { name: "Émilie T.", city: "Genève", quote: "J'hésitais entre faire plusieurs opérations séparées ou le Mommy Makeover. Le Dr Balti m'a conseillé le tout en un. C'était la meilleure décision. Le résultat est harmonieux et naturel. L'hôtel 5 étoiles a rendu la récupération très agréable.", intervention: "Abdo + Lipo + Prothèses Mammaires", savings: "9 200 €", rating: 5 },
                    { name: "Camille D.", city: "Marseille", quote: "L'équipe de Venus Estetika m'a accompagnée à chaque étape, de la consultation à distance jusqu'au suivi à l'hôtel. Le Dr Imen Ben Gaied est très attentionnée et à l'écoute. Mon ventre est plat et mes seins sont parfaits.", intervention: "Mommy Makeover complet", savings: "10 000 €", rating: 5 },
                ]}
            />

            {/* GARANTIES */}
            <GuaranteeSection />

            {/* CHIRURGIENS RÉFÉRENTS */}
            <SurgeonReferenceSection
                title="Nos chirurgiens experts en Mommy Makeover"
                surgeons={[
                    { name: "Dr Walid Balti", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-walid-balti.jpg", experience: "+15 ans d'expérience" },
                    { name: "Dr Imen Ben Gaied", specialty: "Chirurgie Plastique et Reconstructrice", image: "/images/doctors/dr-imen-ben-gaied.jpeg", experience: "+12 ans d'expérience" },
                ]}
                devisSlug="mommy-makeover"
            />

            {/* CTA FINAL */}
            <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">
                        Prête à retrouver votre corps d'avant grossesse ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Notre équipe médicale élabore votre plan Mommy Makeover sur mesure gratuitement. Envoyez vos photos pour recevoir un devis personnalisé et transparent.
                    </p>
                    <TrackedLink
                        href="/devis?intervention=mommy-makeover"
                        ctaText="Obtenir mon devis gratuit"
                        ctaLocation="footer_mommy-makeover"
                    >
                        <Button
                            size="lg"
                            className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl"
                        >
                            Recevoir mon plan sur mesure
                        </Button>
                    </TrackedLink>
                    <p className="mt-6 text-sm font-medium text-slate-500">
                        Consultation gratuite | Chirurgiens diplômés | Réponse sous 24h
                    </p>
                </div>
            </section>
        </div>
    );
}
