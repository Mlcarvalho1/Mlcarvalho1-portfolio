import { Code, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: t('about.fullStack'),
      description: t('about.fullStackDesc')
    },
    {
      icon: <Zap className="text-accent" size={24} />,
      title: t('about.problemSolver'),
      description: t('about.problemSolverDesc')
    },
    {
      icon: <Heart className="text-destructive" size={24} />,
      title: t('about.continuousLearner'),
      description: t('about.continuousLearnerDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description2')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description3')}
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-6">{t('about.quickFacts')}</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-primary">{t('about.location')}</span>
                  <span className="ml-2 text-muted-foreground">{t('about.locationValue')}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t('about.university')}</span>
                  <span className="ml-2 text-muted-foreground">{t('about.universityValue')}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t('about.degree')}</span>
                  <span className="ml-2 text-muted-foreground">{t('about.degreeValue')}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t('about.graduation')}</span>
                  <span className="ml-2 text-muted-foreground">{t('about.graduationValue')}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">{t('about.focus')}</span>
                  <span className="ml-2 text-muted-foreground">{t('about.focusValue')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-border hover:shadow-card transition-shadow">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;