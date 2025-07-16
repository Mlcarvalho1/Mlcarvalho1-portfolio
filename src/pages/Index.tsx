import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import Timeline from '@/components/Timeline';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Timeline />
        <Skills />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
