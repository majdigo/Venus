"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
    beforeImageSrc: string;
    afterImageSrc: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
}

export function BeforeAfterSlider({
    beforeImageSrc,
    afterImageSrc,
    beforeLabel = "Avant",
    afterLabel = "Après",
    className,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn("relative w-full overflow-hidden rounded-2xl aspect-[4/3] group touch-pan-y shadow-lg border border-border/50 bg-slate-100", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* After Image (Background) */}
            <Image
                src={afterImageSrc}
                alt={afterLabel}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={cn(
                "absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold z-10 shadow-md transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
            )}>
                {afterLabel}
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div
                className="absolute inset-0 z-20 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImageSrc}
                    alt={beforeLabel}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={cn(
                    "absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-navy px-3 py-1.5 rounded-full text-xs font-bold shadow-md transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
                )}>
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Line & Handle */}
            <div
                className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-100 group-hover:scale-110 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-navy">
                        <path d="m15 18 6-6-6-6" /><path d="m9 18-6-6 6-6" />
                    </svg>
                </div>
            </div>

            {/* Range Input Overlay */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 z-40 w-full h-full opacity-0 cursor-ew-resize m-0 p-0"
                aria-label="Contrôle du curseur avant/après"
            />
        </div>
    );
}
