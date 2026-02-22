"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Info } from "lucide-react";

type BreastZone = "incision" | "implant" | "dualplane" | null;

export function BreastAugmentationInteractiveAnatomy() {
    const [activeZone, setActiveZone] = useState<BreastZone>(null);

    const zonesData = {
        implant: {
            title: "Choix de l'Implant",
            desc: "Prothèses Rondes pour un décolleté pigeonnant ou Anatomiques (en goutte d'eau) pour une pente naturelle. Gel de silicone cohésif ultra-sécurisé de marque européenne.",
            color: "#D4AF37",
        },
        dualplane: {
            title: "Technique Dual Plane",
            desc: "L'implant est positionné partiellement sous le muscle pectoral et partiellement sous la glande mammaire, offrant un galbe naturel et évitant l'aspect 'boule' artificiel.",
            color: "#1C3F60",
        },
        incision: {
            title: "Voies d'Incision Invisibles",
            desc: "Trois options d'incision pour dissimuler la cicatrice : sous-mammaire (dans le pli), péri-aréolaire (autour de l'aréole) ou axillaire (sous le bras).",
            color: "#475569",
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-16 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">

            {/* LEFT: INTERACTIVE SVG EXPLORER */}
            <div className="w-full md:w-1/2 relative min-h-[400px] flex items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 group overflow-hidden">

                {/* Helper Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold text-brand-navy shadow-sm flex items-center gap-2 z-10"
                >
                    <Info className="w-4 h-4 text-brand-gold" />
                    Interagissez avec l'anatomie
                </motion.div>

                {/* Abstract Breast Anatomy SVG (Profile View) */}
                <svg viewBox="0 0 400 500" className="w-full max-w-[320px] drop-shadow-xl overflow-visible">
                    {/* Base Torso Contour (Faded) */}
                    <path
                        d="M 120,50 Q 80,150 70,200 Q 60,300 70,400 Q 80,450 100,500"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    {/* Back Contour */}
                    <path
                        d="M 320,50 Q 350,200 360,350 Q 365,450 350,500"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    {/* Natural Breast Outline */}
                    <path
                        d="M 70,200 Q 150,200 220,280 Q 250,330 200,380 Q 150,420 70,400"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                    />

                    {/* ZONE: L'IMPLANT (Breast Volume) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "implant" && setActiveZone("implant")}
                        onClick={() => setActiveZone("implant")}
                        className="cursor-pointer"
                    >
                        <motion.path
                            d="M 100,220 Q 180,220 240,300 Q 260,350 200,400 Q 140,430 80,400"
                            fill="none"
                            stroke={activeZone === "implant" ? zonesData.implant.color : "#cbd5e1"}
                            strokeWidth={activeZone === "implant" ? "8" : "4"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {/* Implant Fill Simulation */}
                        {activeZone === "implant" && (
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.15 }}
                                d="M 100,220 Q 180,220 240,300 Q 260,350 200,400 Q 140,430 80,400 Z"
                                fill={zonesData.implant.color}
                            />
                        )}
                        {activeZone === "implant" && (
                            <motion.circle cx="170" cy="310" r="10" fill={zonesData.implant.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* ZONE: DUAL PLANE (Muscle Position) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "dualplane" && setActiveZone("dualplane")}
                        onClick={() => setActiveZone("dualplane")}
                        className="cursor-pointer"
                    >
                        <motion.path
                            d="M 100,180 Q 150,220 180,280"
                            fill="none"
                            stroke={activeZone === "dualplane" ? zonesData.dualplane.color : "#94a3b8"}
                            strokeWidth={activeZone === "dualplane" ? "12" : "6"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {activeZone === "dualplane" && (
                            <motion.circle cx="140" cy="235" r="8" fill={zonesData.dualplane.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* ZONE: LES INCISIONS (Inframammary Fold) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "incision" && setActiveZone("incision")}
                        onClick={() => setActiveZone("incision")}
                        className="cursor-pointer"
                    >
                        <motion.path
                            d="M 140,415 Q 170,415 190,400"
                            fill="none"
                            stroke={activeZone === "incision" ? zonesData.incision.color : "#64748b"}
                            strokeWidth={activeZone === "incision" ? "10" : "5"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {/* Areola Incision indicator */}
                        <motion.path
                            d="M 245,340 A 10 10 0 0 1 245 360"
                            fill="none"
                            stroke={activeZone === "incision" ? zonesData.incision.color : "transparent"}
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        {activeZone === "incision" && (
                            <motion.circle cx="165" cy="410" r="8" fill={zonesData.incision.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* Construction/Measurement Lines */}
                    <path d="M 50,300 L 350,300" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                    <path d="M 230,150 L 230,450" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                </svg>
            </div>

            {/* RIGHT: DYNAMIC INFO PANEL */}
            <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[300px]">
                <h3 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Architecture & Volumes</h3>
                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Explorez l'Intervention</h2>

                <div className="relative h-[200px]">
                    <AnimatePresence mode="wait">
                        {activeZone ? (
                            <motion.div
                                key={activeZone}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-50 border-l-4 p-6 rounded-r-2xl h-full flex flex-col justify-center"
                                style={{ borderLeftColor: zonesData[activeZone].color }}
                            >
                                <h4 className="text-xl font-bold mb-3" style={{ color: zonesData[activeZone].color }}>
                                    {zonesData[activeZone].title}
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {zonesData[activeZone].desc}
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl"
                            >
                                <ChevronRight className="w-10 h-10 text-slate-300 mb-2 rotate-90 md:rotate-0 md:-ml-4 animate-bounce" />
                                <p className="text-slate-400 font-medium">Sélectionnez une zone sur le schéma 3D pour découvrir nos techniques de pointe.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
