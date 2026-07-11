import Galaxy from './Galaxy';

export const ParticleCard = () => {
  return (
    <div 
      className="group relative w-full h-[130px] border rounded-xl overflow-hidden shadow-inner flex items-center justify-center select-none cursor-pointer transition-all duration-300"
      style={{ backgroundColor: 'var(--editor-bg)', borderColor: 'var(--border-color)' }}
    >
      <div className="absolute inset-0 w-full h-full">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.5}
          glowIntensity={0.6}
          saturation={0.0}
          hueShift={0}
          repulsionStrength={3.0}
        />
      </div>
      <div className="relative z-10 text-center font-mono text-xl md:text-3xl font-extrabold select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none flex flex-col items-center justify-center gap-2">
        <div className="text-[#f3f4f6] transition-transform duration-500 ease-out group-hover:-translate-y-1">
          Engineer by Profession.
        </div>
        <div 
          className="text-sm md:text-lg font-medium tracking-wider opacity-0 max-h-0 translate-y-4 scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:max-h-[40px] group-hover:translate-y-0 group-hover:scale-100 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]"
          style={{ color: 'var(--accent-light)' }}
        >
          Problem Solver by passion
        </div>
      </div>
    </div>
  );
};

export default ParticleCard;
