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
    'hero.description': 'Developer focused on building innovative digital solutions that combine mobile apps, web platforms, and IoT systems. Particularly interested in emerging technologies such as quantum computing, artificial intelligence, and distributed networks, constantly exploring ways to apply technical knowledge in creative and impactful ways.',
    'hero.viewWork': 'View My Work',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know more about my journey and passion for technology',
    'about.description1': "I'm a mid-level developer and Computer Engineering student at the Federal University of Pernambuco (UFPE), with over 3 years of experience in mobile development. I currently work as a team leader at Amigo Tech, leading projects focused on medical applications and digital health solutions. My journey is driven by technical curiosity and a commitment to turning ideas into efficient and impactful solutions.",
    'about.description2': "Throughout my career, I've contributed to challenging projects, from full-stack React Native applications used daily by thousands of healthcare professionals to tackling complex problems in competitive programming. This experience has strengthened my analytical skills, proficiency in multiple programming languages, and technical leadership in high-demand environments.",
    'about.description3': "I'm especially interested in emerging technologies such as quantum computing, IoT, artificial intelligence, and distributed networks. I value international experiences that combine technical excellence with cultural diversity — such as those offered in Japan — and I'm prepared to contribute in innovative and collaborative environments.",
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
    'education.coreCourseworkValue1': 'Data Structures & Algorithms',
    'education.coreCourseworkValue2': 'Software Engineering',
    'education.coreCourseworkValue3': 'Database Systems',
    'education.coreCourseworkValue4': 'Computer Networks',
    'education.coreCourseworkValue5': 'Operating Systems',
    'education.coreCourseworkValue6': 'Machine Learning',
    'education.coreCourseworkValue7': 'Software & Hardware Infrastructure',
    'education.specialization': 'Specialization Areas',
    'education.specializationValue1': 'Mobile Development',
    'education.specializationValue2': 'Artificial Intelligence',
    'education.specializationValue3': 'Full-Stack Development',
    'education.specializationValue4': 'IoT',
    'education.specializationValue5': 'Distributed Networks',
    'education.specializationValue6': 'Quantum Computing',
    'education.specializationValue7': 'Embedded Systems',
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

    'timeline.title': 'Professional Journey',
    'timeline.subtitle': 'My path through education, projects, and professional development',
    'timeline.keyCompetencies': 'Key Competencies:',
    'timeline.whatsNext': "What's Next?",
    'timeline.whatsNextDesc': 'Continuously expanding my skills and working on innovative projects',

    // cargos
    'timeline.teamLeadTitle': 'Development Team Lead',
    'timeline.teamLeadDescription': 'Leading development teams with focus on Agile Project Management, Kanban methodologies, and IT Leadership. Managing complex technical projects and mentoring junior developers.',
    'timeline.softwareEngineerTitle': 'Software Engineer',
    'timeline.softwareEngineerDescription': 'Full-stack development focusing on React Native, React.js, and Node.js applications. Implementing AI integrations and working with modern JavaScript frameworks.',
    'timeline.juniorEngineerTitle': 'Junior Software Engineer',
    'timeline.juniorEngineerDescription': 'Developed React.js and React Native applications with focus on modern web technologies and mobile development. Worked extensively with state management and styling solutions.',
    'timeline.internTitle': 'Software Engineer Intern',
    'timeline.internDescription': 'Started professional journey as an intern, learning React.js fundamentals and backend development with Node.js. Gained hands-on experience with modern web development tools.',

    'timeline.teamLeadDate': 'Feb 2025 - Present',
    'timeline.teamLeadDuration': '6 months',
    'timeline.softwareEngineerDate': 'Dec 2023 - Present',
    'timeline.softwareEngineerDuration': '1 year 8 months',
    'timeline.juniorEngineerDate': 'Aug 2022 - Dec 2023',
    'timeline.juniorEngineerDuration': '1 year 5 months',
    'timeline.internDate': 'Apr 2022 - Aug 2022',
    'timeline.internDuration': '5 months',
    'timeline.studentDate': '2024 - Present',

    // competências
    'timeline.competency.agile': 'Agile Project Management',
    'timeline.competency.kanban': 'Kanban',
    'timeline.competency.itLeadership': 'IT Leadership',
    'timeline.competency.leadingTeams': 'Leading Development Teams',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my development work and technical achievements',
    'projects.amigo.title': 'Amigo One',
    'projects.amigo.description': 'Amigo One is a mobile-first, all‑in‑one telehealth platform empowering medical professionals to manage their practice entirely via smartphone—covering patient scheduling, teleconsultations, digital prescriptions, secure recordkeeping, billing, and even digital accounting and marketing modules',
    'projects.amigo.status': 'Production - 20,000+ daily users',
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
    'projects.jubly.description': 'Full-stack platform for publishing and hiring local services, focused on micro-entrepreneurs. It connects service providers — such as bricklayers, electricians, and housekeepers — with clients seeking quick and affordable solutions for everyday needs. Users can register either as providers or clients, with features like service postings, login system, user reviews, and in-app integrated ads, making communication and service visibility easier.',
    'projects.jubly.status': 'MVP Completed',
    'projects.jubly.features': [
      'Service posting',
      'Service hiring',
      'User reviews',
      'In-app integrated advertisements'
    ],
    'projects.cda.title': 'CDA App',
    'projects.cda.description': 'Points management system focused on corporate engagement. Designed for companies that want to reward their employees, the solution provides a web platform for registering partners and managing points, plus a mobile app for staff. In the app, employees can track their accumulated points and redeem rewards such as discounts on restaurants, travel, and events. The system includes user authentication, an admin dashboard, and a gamified experience to boost engagement.',
    'projects.cda.status': 'In Production',
    'projects.cda.features': [
      'User authentication',
      'Admin dashboard',
      'Gamified experience'
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

    'recommendations.marceloTitle': 'Fullstack Developer',
    'recommendations.marceloDate': 'July 16, 2025',
    'recommendations.marceloContent': 'Working with Manoel has been a very positive experience. He is an extremely committed professional, with a solid technical foundation and a collaborative attitude on a daily basis. Always ready to help, he actively contributes to team growth and takes on leadership in projects with great responsibility and clarity. He is someone who instills confidence, solves problems efficiently, and is always looking for the best solutions together with the team.',

    'recommendations.danielTitle': 'Full-Stack Developer',
    'recommendations.danielDate': 'July 16, 2025',
    'recommendations.danielContent': 'I had the experience of working side by side with Manoel and I know what a great professional he is, excellent technical level in various programming languages, leadership being one of his strong points, I certainly recommend him!',

    'recommendations.rafaelTitle': 'Full-Stack Developer',
    'recommendations.rafaelDate': 'July 16, 2025',
    'recommendations.rafaelContent': 'Manoel is my colleague and is an excellent professional. Currently in a team lead position and is performing exceptionally!! All feedback I receive from him within the company is excellent. He was my buddy for react and react native.',

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
    'hero.description': 'Desenvolvedor focado na criação de soluções digitais inovadoras, integrando aplicações móveis, web e sistemas IoT. Atua com interesse em tecnologias emergentes como computação quântica, inteligência artificial e redes distribuídas, sempre explorando formas de aplicar conhecimento técnico de forma criativa e impactante.',
    'hero.viewWork': 'Ver Meu Trabalho',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça mais sobre minha jornada e paixão pela tecnologia',
    'about.description1': 'Sou desenvolvedor pleno e estudante de Engenharia da Computação na Universidade Federal de Pernambuco (UFPE), com mais de 3 anos de experiência em desenvolvimento mobile. Atuo como team leader na Amigo Tech, liderando projetos de aplicativos voltados para médicos e soluções digitais em saúde. Minha trajetória é guiada pela curiosidade técnica e pelo compromisso em transformar ideias em soluções eficientes e impactantes.',
    'about.description2': 'Ao longo da carreira, participei de projetos desafiadores, desde o desenvolvimento full-stack de aplicações em React Native utilizadas por milhares de profissionais da saúde, até a resolução de problemas complexos em programação competitiva. Essa combinação fortaleceu minha capacidade analítica, domínio de múltiplas linguagens e liderança técnica em ambientes de alta exigência.',
    'about.description3': 'Tenho interesse especial por tecnologias emergentes como computação quântica, IoT, inteligência artificial e redes distribuídas. Valorizo experiências internacionais que aliem excelência técnica e diversidade cultural — como as oferecidas no Japão — e estou preparado para contribuir em contextos inovadores e colaborativos.',
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
    'education.description': 'Atualmente cursando um diploma abrangente em Engenharia da Computação em uma das universidades mais prestigiadas do Brasil. O programa combina fundamentos teóricos com aplicações práticas em desenvolvimento de software, algoritmos, design de sistemas e tecnologias emergentes.',
    'education.coreCoursework': 'Disciplinas Principais',
    'education.coreCourseworkValue1': 'Estrutura de Dados e Algoritmos',
    'education.coreCourseworkValue2': 'Engenharia de Software',
    'education.coreCourseworkValue3': 'Banco de Dados',
    'education.coreCourseworkValue4': 'Redes de Computadores',
    'education.coreCourseworkValue5': 'Sistemas Operacionais',
    'education.coreCourseworkValue6': 'Aprendizado de Máquina',
    'education.coreCourseworkValue7': 'Infraestrutura de Software e Hardware',
    'education.specialization': 'Áreas de Especialização',
    'education.specializationValue1': 'Desenvolvimento Mobile',
    'education.specializationValue2': 'Inteligência Artificial',
    'education.specializationValue3': 'Desenvolvimento Full-Stack',
    'education.specializationValue4': 'Internet das Coisas',
    'education.specializationValue5': 'Redes Distribuídas',
    'education.specializationValue6': 'Computação Quântica',
    'education.specializationValue7': 'Sistemas Embarcados',
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

    // timeline (pt)
    'timeline.title': 'Jornada Profissional',
    'timeline.subtitle': 'Minha trajetória através da educação, projetos e desenvolvimento profissional',
    'timeline.keyCompetencies': 'Competências-Chave:',
    'timeline.whatsNext': 'Próximos Passos?',
    'timeline.whatsNextDesc': 'Expandindo continuamente minhas habilidades e trabalhando em projetos inovadores',

    // cargos
    'timeline.teamLeadTitle': 'Líder de Time de Desenvolvimento',
    'timeline.teamLeadDescription': 'Liderança de equipes de desenvolvimento com foco em gestão ágil de projetos, metodologias Kanban e liderança em TI. Gerenciamento de projetos técnicos complexos e mentoria de desenvolvedores juniores.',
    'timeline.softwareEngineerTitle': 'Engenheiro de Software',
    'timeline.softwareEngineerDescription': 'Desenvolvimento full-stack com foco em aplicações React Native, React.js e Node.js. Implementação de integrações com IA e uso de frameworks modernos de JavaScript.',
    'timeline.juniorEngineerTitle': 'Engenheiro de Software Júnior',
    'timeline.juniorEngineerDescription': 'Desenvolvimento de aplicações em React.js e React Native com foco em tecnologias web modernas e desenvolvimento mobile. Trabalho intenso com gerenciamento de estado e soluções de estilização.',
    'timeline.internTitle': 'Estagiário em Engenharia de Software',
    'timeline.internDescription': 'Início da jornada profissional como estagiário, aprendendo fundamentos de React.js e desenvolvimento backend com Node.js. Experiência prática com ferramentas modernas de desenvolvimento web.',

    'timeline.teamLeadDate': 'Fev 2025 - Presente',
    'timeline.teamLeadDuration': '6 meses',
    'timeline.softwareEngineerDate': 'Dez 2023 - Presente',
    'timeline.softwareEngineerDuration': '1 ano e 8 meses',
    'timeline.juniorEngineerDate': 'Ago 2022 - Dez 2023',
    'timeline.juniorEngineerDuration': '1 ano e 5 meses',
    'timeline.internDate': 'Abr 2022 - Ago 2022',
    'timeline.internDuration': '5 meses',
    'timeline.studentDate': '2024 - Presente',

    // competências
    'timeline.competency.agile': 'Gestão Ágil de Projetos',
    'timeline.competency.kanban': 'Kanban',
    'timeline.competency.itLeadership': 'Liderança em TI',
    'timeline.competency.leadingTeams': 'Liderança de Equipes de Desenvolvimento',

    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Uma mostra do meu trabalho de desenvolvimento e conquistas técnicas',
    'projects.amigo.title': 'Amigo One',
    'projects.amigo.description': 'Amigo One é uma plataforma de telemedicina completa e mobile-first que capacita profissionais médicos a gerenciar sua prática inteiramente via smartphone—cobrindo agendamento de pacientes, teleconsultas, prescrições digitais, registro seguro, faturamento e até módulos de contabilidade digital e marketing',
    'projects.amigo.status': 'Produção - 20.000+ usuários diários',
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
    'projects.jubly.description': 'Plataforma full-stack para publicação e contratação de serviços locais, voltada a microempreendedores. Conecta prestadores de serviços — como pedreiros, eletricistas e diaristas — a clientes que buscam soluções rápidas e acessíveis para demandas do dia a dia. Usuários podem se cadastrar como prestadores ou contratantes, com funcionalidades como postagem de oportunidades, sistema de login, avaliação entre usuários, e anúncios integrados ao aplicativo, facilitando a comunicação e a visibilidade dos serviços.',
    'projects.jubly.status': 'MVP Completo',
    'projects.jubly.features': [
      'Publicação de serviços',
      'Contratação de serviços',
      'Avaliação entre usuários',
      'Anúncios integrados ao aplicativo'
    ],
    'projects.cda.title': 'CDA App',
    'projects.cda.description': 'Sistema de gestão de pontos com foco em engajamento corporativo. Desenvolvido para empresas que desejam recompensar seus colaboradores, o sistema conta com uma plataforma web para cadastro e gestão de parceiros e pontos, além de um aplicativo mobile voltado aos funcionários. No app, o colaborador pode acompanhar seus pontos acumulados e resgatar recompensas como descontos em restaurantes, viagens e eventos. O sistema inclui autenticação de usuários, painel administrativo, e experiência gamificada para aumentar o engajamento.',
    'projects.cda.status': 'Produção',
    'projects.cda.features': [
      'Autenticação de usuários',
      'Painel administrativo',
      'Experiência gamificada'
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

    'recommendations.marceloTitle': 'Desenvolvedor Fullstack',
    'recommendations.marceloDate': '16 de Julho de 2025',
    'recommendations.marceloContent': 'Trabalhar com o Manoel tem sido uma experiência muito positiva. Ele é um profissional extremamente comprometido, com uma base técnica sólida e uma postura colaborativa no dia a dia. Sempre pronto para ajudar, contribui ativamente para o crescimento da equipe e costuma assumir a liderança em projetos com muita responsabilidade e clareza. É alguém que transmite confiança, resolve problemas com eficiência e está sempre buscando as melhores soluções junto ao time.',

    'recommendations.danielTitle': 'Desenvolvedor Full-Stack',
    'recommendations.danielDate': '16 de Julho de 2025',
    'recommendations.danielContent': 'Já tive a experiência de trabalhar lado a lado com Manoel e sei o ótimo profissional que ele é, ótimo nível técnico em várias linguagens de programação, liderança sendo um de seus pontos fortes, com certeza recomendo!',

    'recommendations.rafaelTitle': 'Desenvolvedor Full-Stack',
    'recommendations.rafaelDate': '16 de Julho de 2025',
    'recommendations.rafaelContent': 'Manoel é meu companheiro de trabalho e é um ótimo profissional. Atualmente está em uma posição de team lead e está desempenhando de maneira excepcional!! Todos os feedbacks que recebo dele dentro da empresa são ótimos. Já foi meu buddy de react e react native.',

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