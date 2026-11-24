import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
 import Footer2 from './Footer2'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <Navbar />
      <main>{children}</main>
       {pathname === '/' &&  <Footer2 />}
    </div>
  )
}
