import './ExperiencesPage.css'
import type { ReactNode } from 'react'
import { experienceImages } from './images'

type Detail = {
  label: string
  value: string
}

type Encounter = {
  category: string
  title: string
  note: string
  curator: string
  curatorImage: string
  image: string
  imageAlt: string
  badge?: string
  caption: string
  details: Detail[]
}

const stats = [
  { value: '24', label: 'Encounters' },
  { value: '8', label: 'Regions' },
  { value: '5', label: 'Curators' },
  { value: '1', label: 'Channel Only' },
] as const

const regions = [
  'All Encounters',
  'Tea Country',
  'Southern Coast',
  'Wildlife',
  'Heritage',
  'Marine',
  'Cultural',
] as const

const encounters: Encounter[] = [
  {
    category: 'Heritage - Singular Access',
    title: 'The Sigiriya Dawn Ascent',
    note:
      'There are two Sigiriyas. The one you visit at 9am with three thousand other people, and the one that exists between 5 and 7am - when the frescoes catch low light no photograph has ever adequately described. We negotiated singular access. It takes eight months of patience per year to maintain.',
    curator: 'Amara Weerasinghe, Heritage & Research',
    curatorImage: experienceImages.amara,
    image: experienceImages.sigiriyaDawn,
    imageAlt: 'Traveler at private dawn access to Sigiriya rock fortress',
    badge: "Curator's Choice",
    caption: 'Cultural Heritage - Central Province',
    details: [
      { label: 'Duration', value: '3 Hours' },
      { label: 'Best Season', value: 'Jan - Apr' },
      { label: 'Group Size', value: 'Max 4' },
      { label: 'Key Highlight', value: 'Pre-dawn private access, frescoe viewing' },
      { label: 'Curator', value: 'Amara W.' },
    ],
  },
  {
    category: 'Tea Country - Immersive',
    title: 'A Private Tea Estate, Locked Before Dawn',
    note:
      'Tea tourism is everywhere. What is almost nowhere is the thing that precedes it: the stillness of a working estate at 4:45am, before the pickers arrive, when the mist sits exactly at shoulder height and the silence has a particular quality I can only describe as earned. This is the version we offer.',
    curator: 'Dilini Perera, Co-Founder',
    curatorImage: experienceImages.dilini,
    image: experienceImages.teaEstate,
    imageAlt: 'Misty dawn over terraced tea estate in Nuwara Eliya',
    caption: 'Tea Country - Hill Province',
    details: [
      { label: 'Duration', value: 'Full Day' },
      { label: 'Best Season', value: 'Feb - May' },
      { label: 'Group Size', value: 'Max 2' },
      { label: 'Key Highlight', value: 'Private estate access, master blender session' },
      { label: 'Curator', value: 'Dilini P.' },
    ],
  },
  {
    category: 'Wildlife - Expert-Led',
    title: 'The Leopard Research Circuit',
    note:
      "I spent seven years in Yala before I joined this team. I know which vehicles to avoid, which blocks to enter at which hour, and - more importantly - when to stop the engine and simply wait. Safari isn't about luck. It's about discipline. I've only ever taken four people into Block 5 at dawn. The fifth will be you.",
    curator: 'Kavindra Silva, Head of Experiences',
    curatorImage: experienceImages.kavindra,
    image: experienceImages.leopardCircuit,
    imageAlt: 'Wild Sri Lankan leopard resting on ancient rock at dusk',
    badge: 'Rare Access',
    caption: 'Wildlife - Southern Province',
    details: [
      { label: 'Duration', value: '3 Days' },
      { label: 'Best Season', value: 'Jun - Oct' },
      { label: 'Group Size', value: 'Max 4' },
      { label: 'Key Highlight', value: 'Block 5 private access, research biologist guide' },
      { label: 'Curator', value: 'Kavindra S.' },
    ],
  },
  {
    category: 'Southern Coast - Immersive',
    title: "The Mirissa Fishermen's Dawn",
    note:
      'The coast, for most visitors, is an amenity. A view. A backdrop. But Mirissa runs on a different clock - one that starts at 3am, when the tuna boats come in and the auction begins. I have spent years building trust with three families on this stretch of water. You are not joining a tour. You are, briefly, joining a life.',
    curator: 'Sahan Mendis, Coastal Experiences',
    curatorImage: experienceImages.sahan,
    image: experienceImages.mirissaBoats,
    imageAlt: 'Traditional Sri Lankan outrigger fishing boats at dawn in Mirissa harbor',
    caption: 'Southern Coast - Mirissa',
    details: [
      { label: 'Duration', value: '1 Day' },
      { label: 'Best Season', value: 'Nov - Apr' },
      { label: 'Group Size', value: 'Max 3' },
      { label: 'Key Highlight', value: 'Pre-dawn tuna auction, private boat expedition' },
      { label: 'Curator', value: 'Sahan M.' },
    ],
  },
  {
    category: 'Cultural - Intimate Access',
    title: 'A Private Kandyan Dance Rehearsal',
    note:
      'Performances are for audiences. Rehearsals are where the art lives. We arranged access to a family that has been training in the Kandyan tradition for four generations. You will watch the eldest son correct the youngest daughter. You will understand something about transmission, about inheritance, that no performance could ever convey.',
    curator: 'Amara Weerasinghe, Cultural Curation Lead',
    curatorImage: experienceImages.amara,
    image: experienceImages.kandyanDancer,
    imageAlt: 'Sri Lankan Kandyan dancer in ceremonial costume',
    badge: 'By Arrangement',
    caption: 'Cultural - Kandy',
    details: [
      { label: 'Duration', value: '2 Hours' },
      { label: 'Best Season', value: 'Year-round' },
      { label: 'Group Size', value: 'Max 6' },
      { label: 'Key Highlight', value: '4th-generation family, private studio, contextual briefing' },
      { label: 'Curator', value: 'Amara W.' },
    ],
  },
]

const furtherChapters = [
  {
    meta: 'Ocean - Mirissa - Nov-Apr',
    title: 'The Deep-Water Hour',
    copy:
      'At 5am, a private vessel departs before the tour boats have woken. The blue whale, the largest creature alive, surfaces without warning and without ceremony - merely because it must.',
    label: 'Wilderness',
    image: experienceImages.blueWhaleAerial,
    alt: 'Blue whale surfacing in the Indian Ocean near Mirissa',
    offset: false,
  },
  {
    meta: 'Ceremony - Kandy - Year-round',
    title: 'Sacred Fire, Private Vantage',
    copy:
      "Access to the inner sanctum of the Temple of the Tooth. Private audience with the temple's senior custodian. The ceremony is not adjusted for visitors - you adjust yourself to the ceremony.",
    label: 'Ceremony',
    image: experienceImages.perahera,
    alt: 'Kandy Esala Perahera festival procession at night',
    offset: true,
  },
  {
    meta: 'Restoration - Sinharaja - All Year',
    title: 'The Ancient Grammar of Healing',
    copy:
      'Embedded within a rainforest reserve, a five-day Ayurvedic immersion guided by a fourth-generation vaidya. Not a spa. A diagnostic and restorative system refined for two thousand years.',
    label: 'Solitude',
    image: experienceImages.ayurveda,
    alt: 'Open-air Ayurvedic treatment pavilion in Sri Lanka jungle',
    offset: false,
  },
] as const

const curationColumns = [
  {
    eyebrow: 'The Standard We Set',
    muted: false,
    items: [
      {
        title: 'Personal Verification',
        copy:
          'No experience enters the collection unless a curator has participated in it, not observed it. We do not accept invitations to preview programmes.',
      },
      {
        title: 'Relationship Primacy',
        copy:
          "Every practitioner in the collection is known personally to at least one team member. We do not work through intermediaries. We do not list contacts we haven't shared a meal with.",
      },
      {
        title: 'Annual Renewal',
        copy:
          'The collection is reviewed in its entirety every twelve months. Experiences that no longer meet the standard are removed without announcement.',
      },
      {
        title: 'Capacity Control',
        copy:
          'We deliberately limit how frequently any single experience is offered. Demand does not expand supply. The constraint is the point.',
      },
    ],
  },
  {
    eyebrow: 'What This Means For You',
    muted: true,
    items: [
      {
        title: 'Nothing Pre-packaged',
        copy:
          'The experience you enquire about will be the same experience our curator had, not a version of it adapted for guests. This is an important distinction.',
      },
      {
        title: 'Trust, Not Transaction',
        copy:
          'When a door opens in the Knuckles Range for you, it is because the host trusts us, and by extension, you. That trust cannot be purchased. It must be honoured.',
      },
      {
        title: 'Honest Limitations',
        copy:
          "We will tell you when something isn't available, and we will not offer an alternative simply to fill the silence. We would rather you travel less and experience more.",
      },
      {
        title: 'You Are Not a Group',
        copy:
          "Every enquiry begins with a conversation about who you are. What you've seen. What you're looking for. We don't match guests to products. We assemble encounters around people.",
      },
    ],
  },
] as const

const photoStrip = [
  { src: experienceImages.spices, alt: 'Hands sorting cardamom pods', wide: false },
  { src: experienceImages.poolVilla, alt: 'Private pool villa overlooking misty mountains', wide: true },
  { src: experienceImages.oilLamps, alt: 'Ancient Buddhist temple oil lamps at dawn', wide: false },
  { src: experienceImages.blueWhaleSunset, alt: 'Blue whale surfacing at sunset', wide: true },
  { src: experienceImages.galleFort, alt: 'Overhead aerial view of Galle Fort', wide: false },
  { src: experienceImages.brassLamp, alt: 'Traditional Sri Lankan brass oil lamp detail', wide: false },
] as const

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`experiences-eyebrow${dark ? ' experiences-eyebrow--dark' : ''}`}>
      <span />
      <p>{children}</p>
    </div>
  )
}

function TextLink({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <a className={`experiences-text-link${inverse ? ' experiences-text-link--inverse' : ''}`} href="#begin">
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  )
}

function EncounterCard({ encounter, index }: { encounter: Encounter; index: number }) {
  const imageFirst = index % 2 === 0

  return (
    <article className={`encounter-row${imageFirst ? '' : ' encounter-row--reverse'}`}>
      <div className="encounter-index">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <i />
      </div>

      <div className="encounter-image-panel">
        <div className="encounter-image-frame">
          <img src={encounter.image} alt={encounter.imageAlt} />
        </div>
        {encounter.badge ? <span className="encounter-badge">{encounter.badge}</span> : null}
        <span className="encounter-caption">{encounter.caption}</span>
      </div>

      <div className="encounter-copy">
        <p className="experiences-kicker">{encounter.category}</p>
        <h2>{encounter.title}</h2>
        <div className="curator-note">
          <p className="curator-note-label">Curator's Note</p>
          <blockquote>"{encounter.note}"</blockquote>
          <div className="curator-byline">
            <img src={encounter.curatorImage} alt="" />
            <span>- {encounter.curator}</span>
          </div>
        </div>
        <TextLink>Enquire About This Encounter</TextLink>
      </div>

      <dl className="encounter-details">
        {encounter.details.map((detail) => (
          <div key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export function ExperiencesPage() {
  return (
    <main className="experiences-page">
      <section className="experiences-hero">
        <div className="experiences-container experiences-hero-grid">
          <div className="experiences-hero-copy">
            <Eyebrow>The Collection - 2024</Eyebrow>
            <h1>
              Private
              <br />
              <em>Encounters</em>
              <br />
              with Place.
            </h1>
            <p>
              Every experience in this collection has been personally vetted, quietly negotiated, and
              approved by one of our curators. Nothing here is bookable through any other channel.
            </p>
            <aside className="opening-note">
              <p>Opening Note</p>
              <blockquote>
                "What you'll find here isn't a menu. It's a considered argument for how Sri Lanka
                deserves to be experienced."
              </blockquote>
              <div>
                <img src={experienceImages.arjun} alt="" />
                <span>
                  <strong>Arjun Fernando</strong>
                  <small>Lead Curator</small>
                </span>
              </div>
            </aside>
          </div>

          <div className="experiences-hero-image">
            <div className="hero-image-frame">
              <img src={experienceImages.heroSigiriya} alt="Lone traveler at dawn on Sigiriya steps" />
            </div>
            <span className="hero-feature-label">Featured Encounter</span>
            <span className="hero-choice">Curator's Choice</span>
            <div className="experiences-stat-strip">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav className="region-nav" aria-label="Experience regions">
        <span>Filter By Region</span>
        {regions.map((region, index) => (
          <a key={region} className={index === 0 ? 'active' : ''} href="#encounters">
            {region}
          </a>
        ))}
      </nav>

      <section className="encounters-collection" id="encounters">
        <div className="experiences-container">
          {encounters.map((encounter, index) => (
            <EncounterCard key={encounter.title} encounter={encounter} index={index} />
          ))}
        </div>
      </section>

      <section className="further-chapters">
        <div className="experiences-container">
          <header className="chapters-header">
            <div>
              <span>Further Chapters</span>
              <span>In The Anthology</span>
            </div>
            <h2>
              More <em>ways to enter</em>
              <br />
              the island's interior.
            </h2>
          </header>

          <div className="chapter-cards">
            {furtherChapters.map((chapter) => (
              <article key={chapter.title} className={chapter.offset ? 'chapter-card chapter-card--offset' : 'chapter-card'}>
                <img src={chapter.image} alt={chapter.alt} />
                <div>
                  <p>{chapter.meta}</p>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.copy}</p>
                  <span>{chapter.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wilderness-feature">
        <div className="experiences-container wilderness-grid">
          <div className="wilderness-copy">
            <p>For Those Who Seek</p>
            <h2>
              <em>Wilderness</em>
              <br />
              without
              <br />
              mediation.
            </h2>
            <span />
            <p>
              Yala. Wilpattu. Sinharaja. Three ecosystems, three different grammars of silence. Our
              head naturalist has spent twenty years learning to read them all. He will teach you how
              to listen.
            </p>
            <small>Private Expeditions Available</small>
          </div>
          <img src={experienceImages.leopardFeature} alt="Leopard resting on ancient rock in Yala" />
        </div>
      </section>

      <section className="ceremony-quote">
        <div className="experiences-container ceremony-grid">
          <figure>
            <img src={experienceImages.monks} alt="Buddhist monks walking through temple ruins" />
            <figcaption>Polonnaruwa, North Central</figcaption>
          </figure>
          <blockquote>
            <p>On Ceremony</p>
            <h2>
              "We do not offer you religion. We offer you <em>proximity to the sacred.</em>"
            </h2>
            <cite>- Malini Fernando, Cultural Lead</cite>
          </blockquote>
        </div>
      </section>

      <section className="ocean-feature">
        <div className="experiences-container">
          <Eyebrow dark>Feature No. 03</Eyebrow>
          <img className="ocean-main-image" src={experienceImages.dhoni} alt="Private wooden dhoni sailing in turquoise lagoon" />
          <div className="ocean-caption">
            <span>Trincomalee Lagoon, East Coast</span>
            <span>8 deg 34 N 81 deg 13 E</span>
          </div>
          <div className="ocean-grid">
            <p className="ocean-label">Ocean - East Coast</p>
            <div>
              <h2>
                <em>Drift</em> without
                <br />
                destination.
              </h2>
              <span />
              <p>
                A private traditional dhoni, a captain who has fished these waters since birth, and
                an itinerary that is entirely at the mercy of the wind and tide. No fixed route. No
                fixed return time. The east coast lagoons of Trincomalee offer some of the most
                pristine and least-visited marine environments in Asia.
              </p>
              <small>Drift - 3-7 Days</small>
            </div>
            <figure>
              <img src={experienceImages.reef} alt="Tropical reef with diver silhouette" />
              <figcaption>Pigeon Island Marine Reserve</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="curation-process">
        <div className="experiences-container">
          <Eyebrow>Chapter III</Eyebrow>
          <h2>
            The Curation
            <br />
            <em>Process.</em>
          </h2>
          <div className="curation-grid">
            {curationColumns.map((column) => (
              <div key={column.eyebrow} className={column.muted ? 'curation-column curation-column--muted' : 'curation-column'}>
                <p>{column.eyebrow}</p>
                {column.items.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
          <blockquote className="process-quote">
            The collection doesn't grow. It <em>deepens.</em>
            <cite>Arjun Fernando - Co-Founder</cite>
          </blockquote>
        </div>
      </section>

      <section className="photo-strip" aria-label="Experience photography">
        {photoStrip.map((photo) => (
          <img key={photo.alt} className={photo.wide ? 'wide' : ''} src={photo.src} alt={photo.alt} />
        ))}
      </section>

      <section className="experiences-final-cta" id="begin">
        <p>Begin The Conversation</p>
        <h2>
          Every journey begins with a single question:
          <br />
          <em>"What are you looking for?"</em>
        </h2>
        <p>
          Not a form. Not a quote request. A conversation with Arjun or Dilini, who will listen
          carefully and respond honestly about what is and isn't possible.
        </p>
        <div>
          <a href="#begin" className="primary-cta">
            Start The Conversation
          </a>
          <TextLink inverse>View All Encounters</TextLink>
        </div>
      </section>
    </main>
  )
}
