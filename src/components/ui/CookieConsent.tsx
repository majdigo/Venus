"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ConsentLevel = "all" | "essential" | null;

function getStoredConsent(): ConsentLevel {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("ve_cookie_consent");
  if (stored === "all" || stored === "essential") return stored;
  return null;
}

function pushConsentToGTM(level: ConsentLevel) {
  if (typeof window === "undefined" || !level) return;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];

  if (level === "all") {
    w.dataLayer.push({
      event: "consent_update",
      consent: {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      },
    });
  } else {
    w.dataLayer.push({
      event: "consent_update",
      consent: {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      },
    });
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent) {
      pushConsentToGTM(consent);
    } else {
      // Show banner after 1.5s delay to not block initial load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(level: ConsentLevel) {
    if (!level) return;
    localStorage.setItem("ve_cookie_consent", level);
    pushConsentToGTM(level);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-500"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 relative">
          <button
            onClick={() => accept("essential")}
            aria-label="Fermer"
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="md:flex items-start gap-6">
            <div className="flex-grow mb-4 md:mb-0">
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Respect de votre vie privée
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous utilisons des cookies pour analyser le trafic, personnaliser votre expérience et mesurer l&apos;efficacité de nos campagnes.
                Vous pouvez accepter tous les cookies ou limiter aux cookies essentiels.{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-brand-blue hover:underline underline-offset-2 font-medium"
                >
                  En savoir plus
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                onClick={() => accept("essential")}
                variant="outline"
                className="border-slate-300 text-slate-600 hover:bg-slate-50 font-medium text-sm h-10"
              >
                Essentiels uniquement
              </Button>
              <Button
                onClick={() => accept("all")}
                className="bg-brand-navy text-white hover:bg-brand-navy/90 font-bold text-sm h-10"
              >
                Tout accepter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
