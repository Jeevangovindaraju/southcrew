'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


export default function HeroSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Try to auto‑play on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => {
            // Autoplay prevented—leave muted until user toggles
            setPlaying(false);
          });
      }
    }
  }, []);

  function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Video or gradient background... */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Audio Element */}
      <audio ref={audioRef} src="/hero-music.mp3" loop />

      {/* Audio Toggle Button */}
      <button
        onClick={toggleAudio}
        className="absolute top-4 right-4 z-20 p-2 bg-white/50 rounded-full hover:bg-white"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '🔊' : '🔇'}
      </button>

      {/* Foreground content */}
      <motion.div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-extrabold text-white mb-4">
          Threads that Speak South
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Oversized streetwear redefined with South Indian soul.
        </p>
      </motion.div>

      {/* Hero image */}
      <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        
      </motion.div>
    </section>
  );
}
