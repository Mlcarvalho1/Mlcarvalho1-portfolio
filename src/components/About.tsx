import { Code, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with React Native, Node.js, and modern web technologies."
    },
    {
      icon: <Zap className="text-accent" size={24} />,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges through innovative algorithmic approaches."
    },
    {
      icon: <Heart className="text-destructive" size={24} />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies to stay at the forefront of development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Get to know more about my journey and passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated Computer Engineering student at the Federal University of Pernambuco (UFPE), 
                with a strong passion for developing innovative mobile and web applications. My journey in 
                technology has been driven by curiosity and a desire to create meaningful solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With experience across multiple programming languages and frameworks, I've had the opportunity 
                to work on diverse projects, from full-stack React Native applications serving thousands of 
                daily users to complex algorithmic challenges in competitive programming.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm particularly interested in international opportunities, especially in Japan, where I can 
                combine my technical skills with cultural exchange and contribute to innovative projects in 
                a global context.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-primary">Location:</span>
                  <span className="ml-2 text-muted-foreground">Recife, Brazil</span>
                </div>
                <div>
                  <span className="font-medium text-primary">University:</span>
                  <span className="ml-2 text-muted-foreground">Federal University of Pernambuco</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Degree:</span>
                  <span className="ml-2 text-muted-foreground">B.Sc. Computer Engineering</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Expected Graduation:</span>
                  <span className="ml-2 text-muted-foreground">2028</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Focus Areas:</span>
                  <span className="ml-2 text-muted-foreground">Mobile Development, AI/ML, Full-Stack</span>
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