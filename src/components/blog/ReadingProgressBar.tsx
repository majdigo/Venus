"use client";

import { useEffect, useState } from "react";

/**
 * ReadingProgressBar — Client component that renders a thin progress bar at the top
 * of the viewport, tracking the user's scroll depth through the article.
 *
 * The bar is fixed, full-width, z-50, 4px tall, and uses the brand-blue color token.
 * It smoothly transitions between 0% and 100% as the user scrolls from top to bottom
 * of the document.
 */
export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setProgress(100);
        return;
      }

      const percentage = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setProgress(percentage);
    }

    // Attach with passive: true for scroll-performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialise on mount in case the page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Progression de lecture"
      className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent"
    >
      <div
        className="h-full bg-brand-blue transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
