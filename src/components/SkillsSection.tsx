import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Search, 
  Layers, 
  Server, 
  Cloud, 
  Boxes, 
  Bot, 
  Sparkles, 
  CheckCircle, 
  Cpu, 
  Database, 
  Palette, 
  Zap, 
  Box, 
  Workflow, 
  CheckCircle2, 
  Shield,
  GitBranch,
  Layout,
  MousePointer2,
  Component,
  MonitorSmartphone,
  Accessibility,
  Figma,
  Braces,
  Smartphone,
  BrainCircuit,
  SlidersHorizontal
} from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: SkillCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Disciplines', icon: SlidersHorizontal },
    { id: 'product_design', label: 'Product Design & UX', icon: Layout },
    { id: 'ui_design', label: 'UI & Visual Systems', icon: Palette },
    { id: 'tools', label: 'Design Tools', icon: Workflow },
    { id: 'technology', label: 'Frontend & Tech', icon: Code2 },
    { id: 'ai_data', label: 'AI & Data', icon: BrainCircuit },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-amber-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-indigo-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-sky-400" />;
      case 'MousePointer2': return <MousePointer2 className="w-5 h-5 text-rose-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'Component': return <Component className="w-5 h-5 text-cyan-400" />;
      case 'MonitorSmartphone': return <MonitorSmartphone className="w-5 h-5 text-teal-400" />;
      case 'Accessibility': return <Accessibility className="w-5 h-5 text-emerald-400" />;
      case 'Figma': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-purple-400" />;
      case 'Code': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Braces': return <Braces className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-pink-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-300" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Box': return <Box className="w-5 h-5 text-sky-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-indigo-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const getLevelBadgeClass = (level: SkillItem['level']) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Advanced':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      case 'Intermediate':
        return 'bg-sky-500/10 text-sky-300 border-sky-500/30';
      case 'Developing':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Proficient':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities & Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-heading">
            Skills & Design Matrix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A synthesis of user-centered design, UI systems, prototyping tools, and engineering technologies.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`skill-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'theme-gradient-btn skill-tab-active font-semibold shadow-md'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skill (e.g. Figma, React, Research)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Name + Level */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 transition-colors">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-100 text-sm group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {skill.years} {skill.years === 1 ? 'Year' : 'Years'} Exp
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border uppercase tracking-wider ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Description */}
                  {skill.description && (
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Proficiency Progress Bar */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-medium">Mastery / Confidence</span>
                    <span className="font-mono font-semibold text-slate-300">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full skill-progress-bar rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
