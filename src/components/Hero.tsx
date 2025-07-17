import { ArrowDown, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Manoel Carvalho
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              {t('hero.title')}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={16} />
              <span>{t('hero.education')}</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToAbout} className="shadow-elegant">
              {t('hero.viewWork')}
              <ArrowDown className="ml-2" size={16} />
            </Button>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://github.com/Mlcarvalho1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/in/manoel-carvalho-350507236" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={24} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;