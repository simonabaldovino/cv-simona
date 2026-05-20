import type { CvLocale } from '@/i18n/types'

export const enLocale: CvLocale = {
  meta: {
    title: 'Simona Baldovino | Portfolio',
    description:
      'Simona Baldovino — Systems Analyst & Manual QA. Portfolio and résumé.',
  },
  profile: {
    title: 'Systems Analyst Student | Manual QA',
    location: 'Córdoba, Argentina',
    tagline:
      'Passionate about technology, software development, and problem-solving',
  },
  navItems: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'availability', label: 'Open to work' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ],
  sections: {
    about: { title: 'About me' },
    availability: {
      title: 'Open to Work',
      headline: 'Open to new opportunities',
    },
    skills: {
      title: 'Skills',
      subtitle: 'What I use day to day in my coursework and projects',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Academic work and hands-on projects',
      viewGithub: 'See my GitHub',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Jobs, ventures, and client-facing roles',
    },
    education: { title: 'Education' },
    certificates: {
      title: 'Certificates',
      subtitle: 'Courses, workshops, and recognitions',
      view: 'Open',
    },
    contact: {
      title: 'Get in touch',
      intro:
      'Explore my profile further — feel free to contact me or download my CV.',
    },
    cta: {
      title: "Let's work together",
      line1: "I'm open to new opportunities.",
      line2: 'Happy to chat — reach out anytime.',
      button: 'Send a message',
    },
  },
  footer: {
    role: 'Systems Analyst · Manual QA · Aspiring Developer',
    dedication:
      'Built with dedication, continuous learning, and a strong desire to grow 🚀',
  },
  ui: {
    languages: 'Languages',
    email: 'Email',
    emailCopied: 'Email copied',
    githubProfile: 'GitHub',
    linkedinProfile: 'LinkedIn',
    viewProjects: 'See projects',
    viewCv: 'View CV',
    downloadCv: 'Download CV',
    contact: 'Contact',
    sendEmail: 'Email me',
    sendMessage: 'Send a message',
    navAriaLabel: 'Portfolio sections',
    langToggleLabel: 'Español',
  },
  mail: {
    subject: 'Portfolio contact',
    body: 'Hi Simona,\n\nI came across your portfolio and wanted to get in touch.\n\n',
  },
  availability: {
    paragraphs: [
      "I am currently seeking new professional opportunities in software development or manual QA.",
      "Available for part-time or full-time positions, with remote or hybrid work arrangements.",
      "Passionate about continuous learning, contributing to meaningful projects, and growing professionally.",
    ],
  },
  about: {
    paragraphs: [
      "I am a Systems Analyst student currently building experience in Java (NetBeans), C# (Visual Studio), and GitHub for version control.",
      "I have also trained in manual QA testing, with knowledge of functional testing and agile methodologies.",
      "Passionate about software development and continuous learning, I am proactive, responsible, and quick to adapt to new challenges.",
    ],
  },
  skillGroups: [
    {
      title: 'Languages',
      icon: 'mdi-code-braces',
      items: ['Java (Currently Learning)', 'Vue (Currently Learning)', 'C#', 'Python', 'SQL (basics)'],
    },
    {
      title: 'Tools',
      icon: 'mdi-toolbox-outline',
      items: [
        'GitHub',
        'Visual Studio',
        'NetBeans',
        'Jira',
        'Microsoft Office',
        'Canva',
      ],
    },
    {
      title: 'Other',
      icon: 'mdi-school-outline',
      items: [
        'Object-oriented programming',
        'Manual QA',
        'Agile methodologies',
      ],
    },
  ],
  projects: [
    {
      name: 'Course enrollment system',
      description:
        'Java app with OOP, lists, and business rules to handle sign-ups. Academic project.',
      technologies: ['Java', 'NetBeans'],
      icon: 'mdi-school-outline',
    },
    {
      name: 'Desktop apps',
      description:
        'C# desktop programs with validation, control flow, and data handling. Academic project.',
      technologies: ['C#', 'Windows Forms', 'Visual Studio'],
      icon: 'mdi-microsoft-windows',
    },
  ],
  experiences: [
    {
      role: 'Manual QA',
      company: 'Blinker App',
      place: 'Testing',
      period: '2026',
      description:
        'Manual testing, test cases, test runs, and bug reports in Jira.',
      icon: 'mdi-bug-check-outline',
    },
    {
      role: 'Pastry business',
      company: 'Baking in Bliss',
      place: 'Production & sales',
      period: '2025 — Present',
      description: 'Production, order management, and customer service.',
      icon: 'mdi-cupcake',
    },
    {
      role: 'Bag brand',
      company: 'Lirene Bags',
      place: 'Design & production',
      period: '2025 — Present',
      description: 'Design, production, branding, and client management.',
      icon: 'mdi-bag-personal-outline',
    },
    {
      role: 'Retail Experience',
      company: 'Maja Deco',
      place: 'Home décor store',
      period: '2025 (occasional)',
      description: 'Customer service, sales, and store organization.',
      icon: 'mdi-sofa-outline',
    },
    {
      role: 'Retail Experience',
      company: 'Percha',
      place: 'Clothing store',
      period: '2022 — 2023',
      description: 'Customer service, styling advice, cash register, and stock.',
      icon: 'mdi-hanger',
    },
  ],
  education: [
    {
      degree: 'Systems Analyst',
      institution: 'IES Siglo 21',
      detail: 'Java, C#, GitHub',
      year: '2025 — 2027',
      icon: 'mdi-laptop',
    },
    {
      degree: 'Vue.js',
      institution: 'Udemy — Maximilian Schwarzmüller',
      detail: 'Components, reactivity, modern frontend',
      year: 'In progress',
      icon: 'mdi-vuejs',
    },
    {
      degree: 'Manual QA',
      institution: 'Coderhouse',
      detail: 'Manual testing & agile',
      year: '2026',
      icon: 'mdi-clipboard-check-outline',
    },
    {
      degree: 'Systems Engineering',
      institution: 'UTN — FRC',
      detail: 'Python',
      year: '2024',
      icon: 'mdi-cog-outline',
    },
    {
      degree: 'High school diploma',
      institution: 'INSM — Canals, Córdoba',
      year: '2023',
      icon: 'mdi-certificate-outline',
    },
  ],
  certificates: [
    {
      name: 'Manual QA Testing',
      institution: 'Coderhouse',
      year: '2026',
      icon: 'mdi-certificate-outline',
      pdf: '/certificados/qa-manual.pdf',
    },
    {
      name: 'Academic recognition — year completed',
      institution: 'IES Siglo 21',
      year: '2025',
      icon: 'mdi-school-outline',
      pdf: '/certificados/certificado_ies.pdf',
    },
    {
      name: 'Talk: Testing in the age of automation & AI',
      institution: 'UTN FRC',
      year: '2025',
      icon: 'mdi-presentation',
      pdf: '/certificados/conferencia_utn.pdf',
    },
    {
      name: 'Workshop: Build a traditional résumé',
      institution: 'IES CAMP ',
      year: '2025',
      icon: 'mdi-account-voice',
      pdf: '/certificados/workshop-cv.pdf',
    },
  ],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],
}
