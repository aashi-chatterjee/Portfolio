import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, THEME_OPTIONS } from '../context/ThemeContext';
import { ThemeId } from '../types';

interface ThemeSelectorProps {
  variant?: 'compact' | 'full';
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ variant = 'compact' }) => {
  const { theme, setTheme, currentThemeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'full') {
    return (
      <div className="space-y-3">
        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5 text-amber-400" />
          <span>Select Portfolio Color Palette</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {THEME_OPTIONS.map((opt) => {
            const isSelected = opt.id === theme;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTheme(opt.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-amber-400/80 bg-amber-500/10 shadow-sm'
                    : 'border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div
                  className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center border border-white/10 shadow-inner"
                  style={{ backgroundColor: opt.previewBg }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: opt.previewAccent }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 truncate">{opt.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />}
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{opt.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="theme-selector-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        title="Switch Color Theme"
        className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all shadow-sm cursor-pointer"
      >
        <div
          className="w-3 h-3 rounded-full border border-white/20"
          style={{ backgroundColor: currentThemeConfig.previewAccent }}
        />
        <span className="hidden md:inline-block text-[11px] font-semibold text-slate-300">
          Theme
        </span>
        <Palette className="w-3.5 h-3.5 text-amber-400 ml-0.5" />
      </button>

      {isOpen && (
        <div
          id="theme-dropdown-menu"
          className="absolute right-0 mt-2 w-64 p-2 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2.5 py-2 border-b border-slate-800/80 mb-1 flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
              Color Schemes
            </span>
            <Sparkles className="w-3 h-3 text-amber-400" />
          </div>

          <div className="space-y-1">
            {THEME_OPTIONS.map((opt) => {
              const isSelected = opt.id === theme;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 text-white font-medium border border-amber-500/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full border border-white/10 shrink-0 shadow-sm"
                    style={{ backgroundColor: opt.previewAccent }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="truncate font-medium">{opt.name}</div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
