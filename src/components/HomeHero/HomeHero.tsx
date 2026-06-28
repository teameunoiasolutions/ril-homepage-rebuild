import './HomeHero.css'
import { useJourney } from '../../journey/JourneyContext'

export function HomeHero() {
  const { count } = useJourney()

  return (
    <section className="home-hero">
      <div className="home-hero-top">
        <div className="home-hero-brand">
          <span className="home-hero-brand-name">Royale Isles</span>
          <span className="home-hero-brand-subtitle">Lanka</span>
        </div>

        <nav className="home-hero-nav" aria-label="Primary navigation">
          <a href="/discover-sri-lanka">Discover Sri Lanka</a>
          <a href="/experiences">Experiences</a>
          <a href="/my-journey">My Journey{count > 0 ? ` • ${count}` : ''}</a>
          <a href="/journal">Journal</a>
          <a href="/about">About</a>
        </nav>

        <a className="home-hero-button" href="#begin">
          Begin Your Journey
        </a>
      </div>

      <div className="home-hero-content">
        <span className="home-hero-eyebrow">A journey written for how you want to feel</span>
        <h1 className="home-hero-heading">
          Sri Lanka arrives with a quieter pace.
        </h1>
        <p className="home-hero-copy">
          Soft dawn light, warm tea estate air, and custom journeys designed around your
          curiosity, not an itinerary.
        </p>
      </div>

      <span className="home-hero-side-label">Vol. I 2026</span>
    </section>
  )
}
