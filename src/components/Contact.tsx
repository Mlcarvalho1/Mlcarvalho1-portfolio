import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, tArray } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={20} />,
      label: t('contact.email'),
      value: "manoel.carvalho@example.com",
      link: "mailto:manoel.carvalho@example.com"
    },
    {
      icon: <MapPin className="text-accent" size={20} />,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      link: null
    },
    {
      icon: <Phone className="text-primary" size={20} />,
      label: t('contact.availableFor'),
      value: t('contact.availableForValue'),
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-primary" size={24} />,
      label: "LinkedIn",
      username: "manoel-carvalho-350507236",
      link: "https://www.linkedin.com/in/manoel-carvalho-350507236",
      description: t('contact.professionalProfile')
    },
    {
      icon: <Github className="text-foreground" size={24} />,
      label: "GitHub",
      username: "Mlcarvalho1",
      link: "https://github.com/Mlcarvalho1",
      description: t('contact.codeRepositories')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">{t('contact.getInTouch')}</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-subtle rounded-lg p-6">
                <h4 className="font-semibold mb-3">{t('contact.openToOpportunities')}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tArray('contact.opportunities').map((opportunity, index) => (
                    <li key={index}>• {opportunity}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links and CTA */}
            <div>
              <h3 className="text-2xl font-bold mb-8">{t('contact.findMeOnline')}</h3>

              <div className="space-y-6 mb-8">
                {socialLinks.map((social, index) => (
                  <div key={index} className="bg-card rounded-lg shadow-card p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-background p-3 rounded-full">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{social.label}</h4>
                          <span className="text-sm text-muted-foreground">@{social.username}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{social.description}</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={social.link} target="_blank" rel="noopener noreferrer">
                            {t('contact.visitProfile')}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-primary text-white rounded-lg p-8 text-center">
                <Send className="mx-auto mb-4" size={32} />
                <h4 className="text-xl font-bold mb-4">{t('contact.readyToStart')}</h4>
                <p className="opacity-90 mb-6">
                  {t('contact.conversationDesc')}
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:mlc6@cin.ufpe.br">
                    <Mail size={16} className="mr-2" />
                    {t('contact.sendEmail')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;