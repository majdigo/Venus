'use client';

import Link from 'next/link';
import { useGtmEvent } from '@/lib/tracking/useGtmEvent';

interface TrackedLinkProps extends React.ComponentProps<typeof Link> {
    ctaText: string;
    ctaLocation: string;
    ctaType?: 'primary' | 'secondary' | 'whatsapp' | 'phone';
}

export function TrackedLink({ ctaText, ctaLocation, ctaType = 'primary', href, onClick, children, ...props }: TrackedLinkProps) {
    const pushGtmEvent = useGtmEvent();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        pushGtmEvent({
            event: 'cta_click',
            cta_text: ctaText,
            cta_location: ctaLocation,
            cta_destination: href.toString(),
            cta_type: ctaType,
            page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
        });

        if (onClick) onClick(e);
    };

    return (
        <Link href={href} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}
