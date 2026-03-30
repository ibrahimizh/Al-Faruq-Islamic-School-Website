'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [150, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="relative w-full max-w-[90rem] mx-auto px-4 md:px-8 py-24 pb-48" ref={containerRef}>
      <motion.div 
        style={{ scale, y }}
        className="relative w-full aspect-[16/10] md:aspect-video bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-none shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
           <img 
             src="https://picsum.photos/seed/islamicschool/1920/1080" 
             alt="Campus Tour" 
             className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
           />
           {/* Overlay gradient to make it look more like the dark IDE in the video */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        {/* Custom Cursor */}
        {isHovered && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium pointer-events-none shadow-xl"
            animate={{
              x: mousePos.x - 70, // offset to center the cursor
              y: mousePos.y - 24,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 28, 
              mass: 0.5 
            }}
          >
            <Play className="w-4 h-4 fill-black" />
            Watch Tour
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
