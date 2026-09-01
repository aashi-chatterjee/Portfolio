import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sliders, Mail, Github, Linkedin } from 'lucide-react';
import { ProfileData } from '../types';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenCustomizer, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo */}
        <a
          id="navbar-brand-link"
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl theme-gradient-btn p-[1.5px] shadow-md shadow-amber-500/15 group-hover:shadow-amber-500/30 transition-all flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-amber-400 group-hover:text-amber-300 transition-colors text-xs sm:text-sm font-heading">
              {profile.name.split(' ').map(n => n[0]).join('') || 'AC'}
            </div>
          </div>
          <div className="min-w-0">
            <span className="font-bold text-slate-100 text-sm sm:text-base lg:text-lg tracking-tight group-hover:text-amber-400 transition-colors block truncate">
              {profile.name}
            </span>
            <span className="hidden md:block text-[11px] text-slate-400 font-mono truncate">
              {profile.title.split('&')[0].trim()}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Items (Visible only on lg: 1024px+ screens) */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`nav-pill-link px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'nav-pill-active bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                    : 'nav-pill-inactive text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Theme Switcher (Desktop: lg+) */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <ThemeSelector variant="compact" />

          <button
            id="navbar-customize-btn"
            onClick={onOpenCustomizer}
            title="Personalize Profile Data"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>Customize</span>
          </button>

          <button
            id="navbar-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-200 hover:from-amber-300 hover:to-amber-100 rounded-lg shadow-sm shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Tablet & Mobile View Controls (< 1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSelector variant="compact" />

          <button
            id="tablet-resume-btn"
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-200 hover:from-amber-300 hover:to-amber-100 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            id="tablet-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Tablet & Mobile Slide-Out Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 sm:px-6 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-link-${link.id}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/25'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
            <button
              id="drawer-customize-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl cursor-pointer"
            >
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Customize Profile & Theme</span>
            </button>

            <button
              id="mobile-drawer-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-200 rounded-xl cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Resume & Case Studies</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 pt-1 border-t border-slate-800/50">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.socialLinks.email}`}
              aria-label="Direct Email"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

