'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [150, 0]);

  useEffect(() => {
    // Force autoplay and muted to ensure it plays in all browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <div className="relative w-full max-w-[90rem] mx-auto px-4 md:px-8 py-24 pb-48" ref={containerRef}>
      <motion.div 
        style={{ scale, y }}
        className="relative w-full aspect-[16/10] md:aspect-video bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
      >
        {/* Video Element */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
           <video 
             ref={videoRef}
             src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-4253-large.mp4" 
             autoPlay
             loop
             muted
             playsInline
             controls
             className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
           />
           {/* Overlay gradient to make it look more like the dark IDE in the video */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
