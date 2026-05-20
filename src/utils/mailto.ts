import { baseProfile } from '@/data/profile'

export type MailCopy = {
  subject: string
  body: string
}

/** Abre Gmail en el navegador con destinatario y mensaje precargados */
export function buildGmailComposeLink (mail: MailCopy): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: baseProfile.email,
    su: mail.subject,
    body: mail.body,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

export async function copyEmailToClipboard (): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(baseProfile.email)
    return true
  } catch {
    const input = document.createElement('textarea')
    input.value = baseProfile.email
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
