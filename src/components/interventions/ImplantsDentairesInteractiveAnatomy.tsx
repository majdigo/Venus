"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Activity, Shield, Sparkles } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "La Racine en Titane",
        subtitle: "Étape 1 : Ostéo-intégration",
        description: "Un cylindre en titane pur (Straumann ou Nobel) est vissé dans l'os maxillaire. Le titane est totalement bio-compatible, permettant à l'os de fusionner avec lui en 3 à 6 mois.",
        icon: Shield,
        benefits: ["Zéro rejet allergique", "Stabilité absolue à vie", "Préserve l'os de la mâchoire"]
    },
    {
        id: 2,
        title: "Le Pilier (Abutment)",
        subtitle: "Étape 2 : Le Lien Prothétique",
        description: "Une fois l'implant solidement ancré dans l'os, le chirurgien-dentiste visse un pilier de jonction en titane ou zircone. C'est le trait d'union entre la racine artificielle et la future dent visible.",
        icon: Activity,
        benefits: ["Adaptation sur-mesure", "Émergence gingivale naturelle", "Supporte des forces masticatoires énormes"]
    },
    {
        id: 3,
        title: "La Couronne en Zircone",
        subtitle: "Étape 3 : Le Sourire Final",
        description: "La dent définitive (couronne) en céramique ou zircone est cimentée ou vissée sur le pilier. Elle est façonnée en laboratoire 3D pour s'harmoniser parfaitement avec vos autres dents en forme et en teinte.",
        icon: Sparkles,
        benefits: ["Translucidité identique à l'émail", "Ultra-résistante", "Aucun liseré métallique"]
    }
];

export function ImplantsDentairesInteractiveAnatomy() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Technologie 3D</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
                        Anatomie d'un Implant Dentaire
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Découvrez comment nos chirurgiens-dentistes reconstruisent une dent parfaite et durable à partir de zéro.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* INTERACTIVE SVG AREA */}
                    <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-slate-50 rounded-[3rem] p-8 shadow-inner border border-slate-100 flex items-center justify-center">
                        <svg viewBox="0 0 400 600" className="w-full h-full p-4 z-10 drop-shadow-2xl">
                            {/* BASE : MACHOIRE & GENCIVE (Always visible) */}
                            <motion.path
                                d="M 50,450 Q 200,480 350,450 C 370,450 380,480 380,520 L 380,600 L 20,600 L 20,520 C 20,480 30,450 50,450 Z"
                                fill="#ffe4e1"
                                className="drop-shadow-sm"
                            />
                            {/* Os Alvéolaire (Bone) */}
                            <motion.path
                                d="M 50,500 Q 200,520 350,500 L 350,600 L 50,600 Z"
                                fill="#f5f5dc"
                            />
                            {/* Ligne des dents adjacentes (fantomatiques) */}
                            <path d="M 20,450 C 50,250 100,250 120,460" fill="#ffffff" opacity="0.3" stroke="#e2e8f0" strokeWidth="2" />
                            <path d="M 280,460 C 300,250 350,250 380,450" fill="#ffffff" opacity="0.3" stroke="#e2e8f0" strokeWidth="2" />

                            <AnimatePresence mode="wait">
                                {/* STEP 1: FIXTURE TITANE (Root) */}
                                {activeStep >= 1 && (
                                    <motion.g
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    >
                                        {/* Titane Screw */}
                                        <rect x="175" y="470" width="50" height="110" rx="10" fill="#94a3b8" />
                                        {/* Threads (Filetages) */}
                                        <line x1="170" y1="490" x2="230" y2="495" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                                        <line x1="170" y1="510" x2="230" y2="515" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                                        <line x1="170" y1="530" x2="230" y2="535" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                                        <line x1="170" y1="550" x2="230" y2="555" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
                                    </motion.g>
                                )}

                                {/* STEP 2: ABUTMENT (Pilier) */}
                                {activeStep >= 2 && (
                                    <motion.g
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                                    >
                                        {/* Pilier base */}
                                        <path d="M 185,470 L 185,420 L 215,420 L 215,470 Z" fill="#cbd5e1" />
                                        {/* Vis interne (Internal screw hint) */}
                                        <line x1="200" y1="420" x2="200" y2="520" stroke="#f1f5f9" strokeWidth="4" strokeDasharray="4 4" />
                                    </motion.g>
                                )}

                                {/* STEP 3: COURONNE (Crown) */}
                                {activeStep === 3 && (
                                    <motion.g
                                        initial={{ y: -150, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
                                    >
                                        {/* Couronne Blanche */}
                                        <path d="M 160,430 C 150,220 250,220 240,430 C 240,450 220,460 200,460 C 180,460 160,450 160,430 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="3" className="drop-shadow-md" />
                                        {/* Reflets brillants */}
                                        <path d="M 175,300 Q 185,250 200,260" fill="transparent" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" />
                                        <path d="M 220,380 L 225,400" fill="transparent" stroke="#f8fafc" strokeWidth="6" strokeLinecap="round" />
                                    </motion.g>
                                )}
                            </AnimatePresence>
                        </svg>

                        {/* Interactive Nodes */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20">
                            {[1, 2, 3].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setActiveStep(num)}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all shadow-lg ${activeStep === num
                                            ? 'bg-brand-blue text-white scale-110 ring-4 ring-brand-blue/20'
                                            : activeStep > num
                                                ? 'bg-brand-navy text-white'
                                                : 'bg-white text-gray-400 border-2 border-gray-100 hover:border-brand-blue hover:text-brand-blue'
                                        }`}
                                >
                                    {activeStep > num ? <CheckCircle2 className="w-6 h-6" /> : num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* TEXT & CONTROLS */}
                    <div className="flex flex-col gap-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                                        {React.createElement(steps[activeStep - 1].icon, { className: "w-7 h-7 text-brand-blue" })}
                                    </div>
                                    <div>
                                        <div className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-1">{steps[activeStep - 1].subtitle}</div>
                                        <h3 className="text-2xl font-bold text-brand-navy">{steps[activeStep - 1].title}</h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {steps[activeStep - 1].description}
                                </p>

                                <div className="grid gap-3">
                                    {steps[activeStep - 1].benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-brand-navy" />
                                            </div>
                                            <span className="text-gray-800 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Buttons */}
                        <div className="flex gap-4 mt-4">
                            {activeStep > 1 && (
                                <button
                                    onClick={() => setActiveStep(prev => prev - 1)}
                                    className="px-6 py-4 rounded-xl border-2 border-gray-100 font-bold text-gray-500 hover:border-gray-200 hover:text-gray-700 transition flex items-center gap-2"
                                >
                                    <ChevronRight className="w-5 h-5 rotate-180" /> Précédent
                                </button>
                            )}
                            {activeStep < 3 ? (
                                <button
                                    onClick={() => setActiveStep(prev => prev + 1)}
                                    className="px-6 py-4 rounded-xl bg-brand-navy font-bold text-white hover:bg-brand-navy/90 transition flex items-center gap-2 flex-1 justify-center shadow-lg shadow-brand-navy/20"
                                >
                                    Étape suivante <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setActiveStep(1)}
                                    className="px-6 py-4 rounded-xl bg-gray-100 font-bold text-gray-500 hover:bg-gray-200 transition flex items-center gap-2 flex-1 justify-center"
                                >
                                    Revoir l'animation
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
