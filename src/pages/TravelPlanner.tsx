import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Map } from 'mapbox-gl'
import { JourneyDiscoveryPanel } from '../components/JourneyDiscoveryPanel/JourneyDiscoveryPanel'
import { JourneyRegionLayer } from '../components/Map/JourneyRegionLayer'
import { RegionDestinationMarker } from '../components/Map/RegionDestinationMarker'
import { TravelMap } from '../components/Map/TravelMap'
import {
  getJourneyRecommendation,
  getRecommendedRegions,
  journeyMoods,
  journeySeasons,
  journeyThemes,
  type JourneyConsultationSelection,
} from '../data/journeyConsultation'
import {
  journeyRegionCollections,
  type JourneyRegion,
  type RegionDestination,
} from '../data/journeyRegions'
import { experiencesById, type Experience } from '../data/experiences'
import { MapMode, mapModeContent } from '../data/mapModes'
import './TravelPlanner.css'

const mapModeOptions = [
  { mode: MapMode.DISCOVER, label: 'Discover' },
  { mode: MapMode.PERSONALISED, label: 'Personalised' },
] as const

const PlanningMode = {
  EXPLORE_FREELY: 'exploreFreely',
  GUIDED_DISCOVERY: 'guidedDiscovery',
} as const

type PlanningMode = (typeof PlanningMode)[keyof typeof PlanningMode]

const planningModeOptions = [
  {
    mode: PlanningMode.EXPLORE_FREELY,
    eyebrow: 'Traveller Type 1',
    title: 'Explore Freely',
    description:
      'Browse Sri Lanka at your own pace. Discover regions, destinations and experiences directly through the interactive map.',
    cta: 'Explore Freely',
  },
  {
    mode: PlanningMode.GUIDED_DISCOVERY,
    eyebrow: 'Traveller Type 2',
    title: 'Guided Discovery',
    description:
      "Answer a few thoughtful questions and we'll reveal the version of Sri Lanka that best matches your journey.",
    cta: 'Start Guided Discovery',
  },
] as const

const SRI_LANKA_OVERVIEW_BOUNDS: [[number, number], [number, number]] = [
  [79.62, 5.92],
  [81.84, 9.72],
]

export function TravelPlanner() {
  const [mapMode, setMapMode] = useState<MapMode>(MapMode.DISCOVER)
  const [planningMode, setPlanningMode] = useState<PlanningMode>(PlanningMode.EXPLORE_FREELY)
  const [selectedThemeId, setSelectedThemeId] = useState<string | undefined>()
  const [selectedMood, setSelectedMood] = useState<string | undefined>()
  const [selectedSeasonId, setSelectedSeasonId] = useState<string | undefined>()
  const [selectedRegionId, setSelectedRegionId] = useState<string | undefined>()
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | undefined>()
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | undefined>()
  const [journeyExperienceIds, setJourneyExperienceIds] = useState<string[]>([])
  const mapRef = useRef<Map | null>(null)

  const activeContent = mapModeContent[mapMode]
  const activeRegions = journeyRegionCollections[mapMode]
  const consultationSelection: JourneyConsultationSelection = useMemo(
    () => ({
      themeId: selectedThemeId,
      mood: selectedMood,
      seasonId: selectedSeasonId,
    }),
    [selectedMood, selectedSeasonId, selectedThemeId],
  )
  const selectedTheme = journeyThemes.find((theme) => theme.id === selectedThemeId)
  const selectedSeason = journeySeasons.find((season) => season.id === selectedSeasonId)
  const isGuidedDiscovery = planningMode === PlanningMode.GUIDED_DISCOVERY
  const isConsultationReady = Boolean(selectedThemeId && selectedMood && selectedSeasonId)
  const shouldShowMap = planningMode === PlanningMode.EXPLORE_FREELY || isConsultationReady
  const recommendedRegions = useMemo(
    () =>
      isGuidedDiscovery && isConsultationReady
        ? getRecommendedRegions(activeRegions, consultationSelection)
        : [],
    [activeRegions, consultationSelection, isConsultationReady, isGuidedDiscovery],
  )
  const journeyRecommendation = useMemo(
    () =>
      isGuidedDiscovery && isConsultationReady
        ? getJourneyRecommendation(activeRegions, consultationSelection)
        : undefined,
    [activeRegions, consultationSelection, isConsultationReady, isGuidedDiscovery],
  )
  const recommendedRegionIds = useMemo(
    () => recommendedRegions.map((region) => region.id),
    [recommendedRegions],
  )
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
    if (mapMode === MapMode.PERSONALISED) {
      setSelectedMood('Romantic')
    }

    setSelectedRegionId(undefined)
    setSelectedDestinationId(undefined)
    setSelectedExperienceId(undefined)
    mapRef.current?.fitBounds(SRI_LANKA_OVERVIEW_BOUNDS, {
      duration: 700,
      padding: 12,
    })
  }, [mapMode])

  useEffect(() => {
    if (!isGuidedDiscovery) {
      return
    }

    setSelectedRegionId(undefined)
    setSelectedDestinationId(undefined)
    setSelectedExperienceId(undefined)
    mapRef.current?.fitBounds(SRI_LANKA_OVERVIEW_BOUNDS, {
      duration: 700,
      padding: 12,
    })
  }, [isGuidedDiscovery, selectedMood, selectedSeasonId, selectedThemeId])

  useEffect(() => {
    setSelectedRegionId(undefined)
    setSelectedDestinationId(undefined)
    setSelectedExperienceId(undefined)
    mapRef.current?.fitBounds(SRI_LANKA_OVERVIEW_BOUNDS, {
      duration: 700,
      padding: 12,
    })
  }, [planningMode])

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

  const handleThemeSelect = useCallback((themeId: string) => {
    setSelectedThemeId(themeId)
  }, [])

  const handleMoodSelect = useCallback((mood: string) => {
    setSelectedMood(mood)
  }, [])

  const handleSeasonSelect = useCallback((seasonId: string) => {
    setSelectedSeasonId(seasonId)
  }, [])

  const handlePlanningModeSelect = useCallback((mode: PlanningMode) => {
    setPlanningMode(mode)
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

      <section className="travel-planner-page__planning-mode" aria-label="Choose how to begin planning">
        <div className="travel-planner-page__container">
          <div className="travel-planner-planning-mode">
            <div className="travel-planner-planning-mode__header">
              <p>Planning Style</p>
              <h2>How would you like to begin?</h2>
            </div>

            <div className="travel-planner-planning-mode__grid">
              {planningModeOptions.map((option) => (
                <button
                  key={option.mode}
                  className="travel-planner-planning-card"
                  type="button"
                  aria-pressed={planningMode === option.mode}
                  onClick={() => handlePlanningModeSelect(option.mode)}
                >
                  <span className="travel-planner-planning-card__eyebrow">{option.eyebrow}</span>
                  <span className="travel-planner-planning-card__title">{option.title}</span>
                  <span className="travel-planner-planning-card__description">{option.description}</span>
                  <span className="travel-planner-planning-card__cta">{option.cta}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isGuidedDiscovery ? (
        <section className="travel-planner-page__consultation" aria-label="Journey consultation questions">
          <div className="travel-planner-page__container">
            <div className="travel-planner-consultation">
              <div className="travel-planner-question travel-planner-question--active">
                <div className="travel-planner-question__header">
                  <p className="travel-planner-question__step">Question 2</p>
                  <h2>Discover Through</h2>
                  <p>Choose the story you want your journey to tell.</p>
                </div>

                <div className="travel-planner-theme-grid">
                  {journeyThemes.map((theme) => (
                    <button
                      key={theme.id}
                      className="travel-planner-theme-card"
                      type="button"
                      aria-pressed={selectedThemeId === theme.id}
                      onClick={() => handleThemeSelect(theme.id)}
                    >
                      <span className="travel-planner-theme-card__icon" aria-hidden="true">
                        {theme.iconLabel}
                      </span>
                      <span className="travel-planner-theme-card__title">{theme.title}</span>
                      <span className="travel-planner-theme-card__description">{theme.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedTheme ? (
                <div className="travel-planner-question travel-planner-question--revealed">
                  <div className="travel-planner-question__header">
                    <p className="travel-planner-question__step">Question 3</p>
                    <h2>Journey Mood</h2>
                    <p>Every journey has its own atmosphere. Choose the feeling you would like to experience.</p>
                  </div>

                  <div className="travel-planner-pill-list" role="list" aria-label="Choose journey mood">
                    {journeyMoods.map((mood) => (
                      <button
                        key={mood}
                        className="travel-planner-pill"
                        type="button"
                        aria-pressed={selectedMood === mood}
                        onClick={() => handleMoodSelect(mood)}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {selectedTheme && selectedMood ? (
                <div className="travel-planner-question travel-planner-question--revealed">
                  <div className="travel-planner-question__header">
                    <p className="travel-planner-question__step">Question 4</p>
                    <h2>Best Time to Visit</h2>
                    <p>Sri Lanka changes beautifully throughout the year.</p>
                  </div>

                  <div className="travel-planner-season-grid" role="list" aria-label="Choose best time to visit">
                    {journeySeasons.map((season) => (
                      <button
                        key={season.id}
                        className="travel-planner-season-card"
                        type="button"
                        aria-pressed={selectedSeasonId === season.id}
                        onClick={() => handleSeasonSelect(season.id)}
                      >
                        <span className="travel-planner-season-card__label">{season.label}</span>
                        <span className="travel-planner-season-card__description">{season.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {shouldShowMap ? (
        <section className="travel-planner-page__map-section" aria-label="Sri Lanka destination discovery map">
          <div className="travel-planner-page__container travel-planner-page__container--map">
            {isGuidedDiscovery && isConsultationReady ? (
              <div className="travel-planner-consultation-summary" aria-label="Current journey recommendation">
                <p>Current Consultation</p>
                <h2>
                  {selectedTheme?.title} / {selectedMood} / {selectedSeason?.label}
                </h2>
              </div>
            ) : null}
            <div className="travel-planner-page__discovery-grid">
              <TravelMap onMapReady={handleMapReady}>
                {(map) => (
                  <>
                    <JourneyRegionLayer
                      map={map}
                      recommendedRegionIds={recommendedRegionIds}
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
                journeyRecommendation={isGuidedDiscovery ? journeyRecommendation : undefined}
                consultationSelection={isGuidedDiscovery ? consultationSelection : undefined}
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
      ) : null}
    </main>
  )
}
