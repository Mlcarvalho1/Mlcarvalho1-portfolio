import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('education.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('education.subtitle')}
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-card p-8 border border-border">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                <GraduationCap className="text-primary" size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t('education.degree')}</h3>
                    <p className="text-xl text-primary font-semibold mb-2">
                      {t('education.university')}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{t('education.period')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{t('education.location')}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('education.description')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="text-accent" size={18} />
                      {t('education.coreCoursework')}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Software Engineering</li>
                      <li>• Database Systems</li>
                      <li>• Computer Networks</li>
                      <li>• Operating Systems</li>
                      <li>• Machine Learning</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="text-accent" size={18} />
                      {t('education.specialization')}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Mobile Application Development</li>
                      <li>• Artificial Intelligence</li>
                      <li>• Full-Stack Web Development</li>
                      <li>• Software Architecture</li>
                      <li>• DevOps & System Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
              <p className="text-sm font-medium text-primary">
                {t('education.status')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;