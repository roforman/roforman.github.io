'use client'

import { useI18n } from '@/i18n/I18nContext'
import jobs from '@/data/jobs.json'

const DEFAULT_APPLY_URL = 'https://forms.google.com'

interface Job {
  title: string
  employmentType: string
  team: string
  location: string
  experience: string
  description: string
  applyUrl?: string
}

export default function JobList() {
  const { t } = useI18n()
  const jobList = jobs as Job[]

  const count = jobList.length
  const countText = t(count === 1 ? 'careers.roleCountOne' : 'careers.rolesCount', { count })

  return (
    <>
      <div className="careers-section-head">
        <h2>{t('careers.openPositionsTitle')}</h2>
        <span className="careers-count">{countText}</span>
      </div>
      <div className="job-list">
        {count === 0 ? (
          <p className="job-list__empty">{t('careers.noJobs')}</p>
        ) : (
          jobList.map((job, i) => {
            const isIntern = job.employmentType?.toLowerCase().includes('intern') ||
              job.employmentType?.includes('인턴')
            const applyUrl = job.applyUrl?.trim() || DEFAULT_APPLY_URL
            return (
              <article key={i} className="job-card">
                <div className="job-card__header">
                  <h3>{job.title}</h3>
                  <span className={`job-card__badge${isIntern ? ' job-card__badge--alt' : ''}`}>
                    {job.employmentType}
                  </span>
                </div>
                <p className="job-card__meta">
                  {[job.team, job.location, job.experience].filter(Boolean).join(' | ')}
                </p>
                <p className="job-card__desc">{job.description}</p>
                <div className="job-card__actions">
                  <a
                    href={applyUrl}
                    className="job-card__apply"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('careers.applyButton')}
                  </a>
                </div>
              </article>
            )
          })
        )}
      </div>
    </>
  )
}
