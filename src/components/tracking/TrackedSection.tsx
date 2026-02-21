'use client';

import { useIntersectionEvent } from '@/hooks/useIntersectionEvent';

interface TrackedSectionProps {
    eventName: string;
    eventData: Record<string, unknown>;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function TrackedSection({ eventName, eventData, children, className, id }: TrackedSectionProps) {
    const ref = useIntersectionEvent(eventName, eventData);

    return (
        <section ref={ref} id={id} className={className}>
            {children}
        </section>
    );
}
