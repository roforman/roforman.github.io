'use client'

import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/footer.module.css'

export default function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className={styles.footer}>
      <span>{t('footer.line1')}</span><br />
      <span>{t('footer.line2')}</span><br />
      <span>{t('footer.line3')}</span><br />
      <span>{t('footer.line4')}</span>
    </footer>
  )
}
