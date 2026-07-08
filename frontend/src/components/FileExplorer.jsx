import React, { useState } from 'react';
import {
  ReactIcon,
  HtmlIcon,
  JsIcon,
  TsIcon,
  JsonIcon,
  CssIcon,
  MarkdownIcon,
  GitIcon,
  EnvIcon
} from './Icons';

export const FileExplorer = ({ activeTab, handleFileClick }) => {
  const [collapsed, setCollapsed] = useState({
    src: false,
    app: false,
    components: false,
    ui: false,
    config: true,
    assets: true
  });

  const toggle = (folder) => {
    setCollapsed(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <div className="space-y-1 font-mono text-xs select-none">
      <div>
        <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300 font-semibold" onClick={() => toggle('src')}>
          <span className="text-[10px] text-gray-500 transform transition-transform duration-100" style={{ display: 'inline-block', transform: collapsed.src ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▼</span>
          <span className="text-[#e2c07d]">{collapsed.src ? "📁" : "📂"}</span>
          <span>src</span>
        </div>

        {!collapsed.src && (
          <div className="pl-4 border-l border-[#2e303a]/60 ml-3.5 space-y-1">
            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300 font-semibold" onClick={() => toggle('app')}>
                <span className="text-[10px] text-gray-500 transform transition-transform duration-100" style={{ display: 'inline-block', transform: collapsed.app ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▼</span>
                <span className="text-[#e2c07d]">{collapsed.app ? "📁" : "📂"}</span>
                <span>app</span>
              </div>

              {!collapsed.app && (
                <div className="pl-4 border-l border-[#2e303a]/60 ml-3.5 space-y-0.5">
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'home.tsx' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('home.tsx')}>
                    <ReactIcon />
                    <span>home.tsx</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'about.html' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('about.html')}>
                    <HtmlIcon />
                    <span>about.html</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'projects.js' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('projects.js')}>
                    <JsIcon />
                    <span>projects.js</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'skills.json' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('skills.json')}>
                    <JsonIcon />
                    <span>skills.json</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'experience.ts' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('experience.ts')}>
                    <TsIcon />
                    <span>experience.ts</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'contact.css' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('contact.css')}>
                    <CssIcon />
                    <span>contact.css</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300 font-semibold" onClick={() => toggle('components')}>
                <span className="text-[10px] text-gray-500 transform transition-transform duration-100" style={{ display: 'inline-block', transform: collapsed.components ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▼</span>
                <span className="text-[#e2c07d]">{collapsed.components ? "📁" : "📂"}</span>
                <span>components</span>
              </div>

              {!collapsed.components && (
                <div className="pl-4 border-l border-[#2e303a]/60 ml-3.5 space-y-1">
                  <div>
                    <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300 font-semibold" onClick={() => toggle('ui')}>
                      <span className="text-[10px] text-gray-500 transform transition-transform duration-100" style={{ display: 'inline-block', transform: collapsed.ui ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▼</span>
                      <span className="text-[#e2c07d]">{collapsed.ui ? "📁" : "📂"}</span>
                      <span>ui</span>
                    </div>

                    {!collapsed.ui && (
                      <div className="pl-4 border-l border-[#2e303a]/60 ml-3.5 space-y-0.5">
                        <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'README.md' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('README.md')}>
                          <MarkdownIcon />
                          <span>README.md</span>
                        </div>
                        <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'hobbies.md' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('hobbies.md')}>
                          <MarkdownIcon />
                          <span>hobbies.md</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300 font-semibold" onClick={() => toggle('config')}>
                <span className="text-[10px] text-gray-500 transform transition-transform duration-100" style={{ display: 'inline-block', transform: collapsed.config ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▼</span>
                <span className="text-[#e2c07d]">{collapsed.config ? "📁" : "📂"}</span>
                <span>config</span>
              </div>

              {!collapsed.config && (
                <div className="pl-4 border-l border-[#2e303a]/60 ml-3.5 space-y-0.5">
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === '.gitignore' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('.gitignore')}>
                    <GitIcon />
                    <span>.gitignore</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === '.env' ? 'bg-[#c084fc]/15 text-white font-semibold' : 'text-gray-400'}`} onClick={() => handleFileClick('.env')}>
                    <EnvIcon />
                    <span>.env</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300 font-semibold" onClick={() => toggle('assets')}>
                <span className="text-[10px] text-gray-500 transform transition-transform duration-100" style={{ display: 'inline-block', transform: collapsed.assets ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▼</span>
                <span className="text-[#e2c07d]">{collapsed.assets ? "📁" : "📂"}</span>
                <span>assets</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
export default FileExplorer;
