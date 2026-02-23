"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut de page"
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-brand-navy/80 text-white shadow-lg backdrop-blur-sm hover:bg-brand-navy transition-all hover:scale-110 active:scale-95 flex items-center justify-center lg:bottom-8"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
