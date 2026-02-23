"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    decimals?: number;
}

export function AnimatedCounter({
    target,
    duration = 2,
    prefix = "",
    suffix = "",
    className = "",
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const startTime = performance.now();
        const startValue = 0;

        function update(currentTime: number) {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (target - startValue) * eased;

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }, [isInView, target, duration]);

    const formatted = decimals > 0
        ? count.toFixed(decimals)
        : Math.round(count).toLocaleString("fr-FR");

    return (
        <span ref={ref} className={className}>
            {prefix}{formatted}{suffix}
        </span>
    );
}
