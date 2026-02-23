import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Suspense } from "react";
import { GtmProvider } from "@/components/tracking/GtmProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { getClinicData } from "@/lib/schema/clinic";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body
                className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-foreground`}
            >
                <noscript>
                    <iframe
                        src={`https://sgtm.venus-estetika.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"}`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>

                <Suspense fallback={null}>
                    <GtmProvider>
                        <JsonLd data={getClinicData()} />

                        {/* Minimal header: logo + phone */}
                        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                            <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                                <Link href="/" className="flex items-center gap-2">
                                    <Image
                                        src="/images/logo/logo-venus-estetika.png"
                                        alt="Venus Estetika"
                                        width={140}
                                        height={40}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="tel:+21650606780"
                                        className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        +216 50 606 780
                                    </a>
                                    <a
                                        href="https://wa.me/21650606780"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.597-.822-6.342-2.197l-.443-.36-3.1 1.04 1.04-3.1-.36-.443A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </header>

                        <main className="pt-16">{children}</main>

                        {/* Minimal footer */}
                        <footer className="bg-brand-navy text-white py-8 px-4">
                            <div className="container mx-auto max-w-6xl text-center">
                                <p className="text-white/60 text-sm">
                                    &copy; {new Date().getFullYear()} Venus
                                    Estetika — Lac Malaren, Les Berges du Lac,
                                    1053 Tunis, Tunisie
                                </p>
                                <div className="flex justify-center gap-4 mt-3 text-xs text-white/40">
                                    <Link
                                        href="/mentions-legales"
                                        className="hover:text-white/60"
                                    >
                                        Mentions légales
                                    </Link>
                                    <Link
                                        href="/politique-confidentialite"
                                        className="hover:text-white/60"
                                    >
                                        Politique de confidentialité
                                    </Link>
                                </div>
                            </div>
                        </footer>

                        <WhatsAppWidget />
                    </GtmProvider>
                </Suspense>
            </body>
        </html>
    );
}
