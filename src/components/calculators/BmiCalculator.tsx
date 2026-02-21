"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useGtmEvent } from "@/hooks/useGtmEvent";

interface BmiCalculatorProps {
    variant?: "full" | "compact";
    onEligible?: (bmi: number, intervention: string) => void;
    className?: string;
}

export function BmiCalculator({ variant = "full", onEligible, className = "" }: BmiCalculatorProps) {
    const router = useRouter();
    const pathname = usePathname();
    const pushGtmEvent = useGtmEvent();
    const [height, setHeight] = useState<number>(170);
    const [weight, setWeight] = useState<number>(75);
    const [bmi, setBmi] = useState<number>(0);
    const hasOpened = React.useRef(false);

    useEffect(() => {
        if (!hasOpened.current) {
            pushGtmEvent({
                event: 'bmi_calculator_open',
                page_path: pathname,
                widget_location: variant === 'full' ? 'page_body' : 'sidebar'
            });
            hasOpened.current = true;
        }

        if (height > 0) {
            const calculatedBmi = weight / Math.pow(height / 100, 2);
            setBmi(calculatedBmi);

            // Only push result if BMI is fully calculated and > 10 to avoid initial 0 renders
            if (calculatedBmi > 10) {
                const infoObj = getBmiInfo(calculatedBmi);
                pushGtmEvent({
                    event: 'bmi_calculator_result',
                    bmi_value: calculatedBmi,
                    bmi_category: infoObj.gtmCategory,
                    eligible_procedures: infoObj.isEligible ? [infoObj.intervention] : [],
                    page_path: pathname
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, weight, pathname, variant]);

    const getBmiInfo = (bmiValue: number) => {
        if (bmiValue < 18.5) return { color: "bg-blue-500", label: "Insuffisance pondérale", msg: "Votre poids est insuffisant.", cta: "Consulter un nutritionniste", isEligible: false, intervention: "none", gtmCategory: "insuffisance" };
        if (bmiValue < 25) return { color: "bg-green-500", label: "Poids normal", msg: "Votre poids est normal.", cta: "Découvrir nos interventions", isEligible: false, intervention: "none", gtmCategory: "normal" };
        if (bmiValue < 30) return { color: "bg-yellow-500", label: "Surpoids", msg: "Vous êtes en surpoids. La chirurgie n'est pas recommandée sauf comorbidités.", cta: "Consulter votre médecin", isEligible: false, intervention: "none", gtmCategory: "surpoids" };
        if (bmiValue < 35) return { color: "bg-orange-500", label: "Obésité modérée", msg: "Éligible sous conditions (comorbidités).", cta: "Obtenir l'avis du chirurgien", isEligible: true, intervention: "sleeve-gastrique", gtmCategory: "obesite_moderee" };
        if (bmiValue < 40) return { color: "bg-red-500", label: "Obésité sévère", msg: "Sleeve gastrique recommandée.", cta: "Obtenir un devis gratuit", isEligible: true, intervention: "sleeve-gastrique", gtmCategory: "obesite_severe" };
        return { color: "bg-rose-700", label: "Obésité morbide", msg: "Sleeve ou Bypass recommandé.", cta: "Avis chirurgical urgent", isEligible: true, intervention: "sleeve-ou-bypass", gtmCategory: "obesite_morbide" };
    };

    const info = getBmiInfo(bmi);

    const handleCtaClick = () => {
        pushGtmEvent({
            event: 'bmi_calculator_cta_click',
            bmi_value: bmi,
            bmi_category: info.gtmCategory,
            recommended_intervention: info.isEligible ? info.intervention : 'none',
            cta_destination: info.isEligible ? `/devis?intervention=${info.intervention}` : '/interventions'
        });

        if (onEligible) {
            onEligible(bmi, info.intervention);
        } else if (info.isEligible) {
            router.push(`/devis?intervention=${info.intervention}&bmi=${bmi.toFixed(1)}`);
        } else {
            router.push("/interventions");
        }
    };

    return (
        <div className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-border/50 ${className}`}>
            {/* Header */}
            <div className="bg-primary p-6 text-primary-foreground text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">Calculateur d&apos;IMC Bariatrique</h2>
                <p className="text-primary-foreground/80 text-sm">Évaluez votre éligibilité en 10 secondes</p>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Height Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="height-calc" className="font-semibold text-foreground">Votre taille</label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="height-calc"
                                    type="number"
                                    min="100" max="250"
                                    value={height}
                                    onChange={(e) => setHeight(Number(e.target.value))}
                                    className="w-20 text-right p-2 border border-input rounded-md font-bold focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                                    aria-label="Saisir la taille en centimètres"
                                />
                                <span className="text-muted-foreground font-medium">cm</span>
                            </div>
                        </div>
                        <input
                            type="range"
                            min="100" max="250"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full h-2 bg-secondary/20 rounded-lg appearance-none cursor-pointer accent-secondary"
                            aria-label="Curseur pour sélectionner la taille"
                        />
                    </div>

                    {/* Weight Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="weight-calc" className="font-semibold text-foreground">Votre poids</label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="weight-calc"
                                    type="number"
                                    min="40" max="300"
                                    value={weight}
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                    className="w-20 text-right p-2 border border-input rounded-md font-bold focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                                    aria-label="Saisir le poids en kilogrammes"
                                />
                                <span className="text-muted-foreground font-medium">kg</span>
                            </div>
                        </div>
                        <input
                            type="range"
                            min="40" max="300"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full h-2 bg-secondary/20 rounded-lg appearance-none cursor-pointer accent-secondary"
                            aria-label="Curseur pour sélectionner le poids"
                        />
                    </div>
                </div>

                {/* Status Gauge & Results */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-border text-center relative overflow-hidden">
                    <p className="text-muted-foreground font-medium mb-2 uppercase tracking-wide text-sm">Votre Résultat IMC</p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={bmi}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="text-6xl font-heading font-black text-primary mb-4"
                    >
                        {bmi.toFixed(1)}
                    </motion.div>

                    {/* Animated Gauge */}
                    <div className="w-full bg-slate-200 rounded-full h-3 mb-6 overflow-hidden relative" role="progressbar" aria-valuenow={bmi} aria-valuemin={10} aria-valuemax={50}>
                        <motion.div
                            className={`h-full ${info.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((bmi / 50) * 100, 100)}%` }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={info.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2"
                            aria-live="polite"
                        >
                            <h3 className={`text-xl font-bold ${info.color.replace('bg-', 'text-')}`}>{info.label}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{info.msg}</p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        className="mt-8"
                        animate={info.isEligible ? { scale: [1, 1.03, 1] } : {}}
                        transition={info.isEligible ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : {}}
                    >
                        <Button
                            size="lg"
                            onClick={handleCtaClick}
                            className={`w-full sm:w-auto text-base h-14 px-8 ${info.isEligible ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                        >
                            {info.cta} {info.isEligible && <ArrowRight className="ml-2 w-5 h-5" />}
                        </Button>
                    </motion.div>
                    {info.isEligible && (
                        <p className="text-xs text-muted-foreground mt-3 font-medium">Sleeve gastrique à partir de 3 500€ tout compris.</p>
                    )}
                </div>

                <p className="text-xs text-muted-foreground mt-6 text-center italic">
                    Ce calculateur fournit une estimation indicative basée sur l&apos;Indice de Masse Corporelle (IMC). Il ne remplace pas un avis médical. Seul un chirurgien qualifié peut déterminer votre éligibilité à une intervention bariatrique après un examen complet. Consultez votre médecin traitant avant toute décision.
                </p>
            </div>
        </div>
    );
}
