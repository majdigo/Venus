import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Building2, Car, HeartPulse, CheckCircle2 } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { MedicalEquipmentShowcase } from "@/components/ui/MedicalEquipmentShowcase";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cliniques Partenaires & Hôtels 5★ | Le Luxe Médical Venus Estetika",
    description: "Découvrez nos infrastructures certifiées ISO. Blocs opératoires ultra-modernes, chambres VIP et convalescence en hôtel 5 étoiles. Le luxe au service de votre santé.",
    alternates: {
        canonical: "https://venus-estetika.com/cliniques-partenaires",
    },
    openGraph: {
        title: "Cliniques Partenaires & Hôtels 5★ — Venus Estetika",
        description: "Blocs opératoires ultra-modernes, chambres VIP, convalescence en hôtel 5★. Le luxe au service de votre santé.",
    },
};

export default function CliniquesPartenairesPage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* HERO SECTION - Luxury Medical Focus */}
            <section className="relative pt-32 pb-20 px-4 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/heroes/medecine-esthetique-hero.jpg"
                        alt="Clinique de luxe"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-sm mb-6">
                        <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
                        L'Excellence Hôtelière & Médicale
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
                        Vos Infrastructures <span className="text-brand-blue">VIP</span> en Tunisie
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Chez Venus Estetika, nous considérons que votre confort psychologique est aussi important que la rigueur chirurgicale. C'est pourquoi nous ne collaborons qu'avec des établissements accrédités à l'international et des hôtels 5 étoiles.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6 text-sm font-medium">
                        <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-brand-blue" /> Certification ISO 9001</div>
                        <div className="flex items-center gap-2"><Building2 className="w-5 h-5 text-brand-blue" /> Cliniques JCI (Joint Commission International)</div>
                    </div>
                </div>
            </section>

            {/* SECTIONS: CLINIQUE */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/heroes/chirurgie-visage-hero.jpg"
                                alt="Bloc Opératoire Ultra-Moderne"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                                <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-2">
                                    <HeartPulse className="text-brand-blue" /> Technologie de Pointe
                                </h4>
                                <p className="text-sm text-gray-600">Blocs équipés des derniers standards européens (Flux laminaire, scopie 3D).</p>
                            </div>
                        </div>

                        <div>
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">L'Hôpital V.I.P</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                Des Cliniques à la Pointe de la Technologie
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Nos cliniques partenaires sont sélectionnées selon des critères drastiques d'hygiène, d'équipement et de sécurité. Les blocs opératoires sont équipés selon les normes européennes les plus strictes pour réduire à zéro le risque nosocomial.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Unités de réanimation intensives 24/7 sur place",
                                    "Chambres individuelles tout confort (TV, Wi-Fi, lit médicalisé)",
                                    "Personnel soignant francophone et disponible",
                                    "Stérilisation centrale de dernière génération"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* MEDICAL EQUIPMENT SHOWCASE */}
            <MedicalEquipmentShowcase />

            {/* SECTIONS: HOTEL & CONCIERGERIE */}
            <section className="py-24 px-4 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">

                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/heroes/chirurgie-silhouette-hero.jpg"
                                alt="Hôtel 5 Étoiles Convalescence"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl" />
                        </div>

                        <div>
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">La Convalescence</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                Le Confort d'un Palace 5 Étoiles
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Après votre autorisation de sortie de la clinique, votre séjour de convalescence se déroule dans l'un de nos hôtels 5★ partenaires (Mövenpick, Four Seasons ou équivalent), situé en bord de mer ou au cœur de zones d'exception.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Une infirmière déléguée par votre chirurgien passera quotidiennement dans votre chambre pour prodiguer les soins post-opératoires et les changements de pansements.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <Star className="w-8 h-8 text-brand-blue mb-4" />
                                    <h4 className="font-bold text-brand-navy mb-2">Pension Complète</h4>
                                    <p className="text-sm text-gray-500">Repas sains et adaptés à votre régime post-opératoire préparés par des chefs étoilés.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <Car className="w-8 h-8 text-brand-blue mb-4" />
                                    <h4 className="font-bold text-brand-navy mb-2">Chauffeur Privé</h4>
                                    <p className="text-sm text-gray-500">Transferts assurés entre l'aéroport, la clinique et l'hôtel dans des véhicules haut de gamme.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Vivez l'Expérience Venus Estetika</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Tous nos forfaits incluent la clinique, l'hôtel 5★ et la conciergerie privée pour que vous n'ayez qu'à vous soucier de votre nouvelle apparence.
                    </p>
                    <Button variant="cta" size="cta" asChild className="rounded-xl shadow-brand-blue/20">
                        <Link href="/devis">
                            Demander un devis sur-mesure <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
