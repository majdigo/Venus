import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Search } from 'lucide-react';
import { Metadata } from 'next';
import { NAVIGATION_CATEGORIES, WHATSAPP_URL } from '@/lib/navigation-data';

export const metadata: Metadata = {
    title: 'Page introuvable | Venus Estetika',
    description: "La page que vous recherchez n'existe plus.",
};

// Derive popular interventions from centralized data + add static pages
const SUGGESTED_PAGES = [
    ...NAVIGATION_CATEGORIES
        .flatMap(cat => cat.interventions.filter(i => i.isPopular).map(i => ({
            label: i.name,
            href: `/interventions/${cat.slug}/${i.slug}`,
        })))
        .slice(0, 4),
    { label: "Nos Tarifs", href: "/tarifs" },
    { label: "Devis Gratuit", href: "/devis" },
];

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/heroes/medecine-esthetique-hero.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
            </div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            {/* Content box */}
            <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-3xl text-center shadow-2xl">
                <div className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Erreur 404</div>
                <h1 className="text-6xl md:text-8xl font-heading font-black text-white mb-6 drop-shadow-lg">
                    4<span className="text-brand-blue">0</span>4
                </h1>

                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                    Page introuvable
                </h2>

                <p className="text-white/80 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    La page que vous recherchez a peut-être été déplacée ou n'existe plus. Découvrez nos interventions populaires :
                </p>

                {/* Suggested pages grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10 max-w-lg mx-auto">
                    {SUGGESTED_PAGES.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm font-medium text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-colors"
                        >
                            <Search className="w-3 h-3 text-brand-blue flex-shrink-0" />
                            {page.label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="cta" size="cta" asChild className="rounded-xl">
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Retour à l'accueil
                        </Link>
                    </Button>
                    <Button variant="ctaOutline" size="cta" asChild className="rounded-xl">
                        <Link href="/devis">
                            Demander un devis
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm">
                        Besoin d&apos;aide immédiate ? Contactez-nous sur <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">WhatsApp</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
