import { useMemo } from 'react'
import { JourneyRegionLayer } from '../../components/Map/JourneyRegionLayer'
import { RegionDestinationMarker } from '../../components/Map/RegionDestinationMarker'
import { TravelMap } from '../../components/Map/TravelMap'
import { journeyRegions } from '../../data/journeyRegions'
import { getSavedDestinationIds, getSavedRegionIds } from '../../journey/contextualRecommendations'
import { getEmergingRhythm, hasEnoughForRhythm } from '../../journey/emergingRhythm'
import { useJourney, type JourneyItem, type JourneyItemKind } from '../../journey/JourneyContext'
import { getTabPanelId, getTabId } from './JourneyTabs'

const kindLabels: Record<JourneyItemKind, string> = {
  theme: 'Discovery Worlds',
  'discovery-world': 'Discovery Worlds',
  region: 'Regions',
  destination: 'Destinations',
  mood: 'Travel rhythm',
  accommodation: 'Accommodation',
  experience: 'Experiences',
  season: 'Season',
  interest: 'Interests',
}

const kindOrder: JourneyItemKind[] = [
  'theme',
  'discovery-world',
  'region',
  'destination',
  'experience',
  'mood',
  'season',
  'accommodation',
  'interest',
]

export function SavedJourneyTab() {
  const { items, confirmRemoveItem } = useJourney()

  const groupedItems = useMemo(() => {
    const groups = new globalThis.Map<JourneyItemKind, JourneyItem[]>()
    items.forEach((item) => {
      const kind = item.kind === 'theme' ? 'theme' : item.kind
      groups.set(kind, [...(groups.get(kind) ?? []), item])
    })
    return kindOrder
      .filter((kind) => groups.has(kind))
      .map((kind) => ({ kind, items: groups.get(kind) ?? [] }))
  }, [items])

  const savedRegionIds = useMemo(() => getSavedRegionIds(items, journeyRegions), [items])
  const savedDestinationIds = useMemo(() => getSavedDestinationIds(items, journeyRegions), [items])
  const rhythm = useMemo(() => getEmergingRhythm(items), [items])
  const enoughForRhythm = hasEnoughForRhythm(items)

  const destinationMarkers = useMemo(
    () =>
      journeyRegions.flatMap((region) =>
        region.destinations
          .filter((destination) => savedDestinationIds.includes(destination.id))
          .map((destination) => ({ region, destination })),
      ),
    [savedDestinationIds],
  )

  return (
    <section
      className="my-journey-tab-panel saved-journey-tab"
      role="tabpanel"
      id={getTabPanelId('journey')}
      aria-labelledby={getTabId('journey')}
    >
      <div className="saved-journey-tab__summary">
        <h2>Your Journey So Far</h2>
        <p>A private collection of places, experiences, and directions that have stayed with you.</p>

        {items.length === 0 ? (
          <div className="saved-journey-tab__empty">
            <p>
              Save a few places or encounters, and we will begin to trace how the island might unfold around them.
            </p>
            <a href="/my-journey?view=explore">Explore the Island</a>
          </div>
        ) : (
          <div className="saved-journey-tab__groups">
            {groupedItems.map(({ kind, items: groupItems }) => (
              <section key={kind} className="saved-journey-tab__group">
                <h3>{kindLabels[kind]}</h3>
                <ul>
                  {groupItems.map((item) => (
                    <li key={item.id} className="saved-journey-tab__item">
                      <div>
                        <strong>{item.label}</strong>
                        {item.detail ? <p>{item.detail}</p> : null}
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.label} from My Journey`}
                        onClick={() => confirmRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 ? (
        <div className="saved-journey-tab__map">
          <TravelMap>
            {(map) => (
              <>
                <JourneyRegionLayer
                  map={map}
                  recommendedRegionIds={savedRegionIds}
                  regions={journeyRegions.filter((region) => savedRegionIds.includes(region.id))}
                  onRegionSelect={() => {
                    /* saved journey overview */
                  }}
                />
                {destinationMarkers.map(({ region, destination }) => (
                  <RegionDestinationMarker
                    key={`${region.id}-${destination.id}`}
                    destination={destination}
                    map={map}
                    onSelect={() => {
                      /* saved journey overview */
                    }}
                  />
                ))}
              </>
            )}
          </TravelMap>
        </div>
      ) : null}

      <div className="saved-journey-tab__rhythm">
        <h2>A Possible Rhythm</h2>
        {enoughForRhythm && rhythm ? (
          <>
            <p className="saved-journey-tab__rhythm-sequence">{rhythm.sequence.join(' → ')}</p>
            <p>{rhythm.summary}</p>
          </>
        ) : (
          <p>
            Save a few places or encounters, and we will begin to trace how the island might unfold around them.
          </p>
        )}
      </div>

      <div className="saved-journey-tab__handoff">
        <h2>When the outline feels right, we will take care of the rest.</h2>
        <p>
          Share a little more about how you like to travel, and our team can begin shaping the details with care.
        </p>
        <a className="saved-journey-tab__cta-primary" href="/concierge">
          Request a Private Consultation
        </a>
      </div>
    </section>
  )
}
