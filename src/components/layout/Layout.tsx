import { type ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
 import Footer2 from './Footer2'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [darkTheme, setDarkTheme] = useState(
    () => window.localStorage.getItem('site-theme') === 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = darkTheme ? 'dark' : 'light'
    window.localStorage.setItem('site-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])

  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <Navbar darkTheme={darkTheme} onToggleTheme={() => setDarkTheme((current) => !current)} />
      <main>{children}</main>
       {pathname === '/' &&  <Footer2 darkTheme />}
    </div>
  )
}
