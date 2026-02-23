"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { Award } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface Surgeon {
  name: string;
  specialty: string;
  image: string;
  experience?: string;
}

interface SurgeonReferenceSectionProps {
  title?: string;
  subtitle?: string;
  surgeons: Surgeon[];
  devisSlug?: string;
}

export function SurgeonReferenceSection({
  title = "Nos chirurgiens référents",
  subtitle = "Des experts reconnus, diplômés en France et inscrits à l'Ordre National des Médecins de Tunisie.",
  surgeons,
  devisSlug,
}: SurgeonReferenceSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {surgeons.map((surgeon, i) => (
            <StaggerItem key={i}>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center hover:shadow-lg hover:border-brand-blue/30 transition-all h-full">
                <div className="w-28 h-28 relative rounded-full overflow-hidden mx-auto mb-5 border-4 border-brand-blue/20">
                  <Image
                    src={surgeon.image}
                    alt={surgeon.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-1">
                  {surgeon.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-2">
                  {surgeon.specialty}
                </p>
                {surgeon.experience && (
                  <div className="flex items-center justify-center gap-1.5 text-sm text-brand-blue font-medium mb-4">
                    <Award className="w-4 h-4" />
                    {surgeon.experience}
                  </div>
                )}
                {devisSlug && (
                  <TrackedLink
                    href={`/devis?intervention=${devisSlug}`}
                    ctaText="Prendre RDV"
                    ctaLocation="surgeon_card"
                  >
                    <Button
                      variant="outline"
                      className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold"
                    >
                      Prendre RDV
                    </Button>
                  </TrackedLink>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
