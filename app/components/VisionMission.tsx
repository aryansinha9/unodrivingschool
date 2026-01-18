"use client";

import { useState } from "react";

interface AccordionItemProps {
    title: string;
    content: string;
    borderColorClass: string;
    textColorClass: string;
    defaultOpen?: boolean;
}

function AccordionItem({
    title,
    content,
    borderColorClass,
    textColorClass,
}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-background-alt p-6 rounded-xl border-l-4 ${borderColorClass}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between group focus:outline-none"
            >
                <h3 className={`font-anton text-xl ${textColorClass} uppercase text-left`}>
                    {title}
                </h3>
                <span
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                >
                    <svg
                        className={`w-6 h-6 ${textColorClass}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="italic text-gray-700 font-roboto-slab">{content}</p>
            </div>
        </div>
    );
}

export default function VisionMission() {
    return (
        <div className="space-y-4 mt-6">
            <AccordionItem
                title="Our Vision"
                content="Uno driving school's vision is to empower individuals with the skills and mindset to become responsible, confident, and lifelong safe drivers."
                borderColorClass="border-primary"
                textColorClass="text-primary"
            />
            <AccordionItem
                title="Our Mission"
                content="Uno Driving School's mission: Empower responsible, confident, lifelong safe drivers through experienced instructors, comprehensive training, and a commitment to road safety."
                borderColorClass="border-text-main"
                textColorClass="text-text-main"
            />
        </div>
    );
}
