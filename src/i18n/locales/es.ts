import type { CvLocale } from '@/i18n/types'

export const esLocale: CvLocale = {
  meta: {
    title: 'Simona Baldovino | Portfolio',
    description: 'Simona Baldovino — Analista en Sistemas. Portfolio y CV profesional.',
  },
  profile: {
    title: 'Estudiante de Analista de Sistemas | QA Manual',
    tagline:
      'Apasionada por la tecnología, el desarrollo de software y la resolución de problemas',
  },
  navItems: [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'availability', label: 'Disponibilidad' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'contact', label: 'Contacto' },
  ],
  sections: {
    about: { title: 'Sobre mí' },
    availability: {
      title: 'Disponibilidad',
      headline: 'Abierta a nuevas oportunidades',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Tecnologías y herramientas que utilizo en mis estudios y proyectos',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Proyectos académicos y de práctica profesional',
      viewGithub: 'Ver GitHub',
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Experiencia laboral y emprendimientos',
    },
    education: { title: 'Educación' },
    certificates: {
      title: 'Certificados',
      subtitle: 'Formación complementaria y reconocimientos',
      view: 'Ver',
    },
    contact: {
      title: 'Contacto e información',
      intro:
        '¿Querés conocer más sobre mi perfil? Escribime o descargá mi CV en PDF.',
    },
    cta: {
      title: '¿Trabajamos juntos?',
      line1: 'Estoy disponible para nuevas oportunidades.',
      line2: 'No dudes en contactarme.',
      button: 'Enviar mensaje',
    },
  },
  footer: {
    role: 'Analista en Sistemas · QA Manual · Developer en formación',
    dedication:
      'Hecho con dedicación, aprendizaje constante y muchas ganas de crecer 🚀',
  },
  ui: {
    languages: 'Idiomas',
    email: 'Email',
    emailCopied: 'Email copiado',
    githubProfile: 'Perfil de GitHub',
    linkedinProfile: 'Perfil de LinkedIn',
    viewProjects: 'Ver proyectos',
    viewCv: 'Ver CV',
    downloadCv: 'Descargar CV',
    contact: 'Contacto',
    sendEmail: 'Enviar email',
    sendMessage: 'Enviar mensaje',
    navAriaLabel: 'Secciones del portfolio',
    langToggleLabel: 'English',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  mail: {
    subject: 'Contacto desde portfolio',
    body: 'Hola Simona,\n\nTe escribo desde tu portfolio web.\n\n',
  },
  availability: {
    paragraphs: [
      'Actualmente me encuentro en búsqueda de nuevas oportunidades profesionales en el área de desarrollo de software o testing QA.',
      'Cuento con disponibilidad para trabajar part-time o full-time, con modalidad remota o híbrida.',
      'Estoy interesada en entornos donde pueda seguir aprendiendo, aportar valor y continuar desarrollándome profesionalmente.',
    ],
  },
  about: {
    paragraphs: [
      'Soy estudiante de Analista en Sistemas. Me encuentro desarrollando habilidades en programación con Java (NetBeans) y C# (Visual Studio), además de trabajar con GitHub para control de versiones.',
      'También tengo formación en testing manual QA, con conocimientos en pruebas funcionales y metodologías ágiles.',
      'Me interesa el desarrollo de software y la mejora continua, destacándome por ser proactiva, responsable y con rápida capacidad de aprendizaje.',
    ],
  },
  skillGroups: [
    {
      title: 'Lenguajes',
      icon: 'mdi-code-braces',
      items: ['Java (en curso)', 'Vue (en curso)', 'C#', 'Python', 'SQL (básico)'],
    },
    {
      title: 'Herramientas',
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
      title: 'Otros',
      icon: 'mdi-school-outline',
      items: [
        'Programación Orientada a Objetos',
        'Testing Manual QA',
        'Metodologías ágiles',
      ],
    },
  ],
  projects: [
    {
      name: 'Sistema de Inscripción a Materias',
      description:
        'Aplicación en Java utilizando POO, listas y lógica de negocio para gestionar inscripciones. Proyecto académico.',
      technologies: ['Java', 'NetBeans'],
      icon: 'mdi-school-outline',
    },
    {
      name: 'Aplicaciones de Escritorio',
      description:
        'Desarrollo de programas en C# con validaciones, estructuras de control y manejo de datos. Proyecto académico.',
      technologies: ['C#', 'Windows Forms', 'Visual Studio'],
      icon: 'mdi-microsoft-windows',
    },
  ],
  experiences: [
    {
      role: 'QA Manual',
      company: 'Blinker App',
      place: 'Testing',
      period: '2026',
      description:
        'Testing manual de aplicación, diseño de casos de prueba, ejecución de pruebas y reporte de bugs en Jira.',
      icon: 'mdi-bug-check-outline',
    },
    {
      role: 'Emprendimiento de pastelería',
      company: 'Baking in Bliss',
      place: 'Producción y ventas',
      period: '2025 — Actualidad',
      description: 'Producción, ventas, gestión de pedidos y clientes.',
      icon: 'mdi-cupcake',
    },
    {
      role: 'Emprendimiento textil',
      company: 'Lirene Bags',
      place: 'Diseño y producción',
      period: '2025 — Actualidad',
      description: 'Diseño, producción, branding y gestión de clientes.',
      icon: 'mdi-bag-personal-outline',
    },
    {
      role: 'Atención al cliente',
      company: 'Maja Deco',
      place: 'Local de decoración',
      period: '2025 (eventual)',
      description: 'Atención, ventas y organización.',
      icon: 'mdi-sofa-outline',
    },
    {
      role: 'Atención al cliente',
      company: 'Percha',
      place: 'Local de ropa',
      period: '2022 — 2023',
      description: 'Atención, asesoramiento, manejo de caja y organización.',
      icon: 'mdi-hanger',
    },
  ],
  education: [
    {
      degree: 'Analista en Sistemas',
      institution: 'IES Siglo 21',
      detail: 'Java, C#, Github',
      year: '2025 — 2027',
      icon: 'mdi-laptop',
    },
    {
      degree: 'Vue.js',
      institution: 'Udemy — Maximilian Schwarzmüller',
      detail: 'Vue.js, componentes, reactividad, frontend moderno',
      year: 'En curso',
      icon: 'mdi-vuejs',
    },
    {
      degree: 'QA Manual',
      institution: 'Coderhouse',
      detail: 'Testing manual y metodologías ágiles',
      year: '2026',
      icon: 'mdi-clipboard-check-outline',
    },
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'UTN — FRC',
      detail: 'Python',
      year: 'Cursado 2024',
      icon: 'mdi-cog-outline',
    },
    {
      degree: 'Secundario completo',
      institution: 'INSM — Canals, Córdoba',
      year: '2023',
      icon: 'mdi-certificate-outline',
    },
  ],
  certificates: [
    {
      name: 'Testing QA Manual',
      institution: 'Coderhouse',
      year: '2026',
      icon: 'mdi-certificate-outline',
      pdf: '/certificados/qa-manual.pdf',
    },
    {
      name: 'Reconocimiento académico por año completado',
      institution: 'IES Siglo 21',
      year: '2025',
      icon: 'mdi-school-outline',
      pdf: '/certificados/certificado_ies.pdf',
    },
    {
      name: 'Conferencia "El Rol del Testing en la Era de la Automatización y la IA"',
      institution: 'UTN FRC',
      year: '2025',
      icon: 'mdi-presentation',
      pdf: '/certificados/conferencia_utn.pdf',
    },
    {
      name: 'Workshop: Arma tu CV tradicional',
      institution: 'IES CAMP ',
      year: '2025',
      icon: 'mdi-account-voice',
      pdf: '/certificados/workshop-cv.pdf',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio' },
  ],
}
