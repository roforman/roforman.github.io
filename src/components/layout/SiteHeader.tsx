'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/header.module.css'

export default function SiteHeader() {
  const { t } = useI18n()
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
          </nav>
        </div>
      </div>
    </header>
  )
}
