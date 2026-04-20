import type { Metadata } from 'next'
import { I18nProvider } from '@/i18n/I18nContext'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'ROFORMAN',
  description: 'Robotics for Mankind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <div className="layout-root">
            <SiteHeader />
            <main className="layout-content">
              {children}
            </main>
            <SiteFooter />
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}
