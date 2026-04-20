'use client'

import { useI18n } from '@/i18n/I18nContext'
import Accordion from '@/components/Accordion'

export default function ContactPage() {
  const { t } = useI18n()

  const faqItems = [
    { question: t('contact.q1'), answer: t('contact.a1') },
    { question: t('contact.q2'), answer: t('contact.a2') },
    { question: t('contact.q3'), answer: t('contact.a3') },
    { question: t('contact.q4'), answer: t('contact.a4') },
  ]

  return (
    <main className="page-main">
      <section className="page-hero">
        <h1>{t('contact.heroTitle')}</h1>
        <p>{t('contact.heroDesc')}</p>
      </section>

      <section className="page-card">
        <h2>{t('contact.faqTitle')}</h2>
        <Accordion items={faqItems} defaultOpenIndex={0} />
      </section>

      <section className="page-card page-card--contact">
        <h2>{t('contact.contactInfoTitle')}</h2>
        <p>{t('contact.contactInfoBody')}</p>
      </section>
    </main>
  )
}
