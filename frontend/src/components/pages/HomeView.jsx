import ParticleCard from '../ParticleCard';
import ConcentricOrbitalChart from '../ConcentricOrbitalChart';
import { AI_TRACKS_DATA, TECH_TRACKS_DATA } from '../../data/tracks';
import FuzzyText from '../FuzzyText';

export const HomeView = ({ handleFileClick }) => {
  const socialLinks = [
    { 
      name: "GitHub", 
      href: `https://github.com/rmohit9`, 
      color: "#f0f6fc",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      color: "#0a66c2",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      href: "#", 
      color: "#1877f2",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "#", 
      color: "#e1306c",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    { 
      name: "LeetCode", 
      href: "#", 
      color: "#ffa116",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    { 
      name: "Inbox", 
      href: "mailto:mohitraut009@gmail.com", 
      color: "#ea4335",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-10 pt-4 animate-slideIn md:max-w-5xl mx-auto flex flex-col items-center w-full">
      {/* Particle card - relocated to the very top */}
      <div className="w-full reveal-item">
        <ParticleCard />
      </div>

      {/* Profile Header Details block */}
      <div className="w-full flex flex-col items-start space-y-5 select-none px-4 md:px-0">

        {/* Badges row */}
        <div className="flex flex-wrap gap-3 items-center justify-start md:justify-between select-none w-full pl-2 pr-2 md:pr-0 reveal-item delay-150">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-sm font-mono text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> AI Engineer
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-sm font-mono text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> ML Engineering
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#16171d]/85 border border-[#2e303a] rounded-full text-sm font-mono text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> Data Science
          </span>
          <span 
            className="flex items-center gap-1.5 px-3.5 py-1.5 border rounded-full text-sm font-mono font-semibold"
            style={{ 
              color: 'var(--accent-light)', 
              borderColor: 'var(--accent-light)', 
              backgroundColor: 'rgba(255, 255, 255, 0.02)' 
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}></span> @ GHRCE, Nagpur
          </span>
        </div>

        {/* Name and Welcome Message */}
        <div className="w-full text-left space-y-8 pl-2 reveal-item delay-300">
          <span className="text-sm font-mono text-[#6a9955] block font-semibold tracking-wider pt-4">// hello world !! Welcome to my portfolio</span>
          <FuzzyText 
            fontSize="clamp(1.8rem, 4.5vw, 3rem)" 
            fontWeight={900} 
            color="#f3f4f6"
            baseIntensity={0.15}
            hoverIntensity={0.5}
            clickEffect={true}
            letterSpacing={5}
            stroke={true}
            strokeWidth={1.5}
            className="uppercase select-none leading-none tracking-widest cursor-pointer font-sans md:-ml-[45px]"
          >
            Mohit Raut
          </FuzzyText>
        </div>

        {/* Comment bottom */}
        <div className="text-sm font-mono text-[#6a9955] pl-2 font-semibold select-none leading-none pt-4 reveal-item delay-450">
          // Building intelligent and scalable AI Solutions
        </div>

        {/* Customized Intro Paragraph */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans w-full pl-2 pr-2 md:pr-0 select-text text-justify reveal-item delay-525">
          I work at the intersection of <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>AI/ML Engineering</span>, <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>Data Science</span>, and <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>Python Development</span>, building intelligent systems that transform data into impactful solutions. From developing machine learning models to designing scalable backend architectures and reliable data pipelines, I focus on creating secure, efficient, and production-ready applications.
        </p>

        {/* Tab Navigation buttons */}
        <div className="flex flex-wrap gap-4 justify-start pl-2 mt-2 w-full reveal-item delay-600">
          <button 
            className="flex items-center gap-2 px-5 py-2.5 border rounded-lg font-semibold cursor-pointer transition-all duration-200 shadow-md text-sm font-mono font-bold hover:brightness-110" 
            style={{ 
              backgroundColor: 'var(--accent-light)', 
              color: 'var(--editor-bg, #0d1117)', 
              borderColor: 'var(--accent-light)' 
            }}
            onClick={() => handleFileClick('projects.js')}
          >
            <svg className="w-4 h-4 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            Projects
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2e303a] hover:border-gray-500 bg-transparent text-gray-300 font-semibold cursor-pointer transition-colors text-sm font-mono font-bold" onClick={() => handleFileClick('about.html')}>
            <svg className="w-4 h-4 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            About Me
          </button>
          <button 
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border bg-transparent font-semibold cursor-pointer transition-all duration-200 text-sm font-mono font-bold hover:brightness-110" 
            style={{ 
              borderColor: 'var(--accent-light)', 
              color: 'var(--accent-light)' 
            }}
            onClick={() => handleFileClick('contact.css')}
          >
            <svg className="w-4 h-4 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact
          </button>
        </div>
      </div>

      {/* Stats Divider block */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-[#2e303a] bg-[#16171d]/20 rounded-xl py-6 my-8 divide-x-0 md:divide-x divide-[#2e303a] select-none w-full">
        <div className="text-center py-2 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] font-mono leading-none">3+</div>
          <div className="text-xs md:text-sm tracking-widest text-gray-500 font-mono uppercase mt-2">Years</div>
        </div>
        <div className="text-center py-2 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] font-mono leading-none">10+</div>
          <div className="text-xs md:text-sm tracking-widest text-gray-500 font-mono uppercase mt-2">Projects</div>
        </div>
        <div className="text-center py-2 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] font-mono leading-none">∞</div>
          <div className="text-xs md:text-sm tracking-widest text-gray-500 font-mono uppercase mt-2">Curiosity</div>
        </div>
        <div className="text-center py-2 md:py-0">
          <div className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] font-mono leading-none">↑</div>
          <div className="text-xs md:text-sm tracking-widest text-gray-500 font-mono uppercase mt-2">Always Learning</div>
        </div>
      </div>

      {/* Social Channel contacts pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 my-8 w-full">
        {socialLinks.map((ch) => (
          <a 
            key={ch.name} 
            href={ch.href} 
            target="_blank" 
            rel="noreferrer" 
            className="social-link-pill flex items-center justify-center gap-2 px-4 py-2.5 bg-[#16171d]/90 border border-[#2e303a] rounded-full text-sm font-mono transition-all duration-300 decoration-none w-full hover:bg-[#16171d]"
          >
            {ch.icon}
            <span>{ch.name}</span>
          </a>
        ))}
      </div>

      {/* Concentric orbital animations */}
      <div className="orbs-layout-grid pb-12 w-full">
        <div className="orb-card-frame">
          <div className="w-full text-center text-sm font-mono text-[#6a9955] mb-6 font-semibold">// AI Tools I Use</div>
          <ConcentricOrbitalChart centerLabel="AI STACK" tracks={AI_TRACKS_DATA} />
        </div>
        <div className="orb-card-frame">
          <div className="w-full text-center text-sm font-mono text-[#6a9955] mb-6 font-semibold">// Tech Stack I Use</div>
          <ConcentricOrbitalChart centerLabel="TECH STACK" tracks={TECH_TRACKS_DATA} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
