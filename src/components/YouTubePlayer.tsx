"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  thumbnail?: string;
}

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({
  videoId,
  thumbnail,
}: YouTubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const initPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;

    const el = document.createElement("div");
    el.id = "yt-player-" + videoId;
    containerRef.current.appendChild(el);

    playerRef.current = new window.YT.Player(el.id, {
      videoId,
      playerVars: {
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        iv_load_policy: 3,
        disablekb: 1,
        playsinline: 1,
      },
      events: {
        onReady: () => setIsReady(true),
        onStateChange: (e: YT.OnStateChangeEvent) => {
          if (e.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
            setHasStarted(true);
          } else if (
            e.data === window.YT.PlayerState.PAUSED ||
            e.data === window.YT.PlayerState.ENDED
          ) {
            setIsPlaying(false);
            setShowButton(true);
          }
        },
      },
    });
  }, [videoId]);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );

    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      initPlayer();
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [initPlayer]);

  const togglePlay = useCallback(() => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setShowButton(true);
    } else {
      playerRef.current.playVideo();
      setShowButton(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setShowButton(false), 1500);
    }
  }, [isPlaying, isReady]);

  const handleOverlayClick = useCallback(() => {
    if (isPlaying) {
      setShowButton(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        if (playerRef.current) {
          const state = playerRef.current.getPlayerState();
          if (state === window.YT.PlayerState.PLAYING) {
            setShowButton(false);
          }
        }
      }, 2000);
    }
    togglePlay();
  }, [isPlaying, togglePlay]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gold/20">
      {/* YouTube embed container */}
      <div
        ref={containerRef}
        className="absolute inset-0 [&>div]:!w-full [&>div]:!h-full [&>iframe]:!w-full [&>iframe]:!h-full"
      />

      {/* Thumbnail overlay — shown until first play */}
      {thumbnail && !hasStarted && (
        <div className="absolute inset-0 z-[5]">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Clickable overlay for play/pause */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleOverlayClick}
      />

      {/* Play/Pause button */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-16 w-16 rounded-full border-2 border-gold/60 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          {isPlaying ? (
            <Pause className="h-7 w-7 text-gold" />
          ) : (
            <Play className="h-7 w-7 text-gold ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
}
