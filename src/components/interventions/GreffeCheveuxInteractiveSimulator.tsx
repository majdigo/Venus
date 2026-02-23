"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, User, UserPlus } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";

type NorwoodStage = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface StageData {
    stage: NorwoodStage;
    title: string;
    description: string;
    grafts: string;
    technique: string;
    color: string;
}

const STAGES: Record<NorwoodStage, StageData> = {
    1: {
        stage: 1,
        title: "Stade 1 : Chevelure Dense",
        description: "Ligne frontale intacte ou très léger recul normal avec l'âge (golfes temporaux).",
        grafts: "0 - 1000",
        technique: "DHI (Densification)",
        color: "#10b981" // emerald-500
    },
    2: {
        stage: 2,
        title: "Stade 2 : Recul Léger",
        description: "Recul modéré des golfes temporo-frontaux. Souvent le premier signe de calvitie masculine.",
        grafts: "1500 - 2000",
        technique: "DHI (Densification)",
        color: "#34d399" // emerald-400
    },
    3: {
        stage: 3,
        title: "Stade 3 : Calvitie Débutante",
        description: "Recul profond des golfes formant un 'M' ou un 'U'. C'est le stade ou la greffe devient fortement conseillée.",
        grafts: "2000 - 3000",
        technique: "DHI / FUE Saphir",
        color: "#fbbf24" // amber-400
    },
    4: {
        stage: 4,
        title: "Stade 4 : Calvitie Modérée",
        description: "Éclaircissement marqué sur le vertex (sommet du crâne) en plus du grand recul frontal. Une bande de cheveux les sépare encore.",
        grafts: "3000 - 4000",
        technique: "FUE Saphir",
        color: "#f59e0b" // amber-500
    },
    5: {
        stage: 5,
        title: "Stade 5 : Calvitie Sévère",
        description: "La bande de cheveux séparant le front du vertex devient très fine. La perte de cheveux est massive.",
        grafts: "4000 - 5000",
        technique: "FUE Saphir (Mega Session)",
        color: "#ea580c" // orange-600
    },
    6: {
        stage: 6,
        title: "Stade 6 : Calvitie Très Sévère",
        description: "Jonction complète entre le front et le vertex. La tonsure et le front ne forment plus qu'une seule zone dégarnie.",
        grafts: "5000+",
        technique: "FUE Saphir (Mega Session max)",
        color: "#ef4444" // red-500
    },
    7: {
        stage: 7,
        title: "Stade 7 : Calvitie Extrême",
        description: "Il ne reste plus qu'une fine couronne de cheveux sur les tempes et la nuque (zone donneuse très sollicitée).",
        grafts: "Zone donneuse critique",
        technique: "Évaluation sur mesure",
        color: "#b91c1c" // red-700
    }
};

const PRICE_TUNISIA: Record<NorwoodStage, string> = {
    1: "1 500€", 2: "1 900€", 3: "2 200€", 4: "2 500€", 5: "2 800€", 6: "3 200€", 7: "Sur devis"
};
const PRICE_FRANCE: Record<NorwoodStage, string> = {
    1: "4 000€", 2: "5 500€", 3: "6 500€", 4: "8 000€", 5: "10 000€", 6: "12 000€", 7: "15 000€+"
};

export function GreffeCheveuxInteractiveSimulator() {
    const [activeStage, setActiveStage] = useState<NorwoodStage>(3);
    const data = STAGES[activeStage];
    const pushGtmEvent = useGtmEvent();
    const sectionRef = useRef<HTMLElement>(null);
    const hasTrackedView = useRef(false);
    const hasTrackedInteraction = useRef(false);

    // Intersection Observer — track view
    useEffect(() => {
        const el = sectionRef.current;
        if (!el || hasTrackedView.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasTrackedView.current) {
                hasTrackedView.current = true;
                pushGtmEvent({ event: 'hair_simulator_start' });
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [pushGtmEvent]);

    const handleStageChange = (stage: NorwoodStage) => {
        setActiveStage(stage);
        if (!hasTrackedInteraction.current) {
            hasTrackedInteraction.current = true;
            pushGtmEvent({ event: 'hair_simulator_interaction', norwood_stage: stage });
        }
        pushGtmEvent({
            event: 'hair_simulator_complete',
            norwood_stage: stage,
            estimated_grafts: STAGES[stage].grafts,
            recommended_intervention: STAGES[stage].technique,
        });
    };

    const handleCtaClick = () => {
        pushGtmEvent({
            event: 'hair_simulator_cta_click',
            norwood_stage: activeStage,
            estimated_grafts: data.grafts,
            recommended_intervention: data.technique,
            price_tunisia: PRICE_TUNISIA[activeStage],
        });
    };

    return (
        <section ref={sectionRef} className="py-24 bg-brand-navy relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-brand-blue" />
                        Simulateur Interactif
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Découvrez votre niveau sur <span className="text-brand-blue">l'Échelle de Norwood</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-white/80"
                    >
                        Sélectionnez le niveau de calvitie qui correspond le mieux à votre situation actuelle pour obtenir une estimation du nombre de greffons nécessaires.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Interactive SVG Animation Area */}
                    <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col items-center">

                        {/* Visual SVG Container (Top-down view of head) */}
                        <div className="relative aspect-square w-full max-w-[280px] bg-white/5 rounded-full overflow-hidden flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                            <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-2xl">
                                {/* Base Head Background (Skin) */}
                                <circle cx="100" cy="100" r="80" fill="#fbcfe8" />
                                {/* Nose simple indicator to show front */}
                                <path d="M 90 20 Q 100 5 110 20 Z" fill="#fbcfe8" />

                                {/* Hair rendering based on Norwood scale */}
                                <motion.g
                                    initial={false}
                                    animate={{
                                        opacity: 1
                                    }}
                                >
                                    {/* Couronne arrière (Toujours présente) */}
                                    <path d="M 20 100 A 80 80 0 0 0 180 100 A 30 50 0 0 1 20 100" fill="#1e293b" />

                                    {/* Vertex (Sommet) */}
                                    <motion.ellipse
                                        cx="100" cy="130"
                                        rx="50" ry="40"
                                        fill="#1e293b"
                                        animate={{
                                            opacity: activeStage >= 4 ? (7 - activeStage) * 0.15 : 1,
                                            scale: activeStage >= 4 ? 0.8 - ((activeStage - 3) * 0.15) : 1
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Ligne Frontale et Golfes */}
                                    <motion.path
                                        d="M 30 70 Q 100 20 170 70 Q 140 100 100 60 Q 60 100 30 70"
                                        fill="#1e293b"
                                        animate={{
                                            // As stage increases, move the "Q 100 60" control point downwards (increases baldness)
                                            d: `M 30 70 Q 100 20 170 70 Q 140 ${60 + (activeStage * 15)} 100 ${40 + (activeStage * 20)} Q 60 ${60 + (activeStage * 15)} 30 70`,
                                            opacity: activeStage > 5 ? 0 : 1 - (activeStage * 0.1)
                                        }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                    />

                                    {/* Bande médiane (entre front et vertex) */}
                                    <motion.rect
                                        x="60" y="80" width="80" height="30" fill="#1e293b"
                                        animate={{
                                            opacity: activeStage >= 5 ? 0 : 1,
                                            height: activeStage >= 4 ? 10 : 30
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.g>
                            </svg>
                        </div>

                        {/* Slider Input */}
                        <div className="w-full px-4">
                            <div className="flex justify-between text-xs font-bold text-white/50 mb-4 px-1">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="7"
                                step="1"
                                value={activeStage}
                                onChange={(e) => handleStageChange(parseInt(e.target.value) as NorwoodStage)}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                            />
                            <div className="mt-4 text-center text-sm text-brand-blue font-medium">Glissez pour ajuster</div>
                        </div>

                    </div>

                    {/* Content Panel */}
                    <div className="w-full max-w-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-8 shadow-xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: `${data.color}20`, color: data.color }}>
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold uppercase tracking-wider" style={{ color: data.color }}>Niveau {data.stage}</span>
                                        <h3 className="text-2xl font-bold text-brand-navy">{data.title}</h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {data.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="text-sm text-gray-500 mb-1">Greffons estimés</div>
                                        <div className="text-xl font-bold text-brand-navy">{data.grafts}</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="text-sm text-gray-500 mb-1">Technique idéale</div>
                                        <div className="text-xl font-bold text-brand-navy">{data.technique}</div>
                                    </div>
                                </div>

                                {/* Price Comparison */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-brand-blue/10 p-4 rounded-xl border border-brand-blue/20 text-center">
                                        <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">Tunisie</div>
                                        <div className="text-2xl font-black text-brand-navy">{PRICE_TUNISIA[activeStage]}</div>
                                        <div className="text-xs text-gray-500">Tout compris</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center opacity-60">
                                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">France</div>
                                        <div className="text-2xl font-black text-gray-400 line-through">{PRICE_FRANCE[activeStage]}</div>
                                        <div className="text-xs text-gray-400">Intervention seule</div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <Button asChild className="w-full h-14 bg-brand-navy text-white hover:bg-brand-navy/90 text-lg" onClick={handleCtaClick}>
                                        <Link href={`/devis?intervention=greffe-cheveux&norwood=${activeStage}`}>
                                            Obtenir un devis exact <UserPlus className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <p className="text-center text-xs text-gray-400 mt-3">
                                        Ce simulateur est fourni à titre indicatif. Un diagnostic photo par nos chirurgiens est indispensable.
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
