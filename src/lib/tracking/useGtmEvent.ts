'use client';

import { useCallback, useRef } from 'react';

interface GtmEventPayload {
    event: string;
    [key: string]: unknown;
}

/**
 * Hook pour envoyer des événements GTM avec déduplication automatique.
 * Usage : const pushEvent = useGtmEvent();
 *         pushEvent({ event: 'cta_click', cta_text: 'Devis', ... });
 */
export function useGtmEvent() {
    const lastEventRef = useRef<string>('');

    const pushEvent = useCallback((payload: GtmEventPayload) => {
        // Déduplication : empêche le même event d'être pushé 2x en < 500ms
        const eventKey = `${payload.event}_${JSON.stringify(payload)}`;
        if (lastEventRef.current === eventKey) return;
        lastEventRef.current = eventKey;
        setTimeout(() => { lastEventRef.current = ''; }, 500);

        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push(payload);
        }
    }, []);

    return pushEvent;
}
