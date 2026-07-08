import React from 'react';

export const GitignoreView = () => {
  return (
    <div className="font-mono text-xs text-[#d4d4d4] text-left space-y-4 animate-fadeIn md:max-w-2xl">
      <div className="text-[#6a9955]"># .gitignore - Standard ignored file entries for Node & Env</div>
      <pre className="bg-[#16171d]/60 border border-[#2e303a] p-6 rounded-xl overflow-x-auto leading-relaxed text-gray-400">
{`node_modules/
dist/
dist-ssr/
*.local
.env
.env.development
.env.production
.DS_Store
Thumbs.db
npm-debug.log*
yarn-debug.log*
.idea/
.vscode/`}
      </pre>
    </div>
  );
};
export default GitignoreView;
