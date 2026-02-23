'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { X, Shield } from 'lucide-react';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** localStorage key used to persist dismissal timestamp. */
const STORAGE_KEY = 'venus_exit_popup_dismissed';

/** Duration in milliseconds before the popup may be shown again after dismissal. */
const DISMISSAL_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Inactivity timeout (ms) on mobile before triggering the popup.
 * Reset on every scroll or touchstart event.
 */
const MOBILE_INACTIVITY_MS = 45_000; // 45 seconds

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns true when the popup has been dismissed within the last 7 days.
 * Reads from localStorage; returns false on any parse error or SSR context.
 */
function isRecentlyDismissed(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const timestamp = parseInt(raw, 10);
    if (isNaN(timestamp)) return false;
    return Date.now() - timestamp < DISMISSAL_TTL_MS;
  } catch {
    return false;
  }
}

/**
 * Persist the current timestamp as the dismissal moment.
 * Silently ignores errors (e.g. private mode quota exceeded).
 */
function persistDismissal(): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // no-op
  }
}

/**
 * Returns a one-way SHA-256 hex digest of the given string.
 * Used to hash the email before pushing it to GTM / dataLayer.
 *
 * Falls back to an obfuscated placeholder string when the Web Crypto API
 * is unavailable (old browsers, non-secure contexts during development).
 */
async function hashEmail(email: string): Promise<string> {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(email.trim().toLowerCase());
    const buffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  } catch {
    // Crypto API not available — return a clearly non-PII marker.
    return 'hash_unavailable';
  }
}

/**
 * Push an event object to `window.dataLayer`.
 * Gracefully no-ops when GTM has not yet initialised.
 */
function pushDataLayer(payload: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * ExitIntentPopup — CRO micro-conversion component for Venus Estetika.
 *
 * Trigger logic:
 *   - Desktop: fires when `mouseleave` is detected with `clientY < 10`
 *     (cursor heading towards the browser chrome / address bar).
 *   - Mobile: fires after 45 seconds of inactivity (no scroll, no touchstart).
 *
 * Cookie management:
 *   Uses `localStorage` key `venus_exit_popup_dismissed` (value = Unix timestamp).
 *   The popup will not appear again for 7 days after the user dismisses it.
 *
 * GTM events pushed:
 *   - `exit_intent_shown`         — on popup display
 *   - `exit_intent_email_submit`  — on form submission (includes hashed email)
 *
 * No API call is made on submit; the component closes itself and fires the
 * GTM event so the tag manager can forward the lead to the desired destination.
 */
export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track whether the popup has already been shown in this page session so
  // the trigger handlers don't fire a second time.
  const hasShownRef = useRef(false);

  // Ref for the mobile inactivity timer so we can clear it on cleanup.
  const mobileTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---------------------------------------------------------------------------
  // Core show/hide logic
  // ---------------------------------------------------------------------------

  const showPopup = useCallback(() => {
    if (hasShownRef.current || isRecentlyDismissed()) return;
    hasShownRef.current = true;
    setIsVisible(true);

    pushDataLayer({ event: 'exit_intent_shown' });
  }, []);

  const hidePopup = useCallback(() => {
    setIsVisible(false);
    persistDismissal();
  }, []);

  // ---------------------------------------------------------------------------
  // Desktop: mouseleave on document (cursor exits toward top of viewport)
  // ---------------------------------------------------------------------------

  useEffect(() => {
    // Skip if already dismissed recently — avoids attaching needless listeners.
    if (isRecentlyDismissed()) return;

    // Only attach the desktop listener on non-touch devices.
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) return;

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY < 10) {
        showPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showPopup]);

  // ---------------------------------------------------------------------------
  // Mobile: 45-second inactivity timer (reset on scroll or touchstart)
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (isRecentlyDismissed()) return;

    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (!isTouchDevice) return;

    const resetTimer = () => {
      if (mobileTimerRef.current) {
        clearTimeout(mobileTimerRef.current);
      }
      mobileTimerRef.current = setTimeout(() => {
        showPopup();
      }, MOBILE_INACTIVITY_MS);
    };

    // Kick off the timer immediately on mount.
    resetTimer();

    window.addEventListener('scroll', resetTimer, { passive: true });
    window.addEventListener('touchstart', resetTimer, { passive: true });

    return () => {
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
      window.removeEventListener('scroll', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
    };
  }, [showPopup]);

  // ---------------------------------------------------------------------------
  // Keyboard accessibility: close on Escape key
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hidePopup();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, hidePopup]);

  // ---------------------------------------------------------------------------
  // Scroll lock while modal is open
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  // ---------------------------------------------------------------------------
  // Form validation & submission
  // ---------------------------------------------------------------------------

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setEmailError('Veuillez saisir votre adresse e-mail.');
      return false;
    }
    if (!emailRegex.test(value.trim())) {
      setEmailError("L'adresse e-mail n'est pas valide.");
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Clear the error as soon as the user starts correcting the field.
    if (emailError) setEmailError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) return;

    setIsSubmitting(true);

    try {
      const hashedEmail = await hashEmail(email);

      pushDataLayer({
        event: 'exit_intent_email_submit',
        email_hashed: hashedEmail,
      });
    } finally {
      setIsSubmitting(false);
      hidePopup();
    }
  };

  // ---------------------------------------------------------------------------
  // Render nothing when popup is closed
  // ---------------------------------------------------------------------------

  if (!isVisible) return null;

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    /*
     * Overlay
     * — fixed full-screen with backdrop blur to dim the page content behind
     *   the modal without fully obscuring it.
     * — animate-in / fade-in classes from tailwindcss-animate.
     */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-heading"
      aria-describedby="exit-popup-description"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(event) => {
        // Close when clicking the overlay backdrop (outside the modal card).
        if (event.target === event.currentTarget) {
          hidePopup();
        }
      }}
    >
      {/*
       * Modal card
       * — scale-in animation from tailwindcss-animate for a subtle entrance.
       * — max-w-md keeps the modal compact and focused on a single CTA.
       */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">

        {/* ------------------------------------------------------------------ */}
        {/* Close button (top-right)                                            */}
        {/* ------------------------------------------------------------------ */}
        <button
          type="button"
          onClick={hidePopup}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ------------------------------------------------------------------ */}
        {/* Modal content                                                        */}
        {/* ------------------------------------------------------------------ */}
        <div className="px-8 pt-10 pb-8">

          {/* Decorative accent bar at the top */}
          <div className="absolute top-0 left-8 right-8 h-1 rounded-t-2xl bg-brand-blue" />

          {/* Icon / visual accent */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center">
              {/*
               * Inline SVG for the gift/envelope motif.
               * Uses the brand-teal hex directly because SVG fill cannot
               * consume Tailwind opacity utilities natively.
               */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#399BB5"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="17" />
                <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2
            id="exit-popup-heading"
            className="font-heading text-2xl font-bold text-brand-navy text-center leading-snug mb-3"
          >
            Ne partez pas sans votre devis gratuit&nbsp;!
          </h2>

          {/* Subtext */}
          <p
            id="exit-popup-description"
            className="text-sm text-slate-500 text-center leading-relaxed mb-7"
          >
            Recevez une estimation personnalisée en moins de 24h.
            <br />
            Sans engagement.
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* Email form                                                         */}
          {/* ---------------------------------------------------------------- */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-3">
              {/* Email input */}
              <div>
                <label htmlFor="exit-popup-email" className="sr-only">
                  Adresse e-mail
                </label>
                <input
                  id="exit-popup-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="votre@email.com"
                  aria-invalid={emailError ? 'true' : 'false'}
                  aria-describedby={emailError ? 'exit-popup-email-error' : undefined}
                  className={[
                    'w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400',
                    'outline-none transition-all duration-150',
                    emailError
                      ? 'border-red-400 focus:ring-2 focus:ring-red-300/50'
                      : 'border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20',
                  ].join(' ')}
                />
                {emailError && (
                  <p
                    id="exit-popup-email-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-500"
                  >
                    {emailError}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue/90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                {isSubmitting ? 'Envoi en cours…' : 'Recevoir mon devis'}
              </button>
            </div>
          </form>

          {/* ---------------------------------------------------------------- */}
          {/* Trust / RGPD line                                                  */}
          {/* ---------------------------------------------------------------- */}
          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Shield className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            Vos données sont protégées&nbsp;—&nbsp;
            <a
              href="/politique-confidentialite/"
              className="underline underline-offset-2 hover:text-brand-teal transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politique RGPD
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
