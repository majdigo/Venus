"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema, Step2Data } from "@/lib/validations/quote-schemas";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";

interface StepMedicalInfoProps {
    onNext: (data: Step2Data) => void;
    onBack: () => void;
    defaultValues: Partial<Step2Data> & { intervention?: string };
}

export function StepMedicalInfo({ onNext, onBack, defaultValues }: StepMedicalInfoProps) {
    const intervention = defaultValues.intervention?.toLowerCase() || "";
    const isBariatric = intervention.includes("bariatrique") || intervention.includes("sleeve") || intervention.includes("bypass");
    const isBreast = intervention.includes("mammaire") || intervention.includes("seins");
    const isSilhouette = intervention.includes("silhouette") || intervention.includes("liposuccion") || intervention.includes("abdomino");
    const isFace = intervention.includes("visage") || intervention.includes("rhino") || intervention.includes("lifting");
    const isHair = intervention.includes("cheveux") || intervention.includes("capillaire") || intervention.includes("fue");
    const isDental = intervention.includes("dentaire") || intervention.includes("facette") || intervention.includes("implant");

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, submitCount },
    } = useForm<Step2Data>({
        resolver: zodResolver(step2Schema),
        defaultValues: {
            ...defaultValues,
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

    const pushGtmEvent = useGtmEvent();

    useEffect(() => {
        if (submitCount > 0) {
            Object.entries(errors).forEach(([field, error]) => {
                if (error && error.message) {
                    pushGtmEvent({
                        event: 'funnel_validation_error',
                        field_name: field,
                        error_message: error.message as string,
                        funnel_step: 2,
                        intervention: intervention || "unknown"
                    });
                }
            });
        }
    }, [errors, submitCount, pushGtmEvent, intervention]);

    const handleFocusIn = (e: React.FocusEvent<HTMLFormElement>) => {
        const target = e.target as unknown;
        if (
            (target instanceof HTMLInputElement ||
                target instanceof HTMLSelectElement ||
                target instanceof HTMLTextAreaElement) &&
            target.name
        ) {
            pushGtmEvent({
                event: 'funnel_field_interaction',
                field_name: target.name,
                funnel_step: 2,
                intervention: intervention || "unknown"
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={handleFocusIn} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-2">Vos informations médicales</h2>
                <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">Aidez le chirurgien à pré-évaluer votre dossier en toute confidentialité.</p>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Gender Selection */}
                    <div className="space-y-4">
                        <label className="font-semibold text-foreground">Vous êtes</label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setValue("gender", "femme", { shouldValidate: true })}
                                className={cn(
                                    "flex-1 py-4 px-4 rounded-xl border-2 font-medium transition-all duration-200",
                                    selectedGender === "femme"
                                        ? "border-secondary bg-secondary/5 text-primary shadow-sm"
                                        : "border-border bg-white text-slate-500 hover:border-slate-300"
                                )}
                            >
                                Femme
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue("gender", "homme", { shouldValidate: true })}
                                className={cn(
                                    "flex-1 py-4 px-4 rounded-xl border-2 font-medium transition-all duration-200",
                                    selectedGender === "homme"
                                        ? "border-secondary bg-secondary/5 text-primary shadow-sm"
                                        : "border-border bg-white text-slate-500 hover:border-slate-300"
                                )}
                            >
                                Homme
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

                    {/* --- DYNAMIC SECTIONS --- */}
                    <AnimatePresence mode="popLayout">
                        {/* 1. BARIATRIQUE */}
                        {isBariatric && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="col-span-full grid md:grid-cols-2 gap-8 overflow-hidden pt-4 border-t border-slate-100"
                            >
                                <div className="space-y-4">
                                    <label htmlFor="height" className="font-semibold text-foreground">Votre taille</label>
                                    <div className="relative">
                                        <input
                                            id="height"
                                            type="number"
                                            inputMode="numeric"
                                            placeholder="Ex : 165"
                                            {...register("height", { valueAsNumber: true })}
                                            className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary transition-colors"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">cm</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label htmlFor="weight" className="font-semibold text-foreground">Votre poids</label>
                                    <div className="relative">
                                        <input
                                            id="weight"
                                            type="number"
                                            inputMode="numeric"
                                            placeholder="Ex : 85"
                                            {...register("weight", { valueAsNumber: true })}
                                            className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary transition-colors"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">kg</span>
                                    </div>
                                </div>
                                {bmi !== null && bmi > 0 && (
                                    <div className={cn(
                                        "col-span-full p-4 rounded-xl border flex items-center gap-4",
                                        bmi >= 30 ? "bg-green-50 border-green-200 text-green-800" : "bg-orange-50 border-orange-200 text-orange-800"
                                    )}>
                                        <div className="flex-1">
                                            <p className="font-bold text-lg">Votre IMC estimé : <span className="font-black text-2xl ml-2">{bmi.toFixed(1)}</span></p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* 2. MAMMAIRE */}
                        {isBreast && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="col-span-full grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-100"
                            >
                                <div className="space-y-4">
                                    <label className="font-semibold text-foreground">Taille actuelle</label>
                                    <input
                                        type="text"
                                        placeholder="Ex : 85A, 90B..."
                                        {...register("currentSize")}
                                        className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary transition-colors"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="font-semibold text-foreground">Résultat souhaité</label>
                                    <select {...register("desiredSize")} className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary bg-white">
                                        <option value="">Sélectionnez une option</option>
                                        <option value="Bonnet C">Bonnet C (Naturel)</option>
                                        <option value="Bonnet D">Bonnet D (Généreux)</option>
                                        <option value="Bonnet E+">Bonnet E ou plus</option>
                                        <option value="Reduction">Réduction mammaire</option>
                                        <option value="Lifting">Juste remonter (Lifting)</option>
                                    </select>
                                </div>
                                <div className="col-span-full flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <input type="checkbox" id="ptosis" {...register("ptosis")} className="w-5 h-5 accent-secondary" />
                                    <label htmlFor="ptosis" className="font-medium text-slate-700 cursor-pointer">J'ai les seins qui tombent (Ptôse) suite à une perte de poids/grossesse.</label>
                                </div>
                            </motion.div>
                        )}

                        {/* 3. SILHOUETTE */}
                        {isSilhouette && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="col-span-full grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-100"
                            >
                                <div className="space-y-4 col-span-full">
                                    <label className="font-semibold text-foreground">Quelles zones souhaitez-vous traiter ? (Plusieurs choix possibles)</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {['Ventre', 'Hanches / Poignées', 'Cuisses', 'Culotte de cheval', 'Genoux', 'Double Menton', 'Dos', 'Bras'].map(zone => (
                                            <label key={zone} className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                                                <input type="checkbox" value={zone} {...register("targetZones")} className="accent-secondary w-4 h-4" />
                                                <span className="text-sm font-medium text-slate-700">{zone}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <input type="checkbox" id="weightFL" {...register("weightFluctuation")} className="w-5 h-5 accent-secondary flex-shrink-0" />
                                    <label htmlFor="weightFL" className="font-medium text-slate-700 cursor-pointer text-sm">J'ai eu une perte de poids importante récemment.</label>
                                </div>
                                {selectedGender === "femme" && (
                                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <input type="checkbox" id="preg" {...register("pregnancies")} className="w-5 h-5 accent-secondary flex-shrink-0" />
                                        <label htmlFor="preg" className="font-medium text-slate-700 cursor-pointer text-sm">J'ai déjà eu une ou plusieurs grossesses par le passé.</label>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* 4. VISAGE */}
                        {isFace && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="col-span-full grid md:grid-cols-1 gap-6 pt-4 border-t border-slate-100"
                            >
                                <div className="space-y-4">
                                    <label className="font-semibold text-foreground">Selon vous, qu'est-ce qui vous gêne visuellement ?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {['Bosse sur le nez', 'Pointe large', 'Cloison déviée', 'Relâchement ovale', 'Rides marquées', 'Paupières tombantes', 'Autre'].map(issue => (
                                            <label key={issue} className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                                                <input type="checkbox" value={issue} {...register("faceIssues")} className="accent-secondary w-4 h-4" />
                                                <span className="text-sm font-medium text-slate-700">{issue}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <input type="checkbox" id="prevFace" {...register("previousFaceSurgery")} className="w-5 h-5 accent-secondary flex-shrink-0" />
                                    <label htmlFor="prevFace" className="font-medium text-slate-700 cursor-pointer">J'ai déjà été opéré(e) du visage ou du nez par le passé.</label>
                                </div>
                            </motion.div>
                        )}

                        {/* 5. CAPILLAIRE */}
                        {isHair && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="col-span-full grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-100"
                            >
                                <div className="space-y-4">
                                    <label className="font-semibold text-foreground">Stade de perte de cheveux</label>
                                    <select {...register("hairLossType")} className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary bg-white">
                                        <option value="">Sélectionnez une option</option>
                                        <option value="Legere">Légère (Golfes creusés)</option>
                                        <option value="Moyenne">Moyenne (Tonsure / Dessus)</option>
                                        <option value="Diffuse">Alopécie diffuse globale</option>
                                        <option value="Severe">Sévère (Stade avancé)</option>
                                    </select>
                                </div>
                                {selectedGender === "homme" && (
                                    <div className="flex flex-col justify-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <input type="checkbox" id="beard" {...register("beardTransplant")} className="w-5 h-5 accent-secondary flex-shrink-0" />
                                            <label htmlFor="beard" className="font-medium text-slate-700 cursor-pointer">Je souhaite aussi densifier ma barbe.</label>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* 6. DENTAIRE */}
                        {isDental && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="col-span-full grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-100"
                            >
                                <div className="space-y-4">
                                    <label className="font-semibold text-foreground">Votre besoin principal</label>
                                    <select {...register("dentalNeeds")} className="w-full p-4 border-2 border-border rounded-xl focus:border-secondary bg-white">
                                        <option value="">Sélectionnez une option</option>
                                        <option value="Hollywood Smile">Sourire complet (Facettes/Hollywood Smile)</option>
                                        <option value="Implants">Remplacer des dents manquantes (Implants)</option>
                                        <option value="Blanchiment">Blanchiment ou Soins esthétiques</option>
                                        <option value="Alignement">Alignement (Invisalign)</option>
                                    </select>
                                </div>
                                <div className="flex flex-col justify-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" id="jaw" {...register("jawIssues")} className="w-5 h-5 accent-secondary flex-shrink-0" />
                                        <label htmlFor="jaw" className="font-medium text-slate-700 cursor-pointer">J'ai des problèmes d'occlusion ou des douleurs à la mâchoire.</label>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>

                    {/* PHOTOS UPLOAD INSTRUCTION */}
                    <div className="col-span-full bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10 border-dashed text-center mt-4">
                        <p className="font-bold text-brand-navy mb-2">📸 Un devis précis = Des photos de qualité</p>
                        <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Pour vous garantir un devis médical précis et forfaitaire, le chirurgien aura besoin d'étudier vos photos (Faces, Profils).
                            Plutôt que de vous demander de les uploader ici, votre coordinateur médical personnel vous communiquera un <b>lien sécurisé et confidentiel</b> via WhatsApp ou Email après cette demande.
                        </p>
                    </div>

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
