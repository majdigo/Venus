"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="max-w-md text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                <h1 className="text-2xl font-heading font-bold text-brand-navy mb-3">
                    Une erreur est survenue
                </h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Nous sommes désolés, quelque chose ne s'est pas passé comme
                    prévu. Veuillez réessayer ou revenir à la page d'accueil.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                        onClick={reset}
                        variant="outline"
                        className="gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Réessayer
                    </Button>
                    <Button asChild className="bg-brand-navy hover:bg-brand-navy/90 text-white gap-2">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4" />
                            Retour à l'accueil
                        </Link>
                    </Button>
                </div>

                <p className="text-xs text-gray-400 mt-8">
                    Si le problème persiste, contactez-nous au{" "}
                    <a
                        href="https://wa.me/21650606780"
                        className="text-brand-blue hover:underline"
                    >
                        +216 50 606 780
                    </a>
                </p>
            </div>
        </div>
    );
}
