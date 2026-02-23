"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, ArrowRightLeft, Sparkles, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";

type SurgeryStep = 1 | 2 | 3;

interface StepData {
    id: SurgeryStep;
    title: string;
    description: string;
    icon: React.ElementType;
    duration: string;
    focus: string;
}

const STEPS: Record<SurgeryStep, StepData> = {
    1: {
        id: 1,
        title: "Étape 1 : Récolte (Liposuccion 360°)",
        description: "Extraction douce de votre propre graisse (flancs, ventre, dos) via la technologie VASER. Cette étape sculpte votre taille de guêpe pour maximiser la projection fessière.",
        icon: Droplet,
        duration: "1h30",
        focus: "Taille affinée (V-Shape)"
    },
    2: {
        id: 2,
        title: "Étape 2 : Purification & Tri",
        description: "La graisse récoltée est purifiée en circuit fermé fermé (PureGraft) pour isoler les cellules souches et les adipocytes les plus sains, garantissant une prise maximale (taux de survie > 80%).",
        icon: Sparkles,
        duration: "30 min",
        focus: "Qualité de la greffe"
    },
    3: {
        id: 3,
        title: "Étape 3 : Lipofilling & Sculpting",
        description: "Réinjection millimétrique de la graisse purifiée dans les quadrants externes et supérieurs des fesses. Création d'un volume naturel, harmonieux et sans prothèses.",
        icon: ArrowRightLeft,
        duration: "1h00",
        focus: "Volume et Projection"
    }
};

export function BBLInteractiveAnatomy() {
    const [activeStep, setActiveStep] = useState<SurgeryStep>(1);
    const data = STEPS[activeStep];
    const pushGtmEvent = useGtmEvent();
    const sectionRef = useRef<HTMLElement>(null);
    const hasTrackedView = useRef(false);

    // Track View
    useEffect(() => {
        const el = sectionRef.current;
        if (!el || hasTrackedView.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasTrackedView.current) {
                hasTrackedView.current = true;
                pushGtmEvent({ event: 'bbl_anatomy_view' });
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [pushGtmEvent]);

    const handleStepChange = (step: SurgeryStep) => {
        setActiveStep(step);
        pushGtmEvent({
            event: 'bbl_anatomy_interaction',
            surgery_step: step,
            step_name: STEPS[step].title
        });
    };

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-semibold text-sm mb-6 border border-brand-navy/10"
                    >
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        Approche Sur-Mesure & Naturelle
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
                        La Mécanique du <span className="text-brand-blue">Brazilian Butt Lift</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprenez comment nos chirurgiens utilisent votre propre graisse pour sculpter une silhouette en sablier parfaite ("Hourglass Figure") de manière 100% naturelle et définitive.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Interactive SVG Animation Area */}
                    <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto bg-slate-50 rounded-[3rem] p-8 border border-slate-100 shadow-xl overflow-hidden flex items-center justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <svg viewBox="0 0 400 600" className="w-full h-full p-4 z-10 drop-shadow-lg">
                            {/* Base Silhouette (Back View) */}
                            <path
                                d="M 160 100 C 160 200, 140 300, 180 400 C 190 450, 180 550, 180 550 M 240 100 C 240 200, 260 300, 220 400 C 210 450, 220 550, 220 550"
                                fill="none"
                                stroke="#cbd5e1"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="transition-all duration-1000"
                            />

                            <AnimatePresence mode="popLayout">
                                {/* STEP 1: Liposuccion (Flancs & Dos) */}
                                {activeStep === 1 && (
                                    <motion.g
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                                    >
                                        {/* Fat Highlight (Flanks) */}
                                        <motion.path
                                            d="M 160 250 Q 120 280 140 330 Q 160 350 170 320 Z"
                                            fill="#fef08a" opacity="0.6"
                                            animate={{ opacity: [0.6, 0.2, 0.6] }} transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <motion.path
                                            d="M 240 250 Q 280 280 260 330 Q 240 350 230 320 Z"
                                            fill="#fef08a" opacity="0.6"
                                            animate={{ opacity: [0.6, 0.2, 0.6] }} transition={{ duration: 2, repeat: Infinity }}
                                        />

                                        {/* Cannula Animation */}
                                        <motion.line
                                            x1="80" y1="300" x2="140" y2="300" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"
                                            animate={{ x1: [80, 100, 80], x2: [140, 160, 140] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <motion.line
                                            x1="320" y1="300" x2="260" y2="300" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"
                                            animate={{ x1: [320, 300, 320], x2: [260, 240, 260] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        />

                                        {/* Waist cinching arrow */}
                                        <motion.path d="M 120 290 L 150 290 M 135 280 L 150 290 L 135 300" stroke="#3b82f6" fill="none" strokeWidth="2" animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                                        <motion.path d="M 280 290 L 250 290 M 265 280 L 250 290 L 265 300" stroke="#3b82f6" fill="none" strokeWidth="2" animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                                    </motion.g>
                                )}

                                {/* STEP 2: Purification (Fat droplets into centrifuge/syringe) */}
                                {activeStep === 2 && (
                                    <motion.g
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                                    >
                                        <motion.circle cx="200" cy="300" r="80" fill="none" stroke="#dbeafe" strokeWidth="4" strokeDasharray="10 5"
                                            animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.circle cx="200" cy="300" r="60" fill="none" stroke="#bfdbfe" strokeWidth="2"
                                            animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        />

                                        {/* Golden Fat Droplets accumulating */}
                                        {[...Array(8)].map((_, i) => (
                                            <motion.circle
                                                key={i}
                                                cx="200" cy="300" r="10" fill="#facc15"
                                                initial={{ scale: 0, x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100 }}
                                                animate={{ scale: [0, 1, 0], x: 0, y: 0 }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            />
                                        ))}

                                        {/* Filtered Syringe indicator */}
                                        <motion.path d="M 180 400 L 220 400 L 220 480 L 200 520 L 180 480 Z" fill="none" stroke="#3b82f6" strokeWidth="3" />
                                        <motion.path d="M 185 470 L 215 470 L 215 480 L 200 510 L 185 480 Z" fill="#facc15"
                                            animate={{ y: [0, -50, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </motion.g>
                                )}

                                {/* STEP 3: Injection (Syringe injecting into buttock cheeks, cheeks expanding) */}
                                {activeStep === 3 && (
                                    <motion.g
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                                    >
                                        {/* Enhanced Buttocks Profile */}
                                        <motion.path
                                            d="M 180 400 C 130 380, 100 450, 180 500"
                                            fill="#fef08a" opacity="0.4"
                                            animate={{ d: "M 180 400 C 100 380, 80 480, 180 500" }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
                                        />
                                        <motion.path
                                            d="M 220 400 C 270 380, 300 450, 220 500"
                                            fill="#fef08a" opacity="0.4"
                                            animate={{ d: "M 220 400 C 300 380, 320 480, 220 500" }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
                                        />

                                        {/* Outline Expanding */}
                                        <motion.path
                                            d="M 180 400 C 130 380, 100 450, 180 500 M 220 400 C 270 380, 300 450, 220 500"
                                            fill="none" stroke="#D4AF37" strokeWidth="3" strokeDasharray="4 4"
                                            animate={{ d: "M 180 400 C 100 380, 80 480, 180 500 M 220 400 C 300 380, 320 480, 220 500" }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
                                        />

                                        {/* Injection Syringes */}
                                        <motion.g
                                            animate={{ x: [10, 0, 10], y: [-10, 0, -10] }} transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <line x1="80" y1="380" x2="130" y2="430" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                                            <circle cx="80" cy="380" r="4" fill="#3b82f6" />
                                        </motion.g>

                                        <motion.g
                                            animate={{ x: [-10, 0, -10], y: [-10, 0, -10] }} transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <line x1="320" y1="380" x2="270" y2="430" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                                            <circle cx="320" cy="380" r="4" fill="#3b82f6" />
                                        </motion.g>

                                    </motion.g>
                                )}
                            </AnimatePresence>
                        </svg>
                    </div>

                    {/* Step Controls & Info */}
                    <div className="flex flex-col gap-6">

                        {/* Step Navigation */}
                        <div className="flex bg-slate-100 p-2 rounded-2xl relative">
                            {[1, 2, 3].map((step) => (
                                <button
                                    key={step}
                                    onClick={() => handleStepChange(step as SurgeryStep)}
                                    className={`flex-1 py-3 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 relative z-10 ${activeStep === step ? 'text-brand-navy' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    Étape {step}
                                </button>
                            ))}
                            {/* Sliding Active Background */}
                            <motion.div
                                className="absolute top-2 bottom-2 bg-white rounded-xl shadow-sm border border-slate-200"
                                initial={false}
                                animate={{
                                    left: `${(activeStep - 1) * 33.33}%`,
                                    width: '33.33%'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                style={{ zIndex: 0 }}
                            />
                        </div>

                        {/* Step Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-brand-navy flex items-center justify-center rounded-2xl shrink-0">
                                        {React.createElement(data.icon, { className: "w-7 h-7 text-brand-blue" })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-navy">{data.title}</h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 min-h-[5rem]">
                                    {data.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                    <div>
                                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Cible</div>
                                        <div className="text-brand-navy font-bold">{data.focus}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Durée cible</div>
                                        <div className="text-brand-navy font-bold">{data.duration}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Global CTA */}
                        <Button size="lg" asChild className="w-full mt-4 h-14 bg-brand-blue text-white hover:bg-brand-blue/90 text-lg shadow-lg shadow-brand-blue/20">
                            <Link href="/devis?intervention=bbl">
                                Commencer mon diagnostic BBL
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
