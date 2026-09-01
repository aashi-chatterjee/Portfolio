import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Cpu,
  Layout,
  Workflow
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const formatCategoryLabel = (category: string) => {
    switch (category) {
      case 'product_design': return 'Product Design';
      case 'ai_product': return 'AI Product';
      case 'ai_ml': return 'AI & Machine Learning';
      case 'fullstack': return 'Full Stack';
      case 'frontend': return 'Frontend & UI';
      case 'cloud_devops': return 'Cloud & DevOps';
      default: return category.replace('_', ' ');
    }
  };

  const hasArchitecture = project.architecture && (
    (project.architecture.frontend && project.architecture.frontend.length > 0) ||
    (project.architecture.backend && project.architecture.backend.length > 0) ||
    (project.architecture.database && project.architecture.database.length > 0) ||
    (project.architecture.infrastructure && project.architecture.infrastructure.length > 0)
  );

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="space-y-1.5 pr-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                {formatCategoryLabel(project.category)}
              </span>
              {project.metrics && (
                <span className="text-xs font-mono theme-time-badge px-2.5 py-0.5 rounded-full border">
                  {project.metrics}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-slate-100 font-heading">
              {project.title}
            </h3>
          </div>

          <button
            id="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Case Study Overview</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Architecture / Structure Matrix (If defined) */}
          {hasArchitecture && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-indigo-400" />
                <span>Product & Technical Structure</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture?.frontend && project.architecture.frontend.length > 0 && (
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Interface & Prototyping</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.frontend.map((item, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.architecture?.backend && project.architecture.backend.length > 0 && (
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                      <Server className="w-3.5 h-3.5" />
                      <span>System Logic & AI</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.backend.map((item, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.architecture?.database && project.architecture.database.length > 0 && (
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                      <Database className="w-3.5 h-3.5" />
                      <span>Data & Research Datasets</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.database.map((item, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.architecture?.infrastructure && project.architecture.infrastructure.length > 0 && (
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                      <Cloud className="w-3.5 h-3.5" />
                      <span>Platforms & Infrastructure</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.infrastructure.map((item, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Product Features & Capabilities</h4>
              <div className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Solved */}
          {project.challengesSolved && (
            <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Design Challenge & Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challengesSolved}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Focus Areas & Tools</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-indigo-300 border border-slate-700/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                id="modal-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                id="modal-live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold theme-gradient-btn shadow-sm transition-all hover:opacity-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            ) : null}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
