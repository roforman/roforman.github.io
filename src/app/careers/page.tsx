'use client'

import { useI18n } from '@/i18n/I18nContext'
import JobList from '@/components/JobList'

export default function CareersPage() {
  const { t } = useI18n()

  return (
    <main className="page-main">
      <section className="page-hero">
        <h1>{t('careers.heroTitle')}</h1>
        <p>{t('careers.heroDesc')}</p>
      </section>

      <section className="page-card">
        <h2>{t('careers.hiringStatusTitle')}</h2>
        <p>{t('careers.hiringStatusDesc')}</p>
      </section>

      <section className="page-card">
        <JobList />
      </section>

      <section className="page-card">
        <h2>{t('careers.processTitle')}</h2>
        <ol className="process-list">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="process-step">
              <span className="process-step__index">{n}</span>
              <div>
                <h3>{t(`careers.step${n}Title`)}</h3>
                <p>{t(`careers.step${n}Body`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
