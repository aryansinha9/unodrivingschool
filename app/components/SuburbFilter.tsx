"use client";

import { useState } from "react";
import Link from "next/link";

interface SuburbFilterProps {
    suburbs: string[];
    region: string;
}

export default function SuburbFilter({ suburbs, region }: SuburbFilterProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSuburbs = suburbs.filter((suburb) =>
        suburb.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="max-w-md">
                <input
                    type="text"
                    placeholder="Search for your suburb..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                />
            </div>

            {filteredSuburbs.length > 0 ? (
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredSuburbs.map((suburb) => {
                        const suburbSlug = suburb.toLowerCase().replace(/ /g, "-");
                        return (
                            <Link
                                key={suburb}
                                href={`/locations/${region}/${suburbSlug}`}
                                className="block p-4 border rounded hover:border-primary hover:text-primary transition-colors text-lg bg-white shadow-sm hover:shadow-md"
                            >
                                {suburb}
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <p className="text-gray-500 text-lg">
                    No suburbs found matching "{searchTerm}". Please try a different search term.
                </p>
            )}
        </div>
    );
}
