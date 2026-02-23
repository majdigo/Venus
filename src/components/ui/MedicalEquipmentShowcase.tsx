"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Microscope, Zap, Droplet } from "lucide-react";

interface Equipment {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    features: string[];
}

const equipmentList: Equipment[] = [
    {
        id: "vaser",
        name: "VASER Lipo® HD",
        description: "Emulsification des graisses par ultrasons. Permet de sculpter la silhouette (Lipo VASER HD) avec une précision extrême sans léser les tissus (vaisseaux, nerfs) environnants.",
        icon: Zap,
        features: ["Rétraction cutanée maximale", "Suites opératoires plus douces", "Sculpture musculaire (Abdos 3D)"]
    },
    {
        id: "puregraft",
        name: "Système PureGraft™",
        description: "Technologie de filtration en circuit fermé pour la purification de la graisse (BBL, Lipofilling mammaire). Élimine les débris cellulaires et l'huile pour une prise de greffe optimale.",
        icon: Droplet,
        features: ["Taux de survie de la graisse > 80%", "Risque d'infection quasi-nul", "Volume parfaitement homogène"]
    },
    {
        id: "piezo",
        name: "PiezoTome®",
        description: "Moteur à ultrasons utilisé pour la Rhinoplastie Ultrasonique. Permet de remodeler les os du nez avec une douceur infinie, sans casser l'os à l'aveugle avec un marteau.",
        icon: Activity,
        features: ["Zéro ecchymose (bleus)", "Précision millimétrique", "Reprise sociale dès 5 jours"]
    },
    {
        id: "choi",
        name: "Implantateur de Choi (DHI)",
        description: "Stylo chirurgical utilisé en greffe de cheveux DHI (Direct Hair Implantation). Permet d'implanter le greffon directement dans le cuir chevelu en contrôlant l'angle et la profondeur.",
        icon: Microscope,
        features: ["Densité maximale", "Aucune cicatrice visible (Zero-scar)", "Repousse naturelle garantie"]
    }
];

export function MedicalEquipmentShowcase() {
    const [activeId, setActiveId] = useState<string>(equipmentList[0].id);

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Premium Standard</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Plateau Technique de Pointe
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        L'excellence de nos chirurgiens est décuplée par l'utilisation exclusive du meilleur matériel médical mondial, garantissant une sécurité absolue et des résultats parfaits.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Selectors */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {equipmentList.map((item) => {
                            const isActive = activeId === item.id;
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`relative p-6 rounded-2xl border text-left transition-all duration-300 ${isActive
                                            ? 'bg-white/10 border-brand-blue/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeBorder"
                                            className="absolute inset-0 border-2 border-brand-blue rounded-2xl"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`p-3 rounded-xl ${isActive ? 'bg-brand-blue text-brand-navy' : 'bg-white/10 text-brand-blue'}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-white/80'}`}>
                                            {item.name}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Display Area */}
                    <div className="lg:col-span-7 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl min-h-[400px] flex flex-col justify-center relative overflow-hidden">

                        <AnimatePresence mode="wait">
                            {equipmentList.map((item) => {
                                if (item.id !== activeId) return null;

                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10"
                                    >
                                        <div className="w-16 h-16 bg-brand-blue/20 flex items-center justify-center rounded-2xl mb-8">
                                            <Icon className="w-8 h-8 text-brand-blue" />
                                        </div>

                                        <h3 className="text-3xl font-bold font-heading mb-6">{item.name}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                                            {item.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="text-brand-blue font-semibold uppercase tracking-wider text-sm mb-4">Majeurs bénéfices pour le patient</h4>
                                            {item.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                                                        <div className="w-2 h-2 rounded-full bg-brand-blue" />
                                                    </div>
                                                    <span className="text-white font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {/* Background Giant Abstract Icon */}
                        <AnimatePresence mode="wait">
                            {equipmentList.map((item) => {
                                if (item.id !== activeId) return null;
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={`bg-${item.id}`}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute -bottom-20 -right-20 text-white/[0.03] z-0 pointer-events-none"
                                    >
                                        <Icon className="w-96 h-96" />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </section>
    );
}
