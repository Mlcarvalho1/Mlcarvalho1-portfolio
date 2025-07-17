import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.recommendations': 'Recommendations',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Computer Engineering Student & Full-Stack Developer',
    'hero.location': 'Recife, Brazil',
    'hero.education': 'UFPE • Expected 2028',
    'hero.description': 'Passionate about building innovative mobile and web applications. Seeking international internship opportunities in Japan to expand my technical expertise and cultural understanding.',
    'hero.viewWork': 'View My Work',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know more about my journey and passion for technology',
    'about.description1': "I'm a dedicated Computer Engineering student at the Federal University of Pernambuco (UFPE), with a strong passion for developing innovative mobile and web applications. My journey in technology has been driven by curiosity and a desire to create meaningful solutions.",
    'about.description2': 'With experience across multiple programming languages and frameworks, I\'ve had the opportunity to work on diverse projects, from full-stack React Native applications serving thousands of daily users to complex algorithmic challenges in competitive programming.',
    'about.description3': "I'm particularly interested in international opportunities, especially in Japan, where I can combine my technical skills with cultural exchange and contribute to innovative projects in a global context.",
    'about.quickFacts': 'Quick Facts',
    'about.location': 'Location:',
    'about.university': 'University:',
    'about.degree': 'Degree:',
    'about.graduation': 'Expected Graduation:',
    'about.focus': 'Focus Areas:',
    'about.locationValue': 'Recife, Brazil',
    'about.universityValue': 'Federal University of Pernambuco',
    'about.degreeValue': 'B.Sc. Computer Engineering',
    'about.graduationValue': '2028',
    'about.focusValue': 'Mobile Development, AI, Full-Stack',
    'about.fullStack': 'Full-Stack Developer',
    'about.fullStackDesc': 'Building end-to-end solutions with React Native, Node.js, and modern web technologies.',
    'about.problemSolver': 'Problem Solver',
    'about.problemSolverDesc': 'Passionate about tackling complex challenges through innovative algorithmic approaches.',
    'about.continuousLearner': 'Continuous Learner',
    'about.continuousLearnerDesc': 'Always exploring new technologies and methodologies to stay at the forefront of development.',
    
    // Education
    'education.title': 'Education',
    'education.subtitle': 'My academic journey and foundation in Computer Engineering',
    'education.degree': 'Bachelor of Science in Computer Engineering',
    'education.university': 'Federal University of Pernambuco (UFPE)',
    'education.period': '2024 - 2028 (Expected)',
    'education.location': 'Recife, Brazil',
    'education.description': 'Currently pursuing a comprehensive degree in Computer Engineering at one of Brazil\'s most prestigious technical universities. The program combines theoretical foundations with practical applications in software development, algorithms, systems design, and emerging technologies.',
    'education.coreCoursework': 'Core Coursework',
    'education.specialization': 'Specialization Areas',
    'education.status': '🎯 Currently in my second year with strong academic performance and hands-on project experience',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'A comprehensive overview of my technical expertise and proficiency levels',
    'skills.programmingLanguages': 'Programming Languages',
    'skills.mobileDevelopment': 'Mobile Development',
    'skills.webDevelopment': 'Web Development',
    'skills.databasesBackend': 'Databases & Backend',
    'skills.devopsTools': 'DevOps & Tools',
    'skills.otherTechnologies': 'Other Technologies',
    'skills.currentlyLearning': 'Currently Learning',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my development work and technical achievements',
    'projects.amigo.title': 'Amigo One',
    'projects.amigo.description': 'Amigo One is a mobile-first, all‑in‑one telehealth platform empowering medical professionals to manage their practice entirely via smartphone—covering patient scheduling, teleconsultations, digital prescriptions, secure recordkeeping, billing, and even digital accounting and marketing modules',
    'projects.amigo.status': 'Production - 20000+ daily users',
    'projects.amigo.features': [
      'Secure Telemedicine',
      'Digital Prescriptions & Documents',
      'AI-powered diagnosis assistance',
      'Patient & Appointment Management',
      'Secure, Compliant Mobile Platform'
    ],
    'projects.goMessenger.title': 'Go messager',
    'projects.goMessenger.description': 'Led the development of the backend for a real-time web chat application that enables users to exchange messages through an interactive interface. Gained hands-on experience with Go (Golang), focusing on performance and concurrency, and implemented WebSocket communication to ensure seamless, low-latency message delivery.',
    'projects.goMessenger.status': 'Beta Testing',
    'projects.goMessenger.features': [
      'Chat interface',
      'User authentication',
      'Real-time messaging',
      'Websocket'
    ],
    'projects.jubly.title': 'Jubly App',
    'projects.jubly.description': 'A full-stack service matching platform that connects service providers with customers. Features real-time matching algorithms, secure payment processing, and comprehensive user management.',
    'projects.jubly.status': 'MVP Complete',
    'projects.jubly.features': [
      'Smart service matching algorithm',
      'Advanced search and filtering'
    ],
    'projects.cda.title': 'CDA App',
    'projects.cda.description': 'A point management system with gamification elements. Includes user authentication, real-time point tracking, rewards system, and analytics dashboard for administrators.',
    'projects.cda.status': 'Production',
    'projects.cda.features': [
      'Gamified point system',
      'Rewards and achievement system'
    ],
    'projects.demo': 'Demo',
    'projects.keyFeatures': 'Key Features',
    'projects.techStack': 'Tech Stack',
    'projects.moreProjects': 'More Projects',
    'projects.moreProjectsDesc': 'Additional projects and contributions available on my GitHub profile, including open-source contributions, personal experiments, and academic projects.',
    'projects.viewAll': 'View All Projects',
    
    // Recommendations
    'recommendations.title': 'Recommendations',
    'recommendations.subtitle': 'What colleagues and collaborators say about working with me',
    'recommendations.connectLinkedIn': 'Connect with me on LinkedIn',
    'recommendations.linkedInDesc': 'See more recommendations and professional connections',
    'recommendations.viewProfile': 'View LinkedIn Profile',
    
    // Contact
    'contact.title': "Let's Connect",
    'contact.subtitle': "I'm always excited to discuss new opportunities and collaborations",
    'contact.getInTouch': 'Get in Touch',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.locationValue': 'Recife, Brazil',
    'contact.availableFor': 'Available for',
    'contact.availableForValue': 'Video calls, Interviews',
    'contact.openToOpportunities': 'Open to Opportunities',
    'contact.opportunities': [
      'International internships (Japan preferred)',
      'Full-stack development projects',
      'Mobile app development collaborations',
      'AI/ML research opportunities',
      'Open source contributions'
    ],
    'contact.findMeOnline': 'Find Me Online',
    'contact.professionalProfile': 'Professional profile and work experience',
    'contact.codeRepositories': 'Code repositories and contributions',
    'contact.visitProfile': 'Visit Profile',
    'contact.readyToStart': 'Ready to Start a Conversation?',
    'contact.conversationDesc': "Whether it's about opportunities, project collaborations, or just a friendly chat about technology, I'd love to hear from you!",
    'contact.sendEmail': 'Send Email'
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.education': 'Educação',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.recommendations': 'Recomendações',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Estudante de Engenharia da Computação & Desenvolvedor Full-Stack',
    'hero.location': 'Recife, Brasil',
    'hero.education': 'UFPE • Conclusão em 2028',
    'hero.description': 'Apaixonado por construir aplicações móveis e web inovadoras. Buscando oportunidades de estágio internacional no Japão para expandir minha expertise técnica e compreensão cultural.',
    'hero.viewWork': 'Ver Meu Trabalho',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça mais sobre minha jornada e paixão pela tecnologia',
    'about.description1': 'Sou um estudante dedicado de Engenharia da Computação na Universidade Federal de Pernambuco (UFPE), com uma forte paixão por desenvolver aplicações móveis e web inovadoras. Minha jornada na tecnologia tem sido impulsionada pela curiosidade e desejo de criar soluções significativas.',
    'about.description2': 'Com experiência em múltiplas linguagens de programação e frameworks, tive a oportunidade de trabalhar em projetos diversos, desde aplicações React Native full-stack atendendo milhares de usuários diários até desafios algorítmicos complexos em programação competitiva.',
    'about.description3': 'Tenho particular interesse em oportunidades internacionais, especialmente no Japão, onde posso combinar minhas habilidades técnicas com intercâmbio cultural e contribuir para projetos inovadores em um contexto global.',
    'about.quickFacts': 'Informações Rápidas',
    'about.location': 'Localização:',
    'about.university': 'Universidade:',
    'about.degree': 'Curso:',
    'about.graduation': 'Previsão de Conclusão:',
    'about.focus': 'Áreas de Foco:',
    'about.locationValue': 'Recife, Brasil',
    'about.universityValue': 'Universidade Federal de Pernambuco',
    'about.degreeValue': 'Bacharelado em Engenharia da Computação',
    'about.graduationValue': '2028',
    'about.focusValue': 'Desenvolvimento Mobile, IA, Full-Stack',
    'about.fullStack': 'Desenvolvedor Full-Stack',
    'about.fullStackDesc': 'Construindo soluções completas com React Native, Node.js e tecnologias web modernas.',
    'about.problemSolver': 'Solucionador de Problemas',
    'about.problemSolverDesc': 'Apaixonado por enfrentar desafios complexos através de abordagens algorítmicas inovadoras.',
    'about.continuousLearner': 'Aprendiz Contínuo',
    'about.continuousLearnerDesc': 'Sempre explorando novas tecnologias e metodologias para me manter na vanguarda do desenvolvimento.',
    
    // Education
    'education.title': 'Educação',
    'education.subtitle': 'Minha jornada acadêmica e base em Engenharia da Computação',
    'education.degree': 'Bacharelado em Engenharia da Computação',
    'education.university': 'Universidade Federal de Pernambuco (UFPE)',
    'education.period': '2024 - 2028 (Previsão)',
    'education.location': 'Recife, Brasil',
    'education.description': 'Atualmente cursando um diploma abrangente em Engenharia da Computação em uma das universidades técnicas mais prestigiadas do Brasil. O programa combina fundamentos teóricos com aplicações práticas em desenvolvimento de software, algoritmos, design de sistemas e tecnologias emergentes.',
    'education.coreCoursework': 'Disciplinas Principais',
    'education.specialization': 'Áreas de Especialização',
    'education.status': '🎯 Atualmente no segundo ano com forte desempenho acadêmico e experiência prática em projetos',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Uma visão abrangente da minha expertise técnica e níveis de proficiência',
    'skills.programmingLanguages': 'Linguagens de Programação',
    'skills.mobileDevelopment': 'Desenvolvimento Mobile',
    'skills.webDevelopment': 'Desenvolvimento Web',
    'skills.databasesBackend': 'Bancos de Dados & Backend',
    'skills.devopsTools': 'DevOps & Ferramentas',
    'skills.otherTechnologies': 'Outras Tecnologias',
    'skills.currentlyLearning': 'Aprendendo Atualmente',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Uma mostra do meu trabalho de desenvolvimento e conquistas técnicas',
    'projects.amigo.title': 'Amigo One',
    'projects.amigo.description': 'Amigo One é uma plataforma de telemedicina completa e mobile-first que capacita profissionais médicos a gerenciar sua prática inteiramente via smartphone—cobrindo agendamento de pacientes, teleconsultas, prescrições digitais, registro seguro, faturamento e até módulos de contabilidade digital e marketing',
    'projects.amigo.status': 'Produção - 20000+ usuários diários',
    'projects.amigo.features': [
      'Telemedicina Segura',
      'Prescrições e Documentos Digitais',
      'Assistência de diagnóstico por IA',
      'Gestão de Pacientes e Consultas',
      'Plataforma Mobile Segura e Compatível'
    ],
    'projects.goMessenger.title': 'Go messager',
    'projects.goMessenger.description': 'Liderei o desenvolvimento do backend para uma aplicação web de chat em tempo real que permite aos usuários trocar mensagens através de uma interface interativa. Ganhei experiência prática com Go (Golang), focando em performance e concorrência, e implementei comunicação WebSocket para garantir entrega de mensagens contínua e de baixa latência.',
    'projects.goMessenger.status': 'Teste Beta',
    'projects.goMessenger.features': [
      'Interface de chat',
      'Autenticação de usuário',
      'Mensagens em tempo real',
      'Websocket'
    ],
    'projects.jubly.title': 'Jubly App',
    'projects.jubly.description': 'Uma plataforma full-stack de correspondência de serviços que conecta prestadores de serviços com clientes. Apresenta algoritmos de correspondência em tempo real, processamento seguro de pagamentos e gestão abrangente de usuários.',
    'projects.jubly.status': 'MVP Completo',
    'projects.jubly.features': [
      'Algoritmo inteligente de correspondência de serviços',
      'Busca e filtragem avançadas'
    ],
    'projects.cda.title': 'CDA App',
    'projects.cda.description': 'Um sistema de gestão de pontos com elementos de gamificação. Inclui autenticação de usuário, rastreamento de pontos em tempo real, sistema de recompensas e painel de análise para administradores.',
    'projects.cda.status': 'Produção',
    'projects.cda.features': [
      'Sistema de pontos gamificado',
      'Sistema de recompensas e conquistas'
    ],
    'projects.demo': 'Demo',
    'projects.keyFeatures': 'Principais Funcionalidades',
    'projects.techStack': 'Stack Tecnológica',
    'projects.moreProjects': 'Mais Projetos',
    'projects.moreProjectsDesc': 'Projetos adicionais e contribuições disponíveis no meu perfil do GitHub, incluindo contribuições open-source, experimentos pessoais e projetos acadêmicos.',
    'projects.viewAll': 'Ver Todos os Projetos',
    
    // Recommendations
    'recommendations.title': 'Recomendações',
    'recommendations.subtitle': 'O que colegas e colaboradores dizem sobre trabalhar comigo',
    'recommendations.connectLinkedIn': 'Conecte-se comigo no LinkedIn',
    'recommendations.linkedInDesc': 'Veja mais recomendações e conexões profissionais',
    'recommendations.viewProfile': 'Ver Perfil do LinkedIn',
    
    // Contact
    'contact.title': 'Vamos nos Conectar',
    'contact.subtitle': 'Estou sempre animado para discutir novas oportunidades e colaborações',
    'contact.getInTouch': 'Entre em Contato',
    'contact.email': 'Email',
    'contact.location': 'Localização',
    'contact.locationValue': 'Recife, Brasil',
    'contact.availableFor': 'Disponível para',
    'contact.availableForValue': 'Videochamadas, Entrevistas',
    'contact.openToOpportunities': 'Aberto a Oportunidades',
    'contact.opportunities': [
      'Estágios internacionais (Japão preferencial)',
      'Projetos de desenvolvimento full-stack',
      'Colaborações em desenvolvimento de apps móveis',
      'Oportunidades de pesquisa em IA/ML',
      'Contribuições open source'
    ],
    'contact.findMeOnline': 'Me Encontre Online',
    'contact.professionalProfile': 'Perfil profissional e experiência de trabalho',
    'contact.codeRepositories': 'Repositórios de código e contribuições',
    'contact.visitProfile': 'Visitar Perfil',
    'contact.readyToStart': 'Pronto para Começar uma Conversa?',
    'contact.conversationDesc': 'Seja sobre oportunidades, colaborações em projetos, ou apenas um bate-papo amigável sobre tecnologia, adoraria ouvir de você!',
    'contact.sendEmail': 'Enviar Email'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[typeof language]];
    return typeof value === 'string' ? value : key;
  };

  const tArray = (key: string): string[] => {
    const value = translations[language][key as keyof typeof translations[typeof language]];
    return Array.isArray(value) ? value : [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};