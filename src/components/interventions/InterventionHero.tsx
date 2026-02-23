"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { useScrollDepth } from "@/lib/tracking/useScrollDepth";
import { useGtmTimer } from "@/lib/tracking/useGtmTimer";
import { motion } from "framer-motion";

interface InterventionHeroProps {
  title: string;
  subtitle: string;
  price: string;
  priceOld?: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  devisSlug: string;
  stats?: string;
  doctorName?: string;
  doctorImage?: string;
  doctorSpecialty?: string;
}

export function InterventionHero({
  title,
  subtitle,
  price,
  priceOld,
  imageSrc,
  imageAlt,
  badge,
  devisSlug,
  stats,
  doctorName,
  doctorImage,
  doctorSpecialty,
}: InterventionHeroProps) {
  useScrollDepth('intervention');
  const priceViewRef = useGtmTimer('price_view', 5, { intervention: devisSlug });

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden mt-20">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/50 z-10" />

      <div className="container mx-auto px-4 max-w-7xl relative z-20 py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Text content - takes 2 cols */}
          <motion.div
            className="lg:col-span-2 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-blue font-semibold tracking-wider text-sm mb-6 border border-brand-blue/40">
                {badge}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {title}
            </h1>

            <p ref={priceViewRef} className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {subtitle}
              {price && (
                <>
                  {' '}Forfait tout compris à partir de{' '}
                  <b className="text-brand-blue text-2xl md:text-3xl mx-1">{price}</b>
                  {priceOld && (
                    <span className="line-through text-sm opacity-60 ml-2">{priceOld} en France</span>
                  )}
                  .
                </>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedLink
                href={`/devis?intervention=${devisSlug}`}
                className="w-full sm:w-auto"
                ctaText="Obtenir mon devis gratuit"
                ctaLocation={`hero_${devisSlug}`}
              >
                <Button size="lg" className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-14 px-8 text-lg w-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                  Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </TrackedLink>
            </div>

            {stats && (
              <p className="mt-8 text-sm font-medium text-white/70">{stats}</p>
            )}
          </motion.div>

          {/* Doctor card - optional right column */}
          {doctorName && doctorImage && (
            <motion.div
              className="hidden lg:flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-4 border-4 border-brand-blue/40">
                  <Image
                    src={doctorImage}
                    alt={doctorName}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-white font-bold text-lg">{doctorName}</h3>
                {doctorSpecialty && (
                  <p className="text-white/70 text-sm mt-1">{doctorSpecialty}</p>
                )}
                <div className="mt-3 flex items-center justify-center gap-1 text-amber-400 text-sm">
                  {'★★★★★'} <span className="text-white/60 ml-1">4.8/5</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
