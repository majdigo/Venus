import { client } from '@/sanity/lib/client';
import { doctorsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, ShieldCheck, Stethoscope, Star } from "lucide-react";
import { GuaranteeSection } from "@/components/interventions/GuaranteeSection";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Chirurgiens Esthétiques en Tunisie | Équipe Médicale Venus Estetika",
    description: "Découvrez notre équipe d'experts : chirurgiens plasticiens, maxillo-faciaux et bariatriques. Plus de 15 ans d'expérience, certifiés à l'international.",
};

export const revalidate = 60; // Revalidate every minute for CMS updates

export default async function ChirurgiensPage() {
    // Fetch data from Sanity
    let sanityDoctors = null;
    try {
        sanityDoctors = await client.fetch(doctorsQuery);
    } catch (e) {
        console.warn("Sanity configuration missing or dataset not found. Using fallback static data.");
    }

    // Fallback static data if Sanity is empty (ensuring immediate E-E-A-T)
    const fallbackDoctors = [
        {
            _id: 'dr-balti',
            name: 'Dr. Walid Balti',
            slug: 'dr-walid-balti',
            specialty: 'Chirurgien Plasticien & Esthétique',
            experienceYears: 15,
            isapsMember: true,
            bio: "Inscrit au Conseil de l'Ordre des Médecins de Tunisie sous le N° 13361. Spécialiste reconnu internationalement en chirurgie de la silhouette (vaser liposuccion) et mammaire. Diplômé de la faculté de Médecine de Tunis et ancien attaché des hôpitaux de Paris. Une figure incontournable de la chirurgie VIP.",
            interventions: [
                { title: 'Liposuccion Vaser', slug: 'liposuccion' },
                { title: 'Abdominoplastie', slug: 'abdominoplastie' },
                { title: 'Augmentation Mammaire', slug: 'augmentation-mammaire' },
            ],
            // Placeholder image if not in CMS
            imageUrl: '/images/heroes/chirurgie-silhouette-hero.jpg'
        },
        {
            _id: 'dr-ghedira',
            name: 'Dr. Atef Ghedira',
            slug: 'dr-atef-ghedira',
            specialty: 'Chirurgien Maxillo-Facial & Esthétique',
            experienceYears: 12,
            isapsMember: false,
            bio: "Expert absolu de la chirurgie du visage. Le Dr. Ghedira excelle dans les rhinoplasties ultrasoniques et les liftings cervico-faciaux. Une approche artistique couplée à une rigueur scientifique pour un résultat 100% naturel. Formations avancées en chirurgie orthognathique.",
            interventions: [
                { title: 'Rhinoplastie', slug: 'rhinoplastie' },
                { title: 'Lifting du Visage', slug: 'lifting-visage' },
                { title: 'Greffe de Cheveux', slug: 'greffe-cheveux' },
            ],
            imageUrl: '/images/heroes/chirurgie-visage-hero.jpg'
        },
        {
            _id: 'dr-bariatrique',
            name: 'Pôle Bariatrique',
            slug: 'equipe-bariatrique',
            specialty: 'Chirurgie de l\'Obésité & Métabolique',
            experienceYears: 20,
            isapsMember: false,
            bio: "Une équipe multidisciplinaire (Chirurgiens digestifs, anesthésistes-réanimateurs, nutritionnistes) dédiée au traitement radical de l'obésité sévère. Plus de 3000 interventions réussies (Sleeve et Bypass) transformant la vie et la santé de nos patients.",
            interventions: [
                { title: 'Sleeve Gastrique', slug: 'sleeve-gastrique' },
                { title: 'Bypass Gastrique', slug: 'bypass-gastrique' },
            ],
            imageUrl: '/images/heroes/chirurgie-bariatrique-hero.jpg'
        }
    ];

    const displayDoctors = sanityDoctors && sanityDoctors.length > 0 ? sanityDoctors : fallbackDoctors;

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* HERO SECTION */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-20">
                <Image
                    src="/images/hero/hero-chirurgiens.png"
                    alt="Équipe médicale Venus Estetika — Chirurgiens en Tunisie"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/80 to-brand-navy/70" />
                <div className="container mx-auto max-w-5xl relative z-10 text-center px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm mb-6">
                        <ShieldCheck className="w-4 h-4 text-brand-blue" />
                        Label d'Excellence Médicale
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                        L'Élite de la Chirurgie Esthétique
                    </h1>
                    <p className="text-lg md:text-xl text-white/85 mb-0 max-w-3xl mx-auto leading-relaxed">
                        Chez Venus Estetika, nous ne collaborons qu'avec des chirurgiens plasticiens inscrits à l'Ordre des Médecins, justifiant d'une expérience internationale et d'une maîtrise absolue de leur spécialité.
                    </p>
                </div>
            </section>

            {/* TRUST INDICATORS */}
            <section className="py-12 bg-brand-navy text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="px-4">
                            <div className="text-3xl font-bold text-brand-blue mb-2">15+</div>
                            <div className="text-sm text-white/80">Années d'expérience moyenne</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-brand-blue mb-2">10k+</div>
                            <div className="text-sm text-white/80">Interventions réussies</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                            <div className="text-sm text-white/80">Inscrits à l'Ordre des Médecins</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-brand-blue mb-2 flex justify-center items-center gap-1">
                                4.9 <Star className="w-5 h-5 fill-brand-blue" />
                            </div>
                            <div className="text-sm text-white/80">Avis Patients (Trustpilot)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOCTORS GRID */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        {displayDoctors.map((doc: any, index: number) => {
                            const isFallback = !doc.image;
                            const imgSrc = isFallback ? doc.imageUrl : urlForImage(doc.image)?.url();
                            const isEven = index % 2 === 0;

                            return (
                                <div key={doc._id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 items-center overflow-hidden relative group`}>

                                    {/* Abstract background shape */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-blue/10 transition-colors duration-700" />

                                    {/* Image Column */}
                                    <div className="w-full lg:w-1/3 relative z-10 shrink-0">
                                        <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-md">
                                            {imgSrc ? (
                                                <Image
                                                    src={imgSrc}
                                                    alt={doc.name}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                                    <Stethoscope className="w-16 h-16 text-slate-400" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="w-full lg:w-2/3 relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h2 className="text-3xl font-bold text-brand-navy mb-2">{doc.name}</h2>
                                                <h3 className="text-xl text-brand-blue font-medium">{doc.specialty}</h3>
                                            </div>
                                            {doc.isapsMember && (
                                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100" title="Membre de l'International Society of Aesthetic Plastic Surgery">
                                                    <Award className="w-4 h-4" />
                                                    ISAPS Member
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 font-medium border-b border-gray-100 pb-6">
                                            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-brand-blue" /> {doc.experienceYears} ans d'expertise</span>
                                            {doc.isapsMember && <span className="sm:hidden flex items-center gap-1.5 text-blue-600"><Award className="w-4 h-4" /> ISAPS</span>}
                                        </div>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {doc.bio}
                                        </p>

                                        {doc.interventions && doc.interventions.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Interventions Pratiquées</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {doc.interventions.map((interv: any, idx: number) => (
                                                        <span key={idx} className="bg-slate-50 text-brand-navy border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                                                            {interv.title}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                                            <Button asChild className="bg-brand-navy hover:bg-brand-navy/90 text-white shadow-lg">
                                                <Link href={`/devis?medecin=${doc.slug}`}>
                                                    Demander une télé-consultation <ArrowRight className="ml-2 w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GARANTIES */}
            <GuaranteeSection />
        </div>
    );
}
