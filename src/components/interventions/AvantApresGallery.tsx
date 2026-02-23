import { client } from "@/sanity/lib/client";
import { galleryCasesByInterventionQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Image as SanityImage } from "sanity";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface GalleryCase {
    _id: string;
    title: string;
    beforeImage: SanityImage;
    afterImage: SanityImage;
    delay?: string;
    details?: string;
}

interface AvantApresGalleryProps {
    interventionSlug: string;
}

export async function AvantApresGallery({ interventionSlug }: AvantApresGalleryProps) {
    // Fetch cases
    let cases: GalleryCase[] = [];
    try {
        cases = await client.fetch(galleryCasesByInterventionQuery, { interventionSlug }, { next: { revalidate: 3600 } });
    } catch (error) {
        console.error(`Failed to fetch gallery cases for ${interventionSlug} from Sanity. Check config.`, error);
        return null;
    }

    if (!cases || cases.length === 0) {
        return null; // Don't render if no cases
    }

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="avant-apres">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-6 border border-brand-blue/20">
                        <Sparkles className="w-7 h-7" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-navy mb-6">
                        Résultats Avant / Après
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        Découvrez les transformations réelles de nos patients grâce à l'expertise de nos chirurgiens. Glissez le curseur sur les images pour apprécier le résultat.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {cases.map((c) => (
                        <div key={c._id} className="flex flex-col gap-5 group">
                            <BeforeAfterSlider
                                beforeImageSrc={urlForImage(c.beforeImage)?.url() || ""}
                                afterImageSrc={urlForImage(c.afterImage)?.url() || ""}
                                className="w-full transition-transform duration-500 group-hover:-translate-y-2"
                            />
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 text-center transition-all duration-300 group-hover:shadow-md group-hover:border-brand-blue/20 h-full flex flex-col">
                                <h3 className="font-bold text-brand-navy text-lg mb-2">{c.title}</h3>
                                {c.delay && (
                                    <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-3">Résultat à {c.delay}</p>
                                )}
                                {c.details && (
                                    <p className="text-sm text-slate-500 leading-relaxed mt-auto border-t border-slate-100 pt-3">{c.details}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href={`/devis?intervention=${interventionSlug}`}>
                        <Button size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90 h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            Obtenir un résultat similaire <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <p className="mt-4 text-sm text-slate-500 font-medium">Bilan médical 100% gratuit et sans engagement</p>
                </div>
            </div>
        </section>
    );
}
