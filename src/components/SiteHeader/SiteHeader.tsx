import { useEffect, useState } from 'react'
import './SiteHeader.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/discover-sri-lanka', label: 'Discover' },
  { href: '/expectations', label: 'Expectations' },
  { href: '/travel-preparation', label: 'Before You Arrive' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
] as const

const navAliases: Record<string, string[]> = {
  '/expectations': ['/experiences'],
}

function normalizePath(path: string) {
  const normalizedPath = path.replace(/\/$/, '')
  return normalizedPath === '' ? '/' : normalizedPath
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = normalizePath(window.location.pathname)

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
  const isActivePath = (href: string) => {
    const paths = [href, ...(navAliases[href] ?? [])]
    return paths.some((path) => currentPath === path || currentPath.startsWith(`${path}/`))
  }

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
          {navLinks.map((link) => {
            const isActive = isActivePath(link.href)

            return (
              <a
                key={link.href}
                className={isActive ? 'is-active' : undefined}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            )
          })}
          <a
            className={isActivePath('/my-journey') ? 'is-active' : undefined}
            href="/my-journey"
            aria-current={isActivePath('/my-journey') ? 'page' : undefined}
            onClick={closeMenu}
          >
            My Journey
          </a>
        </nav>

        <a className="site-header-cta" href="/expectations" onClick={closeMenu}>
          Begin Journey
        </a>
      </div>
    </header>
  )
}
