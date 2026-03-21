import React from 'react';

interface SuburbMapSectionProps {
    suburbName: string;
}

export default function SuburbMapSection({ suburbName }: SuburbMapSectionProps) {
    const encodedSuburb = suburbName.replace(/\s+/g, '+');
    const mapUrl = `https://maps.google.com/maps?q=${encodedSuburb},+QLD,+Australia&output=embed&z=14`;

    return (
        <section className="bg-blue-50 py-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="font-anton text-3xl uppercase mb-10 text-text-main text-center">
                    Suburb Location
                </h2>
                <div className="w-full">
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${suburbName}`}
                        className="rounded-2xl shadow-lg w-full"
                    />
                </div>
            </div>
        </section>
    );
}
