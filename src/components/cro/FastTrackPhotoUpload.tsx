"use client";

import { Camera, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { useGtmEvent } from "@/lib/tracking/useGtmEvent";

interface FastTrackPhotoUploadProps {
    interventionName: string;
}

export function FastTrackPhotoUpload({ interventionName }: FastTrackPhotoUploadProps) {
    const pushGtmEvent = useGtmEvent();

    const handleWhatsAppClick = () => {
        pushGtmEvent({
            event: "fast_track_photo_click",
            intervention: interventionName,
            lead_source: "website_fast_track",
        });
    };

    // Pre-filled WhatsApp message
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par une ${interventionName}. J'aimerais vous envoyer une photo en toute confidentialité pour obtenir un pré-diagnostic médical et une estimation tarifaire rapide.`);
    const whatsappUrl = `https://wa.me/21650123456?text=${message}`;

    return (
        <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-3xl p-8 relative overflow-hidden shadow-2xl text-white my-12">
            {/* Background Decorations */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">

                {/* Visual Icon Area */}
                <div className="flex-shrink-0 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                    <Camera className="w-10 h-10 text-brand-gold" />
                </div>

                {/* Content Area */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                        L'Avis du Chirurgien en 2h (Gratuit)
                    </h3>
                    <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                        Vous n'avez pas le temps de remplir le formulaire ? Envoyez simplement 1 à 3 photos de la zone concernée ({interventionName}). Notre chirurgien vous répondra directement avec un pré-diagnostic de faisabilité et un tarif.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleWhatsAppClick}
                            className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
                        >
                            <Camera className="w-5 h-5" />
                            <span>Envoyer mes photos</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex flex-col gap-2 text-sm text-blue-200 mt-2 sm:mt-0">
                            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-gold" /> 100% Confidentiel & Sécurisé</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-gold" /> Réponse garantie sous 2h ouvrées</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
