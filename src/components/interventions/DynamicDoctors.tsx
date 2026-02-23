import { client } from "@/sanity/lib/client";
import { doctorsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { Image as SanityImage } from "sanity";
import { CheckCircle2, UserCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Doctor {
    _id: string;
    name: string;
    slug: string;
    specialty: string;
    image: SanityImage;
    experienceYears: number;
    isapsMember: boolean;
    bio: string;
    interventions?: { title: string; slug: string }[];
}

interface DynamicDoctorsProps {
    interventionSlug?: string;
    title?: string;
}

export async function DynamicDoctors({ interventionSlug, title = "Nos chirurgiens experts" }: DynamicDoctorsProps) {
    let doctors: Doctor[] = [];

    try {
        const allDoctors: Doctor[] = await client.fetch(doctorsQuery, {}, { next: { revalidate: 3600 } });

        // If an interventionSlug is provided, filter doctors who perform it
        if (interventionSlug) {
            doctors = allDoctors.filter(doc =>
                doc.interventions?.some(int => int.slug === interventionSlug)
            );
        } else {
            doctors = allDoctors;
        }
    } catch (error) {
        console.error("Failed to fetch doctors from Sanity:", error);
        return null; // Graceful fallback
    }

    if (!doctors || doctors.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden" id="chirurgiens">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">{title}</h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        Confiez votre intervention aux meilleurs praticiens de Tunisie, certifiés à l'international et reconnus pour l'excellence de leurs résultats.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {doctors.map((doc) => (
                        <div key={doc._id} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start border border-white/10 hover:border-brand-blue/30 transition-all">

                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden relative border-4 border-white/10 mx-auto md:mx-0">
                                {doc.image ? (
                                    <Image
                                        src={urlForImage(doc.image)?.url() || ""}
                                        alt={doc.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 128px, 192px"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/10 flex items-center justify-center">
                                        <UserCircle2 className="w-16 h-16 text-white/50" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-2">{doc.name}</h3>
                                <p className="text-brand-blue font-medium mb-4">{doc.specialty}</p>

                                <ul className="space-y-2 mb-6 text-sm text-white/80">
                                    <li className="flex items-center justify-center md:justify-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                                        <span>{doc.experienceYears} ans d'expérience chirurgicale</span>
                                    </li>
                                    {doc.isapsMember && (
                                        <li className="flex items-center justify-center md:justify-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                                            <span>Membre de l'ISAPS (Standard International)</span>
                                        </li>
                                    )}
                                    <li className="flex items-center justify-center md:justify-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                                        <span>Inscrit au Conseil de l'Ordre National</span>
                                    </li>
                                </ul>

                                {doc.bio && (
                                    <p className="text-white/70 text-sm line-clamp-3 mb-6 relative pl-4 border-l-2 border-brand-blue/50 italic">
                                        "{doc.bio}"
                                    </p>
                                )}

                                <Link href={`/chirurgiens/${doc.slug}`}>
                                    <Button variant="outline" className="text-brand-navy bg-white hover:bg-white/90 rounded-full group">
                                        Voir profil complet <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/chirurgiens">
                        <Button variant="link" className="text-white/80 hover:text-white text-base">
                            Découvrir toute l'équipe médicale &rarr;
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
