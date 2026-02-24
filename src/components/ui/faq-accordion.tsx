"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQPage, Question, Answer } from "schema-dts";

interface FAQAccordionProps {
    data: FAQPage | Record<string, unknown>;
    title?: string;
}

export function FAQAccordion({ data, title = "Questions Fréquentes" }: FAQAccordionProps) {
    const typedData = data as FAQPage;

    if (!typedData || !typedData.mainEntity || !Array.isArray(typedData.mainEntity)) {
        return null;
    }

    const questions = typedData.mainEntity as Question[];

    const handleValueChange = (value: string) => {
        if (!value) return; // collapsed — no tracking needed
        const index = parseInt(value.replace("item-", ""), 10);
        const question = questions[index];
        if (question && typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
                event: "faq_interaction",
                faq_question: question.name?.toString() || "",
                faq_position: index + 1,
                page_path: window.location.pathname,
            });
        }
    };

    return (
        <FadeIn>
            <div className="w-full max-w-3xl mx-auto my-12 bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
                    {title}
                </h3>
                <Accordion type="single" collapsible className="w-full" onValueChange={handleValueChange}>
                    {questions.map((item, index) => {
                        const question = item as Question;
                        const answer = question.acceptedAnswer as Answer;

                        return (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary hover:no-underline transition-colors py-4">
                                    {question.name?.toString() || ""}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                    {answer?.text?.toString() || ""}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </FadeIn>
    );
}
