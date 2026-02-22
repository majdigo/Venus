import React from 'react';
import { GraphData, combineToGraph } from '@/lib/schema/graph';

interface JsonLdProps {
    data?: Record<string, unknown>;
    graph?: GraphData;
}

export function JsonLd({ data, graph }: JsonLdProps) {
    const finalData = graph ? combineToGraph(graph) : data;

    if (!finalData) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(finalData) }}
        />
    );
}
