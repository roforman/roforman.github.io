'use client'

import Image from 'next/image'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/product.module.css'

export default function ProductPage() {
  const { t } = useI18n()

  return (
    <main className="page-main">
      <section className="page-hero">
        <h1>{t('product.heroTitle')}</h1>
        <p>{t('product.heroDesc')}</p>
      </section>

      <section className="page-card">
        <h2>{t('product.overviewTitle')}</h2>
        <p>{t('product.overviewDesc')}</p>
      </section>

      <section className={`page-card ${styles.galleryCard}`}>
        <h2>{t('product.galleryTitle')}</h2>
        <div className={`media-grid ${styles.galleryGrid}`}>
          <figure className="media-card">
            <Image src="/images/product-infusion-pump-prototype-01.png" alt="Infusion pump prototype test setup" width={400} height={300} />
            <figcaption>{t('product.cap1')}</figcaption>
          </figure>
          <figure className="media-card">
            <Image src="/images/technology-stair-climbing-wheelchair-test-01.png" alt="Stair climbing wheelchair platform test" width={400} height={300} />
            <figcaption>{t('product.cap2')}</figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}
