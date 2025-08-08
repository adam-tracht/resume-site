'use client';

import { useState, useEffect } from 'react';

// Extract video ID from Vimeo URL
const extractVimeoId = (url: string): string | null => {
  const match = url.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
  return match ? match[1] : null;
};

// Custom hook to fetch Vimeo thumbnail
export const useVimeoThumbnail = (videoUrl?: string) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!videoUrl || !videoUrl.includes('vimeo.com')) {
      setThumbnailUrl(null);
      return;
    }

    const videoId = extractVimeoId(videoUrl);
    if (!videoId) {
      setError('Invalid Vimeo URL');
      return;
    }

    setIsLoading(true);
    setError(null);

    // Fetch thumbnail from Vimeo oEmbed API
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}&width=640`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch thumbnail');
        }
        
        const data = await response.json();
        if (data.thumbnail_url) {
          setThumbnailUrl(data.thumbnail_url);
        } else {
          throw new Error('No thumbnail found');
        }
      } catch (err) {
        console.warn('Failed to fetch Vimeo thumbnail:', err);
        setError('Failed to load thumbnail');
        // Fallback: construct thumbnail URL directly using video ID
        setThumbnailUrl(`https://vumbnail.com/${videoId}.jpg`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThumbnail();
  }, [videoUrl]);

  return { thumbnailUrl, isLoading, error };
};
