import { ExternalLink, Github, Smartphone, Users, Zap, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import amigoOneImage from '@/assets/amigo-one.webp'
import goMessengerImage from '@/assets/go-message.webp'
import cdaAppImage from '@/assets/cda.webp'
import jublyAppImage from '@/assets/jubly-app.png'

const Projects = () => {
  const projects = [
    {
      title: "Amigo One",
      description: "Amigo One is a mobile-first, all‑in‑one telehealth platform empowering medical professionals to manage their practice entirely via smartphone—covering patient scheduling, teleconsultations, digital prescriptions, secure recordkeeping, billing, and even digital accounting and marketing modules",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AI APIs"],
      features: [
        "Secure Telemedicine",
        "Digital Prescriptions & Documents",
        "AI-powered diagnosis assistance",
        "Patient & Appointment Management",
        "Secure, Compliant Mobile Platform"
      ],
      icon: <Heart className="text-destructive" size={32} />,
      status: "Production - 20000+ daily users",
      liveLink: "https://www.amigotech.com.br/amigo-one",
      image: amigoOneImage
    },
    {
      title: "Go messager",
      description: "Led the development of the backend for a real-time web chat application that enables users to exchange messages through an interactive interface. Gained hands-on experience with Go (Golang), focusing on performance and concurrency, and implemented WebSocket communication to ensure seamless, low-latency message delivery.",
      technologies: ["React", "Golang", "Go Fiber", "PostgreSQL", "TypeScript"],
      features: [
        "Chat interface",
        "User authentication",
        "Real-time messaging",
        "Websocket"
      ],
      icon: <MessageCircle className="text-primary" size={32} />,
      status: "Beta Testing",
      githubLink: "https://github.com/Mlcarvalho1/go-messenger",
      image: goMessengerImage
    },
    {
      title: "Jubly App",
      description: "A full-stack service matching platform that connects service providers with customers. Features real-time matching algorithms, secure payment processing, and comprehensive user management.",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      features: [
        "Smart service matching algorithm",
        "Advanced search and filtering",
      ],
      icon: <Users className="text-primary" size={32} />,
      status: "MVP Complete",
      image: jublyAppImage
    },
    {
      title: "CDA App",
      description: "A point management system with gamification elements. Includes user authentication, real-time point tracking, rewards system, and analytics dashboard for administrators.",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      features: [
        "Gamified point system",
        "Rewards and achievement system",
      ],
      icon: <Zap className="text-accent" size={32} />,
      status: "Production",
      image: cdaAppImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my development work and technical achievements
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
                                Demo
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
                            Key Features
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>• {feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Tech Stack</h4>
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
              <h3 className="text-xl font-semibold mb-4">More Projects</h3>
              <p className="text-muted-foreground mb-6">
                Additional projects and contributions available on my GitHub profile, including 
                open-source contributions, personal experiments, and academic projects.
              </p>
              <Button asChild>
                <a href="https://github.com/Mlcarvalho1" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  View All Projects
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