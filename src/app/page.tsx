'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/i18n/I18nContext'
import ScrollCtaButton from '@/components/ScrollCtaButton'
import styles from '@/styles/home.module.css'

const GALLERY = [
  { src: '/images/product-infusion-pump-prototype-01.png', alt: 'Infusion pump prototype test', capKey: 'home.cap1' },
  { src: '/images/technology-wearable-assistive-robot-test-01.png', alt: 'Wearable assistive robot test', capKey: 'home.cap2' },
  { src: '/images/technology-foldable-mobility-platform-prototype-01.png', alt: 'Foldable mobility platform prototype', capKey: 'home.cap3' },
  { src: '/images/technology-humanoid-robot-demonstration-01.png', alt: 'Humanoid robot demonstration', capKey: 'home.cap4' },
  { src: '/images/technology-stair-climbing-wheelchair-test-01.png', alt: 'Stair-climbing wheelchair test', capKey: 'home.cap5' },
  { src: '/images/technology-wearable-exoskeleton-control-test-01.png', alt: 'Wearable exoskeleton control test', capKey: 'home.cap6' },
]

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

      <section className={styles.overview}>
        <ScrollCtaButton href="/product/" label={t('home.ctaViewProducts')} />
        <div className={styles.overviewIntro}>
          <h2>{t('home.overviewTitle')}</h2>
          <p>{t('home.overviewBody')}</p>
        </div>
        <div className={`${styles.overviewGallery} media-grid`}>
          {GALLERY.map((item) => (
            <figure key={item.src} className="media-card">
              <Image src={item.src} alt={item.alt} width={400} height={300} />
              <figcaption>{t(item.capKey)}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
