import React from 'react';
import ParticleCard from '../ParticleCard';
import { ConcentricOrbitalChart, AI_TRACKS_DATA, TECH_TRACKS_DATA } from '../ConcentricOrbitalChart';
import FuzzyText from '../FuzzyText';

export const HomeView = ({ handleFileClick }) => {
  return (
    <div className="space-y-8 animate-fadeIn md:max-w-4xl mx-auto flex flex-col items-center w-full">
      {/* Particle card - relocated to the very top */}
      <div className="w-full max-w-2xl mx-auto reveal-item">
        <ParticleCard />
      </div>

      {/* Profile Header Details block */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-start space-y-4 select-none px-4 md:px-0">

        {/* Badges row */}
        <div className="flex flex-wrap gap-3 items-center justify-between select-none w-full pl-2 pr-2 md:pr-0 reveal-item delay-150">
          <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-xs font-mono text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> FullStack Engineer
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-xs font-mono text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> AI Engineering
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-xs font-mono text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> Data Engineer
          </span>
          <span 
            className="flex items-center gap-1.5 px-3.5 py-1 border rounded-full text-xs font-mono font-semibold"
            style={{ 
              color: 'var(--accent-light)', 
              borderColor: 'var(--accent-light)', 
              backgroundColor: 'rgba(255, 255, 255, 0.02)' 
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> @ PartexAI
          </span>
        </div>

        {/* Name and Welcome Message */}
        <div className="w-full text-left space-y-8 pl-2 reveal-item delay-300">
          <span className="text-[12px] font-mono text-[#6a9955] block font-semibold tracking-wider pt-4">// hello world !! Welcome to my portfolio</span>
          <FuzzyText 
            fontSize="clamp(1.2rem, 3.5vw, 2.5rem)" 
            fontWeight={900} 
            color="#f3f4f6"
            baseIntensity={0.15}
            hoverIntensity={0.5}
            clickEffect={true}
            letterSpacing={5}
            stroke={true}
            strokeWidth={1.5}
            className="uppercase select-none leading-none tracking-widest cursor-pointer font-sans -ml-[45px]"
          >
            Mohit Raut
          </FuzzyText>
        </div>

        {/* Comment bottom */}
        <div className="text-xs font-mono text-[#6a9955] pl-2 font-semibold select-none leading-none pt-4 reveal-item delay-450">
          // Building intelligent and scalable AI Solutions
        </div>

        {/* Customized Intro Paragraph */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans max-w-2xl w-full pl-2 pr-2 md:pr-0 select-text text-justify reveal-item delay-525">
          I live at the crossroads of <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>AI/ML Engineering</span>, <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>Data Science</span>, and <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>Python development</span>. I build smart models, deploy reliable data pipelines, and develop scalable backend architectures that are efficient, secure, and production-ready.
        </p>

        {/* Tab Navigation buttons */}
        <div className="flex flex-wrap gap-4 justify-start pl-2 mt-2 w-full reveal-item delay-600">
          <button 
            className="flex items-center gap-2 px-5 py-2.5 border rounded-lg font-semibold cursor-pointer transition-all duration-200 shadow-md text-xs font-mono font-bold hover:brightness-110" 
            style={{ 
              backgroundColor: 'var(--accent-light)', 
              color: 'var(--editor-bg, #0d1117)', 
              borderColor: 'var(--accent-light)' 
            }}
            onClick={() => handleFileClick('projects.js')}
          >
            📁 Projects
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2e303a] hover:border-gray-500 bg-transparent text-gray-300 font-semibold cursor-pointer transition-colors text-xs font-mono font-bold" onClick={() => handleFileClick('about.html')}>
            👤 About Me
          </button>
          <button 
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border bg-transparent font-semibold cursor-pointer transition-all duration-200 text-xs font-mono font-bold hover:brightness-110" 
            style={{ 
              borderColor: 'var(--accent-light)', 
              color: 'var(--accent-light)' 
            }}
            onClick={() => handleFileClick('contact.css')}
          >
            ✉ Contact
          </button>
        </div>
      </div>

      {/* Stats Divider block */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-[#2e303a] bg-[#16171d]/20 rounded-xl py-6 my-8 divide-x divide-[#2e303a] select-none w-full">
        <div className="text-center py-2 md:py-0">
          <div className="text-3xl md:text-4xl font-extrabold text-[#f3f4f6] font-mono leading-none">3+</div>
          <div className="text-[10px] tracking-widest text-gray-500 font-mono uppercase mt-2">Years</div>
        </div>
        <div className="text-center py-2 md:py-0">
          <div className="text-3xl md:text-4xl font-extrabold text-[#f3f4f6] font-mono leading-none">10+</div>
          <div className="text-[10px] tracking-widest text-gray-500 font-mono uppercase mt-2">Projects</div>
        </div>
        <div className="text-center py-2 md:py-0">
          <div className="text-3xl md:text-4xl font-extrabold text-[#f3f4f6] font-mono leading-none">∞</div>
          <div className="text-[10px] tracking-widest text-gray-500 font-mono uppercase mt-2">Curiosity</div>
        </div>
        <div className="text-center py-2 md:py-0">
          <div className="text-3xl md:text-4xl font-extrabold text-[#f3f4f6] font-mono leading-none">↑</div>
          <div className="text-[10px] tracking-widest text-gray-500 font-mono uppercase mt-2">Always Learning</div>
        </div>
      </div>

      {/* Social Channel contacts pills */}
      <div className="flex flex-wrap gap-2.5 items-center justify-center my-8">
        {[
          { name: "GitHub", href: `https://github.com/rmohit9` },
          { name: "LinkedIn", href: "#" },
          { name: "Medium", href: "#" },
          { name: "X/Twitter", href: "#" },
          { name: "LeetCode", href: "#" },
          { name: "Instagram", href: "#" },
          { name: "Email", href: "mailto:mohit.raut@example.com" }
        ].map((ch) => (
          <a key={ch.name} href={ch.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-1.5 bg-[#16171d] hover:bg-[#21232c] border border-[#2e303a] rounded-full text-xs text-gray-300 font-mono transition-colors decoration-none">
            <span>🏷️</span>
            <span>{ch.name}</span>
          </a>
        ))}
      </div>

      {/* Concentric orbital animations */}
      <div className="orbs-layout-grid pb-12 w-full">
        <div className="orb-card-frame">
          <div className="w-full text-center text-xs font-mono text-[#6a9955] mb-6 font-semibold">// AI Tools I Use</div>
          <ConcentricOrbitalChart centerLabel="AI STACK" tracks={AI_TRACKS_DATA} />
        </div>
        <div className="orb-card-frame">
          <div className="w-full text-center text-xs font-mono text-[#6a9955] mb-6 font-semibold">// Tech Stack I Use</div>
          <ConcentricOrbitalChart centerLabel="TECH STACK" tracks={TECH_TRACKS_DATA} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
