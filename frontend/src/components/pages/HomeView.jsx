import React from 'react';
import ParticleCard from '../ParticleCard';
import { ConcentricOrbitalChart, AI_TRACKS_DATA, TECH_TRACKS_DATA } from '../ConcentricOrbitalChart';

export const HomeView = ({ handleFileClick }) => {
  return (
    <div className="space-y-8 animate-fadeIn md:max-w-4xl">
      {/* Hero headers */}
      <div className="text-left space-y-3">
        <span className="text-[12px] font-mono text-[#6a9955] block font-semibold select-none">// hello world !! Welcome to my portfolio</span>
        <h1 className="heading-outline font-sans text-5xl md:text-7xl font-extrabold uppercase m-0 leading-none select-none tracking-wide">
          Mohit Raut
        </h1>
      </div>

      {/* Particle card */}
      <ParticleCard />

      {/* Badges row */}
      <div className="flex flex-wrap gap-3 items-center justify-start my-6 select-none">
        <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-xs font-mono text-gray-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span> FullStack Engineer
        </span>
        <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-xs font-mono text-gray-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff79c6]"></span> AI Engineering
        </span>
        <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-xs font-mono text-gray-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#58a6ff]"></span> Data Engineer
        </span>
        <span className="flex items-center gap-1.5 px-3.5 py-1 bg-[#a855f7]/15 border border-[#a855f7]/40 rounded-full text-xs font-mono text-[#c084fc] font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc]"></span> @ PartexAI
        </span>
      </div>

      {/* Comment bottom */}
      <div className="text-xs font-mono text-[#6a9955] my-6 font-semibold select-none leading-none">
        // Building intelligent and scalable AI Solutions
      </div>

      {/* Tab Navigation buttons */}
      <div className="flex flex-wrap gap-4 justify-start my-8">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#007acc] hover:bg-[#0062a3] text-white border-none rounded-lg font-semibold cursor-pointer transition-colors shadow-md text-xs font-mono font-bold" onClick={() => handleFileClick('projects.js')}>
          📁 Projects
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2e303a] hover:border-gray-500 bg-transparent text-gray-300 font-semibold cursor-pointer transition-colors text-xs font-mono font-bold" onClick={() => handleFileClick('about.html')}>
          👤 About Me
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2e303a] hover:border-gray-500 bg-transparent text-gray-300 font-semibold cursor-pointer transition-colors text-xs font-mono font-bold" onClick={() => handleFileClick('contact.css')}>
          ✉ Contact
        </button>
      </div>

      {/* Stats Divider block */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-[#2e303a] bg-[#16171d]/20 rounded-xl py-6 my-8 divide-x divide-[#2e303a] select-none">
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
      <div className="flex flex-wrap gap-2.5 items-center justify-start my-8">
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
      <div className="orbs-layout-grid pb-12">
        <div className="orb-card-frame">
          <div className="w-full text-left text-xs font-mono text-[#6a9955] mb-6 font-semibold">// AI Tools I Use</div>
          <ConcentricOrbitalChart centerLabel="AI STACK" tracks={AI_TRACKS_DATA} />
        </div>
        <div className="orb-card-frame">
          <div className="w-full text-left text-xs font-mono text-[#6a9955] mb-6 font-semibold">// Tech Stack I Use</div>
          <ConcentricOrbitalChart centerLabel="TECH STACK" tracks={TECH_TRACKS_DATA} />
        </div>
      </div>
    </div>
  );
};
export default HomeView;
