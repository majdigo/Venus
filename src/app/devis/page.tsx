import { QuoteFunnel } from "@/components/devis/QuoteFunnel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Devis Gratuit - Venus Estetika",
    description: "Obtenez un devis personnalisé, gratuit et transparent pour votre chirurgie esthétique ou bariatrique en Tunisie.",
};

export default async function DevisPage({
    searchParams,
}: {
    searchParams: Promise<{ intervention?: string; bmi?: string }>;
}) {
    const resolvedParams = await searchParams;

    return (
        <main className="min-h-screen bg-slate-50 py-24 md:py-32 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                        Votre Devis Personnalisé
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Remplissez ce formulaire rapide pour recevoir une estimation précise. Nos coordinateurs médicaux vous répondront sous 24h ouvrées.
                    </p>
                </div>

                <QuoteFunnel initialIntervention={resolvedParams.intervention} />
            </div>
        </main>
    );
}
