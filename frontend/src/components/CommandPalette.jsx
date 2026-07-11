import React, { useState, useEffect, useRef } from 'react';
import {
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

const FILES_LIST = [
  { name: 'home.py', path: 'src/', icon: <PyIcon /> },
  { name: 'about.html', path: 'src/', icon: <HtmlIcon /> },
  { name: 'projects.js', path: 'src/', icon: <JsIcon /> },
  { name: 'skills.json', path: 'data/', icon: <JsonIcon /> },
  { name: 'experience.ts', path: 'src/', icon: <TsIcon /> },
  { name: 'contact.css', path: 'src/', icon: <CssIcon /> },
  { name: 'README.md', path: './', icon: <MarkdownIcon /> },
  { name: 'hobbies.md', path: './', icon: <MarkdownIcon /> },
  { name: '.gitignore', path: './', icon: <GitIcon /> },
  { name: '.env', path: './', icon: <EnvIcon /> }
];

export const CommandPalette = ({ isOpen, onClose, onFileSelect }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Autofocus the input when opened
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter files
  const filteredFiles = FILES_LIST.filter(file =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside the modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredFiles.length > 0 ? (prev + 1) % filteredFiles.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredFiles.length > 0 ? (prev - 1 + filteredFiles.length) % filteredFiles.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredFiles[selectedIndex]) {
          onFileSelect(filteredFiles[selectedIndex].name);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredFiles, selectedIndex, onFileSelect, onClose]);

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-black/40 backdrop-blur-[2px]">
      <div 
        ref={modalRef}
        className="w-full max-w-xl bg-[#16171d]/95 border border-[#2e303a] rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs text-gray-300"
      >
        {/* Search input field */}
        <div className="relative flex items-center border-b border-[#2e303a] px-4 py-3 bg-[#0d1117]/50">
          <span className="text-[#6a9955] mr-2 block font-semibold select-none">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Go to file or run command..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent border-none outline-none text-gray-200 placeholder-gray-500 font-mono text-xs w-full"
          />
          <span className="text-[10px] text-gray-500 bg-gray-800 border border-gray-700 rounded px-1.5 py-0.2 select-none">
            Esc
          </span>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto max-h-[350px] py-2">
          {filteredFiles.length > 0 ? (
            <>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest px-4 py-1.5 font-bold select-none">
                Files
              </div>
              {filteredFiles.map((file, index) => (
                <div
                  key={file.name}
                  onClick={() => onFileSelect(file.name)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-colors select-none ${
                    index === selectedIndex
                      ? 'bg-[#007acc]/20 text-white'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {file.icon}
                    <span>{file.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-light">{file.path}</span>
                </div>
              ))}
            </>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500 select-none">
              No matching files found.
            </div>
          )}
        </div>

        {/* Footer help */}
        <div className="border-t border-[#2e303a] bg-[#0d1117]/35 px-4 py-2 text-[10px] text-gray-500 flex justify-between select-none">
          <div className="flex gap-3">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
          </div>
          <span>Tip: type to filter workspace files</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
