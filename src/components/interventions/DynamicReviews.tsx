import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAllReviews, getReviewsForIntervention } from "@/data/reviews";

interface DynamicReviewsProps {
    interventionSlug?: string;
    className?: string;
    title?: string;
}

export function DynamicReviews({ interventionSlug, className, title = "Avis de nos patients" }: DynamicReviewsProps) {
    const reviews = interventionSlug
        ? getReviewsForIntervention(interventionSlug)
        : getAllReviews();

    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <section className={cn("py-20 bg-white", className)}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">{title}</h2>
                    <div className="flex items-center justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <p className="text-slate-500 font-medium">Note moyenne de 4.9/5 basée sur l'expérience de nos patients</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review._id} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all relative">
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-blue/10 rotate-180" />

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn("w-4 h-4", i < review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200")}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10 text-sm md:text-base">
                                "{review.comment}"
                            </p>

                            <div className="mt-auto border-t border-slate-200 pt-4 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-brand-navy">{review.author}</p>
                                    {review.intervention && (
                                        <p className="text-xs text-brand-blue font-medium mt-1 uppercase tracking-wider">{review.intervention.title}</p>
                                    )}
                                </div>
                                <span className="text-xs text-slate-400">
                                    {new Date(review.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
