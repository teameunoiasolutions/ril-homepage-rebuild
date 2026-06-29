import { useState } from 'react'
import './DiscoveryGuide.css'
import { experienceImages } from '../ExperiencesPage/images'
import { useJourney } from '../../journey/JourneyContext'
import { getDestinationDiscoveryWorlds, regionThemeFallbacks } from '../../journey/journeyTaxonomy'
import { sharedHeritageCollections, sharedHeritageWorld } from '../../journey/discoveryWorlds'

const images = {
  hero: experienceImages.sigiriyaDawn,
  southCoast: experienceImages.mirissaBoats,
  eastCoast: experienceImages.blueWhaleSunset,
  hillCountry: experienceImages.teaEstate,
  culturalTriangle: experienceImages.sigiriyaDawn,
  westCoast: experienceImages.galleFort,
} as const

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const

const regions = [
  {
    name: 'South Coast',
    bestMonths: 'November to April',
    activeMonths: [0, 1, 2, 3, 10, 11],
    image: images.southCoast,
    overview:
      'The southern coast is Sri Lanka in golden light: fortified towns, quiet coves, sea air, and villas held close to the palms.',
    landscapes: 'Golden beaches, colonial streets, cinnamon gardens, reef-fringed bays',
    themes: ['Ocean & Discovery', 'Wellness & Restoration', 'Culture & Human Connection', sharedHeritageWorld.name],
    destinations: ['Galle Fort', 'Weligama', 'Tangalle', 'Mirissa'],
    experiences: ['Private coastal residences', 'Whale-watching by season', 'Cinnamon estate visits', 'Sunset suppers by the sea'],
  },
  {
    name: 'East Coast',
    bestMonths: 'April to September',
    activeMonths: [3, 4, 5, 6, 7, 8],
    image: images.eastCoast,
    overview:
      'When the south grows quieter under rain, the east opens into warm ocean mornings, luminous bays, and a gentler coastal rhythm.',
    landscapes: 'Clear water, temple cliffs, broad beaches, sheltered bays',
    themes: ['Ocean & Discovery', 'Wildlife & Wilderness', 'Wellness & Restoration'],
    destinations: ['Trincomalee', 'Pasikuda', 'Nilaveli', 'Arugam Bay'],
    experiences: ['Blue whale migration', 'Slow beachfront escapes', 'Private boat mornings', 'Temple visits above the sea'],
  },
  {
    name: 'Hill Country',
    bestMonths: 'Year-round, with cooler mornings from December to February',
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    image: images.hillCountry,
    overview:
      'The highlands belong to mist, tea, and silence. Days begin cool, the landscape folds in layers, and movement becomes part of the pleasure.',
    landscapes: 'Tea estates, cloud forest, waterfalls, mountain railways',
    themes: ['Rail & Landscape', 'Wellness & Restoration', 'Culture & Human Connection', sharedHeritageWorld.name],
    destinations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Hatton', 'Nine Arches Bridge'],
    experiences: ['Tea estate residences', 'Scenic rail journeys', 'Garden lunches', 'Restorative highland retreats'],
  },
  {
    name: 'Cultural Triangle',
    bestMonths: 'May to October',
    activeMonths: [4, 5, 6, 7, 8, 9],
    image: images.culturalTriangle,
    overview:
      'In the island interior, ancient capitals rise from forest and rock. The experience is strongest when entered slowly, with scholarship and careful timing.',
    landscapes: 'Ancient cities, dry plains, jungle, sacred rock, lakes',
    themes: ['Heritage & Memory', 'Culture & Human Connection', 'Wildlife & Wilderness'],
    destinations: ['Sigiriya', 'Anuradhapura', 'Polonnaruwa', 'Dambulla'],
    experiences: ['Private dawn access', 'Resident scholar accompaniment', 'Temple rituals', 'Wildlife routes between ruins'],
  },
  {
    name: 'West Coast',
    bestMonths: 'November to March',
    activeMonths: [0, 1, 2, 10, 11],
    image: images.westCoast,
    overview:
      "The west is often the island's first welcome: Colombo's layered elegance, Negombo's lagoon light, and a coast shaped by arrival and return.",
    landscapes: 'Lagoon, colonial architecture, coastal villas, city gardens',
    themes: ['Culture & Human Connection', 'Ocean & Discovery', 'Wellness & Restoration', sharedHeritageWorld.name],
    destinations: ['Colombo', 'Colombo Fort', 'Galle Face Hotel', 'Negombo', 'Kalpitiya', 'Bentota'],
    experiences: ['Private city introductions', 'Lagoon-side arrivals', 'Architectural walks', 'Gentle first-night stays'],
  },
] as const

function isActiveMonth(activeMonths: readonly number[], monthIndex: number) {
  return activeMonths.includes(monthIndex)
}

function toJourneyId(kind: string, value: string) {
  return `${kind}:${value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

export function DiscoveryGuide() {
  const [activeRegionIndex, setActiveRegionIndex] = useState(0)
  const activeRegion = regions[activeRegionIndex]
  const { confirmRemoveItem, includeItem, isIncluded, pendingRemovalId, requestRemoveItem } = useJourney()

  function rememberRegion(region: (typeof regions)[number], index: number) {
    const id = toJourneyId('region', region.name)
    setActiveRegionIndex(index)

    if (isIncluded(id)) {
      return
    }

    includeItem({
      id,
      kind: 'region',
      label: region.name,
      detail: region.overview,
      source: 'Discover Sri Lanka',
    })
  }

  function rememberValue(kind: 'theme' | 'destination' | 'experience', value: string, regionName = activeRegion.name) {
    const id = toJourneyId(kind, value)
    const parentTheme =
      kind === 'experience'
        ? regionThemeFallbacks[regionName]
        : kind === 'destination'
          ? getDestinationDiscoveryWorlds(value)?.primary
          : undefined

    if (isIncluded(id)) {
      requestRemoveItem(id)
      return
    }

    if (parentTheme) {
      includeItem({
        id: toJourneyId('theme', parentTheme),
        kind: 'theme',
        label: parentTheme,
        detail: `The primary way ${regionName} begins to shape this journey.`,
        source: 'Discover Sri Lanka',
      })
    }

    if (kind === 'experience' && parentTheme && !isIncluded(toJourneyId('region', regionName))) {
      includeItem({
        id: toJourneyId('region', regionName),
        kind: 'region',
        label: regionName,
        detail: `A region shaping this ${parentTheme.toLowerCase()} thread.`,
        source: 'Discover Sri Lanka',
        parentTheme,
      })
    }

    includeItem({
      id,
      kind,
      label: value,
      detail: `Naturally aligned with ${regionName}.`,
      source: 'Discover Sri Lanka',
      parentTheme,
      parentRegion: kind === 'experience' || kind === 'destination' ? regionName : undefined,
    })
  }

  return (
    <main className="discovery-guide">
      <section className="guide-hero">
        <div className="guide-hero-copy">
          <span className="guide-eyebrow">Discover Sri Lanka</span>
          <h1>
            Sri Lanka is not one destination.
            <em>It is many islands within one.</em>
          </h1>
          <p>
            Each coastline, ancient plain, and highland valley moves to its own rhythm. Royale Isles Lanka plans every
            journey around these natural changes, so the island meets you at its most generous.
          </p>
        </div>
        <figure className="guide-hero-image">
          <img src={images.hero} alt="Sigiriya at dawn surrounded by forest" />
          <figcaption>
            <span>Cultural Triangle</span>
            <small>Dawn, forest, stone, and the quiet intelligence of timing.</small>
          </figcaption>
        </figure>
      </section>

      <section className="guide-themes guide-shared-heritage" aria-labelledby="shared-heritage-heading">
        <div className="guide-section-heading">
          <span>Discovery World VII</span>
          <h2 id="shared-heritage-heading">{sharedHeritageWorld.name}</h2>
          <p>{sharedHeritageWorld.description}</p>
        </div>
        <div className="guide-theme-grid">
          {sharedHeritageCollections.map((collection) => (
            <article key={collection.title}>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <ul>
                {collection.destinations.map((destination) => (
                  <li key={destination}>
                    <button
                      className={isIncluded(toJourneyId('destination', destination)) ? 'is-included' : undefined}
                      type="button"
                      onClick={() => rememberValue('destination', destination)}
                    >
                      {destination}
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-intro" aria-label="How to understand Sri Lanka">
        <p>
          To understand Sri Lanka is to understand movement: west to east, coast to hill country, monsoon to sunlight,
          ceremony to stillness. A journey here is most rewarding when it follows the island rather than forcing it.
        </p>
        <p>
          The question is rarely simply where to go. It is which region is ready to receive you, which landscape suits
          the season, and which story feels most like yours.
        </p>
      </section>

      <section className="guide-seasons" aria-labelledby="season-heading">
        <div className="guide-section-heading">
          <span>Seasonal Intelligence</span>
          <h2 id="season-heading">The Rhythm of the Island</h2>
          <p>
            Filled markers indicate the months when each region most naturally comes forward. Timing is considered not
            only around weather, but privacy, wildlife movement, sea conditions, festivals, and the softness of access.
          </p>
        </div>

        <div className="guide-season-table" role="table" aria-label="Sri Lanka seasonal region guide">
          <div className="guide-season-months" role="row">
            <span />
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
            <span />
          </div>
          {regions.map((region) => (
            <div
              className="guide-season-row"
              key={region.name}
              role="row"
            >
              <span className="guide-season-region">
                <strong>{region.name}</strong>
                <small>{region.overview}</small>
              </span>
              {months.map((month, index) => (
                <span
                  key={month}
                  className={isActiveMonth(region.activeMonths, index) ? 'is-active' : ''}
                  aria-label={`${month}: ${isActiveMonth(region.activeMonths, index) ? 'in season' : 'quieter season'}`}
                />
              ))}
              <span className="guide-season-best">{region.bestMonths}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="guide-regions" aria-label="Explore regions">
        <div className="guide-region-cards">
          {regions.map((region, index) => (
            <article
              className={`guide-region-card journey-selectable${index === activeRegionIndex ? ' is-active' : ''}${isIncluded(toJourneyId('region', region.name)) ? ' is-included' : ''}`}
              key={region.name}
            >
              <button type="button" onClick={() => rememberRegion(region, index)} aria-pressed={isIncluded(toJourneyId('region', region.name))}>
                <img src={region.image} alt={`${region.name} in Sri Lanka`} />
                <span className="guide-region-title">{region.name}</span>
              </button>
              {isIncluded(toJourneyId('region', region.name)) ? (
                <button
                  className="guide-region-status"
                  type="button"
                  aria-label={`Remove ${region.name} from your journey`}
                  onClick={() => confirmRemoveItem(toJourneyId('region', region.name))}
                >
                  <span aria-hidden="true" />
                  In Journey
                </button>
              ) : null}
            </article>
          ))}
        </div>

        <article className="guide-region-panel">
          <div>
            <span className="guide-eyebrow">Region In View</span>
            <h2>{activeRegion.name}</h2>
            <p>{activeRegion.overview}</p>
          </div>

          <dl className="guide-region-details">
            <div>
              <dt>Best months</dt>
              <dd>{activeRegion.bestMonths}</dd>
            </div>
            <div>
              <dt>Signature landscapes</dt>
              <dd>{activeRegion.landscapes}</dd>
            </div>
          </dl>

          <div className="guide-region-lists">
            <section>
              <h3>Journey themes</h3>
              <ul>
                {activeRegion.themes.map((theme) => (
                  <li key={theme}>
                    <button
                      className={isIncluded(toJourneyId('theme', theme)) ? 'is-included' : undefined}
                      type="button"
                      onClick={() => rememberValue('theme', theme)}
                    >
                      {theme}
                    </button>
                    {pendingRemovalId === toJourneyId('theme', theme) ? (
                      <button type="button" onClick={() => confirmRemoveItem(toJourneyId('theme', theme))}>
                        Remove from Journey
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Recommended destinations</h3>
              <ul>
                {activeRegion.destinations.map((destination) => (
                  <li key={destination}>
                    <button
                      className={isIncluded(toJourneyId('destination', destination)) ? 'is-included' : undefined}
                      type="button"
                      onClick={() => rememberValue('destination', destination)}
                    >
                      {destination}
                    </button>
                    {pendingRemovalId === toJourneyId('destination', destination) ? (
                      <button type="button" onClick={() => confirmRemoveItem(toJourneyId('destination', destination))}>
                        Remove from Journey
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Typical experiences</h3>
              <ul>
                {activeRegion.experiences.map((experience) => (
                  <li key={experience}>
                    <button
                      className={isIncluded(toJourneyId('experience', experience)) ? 'is-included' : undefined}
                      type="button"
                      onClick={() => rememberValue('experience', experience)}
                    >
                      {experience}
                    </button>
                    {pendingRemovalId === toJourneyId('experience', experience) ? (
                      <button type="button" onClick={() => confirmRemoveItem(toJourneyId('experience', experience))}>
                        Remove from Journey
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </section>

      <section className="guide-themes" aria-labelledby="themes-heading">
        <div className="guide-section-heading">
          <span>Journey Themes</span>
          <h2 id="themes-heading">How each region begins to suggest a way of travelling.</h2>
          <p>
            Before choosing an itinerary, it helps to recognise what each part of Sri Lanka naturally supports: ocean,
            heritage, wellness, wilderness, rail, landscape, and human connection.
          </p>
        </div>
        <div className="guide-theme-grid">
          {regions.map((region) => (
            <article key={region.name}>
              <h3>{region.name}</h3>
              <ul>
                {region.themes.map((theme) => (
                  <li key={theme}>
                    <button
                      className={isIncluded(toJourneyId('theme', theme)) ? 'is-included' : undefined}
                      type="button"
                      onClick={() => rememberValue('theme', theme, region.name)}
                    >
                      {theme}
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-closing">
        <span>Continue The Journey</span>
        <h2>
          Every region tells a different story.
          <em>The question is which story feels most like yours.</em>
        </h2>
        <p>
          When you are ready, continue to the journey expectations and begin shaping how you want Sri Lanka to feel:
          private, restorative, wild, cultural, celebratory, or quietly transformative.
        </p>
        <a href="/experiences">Explore Journey Themes</a>
      </section>
    </main>
  )
}
