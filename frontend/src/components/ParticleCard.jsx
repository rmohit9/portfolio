import { useEffect, useRef } from 'react';

export const ParticleCard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = 180;
    
    let particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    let animId;
    const run = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(run);
    };
    run();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[180px] bg-[#0c0d12]/95 border border-[#2e303a] rounded-xl overflow-hidden shadow-inner flex items-center justify-center select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 text-center font-mono text-xl md:text-3xl font-extrabold text-[#f3f4f6] tracking-wide select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        Engineer by profession.
      </div>
    </div>
  );
};
export default ParticleCard;
