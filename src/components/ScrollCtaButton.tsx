'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '@/styles/scrollcta.module.css'

interface Props {
  href: string
  label: string
  threshold?: number
}

export default function ScrollCtaButton({ href, label, threshold = 300 }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return (
    <div className={styles.container}>
      <Link href={href} className={`${styles.btn} ${visible ? styles.btnVisible : ''}`}>
        {label}
      </Link>
    </div>
  )
}
