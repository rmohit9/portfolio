import React, { useState } from 'react';
import {
  FolderIcon,
  PyIcon,
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
    <div className="space-y-1.5 font-mono text-[13px] select-none text-gray-300">
      <div>
        <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300" onClick={() => toggle('src')}>
          <FolderIcon />
          <span>src</span>
        </div>

        {!collapsed.src && (
          <div className="pl-4 border-l border-[#2e303a]/60 ml-3 space-y-1.5">
            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300" onClick={() => toggle('app')}>
                <FolderIcon />
                <span>app</span>
              </div>

              {!collapsed.app && (
                <div className="pl-4 border-l border-[#2e303a]/60 ml-3 space-y-1">
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'home.py' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('home.py')}>
                    <PyIcon />
                    <span>home.py</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'about.html' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('about.html')}>
                    <HtmlIcon />
                    <span>about.html</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'projects.js' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('projects.js')}>
                    <JsIcon />
                    <span>projects.js</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'skills.json' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('skills.json')}>
                    <JsonIcon />
                    <span>skills.json</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'experience.ts' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('experience.ts')}>
                    <TsIcon />
                    <span>experience.ts</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'contact.css' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('contact.css')}>
                    <CssIcon />
                    <span>contact.css</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300" onClick={() => toggle('components')}>
                <FolderIcon />
                <span>components</span>
              </div>

              {!collapsed.components && (
                <div className="pl-4 border-l border-[#2e303a]/60 ml-3 space-y-1">
                  <div>
                    <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300" onClick={() => toggle('ui')}>
                      <FolderIcon />
                      <span>ui</span>
                    </div>

                    {!collapsed.ui && (
                      <div className="pl-4 border-l border-[#2e303a]/60 ml-3 space-y-1">
                        <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'README.md' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('README.md')}>
                          <MarkdownIcon />
                          <span>README.md</span>
                        </div>
                        <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === 'hobbies.md' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('hobbies.md')}>
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
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300" onClick={() => toggle('config')}>
                <FolderIcon />
                <span>config</span>
              </div>

              {!collapsed.config && (
                <div className="pl-4 border-l border-[#2e303a]/60 ml-3 space-y-1">
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === '.gitignore' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('.gitignore')}>
                    <GitIcon />
                    <span>.gitignore</span>
                  </div>
                  <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded ${activeTab === '.env' ? 'bg-[#1d2d3e]/80 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => handleFileClick('.env')}>
                    <EnvIcon />
                    <span>.env</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-white/5 rounded text-gray-300" onClick={() => toggle('assets')}>
                <FolderIcon />
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
