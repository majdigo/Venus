"use client";

/**
 * ContactForm — client component for the /contact page.
 *
 * Features:
 * - React Hook Form + Zod validation (contactFormSchema)
 * - Submits to POST /api/contact
 * - Inline field-level error messages
 * - Success banner (green) after submission
 * - API error banner (red) on failure
 * - Loading state on the submit button
 * - GTM event `contact_form_submit` on successful submission
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactFormSchema, ContactFormData } from "@/lib/validations/quote-schemas";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";

// ---------------------------------------------------------------------------
// Constant option lists
// ---------------------------------------------------------------------------

const PAYS_OPTIONS: { value: ContactFormData["pays"]; label: string }[] = [
    { value: "FR", label: "France" },
    { value: "BE", label: "Belgique" },
    { value: "CH", label: "Suisse" },
    { value: "CA", label: "Canada" },
    { value: "OTHER", label: "Autre" },
];

const SUJET_OPTIONS: { value: ContactFormData["sujet"]; label: string }[] = [
    { value: "devis", label: "Devis" },
    { value: "information", label: "Information" },
    { value: "reclamation", label: "Réclamation" },
    { value: "autre", label: "Autre" },
];

// ---------------------------------------------------------------------------
// Shared input / select class builders
// ---------------------------------------------------------------------------

/** Returns Tailwind classes for a text input or textarea, with error-state ring. */
function inputCn(hasError: boolean) {
    return cn(
        "w-full px-4 py-3 rounded-xl border bg-white text-gray-900",
        "placeholder:text-gray-400 transition-colors duration-200",
        "focus:outline-none focus:ring-2",
        hasError
            ? "border-red-400 focus:ring-red-300/50 focus:border-red-400"
            : "border-gray-200 focus:ring-brand-blue/40 focus:border-brand-blue"
    );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ContactForm() {
    const pushGtmEvent = useGtmEvent();

    const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [apiErrorMessage, setApiErrorMessage] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            prenom: "",
            nom: "",
            email: "",
            telephone: "",
        },
    });

    // -------------------------------------------------------------------------
    // Submit handler
    // -------------------------------------------------------------------------

    const onSubmit = async (data: ContactFormData) => {
        setSubmitStatus("loading");
        setApiErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json: { success: boolean; message?: string } = await response.json();

            if (!response.ok || !json.success) {
                throw new Error(
                    json.message ?? "Une erreur est survenue. Veuillez réessayer."
                );
            }

            // Fire GTM conversion event
            pushGtmEvent({
                event: "contact_form_submit",
                form_sujet: data.sujet,
                form_pays: data.pays,
            });

            setSubmitStatus("success");
            reset();
        } catch (err: unknown) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Erreur inattendue. Veuillez réessayer.";
            setApiErrorMessage(message);
            setSubmitStatus("error");
        }
    };

    // -------------------------------------------------------------------------
    // Success state — replace the form entirely
    // -------------------------------------------------------------------------

    if (submitStatus === "success") {
        return (
            <div
                role="status"
                aria-live="polite"
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 flex flex-col items-center text-center gap-6"
            >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
                </div>
                <div>
                    <h2 className="text-2xl font-heading font-bold text-brand-navy mb-2">
                        Message envoyé avec succès !
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                        Merci pour votre message. Notre équipe vous contactera sous{" "}
                        <span className="font-semibold text-brand-navy">24h</span> pour vous
                        apporter une réponse personnalisée.
                    </p>
                </div>
                <Button
                    type="button"
                    onClick={() => setSubmitStatus("idle")}
                    className="bg-brand-blue text-white hover:bg-brand-blue/90 rounded-xl px-8 h-12 font-semibold"
                >
                    Envoyer un autre message
                </Button>
            </div>
        );
    }

    // -------------------------------------------------------------------------
    // Form state
    // -------------------------------------------------------------------------

    const isLoading = submitStatus === "loading";

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
            {/* Form header */}
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-2">
                    Envoyez-nous un message
                </h2>
                <p className="text-gray-500 leading-relaxed">
                    Décrivez votre projet et recevez une réponse personnalisée sous 24h.
                </p>
            </div>

            {/* API-level error banner */}
            {submitStatus === "error" && apiErrorMessage && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 mb-6"
                >
                    <AlertCircle
                        className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                        aria-hidden="true"
                    />
                    <p className="text-sm text-red-700 leading-relaxed">{apiErrorMessage}</p>
                </div>
            )}

            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Formulaire de contact Venus Estetika"
                className="space-y-5"
            >
                {/* Row 1 — Prénom + Nom */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Prénom */}
                    <div>
                        <label
                            htmlFor="prenom"
                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                            Prénom <span className="text-brand-blue" aria-hidden="true">*</span>
                        </label>
                        <input
                            id="prenom"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Jean"
                            aria-required="true"
                            aria-describedby={errors.prenom ? "prenom-error" : undefined}
                            aria-invalid={!!errors.prenom}
                            {...register("prenom")}
                            className={inputCn(!!errors.prenom)}
                        />
                        {errors.prenom && (
                            <p id="prenom-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                {errors.prenom.message}
                            </p>
                        )}
                    </div>

                    {/* Nom */}
                    <div>
                        <label
                            htmlFor="nom"
                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                            Nom <span className="text-brand-blue" aria-hidden="true">*</span>
                        </label>
                        <input
                            id="nom"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Dupont"
                            aria-required="true"
                            aria-describedby={errors.nom ? "nom-error" : undefined}
                            aria-invalid={!!errors.nom}
                            {...register("nom")}
                            className={inputCn(!!errors.nom)}
                        />
                        {errors.nom && (
                            <p id="nom-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                {errors.nom.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 2 — Email + Téléphone */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                            Email <span className="text-brand-blue" aria-hidden="true">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="jean.dupont@email.com"
                            aria-required="true"
                            aria-describedby={errors.email ? "email-error" : undefined}
                            aria-invalid={!!errors.email}
                            {...register("email")}
                            className={inputCn(!!errors.email)}
                        />
                        {errors.email && (
                            <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Téléphone */}
                    <div>
                        <label
                            htmlFor="telephone"
                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                            Téléphone <span className="text-brand-blue" aria-hidden="true">*</span>
                        </label>
                        <input
                            id="telephone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+33 6 12 34 56 78"
                            aria-required="true"
                            aria-describedby={errors.telephone ? "telephone-error" : undefined}
                            aria-invalid={!!errors.telephone}
                            {...register("telephone")}
                            className={inputCn(!!errors.telephone)}
                        />
                        {errors.telephone && (
                            <p
                                id="telephone-error"
                                role="alert"
                                className="mt-1.5 text-sm text-red-600"
                            >
                                {errors.telephone.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 3 — Pays + Sujet */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Pays */}
                    <div>
                        <label
                            htmlFor="pays"
                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                            Pays <span className="text-brand-blue" aria-hidden="true">*</span>
                        </label>
                        <select
                            id="pays"
                            aria-required="true"
                            aria-describedby={errors.pays ? "pays-error" : undefined}
                            aria-invalid={!!errors.pays}
                            {...register("pays")}
                            defaultValue=""
                            className={cn(inputCn(!!errors.pays), "cursor-pointer")}
                        >
                            <option value="" disabled>
                                Sélectionnez votre pays
                            </option>
                            {PAYS_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        {errors.pays && (
                            <p id="pays-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                {errors.pays.message}
                            </p>
                        )}
                    </div>

                    {/* Sujet */}
                    <div>
                        <label
                            htmlFor="sujet"
                            className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                            Sujet <span className="text-brand-blue" aria-hidden="true">*</span>
                        </label>
                        <select
                            id="sujet"
                            aria-required="true"
                            aria-describedby={errors.sujet ? "sujet-error" : undefined}
                            aria-invalid={!!errors.sujet}
                            {...register("sujet")}
                            defaultValue=""
                            className={cn(inputCn(!!errors.sujet), "cursor-pointer")}
                        >
                            <option value="" disabled>
                                Sélectionnez un sujet
                            </option>
                            {SUJET_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        {errors.sujet && (
                            <p id="sujet-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                {errors.sujet.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 4 — Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                        Message <span className="text-brand-blue" aria-hidden="true">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Décrivez votre projet, vos questions ou les interventions qui vous intéressent…"
                        aria-required="true"
                        aria-describedby={errors.message ? "message-error" : "message-hint"}
                        aria-invalid={!!errors.message}
                        {...register("message")}
                        className={cn(inputCn(!!errors.message), "resize-none")}
                    />
                    {errors.message ? (
                        <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-600">
                            {errors.message.message}
                        </p>
                    ) : (
                        <p id="message-hint" className="mt-1.5 text-xs text-gray-400">
                            Minimum 20 caractères.
                        </p>
                    )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        aria-busy={isLoading}
                        className="w-full bg-brand-blue text-white hover:bg-brand-blue/90 text-base font-semibold h-14 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all duration-300 disabled:opacity-70"
                    >
                        {isLoading ? (
                            <>
                                <Loader2
                                    className="mr-2 w-5 h-5 animate-spin"
                                    aria-hidden="true"
                                />
                                Envoi en cours…
                            </>
                        ) : (
                            <>
                                Envoyer mon message
                                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                            </>
                        )}
                    </Button>

                    <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                        Nous respectons votre vie privée.{" "}
                        <Link
                            href="/politique-confidentialite/"
                            className="underline underline-offset-2 hover:text-gray-600 transition-colors"
                        >
                            Voir notre politique de confidentialité.
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
