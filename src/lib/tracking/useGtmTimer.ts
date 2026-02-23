'use client';

import { useEffect, useRef } from 'react';

/**
 * Pousse un event GTM quand l'utilisateur passe X secondes sur un élément visible.
 * Usage : const ref = useGtmTimer('gallery_time_spent', 30, { intervention: 'rhinoplastie' });
 */
export function useGtmTimer(
    eventName: string,
    thresholdSeconds: number,
    eventData: Record<string, unknown>
) {
    const ref = useRef<HTMLDivElement>(null);
    const startTime = useRef<number | null>(null);
    const hasFired = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startTime.current = Date.now();
                } else if (startTime.current && !hasFired.current) {
                    const elapsed = (Date.now() - startTime.current) / 1000;
                    if (elapsed >= thresholdSeconds) {
                        hasFired.current = true;
                        if (typeof window !== 'undefined' && window.dataLayer) {
                            window.dataLayer.push({
                                event: eventName,
                                time_spent_seconds: Math.round(elapsed),
                                ...eventData,
                            });
                        }
                    }
                    startTime.current = null;
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [eventName, thresholdSeconds, eventData]);

    return ref;
}
