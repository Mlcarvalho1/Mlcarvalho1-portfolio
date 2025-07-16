import { Heart, Globe, Users, Lightbulb, Building, Plane } from 'lucide-react';

const JapanInterest = () => {
  const motivations = [
    {
      icon: <Lightbulb className="text-primary" size={32} />,
      title: "Innovation Hub",
      description: "Japan's cutting-edge technology sector and innovation-driven culture align perfectly with my passion for developing breakthrough solutions in mobile and AI technologies."
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Cultural Exchange",
      description: "I'm eager to experience Japan's unique work culture, collaborative approach, and commitment to continuous improvement (Kaizen), which would enhance my professional growth."
    },
    {
      icon: <Building className="text-primary" size={32} />,
      title: "Global Tech Companies",
      description: "The opportunity to work with world-renowned Japanese tech companies and contribute to products that impact millions of users globally is incredibly motivating."
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      title: "International Perspective",
      description: "Working in Japan would provide invaluable international experience and cross-cultural collaboration skills essential for a global tech career."
    }
  ];

  const interests = [
    "Japanese work philosophy and attention to detail",
    "Advanced robotics and AI development",
    "Mobile technology innovation",
    "Gaming and entertainment technology",
    "Sustainable technology solutions",
    "Cross-cultural team collaboration"
  ];

  const preparation = [
    {
      activity: "Japanese Language Study",
      status: "Currently learning basic Japanese (N5 level)",
      progress: 30
    },
    {
      activity: "Japanese Business Culture",
      status: "Studying cultural norms and business etiquette",
      progress: 60
    },
    {
      activity: "Tech Industry Research",
      status: "Following major Japanese tech companies and trends",
      progress: 80
    }
  ];

  return (
    <section id="japan" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Japan?</h2>
            <p className="text-lg text-muted-foreground">
              My motivation and preparation for an international internship experience in Japan
            </p>
          </div>

          {/* Motivations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">My Motivation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {motivations.map((motivation, index) => (
                <div key={index} className="bg-card rounded-lg shadow-card p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-background p-3 rounded-full flex-shrink-0">
                      {motivation.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">{motivation.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{motivation.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Statement */}
          <div className="mb-16">
            <div className="bg-card rounded-lg shadow-card p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-destructive" size={32} />
                <h3 className="text-2xl font-bold">Personal Statement</h3>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Japan has always fascinated me as a country that seamlessly blends traditional values with 
                  cutting-edge innovation. As a computer engineering student passionate about mobile development 
                  and AI, I see Japan as the perfect environment to challenge myself professionally while gaining 
                  invaluable cultural insights.
                </p>
                <p className="mb-4">
                  The Japanese tech industry's emphasis on quality, user experience, and continuous improvement 
                  resonates deeply with my own development philosophy. I'm particularly interested in how Japanese 
                  companies approach mobile app development and their integration of AI technologies in everyday solutions.
                </p>
                <p>
                  An internship in Japan would not only accelerate my technical growth but also provide me with 
                  a global perspective that I believe is essential for today's interconnected tech world. I'm 
                  committed to making the most of this opportunity through dedicated preparation and an open mind 
                  for learning.
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Areas of Interest</h3>
            <div className="bg-card rounded-lg shadow-card p-8 border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preparation */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">My Preparation Journey</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {preparation.map((item, index) => (
                <div key={index} className="bg-card rounded-lg shadow-card p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-3">{item.activity}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{item.status}</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <div className="text-right text-xs text-muted-foreground mt-1">
                    {item.progress}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary text-white rounded-lg p-8">
              <Plane className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Ready for the Journey</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                I'm excited about the possibility of contributing to Japan's tech ecosystem while growing 
                both professionally and personally through this international experience.
              </p>
              <div className="text-sm opacity-75">
                🇯🇵 Arigatou gozaimasu for considering my application!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JapanInterest;