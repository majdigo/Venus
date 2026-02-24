'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { Menu, X, ChevronDown, ChevronRight, Phone, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { NAVIGATION_CATEGORIES, WHATSAPP_URL, PHONE_NUMBER_FR, PHONE_NUMBER_HREF, type NavCategory } from '@/lib/navigation-data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  return (
    <>
      <header
        className={`w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-border transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'
          }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-[180px] h-[50px] md:w-[180px] md:h-[50px] w-[140px] h-[40px]">
              <Image
                src="/images/logo/logo-venus-estetika.png"
                alt="Venus Estetika — Chirurgie Esthétique en Tunisie"
                fill
                className="object-contain"
                priority
                sizes="180px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {/* Opérations with mega-menu */}
            <div
              className="relative"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                className="flex items-center gap-1 hover:text-brand-blue transition-colors py-2"
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
              >
                Opérations <ChevronDown className={`w-4 h-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Clinique dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-brand-blue transition-colors py-2">
                Clinique <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <Link href="/chirurgiens/" className="block px-4 py-2.5 text-sm text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors">
                  Nos Chirurgiens
                </Link>
                <Link href="/cliniques-partenaires/" className="block px-4 py-2.5 text-sm text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors">
                  Cliniques Partenaires
                </Link>
                <Link href="/sejour-medical/" className="block px-4 py-2.5 text-sm text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors">
                  Séjour Médical
                </Link>
              </div>
            </div>

            <Link href="/tarifs/" className="hover:text-brand-blue transition-colors py-2">
              Tarifs
            </Link>
            <Link href="/temoignages/" className="hover:text-brand-blue transition-colors py-2">
              Témoignages
            </Link>
            <Link href="/contact/" className="hover:text-brand-blue transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <TrackedLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              ctaText="WhatsApp"
              ctaLocation="header_desktop"
              ctaType="whatsapp"
              className="flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </TrackedLink>
            <TrackedLink
              href="/devis/"
              ctaText="Devis Gratuit"
              ctaLocation="header_desktop"
              ctaType="primary"
            >
              <Button variant="cta">
                Devis Gratuit
              </Button>
            </TrackedLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <TrackedLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              ctaText="WhatsApp"
              ctaLocation="header_mobile"
              ctaType="whatsapp"
              className="p-2 text-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </TrackedLink>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-700" aria-label="Menu" aria-expanded={mobileOpen}>
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-[380px] p-0 flex flex-col">
                {/* Mobile Nav Content */}
                <div className="flex items-center justify-between px-4 h-16 border-b border-slate-200">
                  <div className="relative w-[140px] h-[40px]">
                    <Image
                      src="/images/logo/logo-venus-estetika.png"
                      alt="Venus Estetika"
                      fill
                      className="object-contain"
                      sizes="140px"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {mobileSubmenu === null ? (
                    /* Main mobile menu */
                    <div className="py-4">
                      <button
                        onClick={() => setMobileSubmenu('operations')}
                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        Opérations <ChevronRight className="w-5 h-5 text-slate-400" />
                      </button>
                      <button
                        onClick={() => setMobileSubmenu('clinique')}
                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        Clinique <ChevronRight className="w-5 h-5 text-slate-400" />
                      </button>
                      <Link
                        href="/tarifs/"
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        Tarifs
                      </Link>
                      <Link
                        href="/temoignages/"
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        Témoignages
                      </Link>
                      <Link
                        href="/contact/"
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        Contact
                      </Link>

                      <div className="border-t border-slate-200 mt-4 pt-4 px-6 space-y-3">
                        <TrackedLink
                          href={PHONE_NUMBER_HREF}
                          ctaText="Phone Number"
                          ctaLocation="header_mobile"
                          ctaType="phone"
                          className="flex items-center gap-3 text-sm font-medium text-slate-600"
                        >
                          <Phone className="w-5 h-5 text-brand-navy" />
                          {PHONE_NUMBER_FR}
                        </TrackedLink>
                        <TrackedLink
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          ctaText="WhatsApp"
                          ctaLocation="header_mobile"
                          ctaType="whatsapp"
                          className="flex items-center gap-3 text-sm font-medium text-[#25D366]"
                        >
                          <MessageCircle className="w-5 h-5" />
                          WhatsApp
                        </TrackedLink>
                      </div>
                    </div>
                  ) : mobileSubmenu === 'operations' ? (
                    /* Operations submenu */
                    <div className="py-4">
                      <button
                        onClick={() => setMobileSubmenu(null)}
                        className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-blue hover:text-brand-blue/85"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" /> Retour
                      </button>
                      {NAVIGATION_CATEGORIES.map((cat) => (
                        <div key={cat.slug} className="px-6 py-3">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                            {cat.name}
                          </h3>
                          <ul className="space-y-1">
                            {cat.interventions.map((int) => (
                              <li key={int.slug}>
                                <Link
                                  href={`/interventions/${cat.slug}/${int.slug}/`}
                                  onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                                  className="flex items-center justify-between py-1.5 text-sm text-slate-700 hover:text-brand-blue transition-colors"
                                >
                                  <span className="flex items-center gap-2">
                                    {int.name}
                                    {int.isPopular && (
                                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                        Populaire
                                      </Badge>
                                    )}
                                  </span>
                                  <span className="text-xs text-slate-400">{int.price}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Clinique submenu */
                    <div className="py-4">
                      <button
                        onClick={() => setMobileSubmenu(null)}
                        className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-blue hover:text-brand-blue/85"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" /> Retour
                      </button>
                      <Link
                        href="/chirurgiens/"
                        onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                        className="block px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        Nos Chirurgiens
                      </Link>
                      <Link
                        href="/cliniques-partenaires/"
                        onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                        className="block px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        Cliniques Partenaires
                      </Link>
                      <Link
                        href="/sejour-medical/"
                        onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}
                        className="block px-6 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        Séjour Médical
                      </Link>
                    </div>
                  )}
                </div>

                {/* Sticky CTA bottom */}
                <div className="border-t border-slate-200 p-4">
                  <Link href="/devis/" onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}>
                    <Button variant="cta" size="xlg" className="w-full">
                      <FileText className="w-5 h-5 mr-2" />
                      Devis Gratuit
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega Menu (desktop) */}
        {megaMenuOpen && (
          <div
            ref={megaMenuRef}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-b border-slate-200 z-50 transition-all duration-300 transform origin-top"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="container mx-auto px-4 py-8 max-w-[1400px]">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {NAVIGATION_CATEGORIES.map((cat) => (
                  <MegaMenuColumn key={cat.slug} category={cat} onClose={() => setMegaMenuOpen(false)} />
                ))}
              </div>

              {/* CTA bar */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link
                  href="/devis/"
                  onClick={() => setMegaMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue/85 font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Devis Gratuit en 24h — Toutes les opérations
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mega menu overlay */}
      {megaMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setMegaMenuOpen(false)}
          style={{ top: '80px' }}
        />
      )}
    </>
  );
}

function MegaMenuColumn({ category, onClose }: { category: NavCategory; onClose: () => void }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 pb-2 border-b border-slate-100">
        {category.name}
      </h3>
      <ul className="space-y-1.5">
        {category.interventions.map((int) => (
          <li key={int.slug}>
            <Link
              href={`/interventions/${category.slug}/${int.slug}/`}
              onClick={onClose}
              className="flex items-center justify-between text-sm text-slate-600 hover:text-brand-blue hover:translate-x-1 transition-all py-1"
            >
              <span className="flex items-center gap-2">
                {int.name}
                {int.isPopular && (
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-brand-blue/10 text-brand-blue/85 border-0">
                    Populaire
                  </Badge>
                )}
              </span>
              <span className="text-xs text-slate-400 hidden xl:inline">{int.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
