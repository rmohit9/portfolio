import React from 'react';

export const SkillsView = () => {
  const skillsData = {
    "frontend": {
      "libraries": ["React.js v19", "Redux Toolkit", "Next.js"],
      "styling": ["Tailwind CSS v4", "CSS3 MODULES", "SASS"],
      "languages": ["TypeScript", "JavaScript (ES6+)"]
    },
    "backend": {
      "frameworks": ["FastAPI", "Django REST Framework", "Flask"],
      "databases": ["PostgreSQL", "MongoDB", "Redis", "SQLite"]
    },
    "devops_and_tools": {
      "deployment": ["Docker Containers", "Kubernetes", "AWS Ec2/S3", "Vercel"],
      "utilities": ["Git / Github Actions", "Postman", "Nginx", "Linux Shell"]
    }
  };

  return (
    <div className="font-mono text-xs text-[#ce9178] text-left space-y-4 animate-fadeIn md:max-w-3xl">
      <div className="text-[#6a9955]">// skills.json - Declared Tech Stack Summary</div>
      <pre className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-xl overflow-x-auto text-[#d4d4d4] leading-relaxed">
        {JSON.stringify(skillsData, null, 2)}
      </pre>
    </div>
  );
};
export default SkillsView;
