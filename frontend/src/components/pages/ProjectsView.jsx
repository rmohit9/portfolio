import { useState } from 'react';
import projectsMetadata from '../../data/projects_metadata.json';

export const ProjectsView = ({ data }) => {
  const [activeCardId, setActiveCardId] = useState(null);
  if (!data || !data.repos) return null;
  return (
    <div className="text-left space-y-6 animate-slideIn md:max-w-5xl">
      <div className="space-y-2 mb-8 reveal-item">
        <span className="text-[#6a9955] font-mono text-sm block">// projects.js - Live repository index data packets</span>
        <h2 className="text-3xl font-black text-gray-200 mt-1 border-none pb-0">Projects &amp; Repositories</h2>
        <p className="text-sm text-gray-500 mt-2 font-mono">Live synchronized data packets pulled via FastAPI backend services.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.repos.map((repo, idx) => {
          // Find matching metadata (case-insensitive)
          const metadata = Object.entries(projectsMetadata).find(
            ([key]) => key.toLowerCase() === repo.name.toLowerCase()
          )?.[1];

          const description = metadata?.description || repo.description || "No description overview compiled for this open source repository configuration block.";
          const tags = metadata?.tags || ["GITHUB", "REPOSITORY"];
          const techStack = metadata?.tech_stack || (repo.language ? [repo.language] : ["System Logic"]);

          return (
            <div 
              key={repo.id} 
              className={`space-card reveal-item ${idx === 0 ? 'delay-150' : idx === 1 ? 'delay-300' : idx === 2 ? 'delay-450' : 'delay-600'} ${activeCardId === repo.id ? 'active' : ''}`}
              onClick={() => setActiveCardId(activeCardId === repo.id ? null : repo.id)}
            >
              {/* Fine outlined stars using the theme color */}
              <svg className="star star-1" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>
              <svg className="star star-2" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>
              <svg className="star star-3" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>
              <svg className="star star-4" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>
              <svg className="star star-5" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>
              <svg className="star star-6" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>
              <svg className="star star-7" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
              </svg>

              <div className="card-info">
                <span>{repo.name}</span>
              </div>

              <svg className="moon" viewBox="0 0 20 20">
                <path d="M 10 9 z z M 7.007 6.552 c 0 -2.259 0.795 -4.33 2.117 -5.955 C 4.34 1.042 0.594 5.07 0.594 9.98 c 0 5.207 4.211 9.426 9.406 9.426 c 2.94 0 5.972 -1.354 7.696 -3.472 c -0.289 0.026 -0.987 0.044 -1.283 0.044 C 11.219 15.979 7.007 11.759 7.007 6.552 z" />
              </svg>

              <svg className="rocket" viewBox="48.0129 48.1783 416 415.6">
                <path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" />
              </svg>

              {/* Overlaid project info with glassmorphism blur */}
              <div className="project-info-overlay">
                <div className="project-info-content">
                  <div>
                    {tags && tags.length > 0 && (
                      <span className="project-category-tags">
                        {tags.join(' • ')}
                      </span>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="project-title" onClick={(e) => e.stopPropagation()}>
                      {repo.name}
                    </a>
                    <span className="project-stats">
                      ⭐ {repo.stargazers_count || 0} stars • 🍴 {repo.forks_count || 0} forks
                    </span>
                    <p className="project-description">
                      {description}
                    </p>
                  </div>

                  <div className="project-footer mt-auto">
                    {techStack && techStack.length > 0 && (
                      <div className="tech-stack-container flex flex-wrap gap-1 max-w-[75%]">
                        {techStack.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="github-btn flex items-center gap-1.2 px-2 py-0.5 bg-white/5 hover:bg-[rgba(88,166,255,0.12)] border border-[#2e303a] hover:border-[rgba(88,166,255,0.4)] rounded text-[10px] font-mono transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>GitHub</span>
                      <svg className="w-2.5 h-2.5 text-current ml-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsView;
