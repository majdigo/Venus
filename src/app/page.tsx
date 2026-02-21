import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Star, ShieldCheck,
  Stethoscope, Clock, Shield, CheckCircle2, Tv, MapPin
} from "lucide-react";
import { TrustBanner } from "@/components/ui/trust-banner";
import Link from "next/link";
import Image from "next/image";
import { BreastSurgeryHeroVector } from "@/components/ui/vectors/BreastSurgeryHeroVector";
import { getDoctors, getGroupedCategories } from "@/lib/api/odoo-client";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { TrackedSection } from "@/components/tracking/TrackedSection";

export default async function Home() {
  const doctors = await getDoctors(true);
  const categoriesMap = await getGroupedCategories();

  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* HEADER AVEC VRAI LOGO */}
      <header className="w-full border-b border-border bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[180px] h-[50px]">
              <Image
                src="https://venus-estetika.com/wp-content/uploads/2021/05/logo-venus-estetika-1.png"
                alt="Venus Estetika Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
            <Link href="#specialites" className="hover:text-secondary transition-colors">Opérations</Link>
            <Link href="#chirurgiens" className="hover:text-secondary transition-colors">Nos Chirurgiens</Link>
            <Link href="#temoignages" className="hover:text-secondary transition-colors">Avis Patients</Link>
            <Link href="#prix" className="hover:text-secondary transition-colors">Tarifs & Devis</Link>
          </nav>
          <TrackedLink href="/devis" ctaText="Obtenir un Devis Gratuit" ctaLocation="header">
            <Button className="bg-[#D4AF37] text-white hover:bg-[#B38B22] font-bold shadow-md">
              Obtenir un Devis Gratuit
            </Button>
          </TrackedLink>
        </div>
      </header>

      {/* HERO SECTION - MESSAGE PERCUTANT & VRAIE OFFRE */}
      <section className="relative px-4 pt-24 pb-28 md:pt-36 md:pb-40 bg-slate-50 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3F60]/5 to-[#D4AF37]/10 z-0" />

        {/* SVG Animé Haut de Gamme en Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none md:block hidden">
          <BreastSurgeryHeroVector className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Badge variant="outline" className="border-[#D4AF37] text-[#B38B22] bg-[#D4AF37]/10 font-bold px-4 py-1.5 text-sm mb-6 uppercase tracking-wider">
            Clinique N°1 en Tunisie • Séjour Médical VIP
          </Badge>

          <h1 className="text-5xl md:text-7xl font-heading font-black text-[#1C3F60] leading-tight mb-6">
            Chirurgie Esthétique en Tunisie. <br />
            <span className="text-[#D4AF37]">À partir de 1400€ Tout Compris.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed mb-4">
            Optez pour la sécurité, le confort 5 étoiles et l'expertise de nos chirurgiens diplômés.
          </p>
          <p className="text-base text-slate-500 mb-10">
            Hôtel de luxe, pension complète, transferts VIP, clinique agréée et suivi post-opératoire de 12 mois inclus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedLink href="/devis" className="w-full sm:w-auto" ctaText="Demander un Devis Sur-Mesure" ctaLocation="hero">
              <Button size="lg" className="bg-[#1C3F60] text-white hover:bg-[#15304a] text-lg font-bold h-16 px-10 rounded-full w-full shadow-xl hover:shadow-2xl transition-all">
                Demander un Devis Sur-Mesure <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </TrackedLink>
            <TrackedLink href="#specialites" className="w-full sm:w-auto" ctaText="Voir toutes les opérations" ctaLocation="hero" ctaType="secondary">
              <Button size="lg" variant="outline" className="border-[#1C3F60] text-[#1C3F60] hover:bg-slate-100 text-lg font-bold h-16 px-10 rounded-full w-full">
                Voir toutes les opérations
              </Button>
            </TrackedLink>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-bold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <Tv className="w-5 h-5 text-red-500" />
              <span>Vu à la TV ! Ils ont parlé de nous</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>Avis Patients Vérifiés sur Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* VRAIS CHIRURGIENS - SOCIAL PROOF EXTRÊME */}
      <section id="chirurgiens" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1C3F60] mb-4">Nos Vrais Experts Médicaux</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
              Venus Estetika collabore exclusivement avec l'élite de la chirurgie tunisienne, diplômée en France et inscrite à l'ordre national des médecins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-[#D4AF37] transition-colors flex items-start gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0 bg-white border border-[#1C3F60]/10">
                  {/* On attempt de loader la vraie image, sinon fallback css */}
                  <Image src={doc.image_url} alt={doc.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C3F60]">{doc.name}</h3>
                  <p className="text-sm text-slate-500 mt-1 font-medium">{doc.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION - CLEAR SERVICES */}
      <TrackedSection id="specialites" className="py-24 bg-slate-50 border-y border-slate-200" eventName="price_table_view" eventData={{ intervention: 'all', page_category: 'home' }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1C3F60] mb-4">Interventions Proposées</h2>
              <p className="text-slate-600 text-lg font-medium">
                Des soins de qualité dans nos cliniques partenaires (Clinique Hannibal, Clinique Pasteur, Clinique Beau Séjour).
              </p>
            </div>
            <TrackedLink href="/devis" ctaText="Voir les tarifs complets" ctaLocation="price_table">
              <Button className="mt-6 md:mt-0 bg-[#D4AF37] hover:bg-[#B38B22] text-white font-bold h-12 px-6">
                Voir les tarifs complets
              </Button>
            </TrackedLink>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {categoriesMap.map((cat, i) => (
              <Card key={i} className="border-0 shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
                <div className="h-2 w-full bg-[#1C3F60]" />
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-2xl font-bold text-[#1C3F60]">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={cat.link} className="text-[#1C3F60] font-bold text-sm flex items-center hover:text-[#D4AF37] transition-colors">
                    En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* VRAIS TÉMOIGNAGES CLIENTS - GOOGLE MAPS */}
      <section id="temoignages" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1C3F60] mb-4">Témoignages Réels de Nos Patients</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
              Ces avis sont directement extraits de notre page Google Maps vérifiée. L'expérience patient est notre priorité numéro une.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(testi.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{testi.review}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center font-bold text-slate-600">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C3F60]">{testi.name}</h4>
                    <span className="text-xs text-slate-500 font-medium">Patient Vérifié • {testi.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL PERCUTANT */}
      <section className="bg-[#1C3F60] text-white py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Prêt(e) à changer de vie avec Venus Estetika ?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto font-medium">
          Remplissez notre formulaire de devis rapide. Un de nos coordinateurs médicaux experts vous rappellera sous 24h ouvrées pour organiser votre séjour tout compris en Tunisie.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <TrackedLink href="/devis" ctaText="Obtenir mon Devis Gratuit" ctaLocation="cta_final">
            <Button size="lg" className="bg-[#D4AF37] text-white hover:bg-[#B38B22] h-16 px-10 text-xl font-bold rounded-full w-full sm:w-auto shadow-xl">
              Obtenir mon Devis Gratuit
            </Button>
          </TrackedLink>
        </div>
        <p className="font-medium opacity-70 mt-8">Consultation gratuite • Sans engagement • Suivi 12 mois inclus</p>
      </section>

    </main>
  );
}
