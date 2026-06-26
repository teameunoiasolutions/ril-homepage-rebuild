import type { JourneyRegion, RegionDestination } from '../../data/journeyRegions'
import './JourneyDiscoveryPanel.css'

type JourneyDiscoveryPanelProps = {
  selectedDestination?: RegionDestination
  selectedRegion?: JourneyRegion
  onExploreRegions?: () => void
}

export function JourneyDiscoveryPanel({
  selectedDestination,
  selectedRegion,
  onExploreRegions,
}: JourneyDiscoveryPanelProps) {
  if (selectedDestination) {
    return (
      <aside className="journey-discovery-panel" aria-live="polite">
        <img
          className="journey-discovery-panel__image"
          src={selectedDestination.coverImage}
          alt={`${selectedDestination.title} journey preview`}
        />
        <div className="journey-discovery-panel__body">
          <p className="journey-discovery-panel__eyebrow">Destination</p>
          <h2>{selectedDestination.title}</h2>
          <p className="journey-discovery-panel__lead">{selectedDestination.description}</p>

          <div className="journey-discovery-panel__section">
            <h3>Best Time To Visit</h3>
            <p>{selectedDestination.bestTimeToVisit}</p>
          </div>

          <div className="journey-discovery-panel__section">
            <h3>Journey Mood</h3>
            <ul className="journey-discovery-panel__tag-list">
              {selectedDestination.journeyMood.map((mood) => (
                <li key={mood}>{mood}</li>
              ))}
            </ul>
          </div>

          <div className="journey-discovery-panel__section">
            <h3>Nearby Experiences</h3>
            <ul className="journey-discovery-panel__list">
              {selectedDestination.nearbyExperiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          </div>

          <div className="journey-discovery-panel__section">
            <h3>Travel Notes</h3>
            <p>{selectedDestination.travelNotes}</p>
          </div>

          <a className="journey-discovery-panel__link" href={`/travel-planner#${selectedDestination.id}`}>
            Explore Destination
          </a>
        </div>
      </aside>
    )
  }

  if (selectedRegion) {
    return (
      <aside className="journey-discovery-panel" aria-live="polite">
        <img
          className="journey-discovery-panel__image"
          src={selectedRegion.heroImage}
          alt={`${selectedRegion.title} region preview`}
        />
        <div className="journey-discovery-panel__body">
          <p className="journey-discovery-panel__eyebrow">Journey Region</p>
          <h2>{selectedRegion.title}</h2>
          <p className="journey-discovery-panel__lead">{selectedRegion.editorialIntroduction}</p>
          <p>{selectedRegion.summary}</p>

          <div className="journey-discovery-panel__section">
            <h3>Best For</h3>
            <ul className="journey-discovery-panel__tag-list">
              {selectedRegion.travellerMoods.map((mood) => (
                <li key={mood}>{mood}</li>
              ))}
            </ul>
          </div>

          <div className="journey-discovery-panel__section">
            <h3>Recommended Season</h3>
            <p>{selectedRegion.recommendedSeason}</p>
          </div>

          <div className="journey-discovery-panel__section">
            <h3>Journey Highlights</h3>
            <ul className="journey-discovery-panel__list">
              {selectedRegion.journeyHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="journey-discovery-panel__section">
            <h3>Destinations</h3>
            <ul className="journey-discovery-panel__list">
              {selectedRegion.destinations.map((destination) => (
                <li key={destination.id}>{destination.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    )
  }

  return (
    <aside className="journey-discovery-panel journey-discovery-panel--default" aria-live="polite">
      <div className="journey-discovery-panel__body">
        <p className="journey-discovery-panel__eyebrow">Begin With Atmosphere</p>
        <h2>Discover Sri Lanka</h2>
        <p className="journey-discovery-panel__lead">Choose a region to begin discovering the island.</p>
        <p>
          Luxury travel is rarely about finding a destination. It begins by discovering the
          atmosphere that feels right for your journey.
        </p>
        <button className="journey-discovery-panel__button" type="button" onClick={onExploreRegions}>
          Explore Regions
        </button>
      </div>
    </aside>
  )
}
