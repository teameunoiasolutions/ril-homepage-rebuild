import './SiteFooter.css'

const footerNav = {
  explore: ['Discover Sri Lanka', 'Experiences', 'Journal', 'About'],
  connect: ['Begin a Conversation', 'Discovery Guide', 'Contact'],
  legal: ['Privacy Policy', 'Accessibility'],
} as const

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">Royale Isles</span>
          <span className="footer-subbrand">Lanka</span>
          <p className="footer-tagline">
            A private discovery companion for those who travel not to see the world, but to understand
            it.
          </p>
          <div className="footer-est">
            <span className="footer-est-rule"></span>
            <span>Est. 2020</span>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">Explore</span>
          <ul className="footer-links">
            {footerNav.explore.map((link) => (
              <li key={link}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">Connect</span>
          <ul className="footer-links">
            {footerNav.connect.map((link) => (
              <li key={link}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">Legal</span>
          <ul className="footer-links">
            {footerNav.legal.map((link) => (
              <li key={link}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2025 Royale Isles Lanka. All rights reserved.</span>
        <span className="footer-bottom-note">Crafted for those who travel thoughtfully.</span>
      </div>
    </footer>
  )
}
