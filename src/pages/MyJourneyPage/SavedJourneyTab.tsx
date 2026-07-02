import { useEffect, useMemo, useState } from 'react'
import { JourneyConstellationLayer } from '../../components/Map/JourneyConstellationLayer'
import { JourneyRegionLayer } from '../../components/Map/JourneyRegionLayer'
import { RegionDestinationMarker } from '../../components/Map/RegionDestinationMarker'
import { TravelMap } from '../../components/Map/TravelMap'
import type { IllustrativeItinerary, SuggestedRhythmResult, TravelConnection } from '../../data/journey/types'
import { ILLUSTRATIVE_DISCLAIMER } from '../../data/journey/mockJourneyTypes'
import { journeyRegions } from '../../data/journeyRegions'
import { getSavedDestinationIds, getSavedRegionIds } from '../../journey/contextualRecommendations'
import { hasEnoughForRhythm } from '../../journey/emergingRhythm'
import { useJourney, type JourneyItem, type JourneyItemKind } from '../../journey/JourneyContext'
import {
  adaptSavedItemsToRepositoryInput,
  journeyRepository,
} from '../../services/journeyRepository'
import { IllustrativeItineraryPreview } from './IllustrativeItineraryPreview'
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
  const [rhythm, setRhythm] = useState<SuggestedRhythmResult | undefined>()
  const [itinerary, setItinerary] = useState<IllustrativeItinerary | undefined>()
  const [connections, setConnections] = useState<TravelConnection[]>([])

  const repositoryInput = useMemo(() => adaptSavedItemsToRepositoryInput(items), [items])

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
  const enoughForRhythm = hasEnoughForRhythm(items)

  useEffect(() => {
    let cancelled = false

    async function loadJourneyInsights() {
      if (items.length === 0) {
        setRhythm(undefined)
        setItinerary(undefined)
        setConnections([])
        return
      }

      const rhythmResult = await journeyRepository.getSuggestedRhythm(repositoryInput.savedItemIds, items)
      const itineraryResult = await journeyRepository.generateIllustrativeItinerary(
        {
          savedItemIds: repositoryInput.savedItemIds,
          regionIds: repositoryInput.regionIds,
          rhythmId: rhythmResult?.rhythmId,
        },
        items,
      )
      const connectionResult = await journeyRepository.getTravelConnectionsForDestinations(
        repositoryInput.destinationIds,
      )

      if (!cancelled) {
        setRhythm(rhythmResult)
        setItinerary(itineraryResult)
        setConnections(connectionResult)
      }
    }

    void loadJourneyInsights()

    return () => {
      cancelled = true
    }
  }, [items, repositoryInput])

  const destinationMarkers = useMemo(
    () =>
      journeyRegions.flatMap((region) =>
        region.destinations
          .filter((destination) => savedDestinationIds.includes(destination.id))
          .map((destination) => ({ region, destination })),
      ),
    [savedDestinationIds],
  )

  const constellationDestinationIds = useMemo(() => {
    if (repositoryInput.destinationIds.length >= 2) {
      return repositoryInput.destinationIds
    }
    return savedDestinationIds
  }, [repositoryInput.destinationIds, savedDestinationIds])

  const hasShareableJourney = enoughForRhythm && (rhythm !== undefined || itinerary !== undefined)

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
              Save a few places or encounters, and we will begin to trace how the island might unfold
              around them.
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
                {constellationDestinationIds.length >= 2 ? (
                  <JourneyConstellationLayer map={map} destinationIds={constellationDestinationIds} />
                ) : null}
              </>
            )}
          </TravelMap>
          {connections.length > 0 ? (
            <div className="saved-journey-tab__connections" aria-label="Illustrative transfer rhythms">
              <p className="saved-journey-tab__connections-label">Illustrative transfer rhythm</p>
              <ul>
                {connections.map((connection) => (
                  <li key={connection.id}>
                    <span>{connection.durationLabel}</span>
                    {connection.note ? <small>{connection.note}</small> : null}
                  </li>
                ))}
              </ul>
              <p className="saved-journey-tab__connections-note">{ILLUSTRATIVE_DISCLAIMER}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="saved-journey-tab__rhythm">
        <h2>A Possible Rhythm</h2>
        {enoughForRhythm && rhythm ? (
          <>
            <p className="saved-journey-tab__rhythm-sequence">{rhythm.sequence.join(' → ')}</p>
            <p>{rhythm.summary}</p>
            <p className="saved-journey-tab__rhythm-note">{ILLUSTRATIVE_DISCLAIMER}</p>
          </>
        ) : (
          <p>
            Save a few places or encounters, and we will begin to trace how the island might unfold
            around them.
          </p>
        )}
      </div>

      {itinerary ? <IllustrativeItineraryPreview itinerary={itinerary} /> : null}

      <div className="saved-journey-tab__handoff">
        <h2>When the outline feels right, we will take care of the rest.</h2>
        <p>
          Share a little more about how you like to travel, and our team can begin shaping the details
          with care.
        </p>
        <div className="saved-journey-tab__handoff-actions">
          <a className="saved-journey-tab__cta-primary" href="/concierge">
            Request a Private Consultation
          </a>
          {hasShareableJourney ? (
            <button className="saved-journey-tab__cta-secondary" type="button" disabled>
              Share Your Journey
            </button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
