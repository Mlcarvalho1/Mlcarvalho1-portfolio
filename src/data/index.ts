export const meta = {
  name: 'Manoel L. Carvalho',
  title: 'Full Stack Engineer & Technical Lead',
  email: 'mlc6dev@gmail.com',
  phone: '+55 (81) 98182-9698',
  location: 'Recife, Brazil',
  linkedin: 'https://www.linkedin.com/in/manoel-carvalho-350507236/',
  github: 'https://github.com/Mlcarvalho1',
  linkedinLabel: 'linkedin.com/in/manoel-carvalho',
  githubLabel: 'github.com/Mlcarvalho1',
}

export const profile =
  'Full Stack Engineer and Technical Lead with 4+ years of experience designing, building, and shipping complex production platforms from the ground up. Core developer and current lead of Amigo One — a comprehensive healthcare and fintech ecosystem serving 25,000 monthly active users (10,000 daily) across web and mobile — encompassing AI-assisted medical consultations, digital banking with BACEN compliance, medical records, patient management, scheduling, a medical social network, and financial management modules.'

export const metrics = [
  { value: 25000, label: 'Monthly Active Users', suffix: '' },
  { value: 10000, label: 'Daily Active Users', suffix: '' },
  { value: 4, label: 'Years Experience', suffix: '+' },
  { value: 7, label: 'Production Platforms', suffix: '' },
]

export const experience = [
  {
    company: 'Amigo Tech',
    location: 'Recife, Brazil',
    roles: [
      {
        title: 'Development Team Lead',
        period: 'Feb 2025 — Present',
        current: true,
        bullets: [
          'Helped in engineering decisions for the Amigo One platform, managing feature roadmap execution, technical architecture, and team delivery across web, mobile, and backend systems.',
          'Drive the evolution of AI capabilities — overseeing the Google Gemini integration for real-time clinical consultation assistance, and evaluating new AI tooling across the platform.',
          'Define and enforce code quality standards, review processes, and shared engineering practices; mentor junior and mid-level engineers through pairing, code reviews, and technical guidance.',
          'Collaborate directly with founders, product managers, and non-technical stakeholders to translate business requirements into technical specifications and delivery plans.',
          'Oversee CI/CD pipeline improvements (GitHub Actions), containerization strategy (Docker), and cloud deployment practices on AWS.',
        ],
        tags: ['NestJS', 'React', 'React Native', 'AWS', 'Docker', 'GitHub Actions'],
      },
      {
        title: 'Software Engineer',
        period: 'Jan 2023 — Feb 2025',
        current: false,
        bullets: [
          'Core developer of Amigo One, contributing to the majority of its modules from inception: AmigoPay (digital banking), AI consultation assistant, patient management, medical social feed, finances management, and onboarding/activation flows.',
          'Built and maintained the Node.js/NestJS backend microservice architecture including RESTful API design, complex clinical and financial business logic, authentication/authorization flows, and third-party service integrations.',
          'Developed the React Native mobile application for iOS + Android, including core banking screens, AI consultation UI, patient dashboards, and financial transaction flows — shipped to both the Apple App Store and Google Play Store.',
          'Built the React/Next.js web platform delivering responsive, data-rich interfaces including clinical dashboards, historical trend visualizations, medical social feed, and administrative modules.',
          'AmigoPay: Integrated Dock BaaS to deliver a fully BACEN-compliant digital bank — PIX (send/receive), TED, Boleto, account balance/statements, bank limit management, and deep integration with the Amigo internal finance system.',
          'AI Consultation Assistant: Built end-to-end Google Gemini integration including API integration layer, prompt architecture, and React Native/React frontend delivery.',
          'Implemented Firebase Crashlytics and Sentry for real-time crash reporting; Firebase Analytics for funnel tracking and feature adoption analysis.',
          'Designed and optimized PostgreSQL schemas for clinical and financial data models, applying indexing strategies, query optimization, and relational modeling for production scale.',
        ],
        tags: ['Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MongoDB', 'Redis', 'Google Gemini'],
      },
    ],
  },
  {
    company: 'Japox Co.',
    location: 'Tokyo, Japan (on site)',
    roles: [
      {
        title: 'Global Software Engineering Intern',
        period: 'Oct 2025 — Dec 2025',
        current: false,
        bullets: [
          'Built and scaled Golang backend gateway services with a focus on authentication, authorization, API key lifecycle management, rate limiting, and high-throughput performance — achieving sub-100ms response latency under production load.',
          'Developed secure token-based access control systems and API key management for production clients serving real traffic.',
          'Delivered React dashboards for real-time monitoring of usage analytics and platform performance metrics.',
          'Collaborated asynchronously across time zones in a fully remote, internationally distributed team — shipping features rapidly with direct exposure to founders and senior engineers.',
        ],
        tags: ['Go', 'React', 'PostgreSQL', 'API Gateway', 'Auth'],
      },
    ],
  },
]

export const projects = [
  {
    name: 'Amigo One',
    slug: 'amigo-one',
    description: 'Full-scale healthcare & fintech platform — end-to-end development and technical leadership from inception.',
    longDescription:
      'Multi-module platform serving 25,000 monthly active users across web and mobile. Modules include: AI consultation assistant (Google Gemini), AmigoPay digital banking (Dock BaaS), patient management, medical records, appointment scheduling, medical social feed, and financial management.',
    period: '2023 — Present',
    metrics: ['25,000 MAU', '10,000 DAU'],
    tags: ['Node.js', 'NestJS', 'React', 'Next.js', 'React Native', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    highlight: true,
  },
  {
    name: 'AmigoPay',
    slug: 'amigopay',
    description: 'BACEN-compliant digital banking module built on Dock BaaS — PIX, TED, Boleto and more.',
    longDescription:
      'Fully regulated Brazilian digital banking experience within Amigo One. Integrated Dock (formerly Conductor) BaaS to deliver PIX (send/receive), TED, Boleto generation and payment, account balance/statements, bank limits, password management, and integration with the internal finance system.',
    period: '2023 — Present',
    metrics: ['BACEN Compliant', 'Dock BaaS'],
    tags: ['Node.js', 'NestJS', 'React Native', 'PostgreSQL', 'PIX', 'TED', 'Boleto'],
    highlight: true,
  },
  {
    name: 'ShuunCar',
    slug: 'shuuncar',
    description: 'Vehicle data intelligence platform — VIN-based analysis with full stack ownership.',
    longDescription:
      'Full stack web platform for VIN-based vehicle data analysis. Frontend built with React and TanStack Query, REST API backend with Node.js, deployed on Vercel and Supabase. Integrated MongoDB and Supabase with caching strategies for reliable, performant data delivery.',
    period: '2025',
    metrics: ['Production'],
    tags: ['React', 'Node.js', 'MongoDB', 'Supabase', 'Vercel', 'TanStack Query'],
    highlight: false,
  },
  {
    name: 'ShunCar Gateway',
    slug: 'shuncar-gateway',
    description: 'Production API gateway — authentication, API key lifecycle, rate limiting, and observability.',
    longDescription:
      'Production-grade backend gateway with modular microservice design: authentication, API key lifecycle management, rate limiting, and secure access control. Cross-database integrations across PostgreSQL and MongoDB using Prisma and Mongoose; caching and observability layers for platform monitoring.',
    period: 'Nov 2025 — Dec 2025',
    metrics: ['Production', '<100ms p99'],
    tags: ['Go', 'Node.js', 'PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose', 'Supabase'],
    highlight: false,
  },
  {
    name: 'livreCred Fin Control',
    slug: 'livrecred',
    description: 'Internal financial management system for a credit & lending company — end-to-end, live in production.',
    longDescription:
      'Full-featured finance control platform built for a credit/lending operation. Covers accounts payable & receivable, real-time cash flow tracking, client-level financial management, employee payroll control, and bank reconciliation via CSV import — all backed by automated reporting dashboards. Built with React (Vite) and Supabase, leveraging Supabase Auth for role-based access, Supabase Storage + S3 for document handling, and real-time data updates across all modules.',
    period: '2025 — Present',
    metrics: ['Production', 'Live'],
    tags: ['React', 'Vite', 'Supabase', 'Supabase Auth', 'Supabase Storage', 'S3', 'TypeScript'],
    highlight: true,
  },
  {
    name: 'Jubly App',
    slug: 'jubly',
    description: 'Real-time service marketplace mobile app — connecting clients and service providers with sub-second matching.',
    longDescription:
      'End-to-end mobile platform enabling real-time discovery and connection between service providers and clients, with integrated payment processing for thousands of active users. Built real-time matching algorithms, secure authentication flows, and payment integrations optimized for sub-second response times and smooth UX. Scalable Firebase backend with production-ready monitoring, error tracking, and performance optimization.',
    period: 'Jul 2025 — Present',
    metrics: ['Production', 'Real-time'],
    tags: ['React Native', 'Expo', 'Firebase', 'Real-time', 'Payments'],
    highlight: false,
  },
  {
    name: 'CDA App',
    slug: 'cda-app',
    description: 'Gamified points & rewards platform with admin dashboard — real-time Firebase backend.',
    longDescription:
      'Mobile gamification platform with a points and rewards system, serving an active user base. Features secure authentication, real-time updates, and a comprehensive admin dashboard for tracking user engagement metrics, reward distribution analytics, and system performance monitoring. Optimized via code splitting, lazy loading, and efficient state management for improved load times and user retention.',
    period: 'Nov 2024 — Jan 2025',
    metrics: ['Production', 'Gamified'],
    tags: ['React Native', 'Expo', 'Firebase', 'Admin Dashboard', 'Analytics'],
    highlight: false,
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL'],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express',
      'REST APIs',
      'WebSockets',
      'Microservices',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'Mongoose',
      'Supabase',
      'JWT / RBAC',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'React Native',
      'TanStack Query',
      'TanStack Table',
      'React Hook Form',
      'Redux Toolkit',
      'Context API',
      'Vite',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'AI & Integrations',
    items: ['Google Gemini API', 'Dock BaaS (Conductor)', 'PIX / TED / Boleto', 'Prompt Architecture'],
  },
  {
    category: 'Mobile',
    items: [
      'React Native (Expert)',
      'Expo',
      'iOS + Android',
      'App Store lifecycle',
      'Google Play lifecycle',
      'Firebase (Firestore, Auth, Storage)',
      'Firebase Crashlytics',
      'Firebase Analytics',
      'Sentry',
    ],
  },
  {
    category: 'Infrastructure & DevOps',
    items: ['Docker', 'GitHub Actions', 'CI/CD Pipelines', 'AWS', 'Vercel', 'Render'],
  },
  {
    category: 'Leadership & Practices',
    items: [
      'Technical Leadership',
      'System Design',
      'Code Review',
      'API Scalability',
      'Cross-functional Collaboration',
      'Async Remote Work',
    ],
  },
]

export const education = {
  institution: 'Federal University of Pernambuco (UFPE)',
  location: 'Recife, Brazil',
  degree: 'B.Sc. in Computer Engineering',
  period: 'Expected 2028',
}

export const languages = [
  { lang: 'Portuguese', level: 'Native speaker' },
  { lang: 'English', level: 'Advanced — Professional Working Proficiency' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
