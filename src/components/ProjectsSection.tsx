import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Search, 
  Filter,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'product_design', label: 'Product & UX Design' },
    { id: 'ai_product', label: 'AI Products' },
    { id: 'ai_ml', label: 'AI & Machine Learning' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
      const matchesSearch = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const formatCategoryLabel = (category: string) => {
    switch (category) {
      case 'product_design': return 'Product Design';
      case 'ai_product': return 'AI Product';
      case 'ai_ml': return 'AI & ML';
      case 'fullstack': return 'Full Stack';
      case 'frontend': return 'Frontend & UI';
      case 'cloud_devops': return 'Cloud & DevOps';
      default: return category.replace('_', ' ');
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Product & Design Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-heading">
            Projects & Case Studies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            End-to-end digital products, UX research case studies, and machine learning applications.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`project-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'theme-gradient-btn font-semibold shadow-md'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="projects-search-input"
              type="text"
              placeholder="Search by name, tag, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Category & Metrics */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {formatCategoryLabel(project.category)}
                    </span>
                    {project.metrics && (
                      <span className="text-[11px] font-mono text-amber-200 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-100 font-heading mb-2 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      id={`project-details-btn-${project.id}`}
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study & Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl ? (
                        <a
                          id={`project-github-btn-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View Source on GitHub"
                          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          id={`project-live-btn-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demo"
                          className="p-2 rounded-lg bg-slate-800/80 hover:bg-amber-600 text-slate-400 hover:text-white border border-slate-700/60 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Modal View */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
