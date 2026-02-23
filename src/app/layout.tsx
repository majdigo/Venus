import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Suspense } from 'react';
import { GtmProvider } from '@/components/tracking/GtmProvider';
import { JsonLd } from "@/components/seo/JsonLd";
import { getClinicData } from "@/lib/schema/clinic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { UrgencyBanner } from "@/components/cro/UrgencyBanner";
import { ExitIntentPopup } from "@/components/cro/ExitIntentPopup";
import { SocialProofToast } from "@/components/cro/SocialProofToast";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const SITE_URL = 'https://venus-estetika.com';
const SITE_NAME = 'Venus Estetika';
const DEFAULT_DESCRIPTION = "Clinique de chirurgie esthétique en Tunisie. Tarifs jusqu'à 60% moins chers qu'en France. Séjour médical de luxe tout compris.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Chirurgie Esthétique en Tunisie`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Chirurgie Esthétique en Tunisie`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Venus Estetika — Chirurgie Esthétique en Tunisie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Chirurgie Esthétique en Tunisie`,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://sgtm.venus-estetika.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Suspense fallback={null}>
          <GtmProvider>
            <JsonLd data={getClinicData()} />
            <UrgencyBanner />
            <Header />
            <main className="min-h-screen pb-16 lg:pb-0">
              {children}
            </main>
            <Footer />
            <WhatsAppWidget />
            <MobileStickyBar />
            <ScrollToTop />
            <SocialProofToast />
            <ExitIntentPopup />
            <CookieConsent />
          </GtmProvider>
        </Suspense>
      </body>
    </html>
  );
}
