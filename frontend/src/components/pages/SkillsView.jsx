import React from 'react';
import skillsData from '../../data/skills.json';

export const SkillsView = () => {
  if (!skillsData || !skillsData.categories) return null;

  return (
    <div className="skills-view-container text-left animate-fadeIn md:max-w-4xl space-y-16 py-6 md:py-10">
      <div className="space-y-1.5 mb-8">
        <span className="text-[#6a9955] font-mono text-sm block">// skills.json - Core Tech Stack Proficiency Index</span>
      </div>

      {/* Grid for categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 md:gap-x-24 gap-y-16 md:gap-y-20">
        {skillsData.categories.map((category, catIdx) => (
          <div key={catIdx} className="skill-category-block">
            {/* Category title */}
            <h3 className="skill-category-title mb-6">
              {category.title}
            </h3>

            {/* List of skills under category */}
            <div className="skill-rows-list space-y-7">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-row">
                  <div className="skill-info flex justify-between items-center mb-3.5">
                    <span className="skill-name text-xs md:text-sm font-semibold text-gray-200">{skill.name}</span>
                    <span className="skill-percentage font-mono text-xs font-bold" style={{ color: category.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress bar track */}
                  <div className="skill-progress-track w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-bar h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ 
                        width: `${skill.level}%`, 
                        backgroundColor: category.color,
                        boxShadow: `0 0 6px ${category.color}60`
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Also Familiar With section */}
      {skillsData.also_familiar_with && skillsData.also_familiar_with.length > 0 && (
        <div className="also-familiar-section pt-16 mt-16 border-t border-[#2e303a]/40">
          <h3 className="skill-category-title text-[#e5c07b] mb-6">
            ALSO FAMILIAR WITH
          </h3>
          <div className="familiar-tags-container flex flex-wrap gap-3 mt-6">
            {skillsData.also_familiar_with.map((tag, tagIdx) => (
              <span key={tagIdx} className="familiar-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsView;
