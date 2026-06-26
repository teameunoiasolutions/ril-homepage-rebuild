import { DestinationMarker } from '../components/Map/DestinationMarker'
import { TravelMap } from '../components/Map/TravelMap'
import { destinations } from '../data/destinations'
import './TravelPlanner.css'

export function TravelPlanner() {
  return (
    <main className="travel-planner-page">
      <section className="travel-planner-page__intro">
        <div className="travel-planner-page__container">
          <p className="travel-planner-page__eyebrow">Destination Discovery</p>
          <h1>Discover Sri Lanka</h1>
          <p>
            A calm editorial map of the island's essential places, designed as the foundation for
            future themes, moods, routes, stays and journey intelligence.
          </p>
        </div>
      </section>

      <section className="travel-planner-page__map-section" aria-label="Sri Lanka destination discovery map">
        <div className="travel-planner-page__container travel-planner-page__container--map">
          <TravelMap>
            {(map) =>
              destinations.map((destination) => (
                <DestinationMarker key={destination.id} destination={destination} map={map} />
              ))
            }
          </TravelMap>
        </div>
      </section>
    </main>
  )
}
