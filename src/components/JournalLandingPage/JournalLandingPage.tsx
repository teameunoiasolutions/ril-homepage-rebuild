import './JournalLandingPage.css'
import type { CSSProperties } from 'react'
import { ArrowIcon } from '../ArrowIcon'

type Texture = {
  label: string
  image?: string
  alt?: string
  wide?: boolean
  rotate?: string
  quote?: string
  cite?: string
}

type ArchiveRegion = {
  title: string
  places: string
  description: string
  marker: string
}

type Vignette = {
  entry: string
  title: string
  copy: string
  image?: string
  alt?: string
  meta: string
  rotate: string
  watermark?: string
}

const journalAssets = {
  coast:
    'https://www.figma.com/api/mcp/asset/78fd77c8-1142-46d9-a1f1-cafd412a8360',
  teaMist:
    'https://www.figma.com/api/mcp/asset/25ff5076-0dea-422d-9182-a7935403cf21',
  galleFort:
    'https://www.figma.com/api/mcp/asset/10ba5524-d583-43c0-8096-460026369dcd',
  monk:
    'https://www.figma.com/api/mcp/asset/e78dca37-837b-4d9b-8376-f6aa5e03ca6c',
  spices:
    'https://www.figma.com/api/mcp/asset/26b3ed3e-46b7-4468-96aa-9a2662113c2a',
  cinnamon:
    'https://www.figma.com/api/mcp/asset/6457db74-d8d1-4518-af4d-ca3f2837f4ca',
  silk:
    'https://www.figma.com/api/mcp/asset/f483f101-ca17-4c8e-aab9-16ae08149394',
  glass:
    'https://www.figma.com/api/mcp/asset/bea29247-023c-48f3-98f5-795df49ec2c7',
  boatPaint:
    'https://www.figma.com/api/mcp/asset/a17f38cc-15df-42e8-b442-baf79625f314',
  lotus:
    'https://www.figma.com/api/mcp/asset/dcda4c4c-673a-4fe5-a68b-55e36cfcd8fe',
  monsoonStone:
    'https://www.figma.com/api/mcp/asset/9fcf2e2d-2e7c-423f-a724-0778c17120ea',
  cardamom:
    'https://www.figma.com/api/mcp/asset/63fe2ccd-c68d-4c38-b379-bf6a801572e0',
  galleAlley:
    'https://www.figma.com/api/mcp/asset/2dfd191b-1515-45db-8464-a546a361f772',
  lighthouse:
    'https://www.figma.com/api/mcp/asset/41fb6b61-d551-4fac-8a54-ee76aca29036',
  nilaveli:
    'https://www.figma.com/api/mcp/asset/a60c3e37-224b-474b-8ae6-8e38ad9e8496',
  dancer:
    'https://www.figma.com/api/mcp/asset/93fe07f8-7670-49eb-8b2d-1005c365d031',
  jaffnaFort:
    'https://www.figma.com/api/mcp/asset/45c177bb-0797-4ea3-bc11-745117c5ba01',
  hillRain:
    'https://www.figma.com/api/mcp/asset/d6790f23-ee59-4d40-aba9-291948c91f4c',
  teaCup:
    'https://www.figma.com/api/mcp/asset/037ca5cf-421f-4403-988a-779eb3e10ccd',
  sigiriyaPanorama:
    'https://www.figma.com/api/mcp/asset/2976b6a1-cf38-4fa8-9392-54d96490f7f2',
} as const

const textures: Texture[] = [
  { label: 'Ceylon Cinnamon', image: journalAssets.cinnamon, alt: 'Macro texture of crushed cinnamon bark', wide: true },
  { label: 'Silk Weave · Kandy', image: journalAssets.silk, alt: 'Indigo and gold woven silk sarong fabric', rotate: '-1deg' },
  { label: 'King Coconut · 2pm', image: journalAssets.glass, alt: 'Condensation on cold glass with tropical blur', wide: true },
  {
    label: 'From a letter',
    quote: 'Every surface tells a story if you press your fingers against it long enough.',
    cite: '— From a letter, never sent',
  },
  { label: 'Oruwa · Negombo', image: journalAssets.boatPaint, alt: 'Weathered teal paint on a Sri Lankan fishing boat', rotate: '1.5deg' },
  { label: 'Temple Lotus · Dawn', image: journalAssets.lotus, alt: 'Lotus petals floating on reflective water', wide: true },
  { label: 'Monsoon · Aug', image: journalAssets.monsoonStone, alt: 'Monsoon rain on ancient stone temple floor', rotate: '-2deg' },
  { label: 'Spice Garden · Matale', image: journalAssets.cardamom, alt: 'Ground cardamom and star anise on stone mortar', wide: true },
]

const archiveRegions: ArchiveRegion[] = [
  {
    title: 'The South',
    places: 'Galle · Tangalle · Mirissa · Weligama',
    description: 'Fortified coasts, market mornings, and the particular amber of afternoon light on Portuguese stone.',
    marker: 'S',
  },
  {
    title: 'The Hill Country',
    places: 'Kandy · Ella · Nuwara Eliya · Haputale',
    description: 'Mist-wrapped tea estates, colonial bungalows, and the slow patience of mountain time.',
    marker: 'H',
  },
  {
    title: 'The Coast',
    places: 'Trinco · Arugam Bay · Kalpitiya · Negombo',
    description: 'Surf fishermen, outrigger at dawn, and water colours that refuse to be named.',
    marker: 'C',
  },
  {
    title: 'The Ancient North',
    places: 'Jaffna · Anuradhapura · Polonnaruwa',
    description: 'Ruins absorbed by jungle, palmyrah horizons, and the particular weight of very old stone.',
    marker: 'N',
  },
]

const vignettes: Vignette[] = [
  {
    entry: 'Entry #008 · Trincomalee',
    title: 'The Colour Before a Name',
    copy:
      'The water at Nilaveli had no adequate English description. Turquoise feels commercial. Aquamarine too mineral. The fishermen simply call it the sea.',
    image: journalAssets.nilaveli,
    alt: 'Aerial view of turquoise water at Nilaveli beach',
    meta: 'The Coast · March 2024',
    rotate: '-1deg',
  },
  {
    entry: 'Entry #019 · Kandy',
    title: 'The Drum Before the Dance',
    copy:
      'You hear Kandyan drums from two streets away. Then one street. Then the vibration is inside you, making decisions for your heartbeat. The dance begins before the dancer enters.',
    image: journalAssets.dancer,
    alt: 'Kandyan dancer in traditional costume',
    meta: 'Hill Country · Festival Season',
    rotate: '2deg',
    watermark: 'Ceylon',
  },
  {
    entry: 'Entry #041 · Jaffna',
    title: 'Letters Returned North',
    copy:
      'Jaffna trades in patience. The palmyrah groves grow slowly; the people who return do so carefully. Even the fort crumbles with a kind of dignity, brick by deliberate brick.',
    image: journalAssets.jaffnaFort,
    alt: 'Jaffna fort ruins at sunset',
    meta: 'The Ancient North · November 2024',
    rotate: '-2deg',
  },
]

function SectionRuleHeader({
  title,
  meta,
  className = '',
}: {
  title: string
  meta: string
  className?: string
}) {
  return (
    <header className={`journal-rule-header ${className}`}>
      <h2>{title}</h2>
      <span />
      <p>{meta}</p>
    </header>
  )
}

function Tape() {
  return <span className="journal-tape" aria-hidden="true" />
}

function PhotoFrame({
  src,
  alt,
  className = '',
  caption,
  dashed = false,
}: {
  src: string
  alt: string
  className?: string
  caption?: string
  dashed?: boolean
}) {
  return (
    <figure className={`journal-photo ${dashed ? 'journal-photo--dashed' : ''} ${className}`}>
      <div>
        <img src={src} alt={alt} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
      <Tape />
    </figure>
  )
}

function StoryTags({ tags }: { tags: string[] }) {
  return (
    <div className="journal-story-tags">
      <span>Filed Under</span>
      <div>
        {tags.map((tag) => (
          <a href="/journal" key={tag}>
            {tag}
          </a>
        ))}
      </div>
    </div>
  )
}

function ReadLink() {
  return (
    <a className="journal-read-link" href="/journal/the-sigiriya-dawn-ascent">
      Read Full Entry <ArrowIcon />
    </a>
  )
}

function StoryCard({
  number,
  region,
  weather,
  date,
  title,
  accent,
  lede,
  body,
  tags,
  tinted = false,
}: {
  number: string
  region: string
  weather: string
  date: string
  title: string
  accent?: string
  lede: string
  body: string
  tags: string[]
  tinted?: boolean
}) {
  return (
    <article className={`journal-story-card ${tinted ? 'journal-story-card--tinted' : ''}`}>
      <header>
        <p>{number} · {region}</p>
        <span />
        <p>{weather}</p>
      </header>
      <p className="journal-story-date">{date}</p>
      <h3>
        {title}
        {accent ? (
          <>
            <br />
            <em>{accent}</em>
          </>
        ) : null}
      </h3>
      <div className="journal-story-lede">
        <span />
        <p>{lede}</p>
      </div>
      <p className="journal-story-body">{body}</p>
      <footer>
        <StoryTags tags={tags} />
        <ReadLink />
      </footer>
    </article>
  )
}

function VignetteCard({ vignette }: { vignette: Vignette }) {
  return (
    <article className="journal-vignette" style={{ '--rotate': vignette.rotate } as CSSProperties}>
      {vignette.watermark ? <span className="journal-vignette-watermark">{vignette.watermark}</span> : null}
      <p className="journal-vignette-entry">{vignette.entry}</p>
      {vignette.image ? <img src={vignette.image} alt={vignette.alt} /> : null}
      <h3>{vignette.title}</h3>
      <p>{vignette.copy}</p>
      <small>{vignette.meta}</small>
    </article>
  )
}

function ArchiveCard({ region }: { region: ArchiveRegion }) {
  return (
    <article className="journal-archive-card">
      <span className="journal-archive-marker">{region.marker}</span>
      <h3>{region.title}</h3>
      <p className="journal-archive-places">{region.places}</p>
      <p>{region.description}</p>
    </article>
  )
}

export function JournalLandingPage() {
  return (
    <main className="journal-landing-page">
      <section className="journal-hero" aria-labelledby="journal-title">
        <div className="journal-hero-texture" />
        <p className="journal-watermark" aria-hidden="true">Lanka</p>
        <div className="journal-container journal-hero-inner">
          <div className="journal-title-block">
            <p>Vol. IV · The Living Archive · 2024</p>
            <h1 id="journal-title">
              The Island
              <br />
              <em>Notebook</em>
            </h1>
            <div>
              <span />
              <p>
                A curated collection of travel notes, sensory observations, and half-remembered
                conversations from across the island of Ceylon.
              </p>
            </div>
          </div>

          <div className="journal-scattered-layout">
            <PhotoFrame
              className="journal-hero-coast"
              src={journalAssets.coast}
              alt="Aerial view of Sri Lankan coastline with palms and turquoise ocean"
              caption="Southern Coast · Sri Lanka"
              dashed
            />
            <PhotoFrame
              className="journal-hero-galle"
              src={journalAssets.galleFort}
              alt="Ancient Galle Fort walls at dusk"
              caption="Galle Fort · Overcast"
            />
            <PhotoFrame
              className="journal-hero-tea"
              src={journalAssets.teaMist}
              alt="Mist rolling through Ella tea plantation"
              caption="Ella · Hill Country · 6°C"
            />
            <PhotoFrame
              className="journal-hero-spices"
              src={journalAssets.spices}
              alt="Close-up of Sri Lankan spices"
            />
            <PhotoFrame
              className="journal-hero-monk"
              src={journalAssets.monk}
              alt="Buddhist monk walking through ancient temple"
              dashed
            />

            <aside className="journal-pinned-note">
              <p>Field Note #047</p>
              <blockquote>
                "The cinnamon traders still wrap their bundles in banana leaf. Nothing has changed in
                four centuries."
              </blockquote>
              <cite>— Colombo Spice Quarter</cite>
            </aside>

            <aside className="journal-weather-note">
              <p>Weather Log</p>
              <strong>28°C · Humid · 74%</strong>
              <span>Colombo · 14 Jan</span>
            </aside>

            <span className="journal-handwritten journal-handwritten--hero">Kandy dawn</span>
          </div>
        </div>
      </section>

      <section className="journal-texture-rail" aria-label="Sensory archive">
        <div className="journal-rail-heading">
          <p>Sensory Archive · Micro-textures of Ceylon</p>
          <span />
          <p>Scroll</p>
        </div>
        <div className="journal-rail-scroll">
          {textures.map((texture) =>
            texture.image ? (
              <figure
                className={`journal-texture-item ${texture.wide ? 'journal-texture-item--wide' : ''}`}
                key={texture.label}
                style={{ '--rotate': texture.rotate ?? '0deg' } as CSSProperties}
              >
                <img src={texture.image} alt={texture.alt} />
                <figcaption>{texture.label}</figcaption>
              </figure>
            ) : (
              <blockquote className="journal-texture-quote" key={texture.label}>
                <p>"{texture.quote}"</p>
                <cite>{texture.cite}</cite>
              </blockquote>
            ),
          )}
        </div>
      </section>

      <section className="journal-stories">
        <div className="journal-container">
          <SectionRuleHeader title="Collected Stories" meta="Loose-leaf · Unordered by design" />

          <article className="journal-story-entry journal-story-entry--galle">
            <p className="journal-side-note">Galle · 6.053° N</p>
            <StoryCard
              number="Entry #012"
              region="Galle Province"
              weather="Overcast · 24°C"
              date="27 January 2024 · 14:22 hrs"
              title="A Whisper"
              accent="in Galle"
              lede="The Fort exhales in the afternoon. Not metaphorically — the sea wind finds its way through the Portuguese-built ramparts, through the Dutch-era archways, and deposits itself in the narrow lanes like a patient ghost."
              body="A woman was selling brooms outside a pale mint house that bore a brass plaque still reading 1874. Her daughter sat on the step reading what appeared to be a Tamil-translated Agatha Christie. Nobody found this unusual. That, perhaps, is the whole story."
              tags={['The South', 'Colonial Heritage', 'Slow Travel']}
            />
            <div className="journal-image-cluster journal-image-cluster--galle">
              <PhotoFrame src={journalAssets.galleAlley} alt="Narrow cobblestone alley in Galle Fort" caption="Church Street · Galle Fort" />
              <PhotoFrame src={journalAssets.lighthouse} alt="Dutch colonial lighthouse at Galle Fort" dashed />
              <span className="journal-handwritten">the colour of old coral</span>
            </div>
          </article>

          <article className="journal-story-entry journal-story-entry--monsoon">
            <div className="journal-image-cluster journal-image-cluster--monsoon">
              <PhotoFrame src={journalAssets.hillRain} alt="Misty hill country tea plantation during monsoon rain" caption="Ella Rock · 1,041m" />
              <PhotoFrame src={journalAssets.teaCup} alt="Steaming Sri Lankan tea cup near a rainy window" />
            </div>
            <StoryCard
              number="Entry #031"
              region="Hill Country"
              weather="Mist · 14°C"
              date="14 August 2024 · 07:05 hrs · Ella"
              title="Monsoon"
              accent="Reflections"
              lede="The rains arrive before the light does. By the time the first train passes through Demodara, the valley below Ella Rock is already brimming with fog the colour of unrinsed milk."
              body="There is a particular quality to monsoon silence. It is not quiet. The rain speaks in layers: roof-tin percussion, gutter trickle, the sustained bass of heavy drops on banana leaf. It is the only music that makes the hills feel owned by no one — and briefly, everyone."
              tags={['Hill Country', 'Monsoon Season', 'Solitude']}
              tinted
            />
          </article>

          <div className="journal-vignettes">
            {vignettes.map((vignette) => (
              <VignetteCard key={vignette.title} vignette={vignette} />
            ))}
          </div>
        </div>
      </section>

      <section className="journal-panorama">
        <img src={journalAssets.sigiriyaPanorama} alt="Panoramic view from Sigiriya rock fortress at sunrise" />
        <div>
          <p>Full Entry · Sigiriya · Feb 2024</p>
          <blockquote>
            "The King climbed this
            <br />
            rock to be closer to God.
            <br />
            I climbed it to understand why."
          </blockquote>
          <cite>— Journal Entry #055 · Lion Rock · 370m Ascent</cite>
        </div>
      </section>

      <section className="journal-archive">
        <div className="journal-container">
          <SectionRuleHeader title="The Archive" meta="55 entries · 4 volumes · Ongoing" />
          <div className="journal-archive-grid">
            {archiveRegions.map((region) => (
              <ArchiveCard key={region.title} region={region} />
            ))}
          </div>
        </div>
      </section>

      <section className="journal-dispatch">
        <div className="journal-container journal-dispatch-grid">
          <div className="journal-dispatch-copy">
            <p>The Monthly Dispatch</p>
            <h2>
              Receive entries as
              <br />
              <em>they are written</em>
            </h2>
            <p>
              A letter in your inbox, once a month. No news, no agenda — only a new journal entry from
              somewhere on the island, accompanied by a single photograph and a note on the weather.
            </p>
            <small>3,241 readers · No spam</small>
          </div>

          <form className="journal-newsletter" action="#" onSubmit={(event) => event.preventDefault()}>
            <p>Subscribe · It's free, and always will be</p>
            <label>
              Your Name
              <input type="text" placeholder="As written in your passport" />
            </label>
            <label>
              Email Address
              <input type="email" placeholder="Where we'll send your dispatch" />
            </label>
            <label>
              Region of Interest (Optional)
              <select defaultValue="all">
                <option value="all">All of the island</option>
                <option value="south">The South</option>
                <option value="hill-country">The Hill Country</option>
                <option value="coast">The Coast</option>
                <option value="ancient-north">The Ancient North</option>
              </select>
            </label>
            <button type="submit">Add My Name To The List</button>
            <small>Dispatched on the first Tuesday of each month · Unsubscribe with one click</small>
          </form>
        </div>
      </section>

      <a className="journal-bookmark-tab" href="#journal-title" aria-label="Navigate to journal top">
        <span>Navigate</span>
      </a>
    </main>
  )
}
