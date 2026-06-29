import { useState } from 'react'
import './DiscoveryGuide.css'
import { experienceImages } from '../ExperiencesPage/images'

const images = {
  hero: experienceImages.sigiriyaDawn,
  westCoast: experienceImages.poolVilla,
  southCoast: experienceImages.mirissaBoats,
  wildSouth: experienceImages.leopardFeature,
  eastCoast: experienceImages.blueWhaleSunset,
  hillCountry: experienceImages.teaEstate,
  culturalTriangle: experienceImages.sigiriyaDawn,
  north: experienceImages.brassLamp,
} as const

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const

const regions = [
  {
    name: 'West Coast & Colombo',
    journeyRegion: 'West Coast',
    bestMonths: 'November to March, with Colombo rewarding year-round',
    activeMonths: [0, 1, 2, 10, 11],
    image: images.westCoast,
    overview:
      "The island's first welcome is rarely just an arrival. Colombo's garden houses, galleries, old clubs, and lagoon light create a soft landing into Sri Lankan life.",
    landscapes: 'Coastal capital, lagoon, garden villas, galleries, old institutions',
    destinations: ['Colombo', 'Colombo Fort', 'Galle Face Hotel', 'Negombo'],
    experiences: ['Private city introductions', 'Gallery and garden-house visits', 'Lagoon-side arrivals'],
    editorialNote:
      'Best for travellers who want the island to begin quietly: a hosted arrival, a first dinner with context, and enough time to settle before moving on.',
  },
  {
    name: 'South Coast',
    journeyRegion: 'South Coast',
    bestMonths: 'November to April',
    activeMonths: [0, 1, 2, 3, 10, 11],
    image: images.southCoast,
    overview:
      'The southern coast is Sri Lanka in golden light: fortified towns, quiet coves, sea air, and villas held close to the palms.',
    landscapes: 'Golden beaches, colonial streets, cinnamon gardens, reef-fringed bays',
    destinations: ['Galle Fort', 'Weligama', 'Tangalle', 'Mirissa'],
    experiences: ['Private coastal residences', 'Cinnamon estate visits', 'Sunset suppers by the sea'],
    editorialNote:
      'Best when the coast is treated as atmosphere rather than beach time: ramparts at golden hour, cinnamon gardens, private residences, and dinners that unfold without spectacle.',
  },
  {
    name: 'Wild South',
    journeyRegion: 'South Coast',
    bestMonths: 'February to September for dry-zone wilderness',
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8],
    image: images.wildSouth,
    overview:
      'Beyond the softer coast, the south becomes elemental: dry-zone forest, leopard country, birdlife, and a shoreline that feels closer to wilderness than resort.',
    landscapes: 'Leopard country, dry-zone forest, wild coast, wetlands, birdlife',
    destinations: ['Yala', 'Bundala', 'Rekawa', 'Tangalle'],
    experiences: ['Quiet leopard tracking', 'Naturalist-led field mornings', 'Wild coastal retreats'],
    editorialNote:
      'Best for travellers who want nature held with patience: fewer promises, better timing, and guides who understand when not to speak.',
  },
  {
    name: 'East Coast',
    journeyRegion: 'East Coast',
    bestMonths: 'April to September',
    activeMonths: [3, 4, 5, 6, 7, 8],
    image: images.eastCoast,
    overview:
      'When the south grows quieter under rain, the east opens into warm ocean mornings, luminous bays, and a gentler coastal rhythm.',
    landscapes: 'Clear water, temple cliffs, broad beaches, sheltered bays',
    destinations: ['Trincomalee', 'Pasikuda', 'Nilaveli', 'Arugam Bay'],
    experiences: ['Blue whale migration', 'Private boat mornings', 'Temple visits above the sea'],
    editorialNote:
      'Best for summer journeys, return visitors, and families who want warmth, water, and a less obvious coastal rhythm.',
  },
  {
    name: 'Hill Country',
    journeyRegion: 'Hill Country',
    bestMonths: 'Year-round, with cooler mornings from December to February',
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    image: images.hillCountry,
    overview:
      'The highlands belong to mist, tea, and silence. Days begin cool, the landscape folds in layers, and movement becomes part of the pleasure.',
    landscapes: 'Tea estates, cloud forest, waterfalls, mountain railways',
    destinations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Hatton', 'Nine Arches Bridge'],
    experiences: ['Tea estate residences', 'Scenic rail journeys', 'Restorative highland retreats'],
    editorialNote:
      'Best for guests who value stillness: misted verandas, tea country residences, rail journeys, gardens, and a cooler pace between coast and ancient city.',
  },
  {
    name: 'Cultural Triangle',
    journeyRegion: 'Cultural Triangle',
    bestMonths: 'May to October',
    activeMonths: [4, 5, 6, 7, 8, 9],
    image: images.culturalTriangle,
    overview:
      'In the island interior, ancient capitals rise from forest and rock. The experience is strongest when entered slowly, with scholarship and careful timing.',
    landscapes: 'Ancient cities, dry plains, jungle, sacred rock, lakes',
    destinations: ['Sigiriya', 'Anuradhapura', 'Polonnaruwa', 'Dambulla'],
    experiences: ['Private dawn access', 'Resident scholar accompaniment', 'Temple rituals'],
    editorialNote:
      'Best when approached slowly: early light, resident scholarship, protected timing, and enough silence for ancient places to retain their dignity.',
  },
  {
    name: 'The North',
    journeyRegion: 'Cultural Triangle',
    bestMonths: 'January to September',
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    image: images.north,
    overview:
      'The north is a different register of Sri Lanka: Tamil culture, palmyrah landscapes, temple colour, long causeways, and a luminous sense of distance.',
    landscapes: 'Tamil heritage, palmyrah country, temple towns, causeways, northern light',
    destinations: ['Jaffna', 'Nallur', 'Delft Island', 'Point Pedro'],
    experiences: ['Hosted cultural introductions', 'Temple mornings', 'Northern island drives'],
    editorialNote:
      'Best for curious, culturally engaged travellers who do not need the obvious version of Sri Lanka and are willing to be rewarded slowly.',
  },
] as const

function isActiveMonth(activeMonths: readonly number[], monthIndex: number) {
  return activeMonths.includes(monthIndex)
}

export function DiscoveryGuide() {
  const [activeRegionIndex, setActiveRegionIndex] = useState(0)
  const activeRegion = regions[activeRegionIndex]

  function exploreRegion(index: number) {
    setActiveRegionIndex(index)
  }

  return (
    <main className="discovery-guide">
      <section className="guide-hero">
        <div className="guide-hero-copy">
          <span className="guide-eyebrow">Discover Sri Lanka</span>
          <h1>
            One Island.
            <em>Many Rhythms.</em>
          </h1>
          <p>
            From mist-covered tea country and ancient kingdoms to quiet coastlines, rainforests, and timeless rail
            journeys, Sri Lanka reveals a different character with every region you explore.
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

      <section className="guide-regions" aria-label="Explore regions">
        <div className="guide-region-cards">
          {regions.map((region, index) => (
            <article
              className={`guide-region-card${index === activeRegionIndex ? ' is-active' : ''}`}
              key={region.name}
            >
              <button type="button" onClick={() => exploreRegion(index)} aria-pressed={index === activeRegionIndex}>
                <img src={region.image} alt={`${region.name} in Sri Lanka`} />
                <span className="guide-region-title">{region.name}</span>
              </button>
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

          <div className="guide-region-editorial">
            <p>{activeRegion.editorialNote}</p>
            <div className="guide-region-glimpses" aria-label={`${activeRegion.name} journey signals`}>
              <section>
                <h3>Places to begin</h3>
                <ul>
                  {activeRegion.destinations.slice(0, 3).map((destination) => (
                    <li key={destination}>
                      <span>{destination}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Private moments</h3>
                <ul>
                  {activeRegion.experiences.slice(0, 3).map((experience) => (
                    <li key={experience}>
                      <span>{experience}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </article>
      </section>

      <section className="guide-seasons" aria-labelledby="season-heading">
        <div className="guide-section-heading">
          <span>Seasonal Intelligence</span>
          <h2 id="season-heading">The Rhythm of the Island</h2>
          <p>
            Sri Lanka is not one climate, but a set of overlapping moods. The markers below show when each region most
            naturally comes forward, not only because of weather, but because of privacy, wildlife movement, sea
            conditions, festivals, and the softness of access.
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

      <section className="guide-map-bridge" aria-labelledby="map-bridge-heading">
        <div>
          <span className="guide-eyebrow">From Reading To Exploring</span>
          <h2 id="map-bridge-heading">Once the island begins to make sense, the map becomes more than a map.</h2>
          <p>
            Regions, seasons, and private moments sit close together in Sri Lanka. The interactive map is where these
            relationships become visible: coast beside wilderness, tea country near sacred cities, and routes shaped by
            rhythm rather than distance alone.
          </p>
        </div>
      </section>

      <section className="guide-closing">
        <span>The Island Has Introduced Itself</span>
        <h2>
          What remains is not a decision.
          <em>It is a feeling beginning to take shape.</em>
        </h2>
        <p>
          Some travellers remember Sri Lanka in the hush of tea country before the day warms. Others carry home the
          colour of temple flowers, the salt of a southern evening, or the long quiet between ancient stones. You have
          met the island in its regions, seasons, and rhythms. The next chapter is simply to notice which of those
          impressions stays with you.
        </p>
        <a href="/expectations">Begin Shaping Your Journey</a>
      </section>
    </main>
  )
}
