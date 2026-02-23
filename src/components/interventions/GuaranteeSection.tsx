"use client";

import { Shield, CheckCircle2, Clock, UserCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface GuaranteeSectionProps {
  variant?: 'light' | 'dark';
}

const guarantees = [
  {
    icon: Shield,
    title: "Retouche gratuite",
    description: "Si le résultat ne vous satisfait pas, la retouche chirurgicale est prise en charge gratuitement.",
  },
  {
    icon: Clock,
    title: "Suivi postopératoire 12 mois",
    description: "Téléconsultations de contrôle à 1, 3, 6 et 12 mois avec votre chirurgien, incluses dans le forfait.",
  },
  {
    icon: UserCheck,
    title: "Chirurgien désigné",
    description: "Celui que vous choisissez est celui qui opère. Pas de changement de dernière minute.",
  },
  {
    icon: CheckCircle2,
    title: "Devis définitif garanti",
    description: "Aucun frais caché. Le prix annoncé dans votre devis est le prix final, tout compris.",
  },
];

export function GuaranteeSection({ variant = 'light' }: GuaranteeSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section className={isDark ? "py-20 px-4 bg-brand-navy text-white" : "py-20 px-4 bg-white"}>
      <div className="container mx-auto max-w-6xl">
        <FadeIn className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${isDark ? 'text-white' : 'text-brand-navy'}`}>
            Nos engagements qualité
          </h2>
          <p className={isDark ? "text-white/70 text-lg max-w-2xl mx-auto" : "text-slate-600 text-lg max-w-2xl mx-auto"}>
            Venus Estetika s&apos;engage contractuellement sur la qualité de votre prise en charge.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g, i) => (
            <StaggerItem key={i}>
              <div
                className={`p-6 rounded-2xl text-center h-full ${
                  isDark
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-slate-50 border border-slate-200'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-brand-blue/20' : 'bg-brand-navy/10'
                }`}>
                  <g.icon className={`w-7 h-7 ${isDark ? 'text-brand-blue' : 'text-brand-navy'}`} />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-brand-navy'}`}>
                  {g.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                  {g.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
