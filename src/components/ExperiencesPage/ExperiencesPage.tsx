import './ExperiencesPage.css'
import { useState, type ReactNode } from 'react'
import { ArrowIcon } from '../ArrowIcon'
import { experienceImages } from './images'

type Detail = {
  label: string
  value: string
}

const regions = [
  'All Encounters',
  'Tea Country',
  'Southern Coast',
  'Wildlife',
  'Heritage',
  'Marine',
  'Cultural',
] as const

type Region = (typeof regions)[number]

type Encounter = {
  region: Exclude<Region, 'All Encounters'>
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
  { value: '1:1', label: 'Curator Planning' },
  { value: '48h', label: 'Access Review' },
  { value: 'Max 4', label: 'Private Circles' },
  { value: 'No Menu', label: 'Bespoke Only' },
] as const

const heroProofs = ['Private routing', 'Discreet hosts', 'Closed-door access'] as const

const encounters: Encounter[] = [
  {
    region: 'Heritage',
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
    region: 'Tea Country',
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
    region: 'Wildlife',
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
    region: 'Southern Coast',
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
    region: 'Cultural',
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

function TextLink({
  children,
  href = '#begin',
  inverse = false,
}: {
  children: ReactNode
  href?: string
  inverse?: boolean
}) {
  return (
    <a className={`experiences-text-link${inverse ? ' experiences-text-link--inverse' : ''}`} href={href}>
      {children}
      <ArrowIcon />
    </a>
  )
}

function EncounterCard({ encounter, index }: { encounter: Encounter; index: number }) {
  const imageFirst = index % 2 === 0
  const enquiryHref =
    encounter.title === 'The Sigiriya Dawn Ascent'
      ? '/experiences/the-sigiriya-dawn-ascent'
      : '#begin'

  return (
    <article className={`encounter-row experiences-reveal${imageFirst ? '' : ' encounter-row--reverse'}`}>
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
        <TextLink href={enquiryHref}>Enquire About This Encounter</TextLink>
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
  const [selectedRegion, setSelectedRegion] = useState<Region>('All Encounters')
  const filteredEncounters =
    selectedRegion === 'All Encounters'
      ? encounters
      : encounters.filter((encounter) => encounter.region === selectedRegion)

  return (
    <main className="experiences-page">
      <section className="experiences-hero experiences-reveal">
        <div className="experiences-container experiences-hero-grid">
          <div className="experiences-hero-copy">
            <Eyebrow>Private Collection - Sri Lanka</Eyebrow>
            <h1>
              Rare
              <br />
              <em>Access</em>
              <br />
              to Place.
            </h1>
            <p>
              Quietly arranged encounters for guests who expect privacy, cultural depth, and flawless
              discretion. Each experience is personally vetted, host-approved, and released only when
              the right access can be secured.
            </p>
            <ul className="experiences-hero-proof-list" aria-label="Experience standards">
              {heroProofs.map((proof) => (
                <li key={proof}>{proof}</li>
              ))}
            </ul>
            <TextLink href="#begin">Begin A Private Briefing</TextLink>
            <aside className="opening-note">
              <p>Curator's Note</p>
              <blockquote>
                "For our most private guests, luxury is not excess. It is timing, trust, and the
                assurance that no one else is moving through the same moment."
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
            <span className="hero-feature-label">Featured Private Access</span>
            <span className="hero-choice">By Introduction Only</span>
            <div className="hero-access-card" aria-label="Arrival protocol">
              <p>Arrival Protocol</p>
              <strong>Pre-dawn ascent, sealed route, curator in attendance.</strong>
              <span>Sigiriya - Central Province</span>
            </div>
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

      <section className="region-filter experiences-reveal" aria-label="Experience filters">
        <div className="region-filter-copy">
          <span>Access Index</span>
          <label htmlFor="experience-region">Filter By Region</label>
        </div>
        <div className="region-filter-select-wrap">
          <select
            id="experience-region"
            value={selectedRegion}
            onChange={(event) => setSelectedRegion(event.target.value as Region)}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <p>
          {filteredEncounters.length} {filteredEncounters.length === 1 ? 'Private Encounter' : 'Private Encounters'}
        </p>
      </section>

      <section className="encounters-collection" id="encounters">
        <div className="experiences-container">
          <header className="encounters-collection-header experiences-reveal">
            <p>Personally Introduced</p>
            <h2>
              The encounters below are not inventory. They are openings held by trust, timing, and
              discretion.
            </h2>
          </header>
          {filteredEncounters.length > 0 ? (
            filteredEncounters.map((encounter, index) => (
              <EncounterCard key={encounter.title} encounter={encounter} index={index} />
            ))
          ) : (
            <div className="encounters-empty experiences-reveal">
              <p>No encounters currently match this region.</p>
              <span>Our curators can still shape marine access by arrangement.</span>
            </div>
          )}
        </div>
      </section>

      <section className="further-chapters experiences-reveal">
        <div className="experiences-container">
          <header className="chapters-header">
            <div>
              <span>Further Chapters</span>
              <span>By Private Arrangement</span>
            </div>
            <h2>
              Additional <em>private pathways</em>
              <br />
              into the island.
            </h2>
            <p>
              For guests whose journey calls for quieter doors, each chapter can be shaped around
              season, access, and the right local host.
            </p>
          </header>

          <div className="chapter-cards">
            {furtherChapters.map((chapter) => (
              <article
                key={chapter.title}
                className={
                  chapter.offset
                    ? 'chapter-card chapter-card--offset experiences-reveal'
                    : 'chapter-card experiences-reveal'
                }
              >
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

      <section className="wilderness-feature experiences-reveal">
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
            <small>Private Expeditions - By Seasonal Clearance</small>
          </div>
          <figure className="wilderness-image-card">
            <img src={experienceImages.leopardFeature} alt="Leopard resting on ancient rock in Yala" />
            <figcaption>Yala Block V - guided by a field naturalist, not a driver.</figcaption>
          </figure>
        </div>
      </section>

      <section className="ceremony-quote experiences-reveal">
        <div className="experiences-container ceremony-grid">
          <figure>
            <img src={experienceImages.monks} alt="Buddhist monks walking through temple ruins" />
            <figcaption>Polonnaruwa - North Central Province</figcaption>
          </figure>
          <blockquote>
            <p>On Ceremony</p>
            <h2>
              "We do not offer you religion. We offer you <em>proximity to the sacred.</em>"
            </h2>
            <span>
              A private vantage is only worthwhile when it protects the dignity of the ceremony itself.
            </span>
            <cite>- Malini Fernando, Cultural Lead</cite>
          </blockquote>
        </div>
      </section>

      <section className="ocean-feature experiences-reveal">
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
                A private traditional dhoni, a captain who has fished these waters since birth, and a
                route shaped by wind, tide, and privacy. No fixed return time. No staged theatre. Just
                the quiet discipline of moving through the east coast on its own terms.
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

      <section className="curation-process experiences-reveal">
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
            The collection does not grow for scale. It <em>deepens for trust.</em>
            <cite>Arjun Fernando - Co-Founder</cite>
          </blockquote>
        </div>
      </section>

      <section className="photo-strip experiences-reveal" aria-label="Experience photography carousel">
        <div className="photo-strip-track">
          <div className="photo-strip-set">
            {photoStrip.map((photo) => (
              <img key={photo.alt} className={photo.wide ? 'wide' : ''} src={photo.src} alt={photo.alt} />
            ))}
          </div>
          <div className="photo-strip-set" aria-hidden="true">
            {photoStrip.map((photo) => (
              <img key={`repeat-${photo.alt}`} className={photo.wide ? 'wide' : ''} src={photo.src} alt="" />
            ))}
          </div>
        </div>
      </section>

      <section className="experiences-final-cta experiences-reveal" id="begin">
        <div className="experiences-final-cta-inner">
          <div className="experiences-final-cta-mark" aria-hidden="true">
            ✦
          </div>
          <p>Private Access Briefing</p>
          <h2>
            Begin with the question
            <br />
            <em>that opens the right door.</em>
          </h2>
          <p>
            A quiet conversation with Arjun or Dilini, shaped around privacy, timing, and the kind of
            access that should never feel public. If an encounter cannot be arranged with integrity, we
            will say so.
          </p>
          <div className="experiences-final-cta-actions">
            <a href="#begin" className="primary-cta">
              Request A Private Briefing
            </a>
            <TextLink inverse>Review The Collection</TextLink>
          </div>
          <small>Discreet planning. No packaged itineraries. Introductions only where trust exists.</small>
        </div>
      </section>
    </main>
  )
}
