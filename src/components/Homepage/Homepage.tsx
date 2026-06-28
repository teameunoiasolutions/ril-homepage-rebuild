import { useState } from 'react'
import './Homepage.css'
import { ArrowIcon } from '../ArrowIcon'

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] as const

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

const experiences = [
  {
    image: images.junglePavilion,
    imageAlt: 'Private jungle pavilion surrounded by Sri Lankan wilderness',
    numeral: 'I',
    region: 'Wildlife & Wilderness',
    identity: 'For the Seeker of Silence',
    access: 'Fieldcraft - Private naturalist - Stillness',
    title: 'Where Silence Becomes the Guide',
    copy:
      'For the traveller who does not want nature performed, wilderness begins with patience: a field naturalist, a protected route, and the discipline to wait until the island reveals itself.',
  },
  {
    image: images.ancientRuins,
    imageAlt: 'Ancient Sri Lankan stone ruins surrounded by forest',
    numeral: 'II',
    region: 'Heritage & Memory',
    identity: 'For the Heritage Guardian',
    access: 'Scholarship - Protected timing - Living memory',
    title: 'Ancient Places, Entered With Care',
    copy:
      'Some travellers are drawn to what time has left behind. We shape access around light, silence, scholarship, and the dignity of places that should never feel consumed.',
  },
  {
    image: images.artisan,
    imageAlt: 'Sri Lankan artisan working by hand in a private studio',
    numeral: 'III',
    region: 'Culture & Human Connection',
    identity: 'For the Curious Witness',
    access: 'Private introductions - Family traditions - Human context',
    title: 'The Human Thread Beneath the Journey',
    copy:
      'Private introductions to artisans, dancers, custodians, and families turn a route through Sri Lanka into something more personal: a sequence of lives briefly, respectfully shared.',
  },
]

const experienceThreads = [
  'Wildlife & Wilderness',
  'Ocean & Discovery',
  'Heritage & Memory',
  'Wellness & Restoration',
  'Rail & Landscape',
  'Culture & Human Connection',
] as const

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
  ['Private', 'Hosts, drivers, guides, and residence teams briefed around your preferences.'],
  ['8', 'UNESCO World Heritage Sites, accessed with timing designed around privacy.'],
  ['21', "National parks and reserves, with expert naturalists and quiet safari pacing."],
  ['1,340km', 'Of coastline for villas, yachts, wellness retreats, and family celebrations.'],
]

const journalItems = [
  {
    image: images.journalHours,
    imageAlt: 'Private terrace set for tea during a quiet Sri Lankan afternoon',
    type: 'Field Notes',
    date: 'May 2025',
    title: 'The Art of Protecting Unscheduled Time',
    excerpt: 'Why the most memorable VVIP journeys often depend on what we deliberately leave unplanned.',
    path: '/journal/protecting-unscheduled-time',
  },
  {
    image: images.journalGuide,
    imageAlt: 'Private Sri Lankan guide standing near an ancient temple threshold',
    type: 'Private Interview',
    date: 'April 2025',
    title: 'The Temple Keeper Who Knows When Not to Speak',
    excerpt: 'A conversation on timing, restraint, and giving sacred places the privacy they deserve.',
    path: '/journal/the-temple-keeper',
  },
  {
    image: images.highlandGolden,
    imageAlt: 'Golden light over Sri Lankan highland tea country',
    type: 'Seasonal Briefing',
    date: 'March 2025',
    title: 'When Tea Country Feels Entirely Yours',
    excerpt: "A curator's note on private residences, cloud forest mornings, and highland routes away from spectacle.",
    path: '/journal/private-tea-country',
  },
]

const travellerStories = [
  {
    image: images.travellerOutcrop,
    format: 'Private Film',
    duration: 'II:XLVIII',
    title: 'An anniversary carried by the island',
    quote:
      'We expected a beautiful trip. What we received felt like a private film of our own life, composed in tea country, temples, and candlelit coves.',
    name: 'Isabella & Laurent',
    location: 'Monaco',
    detail: 'Southern coast villas, cinnamon estates, and a dusk sail captured by our discreet host.',
    photoCaption: 'A private coastal anniversary journey, held between cinnamon estates and candlelit coves.',
    videoCaption: 'A discreet film of the moments between the formal itinerary: arrival, laughter, silence, sea air.',
  },
  {
    image: images.hiroko,
    format: 'Photo Journal',
    duration: 'I:LVI',
    title: 'A quiet return to wonder',
    quote: 'The photographs caught what I never would have asked anyone to capture: the pauses.',
    name: 'Hiroko S.',
    location: 'Tokyo',
    detail: 'A contemplative route through Kandy, the highlands, and private artisan studios.',
    photoCaption: 'A contemplative journey through Kandy, tea country, and private artisan rooms.',
    videoCaption: 'A soft visual record of rituals, thresholds, hands at work, and highland mornings.',
  },
  {
    image: images.beachDinner,
    format: 'Hosted Story',
    duration: 'III:XII',
    title: 'A family gathered without agenda',
    quote: 'Every detail disappeared into ease. The films and photographs brought back the feeling.',
    name: 'The Al-Khalid Family',
    location: 'Dubai',
    detail: 'Multi-generational coastal retreat with private dining, wildlife, and ocean rituals.',
    photoCaption: 'A multi-generational coastal gathering shaped around privacy, ease, and shared meals.',
    videoCaption: 'A private family film preserving dinners, wildlife mornings, and unposed time together.',
  },
]

const storyPromises = ['Photos and films handled privately', 'Hosted by discreet local experts', 'Built around your pace, not a schedule']

const heroScenes = [
  {
    image: images.coastJungle,
    label: 'Ocean at Dusk',
  },
  {
    image: images.beachDinner,
    label: 'Private Dinner',
  },
]

const brochureHighlights = [
  'Private residences, villas, and estate houses',
  'Discreet wildlife, heritage, and coastal access',
  'Seasonal guidance for private family travel',
  'Family-office level movement, hosting, and privacy',
  'Sample journey rhythms, never fixed itineraries',
  'A private consultation path for serious enquiries',
]

const questions = [
  {
    category: 'Bespoke Design',
    question: 'Do you create bespoke journeys, or use set itineraries?',
    answer:
      'Every journey is designed privately around the guest. We may begin with proven routes and trusted relationships, but the final rhythm, access, accommodation, and pace are shaped around your interests.',
  },
  {
    category: 'Planning Window',
    question: 'How far in advance should we begin planning?',
    answer:
      'For the most considered VVIP arrangements, VI to XII weeks is ideal. Shorter timelines can be accommodated when availability, access, and private hosting align.',
  },
  {
    category: 'Private Curation',
    question: 'What distinguishes your curation from a travel agent?',
    answer:
      'We do not simply reserve hotels and transfers. We listen first, then compose a journey through private hosts, local context, quiet access, and details that are held discreetly from arrival to departure.',
  },
  {
    category: 'Solo Travel',
    question: 'Is this suitable for solo travellers?',
    answer:
      'Yes. Many guests travel alone for reflection, restoration, or creative renewal. We design solo journeys with trusted hosting, privacy, and a balance of independence and quiet support.',
  },
  {
    category: 'Seasonal Guidance',
    question: 'What is the best time of year to visit?',
    answer:
      'Sri Lanka has several seasonal rhythms, so the best moment depends on the region and the kind of journey you want. We advise around weather, privacy, wildlife movement, festivals, and crowd patterns.',
  },
]

export function Homepage() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const activeStory = travellerStories[activeStoryIndex]

  const showPreviousStory = () => {
    setActiveStoryIndex((currentIndex) => (currentIndex === 0 ? travellerStories.length - 1 : currentIndex - 1))
  }

  const showNextStory = () => {
    setActiveStoryIndex((currentIndex) => (currentIndex + 1) % travellerStories.length)
  }

  return (
    <main className="figma-homepage" data-node-id="101:12274">
      <section className="figma-hero" data-node-id="101:12275">
        <div className="figma-hero-scenes" aria-hidden="true">
          {heroScenes.map((scene) => (
            <figure className="figma-hero-scene" key={scene.label}>
              <img src={scene.image} alt="" />
            </figure>
          ))}
        </div>
        <div className="figma-hero-overlay" />
        <div className="figma-hero-content">
          <h1>
            Sri Lanka,
            <span>held privately.</span>
          </h1>
          <div className="figma-hero-actions">
            <a href="#begin">Begin a Private Conversation</a>
          </div>
        </div>
        <p className="figma-hero-caption">Bespoke journeys for private families, principals, and discerning travellers.</p>
      </section>

      <section className="figma-experiences" id="experiences" data-node-id="103:12794">
        <div className="figma-container">
          <header className="figma-section-header figma-experiences-header">
            <div>
              <p className="figma-overline">From Discovery To Encounter</p>
              <h2>Ways Into The Island</h2>
              <p>
                As you explore themes, regions, destinations, moods, and encounters, Royale Isles
                Lanka quietly reads the pattern. Our curators translate those signals into private
                introductions shaped by timing, trust, and the right local host.
              </p>
            </div>
            <aside className="figma-experience-brief">
              <span>Private Collection</span>
              <p>
                6 pathways. No fixed catalogue. Each introduction is selected only when the access
                protects the place, the host, and the traveller.
              </p>
              <a href="/experiences">Explore The Collection</a>
            </aside>
          </header>

          <div className="figma-theme-thread" aria-label="Experience themes">
            {experienceThreads.map((thread) => (
              <span key={thread}>{thread}</span>
            ))}
          </div>

          <div className="figma-experience-list">
            {experiences.map((experience) => (
              <article className="figma-experience" key={experience.title}>
                <figure className="figma-experience-media">
                  <img src={experience.image} alt={experience.imageAlt} />
                  <figcaption>
                    <span>{experience.numeral}</span>
                    <small>{experience.access}</small>
                  </figcaption>
                </figure>
                <div className="figma-experience-copy">
                  <p className="figma-card-label">{experience.region}</p>
                  <small>{experience.identity}</small>
                  <h3>{experience.title}</h3>
                  <p>{experience.copy}</p>
                  <a className="figma-button-secondary" href="/experiences">
                    Follow This Thread
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-philosophy" data-node-id="103:12834">
        <div className="figma-container">
          <header className="figma-philosophy-header">
            <div>
              <p className="figma-overline">The Philosophy</p>
              <h2>The Standard Behind The Journey</h2>
            </div>
            <aside>
              <span>House Principles</span>
              <p>
                Before a route is designed, before access is requested, before any host is approached,
                we decide whether the journey can be held with enough care.
              </p>
            </aside>
          </header>
          <span className="figma-watermark" aria-hidden="true">
            R
          </span>
          <div className="figma-philosophy-lines">
            {philosophyLines.map((line, index) => (
              <article key={line.title}>
                <span className="figma-line-number">{romanNumerals[index]}</span>
                <span className="figma-roman">{line.numeral}</span>
                <div>
                  <h3>{line.title}</h3>
                  <p>{line.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="figma-discover-statement">
            <strong>And then, the journey disappears into ease.</strong>
            <p>
              What you experience in Sri Lanka should not feel managed. It should feel inevitable:
              the right host at the right door, the right room prepared before arrival, the right
              silence protected, the right celebration unfolding without strain.
            </p>
          </div>
          <footer className="figma-founder">
            <div>
              <span>Dr Raghavan</span>
              <small>Founder · Royale Isles Lanka</small>
            </div>
            <p>
              The island is small enough to feel intimate, yet vast enough that after 20 years,
              it still surprises me.
            </p>
          </footer>
        </div>
      </section>

      <section className="figma-island-stats" id="destinations" data-node-id="103:12887">
        <figure className="figma-island-stats-media">
          <img src={images.highlandGolden} alt="Sri Lanka highland landscape at golden hour" />
          <figcaption>
            <span>Central Highlands</span>
            <small>Tea country, cloud forest, private residences, and routes held away from the obvious path.</small>
          </figcaption>
        </figure>
        <div className="figma-island-stats-copy">
          <div className="figma-island-stats-heading">
            <p className="figma-overline">Why Sri Lanka</p>
            <h2>
              A small island with <em>private worlds</em> within it.
            </h2>
            <p>
              For VVIP travel, scale matters. Sri Lanka is compact enough to move through with ease,
              yet layered enough to hold wilderness, sacred cities, coastal privacy, wellness, and
              family celebration in one carefully protected journey.
            </p>
          </div>
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
            <h2>Wild, Sacred, Coastal, and Deeply Personal</h2>
            <blockquote>
              The island is not revealed by covering more ground. It is revealed by knowing which door
              should open, which hour should be protected, and which silence should remain untouched.
            </blockquote>
            <p className="figma-destination-intro">
              Sri Lanka is compact enough for a seamless private journey and layered enough for a
              lifetime of discovery: tea country residences, ancient cities, leopard country, ocean
              villas, wellness sanctuaries, and colonial fort towns.
            </p>
            <p>
              The craft is in knowing what to reveal, when to move, where to pause, and how to keep
              the journey protected from noise. This is Sri Lanka arranged for people who do not need
              the obvious version.
            </p>
            <a className="figma-text-link figma-text-link-light" href="#destinations">
              Discover the Regions
            </a>
          </div>
          <figure className="figma-bordered-image">
            <img src={images.coastJungle} alt="Aerial view of Sri Lankan coastline and jungle" />
            <figcaption>
              <span>Coast & Jungle</span>
              <small>Private villas, hidden coves, rainforest edges, and coastal routes shaped by discretion.</small>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="figma-journal" id="journal" data-node-id="103:12936">
        <span className="figma-journal-mark" aria-hidden="true">
          Royale Isles Journal
        </span>
        <div className="figma-container">
          <header className="figma-section-header figma-journal-header">
            <div>
              <p className="figma-kicker-line">The Private Journal</p>
              <h2>
                Intelligence for journeys that must feel <em>effortless.</em>
              </h2>
              <p>
                Essays, field letters, and curator briefings for travellers who value privacy,
                discretion, and access that is meaningful precisely because it is never obvious.
              </p>
            </div>
            <aside className="figma-journal-brief">
              <span>For principals and private families</span>
              <p>
                Notes on timing, hosting, residences, wellness, family movement, and the quiet
                details that separate a good trip from a fully held journey.
              </p>
              <a href="/journal">
                Enter The Journal <ArrowIcon />
              </a>
            </aside>
          </header>
          <div className="figma-journal-grid">
            <article className="figma-feature-story">
              <div className="figma-feature-story-copy">
                <p>
                  VVIP Field Letter <span>June 2025</span>
                </p>
                <h3>&quot;The best moment was the one nobody else knew had been arranged.&quot;</h3>
                <span>
                  A guest reflects on private access, protected time, and the quiet intelligence of a
                  journey that never announced itself as luxury.
                </span>
                <ul className="figma-feature-story-points" aria-label="Featured journal themes">
                  <li>Protected dawn access</li>
                  <li>Discreet family-office pacing</li>
                  <li>Resident scholar accompaniment</li>
                </ul>
                <a href="/journal/the-sigiriya-dawn-ascent">
                  Read The Field Letter <ArrowIcon />
                </a>
              </div>
              <figure className="figma-feature-story-stamp">
                <img src={images.travellerOutcrop} alt="Traveller in thought on a rocky outcrop" />
                <figcaption>
                  <span>Private Access</span>
                  <small>Sigiriya before the first public ascent</small>
                </figcaption>
              </figure>
            </article>
            <div className="figma-journal-list">
              {journalItems.map((item, index) => (
                <article key={item.title}>
                  <span className="figma-journal-index">{romanNumerals[index]}</span>
                  <div>
                    <p>
                      {item.type} <span>{item.date}</span>
                    </p>
                    <h4>{item.title}</h4>
                    <span>{item.excerpt}</span>
                    <a href={item.path}>
                      Read note <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="figma-testimonials" data-node-id="103:13017">
        <div className="figma-container figma-testimonials-inner">
          <header className="figma-testimonials-heading">
            <p className="figma-centered-kicker">Traveller Stories</p>
            <h2>Traveller stories, held in photographs and private film.</h2>
            <p>
              For select journeys, memory is part of the craft. A discreet visual host can travel
              alongside the guest, preserving the unposed details: the first tea estate sunrise, the
              private table by the sea, the silence after a leopard crosses the track.
            </p>
          </header>

          <article className="figma-testimonial-carousel" aria-live="polite">
            <figure className="figma-testimonial-photo">
              <img src={activeStory.image} alt="" />
              <figcaption>
                <span>Photo Story</span>
                <p>{activeStory.photoCaption}</p>
              </figcaption>
            </figure>

            <div className="figma-testimonial-copy">
              <p className="figma-story-location">{activeStory.location}</p>
              <h3>{activeStory.title}</h3>
              <blockquote>&ldquo;{activeStory.quote}&rdquo;</blockquote>
              <footer>
                <strong>{activeStory.name}</strong>
                <span>{activeStory.detail}</span>
              </footer>
              <div className="figma-story-carousel-controls" aria-label="Browse traveller stories">
                <button type="button" onClick={showPreviousStory} aria-label="Show previous traveller story">
                  ‹
                </button>
                <div>
                  {travellerStories.map((story, index) => (
                    <button
                      type="button"
                      key={story.name}
                      className={index === activeStoryIndex ? 'is-active' : undefined}
                      onClick={() => setActiveStoryIndex(index)}
                      aria-label={`Show ${story.name} traveller story`}
                      aria-current={index === activeStoryIndex ? 'true' : undefined}
                    />
                  ))}
                </div>
                <button type="button" onClick={showNextStory} aria-label="Show next traveller story">
                  ›
                </button>
              </div>
            </div>

            <aside className="figma-testimonial-video">
              <div className="figma-testimonial-video-media">
                <img src={activeStory.image} alt="" />
                <button type="button" aria-label={`Watch ${activeStory.name} private film`}>
                  <span aria-hidden="true" />
                  <small>Watch private film · {activeStory.duration}</small>
                </button>
              </div>
              <div>
                <p>{activeStory.format}</p>
                <h4>Video companion</h4>
                <span>{activeStory.videoCaption}</span>
              </div>
            </aside>
          </article>

          <div className="figma-story-promises" aria-label="Traveller story inclusions">
            {storyPromises.map((promise) => (
              <span key={promise}>{promise}</span>
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
          <h2>Begin With a Private Conversation</h2>
          <p>
            Tell us who is travelling, what must be protected, what should feel effortless, and what
            would make Sri Lanka feel personally meaningful. We will respond with considered next
            steps, not a catalogue.
          </p>
          <form className="figma-email-form">
            <input type="email" aria-label="Your email address" placeholder="Your email address" />
            <button type="submit">Request a Dialogue</button>
          </form>
          <small>Private, discreet, and without obligation.</small>
        </div>
      </section>

      <section className="figma-brochure" data-node-id="103:13062">
        <div className="figma-container figma-brochure-grid">
          <div className="figma-brochure-copy">
            <p className="figma-copper-overline">Private Sri Lanka Briefing</p>
            <h2>Request the Private Brochure</h2>
            <span className="figma-copper-rule" />
            <p>
              A considered introduction for private families, principals, and discerning travellers
              exploring Sri Lanka at the highest level: quiet residences, trusted hosts, protected
              timing, and experiences arranged with discretion rather than display.
            </p>
            <div className="figma-brochure-panel">
              <span>Inside the briefing</span>
              <ol className="figma-brochure-list">
                {brochureHighlights.map((item, index) => (
                  <li key={item}>
                    <small>{romanNumerals[index]}</small>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <p className="figma-brochure-note">
              Sent privately. No automated itinerary. No mailing-list noise. Just a polished first
              briefing for travellers who expect careful judgement before any recommendation is made.
            </p>
            <form className="figma-brochure-form">
              <input type="email" aria-label="Your email address" placeholder="Your email address" />
              <button type="submit">Request Brochure</button>
            </form>
          </div>
          <aside className="figma-brochure-card" aria-label="Private brochure preview">
            <figure className="figma-brochure-preview" aria-hidden="true">
              <span className="figma-brochure-sheet">
                <small>Private Briefing</small>
                <strong>Sri Lanka</strong>
                <i />
              </span>
              <span className="figma-brochure-leaf">
                <i />
                <i />
                <i />
              </span>
            </figure>
            <div>
              <p>Royale Isles Lanka</p>
              <h3>Sri Lanka, held privately for the discerning traveller.</h3>
              <span>
                A confidential prelude to the conversation: residences, access, family movement,
                wellness, wildlife, and the moments best kept away from the obvious path.
              </span>
            </div>
          </aside>
        </div>
      </section>

      {/*
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
      */}

      <section className="figma-faq" data-node-id="103:13229">
        <div className="figma-container figma-faq-inner">
          <div className="figma-faq-header">
            <div>
              <div className="figma-faq-heading">
                <i />
                <p>Frequently Asked</p>
              </div>
              <h2>
                The Questions
                <em>Worth Asking</em>
              </h2>
              <p>
                Public answers are intentionally brief. Personal preferences, family-office
                requirements, security concerns, and pace are best understood in conversation.
              </p>
            </div>
            <aside className="figma-faq-concierge">
              <span>Private Advisory</span>
              <h3>Questions with nuance belong in conversation.</h3>
              <p>
                For principals, private families, special access, medical needs, or
                discretion-sensitive movement, our team will brief you directly before any journey is
                finalised.
              </p>
              <a href="#begin">Ask Us Directly</a>
            </aside>
          </div>

          <div className="figma-faq-panel">
            <div className="figma-question-list">
              {questions.map((question, index) => (
                <details key={question.question}>
                  <summary>
                    <span>{romanNumerals[index]}</span>
                    <div>
                      <small>{question.category}</small>
                      <strong>{question.question}</strong>
                    </div>
                  </summary>
                  <p>{question.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
