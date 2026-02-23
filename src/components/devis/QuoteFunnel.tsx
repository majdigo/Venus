"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StepProgress } from "./StepProgress";
import { FullQuoteData } from "@/lib/validations/quote-schemas";
import { StepIntervention } from "./StepIntervention";
import { StepMedicalInfo } from "./StepMedicalInfo";
import { StepContact } from "./StepContact";
import { StepConfirmation } from "./StepConfirmation";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";
import { useEffect, useRef } from "react";

type FunnelStep = 1 | 2 | 3 | "confirmation";

const INTERVENTION_VALUES: Record<string, number> = {
    'rhinoplastie': 2200, 'blepharoplastie': 1800, 'lifting-cervico-facial': 3500,
    'otoplastie': 1500, 'genioplastie': 2000, 'lipofilling-visage': 2200,
    'augmentation-mammaire': 2800, 'reduction-mammaire': 2500, 'lifting-seins': 2500,
    'lipofilling-mammaire': 2800, 'liposuccion': 2000, 'abdominoplastie': 2500,
    'bbl': 3200, 'mommy-makeover': 4500, 'lifting-bras': 2000, 'lifting-cuisses': 2000,
    'sleeve-gastrique': 4200, 'bypass-gastrique': 5500, 'anneau-gastrique': 3000,
    'greffe-cheveux': 1800, 'greffe-dhi': 2500, 'greffe-barbe': 1800,
    'implants-dentaires': 700, 'facettes': 350, 'couronnes': 200, 'blanchiment': 250,
    'botox': 150, 'acide-hyaluronique': 200, 'peeling': 300, 'mesolift': 250,
};

function getEstimatedValue(intervention: string): number {
    return INTERVENTION_VALUES[intervention] || 2000;
}

export function QuoteFunnel({ initialIntervention, initialBmi, initialNorwood, abVariant = 'control-A' }: { initialIntervention?: string, initialBmi?: string, initialNorwood?: string, abVariant?: string }) {
    const [step, setStep] = useState<FunnelStep>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<FullQuoteData>>({
        intervention: initialIntervention || "",
        ...(initialBmi ? { bmi: parseFloat(initialBmi) } : {}),
        ...(initialNorwood ? { norwoodStage: parseInt(initialNorwood) } : {})
    });
    const pushGtmEvent = useGtmEvent();
    const hasCompletedRef = useRef(false);

    // Track funnel entry & Abandonment setup
    useEffect(() => {
        pushGtmEvent({
            event: 'funnel_step_1_start',
            funnel_source: initialIntervention ? 'direct_link' : 'cta_hero',
            pre_selected_intervention: initialIntervention || null,
            ab_variant: abVariant
        });

        const handleUnload = () => {
            if (!hasCompletedRef.current) {
                // Determine the last completed step based on current step
                const lastCompleted = step === 1 ? 0 : step === 2 ? 1 : step === 3 ? 2 : 3;
                pushGtmEvent({
                    event: 'funnel_abandon',
                    last_completed_step: lastCompleted,
                    intervention: formData.intervention || "unknown",
                    ab_variant: abVariant
                });
            }
        };

        window.addEventListener('beforeunload', handleUnload);
        return () => {
            handleUnload(); // trigger on component unmount as well
            window.removeEventListener('beforeunload', handleUnload);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step, formData.intervention]);

    const goNext = async (stepData: Partial<FullQuoteData>) => {
        const newData = { ...formData, ...stepData };
        setFormData(newData);
        setSubmitError(null);

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
                    hasCompletedRef.current = true;
                    pushGtmEvent({
                        event: 'funnel_complete',
                        transaction_id: result.transaction_id,
                        intervention: newData.intervention,
                        ...stepData,
                        estimated_value: getEstimatedValue(newData.intervention || ''),
                        currency: 'EUR',
                        lead_source: 'website',
                        ab_variant: abVariant
                    });
                    setStep("confirmation");
                } else {
                    console.error("API Validation Error:", result.errors);
                    setSubmitError("Erreur dans les données du formulaire. Veuillez vérifier vos saisies et réessayer.");
                }
            } catch (error) {
                console.error("Fetch Error:", error);
                setSubmitError("Une erreur technique est survenue. Veuillez réessayer dans quelques instants.");
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

            {submitError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                        <p className="font-medium">{submitError}</p>
                        <button
                            onClick={() => setSubmitError(null)}
                            className="text-red-500 hover:text-red-700 text-xs mt-1 underline underline-offset-2"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}

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
