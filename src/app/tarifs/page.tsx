import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, XCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbData } from "@/lib/schema/breadcrumb";
import { WHATSAPP_URL } from "@/lib/navigation-data";
import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Tarifs Chirurgie Esthétique Tunisie | Tous les Prix — Venus Estetika",
  description:
    "Tous les tarifs de la chirurgie esthétique en Tunisie chez Venus Estetika. Prix tout compris : chirurgien, clinique, hôtel 5★, transferts, suivi 12 mois. Comparez avec la France. Devis gratuit.",
  alternates: {
    canonical: "https://venus-estetika.com/tarifs",
  },
  openGraph: {
    title: "Tarifs Chirurgie Esthétique Tunisie — Venus Estetika",
    description: "Tous les prix de la chirurgie esthétique en Tunisie. Forfaits tout compris dès 1 500€. Comparez avec la France et économisez 50 à 75%.",
  },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Represents a single pricing row inside a category table.
 */
interface PricingRow {
  intervention: string;
  venusPrice: string;
  francePrice: string;
  savings: string;
  /** Absolute path for the "En savoir plus" link, or null when no dedicated page exists. */
  slug: string | null;
}

/**
 * Represents a full pricing category with multiple procedure rows.
 */
interface PricingCategory {
  id: string;
  title: string;
  categorySlug: string;
  rows: PricingRow[];
}

// ---------------------------------------------------------------------------
// Pricing data — 7 categories with exact Venus / France price comparison
// ---------------------------------------------------------------------------

const pricingCategories: PricingCategory[] = [
  {
    id: "visage",
    title: "Chirurgie du Visage",
    categorySlug: "/interventions/chirurgie-visage",
    rows: [
      {
        intervention: "Rhinoplastie",
        venusPrice: "2 200 – 3 200€",
        francePrice: "5 000 – 8 000€",
        savings: "-56 % à -73 %",
        slug: "/interventions/chirurgie-visage/rhinoplastie",
      },
      {
        intervention: "Blépharoplastie (paupières sup.)",
        venusPrice: "1 500€",
        francePrice: "3 000 – 4 500€",
        savings: "-50 % à -67 %",
        slug: "/interventions/chirurgie-visage/blepharoplastie",
      },
      {
        intervention: "Blépharoplastie (4 paupières)",
        venusPrice: "2 500€",
        francePrice: "5 000 – 7 500€",
        savings: "-50 % à -67 %",
        slug: "/interventions/chirurgie-visage/blepharoplastie",
      },
      {
        intervention: "Lifting cervico-facial",
        venusPrice: "3 500€",
        francePrice: "6 000 – 10 000€",
        savings: "-42 % à -65 %",
        slug: "/interventions/chirurgie-visage/lifting-cervico-facial",
      },
      {
        intervention: "Otoplastie (2 oreilles)",
        venusPrice: "1 500€",
        francePrice: "3 000 – 4 500€",
        savings: "-50 % à -67 %",
        slug: "/interventions/chirurgie-visage/otoplastie",
      },
      {
        intervention: "Lipofilling visage",
        venusPrice: "1 800 – 2 500€",
        francePrice: "3 500 – 7 000€",
        savings: "-49 % à -64 %",
        slug: "/interventions/chirurgie-visage/lipofilling-visage",
      },
      {
        intervention: "Génioplastie (prothèse)",
        venusPrice: "2 000€",
        francePrice: "3 500 – 5 500€",
        savings: "-43 % à -64 %",
        slug: "/interventions/chirurgie-visage/genioplastie",
      },
    ],
  },
  {
    id: "mammaire",
    title: "Chirurgie Mammaire",
    categorySlug: "/interventions/chirurgie-mammaire",
    rows: [
      {
        intervention: "Augmentation mammaire (implants)",
        venusPrice: "2 600 – 2 800€",
        francePrice: "6 000 – 6 500€",
        savings: "-57 % à -57 %",
        slug: "/interventions/chirurgie-mammaire/augmentation-mammaire",
      },
      {
        intervention: "Réduction mammaire",
        venusPrice: "2 800€",
        francePrice: "5 000 – 8 000€",
        savings: "-44 % à -65 %",
        slug: "/interventions/chirurgie-mammaire/reduction-mammaire",
      },
      {
        intervention: "Lifting mammaire (mastopexie)",
        venusPrice: "2 500€",
        francePrice: "4 500 – 7 000€",
        savings: "-44 % à -64 %",
        slug: "/interventions/chirurgie-mammaire/lifting-seins",
      },
      {
        intervention: "Lifting + prothèse",
        venusPrice: "3 500€",
        francePrice: "6 000 – 9 000€",
        savings: "-42 % à -61 %",
        slug: "/interventions/chirurgie-mammaire/lifting-seins",
      },
      {
        intervention: "Lipofilling mammaire",
        venusPrice: "2 800€",
        francePrice: "5 000 – 7 000€",
        savings: "-44 % à -60 %",
        slug: "/interventions/chirurgie-mammaire/lipofilling-mammaire",
      },
    ],
  },
  {
    id: "silhouette",
    title: "Chirurgie de la Silhouette",
    categorySlug: "/interventions/chirurgie-silhouette",
    rows: [
      {
        intervention: "Liposuccion (1-3 zones)",
        venusPrice: "1 500 – 2 500€",
        francePrice: "3 500 – 6 500€",
        savings: "-57 % à -62 %",
        slug: "/interventions/chirurgie-silhouette/liposuccion",
      },
      {
        intervention: "Abdominoplastie",
        venusPrice: "1 800 – 3 200€",
        francePrice: "3 500 – 7 000€",
        savings: "-49 % à -54 %",
        slug: "/interventions/chirurgie-silhouette/abdominoplastie",
      },
      {
        intervention: "BBL (Brazilian Butt Lift)",
        venusPrice: "3 200€",
        francePrice: "6 000 – 9 000€",
        savings: "-47 % à -64 %",
        slug: "/interventions/chirurgie-silhouette/bbl",
      },
      {
        intervention: "Mommy Makeover",
        venusPrice: "4 500€",
        francePrice: "10 000 – 15 000€",
        savings: "-55 % à -70 %",
        slug: "/interventions/chirurgie-silhouette/mommy-makeover",
      },
      {
        intervention: "Lifting des bras",
        venusPrice: "2 200€",
        francePrice: "4 000 – 6 000€",
        savings: "-45 % à -63 %",
        slug: "/interventions/chirurgie-silhouette/lifting-bras",
      },
      {
        intervention: "Lifting des cuisses",
        venusPrice: "2 500€",
        francePrice: "4 500 – 7 000€",
        savings: "-44 % à -64 %",
        slug: "/interventions/chirurgie-silhouette/lifting-cuisses",
      },
    ],
  },
  {
    id: "bariatrique",
    title: "Chirurgie Bariatrique",
    categorySlug: "/interventions/bariatrique",
    rows: [
      {
        intervention: "Sleeve gastrique",
        venusPrice: "3 500€",
        francePrice: "8 000 – 12 000€",
        savings: "-56 % à -71 %",
        slug: "/interventions/bariatrique/sleeve-gastrique",
      },
      {
        intervention: "Bypass gastrique",
        venusPrice: "4 200€",
        francePrice: "9 500 – 15 000€",
        savings: "-56 % à -72 %",
        slug: "/interventions/bariatrique/bypass-gastrique",
      },
      {
        intervention: "Anneau gastrique",
        venusPrice: "2 800€",
        francePrice: "5 000 – 8 000€",
        savings: "-44 % à -65 %",
        slug: "/interventions/bariatrique/anneau-gastrique",
      },
    ],
  },
  {
    id: "dentaire",
    title: "Dentisterie Esthétique",
    categorySlug: "/interventions/dentaire",
    rows: [
      {
        intervention: "Facette dentaire (E-max)",
        venusPrice: "250€/dent",
        francePrice: "900 – 1 300€",
        savings: "-72 % à -81 %",
        slug: "/interventions/dentaire/facettes",
      },
      {
        intervention: "Implant dentaire (complet)",
        venusPrice: "600€/implant",
        francePrice: "1 800 – 2 500€",
        savings: "-67 % à -76 %",
        slug: "/interventions/dentaire/implants-dentaires",
      },
      {
        intervention: "All-on-4 (1 arcade)",
        venusPrice: "4 500€",
        francePrice: "12 000 – 18 000€",
        savings: "-63 % à -75 %",
        slug: null,
      },
      {
        intervention: "Couronne zircone",
        venusPrice: "250€",
        francePrice: "700 – 1 200€",
        savings: "-64 % à -79 %",
        slug: "/interventions/dentaire/couronnes",
      },
      {
        intervention: "Blanchiment professionnel",
        venusPrice: "250€",
        francePrice: "500 – 800€",
        savings: "-50 % à -69 %",
        slug: "/interventions/dentaire/blanchiment",
      },
    ],
  },
  {
    id: "capillaire",
    title: "Greffe Capillaire",
    categorySlug: "/interventions/capillaire",
    rows: [
      {
        intervention: "Greffe FUE (2 000 greffons)",
        venusPrice: "1 900€",
        francePrice: "5 000 – 7 000€",
        savings: "-62 % à -73 %",
        slug: "/interventions/capillaire/greffe-cheveux",
      },
      {
        intervention: "Greffe DHI (2 000 greffons)",
        venusPrice: "2 200€",
        francePrice: "5 000 – 8 000€",
        savings: "-56 % à -73 %",
        slug: "/interventions/capillaire/greffe-dhi",
      },
      {
        intervention: "Greffe de barbe",
        venusPrice: "1 600 – 2 400€",
        francePrice: "4 000 – 10 000€",
        savings: "-60 % à -76 %",
        slug: "/interventions/capillaire/greffe-barbe",
      },
    ],
  },
  {
    id: "medecine",
    title: "Médecine Esthétique",
    categorySlug: "/interventions/medecine-esthetique",
    rows: [
      {
        intervention: "Botox (1 zone)",
        venusPrice: "150€",
        francePrice: "250 – 400€",
        savings: "-40 % à -63 %",
        slug: "/interventions/medecine-esthetique/botox",
      },
      {
        intervention: "Botox (full face, 3 zones)",
        venusPrice: "350€",
        francePrice: "500 – 800€",
        savings: "-30 % à -56 %",
        slug: "/interventions/medecine-esthetique/botox",
      },
      {
        intervention: "Acide hyaluronique (1 seringue)",
        venusPrice: "200 – 300€",
        francePrice: "350 – 500€",
        savings: "-40 % à -43 %",
        slug: "/interventions/medecine-esthetique/acide-hyaluronique",
      },
      {
        intervention: "Peeling moyen (TCA)",
        venusPrice: "250€",
        francePrice: "400 – 700€",
        savings: "-38 % à -64 %",
        slug: "/interventions/medecine-esthetique/peeling",
      },
      {
        intervention: "Mésolift (1 séance)",
        venusPrice: "150€",
        francePrice: "250 – 400€",
        savings: "-40 % à -63 %",
        slug: "/interventions/medecine-esthetique/mesolift",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Included / not included lists
// ---------------------------------------------------------------------------

const includedItems: string[] = [
  "Consultation préopératoire et téléconsultation",
  "Honoraires complets (chirurgien + anesthésiste)",
  "Bloc opératoire, consommables et matériel",
  "Hospitalisation chambre individuelle (1 à 3 nuits)",
  "Hôtel 5 étoiles (3 à 5 nuits, chambre double, petit-déjeuner)",
  "Tous les transferts privés (aéroport ↔ hôtel ↔ clinique)",
  "Kit post-opératoire (médicaments, gaines, pansements)",
  "Consultation de contrôle avant le retour",
  "Suivi post-opératoire 12 mois (WhatsApp + téléconsultation)",
  "Hébergement accompagnant inclus",
  "Assistance francophone 24/7",
];

const notIncludedItems: string[] = [
  "Billet d'avion (80-200€ aller-retour)",
  "Assurance voyage (recommandée, ~30€)",
  "Dépenses personnelles",
];

// ---------------------------------------------------------------------------
// Cost comparison data for "Pourquoi nos prix sont plus bas" section
// ---------------------------------------------------------------------------

const costComparisonRows = [
  {
    label: "Charges sociales",
    france: "45-65 %",
    tunisie: "15-25 %",
  },
  {
    label: "Loyer clinique (/m²)",
    france: "400-800€/mois",
    tunisie: "80-150€/mois",
  },
  {
    label: "Labo dentaire",
    france: "300-500€/couronne",
    tunisie: "60-120€/couronne",
  },
  {
    label: "Impôts",
    france: "IS 25% + TVA 20%",
    tunisie: "IS 15% + TVA 7%",
  },
  {
    label: "Assurance RC",
    france: "8 000-25 000€/an",
    tunisie: "1 500-4 000€/an",
  },
];

const unchangedItems: string[] = [
  "Mêmes marques internationales (Straumann, Nobel, Allergan, Mentor)",
  "Chirurgiens formés dans les mêmes universités",
  "Normes d'hygiène identiques (protocoles OMS)",
  "Matériel chirurgical importé des mêmes fabricants",
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Renders a single pricing category card with its table of procedures.
 * The table scrolls horizontally on narrow viewports to preserve readability.
 */
function PricingCategorySection({ category }: { category: PricingCategory }) {
  return (
    <section
      id={category.id}
      aria-labelledby={`cat-heading-${category.id}`}
      className="scroll-mt-28"
    >
      {/* Category heading row */}
      <div className="flex items-center justify-between mb-6">
        <h3
          id={`cat-heading-${category.id}`}
          className="text-2xl font-heading font-bold text-brand-navy"
        >
          {category.title}
        </h3>
        <Link
          href={category.categorySlug}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline underline-offset-2 transition-colors"
          aria-label={`Découvrir toutes les interventions : ${category.title}`}
        >
          Voir toutes les interventions <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Responsive scroll container */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table
          className="w-full min-w-[640px] border-collapse bg-white"
          role="table"
        >
          <thead>
            <tr className="bg-brand-navy text-white text-sm">
              <th
                scope="col"
                className="px-6 py-4 text-left font-bold uppercase tracking-wider"
              >
                Intervention
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-center font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Venus Estetika
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-center font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Prix en France
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-center font-bold uppercase tracking-wider"
              >
                Économie
              </th>
              <th scope="col" className="px-6 py-4 text-center font-bold uppercase tracking-wider sr-only">
                Lien
              </th>
            </tr>
          </thead>
          <tbody>
            {category.rows.map((row, idx) => (
              <tr
                key={row.intervention}
                className={
                  idx % 2 === 0
                    ? "bg-white hover:bg-brand-blue/5 transition-colors"
                    : "bg-slate-50 hover:bg-brand-blue/5 transition-colors"
                }
              >
                {/* Intervention name */}
                <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                  {row.intervention}
                </td>

                {/* Venus price — bold gold */}
                <td className="px-6 py-4 text-center">
                  <span className="text-xl font-bold text-brand-blue whitespace-nowrap">
                    {row.venusPrice}
                  </span>
                </td>

                {/* France price — muted, struck through */}
                <td className="px-6 py-4 text-center">
                  <span className="text-sm text-gray-400 line-through whitespace-nowrap">
                    {row.francePrice}
                  </span>
                </td>

                {/* Savings badge */}
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap">
                    {row.savings}
                  </span>
                </td>

                {/* "En savoir plus" link */}
                <td className="px-6 py-4 text-center">
                  {row.slug ? (
                    <Link
                      href={row.slug}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:underline underline-offset-2 whitespace-nowrap transition-colors"
                      aria-label={`En savoir plus sur ${row.intervention}`}
                    >
                      En savoir plus <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  ) : (
                    <Link
                      href={`/devis?intervention=${encodeURIComponent(row.intervention)}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:underline underline-offset-2 whitespace-nowrap transition-colors"
                      aria-label={`Demander un devis pour ${row.intervention}`}
                    >
                      Devis <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile "Voir tout" link */}
      <div className="mt-3 sm:hidden text-right">
        <Link
          href={category.categorySlug}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline underline-offset-2"
        >
          Voir toutes les interventions <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

/**
 * TarifsPage — Pricing page for Venus Estetika.
 *
 * Server Component (no interactivity). Displays 7 pricing categories with
 * Venus vs. France price comparisons, a full-package inclusion summary,
 * an economic explanation section, and a final lead-capture CTA.
 */
export default function TarifsPage() {
  const breadcrumbs = [
    { name: "Accueil", url: "https://venus-estetika.com" },
    { name: "Tarifs", url: "https://venus-estetika.com/tarifs" },
  ];

  return (
    <>
    <JsonLd graph={{
      breadcrumb: getBreadcrumbData(breadcrumbs),
      website: {
        "@type": "WebPage",
        "@id": "https://venus-estetika.com/tarifs#webpage",
        "name": "Tarifs Chirurgie Esthétique Tunisie — Venus Estetika",
        "description": "Tous les tarifs de la chirurgie esthétique en Tunisie chez Venus Estetika. Prix tout compris : chirurgien, clinique, hôtel 5★, transferts, suivi 12 mois.",
        "url": "https://venus-estetika.com/tarifs",
        "isPartOf": { "@id": "https://venus-estetika.com/#website" },
        "about": {
          "@type": "MedicalClinic",
          "@id": "https://venus-estetika.com/#clinic"
        }
      }
    }} />
    <div className="flex flex-col min-h-screen bg-white">

      {/* ================================================================
          1. HERO SECTION
      ================================================================ */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden mt-20">
        <Image
          src="/images/hero/hero-clinique-venus.jpeg"
          alt="Clinique Venus Estetika — tarifs chirurgie esthétique Tunisie"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/50 z-10" />

        <div className="container mx-auto max-w-4xl px-4 relative z-20 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold text-white mb-6">
            <Shield className="w-4 h-4 text-brand-blue" aria-hidden="true" />
            Prix Garantis par Devis
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6">
            Nos tarifs :{" "}
            <span className="text-brand-blue">
              des prix transparents, tout compris, sans surprise
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Chez Venus Estetika, le prix affiché est le prix final. Pas de frais cachés. Chaque
            forfait inclut&nbsp;: chirurgien, clinique, hôtel 5★, transferts et suivi 12 mois.
          </p>

          <Link href="/devis">
            <Button
              size="lg"
              className="bg-brand-blue text-white hover:bg-brand-blue/85 text-base font-bold h-13 px-9 rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              Demander un devis personnalisé{" "}
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ================================================================
          2. STICKY CATEGORY NAV
      ================================================================ */}
      <nav
        className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm"
        aria-label="Navigation rapide des catégories de tarifs"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {pricingCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:bg-brand-navy hover:text-white transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================================================================
          3. CE QUI EST INCLUS
      ================================================================ */}
      <section
        className="bg-white py-16 md:py-20 px-4"
        aria-labelledby="inclus-heading"
      >
        <div className="container mx-auto max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2
              id="inclus-heading"
              className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4"
            >
              Inclus dans{" "}
              <span className="text-brand-blue">TOUS</span> nos forfaits
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Une seule facture. Zéro surprise à l&apos;arrivée. Voici exactement ce que vous
              obtenez avec chaque intervention Venus Estetika.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Included card */}
            <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-800">
                  Inclus <span className="text-emerald-600">&#10003;</span>
                </h3>
              </div>
              <ul className="space-y-3" role="list">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included card */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-800">
                    Non inclus <span className="text-red-500">&#10005;</span>
                  </h3>
                </div>
                <ul className="space-y-3" role="list">
                  {notIncludedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle
                        className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Helpful note */}
                <div className="mt-5 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <strong className="text-slate-700">Bon à savoir&nbsp;:</strong> un vol Paris–Tunis
                    coûte entre 80 et 200€ en low-cost (Transavia, Tunisair). Même en ajoutant le billet
                    d&apos;avion, vous économisez en moyenne 3 000 à 6 000€ par rapport à la France.
                  </p>
                </div>
              </div>

              {/* Mini CTA card */}
              <div className="bg-brand-navy rounded-2xl p-7 text-white">
                <h3 className="text-lg font-heading font-bold mb-3">
                  Devis personnalisé sous 24h
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Chaque patient est unique. Votre tarif exact dépend de votre situation médicale.
                  Obtenez une estimation précise, gratuite et sans engagement.
                </p>
                <Link href="/devis">
                  <Button
                    size="sm"
                    className="bg-brand-blue hover:bg-brand-blue/85 text-white font-bold rounded-full px-5"
                  >
                    Demander mon devis{" "}
                    <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. PRICING TABLES — all 7 categories
      ================================================================ */}
      <section
        className="bg-slate-50 py-16 md:py-24 px-4 border-y border-slate-200"
        aria-labelledby="pricing-tables-heading"
      >
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-14">
            <h2
              id="pricing-tables-heading"
              className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4"
            >
              Tous nos prix par catégorie
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Les prix indiqués sont des fourchettes indicatives tout compris. Votre devis
              personnalisé, établi après consultation médicale, confirmera le montant exact.
            </p>
          </div>

          {/* Category sections */}
          <div className="space-y-14">
            {pricingCategories.map((category) => (
              <PricingCategorySection key={category.id} category={category} />
            ))}
          </div>

          {/* Bottom disclaimer */}
          <p className="text-center text-xs text-slate-400 mt-10 max-w-2xl mx-auto">
            * Les prix sont exprimés en euros TTC. Ils incluent l&apos;ensemble des prestations médicales
            et hôtelières décrites. Le devis personnalisé est le seul document contractuel. Tarifs mis
            à jour en 2025.
          </p>
        </div>
      </section>

      {/* ================================================================
          5. POURQUOI NOS PRIX SONT PLUS BAS
      ================================================================ */}
      <section
        className="bg-white py-16 md:py-24 px-4"
        aria-labelledby="why-lower-heading"
      >
        <div className="container mx-auto max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2
              id="why-lower-heading"
              className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4"
            >
              La transparence, pas le low-cost
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
              Nos prix sont 50 à 75% inférieurs à ceux pratiqués en France. Ce n&apos;est pas du
              discount — c&apos;est la réalité économique&nbsp;:
            </p>
          </div>

          {/* Cost comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
            <table
              className="w-full min-w-[480px] border-collapse bg-white"
              role="table"
            >
              <caption className="sr-only">
                Comparaison des coûts structurels entre la France et la Tunisie
              </caption>
              <thead>
                <tr className="bg-slate-100">
                  <th
                    scope="col"
                    className="px-5 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider"
                  >
                    Facteur
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-center text-sm font-bold text-brand-navy uppercase tracking-wider"
                  >
                    France
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-center text-sm font-bold text-brand-blue uppercase tracking-wider"
                  >
                    Tunisie
                  </th>
                </tr>
              </thead>
              <tbody>
                {costComparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-5 py-4 text-sm font-medium text-slate-700">
                      {row.label}
                    </td>
                    <td className="px-5 py-4 text-center text-sm text-red-600 font-semibold">
                      {row.france}
                    </td>
                    <td className="px-5 py-4 text-center text-sm text-emerald-700 font-bold">
                      {row.tunisie}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ce qui NE change PAS */}
          <div className="bg-white rounded-2xl border border-brand-blue/30 shadow-sm p-7 md:p-10">
            <h3 className="text-xl font-heading font-bold text-brand-navy mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-blue" aria-hidden="true" />
              Ce qui NE change PAS
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {unchangedItems.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          6. GUARANTEE SECTION
      ================================================================ */}
      <GuaranteeSection />

      {/* ================================================================
          7. FINAL CTA
      ================================================================ */}
      <section
        className="bg-brand-navy py-16 md:py-24 px-4 text-center relative overflow-hidden"
        aria-labelledby="cta-final-heading"
      >
        {/* Decorative gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-navy to-[#0d2540] pointer-events-none"
          aria-hidden="true"
        />
        {/* Gold divider line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Decorative circles */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-brand-blue/8 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-blue/5 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-3xl relative z-10">
          <h2
            id="cta-final-heading"
            className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6"
          >
            Recevez votre devis personnalisé{" "}
            <span className="text-brand-blue">sous 24h</span>
          </h2>

          <p className="text-lg text-white/75 mb-4 max-w-2xl mx-auto font-medium leading-relaxed">
            Chaque patient est unique. Décrivez votre projet et recevez un devis détaillé,
            personnalisé et garanti — gratuitement et sans engagement.
          </p>

          <p className="text-sm text-white/50 mb-10">
            Plus de 2 000 patients accompagnés depuis 2018 · Taux de satisfaction 98,3 %
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link href="/devis">
              <Button
                size="lg"
                className="bg-brand-blue text-white hover:bg-brand-blue/85 text-base font-bold h-14 px-10 rounded-full w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all"
              >
                Demander mon devis gratuit{" "}
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Comparer les prix sur WhatsApp"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-base font-bold h-14 px-10 rounded-full w-full sm:w-auto transition-colors"
              >
                Comparer les prix sur WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-white/40 text-xs mt-8">
            Consultation médicale gratuite · Réponse sous 24h ouvrées · Aucun engagement
          </p>
        </div>
      </section>

    </div>
    </>
  );
}
