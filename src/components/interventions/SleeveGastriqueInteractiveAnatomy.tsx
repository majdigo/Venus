"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Info } from "lucide-react";

type GastricZone = "stomach" | "resection" | "sleeve" | null;

export function SleeveGastriqueInteractiveAnatomy() {
    const [activeZone, setActiveZone] = useState<GastricZone>(null);

    const zonesData = {
        stomach: {
            title: "Anatomie Initiale",
            desc: "L'estomac possède une grande capacité de stockage et produit la ghréline, l'hormone stimulant l'appétit, principalement dans sa partie supérieure (le fundus).",
            color: "#94a3b8",
        },
        resection: {
            title: "La Résection (Partie Retirée)",
            desc: "Le chirurgien retire environ 75% à 80% du volume de l'estomac (la grande courbure). Cela réduit massivement la sécrétion de ghréline, coupant la sensation de faim.",
            color: "#ef4444",
        },
        sleeve: {
            title: "Le Nouveau Tube Gastrique",
            desc: "L'estomac restant prend la forme d'un tube (une 'sleeve' ou manche) d'environ 150ml. La satiété est atteinte très rapidement avec de petites quantités de nourriture.",
            color: "#10b981",
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-16 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">

            {/* LEFT: INTERACTIVE SVG EXPLORER */}
            <div className="w-full md:w-1/2 relative min-h-[450px] flex items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 group overflow-hidden">

                {/* Helper Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold text-brand-navy shadow-sm flex items-center gap-2 z-10"
                >
                    <Info className="w-4 h-4 text-brand-gold" />
                    Cliquez sur les différentes zones
                </motion.div>

                {/* Abstract Stomach Anatomy SVG */}
                <svg viewBox="0 0 500 500" className="w-full max-w-[380px] drop-shadow-xl overflow-visible">

                    {/* Esophagus & Duodenum (Fixed) */}
                    <path
                        d="M 230,50 L 230,120 M 270,50 L 270,120"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="15"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 200,400 Q 150,450 180,500 M 240,400 Q 190,450 220,500"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="15"
                        strokeLinecap="round"
                    />

                    {/* ZONE: STOMACH (Full Original Outline) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "stomach" && setActiveZone("stomach")}
                        onClick={() => setActiveZone("stomach")}
                        className="cursor-pointer"
                    >
                        {/* Outline of full stomach */}
                        <motion.path
                            d="M 230,120 Q 150,150 150,250 Q 150,380 200,400 Q 300,430 380,350 Q 420,250 350,120 Q 300,50 270,120"
                            fill="none"
                            stroke={activeZone === "stomach" ? zonesData.stomach.color : "#cbd5e1"}
                            strokeWidth={activeZone === "stomach" ? "6" : "3"}
                            strokeDasharray="8,8"
                            strokeLinecap="round"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {activeZone === "stomach" && (
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.1 }}
                                d="M 230,120 Q 150,150 150,250 Q 150,380 200,400 Q 300,430 380,350 Q 420,250 350,120 Q 300,50 270,120 Z"
                                fill={zonesData.stomach.color}
                            />
                        )}
                    </motion.g>

                    {/* ZONE: RESECTION (The part being removed - Fundus and greater curvature) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "resection" && setActiveZone("resection")}
                        onClick={() => setActiveZone("resection")}
                        className="cursor-pointer"
                    >
                        {/* The surgical cutting line (staple line) */}
                        <motion.path
                            d="M 250,150 Q 230,250 220,380"
                            fill="none"
                            stroke={activeZone === "resection" ? "#b91c1c" : "#94a3b8"}
                            strokeWidth={activeZone === "resection" ? "6" : "3"}
                            strokeDasharray={activeZone === "resection" ? "10,5" : "4,4"}
                            strokeLinecap="round"
                            className={activeZone === "resection" ? "animate-pulse" : ""}
                        />
                        {/* The removed portion */}
                        <motion.path
                            d="M 250,150 Q 300,50 350,120 Q 420,250 380,350 Q 300,430 220,380 M 250,150 Q 230,250 220,380"
                            fill="none"
                            stroke={activeZone === "resection" ? zonesData.resection.color : "transparent"}
                            strokeWidth="4"
                            strokeLinecap="round"
                            whileHover={{ scale: 1.03, x: 10, y: -5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        />
                        {activeZone === "resection" && (
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.15, x: 15, y: -5 }}
                                d="M 250,150 Q 300,50 350,120 Q 420,250 380,350 Q 300,430 220,380 Q 230,250 250,150 Z"
                                fill={zonesData.resection.color}
                            />
                        )}
                        {activeZone === "resection" && (
                            <motion.circle cx="330" cy="200" r="8" fill={zonesData.resection.color} layoutId="pulse" className="animate-ping" opacity="0.5" />
                        )}
                    </motion.g>

                    {/* ZONE: SLEEVE (The remaining tube) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "sleeve" && setActiveZone("sleeve")}
                        onClick={() => setActiveZone("sleeve")}
                        className="cursor-pointer"
                    >
                        {/* Inner tube outline */}
                        <motion.path
                            d="M 230,120 Q 150,150 150,250 Q 150,380 200,400 Q 210,390 220,380 Q 230,250 250,150 Q 260,135 270,120"
                            fill="none"
                            stroke={activeZone === "sleeve" ? zonesData.sleeve.color : "#94a3b8"}
                            strokeWidth={activeZone === "sleeve" ? "8" : "4"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {activeZone === "sleeve" && (
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.25 }}
                                d="M 230,120 Q 150,150 150,250 Q 150,380 200,400 Q 210,390 220,380 Q 230,250 250,150 Q 260,135 270,120 Z"
                                fill={zonesData.sleeve.color}
                            />
                        )}
                        {activeZone === "sleeve" && (
                            <motion.circle cx="190" cy="270" r="8" fill={zonesData.sleeve.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* Indicators */}
                    {activeZone === "resection" && (
                        <text x="350" y="260" fill={zonesData.resection.color} fontSize="14" fontWeight="bold">75% RETIRÉ</text>
                    )}
                    {activeZone === "sleeve" && (
                        <text x="140" y="270" fill={zonesData.sleeve.color} fontSize="14" fontWeight="bold">-150 ml</text>
                    )}

                </svg>
            </div>

            {/* RIGHT: DYNAMIC INFO PANEL */}
            <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[300px]">
                <h3 className="text-sm font-bold tracking-widest text-[#10b981] uppercase mb-4">Mécanisme d'action</h3>
                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Comprendre la Sleeve</h2>

                <div className="relative h-[220px]">
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
                                <p className="text-slate-400 font-medium">Survolez le schéma de l'estomac pour visualiser l'intervention chirurgicale.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
