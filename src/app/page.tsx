import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Star, ShieldCheck,
  Stethoscope, Clock, Shield, CheckCircle2, Tv,
  Hotel, Plane, TrendingDown
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getDoctors, getGroupedCategories } from "@/lib/api/odoo-client";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { TrackedSection } from "@/components/tracking/TrackedSection";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import { TrustBar } from "@/components/cro/TrustBar";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chirurgie Esthétique Tunisie | Prix Tout Compris — Venus Estetika",
  description: "Venus Estetika : Chirurgie esthétique en Tunisie au meilleur prix. Rhinoplastie, liposuccion, augmentation mammaire, BBL, facettes dentaires. Séjour tout compris : clinique agréée, hôtel 5★, transferts VIP. Devis gratuit.",
  keywords: ["chirurgie esthétique tunisie", "chirurgie tunisie prix", "clinique esthétique tunisie", "rhinoplastie tunisie", "liposuccion tunisie", "augmentation mammaire tunisie", "facettes dentaires tunisie", "tourisme médical tunisie"],
  alternates: {
    canonical: "https://venus-estetika.com",
  },
  openGraph: {
    title: "Venus Estetika — Chirurgie Esthétique en Tunisie | Prix Tout Compris",
    description: "Clinique N°1 en tourisme médical. Chirurgiens diplômés, clinique agréée, hôtel 5★. Devis gratuit sous 24h.",
    url: "https://venus-estetika.com",
    siteName: "Venus Estetika",
    type: "website",
    locale: "fr_FR",
  },
};

export default async function Home() {
  const doctors = await getDoctors(true);
  const categoriesMap = await getGroupedCategories();

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://venus-estetika.com/#webpage",
    name: "Venus Estetika — Chirurgie Esthétique en Tunisie",
    description: "Clinique de chirurgie esthétique en Tunisie. Rhinoplastie, sleeve, greffe cheveux, augmentation mammaire. Séjour tout compris à partir de 1 400 €.",
    url: "https://venus-estetika.com",
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://venus-estetika.com/#website",
      name: "Venus Estetika",
      url: "https://venus-estetika.com",
    },
    about: {
      "@type": "MedicalClinic",
      "@id": "https://venus-estetika.com/#clinic",
      name: "Venus Estetika",
      url: "https://venus-estetika.com",
      telephone: "+216 50 606 780",
      email: "contact@venus-estetika.com",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lac Malaren, Les Berges du Lac",
        addressLocality: "Tunis",
        postalCode: "1053",
        addressCountry: "TN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.8325,
        longitude: 10.2347,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
      },
      medicalSpecialty: [
        "PlasticSurgery",
        "Bariatrics",
        "Dentistry",
      ],
    },
  };

  return (
    <div className="flex flex-col">
      <JsonLd data={homepageSchema} />

      {/* HERO SECTION — IMAGE DE FOND IMMERSIVE */}
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero/hero-clinique-venus.jpeg"
          alt="Chirurgie esthétique en Tunisie - Venus Estetika"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/50 z-10" />

        <div className="container mx-auto max-w-6xl relative z-20 px-4 py-24">
          <FadeIn delay={0.1} direction="up">
            <Badge variant="outline" className="border-brand-blue/50 text-brand-blue bg-brand-blue/10 font-bold px-4 py-1.5 text-sm mb-6 uppercase tracking-wider">
              Clinique N°1 en Tunisie &bull; Séjour Médical VIP
            </Badge>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-6 max-w-4xl">
              Chirurgie Esthétique en Tunisie. <br />
              <span className="text-brand-blue">À partir de 1 400 € Tout Compris.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-lg md:text-2xl text-white/90 font-medium max-w-3xl leading-relaxed mb-4">
              Optez pour la sécurité, le confort 5 étoiles et l'expertise de nos chirurgiens diplômés.
            </p>
            <p className="text-base text-white/60 mb-10 max-w-2xl">
              Hôtel de luxe, pension complète, transferts VIP, clinique agréée et suivi post-opératoire de 12 mois inclus.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <TrackedLink href="/devis" className="w-full sm:w-auto" ctaText="Demander un Devis Sur-Mesure" ctaLocation="hero">
                <Button variant="cta" size="cta" className="w-full shadow-xl hover:shadow-2xl">
                  Demander un Devis Sur-Mesure <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </TrackedLink>
              <TrackedLink href="#specialites" className="w-full sm:w-auto" ctaText="Voir toutes les opérations" ctaLocation="hero" ctaType="secondary">
                <Button variant="ctaOutline" size="cta" className="w-full">
                  Voir toutes les opérations
                </Button>
              </TrackedLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="mt-12 flex flex-col md:flex-row items-start gap-4 text-sm font-bold text-white">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Tv className="w-5 h-5 text-red-400" />
                <span>Vu à la TV !</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span>4.8/5 Avis Patients Vérifiés</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TRUST BAR — MULTI-REVIEW */}
      <TrustBar variant="compact" />

      {/* TRUST BAR — 8 USPs */}
      <section className="bg-brand-navy text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: "Cliniques agréées", sub: "Normes internationales" },
              { icon: Plane, label: "Séjour tout compris", sub: "Vol + hôtel + transferts" },
              { icon: Stethoscope, label: "Chirurgiens diplômés", sub: "Formés en France" },
              { icon: Clock, label: "Suivi 12 mois", sub: "Post-opératoire inclus" },
              { icon: Star, label: "4.8/5 sur Google", sub: "Avis patients vérifiés" },
              { icon: Hotel, label: "Hôtel 5 étoiles", sub: "Pension complète incluse" },
              { icon: TrendingDown, label: "Jusqu'à -60%", sub: "vs prix France" },
              { icon: Shield, label: "Satisfaction garantie", sub: "Engagement qualité" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-xs text-white/60">{item.sub}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CHIFFRES CLÉS — ANIMATED COUNTERS */}
      <section className="py-16 bg-gradient-to-b from-brand-navy to-[#1a2248]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 2500, suffix: "+", label: "Patients opérés", prefix: "" },
              { target: 15, suffix: " ans", label: "D'expérience", prefix: "" },
              { target: 60, suffix: "%", label: "D'économie vs France", prefix: "-" },
              { target: 4.8, suffix: "/5", label: "Avis Google", prefix: "", decimals: 1 },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-black text-brand-blue mb-2">
                    <AnimatedCounter
                      target={stat.target}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VRAIS CHIRURGIENS - SOCIAL PROOF EXTRÊME */}
      <section id="chirurgiens" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4">Nos Experts Médicaux</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                Venus Estetika collabore exclusivement avec l'élite de la chirurgie tunisienne, diplômée en France et inscrite à l'ordre national des médecins.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {doctors.map((doc, i) => (
              <StaggerItem key={i}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-blue hover:shadow-lg transition-all overflow-hidden text-center p-6">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mx-auto mb-4 border-4 border-brand-blue/20">
                    <Image src={doc.image_url} alt={doc.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy leading-tight">{doc.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-snug">{doc.specialty}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CATEGORIES SECTION - CLEAR SERVICES */}
      <TrackedSection id="specialites" className="py-24 bg-slate-50 border-y border-slate-200" eventName="price_table_view" eventData={{ intervention: 'all', page_category: 'home' }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4">Interventions Proposées</h2>
                <p className="text-slate-600 text-lg font-medium">
                  Des soins de qualité dans nos cliniques partenaires (Clinique Hannibal, Clinique Pasteur, Clinique Beau Séjour).
                </p>
              </div>
              <TrackedLink href="/devis" ctaText="Voir les tarifs complets" ctaLocation="price_table">
                <Button variant="cta" size="xlg" className="mt-6 md:mt-0">
                  Voir les tarifs complets
                </Button>
              </TrackedLink>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {categoriesMap.map((cat, i) => (
              <StaggerItem key={i}>
                <Card className="border-0 shadow-md bg-white hover:shadow-xl transition-all rounded-2xl overflow-hidden hover:-translate-y-1">
                  <div className="h-2 w-full bg-brand-navy" />
                  <CardHeader className="pb-4">
                    <CardTitle className="font-heading text-2xl font-bold text-brand-navy">
                      {cat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-brand-blue mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href={cat.link} className="text-brand-navy font-bold text-sm flex items-center hover:text-brand-blue transition-colors">
                      En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </TrackedSection>

      {/* VRAIS TÉMOIGNAGES CLIENTS - GOOGLE MAPS */}
      <section id="temoignages" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4">Témoignages Réels de Nos Patients</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                Ces avis sont directement extraits de notre page Google Maps vérifiée. L'expérience patient est notre priorité numéro une.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Tiffany Lotz",
                review: "J'ai été opérée par Madame Ben Gaied. Aucun regret, le suivi à distance était parfait. La clinique est propre. J'ai été accueillie par Adel à l'aéroport, ponctuel et serviable. Le retour est suivi par Tasnime. J'y retournerais les yeux fermés.",
                rating: 5,
                service: "Chirurgie Esthétique"
              },
              {
                name: "Cesario Vaz",
                review: "Mon épouse et moi avons été opérés par le Dr Imen Ben Gaied et nous sommes extrêmement satisfaits. Repas de bonne qualité, infirmières sympathiques. Nous recommandons vivement Venus Estetika pour le bon suivi post-opératoire à distance.",
                rating: 5,
                service: "Chirurgie en Couple"
              },
              {
                name: "Caravita Virgile",
                review: "Belle expérience, prise en charge directe à l'aéroport par Adel. Clinique Beau Séjour très propre, l'intervention s'est super bien passée. Séjour à l'hôtel modeste mais confortable avec belle piscine. Je le conseille vivement !",
                rating: 4,
                service: "Séjour Complet"
              }
            ].map((testi, i) => (
              <StaggerItem key={i}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative h-full flex flex-col hover:border-brand-blue transition-colors hover:-translate-y-1">
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(testi.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed flex-grow">"{testi.review}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center font-bold text-slate-600">
                      {testi.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">{testi.name}</h4>
                      <span className="text-xs text-slate-500 font-medium">Patient Vérifié • {testi.service}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* COMPARAISON DES PRIX — ANCRAGE COGNITIF */}
      <TrackedSection id="prix" className="py-24 bg-white border-t border-slate-200" eventName="price_comparison_view" eventData={{ page_category: 'home' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4">
                Pourquoi la Tunisie ?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                Les mêmes chirurgiens, les mêmes techniques, les mêmes implants certifiés CE. Jusqu&apos;à <b className="text-brand-blue">60% d&apos;économie</b>.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="py-4 px-6 font-heading font-bold text-sm">Intervention</th>
                    <th className="py-4 px-6 font-heading font-bold text-sm text-center">Prix France</th>
                    <th className="py-4 px-6 font-heading font-bold text-sm text-center">Prix Venus Estetika</th>
                    <th className="py-4 px-6 font-heading font-bold text-sm text-center">Économie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Rhinoplastie", france: "5 500€", venus: "2 200€", saving: "-60%" },
                    { name: "Augmentation mammaire", france: "6 500€", venus: "2 500€", saving: "-62%" },
                    { name: "Sleeve gastrique", france: "12 000€", venus: "3 500€", saving: "-71%" },
                    { name: "Liposuccion", france: "4 000€", venus: "2 000€", saving: "-50%" },
                    { name: "Facettes dentaires (×8)", france: "4 800€", venus: "2 400€", saving: "-50%" },
                    { name: "Greffe capillaire FUE", france: "8 000€", venus: "1 900€", saving: "-76%" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <td className="py-4 px-6 font-semibold text-brand-navy">{row.name}</td>
                      <td className="py-4 px-6 text-center text-slate-400 line-through font-medium">{row.france}</td>
                      <td className="py-4 px-6 text-center font-black text-brand-blue text-lg">{row.venus}</td>
                      <td className="py-4 px-6 text-center">
                        <Badge className="bg-green-100 text-green-800 font-bold border-0">{row.saving}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 text-center space-y-4">
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Tout compris : chirurgie + clinique + hôtel 5★ + transferts</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Aucun frais caché • Devis définitif avant le départ</span>
              </div>
              <TrackedLink href="/devis" ctaText="Obtenir mon devis personnalisé" ctaLocation="price_table">
                <Button variant="cta" size="cta" className="mt-4">
                  Obtenir mon devis personnalisé <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </TrackedLink>
              <p className="text-xs text-slate-400 italic mt-2">*Prix indicatifs. Chaque devis est personnalisé selon votre cas clinique.</p>
            </div>
          </FadeIn>
        </div>
      </TrackedSection>

      {/* VOTRE SÉJOUR MÉDICAL — TIMELINE */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4">
                Votre séjour médical, étape par étape
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                De votre premier contact à votre retour chez vous, nous organisons tout pour votre confort et votre sécurité.
              </p>
            </div>
          </FadeIn>
          <GuidedTourTimeline />
        </div>
      </section>

      {/* GARANTIES */}
      <GuaranteeSection variant="light" />

      {/* SEO TEXT BLOCK — LONG-TAIL KEYWORDS */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-6 text-center">
              Chirurgie esthétique en Tunisie : pourquoi choisir Venus Estetika ?
            </h2>
            <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
              <p>
                La <strong>chirurgie esthétique en Tunisie</strong> attire chaque année plus de 30 000 patients européens en quête de soins médicaux de qualité à des tarifs accessibles. Venus Estetika, leader du <strong>tourisme médical en Tunisie</strong> depuis 2009, propose un accompagnement complet : de la téléconsultation gratuite avec votre chirurgien à la convalescence en hôtel 5 étoiles, en passant par les transferts VIP et le suivi post-opératoire de 12 mois.
              </p>
              <p>
                Nos chirurgiens sont <strong>diplômés en France, en Belgique ou en Suisse</strong>, inscrits à l&apos;Ordre National des Médecins de Tunisie et cumulant 10 à 25 ans d&apos;expérience. Les cliniques partenaires sont certifiées aux <strong>normes internationales JCI</strong> avec des blocs opératoires ISO 7 et une anesthésie-réanimation 24h/24.
              </p>
              <p>
                Que vous recherchiez une <strong>rhinoplastie en Tunisie</strong> (dès 2 200 €), une <strong>sleeve gastrique</strong> (dès 4 200 €), une <strong>greffe de cheveux FUE</strong> (dès 1 800 €), une <strong>augmentation mammaire</strong> (dès 2 800 €) ou des <strong>facettes dentaires</strong> (dès 350 € l&apos;unité), Venus Estetika garantit un devis définitif sans frais cachés et une retouche gratuite en cas d&apos;insatisfaction.
              </p>
              <p>
                Notre approche &laquo; tout compris &raquo; élimine le stress organisationnel : <strong>vol, hébergement en hôtel 5 étoiles avec pension complète, transferts aéroport-clinique-hôtel et accompagnement francophone</strong> sont inclus dans chaque forfait. Plus de 2 500 patients nous ont déjà fait confiance avec une note de 4,8/5 sur Google.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL PERCUTANT */}
      <section className="bg-brand-navy text-white py-24 px-4 text-center">
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Prêt(e) à changer de vie avec Venus Estetika ?</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto font-medium">
            Remplissez notre formulaire de devis rapide. Un de nos coordinateurs médicaux experts vous rappellera sous 24h ouvrées pour organiser votre séjour tout compris en Tunisie.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <TrackedLink href="/devis" ctaText="Obtenir mon Devis Gratuit" ctaLocation="cta_final">
              <Button variant="cta" size="cta" className="w-full sm:w-auto shadow-xl">
                Obtenir mon Devis Gratuit
              </Button>
            </TrackedLink>
          </div>
          <p className="font-medium opacity-70 mt-8">Consultation gratuite • Sans engagement • Suivi 12 mois inclus</p>
        </FadeIn>
      </section>

    </div>
  );
}
