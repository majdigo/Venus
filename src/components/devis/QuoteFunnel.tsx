"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StepProgress } from "./StepProgress";
import { FullQuoteData } from "@/lib/validations/quote-schemas";
import { StepIntervention } from "./StepIntervention";
import { StepMedicalInfo } from "./StepMedicalInfo";
import { StepContact } from "./StepContact";
import { StepConfirmation } from "./StepConfirmation";
import { useGtmEvent } from "@/hooks/useGtmEvent";
import { useEffect } from "react";

type FunnelStep = 1 | 2 | 3 | "confirmation";

export function QuoteFunnel({ initialIntervention }: { initialIntervention?: string }) {
    const [step, setStep] = useState<FunnelStep>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<Partial<FullQuoteData>>({
        intervention: initialIntervention || "",
    });
    const pushGtmEvent = useGtmEvent();

    // Track funnel entry
    useEffect(() => {
        pushGtmEvent({
            event: 'funnel_step_1_start',
            funnel_source: initialIntervention ? 'direct_link' : 'cta_hero',
            pre_selected_intervention: initialIntervention || null
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goNext = async (stepData: Partial<FullQuoteData>) => {
        const newData = { ...formData, ...stepData };
        setFormData(newData);

        if (step === 3) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newData)
                });

                const result = await response.json();

                if (result.success) {
                    pushGtmEvent({
                        event: 'funnel_complete',
                        transaction_id: result.transaction_id,
                        intervention: newData.intervention,
                        ...stepData,
                        estimated_value: 2000, // To be refined by a mapping function later
                        currency: 'EUR',
                        lead_source: 'website'
                    });
                    setStep("confirmation");
                } else {
                    console.error("API Validation Error:", result.errors);
                    alert("Erreur dans les données du formulaire. Veuillez vérifier vos saisies.");
                }
            } catch (error) {
                console.error("Fetch Error:", error);
                alert("Une erreur technique est survenue. Veuillez réessayer.");
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Push GTM step complete
            pushGtmEvent({
                event: `funnel_step_${step}_complete`,
                intervention: newData.intervention,
                ...stepData,
            });
            setStep((prev) => (prev as number) + 1 as FunnelStep);
        }
    };

    const goBack = () => {
        if (step !== "confirmation" && step > 1) {
            setStep((prev) => (prev as number) - 1 as FunnelStep);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-10 relative">
            {isSubmitting && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-50 rounded-3xl flex flex-col items-center justify-center">
                    <div className="w-12 h-12 border-4 border-brand-navy border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 font-bold text-brand-navy">Transmission sécurisée en cours...</p>
                </div>
            )}
            <StepProgress currentStep={step} />

            <div className="relative mt-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {/* Step 1 */}
                        {step === 1 && (
                            <StepIntervention onNext={goNext} defaultValues={formData} />
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <StepMedicalInfo onNext={goNext} onBack={goBack} defaultValues={formData} />
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                            <StepContact onNext={goNext} onBack={goBack} defaultValues={formData} />
                        )}

                        {/* Confirmation */}
                        {step === "confirmation" && (
                            <StepConfirmation data={formData as FullQuoteData} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
