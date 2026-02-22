import { JsonLd } from '@/components/seo/JsonLd';
import { getFaqData } from '@/lib/schema/faq';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
    ArrowRight,
    CheckCircle2,
    XCircle,
    Sparkles,
    Plane,
    Hotel,
    Stethoscope,
    Phone,
    MapPin,
    Calendar,
    Clock,
    Shield,
    Star,
} from "lucide-react";
import Link from 'next/link';

export const metadata = {
    title: "Séjour Médical Tunisie | Forfait Tout Compris — Venus Estetika",
    description: "Découvrez le déroulement de votre séjour médical en Tunisie avec Venus Estetika. Vol, accueil aéroport, hôtel 5★, clinique agréée, suivi 12 mois. Tout est organisé pour vous. Guide complet.",
};

const journeySteps = [
    {
        number: 1,
        title: "Premier contact",
        duration: "24-48h",
        description:
            "Décrivez votre projet via notre formulaire de devis ou par WhatsApp. Notre équipe vous répond sous 24h avec un devis personnalisé, les coordonnées de votre chirurgien et un planning prévisionnel.",
        bullets: [],
    },
    {
        number: 2,
        title: "Téléconsultation chirurgien",
        duration: "20-30 min",
        description:
            "Rencontre vidéo avec votre chirurgien. Il évalue votre cas, confirme l'indication et la technique.",
        bullets: ["Bilan sanguin prescrit si nécessaire"],
    },
    {
        number: 3,
        title: "Préparation du voyage",
        duration: "1-2 semaines",
        description:
            "Nous coordonnons tout pour votre départ.",
        bullets: [
            "Recommandations de vols (80-200€ A/R)",
            "Chauffeur privé et hôtel 5★",
            "Transferts inclus",
            "Pas de visa (ressortissants FR, BE, CH, LU)",
        ],
    },
    {
        number: 4,
        title: "Arrivée à Tunis",
        duration: "J-1",
        description:
            "Chauffeur à l'aéroport Tunis-Carthage. Installation à l'hôtel. Consultation préopératoire avec votre chirurgien.",
        bullets: [
            "Rencontre avec l'anesthésiste",
            "Marquage chirurgical si nécessaire",
            "Bilan biologique de dernière minute",
        ],
    },
    {
        number: 5,
        title: "L'intervention",
        duration: "30 min à 4h",
        description:
            "Transfert hôtel → clinique. Le chirurgien que vous avez rencontré en téléconsultation EST celui qui opère.",
        bullets: [
            "Équipe d'anesthésie-réanimation complète",
            "Clinique agréée Ministère de la Santé",
            "Chambre de réveil individuelle",
        ],
    },
    {
        number: 6,
        title: "Convalescence hôtel 5★",
        duration: "3-7 nuits",
        description:
            "Soins infirmiers quotidiens à domicile, consultations de contrôle, alimentation adaptée et repos dans un cadre premium.",
        bullets: [
            "Infirmière à domicile incluse",
            "Accompagnant hébergé gratuitement",
            "Room service et petit-déjeuner inclus",
        ],
    },
    {
        number: 7,
        title: "Retour",
        duration: "Jour J",
        description:
            "Dernière consultation de contrôle avant le départ. Remise du dossier médical complet.",
        bullets: [
            "Compte-rendu opératoire",
            "Ordonnances et protocole de convalescence",
            "Transfert hôtel → aéroport inclus",
        ],
    },
    {
        number: 8,
        title: "Suivi post-opératoire",
        duration: "12 mois",
        description:
            "Un suivi rigoureux pour accompagner votre guérison à distance, de votre retour jusqu'au résultat final.",
        bullets: [
            "WhatsApp quotidien (semaines 1 et 2)",
            "Téléconsultation à M1",
            "Bilans à M3, M6, M12",
            "Reprise chirurgicale prise en charge si nécessaire",
        ],
    },
];

const includedItems = [
    "Consultation préopératoire et téléconsultation",
    "Honoraires chirurgien + anesthésiste",
    "Bloc opératoire et hospitalisation",
    "Hôtel 5★ (chambre double, petit-déjeuner)",
    "Tous les transferts privés",
    "Kit post-opératoire (médicaments, gaine, etc.)",
    "Suivi post-opératoire 12 mois",
    "Accompagnant hébergé gratuitement",
    "Assistance WhatsApp 24/7",
    "Dossier médical complet au retour",
];

const notIncludedItems = [
    "Billet d'avion (80-200€ A/R)",
    "Assurance voyage (recommandée, ~30€)",
    "Dépenses personnelles",
    "Excursions touristiques (optionnelles)",
];

const practicalInfoCards = [
    {
        icon: <MapPin className="w-6 h-6 text-brand-gold" />,
        label: "Passeport",
        value: "Valide 6 mois minimum",
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-gold" />,
        label: "Visa",
        value: "Non requis (FR, BE, CH, LU, CA)",
    },
    {
        icon: <Plane className="w-6 h-6 text-brand-gold" />,
        label: "Vol",
        value: "2h depuis Paris, 2h15 Lyon, 2h30 Genève",
    },
    {
        icon: <Clock className="w-6 h-6 text-brand-gold" />,
        label: "Décalage horaire",
        value: "UTC+1 (0 à 1h avec la France)",
    },
    {
        icon: <Star className="w-6 h-6 text-brand-gold" />,
        label: "Monnaie",
        value: "Dinar tunisien (1€ ≈ 3,4 TND)",
    },
    {
        icon: <Phone className="w-6 h-6 text-brand-gold" />,
        label: "Langue",
        value: "Français très largement parlé",
    },
    {
        icon: <Calendar className="w-6 h-6 text-brand-gold" />,
        label: "Climat",
        value: "Méditerranéen (10-35°C)",
    },
];

const seasonRows = [
    { period: "Octobre-Novembre", temp: "18-25°C", status: "Idéal", statusColor: "text-emerald-600 bg-emerald-50" },
    { period: "Mars-Mai", temp: "16-24°C", status: "Idéal", statusColor: "text-emerald-600 bg-emerald-50" },
    { period: "Septembre", temp: "25-30°C", status: "Très bien", statusColor: "text-blue-600 bg-blue-50" },
    { period: "Décembre-Février", temp: "10-16°C", status: "Correct", statusColor: "text-amber-600 bg-amber-50" },
    { period: "Juin-Août", temp: "30-38°C", status: "Chaud", statusColor: "text-red-600 bg-red-50" },
];

export default function SejourMedicalPage() {
    const breadcrumbs = [
        { name: "Accueil", url: "https://venus-estetika.com" },
        { name: "Séjour Médical", url: "https://venus-estetika.com/sejour-medical" },
    ];

    return (
        <>
            <JsonLd graph={{
                faq: getFaqData('sejour-medical'),
                breadcrumb: getBreadcrumbData(breadcrumbs),
            }} />

            <div className="min-h-screen bg-white">

                {/* =========================================================
                    1. HERO SECTION — Navy gradient, no image
                ========================================================= */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0f172a] to-brand-navy/90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4 text-brand-gold" />
                                Forfait Tout Compris
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Votre séjour médical en Tunisie : tout est organisé, vous n&apos;avez qu&apos;à vous concentrer sur vous
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                De l&apos;aéroport à votre retour, Venus Estetika prend tout en charge. Clinique agréée, hôtel 5 étoiles, transferts privés, accompagnement francophone 24/7. Vivez votre transformation en toute sérénité.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8">
                                    <Link href="/devis">
                                        Planifier mon séjour médical <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    2. GUIDED JOURNEY — 8 Steps Timeline
                ========================================================= */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                                Les 8 étapes de votre séjour médical
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                De la prise de contact jusqu&apos;au suivi de 12 mois, chaque étape est orchestrée pour votre confort et sécurité.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-gold/50 to-transparent hidden md:block" />

                            <div className="space-y-8">
                                {journeySteps.map((step) => (
                                    <div key={step.number} className="relative flex gap-6 md:gap-8">
                                        {/* Step number circle */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shadow-lg">
                                                <span className="text-white font-heading font-bold text-lg leading-none">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Step content card */}
                                        <div className="flex-1 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 mb-2">
                                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                                <h3 className="text-xl font-heading font-bold text-brand-navy">
                                                    {step.title}
                                                </h3>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-semibold">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {step.duration}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-3">
                                                {step.description}
                                            </p>
                                            {step.bullets.length > 0 && (
                                                <ul className="space-y-1.5">
                                                    {step.bullets.map((bullet, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                                                            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    3. INCLUS / NON INCLUS
                ========================================================= */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                                Ce qui est inclus dans votre forfait
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Tarification transparente, sans frais cachés. Tout ce dont vous avez besoin pour votre transformation est prévu.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Included */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-brand-navy">
                                        Inclus
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {includedItems.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                                        >
                                            <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Not Included */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <XCircle className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-brand-navy">
                                        Non inclus
                                    </h3>
                                </div>
                                <div className="space-y-3 mb-8">
                                    {notIncludedItems.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                                        >
                                            <XCircle className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                            <span className="text-gray-500 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Reassurance note */}
                                <div className="rounded-2xl bg-brand-gold/5 border border-brand-gold/20 p-4">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong className="text-brand-navy">Bon à savoir :</strong> Un billet Paris-Tunis s&apos;obtient dès 80€ A/R sur Tunisair, Transavia ou Nouvelair. Votre coordinateur vous communique les créneaux optimaux selon votre date d&apos;intervention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    4. INFOS PRATIQUES
                ========================================================= */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                                Informations pratiques
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Tout ce que vous devez savoir avant de vous envoler vers la Tunisie.
                            </p>
                        </div>

                        {/* Practical info cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                            {practicalInfoCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col gap-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                                        {card.icon}
                                    </div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                        {card.label}
                                    </p>
                                    <p className="text-gray-800 font-medium leading-snug text-sm">
                                        {card.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Best season table */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-brand-gold" />
                                <h3 className="text-xl font-heading font-bold text-brand-navy">
                                    Meilleures périodes pour votre séjour médical
                                </h3>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {seasonRows.map((row, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-3 px-8 py-4 items-center hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-800">{row.period}</span>
                                        <span className="text-gray-500">{row.temp}</span>
                                        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-fit ${row.statusColor}`}>
                                            {row.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    5. FAQ
                ========================================================= */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
                                Questions fréquentes sur le séjour médical
                            </h2>
                        </div>
                        <FAQAccordion data={getFaqData('sejour-medical')} />
                    </div>
                </section>

                {/* =========================================================
                    6. CTA FINAL
                ========================================================= */}
                <section className="py-24 px-4 bg-brand-navy text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                            <Hotel className="w-4 h-4 text-brand-gold" />
                            Séjour Médical Premium
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            Planifiez votre séjour médical en Tunisie
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Tout commence par un devis gratuit. Décrivez votre projet, et notre équipe vous prépare un planning personnalisé. Réponse sous 24h.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                asChild
                                className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-8"
                            >
                                <Link href="/devis">
                                    Demander mon devis personnalisé <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-white text-white bg-transparent hover:bg-white/10 text-lg px-8"
                            >
                                <Link href="tel:+21650606780">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Appeler un conseiller
                                </Link>
                            </Button>
                        </div>

                        {/* Trust signals */}
                        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: <Stethoscope className="w-5 h-5 text-brand-gold" />, text: "Chirurgiens diplômés en France" },
                                { icon: <Shield className="w-5 h-5 text-brand-gold" />, text: "Cliniques agréées Ministère Santé" },
                                { icon: <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />, text: "Hôtel 5 étoiles inclus" },
                                { icon: <Clock className="w-5 h-5 text-brand-gold" />, text: "Suivi 12 mois post-opératoire" },
                            ].map((trust, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2">
                                    {trust.icon}
                                    <p className="text-white/70 text-xs text-center">{trust.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
