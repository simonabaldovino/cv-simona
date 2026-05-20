export type LocaleCode = 'es' | 'en'

export type NavItem = { id: string, label: string }

export type SkillGroup = {
  title: string
  icon: string
  items: string[]
}

export type Project = {
  name: string
  description: string
  technologies: string[]
  icon: string
}

export type Experience = {
  role: string
  company: string
  place?: string
  period: string
  description: string
  icon: string
}

export type Education = {
  degree: string
  institution: string
  detail?: string
  year?: string
  icon: string
}

export type Certificate = {
  name: string
  institution: string
  year: string
  icon: string
  pdf: string
}

export type Language = { name: string, level: string }

export interface CvLocale {
  meta: {
    title: string
    description: string
  }
  profile: {
    title: string
    tagline: string
  }
  navItems: NavItem[]
  sections: {
    about: { title: string }
    availability: { title: string, headline: string }
    skills: { title: string, subtitle: string }
    projects: { title: string, subtitle: string, viewGithub: string }
    experience: { title: string, subtitle: string }
    education: { title: string }
    certificates: { title: string, subtitle: string, view: string }
    contact: { title: string, intro: string }
    cta: { title: string, line1: string, line2: string, button: string }
  }
  footer: {
    role: string
    dedication: string
  }
  ui: {
    languages: string
    email: string
    emailCopied: string
    githubProfile: string
    linkedinProfile: string
    viewProjects: string
    viewCv: string
    downloadCv: string
    contact: string
    sendEmail: string
    sendMessage: string
    navAriaLabel: string
    langToggleLabel: string
  }
  mail: {
    subject: string
    body: string
  }
  availability: { paragraphs: string[] }
  about: { paragraphs: string[] }
  skillGroups: SkillGroup[]
  projects: Project[]
  experiences: Experience[]
  education: Education[]
  certificates: Certificate[]
  languages: Language[]
}
