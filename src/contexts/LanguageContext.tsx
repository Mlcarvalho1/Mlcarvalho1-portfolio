import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
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
    'about.continuousLearnerDesc': 'Always exploring new technologies and methodologies to stay at the forefront of development.'
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
    'about.continuousLearnerDesc': 'Sempre explorando novas tecnologias e metodologias para me manter na vanguarda do desenvolvimento.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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