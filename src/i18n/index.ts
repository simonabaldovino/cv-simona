import type { CvLocale, LocaleCode } from '@/i18n/types'
import { enLocale } from '@/i18n/locales/en'
import { esLocale } from '@/i18n/locales/es'

export const locales: Record<LocaleCode, CvLocale> = {
  es: esLocale,
  en: enLocale,
}

export const defaultLocale: LocaleCode = 'es'
