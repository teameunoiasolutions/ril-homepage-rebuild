import './ExperiencesPage.css'
import { useState, type MouseEvent, type ReactNode } from 'react'
import { ArrowIcon } from '../ArrowIcon'
import { experienceImages } from './images'

type Detail = {
  label: string
  value: string
}

const experienceThemeOptions = [
  'All Encounters',
  'Wildlife & Wilderness',
  'Ocean & Discovery',
  'Heritage & Memory',
  'Wellness & Restoration',
  'Rail & Landscape',
  'Culture & Human Connection',
] as const

type ExperienceTheme = (typeof experienceThemeOptions)[number]

type Encounter = {
  id: string
  theme?: Exclude<ExperienceTheme, 'All Encounters'>
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
    id: 'sigiriya-dawn-ascent',
    theme: 'Heritage & Memory',
    category: 'Heritage - Singular Access',
    title: 'The Sigiriya Dawn Ascent',
    note:
      'There are two Sigiriyas. The one you visit at 9am with three thousand other people, and the one that exists between 5 and 7am - when the frescoes catch low light no photograph has ever adequately described. We negotiated singular access. It takes eight months of patience per year to maintain.',
    curator: 'Amara Weerasinghe, Heritage & Research',
    curatorImage: experienceImages.amara,
    image: experienceImages.sigiriyaDawn,
    imageAlt: 'Traveller at private dawn access to Sigiriya rock fortress',
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
    id: 'private-tea-estate',
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
    id: 'leopard-research-circuit',
    theme: 'Wildlife & Wilderness',
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
    id: 'mirissa-fishermens-dawn',
    theme: 'Ocean & Discovery',
    category: 'Southern Coast - Immersive',
    title: "The Mirissa Fishermen's Dawn",
    note:
      'The coast, for most visitors, is an amenity. A view. A backdrop. But Mirissa runs on a different clock - one that starts at 3am, when the tuna boats come in and the auction begins. I have spent years building trust with three families on this stretch of water. You are not joining a tour. You are, briefly, joining a life.',
    curator: 'Sahan Mendis, Coastal Experiences',
    curatorImage: experienceImages.sahan,
    image: experienceImages.mirissaBoats,
    imageAlt: 'Traditional Sri Lankan outrigger fishing boats at dawn in Mirissa harbour',
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
    id: 'kandyan-dance-rehearsal',
    theme: 'Culture & Human Connection',
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
  {
    id: 'deep-water-hour',
    theme: 'Ocean & Discovery',
    category: 'Ocean - Singular Access',
    title: 'The Deep-Water Hour',
    note:
      'At 5am, a private vessel departs before the tour boats have woken. The blue whale, the largest creature alive, surfaces without warning and without ceremony - merely because it must. The privilege is not proximity alone. It is entering the water on its own terms, without performance.',
    curator: 'Sahan Mendis, Coastal Experiences',
    curatorImage: experienceImages.sahan,
    image: experienceImages.blueWhaleAerial,
    imageAlt: 'Blue whale surfacing in the Indian Ocean near Mirissa',
    caption: 'Ocean - Mirissa',
    details: [
      { label: 'Duration', value: 'Half Day' },
      { label: 'Best Season', value: 'Nov - Apr' },
      { label: 'Group Size', value: 'Max 4' },
      { label: 'Key Highlight', value: 'Private pre-dawn vessel, marine naturalist' },
      { label: 'Curator', value: 'Sahan M.' },
    ],
  },
  {
    id: 'sacred-fire-private-vantage',
    theme: 'Culture & Human Connection',
    category: 'Ceremony - Private Vantage',
    title: 'Sacred Fire, Private Vantage',
    note:
      "Access to the inner sanctum of the Temple of the Tooth is never treated as spectacle. A private audience with the temple's senior custodian begins with context, restraint, and the understanding that the ceremony is not adjusted for visitors - you adjust yourself to the ceremony.",
    curator: 'Malini Fernando, Cultural Lead',
    curatorImage: experienceImages.amara,
    image: experienceImages.perahera,
    imageAlt: 'Kandy Esala Perahera festival procession at night',
    caption: 'Ceremony - Kandy',
    details: [
      { label: 'Duration', value: 'Evening' },
      { label: 'Best Season', value: 'Year-round' },
      { label: 'Group Size', value: 'Max 4' },
      { label: 'Key Highlight', value: 'Senior custodian context, protected vantage' },
      { label: 'Curator', value: 'Malini F.' },
    ],
  },
  {
    id: 'ancient-grammar-of-healing',
    theme: 'Wellness & Restoration',
    category: 'Restoration - Healing Traditions',
    title: 'The Ancient Grammar of Healing',
    note:
      'Embedded within a rainforest reserve, this five-day Ayurvedic immersion is guided by a fourth-generation vaidya. It is not a spa and not a retreat in the decorative sense. It is a diagnostic and restorative system refined for two thousand years, entered slowly and with discipline.',
    curator: 'Dilini Perera, Co-Founder',
    curatorImage: experienceImages.dilini,
    image: experienceImages.ayurveda,
    imageAlt: 'Open-air Ayurvedic treatment pavilion in Sri Lanka jungle',
    badge: 'By Consultation',
    caption: 'Restoration - Sinharaja',
    details: [
      { label: 'Duration', value: '5 Days' },
      { label: 'Best Season', value: 'All Year' },
      { label: 'Group Size', value: 'Individual' },
      { label: 'Key Highlight', value: 'Fourth-generation vaidya, rainforest setting' },
      { label: 'Curator', value: 'Dilini P.' },
    ],
  },
]

const experienceThemes = [
  {
    number: '01',
    title: 'Wildlife & Wilderness',
    description:
      'Leopards, elephants, forests, field researchers, remote ecosystems, and nature without performance.',
    traveller: 'For the Seeker of Silence',
    image: experienceImages.leopardFeature,
    imageAlt: 'Leopard resting on ancient rock in the Sri Lankan wilderness',
    href: '#leopard-research-circuit',
    encounter: 'The Leopard Research Circuit',
    featured: true,
  },
  {
    number: '02',
    title: 'Ocean & Discovery',
    description:
      'Whale watching, sailing, marine life, lagoons, east coast exploration, and hidden coastlines.',
    traveller: 'For the Unhurried Wanderer',
    image: experienceImages.blueWhaleAerial,
    imageAlt: 'Blue whale surfacing in deep Sri Lankan water',
    href: '#deep-water-hour',
    encounter: 'The Deep-Water Hour',
    featured: false,
  },
  {
    number: '03',
    title: 'Heritage & Memory',
    description:
      'Ancient kingdoms, sacred spaces, archaeology, historians, and living traditions carried forward.',
    traveller: 'For the Heritage Guardian',
    image: experienceImages.sigiriyaDawn,
    imageAlt: 'Private dawn access to Sigiriya rock fortress',
    href: '#sigiriya-dawn-ascent',
    encounter: 'The Sigiriya Dawn Ascent',
    featured: false,
  },
  {
    number: '04',
    title: 'Wellness & Restoration',
    description:
      'Ayurveda, healing traditions, retreats, slow living, and the quiet work of personal renewal.',
    traveller: 'For the Restorer',
    image: experienceImages.ayurveda,
    imageAlt: 'Open-air Ayurvedic treatment pavilion in a rainforest setting',
    href: '#ancient-grammar-of-healing',
    encounter: 'The Ancient Grammar of Healing',
    featured: true,
  },
  {
    number: '05',
    title: 'Rail & Landscape',
    description:
      'Hill country train journeys, tea estates, mountain routes, and scenery that changes by the hour.',
    traveller: 'For the Story Collector',
    image: experienceImages.teaEstate,
    imageAlt: 'Misty tea estate landscape in Sri Lanka hill country',
    href: '#begin',
    encounter: 'Train journeys in development',
    featured: false,
  },
  {
    number: '06',
    title: 'Culture & Human Connection',
    description:
      'Artisans, musicians, dancers, family traditions, private introductions, and everyday Sri Lanka.',
    traveller: 'For the Curious Witness',
    image: experienceImages.kandyanDancer,
    imageAlt: 'Kandyan dancer in ceremonial costume',
    href: '#kandyan-dance-rehearsal',
    encounter: 'A Private Kandyan Dance Rehearsal',
    featured: false,
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

const encounterNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'] as const

function EncounterCard({ encounter, index }: { encounter: Encounter; index: number }) {
  const enquiryHref =
    encounter.title === 'The Sigiriya Dawn Ascent'
      ? '/experiences/the-sigiriya-dawn-ascent'
      : '#begin'

  return (
    <article id={encounter.id} className="encounter-row experiences-reveal">
      <div className="encounter-index">
        <span>{encounterNumerals[index] ?? String(index + 1)}</span>
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
  const [selectedTheme, setSelectedTheme] = useState<ExperienceTheme>('All Encounters')
  const filteredEncounters =
    selectedTheme === 'All Encounters'
      ? encounters
      : encounters.filter((encounter) => encounter.theme === selectedTheme)
  const curatedOpeningsCount = filteredEncounters.length

  function handleThemeExplore(
    theme: Exclude<ExperienceTheme, 'All Encounters'>,
    event: MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault()
    setSelectedTheme(theme)
    window.requestAnimationFrame(() => {
      document.getElementById('encounters')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

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
              <img src={experienceImages.heroSigiriya} alt="Lone traveller at dawn on Sigiriya steps" />
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

      <section className="experience-themes experiences-reveal" aria-labelledby="experience-themes-title">
        <div className="experiences-container">
          <header className="experience-themes-header">
            <div>
              <Eyebrow>Traveller Discovery - Experience Themes</Eyebrow>
              <h2 id="experience-themes-title">
                Ways Into
                <br />
                <em>The Island.</em>
              </h2>
            </div>
            <p>
              No two travellers experience Sri Lanka the same way. Some seek wilderness. Some seek
              restoration. Some seek culture, memory, or stillness. The encounters below emerge from
              these different motivations, shaped by who the traveller is before any itinerary is drawn.
            </p>
          </header>

          <div className="experience-themes-board">
            {experienceThemes.map((theme) => (
              <a
                key={theme.title}
                className={theme.featured ? 'theme-chapter theme-chapter--featured' : 'theme-chapter'}
                href="#encounters"
                onClick={(event) => handleThemeExplore(theme.title, event)}
                aria-label={`${theme.title}: explore this theme in the encounter collection`}
              >
                <figure>
                  <img src={theme.image} alt={theme.imageAlt} />
                </figure>
                <div className="theme-chapter-copy">
                  <span>{theme.number}</span>
                  <p>{theme.traveller}</p>
                  <h3>{theme.title}</h3>
                  <p>{theme.description}</p>
                  <small>{theme.encounter}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="region-filter experiences-reveal" aria-label="Explore encounters by theme">
        <div className="region-filter-copy">
          <span>Browse The Collection</span>
          <label htmlFor="experience-theme">Explore By Theme</label>
        </div>
        <div className="region-filter-select-wrap">
          <select
            id="experience-theme"
            value={selectedTheme}
            onChange={(event) => setSelectedTheme(event.target.value as ExperienceTheme)}
          >
            {experienceThemeOptions.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <p>
          {curatedOpeningsCount} {curatedOpeningsCount === 1 ? 'Curated Opening' : 'Curated Openings'}
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
              <p>New encounters are being prepared for this chapter of the collection.</p>
              <span>This pathway is currently available through private consultation.</span>
            </div>
          )}
        </div>
      </section>

      <section className="editorial-transition experiences-reveal" aria-labelledby="editorial-transition-title">
        <div className="experiences-container">
          <div className="editorial-transition-inner">
            <p>The Philosophy Of Access</p>
            <h2 id="editorial-transition-title">
              Two principles sit beneath
              <br />
              <em>every introduction we make.</em>
            </h2>
            <p>
              The encounters above show what can be arranged. The principles below explain how we
              decide what should be arranged at all: nature must not be staged, and access must protect
              dignity. Together, they shape the standard behind the collection.
            </p>
          </div>
        </div>
      </section>

      <section className="wilderness-feature experiences-reveal">
        <div className="experiences-container wilderness-grid">
          <div className="wilderness-copy">
            <p>The Wilderness Principle</p>
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
            <small>Stewardship - Silence - Fieldcraft</small>
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
            <p>The Ceremony Principle</p>
            <h2>
              "We do not offer you religion. We offer you <em>proximity to the sacred.</em>"
            </h2>
            <span>
              Access is only meaningful when it protects the dignity of the ceremony itself.
            </span>
            <cite>- Malini Fernando, Cultural Lead</cite>
          </blockquote>
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
