import ko from './ko.json'
import en from './en.json'

export type Lang = 'ko' | 'en'

export const translations: Record<Lang, typeof ko> = { ko, en }

export function t(
  lang: Lang,
  key: string,
  params?: Record<string, string | number>
): string {
  const keys = key.split('.')
  let value: unknown = translations[lang]
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k]
  }
  if (value == null) {
    let fallback: unknown = translations['en']
    for (const k of keys) fallback = (fallback as Record<string, unknown>)?.[k]
    value = fallback ?? key
  }
  if (typeof value !== 'string') return key
  if (params) {
    return value.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) =>
      String(params[k] ?? '')
    )
  }
  return value
}
