"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // Close mobile menu when route changes (optional, but good UX if using Next.js Link properly)
    // For now, simpler to just add onClick to Links.

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`sticky top-0 z-50 bg-background-main shadow-sm px-6 py-4 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="ml-0 md:ml-8 z-50">
                    <div className="relative h-16 w-40 md:h-24 md:w-72">
                        <Image
                            src="/UNO-logo-header-v2.png"
                            alt="UNO Driving School Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 font-roboto font-medium text-text-main items-center">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/prices" className="hover:text-primary transition-colors">Prices</Link>
                    <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                    <Link href="/photo-gallery" className="hover:text-primary transition-colors">Gallery</Link>
                    <Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link>

                    <Link href="/prices" className="bg-primary text-white font-anton uppercase px-6 py-2 rounded-full hover:bg-green-500 transition-colors shadow-lg ml-4">
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Hamburger Button */}
                <label className="hamburger md:hidden z-50">
                    <input
                        type="checkbox"
                        checked={isMobileMenuOpen}
                        onChange={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>

            {/* Mobile Navigation Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-background-main z-40 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-center gap-6 font-anton text-2xl text-text-main uppercase tracking-wide">
                    <Link href="/" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/about-us" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/prices" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Prices</Link>
                    <Link href="/locations" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Locations</Link>
                    <Link href="/photo-gallery" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Gallery</Link>
                    <Link href="/faqs" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">FAQs</Link>
                    <Link href="/blog" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contact-us" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Contact</Link>
                </nav>
                <Link
                    href="/prices"
                    onClick={toggleMobileMenu}
                    className="bg-primary text-white font-anton uppercase px-8 py-3 rounded-full hover:bg-green-500 transition-colors shadow-lg text-xl"
                >
                    Book Now
                </Link>
            </div>
        </header>
    );
}
