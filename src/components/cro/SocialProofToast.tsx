'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SocialProofEntry {
  /** French first name */
  name: string;
  /** City in France, Belgium or Switzerland */
  city: string;
  /** Medical intervention label (French) */
  intervention: string;
  /** Human-readable time elapsed (French) */
  timeAgo: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

/**
 * 14 realistic social-proof entries targeting francophone European visitors.
 * The array is large enough to feel non-repetitive during a typical session.
 */
const SOCIAL_PROOF_DATA: SocialProofEntry[] = [
  {
    name: 'Sophie',
    city: 'Paris',
    intervention: 'Rhinoplastie',
    timeAgo: 'il y a 3 min',
  },
  {
    name: 'Marie',
    city: 'Lyon',
    intervention: 'Sleeve Gastrique',
    timeAgo: 'il y a 8 min',
  },
  {
    name: 'Thomas',
    city: 'Bruxelles',
    intervention: 'Greffe de Cheveux',
    timeAgo: 'il y a 12 min',
  },
  {
    name: 'Laurent',
    city: 'Genève',
    intervention: 'Augmentation Mammaire',
    timeAgo: 'il y a 5 min',
  },
  {
    name: 'Julie',
    city: 'Marseille',
    intervention: 'Liposuccion',
    timeAgo: 'il y a 23 min',
  },
  {
    name: 'Nathalie',
    city: 'Toulouse',
    intervention: 'Facettes Dentaires',
    timeAgo: 'il y a 1h',
  },
  {
    name: 'Pierre',
    city: 'Nantes',
    intervention: 'BBL',
    timeAgo: 'il y a 17 min',
  },
  {
    name: 'Isabelle',
    city: 'Nice',
    intervention: 'Blépharoplastie',
    timeAgo: 'il y a 9 min',
  },
  {
    name: 'Jean-Pierre',
    city: 'Bordeaux',
    intervention: 'Implants Dentaires',
    timeAgo: 'il y a 34 min',
  },
  {
    name: 'Élodie',
    city: 'Strasbourg',
    intervention: 'Abdominoplastie',
    timeAgo: 'il y a 2 min',
  },
  {
    name: 'Claire',
    city: 'Lille',
    intervention: 'Rhinoplastie',
    timeAgo: 'il y a 45 min',
  },
  {
    name: 'Aurélie',
    city: 'Liège',
    intervention: 'Sleeve Gastrique',
    timeAgo: 'il y a 19 min',
  },
  {
    name: 'Camille',
    city: 'Genève',
    intervention: 'Greffe de Cheveux',
    timeAgo: 'il y a 7 min',
  },
  {
    name: 'Sandrine',
    city: 'Paris',
    intervention: 'Augmentation Mammaire',
    timeAgo: 'il y a 1h',
  },
];

// ---------------------------------------------------------------------------
// GTM helper
// ---------------------------------------------------------------------------

/**
 * Pushes a GTM event to the dataLayer if available.
 * Silently no-ops when GTM is not loaded (e.g. dev environment).
 */
function pushGtmEvent(intervention: string): void {
  if (typeof window === 'undefined') return;
  const w = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };
  if (!Array.isArray(w.dataLayer)) return;
  w.dataLayer.push({
    event: 'social_proof_notification_shown',
    intervention_name: intervention,
  });
}

// ---------------------------------------------------------------------------
// Framer Motion variants
// ---------------------------------------------------------------------------

/**
 * Slide in from the left edge and fade in simultaneously.
 * On exit, slide back to the left and fade out.
 */
const toastVariants = {
  hidden: {
    x: -340,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 280,
      damping: 28,
    },
  },
  exit: {
    x: -340,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * SocialProofToast
 *
 * Displays rotating social-proof notifications in the bottom-left corner.
 * Each notification remains visible for 5 seconds, then auto-dismisses.
 * A new notification appears every 12 seconds (5 s visible + 7 s gap).
 * The first notification is delayed by 5 seconds after mount.
 *
 * Fires a GTM `social_proof_notification_shown` event for each impression.
 *
 * @example
 * // Add once in your root layout or a page-level component:
 * <SocialProofToast />
 */
export function SocialProofToast() {
  /**
   * Index of the currently displayed entry.
   * `null` means no toast is currently visible.
   */
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Tracks which entry index to show next, cycling through all entries.
   */
  const nextIndexRef = useRef<number>(0);

  /**
   * Holds the setTimeout / setInterval IDs so we can clean them up.
   */
  const initialDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotationIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Show the entry at `nextIndexRef.current` and schedule its auto-dismiss. */
  const showNext = useCallback(() => {
    const idx = nextIndexRef.current % SOCIAL_PROOF_DATA.length;
    nextIndexRef.current = idx + 1;

    setCurrentIndex(idx);
    setIsVisible(true);

    // GTM event
    pushGtmEvent(SOCIAL_PROOF_DATA[idx].intervention);

    // Auto-dismiss after 5 seconds
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    dismissTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  /** Manually dismiss the currently visible toast. */
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current);
      dismissTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Delay the very first notification by 5 seconds
    initialDelayRef.current = setTimeout(() => {
      showNext();

      // After the first notification, rotate every 12 seconds
      rotationIntervalRef.current = setInterval(() => {
        showNext();
      }, 12000);
    }, 5000);

    return () => {
      if (initialDelayRef.current) clearTimeout(initialDelayRef.current);
      if (rotationIntervalRef.current) clearInterval(rotationIntervalRef.current);
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, [showNext]);

  // Derive current entry safely
  const entry =
    currentIndex !== null ? SOCIAL_PROOF_DATA[currentIndex] : null;

  // Derive avatar initial: first letter of the name, upper-cased
  const avatarInitial =
    entry !== null && entry !== undefined
      ? entry.name.charAt(0).toUpperCase()
      : '';

  return (
    <div
      className="fixed bottom-4 left-4 z-50 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {isVisible && entry && (
          <motion.div
            key={currentIndex}
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pointer-events-auto flex items-start gap-3 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 max-w-[300px] w-[300px]"
            role="status"
            aria-label={`${entry.name} de ${entry.city} a demandé un devis pour ${entry.intervention}`}
          >
            {/* Avatar circle */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white text-sm font-semibold font-heading leading-none">
                {avatarInitial}
              </span>
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0 pt-0.5">
              <p className="text-sm text-gray-700 leading-snug">
                <span className="font-medium">{entry.name}</span>
                {' de '}
                <span className="font-medium">{entry.city}</span>
                {' a demandé un devis pour '}
                <span className="font-semibold text-brand-navy">
                  {entry.intervention}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{entry.timeAgo}</p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 -mt-0.5 -mr-1 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
              aria-label="Fermer la notification"
              type="button"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
