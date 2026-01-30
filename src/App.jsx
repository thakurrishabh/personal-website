import HeroBackground from './components/Hero/HeroBackground';
import WorkSection from './components/Work/WorkSection';
import SkillsSection from './components/Skills/SkillsSection';
import EducationSection from './components/Education/EducationSection';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-900 selection:bg-indigo-500/30 overflow-x-hidden">
      <HeroBackground />
      <WorkSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}

export default App;
