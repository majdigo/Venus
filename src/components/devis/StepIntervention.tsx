"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, Step1Data } from "@/lib/validations/quote-schemas";
import { Button } from "@/components/ui/button";
import { User, Activity, Scissors, Stethoscope, Smile, ScissorsSquare, Sparkles, ChevronLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION_CATEGORIES } from "@/lib/navigation-data";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";

interface StepInterventionProps {
    onNext: (data: Step1Data) => void;
    defaultValues: Partial<Step1Data>;
}

const CATEGORIES = [
    { id: "visage", navSlug: "chirurgie-visage", label: "Chirurgie du Visage", icon: User },
    { id: "mammaire", navSlug: "chirurgie-mammaire", label: "Chirurgie Mammaire", icon: Activity },
    { id: "silhouette", navSlug: "chirurgie-silhouette", label: "Chirurgie Silhouette", icon: Scissors },
    { id: "bariatrique", navSlug: "bariatrique", label: "Chirurgie Bariatrique", icon: Stethoscope },
    { id: "dentaire", navSlug: "dentaire", label: "Santé Dentaire", icon: Smile },
    { id: "capillaire", navSlug: "capillaire", label: "Greffe Capillaire", icon: ScissorsSquare },
    { id: "medecine-esthetique", navSlug: "medecine-esthetique", label: "Médecine Esthétique", icon: Sparkles },
];

function getInterventionsForCategory(navSlug: string) {
    const navCat = NAVIGATION_CATEGORIES.find((c) => c.slug === navSlug);
    return navCat?.interventions || [];
}

/** Resolve an intervention slug (e.g. "sleeve-gastrique") to its category ID + intervention name. */
function resolveInitialState(intervention: string | undefined) {
    if (!intervention) return { categoryId: null, subIntervention: "" };

    // Already a category ID (e.g. coming back from step 2)
    if (CATEGORIES.some((c) => c.id === intervention)) {
        return { categoryId: intervention, subIntervention: "" };
    }

    // Intervention slug from URL — find the parent category
    for (const cat of CATEGORIES) {
        const interventions = getInterventionsForCategory(cat.navSlug);
        const match = interventions.find((int) => int.slug === intervention);
        if (match) {
            return { categoryId: cat.id, subIntervention: match.name };
        }
    }

    return { categoryId: null, subIntervention: "" };
}

export function StepIntervention({ onNext, defaultValues }: StepInterventionProps) {
    const resolved = resolveInitialState(defaultValues.intervention);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        resolved.categoryId
    );

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors, submitCount },
    } = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            intervention: resolved.categoryId || defaultValues.intervention || "",
            subIntervention: resolved.subIntervention || defaultValues.subIntervention || "",
        },
    });

    const currentIntervention = watch("intervention");
    const currentSubIntervention = watch("subIntervention");

    const handleCategorySelect = (catId: string) => {
        setSelectedCategory(catId);
        setValue("intervention", catId, { shouldValidate: true });
        setValue("subIntervention", "", { shouldValidate: false });
    };

    const handleSubInterventionSelect = (name: string) => {
        setValue("subIntervention", name, { shouldValidate: true });
    };

    const handleBack = () => {
        setSelectedCategory(null);
        setValue("intervention", "", { shouldValidate: false });
        setValue("subIntervention", "", { shouldValidate: false });
    };

    const onSubmit = (data: Step1Data) => {
        onNext(data);
    };

    const pushGtmEvent = useGtmEvent();

    useEffect(() => {
        if (submitCount > 0) {
            Object.entries(errors).forEach(([field, error]) => {
                if (error && error.message) {
                    pushGtmEvent({
                        event: 'funnel_validation_error',
                        field_name: field,
                        error_message: error.message as string,
                        funnel_step: 1,
                        intervention: currentIntervention || "unknown"
                    });
                }
            });
        }
    }, [errors, submitCount, pushGtmEvent, currentIntervention]);

    const currentCat = CATEGORIES.find((c) => c.id === selectedCategory);
    const interventions = currentCat ? getInterventionsForCategory(currentCat.navSlug) : [];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-2">
                    Choisir une intervention
                </h2>
                <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
                    {selectedCategory
                        ? "Sélectionnez l'intervention souhaitée"
                        : "Quelle zone de votre corps souhaitez-vous embellir ou soigner ?"}
                </p>

                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        /* === STEP A: Category Selection === */
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
                        >
                            {CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => handleCategorySelect(cat.id)}
                                        className={cn(
                                            "flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                            "border-border bg-white hover:border-secondary/50 hover:bg-secondary/5 hover:shadow-md"
                                        )}
                                    >
                                        <div className="p-3 rounded-full bg-slate-100 text-slate-500">
                                            <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium text-center text-slate-600">
                                            {cat.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </motion.div>
                    ) : (
                        /* === STEP B: Specific Intervention Selection === */
                        <motion.div
                            key="interventions"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Back to categories */}
                            <button
                                type="button"
                                onClick={handleBack}
                                className="flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-blue/80 mb-6 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                {currentCat?.label}
                            </button>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {interventions.map((int) => {
                                    const isSelected = currentSubIntervention === int.name;
                                    return (
                                        <button
                                            key={int.slug}
                                            type="button"
                                            onClick={() => handleSubInterventionSelect(int.name)}
                                            className={cn(
                                                "flex items-center justify-between gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                                isSelected
                                                    ? "border-secondary bg-secondary/5 shadow-md"
                                                    : "border-border bg-white hover:border-secondary/40 hover:bg-slate-50"
                                            )}
                                            aria-pressed={isSelected}
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={cn(
                                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                                    isSelected ? "bg-secondary text-white" : "bg-slate-100 text-slate-400"
                                                )}>
                                                    {isSelected ? <Check className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                                                </div>
                                                <span className={cn(
                                                    "font-medium truncate",
                                                    isSelected ? "text-primary font-bold" : "text-slate-700"
                                                )}>
                                                    {int.name}
                                                </span>
                                            </div>
                                            <span className="text-xs text-slate-400 shrink-0 hidden sm:inline">
                                                {int.price}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {errors.intervention && (
                    <p className="text-destructive text-sm font-medium mt-4 text-center">{errors.intervention.message}</p>
                )}
            </div>

            <div className="flex justify-center pt-6">
                <Button
                    type="submit"
                    size="lg"
                    disabled={!currentIntervention || !currentSubIntervention}
                    className="w-full md:w-auto min-w-[200px] h-14 text-base bg-primary hover:bg-primary/90 disabled:opacity-50"
                >
                    Continuer
                </Button>
            </div>
        </form>
    );
}
