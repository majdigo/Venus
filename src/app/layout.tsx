import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Suspense } from 'react';
import { GtmProvider } from '@/components/tracking/GtmProvider';
import { JsonLd } from "@/components/seo/JsonLd";
import { getClinicData } from "@/lib/schema/clinic";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Venus Estetika - Chirurgie Esthétique en Tunisie",
  description: "Clinique de chirurgie esthétique en Tunisie. Tarifs jusqu'à 60% moins chers qu'en France. Séjour médical de luxe tout compris.",
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
            {children}
          </GtmProvider>
        </Suspense>
      </body>
    </html>
  );
}
