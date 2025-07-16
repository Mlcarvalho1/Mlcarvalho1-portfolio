import { Code, Database, Smartphone, Globe, Cloud, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Go", level: 75 },
        { name: "C++", level: 80 },
        { name: "Haskell", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      icon: <Smartphone className="text-accent" size={24} />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Expo", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Mobile UI/UX", level: 85 }
      ]
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Web Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "RESTful APIs", level: 85 }
      ]
    },
    {
      icon: <Database className="text-accent" size={24} />,
      title: "Databases & Backend",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase Firestore", level: 85 },
        { name: "API Design", level: 80 }
      ]
    },
    {
      icon: <Cloud className="text-primary" size={24} />,
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 70 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      icon: <Cog className="text-accent" size={24} />,
      title: "Other Technologies",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Data Analysis", level: 80 },
        { name: "Algorithms", level: 85 },
        { name: "System Design", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-lg shadow-card p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Rust", "Kubernetes", "TypeScript", "GraphQL", "AWS", "React Native Web"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;