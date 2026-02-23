"use client";

import { CheckCircle2, X } from "lucide-react";
import { TrackedLink } from "@/components/tracking/TrackedLink";

interface PriceRow {
    label: string;
    priceFrance: string;
    priceVenus: string;
}

interface PriceComparisonTableProps {
    intervention: string;
    rows: PriceRow[];
    devisSlug?: string;
    savingsPercent?: string;
    venusIncludes?: string[];
}

export function PriceComparisonTable({
    intervention,
    rows,
    devisSlug,
    savingsPercent = "60%",
    venusIncludes,
}: PriceComparisonTableProps) {
    const defaultIncludes = [
        "Chirurgie + anesthésie",
        "Hôtel 5 étoiles (5-7 nuits)",
        "Transferts VIP",
        "Suivi post-op 12 mois",
        "Vêtement de contention",
    ];

    const includes = venusIncludes || defaultIncludes;

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-3">
                        Comparez les prix : France vs Tunisie
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Économisez jusqu'à {savingsPercent} sur votre{" "}
                        {intervention.toLowerCase()} avec Venus Estetika, qualité
                        identique.
                    </p>
                </div>

                {/* Comparison table */}
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-slate-50 border-b border-gray-200">
                        <div className="px-6 py-4 text-sm font-semibold text-gray-500">
                            Prestation
                        </div>
                        <div className="px-6 py-4 text-center">
                            <span className="text-sm font-semibold text-gray-500">
                                France
                            </span>
                        </div>
                        <div className="px-6 py-4 text-center bg-brand-blue/5 border-l border-brand-blue/10">
                            <span className="text-sm font-bold text-brand-navy">
                                Venus Estetika
                            </span>
                            <span className="ml-2 text-xs bg-brand-blue text-white px-2 py-0.5 rounded-full font-semibold">
                                -{savingsPercent}
                            </span>
                        </div>
                    </div>

                    {/* Rows */}
                    {rows.map((row, i) => (
                        <div
                            key={row.label}
                            className={`grid grid-cols-3 ${
                                i < rows.length - 1
                                    ? "border-b border-gray-100"
                                    : ""
                            }`}
                        >
                            <div className="px-6 py-4 text-sm font-medium text-gray-700">
                                {row.label}
                            </div>
                            <div className="px-6 py-4 text-center text-sm text-gray-400 line-through">
                                {row.priceFrance}
                            </div>
                            <div className="px-6 py-4 text-center bg-brand-blue/5 border-l border-brand-blue/10">
                                <span className="text-sm font-bold text-brand-navy">
                                    {row.priceVenus}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* What's included */}
                <div className="mt-8 bg-brand-navy/5 rounded-2xl p-6">
                    <p className="text-sm font-bold text-brand-navy mb-4">
                        Le forfait Venus Estetika inclut :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {includes.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-2 text-sm text-gray-700"
                            >
                                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-3">
                        <X className="w-4 h-4 flex-shrink-0" />
                        En France : chirurgie seule, hôtel et transferts non
                        inclus
                    </div>
                </div>

                {/* CTA */}
                {devisSlug && (
                    <div className="text-center mt-8">
                        <TrackedLink
                            href={`/devis?intervention=${devisSlug}`}
                            ctaText="Obtenir mon devis personnalisé"
                            ctaType="primary"
                            ctaLocation="price_comparison"
                            className="inline-flex items-center gap-2 bg-brand-blue text-white hover:bg-brand-blue/90 font-bold px-8 py-3.5 rounded-full shadow-lg transition-colors text-sm"
                        >
                            Obtenir mon devis personnalisé
                        </TrackedLink>
                    </div>
                )}
            </div>
        </section>
    );
}
