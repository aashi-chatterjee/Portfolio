import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/portfolioData';
import { ProfileData } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

const LOCAL_STORAGE_KEY = 'portfolio_custom_profile_v3';

function PortfolioApp() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialProfileData,
          ...parsed,
          achievements: parsed.achievements || initialProfileData.achievements,
        };
      }
    } catch (e) {
      console.warn('Failed to load customized profile from localStorage', e);
    }
    return initialProfileData;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProfile));
    } catch (e) {
      console.error('Failed to save profile to localStorage', e);
    }
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset profile', e);
    }
    setIsCustomizerOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-250 selection:bg-amber-500/25 selection:text-amber-200">
      {/* Top Fixed Navigation */}
      <Navbar
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <Biography
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <ProjectsSection
          projects={profile.projects}
        />

        <SkillsSection
          skills={profile.skills}
        />

        <ExperienceSection
          experience={profile.experience}
        />

        <AchievementsSection
          achievements={profile.achievements || initialProfileData.achievements}
        />

        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
      />

      {/* Resume / CV Modal */}
      <ResumeModal
        profile={profile}
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Interactive Customizer Modal */}
      <ProfileCustomizerModal
        profile={profile}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

