import './TravelPreparationPage.css'
import { experienceImages } from '../ExperiencesPage/images'

const images = {
  hero: experienceImages.teaEstate,
  southCoast: experienceImages.mirissaBoats,
  eastCoast: experienceImages.blueWhaleSunset,
  hillCountry: experienceImages.teaEstate,
  culturalTriangle: experienceImages.sigiriyaDawn,
  westCoast: experienceImages.galleFort,
  train: experienceImages.perahera,
} as const

const handbookLinks = [
  { href: '#visa-entry', label: 'Visa & Entry' },
  { href: '#arrival', label: 'Arrival' },
  { href: '#currency', label: 'Currency' },
  { href: '#seasons', label: 'Seasons' },
  { href: '#travel-notes', label: 'Travel Notes' },
  { href: '#etiquette', label: 'Etiquette' },
  { href: '#faq', label: 'FAQ' },
] as const

const applicationSteps = [
  'Visit eta.gov.lk - the official portal',
  'Complete the form (approx. 15 minutes)',
  'Pay the processing fee online',
  'Receive confirmation by email',
  'Present your ETA on arrival at immigration',
] as const

const arrivalNotes = [
  { label: 'SIM Cards', copy: 'Dialog or Mobitel at arrivals' },
  { label: 'Currency', copy: 'Exchange desk available; ATMs also on-site' },
  { label: 'Your Driver', copy: 'Name card in Arrivals, typically within 20 min' },
  { label: 'First Journey', copy: 'Approximately 30 min to Colombo city centre' },
] as const

const paymentNotes = [
  {
    icon: 'Rs',
    label: 'Local Currency',
    title: 'Sri Lankan Rupee',
    copy: 'LKR - approx. 300-320 to USD',
  },
  {
    icon: 'hex',
    label: 'Cards',
    title: 'Widely Accepted',
    copy: 'Visa & Mastercard at most curated establishments',
  },
  {
    icon: 'circle',
    label: 'Cash',
    title: 'Carry Some',
    copy: 'Markets, tuk-tuks, and rural areas prefer cash',
  },
  {
    icon: '+',
    label: 'ATMs',
    title: 'Nationwide',
    copy: 'Commercial Bank & HNB are the most reliable networks',
  },
] as const

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const

const seasons = [
  {
    region: 'South Coast',
    copy: 'Wide beaches, whale watching, colonial forts, surf',
    activeMonths: [0, 1, 2, 3, 9, 10],
    best: 'November - April',
    image: images.southCoast,
    imageCopy: 'Wide white beaches, colonial fort towns, surf breaks and whale-watching season.',
  },
  {
    region: 'East Coast',
    copy: 'Turquoise bays, diving, empty beaches, solitude',
    activeMonths: [3, 4, 5, 6, 7],
    best: 'April - September',
    image: images.eastCoast,
    imageCopy: 'While the south rests under cloud, the east awakens.',
  },
  {
    region: 'Hill Country',
    copy: 'Tea terraces, mist, waterfalls, cool mornings',
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    best: 'Year-round - cooler Dec-Feb',
    image: images.hillCountry,
    imageCopy: 'The highlands exist in their own weather.',
  },
  {
    region: 'Cultural Triangle',
    copy: 'Ancient cities, wildlife, dry plains, ruins',
    activeMonths: [4, 5, 6, 7, 8, 9],
    best: 'May - October',
    image: images.culturalTriangle,
    imageCopy: 'Ancient cities built over centuries sit between jungle and sky.',
  },
  {
    region: 'West Coast',
    copy: 'Colombo, Negombo, calm seas, gateway coast',
    activeMonths: [0, 1, 2, 9, 10],
    best: 'November - March',
    image: images.westCoast,
    imageCopy: 'Colombo, Negombo, and the coast most travellers meet first.',
  },
] as const

const travelNotes = [
  {
    numeral: 'I',
    title: 'Time Moves Differently Here',
    copy:
      'A two-hour drive can take four. The train schedule is a suggestion. Meetings begin when everyone has arrived. Surrender to this, and you will discover that unhurried is not the same as slow.',
  },
  {
    numeral: 'II',
    title: 'The Best Experiences Cannot Be Scheduled',
    copy:
      'The fisherman who waves you over for tea. The ceremony that spills into the street on a Tuesday evening. The waterfall behind the guesthouse garden. Leave space for what cannot be planned.',
  },
  {
    numeral: 'III',
    title: 'Hospitality Is Personal',
    copy:
      'When someone invites you into their home, they are not performing a custom. They are extending themselves. Accept graciously. Remove your shoes. Stay longer than you planned.',
  },
  {
    numeral: 'IV',
    title: 'The Train Is Part Of The Journey',
    copy:
      'The Kandy-Ella line is not transport - it is an event. Book the observation car or stand at an open door. The tea country rolls past like something remembered, not seen.',
  },
  {
    numeral: 'V',
    title: 'A Smile Travels Further Than An Itinerary',
    copy:
      'Sri Lankans are among the most warmly curious people in the world. Put down the phone. Make eye contact. Say Ayubowan. Something unexpectedly beautiful will follow.',
  },
] as const

const etiquette = [
  {
    title: 'Remove Your Shoes',
    copy:
      'Before entering a home, temple, or any sacred space. This is non-negotiable and deeply felt. Look for the pile of shoes at the door.',
  },
  {
    title: 'Dress for Temples',
    copy:
      'Shoulders and knees covered. Many temples have sarongs available for those who need them. This extends to mosques and kovils.',
  },
  {
    title: 'The Greeting',
    copy:
      "Ayubowan - hands pressed together at the chest, a slight bow. It means 'may you live long.' Attempting it will disarm almost anyone.",
  },
  {
    title: 'Accepting Food',
    copy:
      'When offered food or drink, accepting is an act of trust. Refusing repeatedly can cause quiet offence. Taste at least a little.',
  },
  {
    title: 'The Head Wobble',
    copy:
      'A lateral wobble often means yes, understanding, or agreement. It is not a European head-shake. Takes a few days to read correctly.',
  },
  {
    title: 'Photography',
    copy:
      'Always ask before photographing people, particularly at religious sites. A smile and a gesture go a long way. Respect a no graciously.',
  },
] as const

const faqs = [
  {
    question: 'Do I need a visa to visit Sri Lanka?',
    answer:
      'Most travellers need an Electronic Travel Authorisation before arrival. Apply through the official ETA portal before departure.',
  },
  {
    question: 'When is the best time to visit?',
    answer:
      'There is always a good region in season. The south and west are strongest November to April, while the east is best from April to September.',
  },
  {
    question: 'What currency is used and how do I manage money?',
    answer:
      'The local currency is the Sri Lankan Rupee. Cards are accepted at most curated establishments, but cash is useful for markets, tuk-tuks, and rural stops.',
  },
  {
    question: 'Is Sri Lanka safe for international travellers?',
    answer:
      'Sri Lanka is welcoming and navigable with thoughtful planning. We arrange trusted drivers, context, and local guidance around each journey.',
  },
  {
    question: 'What vaccinations or health precautions are recommended?',
    answer:
      'Speak with your travel physician before departure. Bring personal medication, sun protection, mosquito repellent, and copies of prescriptions.',
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

function isPeakMonth(activeMonths: readonly number[], monthIndex: number) {
  return activeMonths.includes(monthIndex)
}

export function TravelPreparationPage() {
  return (
    <main className="travel-prep-page">
      <section className="prep-hero">
        <div className="prep-hero-copy">
          <div className="prep-kicker">
            <span />
            <p>Travel Preparation Handbook</p>
          </div>
          <p className="prep-hero-numeral">I</p>
          <h1>
            Before
            <br />
            You Arrive
          </h1>
          <i className="prep-gold-rule" />
          <p className="prep-hero-intro">
            A private handbook for the discerning traveller, prepared by the Royale Isles Lanka advisory team.
          </p>
          <nav className="prep-chip-nav" aria-label="Travel preparation sections">
            {handbookLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="prep-hero-image">
          <img src={images.hero} alt="Sri Lanka hill country tea fields" />
        </div>
      </section>

      <nav className="prep-contents" aria-label="Travel preparation contents">
        <span>Contents</span>
        {handbookLinks.map((link, index) => (
          <a key={link.href} href={link.href}>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            {link.label}
          </a>
        ))}
      </nav>

      <section className="prep-section prep-visa" id="visa-entry">
        <div className="prep-container">
          <SectionHeading number="01" title="Visa & Entry" />
          <div className="prep-visa-grid">
            <article className="prep-visa-card prep-visa-card--primary">
              <p>Primary Route</p>
              <h3>Electronic Travel Authorisation</h3>
              <i />
              <p>
                Available to most nationalities. Apply online before departure. Confirmation arrives by email within hours.
              </p>
              <dl>
                <div>
                  <dt>Duration</dt>
                  <dd>30 days</dd>
                </div>
                <div>
                  <dt>Extendable</dt>
                  <dd>90 days</dd>
                </div>
                <div>
                  <dt>Apply by</dt>
                  <dd>48 hrs prior</dd>
                </div>
                <div>
                  <dt>Portal</dt>
                  <dd>eta.gov.lk</dd>
                </div>
              </dl>
            </article>

            <article className="prep-visa-card prep-visa-card--steps">
              <p>Application Steps</p>
              <h3>How to Apply</h3>
              <i />
              <ol>
                {applicationSteps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </article>

            <article className="prep-visa-card prep-visa-card--arrival" id="arrival">
              <p>02 - Arrival</p>
              <h3>At the Airport</h3>
              <i />
              <p>
                Bandaranaike International Airport (CMB) - modern, calm, and navigable. Your driver meets you in
                Arrivals with a name card.
              </p>
              <ul>
                {arrivalNotes.map((note) => (
                  <li key={note.label}>
                    <strong>{note.label}</strong>
                    <span>{note.copy}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="prep-section prep-payments" id="currency">
        <div className="prep-container">
          <SectionHeading number="03" title="Currency & Payments" />
          <div className="prep-payment-grid">
            {paymentNotes.map((note) => (
              <article key={note.label} className="prep-payment-card">
                <span className={`prep-payment-icon${note.icon === 'hex' ? ' prep-payment-icon--hex' : ''}${note.icon === 'circle' ? ' prep-payment-icon--circle' : ''}`}>
                  {note.icon}
                </span>
                <p>{note.label}</p>
                <h3>{note.title}</h3>
                <small>{note.copy}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-section prep-seasons" id="seasons">
        <div className="prep-container">
          <SectionHeading number="04" title="Weather & Seasons" inverse />
          <p className="prep-seasons-note">
            Peak season indicated by filled circles. Sri Lanka is always in season - somewhere.
          </p>
          <div className="prep-season-table" role="table" aria-label="Sri Lanka seasonal guide">
            <div className="prep-season-months" role="row">
              <span />
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
              <span />
            </div>
            {seasons.map((season) => (
              <div className="prep-season-row" key={season.region} role="row">
                <div className="prep-season-region">
                  <strong>{season.region}</strong>
                  <span>{season.copy}</span>
                </div>
                {months.map((month, index) => (
                  <span
                    key={month}
                    className={isPeakMonth(season.activeMonths, index) ? 'is-active' : ''}
                    aria-label={`${month}: ${isPeakMonth(season.activeMonths, index) ? 'peak' : 'off peak'}`}
                  />
                ))}
                <p>{season.best}</p>
              </div>
            ))}
          </div>
          <div className="prep-region-cards">
            {seasons.map((season) => (
              <article key={season.region}>
                <img src={season.image} alt={`${season.region} in Sri Lanka`} />
                <h3>{season.region}</h3>
                <p>{season.imageCopy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-section prep-notes" id="travel-notes">
        <div className="prep-container">
          <SectionHeading number="05" title="Travel Notes" />
          <div className="prep-notes-list">
            {travelNotes.map((note) => (
              <article key={note.numeral}>
                <span>{note.numeral}</span>
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-section prep-etiquette" id="etiquette">
        <div className="prep-container">
          <SectionHeading number="06" title="Sri Lankan Etiquette" />
          <div className="prep-etiquette-grid">
            {etiquette.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-section prep-faq" id="faq">
        <div className="prep-faq-container">
          <SectionHeading number="07" title="Frequently Asked" />
          <div className="prep-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{faq.question}</strong>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-final-cta">
        <div className="prep-final-copy">
          <div className="prep-cta-mark">
            <span />
            <i />
          </div>
          <h2>
            You Are Ready
            <br />
            to Begin
          </h2>
          <p>
            Our team has travelled these roads, stayed in these places, and eaten at these tables. Let us turn your
            preparation into your itinerary.
          </p>
          <div className="prep-cta-actions">
            <a href="/concierge">Ask The Concierge</a>
            <a href="/#begin">Speak With Us</a>
          </div>
        </div>
        <figure className="prep-final-image">
          <img src={images.train} alt="Sri Lanka train winding through jungle" />
          <figcaption>
            "The island is waiting.
            <br />
            It has been waiting for you specifically."
          </figcaption>
        </figure>
      </section>
    </main>
  )
}
