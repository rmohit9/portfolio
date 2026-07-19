import React, { useEffect, useRef, useState } from 'react';

const TimelineItem = ({ job }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`relative timeline-item-container transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* timeline node dot */}
      <div className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-4 border-[#0d1117] transition-all duration-500 ${
        job.isCurrentStatus 
          ? 'bg-[#58a6ff] scale-125 status-pulse-ring' 
          : isVisible ? 'bg-[#c084fc] scale-100' : 'bg-gray-700 scale-75'
      }`} />
      
      <div className="text-xs text-gray-500 font-bold tracking-wider font-mono">{job.period}</div>
      <div className="text-base font-bold text-[#f3f4f6] mt-2 font-mono">
        {job.role} @ <span className={job.isCurrentStatus ? 'text-[#58a6ff]' : 'text-[#c084fc]'}>{job.company}</span>
      </div>
      {job.desc && <p className="text-gray-400 mt-3.5 leading-relaxed text-[13px] font-mono">{job.desc}</p>}
      
      {job.project && (
        <div className="mt-6 p-5 bg-white/[0.02] border border-white/5 rounded-xl max-w-xl space-y-3.5 hover:border-[#c084fc]/30 hover:bg-white/[0.04] transition-all duration-300">
          <div className="text-[10px] text-[#c084fc] uppercase tracking-widest font-extrabold flex items-center gap-1.5 font-mono">
            <svg className="w-3 h-3 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <span>Featured Internship Project</span>
          </div>
          <div className="text-sm font-black text-gray-200 font-mono">{job.project.name}</div>
          <p className="text-[12px] text-gray-400 leading-relaxed font-sans">{job.project.desc}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {job.project.tech.map((t, i) => (
              <span key={i} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-gray-300 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const ExperienceView = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const experiences = [
    {
      period: "PRESENT",
      role: "Seeking Roles",
      company: "Open to Work",
      isCurrentStatus: true
    },
    {
      period: "NOVEMBER 2025 - APRIL 2026",
      role: "Backend Developer Intern",
      company: "Graphura India Private Limited",
      desc: "Designed and engineered the core microservice architecture for automated task workflows and real-time query engines. Developed real-time communication modules and AI assistants to stream asynchronous answers.",
      project: {
        name: "Faq_RAG_Chatbot",
        desc: "Designed and built an AI-powered conversational chatbot using Django Channels and Daphne for real-time WebSocket communication, integrated with Google Gemini API for intelligent, vector-matched FAQ answering.",
        tech: ["Django", "Django Channels", "Google Gemini API", "Daphne", "WebSockets", "SQLite"]
      }
    }
  ];

  useEffect(() => {
    const scrollContainer = document.querySelector('.editor-workspace-file-content');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      if (scrollHeight > 0) {
        // Calculate progress (capped at 100%)
        const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
        setScrollProgress(progress);
      } else {
        setScrollProgress(100); // Full line if container is not scrollable
      }
    };

    handleScroll(); // Initial run

    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="text-left space-y-10 py-4 md:py-6 animate-fadeIn md:max-w-5xl">
      <div className="space-y-2 mb-8">
        <span className="text-[#6a9955] font-mono text-sm block">// experience.ts - Developer Career Milestones Timeline</span>
        <h2 className="text-3xl font-black text-gray-200 mt-1 border-none pb-0">Timeline Career Journey</h2>
      </div>
      
      <div className="relative pl-6 ml-3 space-y-16 py-6">
        {/* Backing line track (static) */}
        <div className="absolute -left-[26px] top-3 bottom-3 w-[1px] bg-white/5" />
        
        {/* Dynamic vertical timeline line (scroll-animated) */}
        <div 
          className="absolute -left-[26px] top-3 w-[1px] bg-gradient-to-b from-[#58a6ff] to-[#c084fc] origin-top transition-all duration-300 ease-out"
          style={{ height: `calc(${scrollProgress}% - 6px)` }}
        />
        
        {experiences.map((job, idx) => (
          <TimelineItem key={idx} job={job} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceView;
