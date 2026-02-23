"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface Testimonial {
  name: string;
  city: string;
  quote: string;
  intervention: string;
  savings?: string;
  rating?: number;
}

interface PatientTestimonialSectionProps {
  title?: string;
  testimonials: Testimonial[];
}

export function PatientTestimonialSection({
  title = "Ils nous ont fait confiance",
  testimonials,
}: PatientTestimonialSectionProps) {
  return (
    <section className="py-20 px-4 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto max-w-6xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Avis de patients vérifiés, extraits de notre page Google Maps.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow flex flex-col h-full">
                {/* Stars */}
                <div className="flex text-amber-500 mb-4">
                  {[...Array(t.rating || 5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 italic leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center font-bold text-brand-navy text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">{t.name}</h4>
                    <span className="text-xs text-slate-500">
                      {t.city} &bull; {t.intervention}
                    </span>
                  </div>
                  {t.savings && (
                    <span className="ml-auto text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {t.savings} économisés
                    </span>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
