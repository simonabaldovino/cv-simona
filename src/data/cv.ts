export const profile = {
  firstName: 'Simona',
  lastName: 'Baldovino',
  fullName: 'Simona Baldovino',
  title: 'Estudiante de Analista en Sistemas | QA Manual',
  tagline:
    'Apasionada por la tecnología, el desarrollo de software y la resolución de problemas',
  email: 'baldovinosimona020@gmail.com',
  phone: '+54 9 3463 44 1872',
  location: 'Córdoba, Argentina',
  photo: '/profile.jpg',
  github: 'https://github.com/simonabaldovino',
  linkedin: 'https://www.linkedin.com/in/simona-baldovino-6a38b0363/',
  cvPdf: '/cv.pdf',
}

export const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'education', label: 'Educación' },
  { id: 'certificates', label: 'Certificados' },
  { id: 'contact', label: 'Contacto' },
] as const

export const about = {
  paragraphs: [
    'Soy estudiante de Analista en Sistemas. Me encuentro desarrollando habilidades en programación con Java (NetBeans) y C# (Visual Studio), además de trabajar con GitHub para control de versiones.',
    'También tengo formación en testing manual QA, con conocimientos en pruebas funcionales y metodologías ágiles.',
    'Me interesa el desarrollo de software y la mejora continua, destacándome por ser proactiva, responsable y con rápida capacidad de aprendizaje.',
  ],
}

export const skillGroups = [
  {
    title: 'Lenguajes',
    icon: 'mdi-code-braces',
    items: ['Java (en curso)', 'C#', 'Python', 'SQL (básico)'],
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
]

export const projects = [
  {
    name: 'Sistema de Inscripción a Materias',
    description:
      'Aplicación en Java utilizando POO, listas y lógica de negocio para gestionar inscripciones.',
    technologies: ['Java', 'NetBeans'],
    icon: 'mdi-school-outline',
  },
  {
    name: 'Aplicaciones de Escritorio',
    description:
      'Desarrollo de programas en C# con validaciones, estructuras de control y manejo de datos.',
    technologies: ['C#', 'Windows Forms', 'Visual Studio'],
    icon: 'mdi-microsoft-windows',
  },
  {
    name: 'Proyecto QA Blinker',
    description:
      'Testing manual de aplicación, diseño de casos de prueba, ejecución de pruebas y reporte de bugs.',
    technologies: ['Jira', 'Testing funcional'],
    icon: 'mdi-bug-check-outline',
  },
]

export const experiences = [
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
]

export const education = [
  {
    degree: 'Analista en Sistemas',
    institution: 'IES Siglo 21',
    detail: 'En curso — 3.er semestre',
    icon: 'mdi-laptop',
  },
  {
    degree: 'Curso QA Manual',
    institution: 'Coderhouse',
    detail: 'Testing manual y metodologías ágiles',
    icon: 'mdi-clipboard-check-outline',
  },
  {
    degree: 'Ingeniería en Sistemas',
    institution: 'UTN — FRC',
    detail: 'Cursado 2024',
    icon: 'mdi-cog-outline',
  },
  {
    degree: 'Secundario completo',
    institution: 'Instituto Nuestra Señora de la Misericordia',
    detail: 'Canals, Córdoba',
    icon: 'mdi-certificate-outline',
  },
]

export const certificates = [
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
    pdf: '/certificados/siglo21-2025.pdf',
  },
  {
    name: 'Conferencia "El Rol del Testing en la Era de la Automatización y la IA"',
    institution: 'UTN FRC',
    year: '2025',
    icon: 'mdi-presentation',
    pdf: '/certificados/charla-testing.pdf',
  },
  {
    name: 'Workshop: Arma tu CV tradicional',
    institution: 'IESCAMP2025',
    year: '2025',
    icon: 'mdi-account-voice',
    pdf: '/certificados/workshop-cv.pdf',
  },
]

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
]
