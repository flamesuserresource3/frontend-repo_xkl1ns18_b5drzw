import React, { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import HoloNav from './components/HoloNav';
import Projects from './components/Projects';
import SkillsAndContact from './components/SkillsAndContact';

export default function App() {
  useEffect(() => {
    // smooth scrolling for hash changes
    const handler = () => {
      const id = window.location.hash.replace('#', '');
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HoloNav />
      <Hero3D />
      <Projects />
      <SkillsAndContact />
    </div>
  );
}
