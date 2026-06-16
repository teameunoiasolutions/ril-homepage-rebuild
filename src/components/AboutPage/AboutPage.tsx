import './AboutPage.css'
import { aboutImages } from './images'

const stats = [
  { value: '2,400+', label: 'Travelers Guided' },
  { value: '150+', label: 'Curated Experiences' },
  { value: '45+', label: 'Local Partners' },
] as const

const methodologySteps = [
  {
    title: 'Step 1: Personal Vetting',
    description:
      'Every guide, artisan, and experience provider is personally met by our team. We assess not just quality, but values—do they respect the land, pay fair wages, honor tradition?',
  },
  {
    title: 'Step 2: Context Building',
    description:
      "We don't just list experiences. We provide historical context, cultural significance, and honest assessments so you understand what you're choosing and why it matters.",
  },
  {
    title: 'Step 3: Continuous Quality Control',
    description:
      'We regularly revisit our partners, collect traveler feedback, and adjust our recommendations. What worked last year might not meet our standards today.',
  },
] as const

const custodians = [
  {
    name: 'Anika De Silva',
    role: 'FOUNDER',
    image: aboutImages.portraitAnika,
    offset: false,
  },
  {
    name: 'Roshan Perera',
    role: 'JOURNEY ARCHITECT',
    image: aboutImages.portraitRoshan,
    offset: true,
  },
  {
    name: 'Malini Fernando',
    role: 'CULTURAL LEAD',
    image: aboutImages.portraitMalini,
    offset: false,
  },
  {
    name: 'Suresh Jayawardena',
    role: 'HEAD NATURALIST',
    image: aboutImages.portraitSuresh,
    offset: true,
  },
] as const

export function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-section about-hero">
        <div className="about-container about-hero-inner">
          <div className="about-hero-content">
            <p className="about-eyebrow about-eyebrow--gold">ABOUT ROYALE ISLES LANKA</p>
            <h1 className="about-hero-heading">
              A luxury travel discovery platform built on expertise, ethics, and deep local
              knowledge.
            </h1>
            <p className="about-hero-body">
              Since 2019, we&apos;ve helped discerning travelers discover Sri Lanka through
              meaningful experiences, cultural immersion, and authentic connections—never through
              algorithms or instant bookings.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-hero-image-wrap">
            <img
              className="about-hero-image"
              src={aboutImages.heroForest}
              alt="Misty forest landscape in Sri Lanka"
            />
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-section about-why-exist">
        <div className="about-container about-why-exist-inner">
          <div className="about-why-exist-left">
            <p className="about-eyebrow about-eyebrow--green">WHY WE EXIST</p>
            <h2 className="about-why-exist-heading">
              Travel is not about
              <br />
              collecting places.
            </h2>
          </div>
          <div className="about-why-exist-right">
            <p>
              We started Royale Isles Lanka because we saw too many people rushing through Sri
              Lanka, ticking off landmarks without ever truly arriving. We wanted to create something
              different—a space where travel slows down, where discovery is intentional, where the
              journey inward is just as important as the journey across the island.
            </p>
            <p>
              Our philosophy is simple:{' '}
              <em>travel is not consumption</em>. It&apos;s self-discovery. And Sri Lanka, with its
              ancient wisdom, stunning landscapes, and generous people, is the perfect place to
              remember that.
            </p>
            <p>
              We&apos;re not here to sell you a holiday. We&apos;re here to help you find meaningful
              experiences that change how you see the world—and yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Dual images */}
      <section className="about-section about-dual-images">
        <div className="about-container about-dual-images-inner">
          <img
            className="about-dual-image about-dual-image--left"
            src={aboutImages.sigiriya}
            alt="Sigiriya rock fortress surrounded by lush greenery"
          />
          <img
            className="about-dual-image about-dual-image--right"
            src={aboutImages.craftsman}
            alt="Artisan craftsman working with traditional tools"
          />
        </div>
      </section>

      {/* What We Do */}
      <section className="about-section about-what-we-do">
        <div className="about-container about-what-we-do-inner">
          <p className="about-eyebrow about-eyebrow--gold">WHAT WE DO</p>
          <h2 className="about-what-we-do-heading">
            We are a luxury travel discovery platform, not a booking website.
          </h2>
          <div className="about-what-we-do-columns">
            <div>
              <h3 className="about-column-title">Discovery, Not Transactions</h3>
              <p>
                We don&apos;t do packages or instant bookings. Instead, we help you discover
                meaningful journeys through cultural immersion, authentic encounters, and
                experiences that respect both the land and its people.
              </p>
            </div>
            <div>
              <h3 className="about-column-title">Curated Connections</h3>
              <p>
                We introduce you to experiences, guides, and places that align with your curiosity.
                Our role is to open doors—yours is to walk through them with intention and
                presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="about-section about-different">
        <div className="about-container about-different-inner">
          <p className="about-eyebrow about-eyebrow--green about-eyebrow--center">
            HOW WE&apos;RE DIFFERENT
          </p>
          <blockquote className="about-pull-quote">
            &ldquo;Most platforms want you to book fast. We want you to choose wisely.&rdquo;
          </blockquote>
          <p className="about-different-body">
            We&apos;re not optimized for clicks or conversions. We&apos;re built for depth, for the
            kind of travel that asks something of you in return. We don&apos;t have algorithms
            pushing the most popular tours. We have human curation, context, and stories that help
            you make better choices—choices that reflect who you are and who you want to become.
          </p>
        </div>
      </section>

      {/* Spa image */}
      <section className="about-section about-full-image">
        <div className="about-container">
          <img
            className="about-full-image-img"
            src={aboutImages.spa}
            alt="Luxury spa with ocean view in Sri Lanka"
          />
        </div>
      </section>

      {/* Methodology */}
      <section className="about-section about-methodology">
        <div className="about-container about-methodology-inner">
          <div className="about-methodology-left">
            <p className="about-eyebrow about-eyebrow--green">OUR METHODOLOGY</p>
            <h2 className="about-methodology-heading">How we curate experiences.</h2>
          </div>
          <div className="about-methodology-steps">
            {methodologySteps.map((step) => (
              <div key={step.title} className="about-methodology-step">
                <h3 className="about-step-title">{step.title}</h3>
                <p className="about-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custodians */}
      <section className="about-section about-custodians">
        <div className="about-container about-custodians-inner">
          <header className="about-custodians-header">
            <div className="about-custodians-labels">
              <span className="about-section-numeral">IV.</span>
              <span className="about-section-sub-label">THE CUSTODIANS</span>
            </div>
            <div className="about-custodians-intro">
              <h2 className="about-custodians-heading">
                The People Who
                <br />
                Hold This Island&apos;s <em>Secrets.</em>
              </h2>
              <p className="about-custodians-description">
                Behind every flawlessly realised journey is a team of individuals with a singular
                obsession: knowing Ceylon more deeply than any guidebook ever could.
              </p>
            </div>
          </header>

          <div className="about-custodians-grid">
            {custodians.map((person) => (
              <article
                key={person.name}
                className={`about-custodian-card${person.offset ? ' about-custodian-card--offset' : ''}`}
              >
                <div className="about-custodian-photo-wrap">
                  <img
                    className="about-custodian-photo"
                    src={person.image}
                    alt={person.name}
                  />
                </div>
                <div className="about-custodian-info">
                  <h3 className="about-custodian-name">{person.name}</h3>
                  <span className="about-custodian-role">{person.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Breath */}
      <section className="about-section about-breath">
        <div className="about-container about-breath-inner">
          <div className="about-breath-image-wrap">
            <img
              className="about-breath-image"
              src={aboutImages.coastline}
              alt="Aerial view of Sri Lanka coastline"
            />
            <div className="about-breath-overlay">
              <p className="about-breath-label">THE BREATH</p>
              <h2 className="about-breath-heading">
                The ocean exhales.
                <br />
                Finally so do you
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Expected */}
      <section className="about-section about-expected">
        <div className="about-container about-expected-inner">
          <h2 className="about-expected-heading">You are exactly who we were expecting.</h2>
          <p className="about-expected-body">
            If you&apos;ve read this far, you already understand what we&apos;re about. We&apos;re
            here when you&apos;re ready to explore Sri Lanka with intention, curiosity, and an open
            heart.
          </p>
        </div>
      </section>

      {/* Private Invitation */}
      <section className="about-section about-invitation">
        <div className="about-container about-invitation-inner">
          <p className="about-invitation-label">A PRIVATE INVITATION</p>
          <h2 className="about-invitation-heading">
            The island is patient.
            <br />
            <em>It waits for those ready to receive it.</em>
          </h2>
          <p className="about-invitation-body">
            We accept a limited number of enquiries each season. If you feel the pull of Ceylon, we
            would be honoured to begin the conversation.
          </p>
          <a className="about-invitation-button" href="#begin">ENTER THE ISLES</a>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="about-section about-footer-cta">
        <img
          className="about-footer-cta-image"
          src={aboutImages.sunsetBeach}
          alt="Beach at sunset in Sri Lanka"
        />
        <div className="about-footer-cta-overlay">
          <h2 className="about-footer-cta-heading">Ready to discover Sri Lanka differently?</h2>
          <p className="about-footer-cta-body">
            Explore our curated experiences, meet our trusted partners, and start planning a journey
            that goes beyond the surface.
          </p>
        </div>
      </section>
    </main>
  )
}
