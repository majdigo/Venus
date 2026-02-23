'use client';

import { useState, useEffect } from 'react';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/navigation-data';

export function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 z-40 flex items-end gap-3">
      {/* Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden md:flex items-center gap-2 bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-2.5 animate-fade-in">
          <span className="text-sm font-medium text-slate-700">
            Besoin d&apos;aide ? Écrivez-nous !
          </span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <TrackedLink
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contacter via WhatsApp"
        ctaText="WhatsApp Widget"
        ctaLocation="floating_widget"
        ctaType="whatsapp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </TrackedLink>
    </div>
  );
}
