"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, Step1Data } from "@/lib/validations/quote-schemas";
import { Button } from "@/components/ui/button";
import { User, Activity, Scissors, Stethoscope, Smile, ScissorsSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepInterventionProps {
    onNext: (data: Step1Data) => void;
    defaultValues: Partial<Step1Data>;
}

const CATEGORIES = [
    { id: "visage", label: "Chirurgie du Visage", icon: User },
    { id: "mammaire", label: "Chirurgie Mammaire", icon: Activity },
    { id: "silhouette", label: "Chirurgie Silhouette", icon: Scissors },
    { id: "bariatrique", label: "Chirurgie Bariatrique", icon: Stethoscope },
    { id: "dentaire", label: "Esthétique Dentaire", icon: Smile },
    { id: "capillaire", label: "Greffe Capillaire", icon: ScissorsSquare },
];

export function StepIntervention({ onNext, defaultValues }: StepInterventionProps) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            intervention: defaultValues.intervention || "",
            subIntervention: defaultValues.subIntervention || "",
        },
    });

    const selectedIntervention = watch("intervention");

    const onSubmit = (data: Step1Data) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-2">Choisir une intervention</h2>
                <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">Quelle zone de votre corps souhaitez-vous embellir ou soigner ?</p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {CATEGORIES.map((cat) => {
                        const isSelected = selectedIntervention === cat.id;
                        const Icon = cat.icon;

                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setValue("intervention", cat.id, { shouldValidate: true })}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                    isSelected
                                        ? "border-secondary bg-secondary/5 shadow-md scale-105"
                                        : "border-border bg-white hover:border-border/80 hover:bg-slate-50"
                                )}
                                aria-pressed={isSelected}
                            >
                                <div className={cn("p-3 rounded-full", isSelected ? "bg-secondary text-white" : "bg-slate-100 text-slate-500")}>
                                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <span className={cn("text-sm md:text-base font-medium text-center", isSelected ? "text-primary font-bold" : "text-slate-600")}>
                                    {cat.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {errors.intervention && (
                    <p className="text-destructive text-sm font-medium mt-4 text-center">{errors.intervention.message}</p>
                )}
            </div>

            <div className="flex justify-center pt-6">
                <Button
                    type="submit"
                    size="lg"
                    disabled={!selectedIntervention}
                    className="w-full md:w-auto min-w-[200px] h-14 text-base bg-primary hover:bg-primary/90 disabled:opacity-50"
                >
                    Continuer
                </Button>
            </div>
        </form>
    );
}
