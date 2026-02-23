import { CheckCircle2, UserCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SURGEONS, getSurgeonsForIntervention } from "@/data/surgeons";

interface DynamicDoctorsProps {
    interventionSlug?: string;
    title?: string;
}

export function DynamicDoctors({ interventionSlug, title = "Nos chirurgiens experts" }: DynamicDoctorsProps) {
    const doctors = interventionSlug
        ? getSurgeonsForIntervention(interventionSlug)
        : Object.values(SURGEONS);

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
                        <div key={doc.slug} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start border border-white/10 hover:border-brand-blue/30 transition-all">

                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden relative border-4 border-white/10 mx-auto md:mx-0">
                                {doc.image ? (
                                    <Image
                                        src={doc.image}
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
                                        <span>{doc.experience || "Plus de 10 ans d'expérience"}</span>
                                    </li>
                                    <li className="flex items-center justify-center md:justify-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                                        <span>Inscrit au Conseil de l'Ordre National</span>
                                    </li>
                                </ul>

                                <Link href="/chirurgiens/">
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
