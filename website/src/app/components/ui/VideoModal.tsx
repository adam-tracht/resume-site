'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useVimeoThumbnail } from '@/app/hooks/useVimeoThumbnail';

type VideoModalProps = {
  videoUrl: string;
  thumbnailUrl?: string;
  title?: string;
};

export const VideoModal: React.FC<VideoModalProps> = ({
  videoUrl,
  thumbnailUrl,
  title
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement | HTMLVideoElement>(null);
  
  // Determine if the video is from YouTube or Vimeo
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const isVimeo = videoUrl.includes('vimeo.com');
  
  // Get Vimeo thumbnail automatically if it's a Vimeo video
  const { thumbnailUrl: vimeoThumbnail, isLoading } = useVimeoThumbnail(isVimeo ? videoUrl : undefined);
  
  // Use Vimeo thumbnail if available, otherwise fall back to provided thumbnailUrl
  const effectiveThumbnailUrl = vimeoThumbnail || thumbnailUrl;

  // Create embed URL if needed
  const getEmbedUrl = () => {
    if (isYouTube) {
      // Convert YouTube URL to embed format
      const videoId = videoUrl.includes('youtu.be')
        ? videoUrl.split('/').pop()
        : videoUrl.includes('v=')
          ? new URLSearchParams(videoUrl.split('?')[1]).get('v')
          : videoUrl.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (isVimeo) {
      // Convert Vimeo URL to embed format
      const videoId = videoUrl.split('/').pop()?.split('?')[0]; // Remove query params
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return videoUrl;
  };

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Stop video playback when modal is closed
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      if (videoRef.current instanceof HTMLVideoElement) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail with play button */}
      <div 
        className="relative cursor-pointer group overflow-hidden rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video relative overflow-hidden rounded-lg">
          {effectiveThumbnailUrl ? (
            <Image
              src={effectiveThumbnailUrl}
              alt={title || 'Video thumbnail'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : isLoading ? (
            <div className="w-full h-full bg-base-300 dark:bg-base-700 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="w-full h-full bg-base-300 dark:bg-base-700 flex items-center justify-center">
              <span className="text-base-500">Video Preview</span>
            </div>
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white" 
                className="w-8 h-8"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {title && (
          <div className="mt-2 text-sm font-medium">{title}</div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-10 z-50 flex items-center justify-center"
            >
              <div className="bg-white dark:bg-base-800 rounded-lg overflow-hidden w-full max-w-5xl mx-auto">
                <div className="flex justify-between items-center p-4 border-b dark:border-base-700">
                  <h3 className="font-medium">{title || 'Project Video'}</h3>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-base-200 dark:hover:bg-base-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                
                <div className="aspect-video w-full">
                  {(isYouTube || isVimeo) ? (
                    <iframe
                      ref={videoRef as React.RefObject<HTMLIFrameElement>}
                      src={getEmbedUrl()}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      ref={videoRef as React.RefObject<HTMLVideoElement>}
                      src={videoUrl}
                      className="w-full h-full"
                      controls
                      autoPlay
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
