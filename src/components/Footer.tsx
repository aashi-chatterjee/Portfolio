import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg theme-gradient-btn p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-xs text-amber-400">
                {profile.name.split(' ').map(n => n[0]).join('') || 'AR'}
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 text-sm">{profile.name}</span>
              <p className="text-[11px] text-slate-400">{profile.title.split('&')[0]}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#achievements" className="hover:text-amber-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${profile.socialLinks.email}`}
              title="Email"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-colors ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with modern React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
