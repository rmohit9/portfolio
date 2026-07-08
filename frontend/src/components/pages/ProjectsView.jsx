import React from 'react';

export const ProjectsView = ({ data }) => {
  if (!data || !data.repos) return null;
  return (
    <div className="text-left space-y-6 animate-fadeIn md:max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-[#f3f4f6] font-mono m-0 border-b-0 p-0">// Repositories Index Data</h2>
        <p className="text-xs text-gray-500 mt-1">Live synchronized data packets pulled via FastAPI endpoints.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.repos.map((repo) => (
          <div key={repo.id} className="bg-[#16171d] border border-[#2e303a] rounded-xl p-6 flex flex-col justify-between hover:border-[#c084fc]/50 transition-all duration-300">
            <div>
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-[#58a6ff] font-mono font-bold text-base hover:underline truncate block">
                {repo.name}
              </a>
              <span className="text-[10px] text-gray-500 font-mono block mt-1">⭐ {repo.stargazers_count || 0} stars • 🍴 {repo.forks_count || 0} forks</span>
              <p className="text-xs text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                {repo.description || "No description overview compiled for this open source repository configuration block."}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#2e303a]/40 flex items-center text-[11px] font-mono text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc] mr-2" />
              {repo.language || "System Logic"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsView;
