// =============================================================================
// Venus Estetika — Central Data Types
// =============================================================================
// Single source of truth for all intervention, surgeon, and category data.
// These types drive the page templates, navigation, schema.org, and CRO modules.
// =============================================================================

/** Flexible content sections that can appear in any order on an intervention page */
export type ContentSection =
  | IntroSection
  | AdvantagesSection
  | AuthenticSection
  | IdealProfileSection
  | TechniquesSection;

export interface IntroSection {
  type: 'intro';
  title: string;
  content: string; // HTML-safe string (rendered via prose)
}

export interface TechniquesSection {
  type: 'techniques';
  title: string;
  items: { name: string; description: string }[];
}

export interface AdvantagesSection {
  type: 'advantages';
  title?: string;
  items: { icon: string; title: string; description: string }[];
}

export interface AuthenticSection {
  type: 'authentic';
  title: string;
  description: string;
  snippets?: string[];
  images: string[];
}

export interface IdealProfileSection {
  type: 'ideal-profile';
  title: string;
  items: string[];
}

/** Pricing row for the comparison table */
export interface PricingRow {
  label: string;
  priceVenus: string;
  priceFrance?: string;
}

/** Complete intervention data sheet */
export interface InterventionData {
  // --- Identity ---
  slug: string;
  categorySlug: string;
  name: string;
  fullTitle: string;
  isPopular?: boolean;

  // --- Hero Section ---
  hero: {
    title: string;
    subtitle: string;
    price: string;
    priceOld?: string;
    badge?: string;
    stats?: string;
    image: string;
    imageAlt: string;
  };

  // --- Surgeon ---
  primarySurgeon: string; // slug, resolved from surgeons.ts

  // --- Content Sections (flexible order) ---
  sections: ContentSection[];

  // --- Pricing ---
  pricing: {
    title?: string;
    rows: PricingRow[];
    includes: string[];
  };

  // --- Testimonials ---
  testimonials: TestimonialData[];

  // --- SEO / Metadata ---
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonical?: string;
  };

  // --- Devis Funnel ---
  devisSlug: string;

  // --- Optional Modules ---
  modules?: {
    interactiveAnatomy?: string;
    bmiCalculator?: boolean;
    photoUpload?: boolean;
    guidedTour?: boolean;
  };
}

/** Testimonial entry */
export interface TestimonialData {
  name: string;
  city: string;
  quote: string;
  intervention: string;
  savings?: string;
  rating?: number;
}

/** Surgeon profile */
export interface SurgeonData {
  slug: string;
  name: string;
  specialty: string;
  image: string;
  experience?: string;
  interventions: string[]; // intervention slugs
}

/** Category grouping */
export interface CategoryData {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  interventions: string[]; // intervention slugs, ordered
}
