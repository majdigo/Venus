"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

type NoseZone = "bosse" | "pointe" | "cloison" | null;

export function RhinoplastyInteractiveAnatomy() {
    const [activeZone, setActiveZone] = useState<NoseZone>(null);

    const zonesData = {
        bosse: {
            title: "Traitement de la Bosse Nasale",
            desc: "Limage précis de l'os ou utilisation de la technique ultrasonique (Piézo) pour lisser le profil supérieur sans casser l'os, réduisant massivement les ecchymoses.",
            color: "#D4AF37",
            label: "Dorsum nasal",
        },
        pointe: {
            title: "Affinement de la Pointe",
            desc: "Remodelage des cartilages alaires pour corriger une pointe tombante, trop large ou asymétrique. Sutures de précision pour un résultat naturel.",
            color: "#1C3F60",
            label: "Pointe du nez",
        },
        cloison: {
            title: "Septoplastie (Cloison Nasale)",
            desc: "Redressement de la paroi interne pour corriger une déviation. Améliore l'esthétique de face et libère complètement la fonction respiratoire.",
            color: "#475569",
            label: "Cloison nasale",
        }
    };

    const isActive = (zone: NoseZone) => activeZone === zone;

    return (
        <div className="w-full max-w-5xl mx-auto my-16 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">

            {/* LEFT: RECOGNIZABLE NOSE PROFILE SVG */}
            <div className="w-full md:w-1/2 relative min-h-[420px] flex items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100">

                {/* Helper Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold text-brand-navy shadow-sm flex items-center gap-2 z-10"
                >
                    <Info className="w-4 h-4 text-brand-blue" />
                    Cliquez sur les zones du nez
                </motion.div>

                <svg viewBox="0 0 300 440" className="w-full max-w-[280px] overflow-visible" aria-label="Anatomie du nez - Profil latéral">
                    {/* ══════════════════════════════════════
                       FACE PROFILE SILHOUETTE (recognizable)
                       ══════════════════════════════════════ */}
                    {/* Forehead */}
                    <path
                        d="M 60,40 Q 70,30 90,25 Q 130,15 155,30 Q 165,35 170,50"
                        fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round"
                    />
                    {/* Glabella to nose bridge */}
                    <path
                        d="M 170,50 Q 175,60 172,75 L 165,100"
                        fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round"
                    />

                    {/* ── ZONE 1: DORSUM / BOSSE (Bridge of the nose) ── */}
                    <motion.g
                        onHoverStart={() => !isActive("bosse") && setActiveZone("bosse")}
                        onClick={() => setActiveZone("bosse")}
                        className="cursor-pointer"
                    >
                        {/* Nose bridge with distinct bump */}
                        <motion.path
                            d="M 165,100 Q 172,130 178,155 Q 182,165 185,180"
                            fill="none"
                            stroke={isActive("bosse") ? zonesData.bosse.color : "#94a3b8"}
                            strokeWidth={isActive("bosse") ? "8" : "4"}
                            strokeLinecap="round"
                            whileHover={{ strokeWidth: 7 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        />
                        {/* Bump highlight area */}
                        <motion.ellipse
                            cx="174" cy="145" rx="18" ry="30"
                            fill={isActive("bosse") ? `${zonesData.bosse.color}20` : "transparent"}
                            stroke={isActive("bosse") ? zonesData.bosse.color : "transparent"}
                            strokeWidth="1.5"
                            strokeDasharray="4,3"
                            animate={{ opacity: isActive("bosse") ? 1 : 0.3 }}
                        />
                        {/* Label line */}
                        {isActive("bosse") && (
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <line x1="192" y1="145" x2="245" y2="125" stroke={zonesData.bosse.color} strokeWidth="1.5" strokeDasharray="3,2" />
                                <rect x="245" y="112" width="48" height="26" rx="6" fill="white" stroke={zonesData.bosse.color} strokeWidth="1" />
                                <text x="269" y="129" textAnchor="middle" className="text-[9px] font-bold" fill={zonesData.bosse.color}>Bosse</text>
                            </motion.g>
                        )}
                    </motion.g>

                    {/* ── ZONE 2: POINTE (Tip of the nose) ── */}
                    <motion.g
                        onHoverStart={() => !isActive("pointe") && setActiveZone("pointe")}
                        onClick={() => setActiveZone("pointe")}
                        className="cursor-pointer"
                    >
                        {/* Nose tip curve */}
                        <motion.path
                            d="M 185,180 Q 195,210 200,220 Q 210,240 195,255 Q 185,262 175,258"
                            fill="none"
                            stroke={isActive("pointe") ? zonesData.pointe.color : "#94a3b8"}
                            strokeWidth={isActive("pointe") ? "8" : "4"}
                            strokeLinecap="round"
                            whileHover={{ strokeWidth: 7 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        />
                        {/* Tip highlight circle */}
                        <motion.circle
                            cx="198" cy="238" r="18"
                            fill={isActive("pointe") ? `${zonesData.pointe.color}18` : "transparent"}
                            stroke={isActive("pointe") ? zonesData.pointe.color : "transparent"}
                            strokeWidth="1.5"
                            strokeDasharray="4,3"
                            animate={{ opacity: isActive("pointe") ? 1 : 0.3 }}
                        />
                        {/* Label line */}
                        {isActive("pointe") && (
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <line x1="216" y1="238" x2="255" y2="250" stroke={zonesData.pointe.color} strokeWidth="1.5" strokeDasharray="3,2" />
                                <rect x="255" y="237" width="43" height="26" rx="6" fill="white" stroke={zonesData.pointe.color} strokeWidth="1" />
                                <text x="276" y="254" textAnchor="middle" className="text-[9px] font-bold" fill={zonesData.pointe.color}>Pointe</text>
                            </motion.g>
                        )}
                    </motion.g>

                    {/* ── ZONE 3: CLOISON / COLUMELLA (Septum) ── */}
                    <motion.g
                        onHoverStart={() => !isActive("cloison") && setActiveZone("cloison")}
                        onClick={() => setActiveZone("cloison")}
                        className="cursor-pointer"
                    >
                        {/* Columella & nostril base */}
                        <motion.path
                            d="M 175,258 Q 168,262 160,268 Q 148,275 140,270 L 130,265"
                            fill="none"
                            stroke={isActive("cloison") ? zonesData.cloison.color : "#94a3b8"}
                            strokeWidth={isActive("cloison") ? "7" : "3.5"}
                            strokeLinecap="round"
                            whileHover={{ strokeWidth: 6 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        />
                        {/* Internal septum indication */}
                        <motion.path
                            d="M 172,100 Q 168,160 163,220 Q 160,250 160,268"
                            fill="none"
                            stroke={isActive("cloison") ? `${zonesData.cloison.color}60` : "#cbd5e140"}
                            strokeWidth={isActive("cloison") ? "3" : "1.5"}
                            strokeLinecap="round"
                            strokeDasharray="6,4"
                        />
                        {/* Label line */}
                        {isActive("cloison") && (
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <line x1="130" y1="265" x2="75" y2="290" stroke={zonesData.cloison.color} strokeWidth="1.5" strokeDasharray="3,2" />
                                <rect x="30" y="278" width="60" height="26" rx="6" fill="white" stroke={zonesData.cloison.color} strokeWidth="1" />
                                <text x="60" y="295" textAnchor="middle" className="text-[9px] font-bold" fill={zonesData.cloison.color}>Cloison</text>
                            </motion.g>
                        )}
                    </motion.g>

                    {/* ── LOWER FACE (lips, chin) for context ── */}
                    {/* Upper lip */}
                    <path
                        d="M 130,265 Q 125,270 120,280 Q 115,288 118,295 Q 125,305 140,310"
                        fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round"
                    />
                    {/* Lower lip */}
                    <path
                        d="M 140,310 Q 150,318 145,330 Q 140,340 130,348"
                        fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round"
                    />
                    {/* Chin */}
                    <path
                        d="M 130,348 Q 120,365 115,380 Q 112,395 120,410"
                        fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round"
                    />

                    {/* ── EYE (for orientation) ── */}
                    <ellipse cx="120" cy="75" rx="22" ry="8" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
                    <circle cx="120" cy="75" r="4" fill="#e2e8f0" />

                    {/* ── SURGERY PLANNING LINES ── */}
                    <line x1="155" y1="100" x2="210" y2="100" stroke="#D4AF3740" strokeWidth="0.8" strokeDasharray="4,4" />
                    <line x1="165" y1="180" x2="215" y2="180" stroke="#D4AF3740" strokeWidth="0.8" strokeDasharray="4,4" />
                    <line x1="120" y1="268" x2="210" y2="268" stroke="#D4AF3740" strokeWidth="0.8" strokeDasharray="4,4" />

                    {/* ── Measurement dots ── */}
                    <circle cx="165" cy="100" r="3" fill="#D4AF3780" />
                    <circle cx="185" cy="180" r="3" fill="#D4AF3780" />
                    <circle cx="130" cy="268" r="3" fill="#D4AF3780" />
                </svg>
            </div>

            {/* RIGHT: DYNAMIC INFO PANEL */}
            <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[300px]">
                <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Anatomie &amp; Techniques</h3>
                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Explorez la Rhinoplastie</h2>

                <div className="relative min-h-[200px]">
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
                                <span className="inline-block bg-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm"
                                    style={{ color: zonesData[activeZone].color, border: `1px solid ${zonesData[activeZone].color}30` }}>
                                    {zonesData[activeZone].label}
                                </span>
                                <h4 className="text-xl font-bold mb-3" style={{ color: zonesData[activeZone].color }}>
                                    {zonesData[activeZone].title}
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-base">
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
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <p className="text-slate-400 font-medium">Survolez ou cliquez sur une zone du profil pour explorer les techniques de rhinoplastie.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
