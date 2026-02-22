"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaneTakeoff, Stethoscope, BedDouble, ShieldCheck, HeartPulse } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: <PlaneTakeoff className="w-6 h-6 text-white" />,
        title: "1. Accueil VIP à l'Aéroport",
        description: "Dès votre atterrissage à Tunis, notre chauffeur privé (véhicule de luxe Mercedes) vous attend avec une pancarte à votre nom. Vous êtes immédiatement pris en charge et conduit à votre hôtel 5 étoiles ou à la clinique selon votre heure d'arrivée.",
        image: "/images/guided-tour/vip-transfer.png",
        color: "bg-brand-navy"
    },
    {
        icon: <Stethoscope className="w-6 h-6 text-white" />,
        title: "2. Bilan & Rencontre avec le Chirurgien",
        description: "Installation dans votre chambre privée ultra-moderne à la clinique. Prise de sang, électrocardiogramme et rencontre personnalisée avec votre chirurgien et l'anesthésiste pour valider l'intervention étape par étape.",
        image: "/images/guided-tour/clinic-room.png",
        color: "bg-brand-gold"
    },
    {
        icon: <HeartPulse className="w-6 h-6 text-white" />,
        title: "3. L'Intervention Chirurgicale",
        description: "L'opération se déroule dans un bloc opératoire certifié aux normes européennes ISO. Vous êtes sous la surveillance constante de réanimateurs hautement qualifiés.",
        image: null,
        color: "bg-[#10b981]"
    },
    {
        icon: <BedDouble className="w-6 h-6 text-white" />,
        title: "4. Convalescence en Hôtel 5 Étoiles",
        description: "Après 1 à 3 nuits en clinique, vous poursuivez votre récupération dans l'un de nos hôtels partenaires de luxe (Mövenpick, Ramada Plaza). Notre infermière passe vous voir chaque jour pour le suivi post-opératoire et les pansements.",
        image: "/images/guided-tour/hotel-room.png",
        color: "bg-brand-navy"
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        title: "5. Retour & Suivi Médical 12 Mois",
        description: "Transfert vers l'aéroport avec assistance. De retour chez vous, votre conseiller médical et votre chirurgien restent disponibles en téléconsultation. Un suivi régulier est programmé à 1, 3, 6 et 12 mois.",
        image: null,
        color: "bg-[#475569]"
    }
];

export function GuidedTourTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto max-w-5xl px-4 relative z-10">

                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Déroulement Visite Guidée</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">Votre Séjour, Étape par Étape</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Nous nous occupons de tout. De votre arrivée à l'aéroport jusqu'à votre retour chez vous, vous êtes au centre de toutes nos attentions.
                    </p>
                </div>

                <div className="relative">
                    {/* Animated Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden hidden md:block">
                        <motion.div
                            className="absolute top-0 w-full bg-gradient-to-b from-brand-gold to-brand-navy"
                            style={{ height: lineHeight }}
                        />
                    </div>
                    {/* Mobile Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-200 rounded-full overflow-hidden md:hidden">
                        <motion.div
                            className="absolute top-0 w-full bg-gradient-to-b from-brand-gold to-brand-navy"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >

                                    {/* Content Container */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-2xl font-bold text-brand-navy mb-4">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Icon Marker (Center on Desktop, Left on Mobile) */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                            className={`w-12 h-12 rounded-full ${step.color} shadow-xl border-4 border-white flex items-center justify-center z-20 relative`}
                                        >
                                            {step.icon}
                                        </motion.div>
                                    </div>

                                    {/* Media Container (Image or blank for spacing) */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                                        {step.image && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.4 }}
                                                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
                                            >
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
