'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { NAVIGATION_CATEGORIES } from '@/lib/navigation-data';

/**
 * Converts a URL slug into a human-readable title.
 * Replaces hyphens with spaces and capitalises each word.
 *
 * @example slugToTitle('lifting-cervico-facial') // → 'Lifting Cervico Facial'
 */
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Resolves the display name for a category slug by searching
 * NAVIGATION_CATEGORIES first, then falling back to the hardcoded
 * "médecine-esthétique" entry which is not part of the nav array.
 * If no match is found, the slug is formatted as a title.
 */
function resolveCategoryName(categorySlug: string): string {
  const match = NAVIGATION_CATEGORIES.find((cat) => cat.slug === categorySlug);
  if (match) return match.name;

  if (categorySlug === 'medecine-esthetique') return 'Médecine Esthétique';

  return slugToTitle(categorySlug);
}

/**
 * Resolves the display name for an intervention slug by searching all
 * interventions across every category in NAVIGATION_CATEGORIES.
 * Falls back to a formatted version of the slug when no match is found.
 */
function resolveInterventionName(interventionSlug: string): string {
  for (const category of NAVIGATION_CATEGORIES) {
    const match = category.interventions.find(
      (intervention) => intervention.slug === interventionSlug
    );
    if (match) return match.name;
  }

  return slugToTitle(interventionSlug);
}

interface BreadcrumbSegment {
  label: string;
  href: string | null; // null means the segment is the current (non-linked) page
}

/**
 * AutoBreadcrumbs — client component that derives breadcrumb trail from the
 * current URL pathname without requiring any props.
 *
 * Supported URL shapes:
 *   /interventions                           → Home
 *   /interventions/{category}               → Home > Category
 *   /interventions/{category}/{intervention} → Home > Category > Intervention
 *
 * Category and intervention labels are resolved via NAVIGATION_CATEGORIES so
 * that users always see proper French names rather than raw URL slugs.
 */
export function AutoBreadcrumbs() {
  const pathname = usePathname();

  // Split the pathname into non-empty segments
  // e.g. '/interventions/chirurgie-visage/rhinoplastie' → ['interventions', 'chirurgie-visage', 'rhinoplastie']
  const segments = pathname.split('/').filter(Boolean);

  // Only render inside /interventions/* routes
  if (segments[0] !== 'interventions') return null;

  const categorySlug = segments[1] ?? null;
  const interventionSlug = segments[2] ?? null;

  const breadcrumbs: BreadcrumbSegment[] = [];

  if (categorySlug) {
    breadcrumbs.push({
      label: resolveCategoryName(categorySlug),
      // If there is an intervention segment after the category, this item is
      // still navigable; otherwise it is the current page (no link).
      href: interventionSlug
        ? `/interventions/${categorySlug}`
        : null,
    });
  }

  if (interventionSlug) {
    breadcrumbs.push({
      label: resolveInterventionName(interventionSlug),
      href: null, // always the current (last) page
    });
  }

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="bg-slate-50 border-b border-slate-200 py-3 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <ol className="flex items-center flex-wrap gap-1 text-xs">
          {/* Home */}
          <li className="flex items-center">
            <Link
              href="/"
              className="text-slate-500 hover:text-brand-blue transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only sm:not-sr-only">Accueil</span>
            </Link>
          </li>

          {/* Dynamic segments */}
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-3 h-3 text-slate-300 mx-1 shrink-0" />
                {isLast || crumb.href === null ? (
                  <span className="text-slate-700 font-medium truncate max-w-[200px] sm:max-w-none">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-slate-500 hover:text-brand-blue transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
