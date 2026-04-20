'use client'

import Image from 'next/image'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/company.module.css'

export default function CompanyPage() {
  const { t } = useI18n()

  return (
    <main className="page-main">
      <section className="page-hero">
        <h1>{t('company.heroTitle')}</h1>
        <p>{t('company.heroDesc')}</p>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <video controls>
            <source src="/media/panel-assembly.mkv" type="video/mp4" />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/BAmeOK2YKj0?si=FZoPP-Y9ARpCsIw8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className={styles.gallery} id="research">
        <h2 className={styles.galleryTitle}>{t('company.researchTitle')}</h2>
        <div className="media-grid">
          <figure className="media-card">
            <Image src="/images/technology-wearable-assistive-robot-test-01.png" alt="Wearable assistive robot test in lab" width={400} height={300} />
            <figcaption>{t('company.researchCap1')}</figcaption>
          </figure>
          <figure className="media-card">
            <Image src="/images/technology-humanoid-robot-demonstration-01.png" alt="Humanoid robot demonstration in lab" width={400} height={300} />
            <figcaption>{t('company.researchCap2')}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`page-card ${styles.technologyCard}`} id="technology">
        <h2>{t('company.coreTechTitle')}</h2>
        <p>{t('company.coreTechDesc')}</p>
      </section>

      <section className="page-card">
        <h2>{t('company.techGalleryTitle')}</h2>
        <div className={`media-grid ${styles.technologyGalleryGrid}`}>
          <figure className="media-card">
            <Image src="/images/technology-foldable-mobility-platform-prototype-01.png" alt="Foldable mobility platform prototype" width={400} height={300} />
            <figcaption>{t('company.techCap1')}</figcaption>
          </figure>
          <figure className="media-card">
            <Image src="/images/technology-wearable-exoskeleton-control-test-01.png" alt="Wearable exoskeleton control test" width={400} height={300} />
            <figcaption>{t('company.techCap2')}</figcaption>
          </figure>
        </div>
      </section>

      {/* C-arm 기술 카드 */}
      <section className="page-card">
        <h2 className={styles.techItemTitle}>{t('company.carmTitle')}</h2>
        <ul className={styles.techList}>
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
        <div className={styles.techMediaGrid}>
          <figure className={styles.techFigure}>
            <Image src="/images/carm-2.jpg" alt="C-arm platform" width={400} height={280} />
            <figcaption>{t('company.carmImgCaption')}</figcaption>
          </figure>
          <figure className={styles.techFigure}>
            <Image src="/images/carm-3.png" alt="C-arm diagram" width={400} height={280} />
          </figure>
        </div>
      </section>

      {/* Exoskeletal 기술 카드 */}
      <section className="page-card">
        <h2 className={styles.techItemTitle}>{t('company.exoTitle')}</h2>
        <ul className={styles.techList}>
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
        <div className={styles.techMediaGrid}>
          <figure className={styles.techFigure}>
            <Image src="/images/exoskeletal-1.png" alt="Exoskeletal experimental setup" width={400} height={280} />
            <figcaption>{t('company.exoImgCaption')}</figcaption>
          </figure>
          <figure className={styles.techFigure}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/ueK4BHaNQpk"
                title="Master device"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>{t('company.exoVideo1Caption')}</figcaption>
          </figure>
          <figure className={styles.techFigure}>
            <div className={styles.videoWrapper}>
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
    </main>
  )
}
