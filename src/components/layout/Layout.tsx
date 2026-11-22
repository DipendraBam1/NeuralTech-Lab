import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
