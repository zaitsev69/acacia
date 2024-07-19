// ni18n.config.ts
import type { Ni18nOptions } from 'ni18n'

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ['fr', 'en'],
  ns: ['booking', 'contact', 'footer', 'header', 'hero', 'info'],
  fallbackLng: 'en',
}