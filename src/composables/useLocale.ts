import { computed, inject, provide, ref, watch, type InjectionKey, type Ref } from 'vue'
import { baseProfile } from '@/data/profile'
import { defaultLocale, locales } from '@/i18n'
import type { CvLocale, LocaleCode } from '@/i18n/types'
import { buildGmailComposeLink } from '@/utils/mailto'

const LOCALE_STORAGE_KEY = 'cv-simona-locale'

const LocaleKey: InjectionKey<{
  locale: Ref<LocaleCode>
  content: Ref<CvLocale>
  profile: Ref<typeof baseProfile & CvLocale['profile']>
  gmailComposeHref: Ref<string>
  toggleLocale: () => void
}> = Symbol('locale')

function readStoredLocale (): LocaleCode {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  return defaultLocale
}

function applyDocumentLocale (code: LocaleCode, content: CvLocale) {
  document.documentElement.lang = code
  document.title = content.meta.title

  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', content.meta.description)
}

export function provideLocale () {
  const locale = ref<LocaleCode>(readStoredLocale())

  const content = computed(() => locales[locale.value])

  const profile = computed(() => ({
    ...baseProfile,
    ...content.value.profile,
  }))

  const gmailComposeHref = computed(() =>
    buildGmailComposeLink(content.value.mail),
  )

  function setLocale (code: LocaleCode) {
    locale.value = code
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, code)
    } catch {
      /* ignore */
    }
    applyDocumentLocale(code, locales[code])
  }

  function toggleLocale () {
    setLocale(locale.value === 'es' ? 'en' : 'es')
  }

  watch(
    content,
    value => applyDocumentLocale(locale.value, value),
    { immediate: true },
  )

  const api = { locale, content, profile, gmailComposeHref, toggleLocale }
  provide(LocaleKey, api)
  return api
}

export function useLocale () {
  const ctx = inject(LocaleKey)
  if (!ctx) {
    throw new Error('useLocale() must be used after provideLocale() in App.vue')
  }
  return ctx
}
