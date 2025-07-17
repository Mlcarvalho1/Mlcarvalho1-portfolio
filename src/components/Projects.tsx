import { ExternalLink, Github, Smartphone, Users, Zap, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import amigoOneImage from '@/assets/amigo-one.webp'
import goMessengerImage from '@/assets/go-message.webp'
import cdaAppImage from '@/assets/cda.webp'
import jublyAppImage from '@/assets/jubly-app.png'

const Projects = () => {
  const { t, tArray } = useLanguage();
  
  const projects = [
    {
      title: t('projects.amigo.title'),
      description: t('projects.amigo.description'),
      technologies: ["React Native", "Node.js", "PostgreSQL", "AI APIs"],
      features: tArray('projects.amigo.features'),
      icon: <Heart className="text-destructive" size={32} />,
      status: t('projects.amigo.status'),
      liveLink: "https://www.amigotech.com.br/amigo-one",
      image: amigoOneImage
    },
    {
      title: t('projects.goMessenger.title'),
      description: t('projects.goMessenger.description'),
      technologies: ["React", "Golang", "Go Fiber", "PostgreSQL", "TypeScript"],
      features: tArray('projects.goMessenger.features'),
      icon: <MessageCircle className="text-primary" size={32} />,
      status: t('projects.goMessenger.status'),
      githubLink: "https://github.com/Mlcarvalho1/go-messenger",
      image: goMessengerImage
    },
    {
      title: t('projects.jubly.title'),
      description: t('projects.jubly.description'),
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      features: tArray('projects.jubly.features'),
      icon: <Users className="text-primary" size={32} />,
      status: t('projects.jubly.status'),
      image: jublyAppImage
    },
    {
      title: t('projects.cda.title'),
      description: t('projects.cda.description'),
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      features: tArray('projects.cda.features'),
      icon: <Zap className="text-accent" size={32} />,
      status: t('projects.cda.status'),
      image: cdaAppImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg shadow-card border border-border overflow-hidden">
                {project.image && (
                  <div className="w-full h-64 relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-background p-4 rounded-full flex-shrink-0">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                            {project.status}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {project.liveLink && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                                {t('projects.demo')}
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Smartphone size={18} className="text-accent" />
                            {t('projects.keyFeatures')}
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>• {feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">{t('projects.techStack')}</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card rounded-lg p-8 shadow-card border border-border">
              <h3 className="text-xl font-semibold mb-4">{t('projects.moreProjects')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('projects.moreProjectsDesc')}
              </p>
              <Button asChild>
                <a href="https://github.com/Mlcarvalho1" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  {t('projects.viewAll')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;