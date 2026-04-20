'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/home.module.css'

const RD_ITEMS = Array.from({ length: 13 }, (_, i) => `home.rdItem${i + 1}`)

export default function HomePage() {
  const { t } = useI18n()

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t('home.heroTitle')}</h1>
          <p dangerouslySetInnerHTML={{ __html: t('home.heroBody') }} />
        </div>
        <div className={styles.heroQuickLinks}>
          <Link href="/company/#technology">{t('home.quickTechnology')}</Link>
          <Link href="/contact/">{t('home.quickContact')}</Link>
        </div>
      </section>

      {/* PDF 2페이지: 회사 소개 */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutText}>
            <p className={styles.aboutMain}>{t('home.aboutMain')}</p>
            <p className={styles.aboutDesc}>{t('home.aboutDesc')}</p>
          </div>
          <div className={styles.aboutAddress}>
            <p><strong>ROFORMAN Inc.</strong></p>
            <p>{t('home.aboutHeadOffice')}</p>
            <p>{t('home.aboutRdCenter')}</p>
            <p>{t('home.aboutEmail')}</p>
          </div>
        </div>
      </section>

      {/* PDF 3페이지: R&D 목록 */}
      <section className={styles.rd}>
        <div className={styles.rdInner}>
          <h2 className={styles.rdTitle}>{t('home.rdTitle')}</h2>
          <ul className={styles.rdList}>
            {RD_ITEMS.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
      </section>

    </>
  )
}
