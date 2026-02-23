'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const MILESTONES = [25, 50, 75, 100];

/**
 * Pousse un event 'scroll_depth' à chaque milestone (25/50/75/100%).
 * Se reset à chaque changement de page.
 */
export function useScrollDepth(pageCategory: string) {
    const pathname = usePathname();
    const firedRef = useRef<Set<number>>(new Set());

    useEffect(() => {
        firedRef.current = new Set();

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return;

            const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

            MILESTONES.forEach((milestone) => {
                if (scrollPercent >= milestone && !firedRef.current.has(milestone)) {
                    firedRef.current.add(milestone);
                    if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                            event: 'scroll_depth',
                            scroll_percentage: milestone,
                            page_path: pathname,
                            page_category: pageCategory,
                        });
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, pageCategory]);
}
