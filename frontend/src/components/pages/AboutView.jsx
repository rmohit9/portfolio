import { useState } from 'react';
import profileImg from '../../assets/Mohit-raut.png';

export const AboutView = () => {
  const profileImgUrl = profileImg;

  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const focusItems = [
    "Full-time Data Science learner",
    "Deep interest in NLP, LLMs & ML pipelines",
    "Currently exploring RAG, MLOps & Vector Databases",
    "Talk to me about Python, APIs, Data Science",
    "Making data stories non-data people actually get",
    "Always learning, always shipping"
  ];

  return (
    <div className="text-left space-y-8 animate-slideIn md:max-w-5xl mx-auto pb-12 px-4 md:px-0">
      
      {/* 1. Header Block */}
      <div className="space-y-2 reveal-item">
        <span className="text-[#6a9955] font-mono text-sm block">// about.html - Biography overview</span>
        <h2 className="text-4xl font-black text-gray-100 tracking-tight mt-1 border-none pb-0">Biography & Profile</h2>
        <div className="h-[2px] w-16 bg-[#58a6ff] rounded-full mt-2"></div>
      </div>

      {/* 2. Top Intro Block: Profile Image (Left) + Conversational Intro (Right) */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch reveal-item delay-150">
        
        {/* Profile Image Column (Left) */}
        <div className="w-full md:w-[320px] flex-shrink-0">
          <div 
            onMouseEnter={() => setHasBeenHovered(true)}
            className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden border border-[#2e303a] bg-[#16171d]/85 shadow-lg group transition-all duration-300 hover:border-[#58a6ff]/50"
          >
            {profileImgUrl ? (
              <img 
                src={profileImgUrl} 
                alt="Profile Avatar" 
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  hasBeenHovered ? 'grayscale-0 scale-100' : 'grayscale hover:grayscale-0 scale-95 hover:scale-100'
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none min-h-[320px]">
                <div className={`p-4 rounded-full bg-[#1e2030] text-gray-500 mb-3 transition-colors duration-700 ${
                  hasBeenHovered ? 'text-[#58a6ff] bg-[#1c2438]' : ''
                }`}>
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-gray-400 font-bold block">No Profile Image</span>
                <span className="text-[10px] font-mono text-gray-500 mt-1.5 leading-relaxed">
                  Hover to activate color simulation.<br/>Set path in <code className="text-[9px] bg-black/30 px-1 py-0.5 rounded text-purple-400">AboutView.jsx</code>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Conversational Intro Block (Right) */}
        <div className="flex-1 bg-[#16171d]/65 border border-[#2e303a] rounded-2xl p-6 flex flex-col justify-center space-y-4 hover:border-[#58a6ff]/30 transition-colors duration-300">
          <div className="font-mono text-xs text-[#6a9955]">// hello_world.log</div>
          <h3 className="text-xl font-bold text-gray-200 m-0">Hey there! 👋</h3>
          
          <div className="font-mono text-sm text-gray-300 leading-relaxed space-y-3">
            <p className="m-0">
              I'm <strong className="text-[#58a6ff]">Mohit Raut</strong>, a passionate AI/ML learner and developer. I enjoy designing intelligent models, training models, and engineering end-to-end data systems that solve actual real-world challenges.
            </p>
            <p className="m-0">
              Currently pursuing my B.Tech in Artificial Intelligence, my goal is to bridge the gap between complex data frameworks and practical applications. I'm actively building NLP, RAG, and MLOps integrations, focusing on performance, scaling, and actionable data narratives.
            </p>
          </div>
        </div>

      </div>

      {/* 3. Section Divider & Linear Content Blocks arranged one-by-one */}
      
      {/* Block A: CURRENT FOCUS */}
      <div className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-2xl space-y-4 hover:border-[#58a6ff]/30 transition-colors duration-300 reveal-item delay-300">
        <div className="flex items-center gap-3 border-b border-[#2e303a]/60 pb-3">
          <span className="text-[#58a6ff] font-mono text-lg font-bold">&gt;_</span>
          <h3 className="text-lg font-bold text-gray-200 m-0 font-mono">Current Focus</h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-gray-400 pl-0 list-none m-0">
          {focusItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-[#0d1117]/40 border border-[#2e303a]/40 p-3.5 rounded-xl hover:border-[#58a6ff]/20 transition-all duration-200">
              <span className="text-[#6a9955] flex-shrink-0 font-bold select-none">&gt;</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Block B: EDUCATION */}
      <div className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-2xl space-y-4 hover:border-[#c084fc]/30 transition-colors duration-300 reveal-item delay-450">
        <div className="flex items-center gap-3 border-b border-[#2e303a]/60 pb-3">
          <svg className="w-5 h-5 text-[#c084fc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <h3 className="text-lg font-bold text-gray-200 m-0 font-mono">Education</h3>
        </div>
        
        <div className="bg-[#0d1117]/40 border border-[#2e303a]/40 p-5 rounded-xl space-y-3 font-mono">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h4 className="text-base font-bold text-gray-200 m-0">G H Raisoni College of Engineering</h4>
            <span className="text-xs text-gray-500 bg-[#16171d] px-2.5 py-1 border border-[#2e303a] rounded-md">Graduating June 2026</span>
          </div>
          <div className="text-sm text-[#58a6ff] font-semibold">B.Tech in Artificial Intelligence</div>
          <div className="h-px bg-[#2e303a]/50 my-2"></div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            <span>Performance Index: <strong>8.6 CGPA</strong></span>
          </div>
        </div>
      </div>

      {/* Block C: LOCATION & RELOCATION */}
      <div className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-2xl space-y-4 hover:border-[#27c93f]/30 transition-colors duration-300 reveal-item delay-600">
        <div className="flex items-center gap-3 border-b border-[#2e303a]/60 pb-3">
          <svg className="w-5 h-5 text-[#27c93f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="text-lg font-bold text-gray-200 m-0 font-mono">Origin & Relocation Base</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 font-mono text-sm text-gray-400">
            <p className="leading-relaxed m-0">
              Originally native to <strong className="text-gray-100">Nagpur, Maharashtra</strong>, currently living in <strong className="text-gray-100">Hyderabad</strong>. 
            </p>
            <p className="leading-relaxed m-0 text-gray-400">
              Actively seeking roles in the <strong className="text-[#58a6ff]">AI/ML & Data Science</strong> domains, open to relocation and on-site/hybrid positions.
            </p>
            <div className="flex items-center gap-2 text-xs bg-[#27c93f]/10 text-[#27c93f] border border-[#27c93f]/30 p-2.5 rounded-lg w-fit">
              <span className="animate-ping w-2 h-2 rounded-full bg-[#27c93f]"></span>
              <span>Available for Immediate Opportunities</span>
            </div>
          </div>

          <div className="lg:col-span-7 relative overflow-hidden rounded-xl border border-[#2e303a]/60 bg-[#0d1117]/65 shadow-inner">
            <style>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -20;
                }
              }
              .animate-route-dash {
                stroke-dasharray: 6;
                animation: dash 2.5s linear infinite;
              }
              @keyframes pulse-ring {
                0% { transform: scale(0.6); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: scale(2.2); opacity: 0; }
              }
              .custom-pulse-ring {
                animation: pulse-ring 2.5s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
              }
            `}</style>
            <svg viewBox="0 0 400 180" className="w-full h-full">
              <defs>
                <pattern id="location-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2e303a" strokeWidth="0.5" strokeOpacity="0.6" />
                </pattern>
              </defs>
              
              {/* Background coordinates grid */}
              <rect width="100%" height="100%" fill="url(#location-grid)" />
              
              {/* Dashed route line */}
              <path d="M 120 70 Q 230 40 280 120" fill="none" stroke="#58a6ff" strokeWidth="2.5" className="animate-route-dash" />
              
              {/* Nagpur node */}
              <circle cx="120" cy="70" r="5" fill="#c084fc" />
              <circle cx="120" cy="70" r="10" fill="none" stroke="#c084fc" strokeWidth="1.5" className="custom-pulse-ring" style={{ transformOrigin: '120px 70px' }} />
              <text x="120" y="52" fill="#c084fc" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Nagpur</text>
              
              {/* Hyderabad node */}
              <circle cx="280" cy="120" r="6" fill="#27c93f" />
              <circle cx="280" cy="120" r="12" fill="none" stroke="#27c93f" strokeWidth="2" className="custom-pulse-ring" style={{ transformOrigin: '280px 120px' }} />
              <text x="280" y="142" fill="#27c93f" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Hyderabad</text>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutView;
