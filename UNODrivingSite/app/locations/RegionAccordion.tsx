"use client";

import { useState } from "react";
import Link from "next/link";

type LocationsData = Record<string, string[]>;

export default function RegionAccordion({ locationsData }: { locationsData: LocationsData }) {
    const [openRegions, setOpenRegions] = useState<string[]>([]);

    const toggleRegion = (region: string) => {
        setOpenRegions((prev) =>
            prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
        );
    };

    return (
        <div className="grid md:grid-cols-2 items-start gap-6 w-full max-w-5xl mx-auto">
            {Object.entries(locationsData).map(([region, suburbs]) => {
                const isOpen = openRegions.includes(region);

                return (
                    <div key={region} className="bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                        <button
                            onClick={() => toggleRegion(region)}
                            className={`w-full p-6 flex justify-between items-center transition-colors ${isOpen ? "bg-primary/5 border-b" : "hover:bg-gray-50"
                                }`}
                        >
                            <h3 className={`font-anton text-2xl capitalize transition-colors ${isOpen ? "text-primary" : "text-gray-900"}`}>
                                {region.replace("-", " ")}
                            </h3>
                            <span className={`text-2xl text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                                +
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[350px] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
                                }`}
                        >
                            <ul className="p-6 grid grid-cols-2 sm:grid-cols-2 gap-3 bg-white">
                                {suburbs.map((suburb) => {
                                    const slug = suburb.toLowerCase().replace(/ /g, "-");
                                    return (
                                        <li key={slug}>
                                            <Link
                                                href={`/locations/${slug}/`}
                                                className="block text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-transform"
                                            >
                                                {suburb}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
