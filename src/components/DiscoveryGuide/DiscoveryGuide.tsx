import './DiscoveryGuide.css'

const guideItems = [
  'A letter, to begin',
  'Field notes from the island',
  'Where to begin',
  'The island through its seasons',
  'A few hidden corners',
  'Pages left blank, for you',
] as const

const introText =
  'Before every journey comes a period of curiosity, looking things up late at night, returning to the same photographs, wondering what it might be like. This is for that part. A small collection of places, stories, and things worth knowing, gathered in one place, with nothing to decide yet.'

const numerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi'] as const

export function DiscoveryGuide() {
  return (
    <section className="discovery-guide">
      <div className="guide-grid">
        <img
          className="guide-image"
          src="https://images.unsplash.com/photo-1544947950-fa07a98da237?auto=format&fit=crop&w=900&q=80"
          alt="Travel guide book on a map"
        />

        <div className="guide-content">
          <span className="guide-eyebrow">If You&apos;re Not Ready Yet</span>
          <h2 className="guide-headline">Wander a Little Longer</h2>
          <span className="guide-rule"></span>
          <p className="guide-body">{introText}</p>

          <ul className="guide-list">
            {guideItems.map((item, index) => (
              <li key={item} className="guide-list-item">
                <span className="guide-list-numeral">{numerals[index]}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="guide-body">{introText}</p>
          <p className="guide-body">
            Complimentary. Private. Yours. Open it here, whenever you have a little time. Or, if
            you&apos;d rather come back to it, we can send it to you instead.
          </p>

          <form className="guide-form" onSubmit={(event) => event.preventDefault()}>
            <input
              className="guide-input"
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />
            <button className="guide-button" type="submit">
              Receive Guide
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
