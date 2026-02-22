import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact Venus Estetika | Chirurgie Esthétique Tunisie",
    description:
        "Contactez Venus Estetika : téléphone, WhatsApp, email, formulaire. Réponse sous 24h. Devis gratuit pour votre chirurgie esthétique en Tunisie.",
};

// ---------------------------------------------------------------------------
// Static data — keeps JSX lean and easy to update
// ---------------------------------------------------------------------------

const contactCards = [
    {
        id: "phone",
        icon: Phone,
        iconColor: "text-brand-gold",
        iconBg: "bg-brand-gold/10",
        label: "Téléphone",
        primary: "+216 50 606 780",
        secondary: "Lundi – Samedi, 9h – 18h (Tunis)",
        href: "tel:+21650606780",
        linkLabel: "Appeler maintenant",
    },
    {
        id: "whatsapp",
        icon: MessageCircle,
        iconColor: "text-green-600",
        iconBg: "bg-green-50",
        label: "WhatsApp",
        primary: "+216 50 606 780",
        secondary: "Réponse rapide — immédiate pendant les horaires",
        href: "https://wa.me/21650606780?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20vos%20interventions.",
        linkLabel: "Écrire sur WhatsApp",
    },
    {
        id: "email",
        icon: Mail,
        iconColor: "text-brand-gold",
        iconBg: "bg-brand-gold/10",
        label: "Email",
        primary: "contact@venus-estetika.com",
        secondary: "Réponse sous 24h",
        href: "mailto:contact@venus-estetika.com",
        linkLabel: "Envoyer un email",
    },
    {
        id: "address",
        icon: MapPin,
        iconColor: "text-brand-gold",
        iconBg: "bg-brand-gold/10",
        label: "Adresse",
        primary: "Lac Malaren, Les Berges du Lac",
        secondary: "1053 Tunis, Tunisie",
        href: null,
        linkLabel: null,
    },
];

const paysOptions = [
    { value: "", label: "Sélectionnez votre pays" },
    { value: "fr", label: "France" },
    { value: "ch", label: "Suisse" },
    { value: "be", label: "Belgique" },
    { value: "lu", label: "Luxembourg" },
    { value: "ca", label: "Canada" },
    { value: "other", label: "Autre" },
];

const sujetOptions = [
    { value: "", label: "Sélectionnez un sujet" },
    { value: "devis", label: "Demande de devis" },
    { value: "info", label: "Question sur une intervention" },
    { value: "suivi", label: "Suivi post-opératoire" },
    { value: "other", label: "Autre" },
];

// ---------------------------------------------------------------------------
// Shared input / select class string
// ---------------------------------------------------------------------------

const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold";

// ---------------------------------------------------------------------------
// Page component (Server Component — no 'use client')
// ---------------------------------------------------------------------------

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* ============================================================
                1. HERO SECTION
            ============================================================ */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-20 bg-brand-navy">
                {/* Layered gradient backdrop */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-brand-navy/90" />
                    {/* Decorative gold orb — top-right */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
                    {/* Decorative gold orb — bottom-left */}
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-gold/8 rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white/90 mb-6">
                        <Clock className="w-4 h-4 text-brand-gold" />
                        Réponse garantie sous 24h
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-5 leading-tight">
                        Contactez-nous
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
                        Notre équipe vous répond sous 24h.{" "}
                        <span className="text-brand-gold font-semibold">Devis gratuit</span> et sans engagement.
                    </p>
                </div>
            </section>

            {/* ============================================================
                2. CONTACT CARDS + FORM
            ============================================================ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-10 items-start">

                        {/* ------------------------------------------------
                            LEFT COLUMN — Contact info cards
                        ------------------------------------------------ */}
                        <div className="flex flex-col gap-5">
                            {contactCards.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={card.id}
                                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Icon badge */}
                                            <div
                                                className={`${card.iconBg} rounded-xl p-3 shrink-0 group-hover:scale-105 transition-transform duration-300`}
                                            >
                                                <Icon className={`w-5 h-5 ${card.iconColor}`} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                                                    {card.label}
                                                </p>
                                                <p className="text-brand-navy font-bold text-base leading-snug break-all">
                                                    {card.primary}
                                                </p>
                                                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                                                    {card.secondary}
                                                </p>

                                                {card.href && card.linkLabel && (
                                                    <Link
                                                        href={card.href}
                                                        target={card.href.startsWith("http") ? "_blank" : undefined}
                                                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-gold hover:text-brand-gold/80 transition-colors"
                                                    >
                                                        {card.linkLabel}
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Availability notice */}
                            <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-2xl p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-semibold text-brand-navy">Équipe disponible</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Nos coordinateurs médicaux parlent français et vous accompagnent de la première
                                    consultation jusqu'au retour chez vous.
                                </p>
                            </div>
                        </div>

                        {/* ------------------------------------------------
                            RIGHT COLUMN — Contact form (display-only)
                        ------------------------------------------------ */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                                {/* Form header */}
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-2">
                                        Envoyez-nous un message
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed">
                                        Décrivez votre projet et recevez une réponse personnalisée sous 24h.
                                    </p>
                                </div>

                                {/*
                                    NOTE: This form is static / display-only in this server component.
                                    Client-side interactivity (React Hook Form + Zod + submission) will be
                                    wired in Sprint 3 via a dedicated ContactForm client component.
                                */}
                                <form className="space-y-5" aria-label="Formulaire de contact Venus Estetika">

                                    {/* Row 1 — Prénom + Nom */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="prenom"
                                                className="block text-sm font-semibold text-gray-700 mb-1.5"
                                            >
                                                Prénom <span className="text-brand-gold">*</span>
                                            </label>
                                            <input
                                                id="prenom"
                                                type="text"
                                                name="prenom"
                                                autoComplete="given-name"
                                                placeholder="Jean"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="nom"
                                                className="block text-sm font-semibold text-gray-700 mb-1.5"
                                            >
                                                Nom <span className="text-brand-gold">*</span>
                                            </label>
                                            <input
                                                id="nom"
                                                type="text"
                                                name="nom"
                                                autoComplete="family-name"
                                                placeholder="Dupont"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2 — Email + Téléphone */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-gray-700 mb-1.5"
                                            >
                                                Email <span className="text-brand-gold">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                placeholder="jean.dupont@email.com"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="telephone"
                                                className="block text-sm font-semibold text-gray-700 mb-1.5"
                                            >
                                                Téléphone
                                            </label>
                                            <input
                                                id="telephone"
                                                type="tel"
                                                name="telephone"
                                                autoComplete="tel"
                                                placeholder="+33 6 12 34 56 78"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3 — Pays + Sujet */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="pays"
                                                className="block text-sm font-semibold text-gray-700 mb-1.5"
                                            >
                                                Pays <span className="text-brand-gold">*</span>
                                            </label>
                                            <select
                                                id="pays"
                                                name="pays"
                                                className={inputClass}
                                                defaultValue=""
                                            >
                                                {paysOptions.map((opt) => (
                                                    <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="sujet"
                                                className="block text-sm font-semibold text-gray-700 mb-1.5"
                                            >
                                                Sujet <span className="text-brand-gold">*</span>
                                            </label>
                                            <select
                                                id="sujet"
                                                name="sujet"
                                                className={inputClass}
                                                defaultValue=""
                                            >
                                                {sujetOptions.map((opt) => (
                                                    <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 4 — Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                                        >
                                            Message <span className="text-brand-gold">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Décrivez votre projet, vos questions ou les interventions qui vous intéressent..."
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-brand-gold text-white hover:bg-brand-gold/90 text-base font-semibold h-14 rounded-xl shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/30 transition-all duration-300"
                                        >
                                            Envoyer mon message
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>

                                        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                                            Nous respectons votre vie privée.{" "}
                                            <Link
                                                href="/politique-de-confidentialite"
                                                className="underline underline-offset-2 hover:text-gray-600 transition-colors"
                                            >
                                                Voir notre politique de confidentialité.
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                3. MAP SECTION
            ============================================================ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Section header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-sm font-semibold text-brand-navy mb-4">
                            <MapPin className="w-4 h-4 text-brand-gold" />
                            Notre localisation
                        </div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy">
                            Lac Malaren, Les Berges du Lac — Tunis
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            À 20 minutes de l'aéroport international Tunis-Carthage
                        </p>
                    </div>

                    {/* Map embed */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100" style={{ height: "400px" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5!2d10.2331!3d36.8462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzQ2LjMiTiAxMMKwMTMnNTkuMiJF!5e0!3m2!1sfr!2stn!4v1"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localisation Venus Estetika — Les Berges du Lac, Tunis"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* ============================================================
                4. CTA SECTION
            ============================================================ */}
            <section className="py-16 bg-brand-navy">
                {/* Decorative orbs */}
                <div className="relative overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="container relative mx-auto px-4 max-w-3xl text-center">
                        {/* Gold divider line */}
                        <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-8" />

                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5 leading-tight">
                            Préférez-vous un devis détaillé ?
                        </h2>

                        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                            Notre formulaire de devis personnalisé vous permet de décrire votre projet en détail et de
                            recevoir une estimation précise sous 24h.
                        </p>

                        <Button
                            size="lg"
                            asChild
                            className="bg-brand-gold text-white hover:bg-brand-gold/90 text-base font-semibold px-10 h-14 rounded-xl shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/30 transition-all duration-300"
                        >
                            <Link href="/devis">
                                Accéder au formulaire de devis
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>

                        {/* Reassurance micro-copy */}
                        <p className="text-white/50 text-sm mt-6">
                            Gratuit · Sans engagement · Réponse sous 24h
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
