"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, CheckCircle2 } from "lucide-react";

type BodyZone = "abdomen" | "hanches" | "cuisses" | "bras" | "dos" | "menton";

interface ZoneData {
    id: BodyZone;
    label: string;
    title: string;
    description: string;
    cx: number;
    cy: number;
    path: string;
}

const ZONES: ZoneData[] = [
    {
        id: "abdomen",
        label: "Abdomen",
        title: "Ventre & Abdomen",
        description: "Élimination définitive des amas graisseux (bourrelets sous-ombilicaux et sus-ombilicaux). Permet de retrouver un ventre plat et ferme, et si souhaité, de sculpter les abdominaux (Vaser HD).",
        cx: 200,
        cy: 350,
        path: "M 150 280 C 150 280, 200 300, 250 280 C 270 330, 260 400, 200 420 C 140 400, 130 330, 150 280 Z"
    },
    {
        id: "hanches",
        label: "Hanches / Poignées d'amour",
        title: "Poignées d'amour",
        description: "L'une des zones les plus demandées. La liposuccion des flancs permet de redessiner la taille et de retrouver une courbe harmonieuse (le fameux 'V' shape).",
        cx: 120,
        cy: 360,
        path: "M 110 320 C 100 350, 110 380, 130 400 C 145 380, 140 340, 110 320 Z M 290 320 C 300 350, 290 380, 270 400 C 255 380, 260 340, 290 320 Z"
    },
    {
        id: "cuisses",
        label: "Cuisses",
        title: "Cuisses & Culotte de cheval",
        description: "Affinement de la face externe (culotte de cheval) et interne des cuisses. Réduit les frottements et allège considérablement la silhouette globale.",
        cx: 250,
        cy: 550,
        path: "M 140 450 C 120 500, 130 650, 150 700 C 170 650, 190 500, 190 450 Z M 260 450 C 280 500, 270 650, 250 700 C 230 650, 210 500, 210 450 Z"
    },
    {
        id: "bras",
        label: "Bras",
        title: "Face inférieure des bras",
        description: "Traitement de l'effet 'chauve-souris'. La liposuccion VASER est particulièrement efficace ici pour assurer une excellente rétraction cutanée après l'aspiration.",
        cx: 80,
        cy: 250,
        path: "M 90 200 C 70 240, 60 280, 70 320 C 90 300, 100 240, 90 200 Z M 310 200 C 330 240, 340 280, 330 320 C 310 300, 300 240, 310 200 Z"
    },
    {
        id: "menton",
        label: "Double menton",
        title: "Double menton & Ovale",
        description: "Une micro-canule est utilisée pour affiner le cou et redessiner l'ovale du visage. Résultat spectaculaire avec une seule micro-incision invisible.",
        cx: 200,
        cy: 140,
        path: "M 170 130 C 170 130, 200 160, 230 130 C 210 150, 190 150, 170 130 Z"
    }
];

export function LiposuccionInteractiveAnatomy() {
    const [activeZone, setActiveZone] = useState<ZoneData | null>(ZONES[0]);
    const [isHovered, setIsHovered] = useState<BodyZone | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
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
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                        Silhouette Haute Définition
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-brand-navy mb-6"
                    >
                        Les Zones de <span className="text-brand-gold">Liposuccion</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Explorez de manière interactive les zones où la graisse rebelle peut être aspirée pour sculpter définitivement votre corps.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                    {/* Interactive SVG Body */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-md aspect-[1/2] rounded-3xl bg-gradient-to-b from-gray-50 to-white shadow-2xl p-8 flex items-center justify-center"
                    >
                        {/* Abstract Body Silhouette */}
                        <svg viewBox="0 0 400 800" className="w-full h-full drop-shadow-xl">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#f8fafc" />
                                    <stop offset="100%" stopColor="#e2e8f0" />
                                </linearGradient>
                            </defs>

                            {/* Base Body Path (Abstract/Minimalist Female Silhouette) */}
                            <path
                                d="M 200 60 C 230 60, 250 80, 250 110 C 250 140, 230 160, 200 160 C 170 160, 150 140, 150 110 C 150 80, 170 60, 200 60 Z M 200 160 C 240 160, 280 180, 300 200 C 330 230, 320 350, 320 350 C 320 350, 280 340, 270 380 C 250 450, 280 500, 280 550 C 280 650, 260 750, 260 750 L 220 750 L 220 500 L 180 500 L 180 750 L 140 750 C 140 750, 120 650, 120 550 C 120 500, 150 450, 130 380 C 120 340, 80 350, 80 350 C 80 350, 70 230, 100 200 C 120 180, 160 160, 200 160 Z"
                                fill="url(#bodyGradient)"
                                stroke="#cbd5e1"
                                strokeWidth="2"
                                className="transition-all duration-500"
                            />

                            {/* Interactive Target Zones */}
                            {ZONES.map((zone) => {
                                const isActive = activeZone?.id === zone.id;
                                const isHoverZone = isHovered === zone.id;

                                return (
                                    <g key={zone.id}>
                                        <path
                                            d={zone.path}
                                            fill={isActive ? "rgba(212, 175, 55, 0.4)" : isHoverZone ? "rgba(28, 63, 96, 0.2)" : "rgba(28, 63, 96, 0.05)"}
                                            stroke={isActive ? "#D4AF37" : "transparent"}
                                            strokeWidth="2"
                                            filter={isActive ? "url(#glow)" : ""}
                                            className="transition-all duration-300 cursor-pointer"
                                            onMouseEnter={() => setIsHovered(zone.id)}
                                            onMouseLeave={() => setIsHovered(null)}
                                            onClick={() => setActiveZone(zone)}
                                        />
                                        {/* Hotspot Indicator */}
                                        <circle
                                            cx={zone.cx}
                                            cy={zone.cy}
                                            r={isActive ? 8 : 5}
                                            fill={isActive ? "#D4AF37" : "#1C3F60"}
                                            className="transition-all duration-300 pointer-events-none"
                                        />
                                        {isActive && (
                                            <circle
                                                cx={zone.cx}
                                                cy={zone.cy}
                                                r={16}
                                                fill="transparent"
                                                stroke="#D4AF37"
                                                strokeWidth="1.5"
                                                className="animate-ping pointer-events-none opacity-50"
                                            />
                                        )}
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Floating Labels */}
                        {ZONES.map((zone) => (
                            <div
                                key={`label-${zone.id}`}
                                className={`absolute hidden md:flex items-center gap-2 transition-all duration-300 cursor-pointer 
                                    ${activeZone?.id === zone.id ? 'opacity-100 scale-105 z-20' : 'opacity-40 scale-100 z-10 hover:opacity-70'}`}
                                style={{
                                    top: `${(zone.cy / 800) * 100}%`,
                                    left: zone.cx > 200 ? '90%' : '-10%',
                                    transform: zone.cx > 200 ? 'translate(0, -50%)' : 'translate(-100%, -50%)'
                                }}
                                onClick={() => setActiveZone(zone)}
                            >
                                {zone.cx <= 200 && <span className={`text-sm font-semibold whitespace-nowrap ${activeZone?.id === zone.id ? 'text-brand-gold' : 'text-brand-navy'}`}>{zone.label}</span>}
                                <div className={`h-px w-8 ${activeZone?.id === zone.id ? 'bg-brand-gold' : 'bg-gray-300'}`}></div>
                                {zone.cx > 200 && <span className={`text-sm font-semibold whitespace-nowrap ${activeZone?.id === zone.id ? 'text-brand-gold' : 'text-brand-navy'}`}>{zone.label}</span>}
                            </div>
                        ))}
                    </motion.div>

                    {/* Content Panel */}
                    <div className="w-full max-w-lg">
                        <AnimatePresence mode="wait">
                            {activeZone && (
                                <motion.div
                                    key={activeZone.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group"
                                >
                                    {/* Decorative subtle background icon */}
                                    <div className="absolute -right-8 -top-8 text-brand-navy/5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                        <Info size={160} strokeWidth={1} />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-brand-navy">
                                                {activeZone.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {activeZone.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-brand-navy flex items-center gap-2">
                                                Pourquoi traiter cette zone ?
                                            </h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                                                    <span className="text-gray-600">Amélioration visible et immédiate des proportions de la silhouette.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                                                    <span className="text-gray-600">Les adipocytes (cellules graisseuses) retirés ne se régénèrent pas. Le résultat est durable.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                                                    <span className="text-gray-600">Cicatrices millimétriques (3 à 4 mm), quasiment invisibles après cicatrisation complète.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-100">
                                            <a
                                                href={`/devis?intervention=liposuccion&zone=${activeZone.id}`}
                                                className="inline-flex items-center justify-center w-full bg-brand-navy text-white font-medium py-4 px-6 rounded-xl hover:bg-brand-navy/90 transition-colors"
                                            >
                                                Demander un devis pour cette zone
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Mobile Zone Selector (Visible only on small screens) */}
                        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
                            {ZONES.map((zone) => (
                                <button
                                    key={`btn-${zone.id}`}
                                    onClick={() => setActiveZone(zone)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${activeZone?.id === zone.id
                                            ? 'bg-brand-navy border-brand-navy text-white'
                                            : 'bg-white border-gray-200 text-gray-600 hover:border-brand-gold'
                                        }`}
                                >
                                    {zone.label}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
