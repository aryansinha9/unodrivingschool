"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar if scrolling up or at the very top
            // Hide navbar if scrolling down and past a threshold (e.g., 100px)
            if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-background-main shadow-sm px-6 py-4 flex items-center justify-between transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <Link href="/" className="ml-8">
                <div className="relative h-24 w-56 md:w-72">
                    <Image
                        src="/UNO-logo-header-v2.png"
                        alt="UNO Driving School Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </Link>
            <nav className="hidden md:flex gap-6 font-roboto font-medium text-text-main">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                <Link href="/prices" className="hover:text-primary transition-colors">Prices</Link>
                <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                <Link href="/photo-gallery" className="hover:text-primary transition-colors">Gallery</Link>
                <Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <Link href="/prices" className="bg-primary text-white font-anton uppercase px-6 py-2 rounded-full hover:bg-green-500 transition-colors shadow-lg">
                Book Now
            </Link>
        </header>
    );
}
