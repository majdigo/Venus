import { QuoteFunnel } from "@/components/devis/QuoteFunnel";
import { headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Devis Gratuit - Venus Estetika",
    description: "Obtenez un devis personnalisé, gratuit et transparent pour votre chirurgie esthétique ou bariatrique en Tunisie.",
};

export default async function DevisPage({
    searchParams,
}: {
    searchParams: Promise<{ intervention?: string; bmi?: string; norwood?: string }>;
}) {
    const resolvedParams = await searchParams;

    // A/B Testing: Read the variant automatically assigned by our Edge Middleware
    const headersList = await headers();
    const abVariant = headersList.get('x-ab-variant') || 'control-A';

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-serif text-brand-navy mb-4">
                        {abVariant === 'variant-B'
                            ? "Obtenez votre Diagnostic Médical Gratuit"
                            : "Demandez votre Devis Personnalisé"}
                    </h1>
                    <p className="text-slate-600 text-lg">
                        {abVariant === 'variant-B'
                            ? "Répondez à ces 3 questions pour recevoir un diagnostic préliminaire de nos chirurgiens ainsi qu'une estimation tarifaire."
                            : "Remplissez ce formulaire en 2 minutes. Nos coordinateurs médicaux vous répondront sous 24h avec une estimation précise."}
                    </p>
                </div>

                <QuoteFunnel
                    initialIntervention={resolvedParams.intervention}
                    initialBmi={resolvedParams.bmi}
                    initialNorwood={resolvedParams.norwood}
                />
            </div>
        </div>
    );
}
