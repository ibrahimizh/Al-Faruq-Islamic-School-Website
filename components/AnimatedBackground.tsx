'use client';

import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -150, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-emerald-100/50 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-100/50 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [100, -50, 100],
          y: [-50, 100, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-blue-50/60 blur-[100px]"
      />
      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
