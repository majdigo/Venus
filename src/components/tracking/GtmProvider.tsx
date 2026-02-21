'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'; // Fallback for dev

// Types
interface GtmEvent {
    event: string;
    [key: string]: unknown;
}

declare global {
    interface Window {
        dataLayer: any[];
    }
}

export function GtmProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialized = useRef(false);

    // 1. Initialisation GTM + Consent Mode (une seule fois)
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // Consent Mode defaults (AVANT GTM)
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
            // gtag typically pushes the `arguments` object directly, or an array of the arguments
            window.dataLayer.push(arguments);
        }
        gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'granted',
            wait_for_update: 500,
            region: ['FR', 'BE', 'CH'],
        });
        gtag('set', 'ads_data_redaction', true);
        gtag('set', 'url_passthrough', true);

        // Script GTM (pointe vers le Server-Side GTM)
        const script = document.createElement('script');
        script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://sgtm.venus-estetika.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
        document.head.appendChild(script);

        // Extraire et stocker les UTMs initiaux
        extractAndStoreUtms();
    }, []);

    // 2. Page view enrichi à chaque navigation
    useEffect(() => {
        if (!initialized.current) return;

        const utms = getStoredUtms();
        const pageInfo = getPageInfo(pathname);

        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'page_view',
                page_path: pathname,
                page_title: document.title,
                page_category: pageInfo.category,
                page_template: pageInfo.template,
                page_intervention: pageInfo.intervention,
                page_intervention_category: pageInfo.interventionCategory,
                ...utms,
            });
        }
    }, [pathname, searchParams]);

    return <>{children}</>;
}

// Helpers pour UTM
function extractAndStoreUtms() {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const utms: Record<string, string> = {};

    utmKeys.forEach((key) => {
        const value = params.get(key);
        if (value) utms[key] = value;
    });

    if (Object.keys(utms).length > 0) {
        sessionStorage.setItem('venus_utms', JSON.stringify(utms));
    }
}

function getStoredUtms(): Record<string, string> {
    if (typeof window === 'undefined') return {};
    try {
        const stored = sessionStorage.getItem('venus_utms');
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
}

function getPageInfo(pathname: string) {
    const segments = pathname.split('/').filter(Boolean);

    if (pathname === '/') return { category: 'home', template: 'homepage', intervention: null, interventionCategory: null };
    if (pathname.startsWith('/devis')) return { category: 'devis', template: 'devis', intervention: null, interventionCategory: null };
    if (pathname.startsWith('/blog')) return { category: 'blog', template: segments.length > 1 ? 'blog_post' : 'blog_list', intervention: null, interventionCategory: null };

    if (pathname.startsWith('/interventions/')) {
        const category = segments[1] || null;      // 'visage', 'corps', 'bariatrique', etc.
        const intervention = segments[2] || null;  // 'rhinoplastie', 'sleeve-gastrique', etc.
        return {
            category: 'intervention',
            template: intervention ? 'intervention_detail' : 'intervention_category',
            intervention,
            interventionCategory: category,
        };
    }

    return { category: 'other', template: 'other', intervention: null, interventionCategory: null };
}
