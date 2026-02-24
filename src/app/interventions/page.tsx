import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { NAVIGATION_CATEGORIES } from "@/lib/navigation-data";
import { CATEGORIES } from "@/data/categories";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbData } from "@/lib/schema/breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toutes nos Interventions | Chirurgie Esthétique Tunisie",
  description:
    "Découvrez nos 30+ interventions de chirurgie esthétique en Tunisie : visage, mammaire, silhouette, bariatrique, dentaire, capillaire et médecine esthétique. Prix tout compris dès 150 €.",
  keywords: [
    "interventions chirurgie esthétique tunisie",
    "chirurgie esthétique tunisie catalogue",
    "toutes les interventions tunisie",
    "prix chirurgie tunisie",
  ],
  alternates: {
    canonical: "https://venus-estetika.com/interventions",
  },
  openGraph: {
    title: "Nos 30+ Interventions — Venus Estetika",
    description:
      "Chirurgie du visage, mammaire, silhouette, bariatrique, dentaire, capillaire et médecine esthétique. Forfaits tout compris en Tunisie.",
    url: "https://venus-estetika.com/interventions",
  },
};

// Images and descriptions now derived from centralized data/categories.ts

export default function InterventionsPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={getBreadcrumbData([
          { name: "Accueil", url: "https://venus-estetika.com" },
          {
            name: "Interventions",
            url: "https://venus-estetika.com/interventions",
          },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-brand-navy py-20 lg:py-28 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-teal/20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-blue font-semibold tracking-wider text-sm mb-6 border border-brand-blue/40">
            30+ INTERVENTIONS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Toutes nos <span className="text-brand-blue">Interventions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Chirurgie esthétique, bariatrique, dentaire et capillaire en Tunisie.
            Forfaits tout compris : clinique agréée, hôtel 5★, transferts VIP et
            suivi 12 mois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/devis"
              ctaText="Demander un devis gratuit"
              ctaLocation="interventions_hub_hero"
            >
              <Button
                size="lg"
                className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-14 px-8 text-lg shadow-lg"
              >
                Devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </TrackedLink>
            <TrackedLink
              href="/tarifs"
              ctaText="Voir tous les tarifs"
              ctaLocation="interventions_hub_hero"
              ctaType="secondary"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg"
              >
                Voir les tarifs
              </Button>
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:gap-16">
            {NAVIGATION_CATEGORIES.map((category, catIndex) => (
              <div key={category.slug} id={category.slug}>
                {/* Category Header with Image */}
                <div className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-56">
                  <Image
                    src={
                      CATEGORIES[category.slug]?.heroImage ||
                      "/images/heroes/chirurgie-visage-hero.jpg"
                    }
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1280px"
                    priority={catIndex < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center p-6 md:p-10">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
                        {category.name}
                      </h2>
                      <p className="text-white/80 text-sm md:text-base max-w-xl">
                        {CATEGORIES[category.slug]?.description || ""}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interventions Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.interventions.map((intervention) => (
                    <Link
                      key={intervention.slug}
                      href={`/interventions/${category.slug}/${intervention.slug}`}
                      className="group relative flex flex-col justify-between p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-heading font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                            {intervention.name}
                          </h3>
                          {intervention.isPopular && (
                            <span className="flex items-center gap-0.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">
                              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                              Top
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-brand-blue font-semibold mb-3">
                          {intervention.price}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-brand-teal flex items-center gap-1 transition-colors">
                        En savoir plus{" "}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-brand-navy">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Vous ne savez pas quelle intervention choisir ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Nos coordinateurs médicaux vous orientent gratuitement vers
            l'intervention adaptée à vos besoins et votre budget.
          </p>
          <TrackedLink
            href="/devis"
            ctaText="Obtenir mon devis personnalisé"
            ctaLocation="interventions_hub_bottom_cta"
          >
            <Button
              size="lg"
              className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-14 px-10 text-lg shadow-lg"
            >
              Obtenir mon devis personnalisé{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
