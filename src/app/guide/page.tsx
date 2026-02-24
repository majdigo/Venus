import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Shield, Sun, Stethoscope, MapPin, Calendar, HeartPulse } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Guide du Tourisme Médical en Tunisie | Venus Estetika",
    description: "Tout savoir sur votre séjour médical en Tunisie. Organisation, visas, vols, convalescence et accompagnement VIP. Préparez votre voyage esthétique en toute sérénité.",
    alternates: {
        canonical: "https://venus-estetika.com/guide",
    },
    openGraph: {
        title: "Guide du Tourisme Médical en Tunisie | Venus Estetika",
        description: "Tout savoir sur votre séjour médical en Tunisie. Organisation, visas, vols, convalescence et accompagnement VIP.",
    },
};

export default function GuideTourismeMedicalPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/heroes/medecine-esthetique-hero.jpg"
                        alt="Tourisme Médical Tunisie Sidi Bou Said"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-sm mb-6">
                        <Plane className="w-4 h-4 text-brand-blue" />
                        Guide Officiel 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
                        Votre Voyage Médical en <span className="text-brand-blue">Tunisie</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        De la demande de devis à votre retour chez vous, découvrez comment Venus Estetika organise votre séjour esthétique tout compris. Sécurité, luxe et sérénité.
                    </p>
                </div>
            </section>

            {/* POURQUOI LA TUNISIE */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Destination d'Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Pourquoi Choisir la Tunisie ?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            La Tunisie s'est imposée comme le joyau du tourisme médical mondial grâce à l'expertise de ses chirurgiens et à ses infrastructures de standing international, le tout à des tarifs ultra-compétitifs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
                                <Stethoscope className="text-brand-blue w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">L'Élite Médicale</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nos chirurgiens sont tous diplômés des meilleures facultés françaises ou tunisiennes et sont inscrits à l'Ordre des Médecins. Ils justifient d'une expérience moyenne de 15 ans.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
                                <Shield className="text-brand-blue w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Infrastructures JCI / ISO</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Oubliez vos à priori. Les cliniques tunisiennes partenaires sont ultra-modernes, certifiées ISO 9001, avec des blocs opératoires équipés des dernières technologies allemandes.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
                                <Sun className="text-brand-blue w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Climat & Convalescence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Profitez du soleil méditerranéen pour votre convalescence. Reposez-vous dans un hôtel 5 étoiles en bord de mer, loin du stress quotidien et dans un anonymat total.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE DU SEJOUR */}
            <section className="py-24 px-4 bg-brand-navy text-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">L'Organisation de votre Séjour</h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Un accompagnement VIP &quot;VIP Tout Compris&quot;, étape par étape, depuis l'aéroport jusqu'à votre vol retour.
                        </p>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-blue/50 before:to-transparent">

                        {/* Etape 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-navy bg-brand-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:w-14 sm:h-14 font-bold relative z-10 text-white">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl text-white">Arrivée & Accueil VIP</h3>
                                </div>
                                <p className="text-white/70">Dès votre atterrissage à l'Aéroport de Tunis-Carthage, notre chauffeur privé vous attend avec une pancarte à votre nom. Transfert immédiat et luxueux vers votre clinique ou hôtel 5 étoiles selon l'heure d'arrivée.</p>
                            </div>
                        </div>

                        {/* Etape 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-navy bg-brand-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:w-14 sm:h-14 font-bold relative z-10 text-white">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl text-white">Consultation Pré-Opératoire</h3>
                                </div>
                                <p className="text-white/70">Rencontre avec votre chirurgien et le médecin anesthésiste à la clinique. Bilan sanguin complet, validation finale de l'objectif esthétique et tracé chirurgical. C'est le moment de poser toutes vos dernières questions.</p>
                            </div>
                        </div>

                        {/* Etape 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-navy bg-brand-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:w-14 sm:h-14 font-bold relative z-10 text-white">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl text-white">L'Intervention</h3>
                                </div>
                                <p className="text-white/70">Réalisée dans nos blocs opératoires de classe mondiale. Après l'opération, vous passez en salle de réveil puis vous regagnez votre chambre individuelle VIP pour une nuit (ou plus) sous surveillance médicale constante.</p>
                            </div>
                        </div>

                        {/* Etape 4 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-navy bg-brand-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:w-14 sm:h-14 font-bold relative z-10 text-white">
                                4
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl text-white">Convalescence à l'Hôtel 5*</h3>
                                </div>
                                <p className="text-white/70">Transfert de la clinique vers votre hôtel 5 étoiles en pension complète. Une infirmière passera quotidiennement dans votre chambre pour changer vos pansements et vérifier vos constantes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Prêt à programmer votre séjour ?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Obtenez un devis 100% gratuit comprenant le vol, l'hôtel, et la clinique, analysé par nos chirurgiens chefs.
                    </p>
                    <Button variant="cta" size="cta" asChild className="rounded-xl shadow-brand-blue/20">
                        <Link href="/devis">
                            Obtenir mon Diagnostic Gratuit <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
