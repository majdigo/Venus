import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PHONE_NUMBER_FR, PHONE_NUMBER_HREF, EMAIL, ADDRESS, WHATSAPP_URL } from "@/lib/navigation-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Venus Estetika | Chirurgie Esthétique Tunisie",
    description:
        "Contactez Venus Estetika : téléphone, WhatsApp, email, formulaire. Réponse sous 24h. Devis gratuit pour votre chirurgie esthétique en Tunisie.",
    alternates: {
        canonical: "https://venus-estetika.com/contact",
    },
    openGraph: {
        title: "Contactez Venus Estetika",
        description: "Téléphone, WhatsApp, email, formulaire. Réponse sous 24h. Devis gratuit pour votre chirurgie en Tunisie.",
    },
};

// ---------------------------------------------------------------------------
// Schema.org ContactPoint — enriched JSON-LD for the contact page
// ---------------------------------------------------------------------------

const contactPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "MedicalClinic",
            "@id": "https://venus-estetika.com/#clinic",
            "name": "Venus Estetika",
            "url": "https://venus-estetika.com",
            "telephone": "+21650606780",
            "email": "contact@venus-estetika.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lac Malaren, Les Berges du Lac",
                "addressLocality": "Tunis",
                "postalCode": "1053",
                "addressCountry": "TN",
            },
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+21650606780",
                    "contactType": "customer service",
                    "areaServed": ["FR", "CH", "BE", "CA"],
                    "availableLanguage": ["French"],
                    "contactOption": "TollFree",
                    "hoursAvailable": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ],
                        "opens": "09:00",
                        "closes": "18:00",
                    },
                },
                {
                    "@type": "ContactPoint",
                    "email": "contact@venus-estetika.com",
                    "contactType": "customer support",
                    "areaServed": ["FR", "CH", "BE", "CA"],
                    "availableLanguage": ["French"],
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://venus-estetika.com",
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact",
                    "item": "https://venus-estetika.com/contact",
                },
            ],
        },
    ],
};

// ---------------------------------------------------------------------------
// Static data — keeps JSX lean and easy to update
// ---------------------------------------------------------------------------

const contactCards = [
    {
        id: "phone",
        icon: Phone,
        iconColor: "text-brand-blue",
        iconBg: "bg-brand-blue/10",
        label: "Téléphone",
        primary: PHONE_NUMBER_FR,
        secondary: "Lundi – Samedi, 9h – 18h (Tunis)",
        href: PHONE_NUMBER_HREF,
        linkLabel: "Appeler maintenant",
    },
    {
        id: "whatsapp",
        icon: MessageCircle,
        iconColor: "text-green-600",
        iconBg: "bg-green-50",
        label: "WhatsApp",
        primary: PHONE_NUMBER_FR,
        secondary: "Réponse rapide — immédiate pendant les horaires",
        href: WHATSAPP_URL,
        linkLabel: "Écrire sur WhatsApp",
    },
    {
        id: "email",
        icon: Mail,
        iconColor: "text-brand-blue",
        iconBg: "bg-brand-blue/10",
        label: "Email",
        primary: EMAIL,
        secondary: "Réponse sous 24h",
        href: `mailto:${EMAIL}`,
        linkLabel: "Envoyer un email",
    },
    {
        id: "address",
        icon: MapPin,
        iconColor: "text-brand-blue",
        iconBg: "bg-brand-blue/10",
        label: "Adresse",
        primary: ADDRESS.split(',').slice(0, 2).join(','),
        secondary: ADDRESS.split(',').slice(2).join(',').trim(),
        href: null,
        linkLabel: null,
    },
];

// ---------------------------------------------------------------------------
// Page component (Server Component — no 'use client')
// ---------------------------------------------------------------------------

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Schema.org JSON-LD */}
            <JsonLd data={contactPageSchema} />

            {/* ============================================================
                1. HERO SECTION
            ============================================================ */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden mt-20">
                <Image
                    src="/images/hero/hero-contact.png"
                    alt="Contactez Venus Estetika — Chirurgie esthétique en Tunisie"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/50 z-10" />

                <div className="container mx-auto max-w-4xl px-4 relative z-20 py-20 text-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white/90 mb-6">
                        <Clock className="w-4 h-4 text-brand-blue" />
                        Réponse garantie sous 24h
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-5 leading-tight">
                        Contactez-nous
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
                        Notre équipe vous répond sous 24h.{" "}
                        <span className="text-brand-blue font-semibold">Devis gratuit</span> et sans engagement.
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
                                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all duration-300 group"
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
                                                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors"
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
                                    consultation jusqu&apos;au retour chez vous.
                                </p>
                            </div>
                        </div>

                        {/* ------------------------------------------------
                            RIGHT COLUMN — Functional contact form
                        ------------------------------------------------ */}
                        <div className="lg:col-span-2">
                            <ContactForm />
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
                            <MapPin className="w-4 h-4 text-brand-blue" />
                            Notre localisation
                        </div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy">
                            Lac Malaren, Les Berges du Lac — Tunis
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            À 20 minutes de l&apos;aéroport international Tunis-Carthage
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
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="container relative mx-auto px-4 max-w-3xl text-center">
                        {/* Teal divider line */}
                        <div className="w-16 h-0.5 bg-brand-blue mx-auto mb-8" />

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
                            className="bg-brand-blue text-white hover:bg-brand-blue/90 text-base font-semibold px-10 h-14 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all duration-300"
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
