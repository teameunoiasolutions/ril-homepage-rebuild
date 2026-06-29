import './TravelPreparationPage.css'
import { sharedHeritageWorld } from '../../journey/discoveryWorlds'
import nuwaraEliya from '../../assets/images/NuwaraEliya .jpg'

const images = {
  hero: nuwaraEliya,
} as const

const handbookLinks = [
  { href: '#welcome', label: 'Your Welcome' },
  { href: '#tea-ritual', label: 'Welcome Tea' },
  { href: '#arranged', label: 'Arranged Details' },
  { href: '#concierge', label: 'Concierge' },
  { href: '#begin', label: 'Begin' },
] as const

const heroProtocols = [
  'Personal airport welcome',
  'Private transfer prepared',
  'Luggage quietly handled',
  'Concierge already briefed',
  'Historical context prepared',
] as const

const assurancePoints = [
  { value: 'Personal', label: 'Arrival host' },
  { value: 'Prepared', label: 'Chauffeur team' },
  { value: 'Quiet', label: 'Lounge welcome' },
  { value: 'Always', label: 'Concierge support' },
] as const

const welcomeMoments = [
  {
    label: 'At the threshold',
    title: 'A personal welcome, never a search for a name board.',
    copy:
      'Your Royale Isles Lanka representative will be waiting to receive you with calm, discretion, and the first reassuring sense that the journey is already held.',
  },
  {
    label: 'After the flight',
    title: 'A pause before the island opens.',
    copy:
      'Rather than moving immediately into the next transfer, you are invited to settle into one of our carefully selected partner hotels or lounges.',
  },
  {
    label: 'Behind the scenes',
    title: 'The practical details continue without needing your attention.',
    copy:
      'While you exhale, our team confirms the chauffeur, luggage, accommodation, local support, and the final rhythm of your first day.',
  },
] as const

const quietlyPrepared = [
  'Your transfer timing is confirmed around the actual moment you arrive.',
  'Your chauffeur is briefed on pace, privacy, luggage, and first-day preferences.',
  'Your accommodation team is expecting you, with arrival notes already shared.',
  'Local connectivity, if required, is handled before it becomes something to think about.',
  'Dietary requirements, celebrations, and personal preferences are reviewed once more.',
] as const

const arrangedDetails = [
  {
    icon: 'I',
    label: 'Transfers',
    title: 'Your chauffeur is already waiting.',
    copy:
      'The first movement through Sri Lanka is prepared before you step outside arrivals, with vehicle, route, and timing handled quietly.',
  },
  {
    icon: 'II',
    label: 'Connectivity',
    title: 'Staying reachable is one less consideration.',
    copy:
      'If local connectivity is helpful for your journey, our team ensures the arrangement is considered before you need it.',
  },
  {
    icon: 'III',
    label: 'Accommodation',
    title: 'Your hosts are ready before you arrive.',
    copy:
      'Room readiness, welcome preferences, dietary notes, and arrival pacing are confirmed privately with each property.',
  },
  {
    icon: 'IV',
    label: 'Preferences',
    title: 'The small details travel ahead of you.',
    copy:
      'Celebrations, wellness needs, family rhythms, privacy preferences, and personal rituals are woven into the journey in advance.',
  },
  {
    icon: 'V',
    label: sharedHeritageWorld.name,
    title: 'Context travels with the route.',
    copy:
      'If your journey includes tea country, railways, old hotels, civic streets, or gardens, your host prepares the shared historical context before you arrive.',
  },
] as const

const conciergeNotes = [
  {
    numeral: 'I',
    title: 'Before departure',
    copy:
      'Your concierge team reviews the journey with the people who will receive you: chauffeurs, hosts, residence teams, guides, and private specialists.',
  },
  {
    numeral: 'II',
    title: 'On arrival',
    copy:
      'You are personally welcomed, invited to pause, and given the rare luxury of not having to solve the first hour in a new country.',
  },
  {
    numeral: 'III',
    title: 'Throughout the journey',
    copy:
      'Support remains close without becoming visible. Adjustments, confirmations, and small comforts are handled in the background.',
  },
  {
    numeral: 'IV',
    title: 'For private households',
    copy:
      'Family offices, principals, multi-generational groups, and discretion-sensitive travellers are briefed through a private channel.',
  },
] as const

const assurances = [
  {
    title: 'Entry details are reviewed with care',
    copy:
      'Where documentation or arrival formalities require attention, our advisory team confirms the appropriate path before travel and keeps your receiving host informed.',
  },
  {
    title: 'Practical expenses are anticipated',
    copy:
      'If local currency or incidental arrangements are useful during your journey, they are considered within the wider preparation rather than left to the moment.',
  },
  {
    title: 'Wellbeing is part of the briefing',
    copy:
      'Preferences, sensitivities, medical considerations, rest periods, and first-day pacing are held discreetly so the journey feels considered from the beginning.',
  },
  {
    title: 'The first day is intentionally gentle',
    copy:
      'Arrival is not treated as a transition to endure. It is composed as the first quiet chapter of your time in Sri Lanka.',
  },
  {
    title: `${sharedHeritageWorld.name} is introduced with balance`,
    copy:
      'Where British and Sri Lankan histories intersect, the framing remains thoughtful: architecture, tea, railways, education, gardens, and engineering are read as living cultural landscapes.',
  },
] as const

function SectionHeading({ number, title, inverse = false }: { number: string; title: string; inverse?: boolean }) {
  return (
    <div className={`prep-section-heading${inverse ? ' prep-section-heading--inverse' : ''}`}>
      <span>{number}</span>
      <i />
      <h2>{title}</h2>
    </div>
  )
}

export function TravelPreparationPage() {
  return (
    <main className="travel-prep-page">
      <section className="prep-hero">
        <div className="prep-hero-copy">
          <div className="prep-kicker">
            <span />
            <p>Before Your Journey Begins</p>
          </div>
          <p className="prep-hero-numeral">I</p>
          <h1>
            Before
            <br />
            You Arrive
          </h1>
          <i className="prep-gold-rule" />
          <p className="prep-hero-intro">
            From the moment your flight touches Sri Lanka, Royale Isles Lanka has already considered the details that
            allow you to simply arrive, breathe, and begin.
          </p>
          <nav className="prep-chip-nav" aria-label="Before you arrive sections">
            {handbookLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="prep-hero-image">
          <img src={images.hero} alt="Sri Lankan tea country in soft morning light" />
          <aside className="prep-hero-protocol" aria-label="Arrival care highlights">
            <p>Arrival Care</p>
            <h2>Everything is in motion before you land.</h2>
            <ul>
              {heroProtocols.map((protocol) => (
                <li key={protocol}>{protocol}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="prep-assurance" aria-label="Private arrival assurance">
        <div className="prep-assurance-copy">
          <span>For Principals, Family Offices & Private Travellers</span>
          <p>
            Arrival should never feel like a list of tasks. It should feel like being expected, recognised, and quietly
            looked after from the first minute.
          </p>
        </div>
        <dl className="prep-assurance-grid">
          {assurancePoints.map((point) => (
            <div key={point.label}>
              <dt>{point.value}</dt>
              <dd>{point.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="prep-section prep-visa" id="welcome">
        <div className="prep-container">
          <SectionHeading number="01" title="Your Welcome to Sri Lanka" />
          <div className="prep-visa-grid">
            {welcomeMoments.map((moment, index) => (
              <article
                key={moment.label}
                className={`prep-visa-card${index === 0 ? ' prep-visa-card--primary' : ''}${index === 1 ? ' prep-visa-card--steps' : ''}${index === 2 ? ' prep-visa-card--arrival' : ''}`}
              >
                <p>{moment.label}</p>
                <h3>{moment.title}</h3>
                <i />
                <p>{moment.copy}</p>
              </article>
            ))}
          </div>
          <aside className="prep-service-note">
            <span>Private Receiving</span>
            <p>
              For guests requiring additional privacy, protocol vehicles, family-office coordination, or discretion-led
              arrival handling, those arrangements are confirmed privately before travel.
            </p>
          </aside>
        </div>
      </section>

      <section className="prep-section prep-notes" id="tea-ritual">
        <div className="prep-container">
          <SectionHeading number="02" title="The Welcome Tea Experience" />
          <div className="prep-notes-list">
            <article>
              <span>I</span>
              <h3>The first ritual of the journey</h3>
              <p>
                On arrival, you are invited to pause over a complimentary cup of premium Ceylon tea in one of our
                selected partner hotels or lounges. It is not simply refreshment after a flight. It is the symbolic
                beginning of every Royale Isles Lanka journey.
              </p>
            </article>
            <article>
              <span>II</span>
              <h3>While you settle, we prepare</h3>
              <p>
                As tea is poured, the practical world continues quietly behind the scenes: transfers reconfirmed,
                chauffeur prepared, luggage arranged, accommodation alerted, preferences reviewed, and the first day
                softened around your arrival.
              </p>
            </article>
            <article>
              <span>III</span>
              <h3>The journey has already begun</h3>
              <p>
                There is no rush to solve, organise, or ask what comes next. The welcome tea is a gentle threshold
                between the long flight and the island itself: a moment of stillness before Sri Lanka opens around you.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="prep-section prep-payments" id="arranged">
        <div className="prep-container">
          <SectionHeading number="03" title="Every Detail Thoughtfully Arranged" />
          <div className="prep-payment-grid">
            {arrangedDetails.map((detail) => (
              <article key={detail.label} className="prep-payment-card">
                <span className="prep-payment-icon">{detail.icon}</span>
                <p>{detail.label}</p>
                <h3>{detail.title}</h3>
                <small>{detail.copy}</small>
              </article>
            ))}
          </div>
          <aside className="prep-service-note prep-service-note--stacked">
            <span>Quietly Prepared</span>
            <ul>
              {quietlyPrepared.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="prep-section prep-etiquette" id="concierge">
        <div className="prep-container">
          <SectionHeading number="04" title="Your Personal Concierge" />
          <div className="prep-etiquette-grid">
            {conciergeNotes.map((item) => (
              <article key={item.title}>
                <h3>
                  <span>{item.numeral}</span>
                  {item.title}
                </h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-section prep-faq" id="assurance">
        <div className="prep-faq-container">
          <div className="prep-faq-header">
            <div>
              <SectionHeading number="05" title="Quiet Assurances" />
              <p>
                The purpose of preparation is not to give you more to remember. It is to remove the need to keep track
                of what has already been considered.
              </p>
            </div>
            <aside className="prep-faq-concierge">
              <span>Private Advisory</span>
              <h3>Questions with nuance belong in conversation.</h3>
              <p>
                For principals, entourages, medical considerations, special access, or discretion-sensitive movement,
                our team briefs you directly before any journey is finalised.
              </p>
              <a href="/concierge">Ask The Concierge</a>
            </aside>
          </div>

          <div className="prep-faq-panel">
            <div className="prep-faq-list">
              {assurances.map((item, index) => (
                <details key={item.title}>
                  <summary>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <small>Prepared Privately</small>
                      <strong>{item.title}</strong>
                    </div>
                  </summary>
                  <p>{item.copy}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="prep-final-cta" id="begin">
        <div className="prep-final-cta-inner">
          <div className="prep-final-cta-mark" aria-hidden="true">
            ✦
          </div>
          <p>Begin Your Journey</p>
          <h2>
            Arrive in Sri Lanka
            <br />
            <em>already cared for.</em>
          </h2>
          <p>
            Your welcome, tea, chauffeur, luggage, accommodation, local support, and first quiet hour are prepared before
            you arrive. All that remains is to enter the journey.
          </p>
          <div className="prep-cta-actions">
            <a href="/concierge">Begin A Private Conversation</a>
            <a href="#tea-ritual">The Welcome Tea Ritual</a>
          </div>
          <small>Personally welcomed. Quietly prepared. Held from the moment you arrive.</small>
        </div>
      </section>
    </main>
  )
}
