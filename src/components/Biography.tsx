import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  Zap, 
  Code, 
  HeartHandshake, 
  Compass, 
  Download, 
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Search,
  Sparkles,
  Palette,
  RefreshCw,
  Layout,
  Layers
} from 'lucide-react';
import { ProfileData } from '../types';

interface BiographyProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Biography: React.FC<BiographyProps> = ({ profile, onOpenResume }) => {
  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-heading">
            Designing with empathy, craft, and technical depth
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A look into my design approach, engineering background, and product philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-slate-100 font-heading flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>My Journey & Perspective</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {profile.fullBiography.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>User research & journey mapping</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-fidelity prototyping in Figma</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Scalable design system architecture</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bridging UI design with code & AI</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 font-heading flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Education & Academic Background</span>
              </h3>

              {profile.education.map((edu) => (
                <div key={edu.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-slate-200">
                      {edu.degree} in {edu.field}
                    </span>
                    <span className="text-xs font-mono theme-time-badge px-2.5 py-1 rounded-full border w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400 font-medium">{edu.institution}</div>
                  {edu.honors ? (
                    <div className="text-xs text-amber-400 flex items-center gap-1.5 pt-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{edu.honors}</span>
                    </div>
                  ) : null}
                  {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {edu.relevantCoursework.map((course, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Engineering Principles & Quick Resume CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Design & Engineering Principles */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-100 font-heading flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Design & Product Philosophy</span>
              </h3>

              <div className="space-y-3">
                {profile.philosophy.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all space-y-1.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        {getPhilosophyIcon(item.icon)}
                      </div>
                      <h4 className="font-semibold text-slate-200 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-11">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume / Portfolio PDF Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-100 text-base">Curriculum Vitae & Case Studies</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Complete breakdown of design history, project case studies, and tool proficiencies.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Download className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  id="biography-view-resume-btn"
                  onClick={onOpenResume}
                  className="theme-gradient-btn w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md hover:opacity-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Preview & Print Resume</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
