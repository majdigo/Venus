"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, CheckCircle2 } from "lucide-react";

type BypassStep = "estomac" | "derivation" | "raccordement" | "resultat";

interface StepData {
    id: BypassStep;
    label: string;
    title: string;
    description: string;
    benefits: string[];
}

const STEPS: StepData[] = [
    {
        id: "estomac",
        label: "1. La Poche Gastrique",
        title: "Création d'un mini-estomac",
        description: "Le chirurgien sectionne la partie supérieure de l'estomac pour créer une petite poche (environ 15 à 20 ml). Le reste de l'estomac est préservé mais ne recevra plus d'aliments.",
        benefits: [
            "Satiété immédiate (très petites portions)",
            "Réduction de la ghréline (hormone de la faim)",
            "Chute spectaculaire de l'appétit"
        ]
    },
    {
        id: "derivation",
        label: "2. Dérivation Intestinale",
        title: "Court-circuit du système digestif",
        description: "L'intestin grêle est sectionné plus bas. La partie inférieure (l'anse alimentaire) est remontée pour être raccordée à la nouvelle petite poche gastrique.",
        benefits: [
            "Les aliments évitent le grand estomac",
            "La digestion est accélérée",
            "Intervention réversible si besoin"
        ]
    },
    {
        id: "raccordement",
        label: "3. Le Raccordement (Y-en-Roux)",
        title: "Le fameux raccordement en 'Y'",
        description: "La partie supérieure de l'intestin (qui transporte toujours les sucs gastriques et biliaires) est raccordée plus bas sur l'anse alimentaire. Cela forme un 'Y'.",
        benefits: [
            "Malabsorption partielle des graisses",
            "Digestion saine et contrôlée",
            "Résorption quasi-immédiate du Diabète Type 2"
        ]
    },
    {
        id: "resultat",
        label: "4. Action & Résultat",
        title: "La Solution Ultime Vainquant l'Obésité",
        description: "Le Bypass combine deux effets : une action 'restrictive' (on mange très peu) et une action 'malabsorptive' (le corps absorbe moins de calories). C'est la chirurgie la plus puissante contre l'obésité.",
        benefits: [
            "Perte jusqu'à 70-80% de l'excès de poids",
            "Guérison des apnées du sommeil",
            "Bilan métabolique complètement restauré"
        ]
    }
];

export function BypassGastriqueInteractiveAnatomy() {
    const [activeStep, setActiveStep] = useState<StepData>(STEPS[0]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-medium text-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
                        Technique Roux-en-Y Expliquée
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-brand-navy mb-6"
                    >
                        Comment fonctionne un <span className="text-brand-gold">Bypass</span> ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Découvrez pourquoi le Bypass Gastrique est l'intervention de référence mondiale (Gold Standard) pour vaincre l'obésité sévère.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Interactive SVG Animation Area */}
                    <div className="w-full max-w-md bg-slate-50 rounded-3xl p-8 shadow-inner border border-gray-100 flex flex-col">

                        {/* Step Navigation Tabs */}
                        <div className="flex justify-between mb-8 pb-4 border-b border-gray-200">
                            {STEPS.map((step, idx) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step)}
                                    className={`relative px-2 py-1 flex flex-col items-center gap-2 transition-colors ${activeStep.id === step.id ? 'text-brand-navy' : 'text-gray-400 hover:text-brand-navy/60'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${activeStep.id === step.id ? 'border-brand-navy bg-brand-navy text-white' : 'border-gray-300 bg-white'
                                        }`}>
                                        {idx + 1}
                                    </div>
                                    {activeStep.id === step.id && (
                                        <motion.div
                                            layoutId="activeTabPill"
                                            className="absolute -bottom-[17px] w-full h-1 bg-brand-navy rounded-t-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Visual SVG Container */}
                        <div className="relative aspect-[3/4] w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center">
                            <svg viewBox="0 0 400 600" className="w-full h-full p-4">
                                <defs>
                                    <linearGradient id="stomachColor" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#fca5a5" />
                                        <stop offset="100%" stopColor="#ef4444" />
                                    </linearGradient>
                                    <linearGradient id="intestineColor" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#fde047" />
                                        <stop offset="100%" stopColor="#fbbf24" />
                                    </linearGradient>
                                    <linearGradient id="excludedStomachColor" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#e2e8f0" />
                                        <stop offset="100%" stopColor="#cbd5e1" />
                                    </linearGradient>
                                </defs>

                                {/* Oesophage */}
                                <path d="M 200 50 L 200 120" stroke="#fca5a5" strokeWidth="20" strokeLinecap="round" fill="none" />

                                {/* Estomac d'origine (Background/Excluded shape) */}
                                <motion.path
                                    d="M 200 120 C 250 100, 320 150, 300 250 C 280 350, 200 350, 180 300 C 160 250, 180 150, 200 120"
                                    fill={activeStep.id === "estomac" ? "url(#stomachColor)" : "url(#excludedStomachColor)"}
                                    stroke="#fff" strokeWidth="4"
                                    animate={{ opacity: activeStep.id === "estomac" ? 1 : 0.4 }}
                                    transition={{ duration: 0.8 }}
                                />

                                {/* Poche Gastrique (Mini Stomach) */}
                                <motion.path
                                    d="M 200 120 C 220 110, 230 140, 220 160 C 200 180, 180 150, 200 120"
                                    fill="url(#stomachColor)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeStep.id !== "estomac" ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Ligne de section (Agrafes) */}
                                <motion.path
                                    d="M 180 150 L 240 130"
                                    stroke="#1e293b" strokeWidth="3" strokeDasharray="4,4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeStep.id !== "estomac" ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Intestin Grêle Origine (Duodénum etc) */}
                                <motion.path
                                    d="M 180 300 C 150 350, 120 300, 100 350 C 80 400, 150 450, 150 500"
                                    fill="none" stroke="url(#intestineColor)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"
                                    animate={{
                                        opacity: activeStep.id === "estomac" || activeStep.id === "derivation" ? 1 : 0.3
                                    }}
                                />

                                {/* Intestin Grêle Dérivé (Anse Alimentaire) */}
                                <motion.path
                                    d="M 220 160 C 280 200, 300 300, 200 400 C 150 450, 150 500, 150 500"
                                    fill="none" stroke="url(#intestineColor)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: activeStep.id === "derivation" || activeStep.id === "raccordement" || activeStep.id === "resultat" ? 1 : 0 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />

                                {/* Raccordement en Y (Anse Biliaire sur Anse Alimentaire) */}
                                <motion.path
                                    d="M 100 350 C 120 400, 160 380, 200 400"
                                    fill="none" stroke="#fca5a5" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: activeStep.id === "raccordement" || activeStep.id === "resultat" ? 1 : 0 }}
                                    transition={{ duration: 1, ease: "easeInOut", delay: activeStep.id === "raccordement" ? 0.5 : 0 }}
                                />

                                {/* Arrows indicant le flux alimentaire */}
                                <AnimatePresence>
                                    {(activeStep.id === "derivation" || activeStep.id === "resultat") && (
                                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <motion.circle cx="210" cy="140" r="4" fill="#1e293b"
                                                animate={{ cy: [140, 180, 250, 420], cx: [210, 240, 260, 160] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            />
                                        </motion.g>
                                    )}
                                </AnimatePresence>

                                {/* Annotation Diabète */}
                                <AnimatePresence>
                                    {activeStep.id === "resultat" && (
                                        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                                            <rect x="230" y="250" width="130" height="30" rx="15" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                                            <text x="295" y="270" fontSize="12" fontWeight="bold" fill="#854d0e" textAnchor="middle">Chute Glycémie ✓</text>
                                        </motion.g>
                                    )}
                                </AnimatePresence>

                            </svg>
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="w-full max-w-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group"
                            >
                                <div className="absolute -right-8 -top-8 text-brand-navy/5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                    <Info size={160} strokeWidth={1} />
                                </div>

                                <div className="relative z-10">
                                    <span className="text-brand-gold font-bold text-sm tracking-wider uppercase mb-2 block">{activeStep.label}</span>
                                    <h3 className="text-2xl font-bold text-brand-navy mb-4">
                                        {activeStep.title}
                                    </h3>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {activeStep.description}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-brand-navy flex items-center gap-2">
                                            Bénéfices de cette étape
                                        </h4>
                                        <ul className="space-y-3">
                                            {activeStep.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckCircle2 size={14} className="text-brand-gold" />
                                                    </div>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {activeStep.id === "resultat" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                            className="mt-8 pt-6 border-t border-gray-100"
                                        >
                                            <a
                                                href="/devis?intervention=bypass-gastrique"
                                                className="inline-flex items-center justify-center w-full bg-brand-navy text-white font-medium py-4 px-6 rounded-xl hover:bg-brand-navy/90 transition-colors"
                                            >
                                                Configurer mon intervention
                                            </a>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
