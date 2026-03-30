'use client';

import { useEffect, useRef } from 'react';

export default function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      time += 0.015;

      const spacing = 45;
      const cols = Math.floor(window.innerWidth / spacing) + 4;
      const rows = Math.floor(window.innerHeight / spacing) + 4;

      for (let i = -2; i < cols; i++) {
        for (let j = -2; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          // Calculate distance from center for fading and wave intensity
          const distanceX = Math.abs(x - window.innerWidth / 2);
          const distanceY = Math.abs(y - window.innerHeight / 2);
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          // Complex wave math for organic movement
          const wave1 = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 + time);
          const wave2 = Math.sin(distance * 0.003 - time * 1.5);
          const combinedWave = (wave1 + wave2);

          const offsetX = Math.sin(y * 0.01 + time) * 20 * combinedWave;
          const offsetY = Math.cos(x * 0.01 + time) * 20 * combinedWave;

          const finalX = x + offsetX;
          const finalY = y + offsetY;

          // Size variation
          const size = Math.max(0.5, (combinedWave + 1.5) * 1.2);

          // Color palette (emeralds, teals, subtle greens)
          const r = Math.floor(16 + Math.sin(x * 0.005) * 10);
          const g = Math.floor(185 + Math.cos(y * 0.005) * 40);
          const b = Math.floor(129 + Math.sin((x+y) * 0.005) * 30);
          
          // Fade out towards edges
          const maxDist = window.innerWidth / 1.2;
          const opacity = Math.max(0, 1 - (distance / maxDist));

          ctx.beginPath();
          ctx.arc(finalX, finalY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-70"
        style={{ 
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)' 
        }}
      />
    </div>
  );
}
