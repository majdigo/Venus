'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={`flex text-sm text-slate-500 font-medium ${className}`}>
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="hover:text-brand-blue transition-colors flex items-center">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Accueil</span>
                    </Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.name} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1 text-slate-300 flex-shrink-0" />
                            {isLast || !item.href ? (
                                <span className="text-brand-navy font-semibold" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-brand-blue transition-colors truncate max-w-[150px] sm:max-w-none">
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
