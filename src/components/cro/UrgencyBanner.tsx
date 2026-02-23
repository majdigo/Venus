"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Clock, ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface UrgencyBannerProps {
  /** Name of the intervention featured in the offer copy */
  intervention?: string;
  /** Discount label displayed in the badge */
  discount?: string;
  /** Number of remaining spots — drives urgency pulse animation */
  spotsLeft?: number;
  /** Destination href when the CTA link is clicked */
  ctaHref?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SESSION_STORAGE_KEY = "venus_urgency_banner_dismissed";

const FRENCH_MONTHS: readonly string[] = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

// ---------------------------------------------------------------------------
// GTM helpers
// ---------------------------------------------------------------------------

/**
 * Safely push an event to the GTM dataLayer.
 * Fails silently when GTM is not loaded (SSR, ad-blockers, test environments).
 */
function pushGtmEvent(eventName: string, payload?: Record<string, unknown>): void {
  try {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({ event: eventName, ...payload });
    }
  } catch {
    // intentionally silent
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * UrgencyBanner
 *
 * A slim, dismissible promotional banner rendered directly beneath the site
 * header. It surfaces a time-limited offer with a spots-remaining counter and
 * fires GTM micro-conversion events on mount and CTA click.
 *
 * Dismissal state is persisted in sessionStorage so the banner reappears in
 * the next browser session (but not within the same tab session).
 *
 * @example
 * <UrgencyBanner
 *   intervention="la rhinoplastie"
 *   discount="-20%"
 *   spotsLeft={2}
 *   ctaHref="/devis?intervention=rhinoplastie"
 * />
 */
export function UrgencyBanner({
  intervention = "la chirurgie esthétique",
  discount = "-15%",
  spotsLeft = 5,
  ctaHref = "/devis",
}: UrgencyBannerProps) {
  // ----- visibility state ------------------------------------------------
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // ----- derive month name -----------------------------------------------
  const currentMonthName = FRENCH_MONTHS[new Date().getMonth()];
  const currentYear = new Date().getFullYear();

  // ----- animation helpers -----------------------------------------------
  const spotsAreCritical = spotsLeft < 3;
  const spotsLabel =
    spotsLeft === 1
      ? "1 place restante"
      : `${spotsLeft} places restantes`;

  // ----- mount: read sessionStorage & fire GTM ---------------------------
  useEffect(() => {
    setIsMounted(true);

    const isDismissed =
      typeof window !== "undefined" &&
      sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";

    if (!isDismissed) {
      setIsVisible(true);

      pushGtmEvent("urgency_banner_shown", {
        banner_intervention: intervention,
        banner_discount: discount,
        banner_spots_left: spotsLeft,
      });
    }
  }, [intervention, discount, spotsLeft]);

  // ----- dismiss handler --------------------------------------------------
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    } catch {
      // sessionStorage blocked (private browsing edge case)
    }
  }, []);

  // ----- CTA click handler ------------------------------------------------
  const handleCtaClick = useCallback(() => {
    pushGtmEvent("urgency_banner_click", {
      banner_intervention: intervention,
      banner_discount: discount,
      banner_spots_left: spotsLeft,
      cta_href: ctaHref,
    });
  }, [intervention, discount, spotsLeft, ctaHref]);

  // ----- prevent layout shift on SSR ------------------------------------
  if (!isMounted || !isVisible) {
    return null;
  }

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <div
      role="banner"
      aria-label="Offre promotionnelle Venus Estetika"
      className="
        relative z-40 w-full
        bg-gradient-to-r from-brand-navy to-brand-navy/95
        border-b border-brand-blue/20
        py-2 px-4
      "
    >
      {/* ----------------------------------------------------------------
          Inner layout: single flex row that wraps gracefully on mobile
      ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-3 gap-y-1">

        {/* Clock icon — hidden on the smallest screens to save space */}
        <Clock
          className="hidden sm:block shrink-0 text-brand-blue"
          size={14}
          aria-hidden="true"
        />

        {/* Offer label */}
        <p className="text-sm text-white text-center leading-snug">
          <span className="font-semibold">
            Offre {currentMonthName} {currentYear}&nbsp;:
          </span>{" "}
          <span
            className="
              inline-flex items-center
              bg-brand-blue text-white
              rounded-full px-3 py-0.5
              font-bold text-xs
              mx-1
            "
            aria-label={`Réduction de ${discount}`}
          >
            {discount}
          </span>{" "}
          sur {intervention}&nbsp;—&nbsp;
          {/* Spots counter with conditional pulse animation */}
          <span
            className={[
              "font-bold text-brand-blue",
              spotsAreCritical ? "animate-pulse" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-live="polite"
            aria-atomic="true"
          >
            {spotsLabel}
          </span>
        </p>

        {/* CTA link */}
        <a
          href={ctaHref}
          onClick={handleCtaClick}
          className="
            inline-flex items-center gap-1
            text-sm text-white font-semibold
            underline underline-offset-2
            decoration-brand-blue/60
            hover:decoration-brand-blue
            hover:text-brand-blue
            transition-colors duration-150
            shrink-0
          "
          aria-label={`Obtenir votre devis — offre ${discount} sur ${intervention}`}
        >
          Obtenir mon devis
          <ArrowRight size={13} aria-hidden="true" />
        </a>
      </div>

      {/* ------------------------------------------------------------------
          Dismiss button — absolutely positioned to avoid affecting the
          centred layout of the content row
      ------------------------------------------------------------------- */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Fermer la bannière promotionnelle"
        className="
          absolute right-3 top-1/2 -translate-y-1/2
          p-1 rounded
          text-white/60 hover:text-white
          transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1 focus-visible:ring-offset-brand-navy
        "
      >
        <X size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
