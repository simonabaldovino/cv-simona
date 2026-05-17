import { profile } from '@/data/cv'

export function buildMailtoLink (): string {
  const subject = encodeURIComponent('Contacto desde portfolio')
  const body = encodeURIComponent(
    `Hola Simona,\n\nTe escribo desde tu portfolio web.\n\n`,
  )
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}

export const mailtoHref = buildMailtoLink()

export async function copyEmailToClipboard (): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(profile.email)
    return true
  } catch {
    const input = document.createElement('textarea')
    input.value = profile.email
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.left = '-9999px'
    document.body.append(input)
    input.select()
    const ok = document.execCommand('copy')
    input.remove()
    return ok
  }
}
