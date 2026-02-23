import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface AuthenticLandingSectionProps {
    title: string;
    description: string;
    images: string[];
    contentSnippets: string[];
    mainColor?: 'blue' | 'navy';
}

export function AuthenticLandingSection({
    title,
    description,
    images,
    contentSnippets,
    mainColor = 'blue'
}: AuthenticLandingSectionProps) {
    const isBlue = mainColor === 'blue';

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* HEADLINE & DESCRIPTION */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className={`text-3xl md:text-5xl font-heading font-bold mb-6 ${isBlue ? 'text-brand-blue' : 'text-brand-navy'}`}>
                        {title}
                    </h2>
                    {description && (
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* AUTHENTIC CONTENT SNIPPETS */}
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-brand-navy mb-6">En Savoir Plus</h3>
                            <ul className="space-y-4">
                                {contentSnippets.filter(s => s.length > 20 && s.length < 200).slice(0, 6).map((snippet, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${isBlue ? 'text-brand-blue' : 'text-brand-navy'}`} />
                                        <span className="text-gray-700 leading-relaxed font-medium">{snippet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Longer Text Blocks */}
                        <div className="prose prose-lg text-gray-600">
                            {contentSnippets.filter(s => s.length >= 200).slice(0, 2).map((snippet, idx) => (
                                <p key={idx} className="leading-relaxed bg-white border-l-4 border-brand-blue pl-4 py-2 italic rounded-r-lg">
                                    "{snippet}"
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* AUTHENTIC IMAGES (BEFORE/AFTER or CLINIC) */}
                    <div className="grid grid-cols-2 gap-4 h-full relative">
                        {images.slice(0, 3).map((imgUrl, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-2xl overflow-hidden shadow-lg border-2 border-white ${idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                                    }`}
                            >
                                <Image
                                    src={imgUrl}
                                    alt={`${title} - Résultat ${idx + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                            </div>
                        ))}
                        {images.length === 0 && (
                            <div className="col-span-2 aspect-[16/9] bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                                <span className="text-gray-400 font-medium">Bientôt disponible</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
