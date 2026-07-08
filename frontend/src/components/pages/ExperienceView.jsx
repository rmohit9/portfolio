import React from 'react';

export const ExperienceView = () => {
  const experiences = [
    { period: "2024 - PRESENT", role: "AI & Fullstack Engineer", company: "PartexAI", desc: "Crafting scalable dashboard engines, data scrapers, and frontend applications utilizing React, Vite, and FastAPI. Decreased endpoint latency by 35% through query tuning and caching configurations." },
    { period: "2023 - 2024", role: "Software Engineer", company: "HSR Motors CRM", desc: "Overhauled the core customer relations interface. Implemented interactive vehicle telemetry dashboards and REST API connectors. Promoted modular design models among project subgroups." },
    { period: "2022 - 2023", role: "IoT Solutions Developer", company: "Agricultural Dev Systems", desc: "Built tracking software dashboards listening to ESP32 sensor feeds. Connected telemetry database endpoints and visualized soil analytics charts in realtime." }
  ];

  return (
    <div className="text-left space-y-6 animate-fadeIn md:max-w-4xl">
      <div>
        <span className="text-[#6a9955] font-mono">// experience.ts - Developer Career Milestones Timeline</span>
        <h2 className="text-2xl font-bold text-gray-200 m-0 border-none pb-0 mt-1">Timeline Career Journey</h2>
      </div>
      
      <div className="relative pl-6 border-l border-[#2e303a] ml-3 space-y-8 py-2 font-mono text-xs">
        {experiences.map((job, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#c084fc] border-4 border-[#0d1117]" />
            <div className="text-[10px] text-gray-500 font-bold tracking-wider">{job.period}</div>
            <div className="text-sm font-bold text-[#f3f4f6] mt-1">{job.role} @ <span className="text-[#58a6ff]">{job.company}</span></div>
            <p className="text-gray-400 mt-2 leading-relaxed text-[11px]">{job.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceView;
