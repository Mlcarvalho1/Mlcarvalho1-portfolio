import { Calendar, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '@/contexts/LanguageContext'; // ajuste o path conforme seu projeto

const Timeline = () => {
  const { t } = useLanguage();

  const timelineData = [
    {
      date: t('timeline.teamLeadDate'),
      title: t('timeline.teamLeadTitle'),
      subtitle: "Amigo Tech • Full-time",
      description: t('timeline.teamLeadDescription'),
      location: t('contact.locationValue'),
      duration: t('timeline.teamLeadDuration'),
      competencies: [
        t('timeline.competency.agile'),
        t('timeline.competency.kanban'),
        t('timeline.competency.itLeadership'),
        t('timeline.competency.leadingTeams')
      ],
      icon: <Briefcase className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: t('timeline.softwareEngineerDate'),
      title: t('timeline.softwareEngineerTitle'),
      subtitle: "Amigo Tech • Full-time",
      description: t('timeline.softwareEngineerDescription'),
      location: t('contact.locationValue'),
      duration: t('timeline.softwareEngineerDuration'),
      competencies: ["HTML5", "JavaScript", "Node.js", "React Native", "React.js", "Redux.js", "Sequelize.js", "Artificial Intelligence (AI)", "NestJS"],
      icon: <Code className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: t('timeline.juniorEngineerDate'),
      title: t('timeline.juniorEngineerTitle'),
      subtitle: "Amigo Tech • Full-time",
      description: t('timeline.juniorEngineerDescription'),
      location: t('contact.locationValue'),
      duration: t('timeline.juniorEngineerDuration'),
      competencies: ["React.js", "CSS", "Node.js", "GitHub", "Redux.js", "JSX", "React Native", "JavaScript", "Git", "Styled-components"],
      icon: <Code className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: t('timeline.internDate'),
      title: t('timeline.internTitle'),
      subtitle: "Amigo Tech • Part-time",
      description: t('timeline.internDescription'),
      location: t('contact.locationValue'),
      duration: t('timeline.internDuration'),
      competencies: ["React.js", "CSS", "Node.js", "Sequelize.js", "HTML5", "npm", "JavaScript"],
      icon: <Award className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: t('timeline.educationDate'),
      title: t('education.degree'),
      subtitle: t('education.university'),
      description: t('education.description'),
      location: t('contact.locationValue'),
      duration: t('education.status'),
      competencies: [
        t('education.coreCourseworkValue1'),
        t('education.coreCourseworkValue2'),
        t('education.coreCourseworkValue3'),
        t('education.coreCourseworkValue4')
      ],
      icon: <GraduationCap className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('timeline.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('timeline.subtitle')}</p>
          </div>

          <div className="timeline-container">
            <VerticalTimeline lineColor="var(--border)">
              {timelineData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={item.contentStyle}
                  contentArrowStyle={item.contentArrowStyle}
                  date={item.date}
                  iconStyle={item.iconStyle}
                  icon={item.icon}
                >
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <h4 className="text-lg text-primary font-semibold mb-2">{item.subtitle}</h4>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.competencies && (
                      <div>
                        <h5 className="text-sm font-semibold mb-2 text-foreground">{t('timeline.keyCompetencies')}</h5>
                        <div className="flex flex-wrap gap-2">
                          {item.competencies.map((competency, compIndex) => (
                            <span
                              key={compIndex}
                              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                            >
                              {competency}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">{t('timeline.whatsNext')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('timeline.whatsNextDesc')}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Advanced AI Integration", "Cloud Architecture", "Open Source Contributions", "Technical Leadership"].map((goal) => (
                  <span
                    key={goal}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {goal}
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

export default Timeline;