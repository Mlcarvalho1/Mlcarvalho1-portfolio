import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import JapanInterest from '@/components/JapanInterest';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <JapanInterest />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
