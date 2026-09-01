import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-heading">
            Professional Experience & Milestones
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Track record of designing user experiences, machine learning products, and engineering projects.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500/40 before:via-slate-800 before:to-transparent">
          
          {experience.map((item, index) => {
            return (
              <div
                key={item.id}
                id={`experience-item-${item.id}`}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-amber-500 flex items-center justify-center z-10 shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>

                {/* Content Card (Full width on mobile, staggered or clean on desktop) */}
                <div className="ml-10 sm:ml-0 sm:w-full sm:px-8">
                  <div className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 shadow-lg transition-all space-y-4">
                    
                    {/* Header: Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100 font-heading">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
                          <Building2 className="w-4 h-4 text-amber-400" />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono theme-time-badge px-2.5 py-1 rounded-full border">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full border border-slate-700/60">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Achievements Checklist */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2 pt-1">
                        {item.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies Tag Group */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
