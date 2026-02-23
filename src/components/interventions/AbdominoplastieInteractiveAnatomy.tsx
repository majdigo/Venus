"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, CheckCircle2 } from "lucide-react";

type AbdoStep = "liposuccion" | "diastasis" | "exerese" | "resultat";

interface StepData {
    id: AbdoStep;
    label: string;
    title: string;
    description: string;
    benefits: string[];
}

const STEPS: StepData[] = [
    {
        id: "liposuccion",
        label: "1. Liposuccion VASER",
        title: "Désépaississement de la paroi",
        description: "L'intervention commence par une liposuccion assistée par ultrasons (VASER) des flancs et de l'abdomen supérieur. Cela permet d'affiner considérablement la taille et de faciliter le décollement de la peau.",
        benefits: [
            "Affinement drastique de la taille (V-Shape)",
            "Décollement cutané plus sûr",
            "Moins de traumatismes (Ultrasons)"
        ]
    },
    {
        id: "diastasis",
        label: "2. Cure de Diastasis",
        title: "Resserrement musculaire",
        description: "Souvent suite à une grossesse, les muscles grands droits de l'abdomen s'écartent (diastasis). Le chirurgien les rapproche et les suture fermement au centre, agissant comme un 'corset' interne.",
        benefits: [
            "Ventre ultra-plat fonctionnel",
            "Soulagement des maux de dos",
            "Effet 'corset' interne définitif"
        ]
    },
    {
        id: "exerese",
        label: "3. Dermolipectomie",
        title: "Retrait de l'excès de peau",
        description: "La peau distendue et abîmée (vergetures, 'tablier') située sous le nombril est complètement retirée. La peau saine supérieure est ensuite redrapée uniformément vers le bas.",
        benefits: [
            "Élimination du ventre 'tablier'",
            "Disparition des vergetures inférieures",
            "Peau retendue et lisse"
        ]
    },
    {
        id: "resultat",
        label: "4. Résultat",
        title: "Nouvelle Silhouette",
        description: "Un nouveau nombril est créé (transposition ombilicale). La cicatrice finale est horizontale, placée très bas (ligne du bikini), et s'estompe avec le temps. La silhouette est radicalement transformée.",
        benefits: [
            "Cicatrice totalement dissimulable",
            "Proportions du corps restaurées",
            "Gain de confiance en soi immédiat"
        ]
    }
];

export function AbdominoplastieInteractiveAnatomy() {
    const [activeStep, setActiveStep] = useState<StepData>(STEPS[0]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-medium text-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                        Technique Chirurgicale 360°
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-brand-navy mb-6"
                    >
                        Les 3 étapes clés de <span className="text-brand-blue">l'Abdominoplastie</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Découvrez techniquement comment nos chirurgiens restaurent une paroi abdominale ferme, lisse et athlétique.
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
                                    <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#fdfbfb" />
                                        <stop offset="100%" stopColor="#ebedee" />
                                    </linearGradient>
                                    <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                                        <line x1="0" y1="0" x2="0" y2="10" stroke="#fca5a5" strokeWidth="2" opacity="0.5" />
                                    </pattern>
                                </defs>

                                {/* Base Torso Outline */}
                                <path
                                    d="M 120 50 C 150 50, 250 50, 280 50 C 310 50, 320 150, 320 200 C 320 300, 340 350, 340 400 C 340 500, 280 550, 250 550 L 150 550 C 120 550, 60 500, 60 400 C 60 350, 80 300, 80 200 C 80 150, 90 50, 120 50 Z"
                                    fill="url(#skin)"
                                    stroke="#e2e8f0"
                                    strokeWidth="3"
                                    className="transition-all duration-700"
                                />

                                {/* Step 1: Liposuccion Highlights (Flanks) */}
                                <AnimatePresence>
                                    {(activeStep.id === "liposuccion" || activeStep.id === "diastasis") && (
                                        <motion.g
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {/* Flanc Gauche */}
                                            <path d="M 60 350 C 60 350, 100 370, 100 420 C 100 480, 60 480, 60 480" fill="none" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" className="animate-pulse opacity-50" />
                                            {/* Flanc Droit */}
                                            <path d="M 340 350 C 340 350, 300 370, 300 420 C 300 480, 340 480, 340 480" fill="none" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" className="animate-pulse opacity-50" />
                                            {/* Canule */}
                                            {activeStep.id === "liposuccion" && (
                                                <motion.line
                                                    x1="20" y1="500" x2="80" y2="420"
                                                    stroke="#64748b" strokeWidth="4" strokeLinecap="round"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                                                />
                                            )}
                                        </motion.g>
                                    )}
                                </AnimatePresence>

                                {/* Step 2: Diastasis (Muscles) */}
                                <motion.g
                                    animate={{
                                        opacity: activeStep.id === "liposuccion" ? 0.3 : 1,
                                    }}
                                >
                                    {/* Muscle Gauche */}
                                    <motion.path
                                        d="M 180 150 C 150 250, 150 400, 180 500"
                                        fill="none" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" opacity="0.2"
                                        animate={{ d: (activeStep.id === "exerese" || activeStep.id === "resultat") ? "M 195 150 C 190 250, 190 400, 195 500" : "M 160 150 C 130 250, 130 400, 160 500" }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    {/* Muscle Droit */}
                                    <motion.path
                                        d="M 220 150 C 250 250, 250 400, 220 500"
                                        fill="none" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" opacity="0.2"
                                        animate={{ d: (activeStep.id === "exerese" || activeStep.id === "resultat") ? "M 205 150 C 210 250, 210 400, 205 500" : "M 240 150 C 270 250, 270 400, 240 500" }}
                                        transition={{ duration: 0.8 }}
                                    />

                                    {/* Rapprochement arrows */}
                                    <AnimatePresence>
                                        {activeStep.id === "diastasis" && (
                                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                                <path d="M 140 300 L 170 300 M 160 290 L 170 300 L 160 310" fill="none" stroke="#1C3F60" strokeWidth="3" />
                                                <path d="M 260 300 L 230 300 M 240 290 L 230 300 L 240 310" fill="none" stroke="#1C3F60" strokeWidth="3" />
                                                {/* Suture Lines */}
                                                <motion.path
                                                    d="M 180 200 L 220 220 M 180 250 L 220 270 M 180 300 L 220 320 M 180 350 L 220 370 M 180 400 L 220 420"
                                                    fill="none" stroke="#1C3F60" strokeWidth="2"
                                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                                                />
                                            </motion.g>
                                        )}
                                    </AnimatePresence>
                                </motion.g>

                                {/* Step 3: Exerese (Skin Removal) */}
                                <AnimatePresence>
                                    {activeStep.id === "exerese" && (
                                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            {/* Zone to remove (Tablier) */}
                                            <path
                                                d="M 120 400 C 150 450, 250 450, 280 400 C 290 450, 270 520, 250 530 C 200 550, 150 530, 130 520 Z"
                                                fill="url(#diagonalHatch)" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"
                                            />
                                            {/* Scissors Icon */}
                                            <text x="260" y="460" fontSize="24" className="animate-bounce">✂️</text>
                                        </motion.g>
                                    )}
                                </AnimatePresence>

                                {/* Step 4: Resultat (Cicatrix & Navel) */}
                                <motion.g
                                    animate={{ opacity: activeStep.id === "resultat" ? 1 : 0 }}
                                >
                                    {/* Nouvelle Cicatrice basse */}
                                    <motion.path
                                        d="M 100 500 C 150 540, 250 540, 300 500"
                                        fill="none" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: activeStep.id === "resultat" ? 1 : 0 }}
                                        transition={{ duration: 1 }}
                                    />
                                </motion.g>

                                {/* Nombril (Navel) */}
                                <motion.circle
                                    cx="200" cy="350" r="8" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2"
                                    animate={{
                                        cy: activeStep.id === "exerese" ? 280 : 350,
                                        opacity: activeStep.id === "liposuccion" ? 0.5 : 1
                                    }}
                                    transition={{ duration: 0.8 }}
                                />
                                {activeStep.id === "resultat" && (
                                    <motion.circle cx="200" cy="350" r="10" fill="none" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2,2" />
                                )}

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
                                    <span className="text-brand-blue font-bold text-sm tracking-wider uppercase mb-2 block">{activeStep.label}</span>
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
                                                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckCircle2 size={14} className="text-brand-blue" />
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
                                                href="/devis?intervention=abdominoplastie"
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
