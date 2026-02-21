"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema, Step2Data } from "@/lib/validations/quote-schemas";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StepMedicalInfoProps {
    onNext: (data: Step2Data) => void;
    onBack: () => void;
    defaultValues: Partial<Step2Data> & { intervention?: string };
}

export function StepMedicalInfo({ onNext, onBack, defaultValues }: StepMedicalInfoProps) {
    const isBariatric = defaultValues.intervention === "bariatrique" || defaultValues.intervention === "sleeve-gastrique";

    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        formState: { errors },
    } = useForm<Step2Data>({
        resolver: zodResolver(step2Schema),
        defaultValues: {
            gender: defaultValues.gender,
            age: defaultValues.age || undefined,
            weight: defaultValues.weight || undefined,
            height: defaultValues.height || undefined,
        },
    });

    const selectedGender = watch("gender");
    const watchWeight = watch("weight");
    const watchHeight = watch("height");

    const [bmi, setBmi] = useState<number | null>(null);

    useEffect(() => {
        if (isBariatric && watchWeight && watchHeight && watchHeight > 100) {
            const calc = watchWeight / Math.pow(watchHeight / 100, 2);
            setBmi(calc);
        } else {
            setBmi(null);
        }
    }, [watchWeight, watchHeight, isBariatric]);

    const onSubmit = (data: Step2Data) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-2">Vos informations</h2>
                <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">Ces informations nous aident à préparer un devis médical précis.</p>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Gender Selection */}
                    <div className="space-y-4">
                        <label className="font-semibold text-foreground">Vous êtes</label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setValue("gender", "femme", { shouldValidate: true })}
                                className={cn(
                                    "flex-1 py-4 px-6 rounded-xl border-2 font-medium transition-all duration-200",
                                    selectedGender === "femme"
                                        ? "border-secondary bg-secondary/5 text-primary"
                                        : "border-border bg-white text-slate-500 hover:border-slate-300"
                                )}
                            >
                                Une femme
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue("gender", "homme", { shouldValidate: true })}
                                className={cn(
                                    "flex-1 py-4 px-6 rounded-xl border-2 font-medium transition-all duration-200",
                                    selectedGender === "homme"
                                        ? "border-secondary bg-secondary/5 text-primary"
                                        : "border-border bg-white text-slate-500 hover:border-slate-300"
                                )}
                            >
                                Un homme
                            </button>
                        </div>
                        {errors.gender && <p className="text-destructive text-sm">{errors.gender.message}</p>}
                    </div>

                    {/* Age Selection */}
                    <div className="space-y-4">
                        <label htmlFor="age" className="font-semibold text-foreground">Votre âge</label>
                        <div className="relative">
                            <input
                                id="age"
                                type="number"
                                inputMode="numeric"
                                placeholder="Ex : 35"
                                {...register("age", { valueAsNumber: true })}
                                className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">ans</span>
                        </div>
                        {errors.age && <p className="text-destructive text-sm">{errors.age.message}</p>}
                    </div>

                    {/* Conditional Bariatric Fields */}
                    <AnimatePresence>
                        {isBariatric && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="col-span-full grid md:grid-cols-2 gap-8 overflow-hidden pt-4"
                            >
                                <div className="space-y-4">
                                    <label htmlFor="height" className="font-semibold text-foreground">Votre taille (cm)</label>
                                    <div className="relative">
                                        <input
                                            id="height"
                                            type="number"
                                            inputMode="numeric"
                                            placeholder="Ex : 165"
                                            {...register("height", { valueAsNumber: true })}
                                            className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">cm</span>
                                    </div>
                                    {errors.height && <p className="text-destructive text-sm">{errors.height.message}</p>}
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="weight" className="font-semibold text-foreground">Votre poids (kg)</label>
                                    <div className="relative">
                                        <input
                                            id="weight"
                                            type="number"
                                            inputMode="numeric"
                                            placeholder="Ex : 85"
                                            {...register("weight", { valueAsNumber: true })}
                                            className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">kg</span>
                                    </div>
                                    {errors.weight && <p className="text-destructive text-sm">{errors.weight.message}</p>}
                                </div>

                                {bmi !== null && bmi > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={cn(
                                            "col-span-full p-4 rounded-xl border flex items-center gap-4",
                                            bmi >= 30 ? "bg-green-50 border-green-200 text-green-800" : "bg-orange-50 border-orange-200 text-orange-800"
                                        )}
                                    >
                                        <div className="flex-1">
                                            <p className="font-bold text-lg">Votre IMC estimé : <span className="font-black text-2xl ml-2">{bmi.toFixed(1)}</span></p>
                                            <p className="text-sm mt-1 opacity-90">
                                                {bmi >= 35 ? "Vous êtes éligible à la chirurgie bariatrique." :
                                                    bmi >= 30 ? "Vous êtes potentiellement éligible. Un avis médical confirmera." :
                                                        "L'intervention bariatrique est généralement recommandée à partir de 30."}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-100">
                <Button
                    type="button"
                    variant="ghost"
                    onClick={onBack}
                    className="w-full sm:w-auto text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                </Button>
                <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] h-14 text-base bg-primary hover:bg-primary/90"
                >
                    Dernière étape
                </Button>
            </div>
        </form>
    );
}
