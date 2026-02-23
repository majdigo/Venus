"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema, Step3Data } from "@/lib/validations/quote-schemas";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";
import { useEffect } from "react";

interface StepContactProps {
    onNext: (data: Step3Data) => void;
    onBack: () => void;
    defaultValues: Partial<Step3Data> & { intervention?: string };
}

export function StepContact({ onNext, onBack, defaultValues }: StepContactProps) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, submitCount },
    } = useForm<Step3Data>({
        resolver: zodResolver(step3Schema),
        defaultValues: {
            firstName: defaultValues.firstName || "",
            lastName: defaultValues.lastName || "",
            email: defaultValues.email || "",
            phone: defaultValues.phone || "",
            preferredContact: defaultValues.preferredContact || undefined,
            country: defaultValues.country || undefined,
            consentRGPD: defaultValues.consentRGPD || undefined,
        },
    });

    const pushGtmEvent = useGtmEvent();
    const interventionStr = (defaultValues as Partial<Step3Data> & { intervention?: string }).intervention || "unknown";

    useEffect(() => {
        if (submitCount > 0) {
            Object.entries(errors).forEach(([field, error]) => {
                if (error && error.message) {
                    pushGtmEvent({
                        event: 'funnel_validation_error',
                        field_name: field,
                        error_message: error.message as string,
                        funnel_step: 3,
                        intervention: interventionStr
                    });
                }
            });
        }
    }, [errors, submitCount, pushGtmEvent, interventionStr]);

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
                funnel_step: 3,
                intervention: interventionStr
            });
        }
    };

    const selectedContact = watch("preferredContact");
    const selectedCountry = watch("country");

    const onSubmit = (data: Step3Data) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={handleFocusIn} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-2">Vos coordonnées</h2>
                <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">Où devons-nous vous envoyer votre devis 100% gratuit ?</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Prénom */}
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="font-semibold text-foreground text-sm">Prénom</label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Ex: Sophie"
                            {...register("firstName")}
                            className="w-full p-4 border border-input rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                        />
                        {errors.firstName && <p className="text-destructive text-sm">{errors.firstName.message}</p>}
                    </div>

                    {/* Nom */}
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="font-semibold text-foreground text-sm">Nom</label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Ex: Martin"
                            {...register("lastName")}
                            className="w-full p-4 border border-input rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                        />
                        {errors.lastName && <p className="text-destructive text-sm">{errors.lastName.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-semibold text-foreground text-sm">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Ex: sophie.martin@email.com"
                            {...register("email")}
                            className="w-full p-4 border border-input rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                        />
                        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="font-semibold text-foreground text-sm">Numéro de téléphone</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Ex: +33 6 12 34 56 78"
                            {...register("phone")}
                            className="w-full p-4 border border-input rounded-xl focus:border-secondary focus:ring-0 outline-none transition-colors"
                        />
                        {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* Pays */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="country" className="font-semibold text-foreground text-sm">Pays de résidence</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { id: "FR", label: "France" },
                                { id: "CH", label: "Suisse" },
                                { id: "BE", label: "Belgique" },
                                { id: "TN", label: "Tunisie" },
                                { id: "OTHER", label: "Autre" },
                            ].map((c) => (
                                <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => setValue("country", c.id as any, { shouldValidate: true })}
                                    className={cn(
                                        "py-3 px-2 rounded-lg border text-sm font-medium transition-all duration-200",
                                        selectedCountry === c.id
                                            ? "border-secondary bg-secondary/10 text-primary font-bold"
                                            : "border-border bg-slate-50 text-slate-600 hover:border-slate-300"
                                    )}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                        {errors.country && <p className="text-destructive text-sm mt-1">{errors.country.message}</p>}
                    </div>

                    {/* Contact Préféré */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="font-semibold text-foreground text-sm">Contact de préférence</label>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setValue("preferredContact", "phone", { shouldValidate: true })}
                                className={cn("flex-1 py-3 px-4 rounded-lg border font-medium transition-all duration-200", selectedContact === "phone" ? "border-primary bg-primary text-white" : "bg-slate-50 border-input text-slate-600 hover:border-slate-300")}
                            >Téléphone</button>
                            <button
                                type="button"
                                onClick={() => setValue("preferredContact", "whatsapp", { shouldValidate: true })}
                                className={cn("flex-1 py-3 px-4 rounded-lg border font-medium transition-all duration-200", selectedContact === "whatsapp" ? "border-green-600 bg-green-600 text-white" : "bg-slate-50 border-input text-slate-600 hover:border-slate-300")}
                            >WhatsApp</button>
                        </div>
                        {errors.preferredContact && <p className="text-destructive text-sm mt-1">{errors.preferredContact.message}</p>}
                    </div>
                </div>

                {/* Consentements */}
                <div className="space-y-4 mt-8 bg-slate-50 p-6 rounded-xl border border-border">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            {...register("consentRGPD")}
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary/50"
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                            J&apos;accepte que mes données soient traitées par Venus Estetika pour la préparation de mon devis. <a href="/politique-confidentialite/" className="underline">Politique de confidentialité</a>. *
                        </span>
                    </label>
                    {errors.consentRGPD && <p className="text-destructive text-sm">{errors.consentRGPD.message}</p>}
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
                    className="w-full sm:w-auto min-w-[250px] h-14 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 font-bold"
                >
                    Recevoir mon devis gratuit <Send className="ml-2 w-5 h-5" />
                </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4 opacity-70">
                Gratuit • Sans engagement • Réponse sous 24h
            </p>
        </form>
    );
}
