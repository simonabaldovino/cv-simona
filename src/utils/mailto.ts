import { profile } from '@/data/cv'

/** Abre Gmail en el navegador con destinatario y mensaje precargados */
export function buildGmailComposeLink (): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: profile.email,
    su: 'Contacto desde portfolio',
    body: 'Hola Simona,\n\nTe escribo desde tu portfolio web.\n\n',
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

export const gmailComposeHref = buildGmailComposeLink()

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
