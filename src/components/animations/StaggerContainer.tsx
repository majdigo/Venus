'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    delayChildren?: number;
    className?: string;
    viewport?: { once?: boolean; margin?: string };
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    delayChildren = 0,
    className = '',
    viewport = { once: true, margin: '-50px' }
}: StaggerContainerProps) {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren,
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
            }
        }
    };

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    );
}
