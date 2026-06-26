import { useCallback, useEffect, useRef, useState } from 'react'
import type { Map } from 'mapbox-gl'
import { JourneyDiscoveryPanel } from '../components/JourneyDiscoveryPanel/JourneyDiscoveryPanel'
import { JourneyRegionLayer } from '../components/Map/JourneyRegionLayer'
import { RegionDestinationMarker } from '../components/Map/RegionDestinationMarker'
import { TravelMap } from '../components/Map/TravelMap'
import {
  journeyRegionCollections,
  type JourneyRegion,
  type RegionDestination,
} from '../data/journeyRegions'
import { experiencesById, type Experience } from '../data/experiences'
import { MapMode, mapModeContent } from '../data/mapModes'
import './TravelPlanner.css'

const mapModeOptions = [
  { mode: MapMode.GENERAL, label: 'General' },
  { mode: MapMode.PERSONALISED, label: 'Personalised' },
] as const

const SRI_LANKA_OVERVIEW_BOUNDS: [[number, number], [number, number]] = [
  [79.62, 5.92],
  [81.84, 9.72],
]

export function TravelPlanner() {
  const [mapMode, setMapMode] = useState<MapMode>(MapMode.GENERAL)
  const [selectedRegionId, setSelectedRegionId] = useState<string | undefined>()
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | undefined>()
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | undefined>()
  const [journeyExperienceIds, setJourneyExperienceIds] = useState<string[]>([])
  const mapRef = useRef<Map | null>(null)

  const activeContent = mapModeContent[mapMode]
  const activeRegions = journeyRegionCollections[mapMode]
  const selectedRegion = activeRegions.find((region) => region.id === selectedRegionId)
  const selectedDestination = selectedRegion?.destinations.find(
    (destination) => destination.id === selectedDestinationId,
  )
  const selectedDestinationExperiences =
    selectedDestination?.experienceIds
      .map((experienceId) => experiencesById[experienceId])
      .filter((experience): experience is Experience => Boolean(experience)) ?? []
  const selectedExperience = selectedExperienceId ? experiencesById[selectedExperienceId] : undefined

  useEffect(() => {
    setSelectedRegionId(undefined)
    setSelectedDestinationId(undefined)
    setSelectedExperienceId(undefined)
    mapRef.current?.fitBounds(SRI_LANKA_OVERVIEW_BOUNDS, {
      duration: 700,
      padding: 12,
    })
  }, [mapMode])

  const handleMapReady = useCallback((map: Map) => {
    mapRef.current = map
  }, [])

  const handleExploreRegions = useCallback(() => {
    setSelectedRegionId(undefined)
    setSelectedDestinationId(undefined)
    setSelectedExperienceId(undefined)
    mapRef.current?.fitBounds(SRI_LANKA_OVERVIEW_BOUNDS, {
      duration: 700,
      padding: 12,
    })
  }, [])

  const handleRegionSelect = useCallback((region: JourneyRegion) => {
    setSelectedRegionId(region.id)
    setSelectedDestinationId(undefined)
    setSelectedExperienceId(undefined)
    mapRef.current?.flyTo({
      center: region.center,
      curve: 1.22,
      duration: 950,
      essential: true,
      speed: 0.72,
      zoom: region.zoom,
    })
  }, [])

  const handleDestinationSelect = useCallback(
    (destination: RegionDestination) => {
      setSelectedDestinationId(destination.id)
      setSelectedExperienceId(undefined)
      mapRef.current?.flyTo({
        center: destination.coordinates,
        curve: 1.16,
        duration: 850,
        essential: true,
        speed: 0.78,
        zoom: Math.max(selectedRegion?.zoom ?? 9, 9.45),
      })
    },
    [selectedRegion?.zoom],
  )

  const handleExperienceSelect = useCallback((experience: Experience) => {
    setSelectedExperienceId(experience.id)
  }, [])

  const handleBackToDestination = useCallback(() => {
    setSelectedExperienceId(undefined)
  }, [])

  const handleAddExperienceToJourney = useCallback((experience: Experience) => {
    setJourneyExperienceIds((currentExperienceIds) =>
      currentExperienceIds.includes(experience.id)
        ? currentExperienceIds
        : [...currentExperienceIds, experience.id],
    )
  }, [])

  return (
    <main className="travel-planner-page">
      <section className="travel-planner-page__intro">
        <div className="travel-planner-page__container">
          <div key={mapMode} className="travel-planner-page__copy">
            <p className="travel-planner-page__eyebrow">{activeContent.eyebrow}</p>
            <h1>{activeContent.title}</h1>
            <p>{activeContent.description}</p>
            {activeContent.travellerIdentity && activeContent.mood ? (
              <dl className="travel-planner-page__profile" aria-label="Simulated traveller profile">
                <div>
                  <dt>Traveller Identity</dt>
                  <dd>{activeContent.travellerIdentity}</dd>
                </div>
                <div>
                  <dt>Current Mood</dt>
                  <dd>{activeContent.mood}</dd>
                </div>
              </dl>
            ) : null}
          </div>
        </div>
      </section>

      <section className="travel-planner-page__mode-section" aria-label="Choose map discovery mode">
        <div className="travel-planner-page__container">
          <div className="travel-planner-mode-control" role="tablist" aria-label="Journey planner map mode">
            {mapModeOptions.map(({ mode, label }) => (
              <button
                key={mode}
                className="travel-planner-mode-control__option"
                type="button"
                role="tab"
                aria-selected={mapMode === mode}
                onClick={() => setMapMode(mode)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="travel-planner-page__map-section" aria-label="Sri Lanka destination discovery map">
        <div className="travel-planner-page__container travel-planner-page__container--map">
          <div className="travel-planner-page__discovery-grid">
            <TravelMap onMapReady={handleMapReady}>
              {(map) => (
                <>
                  <JourneyRegionLayer
                    map={map}
                    regions={activeRegions}
                    selectedRegionId={selectedRegionId}
                    onRegionSelect={handleRegionSelect}
                  />
                  {selectedRegion
                    ? selectedRegion.destinations.map((destination) => (
                        <RegionDestinationMarker
                          key={`${selectedRegion.id}-${destination.id}`}
                          destination={destination}
                          map={map}
                          onSelect={handleDestinationSelect}
                        />
                      ))
                    : null}
                </>
              )}
            </TravelMap>

            <JourneyDiscoveryPanel
              addedExperienceIds={journeyExperienceIds}
              experiences={selectedDestinationExperiences}
              experienceLookup={experiencesById}
              selectedRegion={selectedRegion}
              selectedDestination={selectedDestination}
              selectedExperience={selectedExperience}
              onAddExperienceToJourney={handleAddExperienceToJourney}
              onBackToDestination={handleBackToDestination}
              onExperienceSelect={handleExperienceSelect}
              onExploreRegions={handleExploreRegions}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
