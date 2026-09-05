import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BentoHero from './components/BentoHero';
import AboutNarrative from './components/AboutNarrative';
import SelectedWork from './components/SelectedWork';
import SkillsSection from './components/SkillsSection';
import TheNumbers from './components/TheNumbers';
import GithubExplorer from './components/GithubExplorer';
import PersonalCurrently from './components/PersonalCurrently';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#e0e0e0] font-sans antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Area */}
      <main>
        {/* SECTION 1 — HERO BENTO GRID */}
        <BentoHero 
          onOpenContact={scrollToContact} 
          onSelectProject={handleSelectProject} 
        />

        {/* SECTION 2 — BEYOND THE CODE (ABOUT STORY) */}
        <AboutNarrative />

        {/* SECTION 3 — SELECTED WORK */}
        <SelectedWork 
          activeModalProjectId={selectedProjectId} 
          setActiveModalProjectId={setSelectedProjectId} 
        />

        {/* SECTION 4 — SKILLS / CAPABILITIES */}
        <SkillsSection />

        {/* SECTION 5 — THE NUMBERS */}
        <TheNumbers />

        {/* SECTION 6 — GITHUB EXPLORER */}
        <GithubExplorer />

        {/* SECTION 7 — PERSONAL / CURRENTLY */}
        <PersonalCurrently />

        {/* SECTION 8 — CONTACT */}
        <ContactSection />
      </main>

    </div>
  );
}
