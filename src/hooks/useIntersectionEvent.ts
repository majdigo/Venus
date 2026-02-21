'use client';

import { useEffect, useRef } from 'react';

/**
 * Pousse un event GTM quand un élément entre dans le viewport.
 * Usage : const ref = useIntersectionEvent('price_table_view', { intervention: 'rhinoplastie' });
 *         <div ref={ref}>...</div>
 */
export function useIntersectionEvent(
    eventName: string,
    eventData: Record<string, unknown>,
    options: { threshold?: number; triggerOnce?: boolean } = {}
) {
    const { threshold = 0.5, triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const hasFired = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && (!triggerOnce || !hasFired.current)) {
                    hasFired.current = true;

                    if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                            event: eventName,
                            ...eventData,
                        });
                    }
                }
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [eventName, eventData, threshold, triggerOnce]);

    return ref;
}
