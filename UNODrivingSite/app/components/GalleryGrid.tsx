"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

// Replaced placeholder images with user-provided images
const GALLERY_IMAGES = [
    { id: 1, src: "/gallery/gallery-1.jpg", alt: "Happy student with P plates" },
    { id: 2, src: "/gallery/gallery-2.jpg", alt: "Student passing driving test" },
    { id: 3, src: "/gallery/gallery-3.jpg", alt: "Successful driving test result" },
    { id: 4, src: "/gallery/gallery-4.jpg", alt: "Passed driving test celebration" },
    { id: 5, src: "/gallery/gallery-5.jpg", alt: "New P plater posing with car" },
    { id: 6, src: "/gallery/gallery-6.jpg", alt: "Happy student with P plates" },
    { id: 7, src: "/gallery/gallery-7.jpg", alt: "Student passing driving test" },
    { id: 8, src: "/gallery/gallery-8.jpg", alt: "Successful driving test result" },
    { id: 9, src: "/gallery/gallery-9.jpg", alt: "Passed driving test celebration" },
    { id: 10, src: "/gallery/gallery-10.jpg", alt: "New P plater posing with car" },
    { id: 11, src: "/gallery/gallery-11.jpg", alt: "Happy student with P plates" },
    { id: 12, src: "/gallery/gallery-12.jpg", alt: "Student passing driving test" },
    { id: 13, src: "/gallery/gallery-13.jpg", alt: "Successful driving test result" },
    { id: 14, src: "/gallery/gallery-14.jpg", alt: "Passed driving test celebration" },
    { id: 15, src: "/gallery/gallery-15.jpg", alt: "New P plater posing with car" },
    { id: 16, src: "/gallery/gallery-16.jpg", alt: "Happy student with P plates" },
    { id: 17, src: "/gallery/gallery-17.jpg", alt: "Student passing driving test" },
    { id: 18, src: "/gallery/gallery-18.jpg", alt: "Successful driving test result" },
    { id: 19, src: "/gallery/gallery-19.jpg", alt: "Passed driving test celebration" },
    { id: 20, src: "/gallery/gallery-20.jpg", alt: "New P plater posing with car" },
    { id: 21, src: "/gallery/gallery-21.jpg", alt: "Happy student with P plates" },
    { id: 22, src: "/gallery/gallery-22.jpg", alt: "Student passing driving test" },
    { id: 23, src: "/gallery/gallery-23.jpg", alt: "Successful driving test result" },
    { id: 24, src: "/gallery/gallery-24.jpg", alt: "Passed driving test celebration" },
    { id: 25, src: "/gallery/gallery-25.jpg", alt: "New P plater posing with car" },
    { id: 26, src: "/gallery/gallery-26.jpg", alt: "Happy student with P plates" },
    { id: 27, src: "/gallery/gallery-27.jpg", alt: "Student passing driving test" },
    { id: 28, src: "/gallery/gallery-28.jpg", alt: "Successful driving test result" },
];

export default function GalleryGrid() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        document.body.style.overflow = "hidden"; // Prevent scrolling when open
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    }, [lightboxIndex]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    }, [lightboxIndex]);

    // Handle keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, nextImage, prevImage]);

    return (
        <>
            {/* Grid Layout */}
            {/* Desktop: 5-6 cols, Tablet: 3-4 cols, Mobile: 2 cols, Small Mobile: 1 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                {GALLERY_IMAGES.map((image, index) => (
                    <div
                        key={image.id}
                        className="aspect-square relative cursor-pointer group overflow-hidden bg-gray-100 dark:bg-gray-800"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                        />
                        {/* Hover overlay hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                ))}
            </div>

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition w-10 h-10 flex items-center justify-center"
                        aria-label="Close lightbox"
                    >
                        &times;
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors hidden sm:block"
                        aria-label="Previous image"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors hidden sm:block"
                        aria-label="Next image"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    {/* Main Image */}
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3] sm:aspect-video"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image itself
                    >
                        <Image
                            src={GALLERY_IMAGES[lightboxIndex].src}
                            alt={GALLERY_IMAGES[lightboxIndex].alt}
                            fill
                            className="object-contain"
                            priority
                            sizes="90vw"
                        />

                        {/* Mobile Nav Overlay (invisible but clickable areas) */}
                        <div className="absolute inset-y-0 left-0 w-1/4 sm:hidden z-10" onClick={prevImage}></div>
                        <div className="absolute inset-y-0 right-0 w-1/4 sm:hidden z-10" onClick={nextImage}></div>
                    </div>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-roboto text-sm">
                        {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                    </div>
                </div>
            )}
        </>
    );
}
