import type { InterventionData, ContentSection } from '@/data/types';
import { getSurgeonsForIntervention, getSurgeon } from '@/data/surgeons';
import { JsonLd } from '@/components/seo/JsonLd';
import { getMedicalProcedureData } from '@/lib/schema/medical-procedure';
import { getFaqData } from '@/lib/schema/faq';
import { getHowToData } from '@/lib/schema/howto';
import { getBreadcrumbData } from '@/lib/schema/breadcrumb';
import { getCategoryForIntervention } from '@/data/categories';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, Plane, Clock, Heart, Star, Sparkles, Stethoscope } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";
import { InterventionHero } from "./InterventionHero";
import { DynamicDoctors } from "./DynamicDoctors";
import { DynamicReviews } from "./DynamicReviews";
import { GuaranteeSection } from "./GuaranteeSection";
import { AuthenticLandingSection } from "./AuthenticLandingSection";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { AvantApresGallery } from "./AvantApresGallery";
import { SurgeonReferenceSection } from "./SurgeonReferenceSection";
import { PatientTestimonialSection } from "./PatientTestimonialSection";
import { BmiCalculator } from "@/components/calculators/BmiCalculator";
import { GuidedTourTimeline } from "@/components/ui/GuidedTourTimeline";
import { FastTrackPhotoUpload } from "@/components/cro/FastTrackPhotoUpload";

// ---------------------------------------------------------------------------
// Icon map: maps string names from data files to Lucide icon components
// ---------------------------------------------------------------------------
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Award, Plane, Clock, Heart, Star, Sparkles, Stethoscope, CheckCircle2,
};

// ---------------------------------------------------------------------------
// Interactive anatomy lazy loaders (code-split per intervention)
// ---------------------------------------------------------------------------
import dynamic from 'next/dynamic';

const ANATOMY_MAP: Record<string, React.ComponentType> = {
  RhinoplastyInteractiveAnatomy: dynamic(() =>
    import('./RhinoplastyInteractiveAnatomy').then(m => ({ default: m.RhinoplastyInteractiveAnatomy })),
  ),
  BreastAugmentationInteractiveAnatomy: dynamic(() =>
    import('./BreastAugmentationInteractiveAnatomy').then(m => ({ default: m.BreastAugmentationInteractiveAnatomy })),
  ),
  SleeveGastriqueInteractiveAnatomy: dynamic(() =>
    import('./SleeveGastriqueInteractiveAnatomy').then(m => ({ default: m.SleeveGastriqueInteractiveAnatomy })),
  ),
  AbdominoplastieInteractiveAnatomy: dynamic(() =>
    import('./AbdominoplastieInteractiveAnatomy').then(m => ({ default: m.AbdominoplastieInteractiveAnatomy })),
  ),
  BBLInteractiveAnatomy: dynamic(() =>
    import('./BBLInteractiveAnatomy').then(m => ({ default: m.BBLInteractiveAnatomy })),
  ),
  BypassGastriqueInteractiveAnatomy: dynamic(() =>
    import('./BypassGastriqueInteractiveAnatomy').then(m => ({ default: m.BypassGastriqueInteractiveAnatomy })),
  ),
  FacettesInteractiveAnatomy: dynamic(() =>
    import('./FacettesInteractiveAnatomy').then(m => ({ default: m.FacettesInteractiveAnatomy })),
  ),
  ImplantsDentairesInteractiveAnatomy: dynamic(() =>
    import('./ImplantsDentairesInteractiveAnatomy').then(m => ({ default: m.ImplantsDentairesInteractiveAnatomy })),
  ),
  LiposuccionInteractiveAnatomy: dynamic(() =>
    import('./LiposuccionInteractiveAnatomy').then(m => ({ default: m.LiposuccionInteractiveAnatomy })),
  ),
  GreffeCheveuxInteractiveSimulator: dynamic(() =>
    import('./GreffeCheveuxInteractiveSimulator').then(m => ({ default: m.GreffeCheveuxInteractiveSimulator })),
  ),
};

// ---------------------------------------------------------------------------
// Section Renderers
// ---------------------------------------------------------------------------

function IntroSectionRenderer({ section }: { section: Extract<ContentSection, { type: 'intro' }> }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
          {section.title}
        </h2>
        <div
          className="prose prose-lg max-w-none text-slate-600 space-y-6"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>
    </section>
  );
}

function TechniquesSectionRenderer({ section }: { section: Extract<ContentSection, { type: 'techniques' }> }) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <ul className="list-disc pl-6 space-y-2 text-slate-600 prose prose-lg max-w-none">
          {section.items.map((tech, i) => (
            <li key={i}><strong>{tech.name} :</strong> {tech.description}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AdvantagesSectionRenderer({ section }: { section: Extract<ContentSection, { type: 'advantages' }> }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {section.title && (
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-12 text-center">
            {section.title}
          </h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.items.map((adv, i) => {
            const IconComponent = ICON_MAP[adv.icon] || Shield;
            return (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{adv.title}</h3>
                <p className="text-slate-600 leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IdealProfileSectionRenderer({ section }: { section: Extract<ContentSection, { type: 'ideal-profile' }> }) {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 text-center">
          {section.title}
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-blue mt-1 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Dispatch to the right renderer based on section.type */
function SectionRenderer({ section }: { section: ContentSection }) {
  switch (section.type) {
    case 'intro':
      return <IntroSectionRenderer section={section} />;
    case 'techniques':
      return <TechniquesSectionRenderer section={section} />;
    case 'advantages':
      return <AdvantagesSectionRenderer section={section} />;
    case 'authentic':
      return (
        <AuthenticLandingSection
          title={section.title}
          description={section.description}
          images={section.images}
          contentSnippets={section.snippets || []}
          mainColor="navy"
        />
      );
    case 'ideal-profile':
      return <IdealProfileSectionRenderer section={section} />;
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Pricing Section
// ---------------------------------------------------------------------------

function PricingSection({ data, devisSlug }: { data: InterventionData['pricing']; devisSlug: string }) {
  return (
    <section className="py-20 px-4 bg-brand-navy text-white">
      <div className="container mx-auto max-w-4xl text-center">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">{data.title}</h2>
        )}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left">
          <div className="space-y-4">
            {data.rows.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between items-center ${i < data.rows.length - 1 ? 'border-b border-white/10 pb-4' : ''} ${i > 0 ? 'pt-2' : ''}`}
              >
                <span className="text-lg font-medium">{row.label}</span>
                <div className="text-right">
                  {row.priceFrance && (
                    <span className="text-sm line-through opacity-50 block">{row.priceFrance}</span>
                  )}
                  <span className="text-2xl font-bold text-brand-blue">{row.priceVenus}</span>
                </div>
              </div>
            ))}
          </div>
          {data.includes.length > 0 && (
            <div className="mt-10 p-6 bg-brand-blue/10 rounded-2xl border border-brand-blue/30">
              <h4 className="font-bold text-brand-blue mb-4 text-lg">Inclus dans notre forfait tout compris :</h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                {data.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Bottom CTA
// ---------------------------------------------------------------------------

function BottomCTA({ devisSlug, interventionName }: { devisSlug: string; interventionName: string }) {
  return (
    <section className="py-24 px-4 bg-slate-50 text-center border-t border-slate-200">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-heading font-bold text-brand-navy mb-6">Votre nouvelle harmonie commence ici</h2>
        <p className="text-xl text-slate-600 mb-10">
          Chaque mois, des patients de France et de Suisse nous confient leur {interventionName.toLowerCase()}. Obtenez votre devis maintenant pour réserver votre date opératoire.
        </p>
        <TrackedLink href={`/devis?intervention=${devisSlug}`} ctaText="Obtenir mon devis gratuit" ctaLocation={`footer_${devisSlug}`}>
          <Button size="lg" className="bg-brand-blue text-white hover:bg-brand-blue/85 font-bold h-16 px-12 text-xl rounded-full shadow-xl">
            Obtenir mon devis gratuit
          </Button>
        </TrackedLink>
        <p className="mt-6 text-sm font-medium text-slate-500">Consultation gratuite | Sans engagement | Réponse sous 24h</p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main Template
// ---------------------------------------------------------------------------

interface InterventionPageTemplateProps {
  data: InterventionData;
}

export function InterventionPageTemplate({ data }: InterventionPageTemplateProps) {
  // Resolve surgeon
  const primarySurgeon = getSurgeon(data.primarySurgeon);
  const allSurgeons = getSurgeonsForIntervention(data.slug);
  const category = getCategoryForIntervention(data.slug);

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Accueil", url: "https://venus-estetika.com" },
    ...(category
      ? [{ name: category.name, url: `https://venus-estetika.com/interventions/${category.slug}` }]
      : []),
    { name: data.name, url: `https://venus-estetika.com/interventions/${data.categorySlug}/${data.slug}` },
  ];

  // Interactive anatomy component (if configured)
  const AnatomyComponent = data.modules?.interactiveAnatomy
    ? ANATOMY_MAP[data.modules.interactiveAnatomy]
    : null;

  return (
    <>
      <JsonLd graph={{
        procedure: getMedicalProcedureData(data.slug),
        faq: getFaqData(data.slug),
        howTo: getHowToData(data.slug),
        breadcrumb: getBreadcrumbData(breadcrumbs),
      }} />

      <div className="min-h-screen bg-slate-50">
        {/* HERO */}
        <InterventionHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          price={data.hero.price}
          priceOld={data.hero.priceOld}
          imageSrc={data.hero.image}
          imageAlt={data.hero.imageAlt}
          badge={data.hero.badge}
          devisSlug={data.devisSlug}
          stats={data.hero.stats}
          doctorName={primarySurgeon?.name}
          doctorImage={primarySurgeon?.image}
          doctorSpecialty={primarySurgeon?.specialty}
        />

        {/* FLEXIBLE CONTENT SECTIONS */}
        {data.sections.map((section, i) => (
          <SectionRenderer key={i} section={section} />
        ))}

        {/* INTERACTIVE ANATOMY MODULE (if configured) */}
        {AnatomyComponent && (
          <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4">
              <AnatomyComponent />
            </div>
          </section>
        )}

        {/* PHOTO UPLOAD MODULE (if configured) */}
        {data.modules?.photoUpload && (
          <section className="container mx-auto max-w-5xl px-4 mt-8">
            <FastTrackPhotoUpload interventionName={data.name} />
          </section>
        )}

        {/* BMI CALCULATOR MODULE (if configured) */}
        {data.modules?.bmiCalculator && (
          <section className="container mx-auto max-w-4xl px-4 mb-16">
            <BmiCalculator variant="full" />
          </section>
        )}

        {/* GUIDED TOUR MODULE (if configured) */}
        {data.modules?.guidedTour && <GuidedTourTimeline />}

        {/* AVANT / APRES GALLERY */}
        <AvantApresGallery interventionSlug={data.slug} />

        {/* PRICING */}
        <PricingSection data={data.pricing} devisSlug={data.devisSlug} />

        {/* FAQ */}
        <section className="bg-white">
          <FAQAccordion data={getFaqData(data.slug)} title={`Questions fréquentes sur la ${data.name.toLowerCase()}`} />
        </section>

        {/* TESTIMONIALS (dynamic from Sanity) */}
        <DynamicReviews interventionSlug={data.slug} title={`Témoignages ${data.name.toLowerCase()}`} />

        {/* STATIC TESTIMONIALS (from data file, if any) */}
        {data.testimonials.length > 0 && (
          <PatientTestimonialSection testimonials={data.testimonials} />
        )}

        {/* GUARANTEES */}
        <GuaranteeSection />

        {/* SURGEONS (dynamic from Sanity) */}
        <DynamicDoctors interventionSlug={data.slug} title={`Nos chirurgiens pour la ${data.name.toLowerCase()}`} />

        {/* STATIC SURGEONS FALLBACK (from data files) */}
        {allSurgeons.length > 0 && (
          <SurgeonReferenceSection
            surgeons={allSurgeons.map(s => ({
              name: s.name,
              specialty: s.specialty,
              image: s.image,
              experience: s.experience,
            }))}
            devisSlug={data.devisSlug}
          />
        )}

        {/* BOTTOM CTA */}
        <BottomCTA devisSlug={data.devisSlug} interventionName={data.name} />
      </div>
    </>
  );
}
