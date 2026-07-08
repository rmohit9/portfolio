import React from 'react';

export const AboutView = ({ data }) => {
  if (!data || !data.profile) return null;
  return (
    <div className="text-left space-y-6 animate-fadeIn md:max-w-3xl">
      <div className="space-y-2">
        <span className="text-[#6a9955] font-mono">&lt;!-- about.html - Biography overview --&gt;</span>
        <h2 className="text-3xl font-black text-gray-200 mt-1 border-none pb-0">Biography &amp; Professional Profile</h2>
      </div>
      
      <div className="space-y-4 text-gray-400 font-mono text-xs leading-relaxed leading-7">
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
          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
            <div>👨‍💻 Role: Systems & Fullstack Engineer</div>
            <div>📍 Location: {data.profile.location}</div>
            <div>👥 Followers: {data.profile.followers} on Github</div>
            <div>☕ Work Mode: Remote / Hybrid</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutView;
