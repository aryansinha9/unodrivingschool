"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "uno_booking_notice_dismissed";

export default function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (!dismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(STORAGE_KEY, "true");
    };

    if (!isVisible) return null;

    return (
        <div
            className="announcement-banner w-full bg-amber-50 border-b border-amber-200 px-4 py-3 relative z-[60]"
            role="alert"
            aria-live="polite"
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 pr-8">
                {/* Text content */}
                <div className="flex-1 min-w-0">
                    <p className="font-anton text-sm uppercase tracking-wide text-amber-900">
                        Website Update Notice
                    </p>
                    <p className="font-roboto text-sm text-amber-800 mt-0.5 leading-snug">
                        We&apos;re currently upgrading our booking system to improve your experience.
                        In the meantime, all driving lesson bookings can be made via our partner site.{" "}
                        <span className="text-amber-700 italic">
                            We appreciate your patience and look forward to assisting you on your driving journey.
                        </span>
                    </p>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0 self-center">
                    <a
                        href="https://mylifedrivingschool.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-anton uppercase text-xs px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-sm whitespace-nowrap"
                        id="announcement-book-now-btn"
                    >
                        👉 Book via MyLife Driving School
                    </a>
                </div>
            </div>

            {/* Dismiss button */}
            <button
                onClick={handleDismiss}
                className="absolute top-1/2 -translate-y-1/2 right-3 p-1.5 rounded-full text-amber-600 hover:text-amber-900 hover:bg-amber-100 transition-colors"
                aria-label="Dismiss update notice"
                id="announcement-dismiss-btn"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <style>{`
                .announcement-banner {
                    animation: slideDown 0.4s ease-out forwards;
                }
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
