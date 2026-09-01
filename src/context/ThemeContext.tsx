import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId } from '../types';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  description: string;
  previewBg: string;
  previewAccent: string;
  isLight?: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'bronze',
    name: 'Warm Obsidian & Bronze',
    description: 'Sophisticated warm charcoal with champagne gold & bronze accents (Editorial & Luxury)',
    previewBg: '#0e1013',
    previewAccent: '#e5a95d',
    isLight: false,
  },
  {
    id: 'graphite',
    name: 'Graphite & Titanium',
    description: 'Ultra-clean deep monochrome with violet accents (Linear / Minimalist)',
    previewBg: '#090a0c',
    previewAccent: '#818cf8',
    isLight: false,
  },
  {
    id: 'emerald',
    name: 'Sage & Forest Obsidian',
    description: 'Deep botanical charcoal with calming sage & mint emerald accents',
    previewBg: '#080d0a',
    previewAccent: '#10b981',
    isLight: false,
  },
  {
    id: 'midnight',
    name: 'Midnight & Cobalt',
    description: 'Deep space navy with electric indigo and ice blue accents',
    previewBg: '#080c16',
    previewAccent: '#38bdf8',
    isLight: false,
  },
  {
    id: 'paper',
    name: 'Studio Light (Paper)',
    description: 'Warm editorial cream canvas with rich charcoal typography & terracotta accents',
    previewBg: '#f8f7f5',
    previewAccent: '#b45309',
    isLight: true,
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentThemeConfig: ThemeOption;
}

const THEME_STORAGE_KEY = 'portfolio_active_theme_v1';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId;
      if (saved && THEME_OPTIONS.some(t => t.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    // Default to the refined Warm Obsidian & Bronze theme
    return 'bronze';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    // Apply data-theme to document element
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'paper') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
    }
  }, [theme]);

  const currentThemeConfig = THEME_OPTIONS.find(t => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
