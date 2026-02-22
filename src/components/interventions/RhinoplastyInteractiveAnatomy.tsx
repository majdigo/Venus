"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Info } from "lucide-react";

type NoseZone = "bosse" | "pointe" | "cloison" | null;

export function RhinoplastyInteractiveAnatomy() {
    const [activeZone, setActiveZone] = useState<NoseZone>(null);

    const zonesData = {
        bosse: {
            title: "Traitement de la Bosse Nasale",
            desc: "Limage précis de l'os ou utilisation de la technique ultrasonique (Piézo) pour lisser le profil supérieur sans casser l'os, réduisant massivement les ecchymoses.",
            color: "#D4AF37",
        },
        pointe: {
            title: "Affinement de la Pointe",
            desc: "Remodelage des cartilages alaires pour corriger une pointe tombante, trop large ou asymétrique. Sutures de précision pour un résultat naturel.",
            color: "#1C3F60",
        },
        cloison: {
            title: "Septoplastie (Cloison Nasale)",
            desc: "Redressement de la paroi interne pour corriger une déviation. Améliore l'esthétique de face et libère complètement la fonction respiratoire.",
            color: "#475569",
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-16 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">

            {/* LEFT: INTERACTIVE SVG EXPLORER */}
            <div className="w-full md:w-1/2 relative min-h-[400px] flex items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 group">

                {/* Helper Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold text-brand-navy shadow-sm flex items-center gap-2"
                >
                    <Info className="w-4 h-4 text-brand-gold" />
                    Cliquez sur les zones interactives
                </motion.div>

                {/* Abstract Nose Anatomy SVG */}
                <svg viewBox="0 0 400 500" className="w-full max-w-[320px] drop-shadow-xl overflow-visible">
                    {/* Base Face Contour (Faded) */}
                    <path
                        d="M 100,50 Q 80,150 120,200 Q 150,250 140,320 Q 130,400 180,450"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    {/* ZONE: LA BOSSE (Hump) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "bosse" && setActiveZone("bosse")}
                        onClick={() => setActiveZone("bosse")}
                        className="cursor-pointer"
                    >
                        <motion.path
                            d="M 120,200 Q 180,240 220,300"
                            fill="none"
                            stroke={activeZone === "bosse" ? zonesData.bosse.color : "#cbd5e1"}
                            strokeWidth={activeZone === "bosse" ? "12" : "8"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {activeZone === "bosse" && (
                            <motion.circle cx="160" cy="245" r="8" fill={zonesData.bosse.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* ZONE: LA POINTE (Tip) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "pointe" && setActiveZone("pointe")}
                        onClick={() => setActiveZone("pointe")}
                        className="cursor-pointer"
                    >
                        <motion.path
                            d="M 220,300 Q 250,330 200,380"
                            fill="none"
                            stroke={activeZone === "pointe" ? zonesData.pointe.color : "#94a3b8"}
                            strokeWidth={activeZone === "pointe" ? "14" : "10"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {activeZone === "pointe" && (
                            <motion.circle cx="225" cy="335" r="8" fill={zonesData.pointe.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* ZONE: LA CLOISON (Septum / Columella) */}
                    <motion.g
                        onHoverStart={() => activeZone !== "cloison" && setActiveZone("cloison")}
                        onClick={() => setActiveZone("cloison")}
                        className="cursor-pointer"
                    >
                        <motion.path
                            d="M 200,380 Q 180,390 140,320"
                            fill="none"
                            stroke={activeZone === "cloison" ? zonesData.cloison.color : "#64748b"}
                            strokeWidth={activeZone === "cloison" ? "10" : "6"}
                            strokeLinecap="round"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                        {activeZone === "cloison" && (
                            <motion.circle cx="170" cy="360" r="8" fill={zonesData.cloison.color} layoutId="pulse" className="animate-pulse" />
                        )}
                    </motion.g>

                    {/* Aesthetic Dashed Construction lines simulating surgery planning */}
                    <path d="M 50,245 L 350,245" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                    <path d="M 225,100 L 225,450" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                </svg>
            </div>

            {/* RIGHT: DYNAMIC INFO PANEL */}
            <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[300px]">
                <h3 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Anatomie & Techniques</h3>
                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Explorez la Rhinoplastie</h2>

                <div className="relative h-[200px]">
                    <AnimatePresence mode="wait">
                        {activeZone ? (
                            <motion.div
                                key={activeZone}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-50 border-l-4 p-6 rounded-r-2xl"
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
                                <p className="text-slate-400 font-medium">Sélectionnez une zone sur le schéma 3D pour découvrir nos techniques opératoires.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
