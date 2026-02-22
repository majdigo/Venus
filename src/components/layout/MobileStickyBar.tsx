'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { WHATSAPP_URL, PHONE_NUMBER_HREF } from '@/lib/navigation-data';

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-stretch h-16">
        {/* Appeler */}
        <Link
          href={PHONE_NUMBER_HREF}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-brand-navy text-white active:bg-brand-navy/85 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Appeler</span>
        </Link>

        {/* WhatsApp */}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[#25D366] text-white active:bg-[#128C7E] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
        </Link>

        {/* Devis */}
        <Link
          href="/devis/"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-brand-gold text-white active:bg-brand-gold/85 transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Devis</span>
        </Link>
      </div>
    </div>
  );
}
