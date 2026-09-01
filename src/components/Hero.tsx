import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  Sparkles, 
  Terminal, 
  Code, 
  Layers, 
  Cpu, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-600/10 via-amber-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-700/5 blur-[100px] pointer-events-none -z-10" />
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {profile.availability}
              </span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
                Hi, I'm <span className="theme-gradient-text">{profile.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 leading-snug">
                {profile.title}
              </p>
            </div>

            {/* Tagline & Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{profile.socialLinks.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Human-Centered UX Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Design Systems & Interactive Prototypes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={scrollToProjects}
                className="theme-gradient-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold shadow-md shadow-amber-500/20 hover:opacity-95 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Get in Touch</span>
              </a>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Profile Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  id="hero-github-link"
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-amber-500/50 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-linkedin-link"
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-amber-500/50 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-email-link"
                  href={`mailto:${profile.socialLinks.email}`}
                  title="Direct Email"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-amber-500/50 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile & Code Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />
              
              {/* Terminal / Code Architecture Card */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">designer.profile.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    <Sparkles className="w-3 h-3" />
                    <span>v2.4.0</span>
                  </div>
                </div>

                {/* Simulated Code Block */}
                <div className="font-mono text-xs text-slate-300 space-y-2 leading-relaxed">
                  <div>
                    <span className="text-amber-400">const</span>{' '}
                    <span className="text-amber-200">designer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-amber-300">"{profile.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">"{profile.title}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreToolkit:</span> [
                    <span className="text-amber-200">"Figma"</span>,{' '}
                    <span className="text-amber-200">"UX Research"</span>,{' '}
                    <span className="text-amber-200">"React"</span>,{' '}
                    <span className="text-amber-200">"Design Systems"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-amber-300">"User journeys, intuitive UI & scalable systems"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passions:</span> [
                    <span className="text-amber-100">"Human-Centered Design"</span>,{' '}
                    <span className="text-amber-100">"AI Products"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400">"Open to Opportunities"</span>
                  </div>
                  <div>{'};'}</div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-2xl font-bold text-slate-100 font-heading">
                      {profile.metrics.yearsExperience}+
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Years Experience</div>
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-2xl font-bold text-amber-300 font-heading">
                      {profile.metrics.projectsCompleted}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Case Studies & Work</div>
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-xl font-bold text-amber-400 font-heading">
                      {profile.metrics.userCenteredFocus || "End-to-End"}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Design Process</div>
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-xl font-bold text-emerald-400 font-heading">
                      {profile.metrics.specialization || "Design + Tech"}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Dual Background</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
