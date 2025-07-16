import { Trophy, Medal, Target, BookOpen, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-accent" size={32} />,
      title: "AI/ML Competitions",
      items: [
        "Kaggle Competition Participant - Multiple data science challenges",
        "University AI Hackathon - Top 10 finalist",
        "Local Machine Learning Contest - 2nd Place"
      ]
    },
    {
      icon: <Medal className="text-primary" size={32} />,
      title: "Programming Contests",
      items: [
        "ICPC Regional Programming Contest - Participant",
        "University Programming Marathon - Top 15",
        "Online Competitive Programming - Regular participant"
      ]
    },
    {
      icon: <Target className="text-destructive" size={32} />,
      title: "Technical Achievements",
      items: [
        "Built mobile app serving 1000+ daily users",
        "Contributed to open-source projects",
        "Mentored junior developers in university projects"
      ]
    }
  ];

  const publications = [
    {
      title: "Machine Learning Approaches for Mobile App Performance Optimization",
      type: "Research Paper (In Progress)",
      description: "Investigating ML techniques to optimize React Native app performance",
      status: "Draft Phase"
    },
    {
      title: "Comparative Analysis of Cross-Platform Mobile Development Frameworks",
      type: "Technical Article",
      description: "Comprehensive comparison of React Native, Flutter, and native development",
      status: "Published on Medium"
    },
    {
      title: "Healthcare Mobile App: Architecture and Scalability Considerations",
      type: "Case Study",
      description: "Documentation of Amigo One app development and lessons learned",
      status: "In Review"
    }
  ];

  const certifications = [
    "React Native Certified Developer",
    "Firebase Certified",
    "AWS Cloud Practitioner (Pursuing)",
    "Google Mobile Web Specialist (Pursuing)"
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Highlights of my competitive programming, research, and professional accomplishments
            </p>
          </div>

          {/* Competition Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Competitions & Contests</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((category, index) => (
                <div key={index} className="bg-card rounded-lg shadow-card p-6 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Star size={12} className="text-accent mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Publications & Research */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Publications & Research</h3>
            <div className="grid lg:grid-cols-1 gap-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-gradient-subtle rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BookOpen className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <h4 className="text-lg font-semibold">{pub.title}</h4>
                        <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-md">
                          {pub.status}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">{pub.type}</p>
                      <p className="text-muted-foreground">{pub.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-lg shadow-card p-8 border border-border">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Certifications & Training</h3>
              <p className="text-muted-foreground">Professional certifications and continuous learning</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Medal className="text-primary" size={16} />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kaggle Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Active Kaggle Participant</h3>
              <p className="mb-6 opacity-90">
                Regularly participating in machine learning competitions and contributing to the data science community
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="block font-semibold">Competitions</span>
                  <span>5+ Participated</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="block font-semibold">Notebooks</span>
                  <span>10+ Published</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="block font-semibold">Rank</span>
                  <span>Bronze Tier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;