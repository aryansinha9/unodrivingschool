"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomepagePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage to see if the popup has been seen
        const hasSeenPopup = localStorage.getItem("uno_has_seen_popup");
        if (!hasSeenPopup) {
            // Use a slight delay to ensure smooth entrance
            const timer = setTimeout(() => setIsVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Set flag in local storage
        localStorage.setItem("uno_has_seen_popup", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300">
            <div className="relative max-w-md w-full animate-in fade-in zoom-in duration-300">
                <button
                    onClick={handleClose}
                    className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg z-10"
                    aria-label="Close popup"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
                    <Image
                        src="/promo-popup.png"
                        alt="Special Offer"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
