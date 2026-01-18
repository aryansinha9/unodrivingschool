"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
    videoId: string;
    thumbnailUrl: string;
    title: string;
}

export default function VideoPlayer({ videoId, thumbnailUrl, title }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <div
            className="absolute inset-0 cursor-pointer group"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
        >
            <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
