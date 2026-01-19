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

            // FIX: If the mobile menu is open, we do NOT want the navbar to hide
            if (isMobileMenuOpen) {
                setIsVisible(true);
                return;
            }

            if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileMenuOpen]); // Added dependency here

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`sticky top-0 z-50 bg-background-main shadow-sm px-6 py-4 transition-transform duration-300 ease-in-out ${isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="ml-0 md:ml-8 z-[101]">
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
                <button
                    className="md:hidden z-[101] relative p-2 text-text-main focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Dim Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[99] md:hidden"
                    onClick={toggleMobileMenu}
                ></div>
            )}

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-background-main z-[100] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Scrollable Container for Links */}
                <nav className="flex flex-col items-center gap-6 font-anton text-2xl text-text-main uppercase tracking-wide pt-32 pb-10 overflow-y-auto">
                    <Link href="/" onClick={toggleMobileMenu} className="hover:text-primary">Home</Link>
                    <Link href="/about-us" onClick={toggleMobileMenu} className="hover:text-primary">About Us</Link>
                    <Link href="/prices" onClick={toggleMobileMenu} className="hover:text-primary">Prices</Link>
                    <Link href="/locations" onClick={toggleMobileMenu} className="hover:text-primary">Locations</Link>
                    <Link href="/photo-gallery" onClick={toggleMobileMenu} className="hover:text-primary">Gallery</Link>
                    <Link href="/faqs" onClick={toggleMobileMenu} className="hover:text-primary">FAQs</Link>
                    <Link href="/blog" onClick={toggleMobileMenu} className="hover:text-primary">Blog</Link>
                    <Link href="/contact-us" onClick={toggleMobileMenu} className="hover:text-primary">Contact</Link>

                    <Link
                        href="/prices"
                        onClick={toggleMobileMenu}
                        className="bg-primary text-white font-anton uppercase px-8 py-3 rounded-full hover:bg-green-500 shadow-lg text-xl mt-4"
                    >
                        Book Now
                    </Link>
                </nav>
            </div>
        </header>
    );
}
