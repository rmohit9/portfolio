import React from 'react';

export const AboutView = ({ data }) => {
  if (!data || !data.profile) return null;
  return (
    <div className="text-left space-y-6 animate-fadeIn md:max-w-4xl">
      <div className="space-y-2">
        <span className="text-[#6a9955] font-mono">&lt;!-- about.html - Biography overview --&gt;</span>
        <h2 className="text-3xl font-black text-gray-200 mt-1 border-none pb-0">Biography &amp; Professional Profile</h2>
      </div>
      
      <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed leading-7">
        <p className="m-0">
          Hi, I'm <strong className="text-[#f3f4f6]">{data.profile.name}</strong>, a system developer based in <strong className="text-[#f3f4f6]">{data.profile.location}</strong>. 
          I specialize in designing and executing end-to-end architectures, robust REST APIs, and interactive UI packages.
        </p>
        <p className="m-0">
          With a strong focus on clean code and robust systems, I spend my time engineering IoT trackers, automations, 
          and enterprise web panels. I'm always looking to scale frameworks and design modern web elements.
        </p>
        <div className="bg-[#16171d]/60 border border-[#2e303a] p-4 rounded-lg mt-4 space-y-2">
          <div className="font-bold text-[#c084fc]">// Personal Bio data</div>
          <div className="grid grid-cols-2 gap-4 text-[13px] pt-1.5">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <span>Role: Systems &amp; Fullstack Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Location: {data.profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>Followers: {data.profile.followers} on Github</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="5"/><line x1="10" y1="2" x2="10" y2="5"/><line x1="14" y1="2" x2="14" y2="5"/></svg>
              <span>Work Mode: Remote / Hybrid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutView;
