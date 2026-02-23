"use client";

import { FullQuoteData } from "@/lib/validations/quote-schemas";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/navigation-data";

interface StepConfirmationProps {
    data: FullQuoteData;
}

export function StepConfirmation({ data }: StepConfirmationProps) {
    const interventionLabel = data.subIntervention || data.intervention;
    const whatsappText = encodeURIComponent(`Bonjour, je viens de faire une demande de devis pour : ${interventionLabel}.`);

    return (
        <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
            </div>

            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Merci {data.firstName} !
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
                Votre demande de devis a bien été envoyée. Un coordinateur médical analysera votre dossier pour <b>{interventionLabel}</b> et vous contactera sous 24h ouvrées par <b>{data.preferredContact === "whatsapp" ? "WhatsApp" : data.preferredContact === "phone" ? "téléphone" : "email"}</b>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = "/"}
                    className="w-full sm:w-auto text-base"
                >
                    Retour à l&apos;accueil
                </Button>
                <Button
                    size="lg"
                    className="w-full sm:w-auto text-base bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`, "_blank")}
                >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Une question urgente ? WhatsApp
                </Button>
            </div>
        </div>
    );
}
