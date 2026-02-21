"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StepProgressProps {
    currentStep: 1 | 2 | 3 | "confirmation";
}

export function StepProgress({ currentStep }: StepProgressProps) {
    const steps = [
        { id: 1, title: "Intervention" },
        { id: 2, title: "Vos infos" },
        { id: 3, title: "Coordonnées" },
    ];

    const currentIdx = currentStep === "confirmation" ? 4 : currentStep;

    return (
        <div className="w-full mb-8">
            <div className="flex justify-between items-center relative">
                {/* Progress Line Background */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full z-0" />

                {/* Animated Progress Line Foreground */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-secondary rounded-full z-0"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentIdx - 1) / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Steps */}
                {steps.map((step) => {
                    const isCompleted = currentIdx > step.id;
                    const isCurrent = currentIdx === step.id;

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                            <motion.div
                                initial={false}
                                animate={{
                                    backgroundColor: isCompleted ? "hsl(var(--secondary))" : isCurrent ? "hsl(var(--primary))" : "white",
                                    borderColor: isCompleted ? "hsl(var(--secondary))" : isCurrent ? "hsl(var(--primary))" : "hsl(var(--border))",
                                    color: isCompleted || isCurrent ? "white" : "hsl(var(--muted-foreground))"
                                }}
                                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-sm transition-colors duration-300`}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                            </motion.div>
                            <span className={`text-xs md:text-sm font-medium ${isCurrent || isCompleted ? "text-primary font-bold" : "text-muted-foreground"}`}>
                                {step.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
