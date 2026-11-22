import { useState } from 'react'
import logo from '@/assets/icons/logo.svg'

type NavItem = { label: string; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#service' },
  { label: 'Technology', href: '#technology' },
  { label: 'About us', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

const Logo = () => (
  <a href="#home" aria-label="Neural Tech Labs home">
    <img src={logo} alt="Neural Tech Labs" width={121} height={43} />
  </a>
)

const MoonIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
  </svg>
)

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        className="mx-auto flex max-w-220 items-center justify-between rounded-full bg-white px-6 py-3 shadow-[0_4px_10px_rgba(15,23,42,0.18)]"
        aria-label="Main"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-2 font-[Poppins,sans-serif] text-[15px] md:flex">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = active === label
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActive(label)}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'block rounded-full bg-primary px-5 py-2.5 font-medium text-white'
                      : 'block rounded-full px-4 py-2.5 text-neutral transition-colors hover:text-secondary'
                  }
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Toggle dark mode" className="hidden text-ink sm:block">
            <MoonIcon />
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-secondary px-5 py-2.5 font-[Poppins,sans-serif] text-[14px] text-white transition-colors hover:bg-secondary/90 sm:inline-flex"
          >
            Contact Us <ArrowUpRight />
          </a>
          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-[880px] rounded-3xl bg-white p-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1 font-[Poppins,sans-serif]">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => {
                    setActive(label)
                    setOpen(false)
                  }}
                  className={`block rounded-full px-5 py-3 ${
                    active === label ? 'bg-primary text-white' : 'text-neutral'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-white">
                Contact Us <ArrowUpRight />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
