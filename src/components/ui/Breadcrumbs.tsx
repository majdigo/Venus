import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    if (items.length === 0) return null;

    return (
        <nav
            aria-label="Fil d'Ariane"
            className="bg-slate-50 border-b border-slate-200 py-3 px-4"
        >
            <div className="container mx-auto max-w-7xl">
                <ol className="flex items-center flex-wrap gap-1 text-xs">
                    <li className="flex items-center">
                        <Link
                            href="/"
                            className="text-slate-500 hover:text-brand-blue transition-colors flex items-center gap-1"
                        >
                            <Home className="w-3.5 h-3.5" />
                            <span className="sr-only sm:not-sr-only">Accueil</span>
                        </Link>
                    </li>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <li key={item.href} className="flex items-center">
                                <ChevronRight className="w-3 h-3 text-slate-300 mx-1 shrink-0" />
                                {isLast ? (
                                    <span className="text-slate-700 font-medium truncate max-w-[200px] sm:max-w-none">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-slate-500 hover:text-brand-blue transition-colors truncate max-w-[150px] sm:max-w-none"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
