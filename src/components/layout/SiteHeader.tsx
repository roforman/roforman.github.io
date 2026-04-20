'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/header.module.css'

export default function SiteHeader() {
  const { lang, setLang, t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/roforman_logo.png" alt="Company logo" width={120} height={40} priority />
          </Link>
        </div>
        <div className={styles.headerActions}>
          <button
            className={styles.menuToggle}
            aria-label={t('header.menuToggle')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.menuToggleLine} />
            <span className={styles.menuToggleLine} />
            <span className={styles.menuToggleLine} />
          </button>
          <nav className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
            <Link href="/company/" onClick={() => setMenuOpen(false)}>{t('header.company')}</Link>
            <Link href="/contact/" onClick={() => setMenuOpen(false)}>{t('header.contact')}</Link>
          </nav>
          <div className={styles.langSwitch} role="group" aria-label={t('header.langLabel')}>
            {(['en', 'ko'] as const).map((l) => (
              <button
                key={l}
                className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
