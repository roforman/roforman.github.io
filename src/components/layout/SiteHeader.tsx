'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/header.module.css'

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/roforman_logo.png" alt="Company logo" width={120} height={40} priority />
          </Link>
        </div>
      </div>
    </header>
  )
}
