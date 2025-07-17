import { Quote, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import danielAvatar from '@/assets/daniel-avatar.jpg';
import marceloAvatar from '@/assets/marcelo-avatar.jpg'

const Recommendations = () => {
  const { t } = useLanguage();
  const recommendations = [
    {
      name: "Marcelo Gomes",
      title: "Fullstack Developer",
      company: "JavaScript | TypeScript | React | React Native | Node | Jest | Git | SQL",
      date: "July 16, 2025",
      content: "Working with Manoel has been a very positive experience. He is an extremely committed professional, with a solid technical foundation and a collaborative attitude on a daily basis. Always ready to help, he actively contributes to team growth and takes on leadership in projects with great responsibility and clarity. He is someone who instills confidence, solves problems efficiently, and is always looking for the best solutions together with the team.",
      avatar: marceloAvatar,
      linkedinUrl: "#"
    },
    {
      name: "Daniel Cavalcanti",
      title: "Full-Stack Developer",
      company: "LinkedIn",
      date: "July 16, 2025", 
      content: "I had the experience of working side by side with Manoel and I know what a great professional he is, excellent technical level in various programming languages, leadership being one of his strong points, I certainly recommend him!",
      avatar: danielAvatar,
      linkedinUrl: "#"
    }
  ];

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('recommendations.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('recommendations.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="bg-card rounded-lg shadow-card border border-border p-8 hover-scale">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={recommendation.avatar}
                      alt={`${recommendation.name} avatar`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-border"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          {recommendation.name}
                          <Linkedin size={16} className="text-blue-600" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{recommendation.title}</p>
                        <p className="text-xs text-muted-foreground">{recommendation.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{recommendation.date}</span>
                    </div>

                    <div className="relative">
                      <Quote size={20} className="absolute -top-2 -left-2 text-accent opacity-50" />
                      <blockquote className="text-muted-foreground leading-relaxed pl-6 italic">
                        "{recommendation.content}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-subtle rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{t('recommendations.connectLinkedIn')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('recommendations.linkedInDesc')}
              </p>
              <a
                href="https://www.linkedin.com/in/manoel-carvalho-350507236"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
              >
                <Linkedin size={16} />
                {t('recommendations.viewProfile')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;