'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lang, t as translate } from './translations'

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('roforman:lang') as Lang
      if (saved === 'ko' || saved === 'en') setLangState(saved)
    } catch {}
  }, [])

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang)
    try {
      localStorage.setItem('roforman:lang', nextLang)
    } catch {}
  }

  const t = (key: string, params?: Record<string, string | number>) =>
    translate(lang, key, params)

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}