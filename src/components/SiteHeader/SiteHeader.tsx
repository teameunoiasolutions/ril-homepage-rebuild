import { useEffect, useState } from 'react'
import './SiteHeader.css'

const navLinks = [
  { href: '/discover-sri-lanka', label: 'Discover Sri Lanka' },
  { href: '/expectations', label: 'Expectations' },
  { href: '/travel-preparation', label: 'Before You Arrive' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
] as const

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header${isMenuOpen ? ' is-menu-open' : ''}`}>
      <a className="site-header-brand" href="/" onClick={closeMenu}>
        Royale Isles Lanka
      </a>

      <button
        className="site-header-menu-button"
        type="button"
        aria-label={isMenuOpen ? 'Close primary navigation' : 'Open primary navigation'}
        aria-controls="site-header-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
      >
        <span className="site-header-menu-label">Menu</span>
        <span className="site-header-menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className="site-header-panel" id="site-header-navigation">
        <nav className="site-header-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="/my-journey" onClick={closeMenu}>
            My Journey
          </a>
        </nav>

        <a className="site-header-cta" href="/expectations" onClick={closeMenu}>
          Begin Expectations
        </a>
      </div>
    </header>
  )
}
