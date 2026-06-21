import './SiteHeader.css'

const navLinks = [
  { href: '/#destinations', label: 'Discover Sri Lanka' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/travel-preparation', label: 'Travel Preparation' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header-brand" href="/">
        Royale Isles Lanka
      </a>

      <nav className="site-header-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="site-header-cta" href="/#begin">
        Begin Your Journey
      </a>
    </header>
  )
}
