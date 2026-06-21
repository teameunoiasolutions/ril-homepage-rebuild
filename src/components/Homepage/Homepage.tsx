import './Homepage.css'

const images = {
  hero: '/figma-homepage/hero.jpg',
  consultation: '/figma-homepage/consultation.jpg',
  teaEstate: '/figma-homepage/tea-estate.jpg',
  artisan: '/figma-homepage/artisan.jpg',
  beachDinner: '/figma-homepage/beach-dinner.jpg',
  junglePavilion: '/figma-homepage/jungle-pavilion.jpg',
  ancientRuins: '/figma-homepage/ancient-ruins.jpg',
  highlandGolden: '/figma-homepage/highland-golden.jpg',
  coastJungle: '/figma-homepage/coast-jungle.jpg',
  travellerOutcrop: '/figma-homepage/traveller-outcrop.jpg',
  journalHours: '/figma-homepage/journal-hours.jpg',
  journalGuide: '/figma-homepage/journal-guide.jpg',
  hiroko: '/figma-homepage/hiroko.jpg',
  guideCover: '/figma-homepage/guide-cover.jpg',
}

const identityCards = [
  {
    image: images.teaEstate,
    label: 'The Contemplative',
    title: 'Solitude in the High Hills',
    copy: 'Designed for those seeking profound silence and creative renewal amidst ancient tea trails.',
  },
  {
    image: images.artisan,
    label: 'The Anthropologist',
    title: 'Echoes of the Artisans',
    copy: 'A journey weaving through private studios and ancestral homes, connecting with the living heritage.',
  },
  {
    image: images.beachDinner,
    label: 'The Romantic',
    title: 'Shores of Intimacy',
    copy: "Uncharted coastlines and secluded villas curated for deepening connections away from the world's gaze.",
  },
]

const experiences = [
  {
    image: images.junglePavilion,
    region: 'Southern Coast',
    title: 'Dawn in the Tea Country',
    copy: "Awake before the sun to trace the silent paths of ancestral tea estates. A private breakfast awaits on a cliff's edge, where the only sound is the distant call of a mountain eagle.",
  },
  {
    image: images.ancientRuins,
    region: 'Cultural Triangle',
    title: 'Where the Rock Holds History',
    copy: 'A private audience with ancient frescoes, guided by a local historian long after the crowds have departed. Witness the golden hour illuminating centuries-old stone.',
  },
]

const philosophyLines = [
  {
    numeral: 'I',
    title: 'Listen',
    copy: "Before destinations, before any recommendation at all, we ask what you're seeking, not with a form, but a conversation. How you like to spend a morning. What kind of silence you're looking for. What you've outgrown in travel, and what you haven't yet found.",
  },
  {
    numeral: 'II',
    title: 'Curate',
    copy: 'From there, we draw on relationships built over years, with estate owners, retired planters, monks, chefs, and guides who have spent decades in one place. Not a catalogue to browse, but a small number of possibilities that were never going to be wrong for you.',
  },
  {
    numeral: 'III',
    title: 'Refine',
    copy: 'Together, we shape these into a journey with its own rhythm, where to linger, where to move on, where to leave room for nothing at all. Every detail considered. Nothing over-designed.',
  },
]

const sriLankaStats = [
  ['8', 'UNESCO World Heritage Sites, all reachable within a single journey.'],
  ['21', "National parks and reserves protecting Asia's most extraordinary wildlife."],
  ['1,340km', 'Of coastline, shaped by six distinct bodies of water.'],
  ['2,500+', 'Years of continuous civilisation - one of the oldest on earth.'],
]

const journalItems = [
  {
    image: images.journalHours,
    type: 'Field Notes',
    date: 'May 2025',
    title: 'The Hours Between Itinerary Items',
  },
  {
    image: images.journalGuide,
    type: 'Interview',
    date: 'April 2025',
    title: 'A Guide Who Has Shown 10,000 People the Same Temple',
  },
  {
    image: images.highlandGolden,
    type: 'Essay',
    date: 'March 2025',
    title: 'What Slow Travel Actually Means in Sri Lanka',
  },
]

const testimonials = [
  {
    image: images.travellerOutcrop,
    quote: "I've been to 60 countries. Sri Lanka is the first place where I forgot to count.",
    name: 'Marcus B.',
    location: 'New York',
  },
  {
    image: images.hiroko,
    quote: 'The journey they designed read like a novel. Every day had a tone, a colour.',
    name: 'Hiroko S.',
    location: 'Tokyo',
  },
  {
    image: images.journalHours,
    quote: 'Sri Lanka undoes you, quietly. Not with spectacle but with accumulation.',
    name: 'Catherine M.',
    location: 'London',
  },
]

const guideItems = [
  'A letter, to begin',
  'Field notes from the island',
  'Where to begin',
  'The island through its seasons',
  'A few hidden corners',
  'Pages left blank, for you',
]

const questions = [
  'Do you create bespoke journeys, or use set itineraries?',
  'How far in advance should we begin planning?',
  'What distinguishes your curation from a travel agent?',
  'Is this suitable for solo travellers?',
  'What is the best time of year to visit?',
]

export function Homepage() {
  return (
    <main className="figma-homepage" data-node-id="101:12274">
      <section className="figma-hero" data-node-id="101:12275">
        <img src={images.hero} alt="Misty sunrise over Sri Lankan tea plantations" />
        <div className="figma-hero-overlay" />
        <div className="figma-hero-content">
          <p className="figma-overline figma-overline-light">An Invitation to Serendipity</p>
          <h1>
            Discover the
            <span>Soul of Sri Lanka</span>
          </h1>
          <div className="figma-hero-rule" />
        </div>
      </section>

      <section className="figma-discovery" id="about" data-node-id="103:12717">
        <div className="figma-container">
          <div className="figma-identities">
            <p className="figma-overline">The Process of Being Understood</p>
            <header>
              <h3>Curated Identities</h3>
              <div className="figma-carousel-buttons" aria-hidden="true">
                <span>‹</span>
                <span>›</span>
              </div>
            </header>
            <div className="figma-card-row">
              {identityCards.map((card) => (
                <article className="figma-identity-card" key={card.title}>
                  <img src={card.image} alt="" />
                  <p>{card.label}</p>
                  <h4>{card.title}</h4>
                  <span>{card.copy}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="figma-discovery-grid">
            <div className="figma-copy-stack">
              <h3 className="traveller-discovery-guide">
                Masterpieces of
                <em>Personal Discovery</em>
              </h3>
              <p>
                We do not begin with itineraries. We begin with you. In quiet, unhurried
                conversations within our private lounges, our concierges seek to understand the
                cadences of your life, the nuances of your curiosity, and the unspoken desires of
                your soul.
              </p>
              <blockquote>The finest journeys are not planned; they are revealed.</blockquote>
              <p>
                Through this meticulous art of listening, we curate not merely a trip, but a mirror
                to your own evolving identity. Discover how others have found their quiet resonance
                amidst the landscapes of Sri Lanka.
              </p>
              <a className="figma-text-link" href="#begin">
                Consult Our Discovery Path
              </a>
            </div>
            <figure className="figma-feature-image">
              <img src={images.consultation} alt="Private consultation lounge in Sri Lanka" />
              <figcaption>
                <strong>The Initial Resonance</strong>
                <span>
                  Where your personal narrative intersects with the soul of the island. A bespoke
                  consultation setting in our Galle Fort enclave.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="figma-experiences" id="experiences" data-node-id="103:12794">
        <div className="figma-container">
          <header className="figma-section-header">
            <div>
              <h2>Encounters That Cannot Be Catalogued</h2>
              <p>
                Beyond the ordinary lie moments of pure serendipity. These are not itineraries; they
                are narratives waiting to unfold.
              </p>
            </div>
            <a href="/experiences">View All Experiences</a>
          </header>

          <div className="figma-experience-list">
            {experiences.map((experience, index) => (
              <article className="figma-experience" key={experience.title}>
                <img src={experience.image} alt="" />
                <div>
                  <p className="figma-card-label">{experience.region}</p>
                  <h3>{experience.title}</h3>
                  <p>{experience.copy}</p>
                  <a className="figma-button-secondary" href="/experiences">
                    Read Story
                  </a>
                </div>
                {index === 1 ? null : <span aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-philosophy" data-node-id="103:12834">
        <div className="figma-container">
          <p className="figma-overline">The Philosophy</p>
          <h2>Why We Exist</h2>
          <span className="figma-watermark" aria-hidden="true">
            R
          </span>
          <div className="figma-philosophy-lines">
            {philosophyLines.map((line, index) => (
              <article key={line.title}>
                <span className="figma-line-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="figma-roman">{line.numeral}</span>
                <div>
                  <h3>{line.title}</h3>
                  <p>{line.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="figma-discover-statement">
            <strong>And then, you discover.</strong>
            <p>
              What you experience in Sri Lanka won&apos;t feel like an itinerary that was executed.
              It will feel like a sequence of moments that, looking back, seem like they were always
              going to happen, because, in a way, they were.
            </p>
          </div>
          <footer className="figma-founder">
            <div>
              <span>Dr Raghavan</span>
              <small>Founder · Royale Isles Lanka</small>
            </div>
            <p>
              The island is small enough to feel intimate, yet vast enough that after twenty years,
              it still surprises me.
            </p>
          </footer>
        </div>
      </section>

      <section className="figma-island-stats" id="destinations" data-node-id="103:12887">
        <img src={images.highlandGolden} alt="Sri Lanka highland landscape at golden hour" />
        <div>
          <p className="figma-overline">Why Sri Lanka</p>
          <h2>
            An island that <em>contains</em> a continent.
          </h2>
          <dl>
            {sriLankaStats.map(([value, label]) => (
              <div key={value}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="figma-destination">
        <div className="figma-container figma-destination-grid">
          <div className="figma-copy-stack">
            <p className="figma-overline">The Destination</p>
            <h2>An Island That Changes With You</h2>
            <p className="figma-destination-intro">
              Sri Lanka is not merely a place on a map; it is a rhythm. It is the scent of cinnamon
              bark in the morning mist, the intricate geometry of ancient stupas, and the untamed
              roar of the Indian Ocean against colonial ramparts.
            </p>
            <p>
              Here, luxury is found in authenticity. It is a slow, deliberate embrace of a culture
              that honors both profound stillness and vibrant celebration. We invite you to lose
              yourself to find something new.
            </p>
            <a className="figma-text-link figma-text-link-light" href="#destinations">
              Discover the Regions
            </a>
          </div>
          <figure className="figma-bordered-image">
            <img src={images.coastJungle} alt="Aerial view of Sri Lankan coastline and jungle" />
          </figure>
        </div>
      </section>

      <section className="figma-journal" id="journal" data-node-id="103:12936">
        <div className="figma-container">
          <header className="figma-section-header">
            <div>
              <p className="figma-kicker-line">Journal</p>
              <h2>
                What travellers <em>discover about themselves.</em>
              </h2>
            </div>
            <a href="/journal">Read all stories →</a>
          </header>
          <div className="figma-journal-grid">
            <article className="figma-feature-story">
              <img src={images.travellerOutcrop} alt="Traveller in thought on a rocky outcrop" />
              <p>Personal Essay</p>
              <h3>&quot;I came for the leopards. I left with a question I&apos;m still answering.&quot;</h3>
              <span>
                Sarah P. had travelled professionally for a decade before her first visit to Sri
                Lanka. She describes what happened when the island refused to let her remain a
                spectator.
              </span>
              <a href="/journal/the-sigiriya-dawn-ascent">Read her story →</a>
            </article>
            <div className="figma-journal-list">
              {journalItems.map((item) => (
                <article key={item.title}>
                  <img src={item.image} alt="" />
                  <div>
                    <p>
                      {item.type} <span>{item.date}</span>
                    </p>
                    <h4>{item.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="figma-testimonials" data-node-id="103:13017">
        <div className="figma-container">
          <p className="figma-centered-kicker">Testimonials</p>
          <h2>What travellers carry home.</h2>
          <div className="figma-testimonial-row">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name}>
                <span className="figma-gold-bar" />
                <blockquote>{testimonial.quote}</blockquote>
                <footer>
                  <img src={testimonial.image} alt="" />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.location}</small>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-invitation" id="begin" data-node-id="103:12992">
        <div className="figma-invitation-inner">
          <div className="figma-invitation-mark" aria-hidden="true">
            ✦
          </div>
          <p className="figma-overline">A Personal Invitation</p>
          <h2>What Have You Been Hoping to Find?</h2>
          <p>
            Not every traveller arrives with a destination in mind. Some arrive with a feeling, a
            wish to slow down, a curiosity they&apos;ve never quite explored, a hope for connection,
            celebration, reflection, or discovery. Tell us a little about what you&apos;re seeking.
            We&apos;ll take it from there.
          </p>
          <form className="figma-email-form">
            <input type="email" aria-label="Your email address" placeholder="Your email address" />
            <button type="submit">Request a Dialogue</button>
          </form>
          <small>No obligation. No agenda. Simply a conversation.</small>
        </div>
      </section>

      <section className="figma-guide" data-node-id="103:13062">
        <div className="figma-container figma-guide-grid">
          <figure>
            <img src={images.guideCover} alt="Travel guide cover and journal objects" />
          </figure>
          <div className="figma-copy-stack">
            <p className="figma-copper-overline">If you&apos;re not ready yet</p>
            <h2>Wander a Little Longer</h2>
            <span className="figma-copper-rule" />
            <p>
              Before every journey comes a period of curiosity, looking things up late at night,
              returning to the same photographs, wondering what it might be like. This is for that
              part. A small collection of places, stories, and things worth knowing, gathered in one
              place, with nothing to decide yet.
            </p>
            <ol className="figma-guide-list">
              {guideItems.map((item, index) => (
                <li key={item}>
                  <span>{['i', 'ii', 'iii', 'iv', 'v', 'vi'][index]}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p>
              Before every journey comes a period of curiosity, looking things up late at night,
              returning to the same photographs, wondering what it might be like.
            </p>
            <p className="figma-guide-note">
              Complimentary. Private. Yours.
              <br />
              Open it here, whenever you have a little time. Or, if you&apos;d rather come back to
              it, we can send it to you instead.
            </p>
            <form className="figma-guide-form">
              <input type="email" aria-label="Your email address" placeholder="Your email address" />
              <button type="submit">Receive Guide</button>
            </form>
          </div>
        </div>
      </section>

      <section className="figma-faq" data-node-id="103:13229">
        <div className="figma-container figma-faq-grid">
          <div className="figma-copy-stack">
            <p className="figma-overline">Common Questions</p>
            <h2>
              The Questions
              <em>Worth Asking</em>
            </h2>
            <p>
              Our travellers are curious and careful planners. We welcome every question, including
              the ones that feel too particular to ask.
            </p>
            <a className="figma-gold-button" href="#begin">
              Ask Us Directly
            </a>
          </div>
          <div className="figma-question-list">
            {questions.map((question) => (
              <button type="button" key={question}>
                <span>{question}</span>
                <span aria-hidden="true">⌄</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
