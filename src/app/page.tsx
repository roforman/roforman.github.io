'use client'

import Image from 'next/image'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/home.module.css'
import companyStyles from '@/styles/company.module.css'

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

      {/* C-arm 기술 카드 */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.carmTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>
            {t('company.carmProblemTitle')}
            <ul>
              <li>{t('company.carmProblem1')}</li>
              <li>{t('company.carmProblem2')}</li>
            </ul>
          </li>
          <li>
            {t('company.carmSolutionTitle')}
            <ul>
              <li>{t('company.carmSolution1')}</li>
              <li>{t('company.carmSolution2')}</li>
            </ul>
          </li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/carm-1.png" alt="C-arm overview" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/carm-2.jpg" alt="C-arm platform" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.carmImgCaption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/carm-3.png" alt="C-arm diagram" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
        </div>
      </section>

      {/* Exoskeletal 기술 카드 */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.exoTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>
            {t('company.exoDeviceTitle')}
            <ul>
              <li>{t('company.exoDevice1')}</li>
              <li>{t('company.exoDevice2')}</li>
              <li>{t('company.exoDevice3')}</li>
            </ul>
          </li>
          <li>
            {t('company.exoSystemTitle')}
            <ul>
              <li>{t('company.exoSystem1')}</li>
              <li>{t('company.exoSystem2')}</li>
              <li>{t('company.exoSystem3')}</li>
            </ul>
          </li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/exoskeletal-1.png" alt="Exoskeletal experimental setup" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.exoImgCaption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/ueK4BHaNQpk"
                title="Master device"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>{t('company.exoVideo1Caption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/6sHSHove0Pg"
                title="Teleoperation demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>{t('company.exoVideo2Caption')}</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
