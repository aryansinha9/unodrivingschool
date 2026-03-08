"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { locations } from "@/app/data/locations";

type SuburbOption = {
    name: string;
    region: string;
    slug: string;
};

export default function LocationSearch() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<SuburbOption[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Flatten and prepare suburbs list
    const allSuburbs: SuburbOption[] = Object.entries(locations).flatMap(([region, suburbs]) =>
        suburbs.map((suburb) => ({
            name: suburb,
            region: region,
            // Create slug: lowercase, replace spaces with hyphens, remove parentheses
            slug: suburb.toLowerCase().replace(/ /g, "-").replace(/[()]/g, ""),
        }))
    );

    useEffect(() => {
        if (query.trim().length > 0) {
            const normalizedQuery = query.toLowerCase();
            const matches = allSuburbs
                .filter((s) => s.name.toLowerCase().includes(normalizedQuery))
                .slice(0, 8); // Limit to 8 suggestions
            setSuggestions(matches);
            setIsOpen(true);
        } else {
            setSuggestions([]);
            setIsOpen(false);
        }
    }, [query]);

    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const handleSelect = (option: SuburbOption) => {
        setQuery(option.name);
        setIsOpen(false);
        router.push(`/locations/${option.region}/${option.slug}`);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // If there's an exact match or first suggestion, use it
        if (suggestions.length > 0) {
            handleSelect(suggestions[0]);
        }
    };

    return (
        <div ref={wrapperRef} className="w-full max-w-md relative z-30">
            <form onSubmit={handleFormSubmit} className="relative">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Enter your suburb..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => {
                            if (query.trim().length > 0) setIsOpen(true);
                        }}
                        className="w-full pl-5 pr-12 py-4 rounded-full border-2 border-transparent bg-white focus:border-primary shadow-lg text-gray-800 placeholder-gray-500 outline-none transition-all text-lg font-roboto"
                        aria-label="Search suburb"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 p-2 bg-primary text-white rounded-full hover:bg-green-600 transition-colors shadow-md"
                        aria-label="Search"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {isOpen && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 max-h-80 overflow-y-auto w-full">
                        <ul>
                            {suggestions.map((option, index) => (
                                <li key={`${option.region}-${option.slug}-${index}`}>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className="w-full text-left px-5 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between group border-b border-gray-50 last:border-0"
                                    >
                                        <span className="font-roboto text-gray-700 group-hover:text-primary transition-colors">
                                            {option.name}
                                        </span>
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider bg-gray-100 px-2 py-1 rounded group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                            {option.region.replace(/-/g, " ")}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {isOpen && query.length > 0 && suggestions.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl p-4 text-center border border-gray-100 text-gray-500">
                        No suburbs found.
                    </div>
                )}
            </form>
        </div>
    );
}
