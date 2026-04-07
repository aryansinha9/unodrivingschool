'use client';

import { useState } from 'react';
import VideoModal from '@/app/components/VideoModal';

interface HeroPlayButtonProps {
  videoId: string;
}

/**
 * Tiny client component that owns the open/close state for the hero video modal.
 * Extracted so that app/page.tsx can remain a Server Component.
 */
export default function HeroPlayButton({ videoId }: HeroPlayButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute z-20 w-20 h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group animate-pulse hover:animate-none cursor-pointer"
        aria-label="Play Video"
      >
        <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      <VideoModal
        videoId={videoId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
