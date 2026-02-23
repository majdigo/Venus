"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Sparkles, CheckCircle2 } from "lucide-react";

type FacetteStep = "preparation" | "design" | "scellement" | "resultat";

interface StepData {
    id: FacetteStep;
    label: string;
    title: string;
    description: string;
    benefits: string[];
}

const STEPS: StepData[] = [
    {
        id: "preparation",
        label: "1. La Préparation",
        title: "Surfaçage minimalement invasif",
        description: "Sous anesthésie locale, le chirurgien-dentiste procède à un léger limage de la face avant de la dent (entre 0.2 et 0.5 mm maximum). Cette étape est indolore et permet de créer l'espace nécessaire pour la future facette.",
        benefits: [
            "Préservation maximale de l'émail naturel",
            "Intervention indolore sous anesthésie",
            "Création de la base d'adhérence idéale"
        ]
    },
    {
        id: "design",
        label: "2. Empreinte & Design 3D",
        title: "Le Smile Design Numérique",
        description: "Une empreinte optique ultra-précise (scanner 3D) est réalisée. Le prothésiste conçoit ensuite virtuellement votre futur sourire en harmonie parfaite avec la forme de votre visage.",
        benefits: [
            "Modélisation numérique au dixième de millimètre",
            "Choix précis de la teinte (du naturel à l'ultra-blanc)",
            "Visualisation du résultat en amont"
        ]
    },
    {
        id: "scellement",
        label: "3. Le Scellement",
        title: "La pose au ciment biomimétique",
        description: "Chaque facette E-max ou Lumineers est essayée pour validation esthétique, puis collée définitivement de manière individuelle. Le collage est extrêmement puissant, fusionnant la céramique avec votre dent.",
        benefits: [
            "Collage définitif et ultra-résistant",
            "Aucune gêne d'élocution ou de mastication",
            "Rendu translucide identique à l'émail"
        ]
    },
    {
        id: "resultat",
        label: "4. Le Hollywood Smile",
        title: "Un sourire parfait, pour la vie",
        description: "Vos nouvelles dents sont parfaitement alignées, éclatantes et naturelles. Les facettes E-max résistent aux taches (café, thé, tabac) et offrent une durée de vie moyenne de 15 à 20 ans.",
        benefits: [
            "Alignement et blancheur irréprochables",
            "Biocompatibilité totale avec la gencive",
            "Brillance inaltérable dans le temps"
        ]
    }
];

export function FacettesInteractiveAnatomy() {
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Technologie DSD (Digital Smile Design)
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-brand-navy mb-6"
                    >
                        Comment se pose une <span className="text-brand-blue">Facette</span> ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Un protocole minimalement invasif en 3 étapes pour un résultat esthétique permanent.
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
                                            layoutId="activeFacetteTab"
                                            className="absolute -bottom-[17px] w-full h-1 bg-brand-navy rounded-t-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Visual SVG Container */}
                        <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-8">
                            {/* Sparkles effect in background for final result */}
                            <AnimatePresence>
                                {activeStep.id === "resultat" && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="absolute inset-0 pointer-events-none"
                                    >
                                        <div className="absolute top-[20%] right-[20%] text-brand-blue animate-bounce"><Sparkles size={24} /></div>
                                        <div className="absolute bottom-[30%] left-[15%] text-brand-blue/60 animate-pulse"><Sparkles size={16} /></div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-xl overflow-visible">
                                <defs>
                                    <linearGradient id="toothNatural" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f8fafc" />
                                        <stop offset="100%" stopColor="#e2e8f0" />
                                    </linearGradient>
                                    <linearGradient id="toothPrepared" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f1f5f9" />
                                        <stop offset="100%" stopColor="#cbd5e1" />
                                    </linearGradient>
                                    <linearGradient id="veneerEmax" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#f8fafc" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="4" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Base Gums */}
                                <path d="M 40 40 Q 100 120 160 40" fill="#fca5a5" stroke="#f87171" strokeWidth="2" />

                                {/* 
                                   Tooth Logic:
                                   - In Preparation: Reduced size tooth.
                                   - In Design: 3D grid hovering over prepared tooth.
                                   - In Scellement: Veneer animating into place.
                                   - In Resultat: Perfectly brilliant veneer connected.
                                */}

                                {/* Underlying Prepared/Natural Tooth */}
                                <motion.path
                                    d={activeStep.id === "preparation" ?
                                        // Slightly reduced and flattened
                                        "M 65 75 C 65 140, 75 220, 100 230 C 125 220, 135 140, 135 75 Z" :
                                        // Originally shaped slightly misaligned tooth (if we were to show before state, but we start at preparation)
                                        "M 65 75 C 65 140, 75 220, 100 230 C 125 220, 135 140, 135 75 Z"}
                                    fill="url(#toothPrepared)"
                                    stroke="#94a3b8" strokeWidth="1"
                                    animate={{
                                        // Slight shaking/drilling effect during preparation
                                        x: activeStep.id === "preparation" ? [0, -1, 1, -1, 1, 0] : 0
                                    }}
                                    transition={{
                                        duration: activeStep.id === "preparation" ? 0.3 : 0,
                                        repeat: activeStep.id === "preparation" ? Infinity : 0
                                    }}
                                />

                                {/* Milling Tool / Drill for Preparation */}
                                <AnimatePresence>
                                    {activeStep.id === "preparation" && (
                                        <motion.g
                                            initial={{ opacity: 0, x: 50, y: -50 }}
                                            animate={{ opacity: 1, x: [-20, 0, -20, 0], y: [-20, 20, 40, -20] }}
                                            exit={{ opacity: 0, x: 50, y: -50 }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        >
                                            <rect x="130" y="80" width="10" height="60" fill="#94a3b8" rx="5" transform="rotate(-45 130 80)" />
                                            <rect x="127" y="140" width="16" height="30" fill="#cbd5e1" transform="rotate(-45 130 80)" />
                                            <circle cx="95" cy="180" r="4" fill="#cbd5e1" />
                                            <circle cx="105" cy="170" r="2" fill="#cbd5e1" />
                                        </motion.g>
                                    )}
                                </AnimatePresence>

                                {/* 3D Laser Grid for Design Phase */}
                                <AnimatePresence>
                                    {activeStep.id === "design" && (
                                        <motion.g
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {/* Scanning Laser Line */}
                                            <motion.line
                                                x1="50" x2="150"
                                                stroke="#3b82f6" strokeWidth="2" filter="url(#glow)"
                                                animate={{ y1: [80, 230, 80], y2: [80, 230, 80] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            />
                                            {/* 3D Wireframe Overlay representing the digital design of the new veneer */}
                                            <path d="M 60 75 C 60 150, 70 240, 100 250 C 130 240, 140 150, 140 75 Z" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
                                            <path d="M 80 75 L 80 240" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,2" />
                                            <path d="M 120 75 L 120 240" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,2" />
                                            <path d="M 65 130 L 135 130" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,2" />
                                            <path d="M 70 180 L 130 180" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,2" />
                                        </motion.g>
                                    )}
                                </AnimatePresence>

                                {/* The E-max Veneer (Facette) */}
                                <motion.path
                                    d="M 60 75 C 60 150, 70 240, 100 250 C 130 240, 140 150, 140 75 Z"
                                    fill="url(#veneerEmax)"
                                    stroke="#e2e8f0" strokeWidth="2"
                                    initial={{ opacity: 0, x: 100, scale: 1.1 }}
                                    animate={{
                                        opacity: (activeStep.id === "scellement" || activeStep.id === "resultat") ? 1 : 0,
                                        x: activeStep.id === "resultat" ? 0 : (activeStep.id === "scellement" ? [100, 0] : 100),
                                        y: activeStep.id === "resultat" ? 0 : 0,
                                        scale: activeStep.id === "resultat" ? 1 : (activeStep.id === "scellement" ? [1.1, 1] : 1.1),
                                        filter: activeStep.id === "resultat" ? "url(#glow)" : "none"
                                    }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                />

                                {/* Cement / Bonding agent during Scellement */}
                                <AnimatePresence>
                                    {activeStep.id === "scellement" && (
                                        <motion.path
                                            d="M 90 100 C 80 150, 80 200, 100 220"
                                            stroke="#34d399" strokeWidth="4" strokeLinecap="round" fill="none"
                                            initial={{ pathLength: 0, opacity: 1 }}
                                            animate={{ pathLength: 1, opacity: [1, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        />
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
                                <div className="absolute -right-8 -top-8 text-brand-blue/5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
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
                                            Points Clés
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

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
