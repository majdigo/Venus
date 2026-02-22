import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------

export const metadata = {
    title: "Avis Patients | Témoignages Venus Estetika — Chirurgie en Tunisie",
    description:
        "Découvrez les témoignages vérifiés de nos patients : chirurgie esthétique, bariatrique, dentaire et capillaire en Tunisie. Note 4.8/5 sur +127 avis. Résultats réels, patients réels.",
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FeaturedReview {
    name: string;
    initial: string;
    quote: string;
}

interface CategoryTestimonial {
    name: string;
    age: number;
    city: string;
    intervention: string;
    date: string;
    quote: string;
    initials: string;
}

interface TestimonialCategory {
    title: string;
    testimonials: CategoryTestimonial[];
}

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const FEATURED_REVIEWS: FeaturedReview[] = [
    {
        name: "Tiffany Lotz",
        initial: "T",
        quote:
            "Excellente expérience avec Venus Estetika. L'équipe est professionnelle, le suivi avant et après l'intervention est irréprochable. Le chirurgien a pris le temps de tout m'expliquer. L'hôtel est magnifique. Je recommande à 100%.",
    },
    {
        name: "Cesario Vaz",
        initial: "C",
        quote:
            "Très satisfait de mon intervention. Organisation parfaite du début à la fin. Le rapport qualité/prix est imbattable. L'équipe est réactive et disponible même après le retour en France.",
    },
    {
        name: "Caravita Virgile",
        initial: "C",
        quote:
            "Je recommande vivement. Accueil chaleureux, clinique moderne, chirurgien compétent et rassurant. Le résultat correspond exactement à ce qui m'avait été annoncé.",
    },
];

const TESTIMONIAL_CATEGORIES: TestimonialCategory[] = [
    {
        title: "Chirurgie du Visage",
        testimonials: [
            {
                name: "Sophie R.",
                age: 28,
                city: "Paris",
                intervention: "Rhinoplastie",
                date: "mars 2024",
                initials: "SR",
                quote:
                    "Mon nez me complexait depuis l'adolescence. Le Dr Balti a fait un travail remarquable — résultat naturel, profil harmonieux. 6 mois après, je ne peux plus imaginer mon ancien nez.",
            },
            {
                name: "Isabelle R.",
                age: 54,
                city: "Paris",
                intervention: "Blépharoplastie",
                date: "octobre 2024",
                initials: "IR",
                quote:
                    "Blépharoplastie 4 paupières à 54 ans. On dirait que j'ai rajeuni de 10 ans. Cicatrices invisibles. Le séjour à Tunis était un plaisir.",
            },
        ],
    },
    {
        title: "Chirurgie Mammaire",
        testimonials: [
            {
                name: "Julie M.",
                age: 32,
                city: "Toulouse",
                intervention: "Augmentation mammaire",
                date: "juin 2024",
                initials: "JM",
                quote:
                    "Augmentation mammaire avec le Dr Balti. Résultat naturel et proportionné. Il a pris le temps d'écouter exactement ce que je voulais. 2 500€ tout compris au lieu de 6 000€ en France.",
            },
            {
                name: "Claire D.",
                age: 34,
                city: "Toulouse",
                intervention: "Réduction mammaire",
                date: "mai 2024",
                initials: "CD",
                quote:
                    "Réduction de bonnet G à C. Finie la douleur de dos. Le résultat esthétique est superbe en plus. Ma seule question : pourquoi j'ai attendu si longtemps ?",
            },
        ],
    },
    {
        title: "Chirurgie de la Silhouette",
        testimonials: [
            {
                name: "Aurélie M.",
                age: 38,
                city: "Nantes",
                intervention: "Mommy Makeover",
                date: "juin 2024",
                initials: "AM",
                quote:
                    "Mommy Makeover : abdo + augmentation + lipo flancs. Une seule intervention, une seule convalescence. 6 mois après, j'ai retrouvé un corps que je n'avais même pas à 25 ans.",
            },
            {
                name: "Élodie V.",
                age: 31,
                city: "Toulouse",
                intervention: "BBL",
                date: "septembre 2024",
                initials: "EV",
                quote:
                    "BBL : lipo ventre et hanches + lipofilling fesses. Double bénéfice : silhouette affinée et fesses galbées.",
            },
        ],
    },
    {
        title: "Chirurgie Bariatrique",
        testimonials: [
            {
                name: "Laurent M.",
                age: 52,
                city: "Lyon",
                intervention: "Bypass gastrique",
                date: "janvier 2025",
                initials: "LM",
                quote:
                    "IMC de 47. 14 mois après mon bypass, j'ai perdu 58 kg et mon diabète est en rémission. La diététicienne de Venus m'a suivi toute l'année.",
            },
            {
                name: "Nathalie B.",
                age: 41,
                city: "Bruxelles",
                intervention: "Sleeve gastrique",
                date: "avril 2024",
                initials: "NB",
                quote:
                    "Sleeve gastrique. 40 kg perdus en 10 mois. Le Dr Nouira est compétent et rassurant. Le suivi nutritionnel par WhatsApp m'a énormément aidé.",
            },
        ],
    },
    {
        title: "Dentisterie",
        testimonials: [
            {
                name: "Jean-Pierre D.",
                age: 61,
                city: "Lyon",
                intervention: "Implants dentaires",
                date: "mars 2024",
                initials: "JD",
                quote:
                    "6 implants Straumann. En France : 13 000€. Chez Venus : 3 600€. Même marque, même qualité. Mon dentiste à Lyon n'en revenait pas.",
            },
            {
                name: "Marina K.",
                age: 35,
                city: "Nice",
                intervention: "Facettes dentaires",
                date: "novembre 2024",
                initials: "MK",
                quote:
                    "10 facettes E-max pour un sourire parfait. Le Dr Mouelhi est un perfectionniste — il a passé 20 min à ajuster la teinte. 3 000€ au lieu de 10 000€ en France.",
            },
        ],
    },
    {
        title: "Greffe Capillaire",
        testimonials: [
            {
                name: "Thomas P.",
                age: 36,
                city: "Marseille",
                intervention: "Greffe FUE",
                date: "décembre 2023",
                initials: "TP",
                quote:
                    "Greffe FUE 3 000 greffons. Le Dr Bouchnak ne traite qu'un patient par jour — c'est rassurant. 14 mois après, résultat bluffant.",
            },
            {
                name: "Catherine L.",
                age: 47,
                city: "Genève",
                intervention: "Greffe DHI",
                date: "juin 2024",
                initials: "CL",
                quote:
                    "DHI sans rasage. Professeure, je ne pouvais pas me raser la tête. Le Dr Bouchnak m'a proposé la DHI. J'ai repris le travail 5 jours après. Résultat fantastique à 12 mois.",
            },
        ],
    },
];

// ---------------------------------------------------------------------------
// Sub-components (pure presentational, no state — server-safe)
// ---------------------------------------------------------------------------

/** Five gold star icons for rating display. */
function FiveStars() {
    return (
        <div
            className="flex items-center gap-0.5"
            aria-label="Note : 5 étoiles sur 5"
        >
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    className="w-4 h-4 text-brand-gold fill-brand-gold"
                />
            ))}
        </div>
    );
}

/** Avatar circle displaying initials. */
function InitialsAvatar({
    initials,
    variant = "solid",
}: {
    initials: string;
    variant?: "solid" | "light";
}) {
    const colorClass =
        variant === "solid"
            ? "bg-brand-navy text-white"
            : "bg-brand-navy/10 text-brand-navy";
    return (
        <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${colorClass}`}
            aria-hidden="true"
        >
            {initials}
        </div>
    );
}

/** Google-verified badge rendered as an SVG "G" mark + label. */
function GoogleVerifiedBadge() {
    return (
        <div className="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1 bg-white">
            <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 flex-shrink-0"
                aria-hidden="true"
            >
                <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
            </svg>
            <span className="text-xs font-semibold text-gray-700">
                Avis Google vérifié
            </span>
        </div>
    );
}

/** Large featured Google review card. */
function FeaturedReviewCard({ review }: { review: FeaturedReview }) {
    return (
        <article className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 flex flex-col gap-5 h-full">
            {/* Five stars */}
            <FiveStars />

            {/* Quote body */}
            <blockquote className="text-gray-600 italic leading-relaxed flex-1">
                <Quote
                    className="w-5 h-5 text-brand-gold mb-2 opacity-60"
                    aria-hidden="true"
                />
                &ldquo;{review.quote}&rdquo;
            </blockquote>

            {/* Reviewer name + verified badge */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                    <InitialsAvatar initials={review.initial} variant="solid" />
                    <p className="font-bold text-brand-navy">{review.name}</p>
                </div>
                <GoogleVerifiedBadge />
            </div>
        </article>
    );
}

/** Compact testimonial card used in the category grid. */
function CategoryTestimonialCard({
    testimonial,
}: {
    testimonial: CategoryTestimonial;
}) {
    return (
        <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            {/* Five stars */}
            <FiveStars />

            {/* Quote */}
            <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author row */}
            <div className="flex items-center gap-3 mt-auto">
                <InitialsAvatar initials={testimonial.initials} variant="light" />
                <div>
                    <p className="font-semibold text-brand-navy text-sm leading-tight">
                        {testimonial.name},{" "}
                        <span className="font-normal">{testimonial.age} ans</span>
                        {" — "}
                        {testimonial.city}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                        {testimonial.intervention} &bull; {testimonial.date}
                    </p>
                </div>
            </div>
        </article>
    );
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

/**
 * Témoignages page — Server Component.
 *
 * Displays verified patient testimonials organised by medical specialty to
 * build social proof and trust for the Venus Estetika medical tourism clinic.
 * All data is inlined for optimal SSG performance (no external data fetching).
 */
export default function TemoignagesPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* ==============================================================
                1. HERO SECTION
                ============================================================== */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-20 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80">
                <div className="container relative z-10 mx-auto px-4 text-center text-white">

                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-6">
                        <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                        4.8/5 — +127 avis vérifiés
                    </div>

                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-5 leading-tight max-w-3xl mx-auto">
                        Ce que nos patients disent de leur expérience
                    </h1>

                    <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Nos patients partagent leur parcours : avant, pendant et après leur
                        intervention chez Venus Estetika.
                    </p>

                    {/* Inline stat badges */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                        {[
                            {
                                icon: Star,
                                label: "4.8/5 Note moyenne",
                                filled: true,
                            },
                            {
                                icon: CheckCircle2,
                                label: "+127 avis vérifiés",
                                filled: false,
                            },
                            {
                                icon: CheckCircle2,
                                label: "+2 500 patients depuis 2009",
                                filled: false,
                            },
                        ].map(({ icon: Icon, label, filled }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5"
                            >
                                <Icon
                                    className={`w-4 h-4 text-brand-gold flex-shrink-0 ${
                                        filled ? "fill-brand-gold" : ""
                                    }`}
                                />
                                <span className="text-sm font-semibold">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================
                2. FEATURED GOOGLE REVIEWS
                ============================================================== */}
            <section className="bg-white py-24 px-4">
                <div className="container mx-auto max-w-7xl">

                    {/* Section heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
                            Avis Google vérifiés
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Extraits directement depuis notre fiche Google Maps officielle.
                        </p>
                    </div>

                    {/* 3-column grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {FEATURED_REVIEWS.map((review) => (
                            <FeaturedReviewCard key={review.name} review={review} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================
                3. TESTIMONIALS BY CATEGORY
                ============================================================== */}
            <section className="bg-slate-50 py-24 px-4">
                <div className="container mx-auto max-w-7xl">

                    {/* Section heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
                            Témoignages par intervention
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Retrouvez les avis de patients ayant bénéficié de chaque type
                            d&apos;intervention proposée par Venus Estetika.
                        </p>
                    </div>

                    {/* Category sections */}
                    <div className="flex flex-col gap-14">
                        {TESTIMONIAL_CATEGORIES.map((category) => (
                            <div key={category.title}>
                                {/* Category heading with gold accent bar */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div
                                        className="w-1 h-8 bg-brand-gold rounded-full flex-shrink-0"
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-2xl font-heading font-bold text-brand-navy">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Two-column testimonial grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {category.testimonials.map((testimonial) => (
                                        <CategoryTestimonialCard
                                            key={`${testimonial.name}-${testimonial.intervention}`}
                                            testimonial={testimonial}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================
                4. SATISFACTION STATS
                ============================================================== */}
            <section className="bg-white py-16 px-4">
                <div className="container mx-auto max-w-6xl">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "4.8/5", label: "Note moyenne" },
                            { value: "97%", label: "Taux de satisfaction" },
                            { value: "95%", label: "Taux de recommandation" },
                            {
                                value: "28%",
                                label: "Patients revenus pour une 2ème intervention",
                            },
                        ].map(({ value, label }) => (
                            <div
                                key={label}
                                className="bg-slate-50 rounded-2xl border border-gray-100 p-8 text-center shadow-sm"
                            >
                                <p className="text-4xl font-bold text-brand-gold leading-none mb-3">
                                    {value}
                                </p>
                                <p className="text-gray-600 text-sm font-medium leading-snug">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================
                5. FINAL CTA
                ============================================================== */}
            <section className="bg-brand-navy py-24 px-4 text-white">
                <div className="container mx-auto max-w-3xl text-center">

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                        Prêt(e) à vivre votre propre transformation ?
                    </h2>

                    <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                        Rejoignez les +2 500 patients qui nous ont fait confiance. Devis
                        gratuit et sans engagement.
                    </p>

                    <Button
                        size="lg"
                        asChild
                        className="bg-brand-gold text-white hover:bg-brand-gold/90 text-lg px-10 h-14 rounded-full shadow-xl font-bold"
                    >
                        <Link href="/devis">
                            Demander mon devis gratuit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>

                    <p className="text-white/50 text-sm font-medium mt-8">
                        Consultation gratuite &bull; Sans engagement &bull; Réponse sous 24h
                    </p>
                </div>
            </section>

        </div>
    );
}
