"use client";

import { Users, Shield } from "lucide-react";

/**
 * TrustBar — Horizontal trust signal strip for CRO.
 *
 * Displays four social-proof indicators in a compact bar:
 * Google Reviews, Trustpilot score, patient volume, and years of experience.
 *
 * @param variant - 'light' (default) renders a white background with standard
 *   padding; 'compact' reduces vertical padding for tighter layouts such as
 *   below a hero section or inside a sticky header.
 */

interface TrustBarProps {
  /** 'light' = white bg, standard padding. 'compact' = slimmer, reduced padding. */
  variant?: "light" | "compact";
}

/**
 * Google "G" monogram rendered as an inline SVG.
 * Uses the official Google brand colour (#4285F4) for the letter stroke,
 * keeping the component self-contained without an external image request.
 */
function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-5 h-5 flex-shrink-0"
    >
      {/* Google "G" shape */}
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * Trustpilot five-star icon rendered as an inline SVG.
 * The single filled star uses Trustpilot's official green (#00B67A)
 * to maintain brand recognition without an external asset dependency.
 */
function TrustpilotStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="w-5 h-5 flex-shrink-0"
    >
      <path
        d="M12 2l2.9 8.26H23l-7.18 5.22 2.76 8.52L12 18.77l-6.58 5.23 2.76-8.52L1 10.26h8.1L12 2z"
        fill="#00B67A"
      />
    </svg>
  );
}

/** A single vertical divider rendered between items on desktop. */
function Divider() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block w-px bg-gray-200 self-stretch"
    />
  );
}

/**
 * TrustBar component.
 *
 * Intended for placement immediately below the primary hero or in the
 * site-wide sticky header to maintain constant visibility of key trust
 * signals throughout the conversion funnel.
 *
 * @example
 * // Default light variant — place below a hero section
 * <TrustBar />
 *
 * @example
 * // Compact variant — place inside a sticky header or modal header
 * <TrustBar variant="compact" />
 */
export function TrustBar({ variant = "light" }: TrustBarProps) {
  const isCompact = variant === "compact";

  return (
    <div
      role="region"
      aria-label="Signaux de confiance"
      className={[
        "w-full bg-white border-t border-b border-gray-100",
        isCompact ? "py-2" : "py-3",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/*
          Grid layout:
          - Mobile  (< md): 2 columns so all four items stay visible without scroll
          - Desktop (>= md): single row of 4 columns with dividers between items
        */}
        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-3 md:gap-y-0 items-center">

          {/* ── Item 1: Google Reviews ─────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-2.5">
            <GoogleIcon />
            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "font-heading font-bold text-brand-navy",
                  isCompact ? "text-sm" : "text-sm md:text-base",
                ].join(" ")}
              >
                4,8 / 5
              </span>
              <span className="text-xs text-slate-500 font-sans">
                127 avis Google
              </span>
            </div>
          </div>

          <Divider />

          {/* ── Item 2: Trustpilot ─────────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-2.5">
            <TrustpilotStarIcon />
            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "font-heading font-bold text-brand-navy",
                  isCompact ? "text-sm" : "text-sm md:text-base",
                ].join(" ")}
              >
                4,7 / 5
              </span>
              <span className="text-xs text-slate-500 font-sans">
                Trustpilot · Excellent
              </span>
            </div>
          </div>

          <Divider />

          {/* ── Item 3: Patients ───────────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center">
              <Users
                aria-hidden="true"
                className="w-4 h-4 text-brand-teal"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "font-heading font-bold text-brand-navy",
                  isCompact ? "text-sm" : "text-sm md:text-base",
                ].join(" ")}
              >
                +2 500 patients
              </span>
              <span className="text-xs text-slate-500 font-sans">
                operes depuis 2009
              </span>
            </div>
          </div>

          <Divider />

          {/* ── Item 4: Experience ─────────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center">
              <Shield
                aria-hidden="true"
                className="w-4 h-4 text-brand-teal"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "font-heading font-bold text-brand-navy",
                  isCompact ? "text-sm" : "text-sm md:text-base",
                ].join(" ")}
              >
                15 ans d&apos;experience
              </span>
              <span className="text-xs text-slate-500 font-sans">
                chirurgie esthetique
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
