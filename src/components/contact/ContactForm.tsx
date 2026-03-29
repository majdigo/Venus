"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface ContactFormResult {
  success: boolean;
  lead_id?: string;
  score?: { value: number; category: string };
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactFormResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: `${formData.get("prenom")} ${formData.get("nom")}`,
      email: formData.get("email"),
      phone: formData.get("telephone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact/v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data);
      } else {
        setError("Erreur de validation. Veuillez vérifier vos informations.");
      }
    } catch {
      setError("Une erreur technique est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-brand-navy mb-2">Message envoyé !</h3>
        <p className="text-muted-foreground">
          Votre demande (réf. {result.lead_id}) a bien été enregistrée.
          <br />
          Un coordinateur vous répondra sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="text-sm font-medium text-foreground mb-1.5 block">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            minLength={2}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="nom" className="text-sm font-medium text-foreground mb-1.5 block">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            minLength={2}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="text-sm font-medium text-foreground mb-1.5 block">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            minLength={8}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
          Votre message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
          placeholder="Décrivez votre demande..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white rounded-xl py-3 font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <ArrowRight className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/politique-confidentialite" className="underline">politique de confidentialité</a>.
      </p>
    </form>
  );
}
