import React from 'react';
import { 
  Trophy, 
  Award, 
  BrainCircuit, 
  Clapperboard, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Star,
  Zap,
  Users,
  Presentation
} from 'lucide-react';
import { AchievementItem } from '../types';

interface AchievementsSectionProps {
  achievements: AchievementItem[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Clapperboard':
        return Clapperboard;
      case 'Presentation':
        return Presentation;
      case 'Users':
        return Users;
      case 'Zap':
        return Zap;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-24 border-t border-slate-800/80 bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Key Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-heading tracking-tight">
            Key Achievements
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Hackathons, technical leadership, and creative initiatives demonstrating problem-solving, collaboration, and execution.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => {
            const IconComponent = getIcon(item.iconName);

            return (
              <div
                key={item.id || index}
                className="achievement-card group relative flex flex-col justify-between rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/40 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Top Bar: Icon + Highlight Badge + Year */}
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {item.highlightBadge && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {item.highlightBadge}
                        </span>
                      )}
                      {item.year && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono theme-time-badge px-2 py-0.5 rounded-full border">
                          <Calendar className="w-3 h-3" />
                          <span>{item.year}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-heading leading-snug group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs font-medium text-slate-400">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Main Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-400 border border-slate-800/80 group-hover:border-slate-700/80 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlight Summary Banner */}
        <div className="achievement-highlight-banner mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900/60 to-amber-500/5 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all shadow-md">
          <div className="flex items-center gap-4">
            <div className="achievement-icon-wrapper w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="achievement-banner-title text-sm sm:text-base font-bold text-slate-100">
                Cross-Functional Leadership & High Impact
              </p>
              <p className="achievement-banner-desc text-xs sm:text-sm text-slate-400 mt-0.5">
                Experience representing teams in national hackathons, leading technical communication, and driving creative growth campaigns.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="theme-gradient-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap shadow-sm hover:opacity-95 transition-opacity cursor-pointer shrink-0 w-full sm:w-auto"
          >
            <span>Let's Collaborate</span>
          </a>
        </div>

      </div>
    </section>
  );
};
