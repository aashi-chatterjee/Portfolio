import React, { useState } from 'react';
import { X, Save, RotateCcw, Sliders, CheckCircle2, User, Globe, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';
import { ThemeSelector } from './ThemeSelector';

interface ProfileCustomizerModalProps {
  profile: ProfileData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProfile: ProfileData) => void;
  onReset: () => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  profile,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    title: profile.title,
    tagline: profile.tagline,
    availability: profile.availability,
    bioSummary: profile.bioSummary,
    location: profile.socialLinks.location,
    email: profile.socialLinks.email,
    github: profile.socialLinks.github,
    linkedin: profile.socialLinks.linkedin,
    twitter: profile.socialLinks.twitter || '',
    yearsExperience: profile.metrics.yearsExperience,
    projectsCompleted: profile.metrics.projectsCompleted,
    userCenteredFocus: profile.metrics.userCenteredFocus || 'End-to-End',
    specialization: profile.metrics.specialization || 'Design + Tech',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ProfileData = {
      ...profile,
      name: formData.name,
      title: formData.title,
      tagline: formData.tagline,
      availability: formData.availability,
      bioSummary: formData.bioSummary,
      metrics: {
        ...profile.metrics,
        yearsExperience: formData.yearsExperience,
        projectsCompleted: formData.projectsCompleted,
        userCenteredFocus: formData.userCenteredFocus,
        specialization: formData.specialization,
      },
      socialLinks: {
        ...profile.socialLinks,
        location: formData.location,
        email: formData.email,
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
      },
    };
    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div
      id="customizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="customizer-modal-container"
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 font-heading">
                Customize Portfolio & Theme
              </h3>
              <p className="text-xs text-slate-400">
                Personalize your palette, name, bio, metrics, and profiles in real-time.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-5 max-h-[calc(90vh-140px)]">
          
          {/* Theme Palette Switcher */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90">
            <ThemeSelector variant="full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl text-xs text-slate-200 focus:outline-none"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Professional Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl text-xs text-slate-200 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Hero Tagline / Value Proposition</label>
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl text-xs text-slate-200 focus:outline-none"
            />
          </div>

          {/* Quick Highlight Stats */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Hero Highlights & Metrics</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Years Exp</label>
                <input
                  type="text"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Case Studies</label>
                <input
                  type="text"
                  name="projectsCompleted"
                  value={formData.projectsCompleted}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Design Process</label>
                <input
                  type="text"
                  name="userCenteredFocus"
                  value={formData.userCenteredFocus}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Background</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Availability / Status Pill</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl text-xs text-slate-200 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Bio Executive Summary</label>
            <textarea
              rows={3}
              name="bioSummary"
              value={formData.bioSummary}
              onChange={handleChange}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl text-xs text-slate-200 focus:outline-none resize-none"
            />
          </div>

          <div className="pt-2 border-t border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Links & Profiles</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">GitHub Profile URL</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">LinkedIn Profile URL</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-slate-200 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-200 hover:from-amber-300 hover:to-amber-100 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
