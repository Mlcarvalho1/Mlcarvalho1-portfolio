import { Calendar, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  const timelineData = [
    {
      date: "Feb 2025 - Present",
      title: "Development Team Lead",
      subtitle: "Amigo Tech • Full-time",
      description: "Leading development teams with focus on Agile Project Management, Kanban methodologies, and IT Leadership. Managing complex technical projects and mentoring junior developers.",
      location: "Recife, Pernambuco, Brazil",
      duration: "6 months",
      competencies: ["Agile Project Management", "Kanban", "IT Leadership", "Leading Development Teams"],
      icon: <Briefcase className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: "Dec 2023 - Present",
      title: "Software Engineer",
      subtitle: "Amigo Tech • Full-time",
      description: "Full-stack development focusing on React Native, React.js, and Node.js applications. Implementing AI integrations and working with modern JavaScript frameworks.",
      location: "Recife, Pernambuco, Brazil",
      duration: "1 year 8 months",
      competencies: ["HTML5", "JavaScript", "Node.js", "React Native", "React.js", "Redux.js", "Sequelize.js", "Artificial Intelligence (AI)", "NestJS"],
      icon: <Code className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: "Aug 2022 - Dec 2023",
      title: "Junior Software Engineer",
      subtitle: "Amigo Tech • Full-time",
      description: "Developed React.js and React Native applications with focus on modern web technologies and mobile development. Worked extensively with state management and styling solutions.",
      location: "Recife, Pernambuco, Brazil",
      duration: "1 year 5 months",
      competencies: ["React.js", "CSS", "Node.js", "GitHub", "Redux.js", "JSX", "React Native", "JavaScript", "Git", "Styled-components"],
      icon: <Code className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: "Apr 2022 - Aug 2022",
      title: "Software Engineer Intern",
      subtitle: "Amigo Tech • Part-time",
      description: "Started professional journey as an intern, learning React.js fundamentals and backend development with Node.js. Gained hands-on experience with modern web development tools.",
      location: "Recife, Pernambuco, Brazil",
      duration: "5 months",
      competencies: ["React.js", "CSS", "Node.js", "Sequelize.js", "HTML5", "npm", "JavaScript"],
      icon: <Award className="text-primary" size={20} />,
      iconStyle: { background: 'var(--primary)', color: '#fff' },
      contentStyle: { background: 'var(--card)', border: '1px solid var(--border)' },
      contentArrowStyle: { borderRight: '7px solid var(--border)' }
    },
    {
      date: "2024 - Present",
      title: "Computer Engineering Student",
      subtitle: "Federal University of Pernambuco (UFPE)",
      description: "Pursuing a comprehensive degree in Computer Engineering with focus on software development, algorithms, and emerging technologies.",
      location: "Recife, Brazil",
      duration: "Ongoing",
      competencies: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              My path through education, projects, and professional development
            </p>
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
                        <h5 className="text-sm font-semibold mb-2 text-foreground">Key Competencies:</h5>
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
              <h3 className="text-xl font-semibold mb-4">What's Next?</h3>
              <p className="text-muted-foreground mb-4">
                Continuously expanding my skills and working on innovative projects
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
