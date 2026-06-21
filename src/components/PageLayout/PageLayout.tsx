import type { ReactNode } from 'react'
import { FloatingWhatsAppButton } from '../FloatingWhatsAppButton/FloatingWhatsAppButton'
import { SiteFooter } from '../SiteFooter/SiteFooter'
import { SiteHeader } from '../SiteHeader/SiteHeader'
import './PageLayout.css'

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="page-layout-content">{children}</div>
      <SiteFooter />
      <FloatingWhatsAppButton />
    </>
  )
}
