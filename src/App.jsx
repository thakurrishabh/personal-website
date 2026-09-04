import HeroBackground from './components/Hero/HeroBackground';
import WorkSection from './components/Work/WorkSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import EducationSection from './components/Education/EducationSection';
import ContactSection from './components/Contact/ContactSection';
import CloudRouter from './components/Shared/CloudRouter';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-900 selection:bg-indigo-500/30 overflow-x-hidden">
      <HeroBackground />
      <WorkSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <div className="relative bg-[#0B1120] flex justify-center -mt-16 pb-0 z-20">
        <CloudRouter label="KNOWLEDGE_EGRESS" direction="down" />
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
