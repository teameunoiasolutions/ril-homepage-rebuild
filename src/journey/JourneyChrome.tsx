import { useEffect, useMemo, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react'
import { useJourney, type JourneyItem, type JourneyItemKind } from './JourneyContext'
import { getJourneyRecommendations, type JourneyRecommendation } from './journeyRecommendations'
import { inferJourneyRegion, inferJourneyTheme } from './journeyTaxonomy'
import './JourneyChrome.css'

const kindLabels: Record<JourneyItemKind, string> = {
  theme: 'Themes',
  'discovery-world': 'Discovery Worlds',
  region: 'Regions',
  destination: 'Destinations',
  mood: 'Moods',
  accommodation: 'Accommodation',
  experience: 'Experiences',
  season: 'Seasons',
  interest: 'Interests',
}

export function JourneyIncludedPill() {
  return <span className="journey-included-pill">Included in Your Journey</span>
}

export function JourneyHelperMessage() {
  const { count, hasSeenHelper, dismissHelper } = useJourney()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (count === 0 || hasSeenHelper) {
      return undefined
    }

    setIsVisible(true)
    const hideTimer = window.setTimeout(() => {
      setIsVisible(false)
      dismissHelper()
    }, 5200)

    return () => window.clearTimeout(hideTimer)
  }, [count, dismissHelper, hasSeenHelper])

  if (!isVisible) {
    return null
  }

  return (
    <aside className="journey-helper-message" aria-live="polite">
      <span>My Journey</span>
      <p>
        Journey updated. Your Expectations are now held in My Journey, ready for concierge refinement.
      </p>
    </aside>
  )
}

export function MyJourneyPage() {
  const { items, count, confirmRemoveItem, includeItem } = useJourney()
  const [selectedContextId, setSelectedContextId] = useState<string | null>(null)
  const selectedContextItem = selectedContextId ? items.find((item) => item.id === selectedContextId) : undefined

  const { otherGroupedItems, themeGroups } = useMemo(() => {
    const themeItems = items.filter((item) => item.kind === 'theme')
    const themedRegions = items
      .filter((item) => item.kind === 'region' && item.parentTheme)
      .map((item) => ({
        ...item,
        parentTheme: item.parentTheme,
      }))
    const themedExperiences = items
      .filter((item) => item.kind === 'experience' && inferJourneyTheme(item))
      .map((item) => ({
        ...item,
        parentTheme: inferJourneyTheme(item),
        parentRegion: inferJourneyRegion(item),
      }))
    const themedDestinations = items
      .filter((item) => item.kind === 'destination' && inferJourneyTheme(item))
      .map((item) => ({
        ...item,
        parentTheme: inferJourneyTheme(item),
        parentRegion: inferJourneyRegion(item),
      }))
    const themeNames = Array.from(
      new Set(
        [
          ...themeItems.map((item) => item.label),
          ...themedRegions.map((item) => item.parentTheme),
          ...themedExperiences.map((item) => item.parentTheme),
          ...themedDestinations.map((item) => item.parentTheme),
        ].filter(Boolean),
      ),
    ) as string[]

    const groups = themeNames.map((themeName) => {
      const regions = themedRegions.filter((item) => item.parentTheme === themeName)
      const experiences = themedExperiences.filter((item) => item.parentTheme === themeName)
      const destinations = themedDestinations.filter((item) => item.parentTheme === themeName)
      const regionNames = Array.from(
        new Set(
          [
            ...regions.map((item) => item.label),
            ...destinations.map((item) => item.parentRegion),
            ...experiences.map((item) => item.parentRegion),
          ].filter(Boolean),
        ),
      ) as string[]

      return {
        themeName,
        themeItem: themeItems.find((item) => item.label === themeName),
        regions: regionNames.map((regionName) => ({
          regionName,
          regionItem: regions.find((item) => item.label === regionName),
          destinations: destinations.filter((item) => item.parentRegion === regionName),
          experiences: experiences.filter((item) => item.parentRegion === regionName),
        })),
        destinations: destinations.filter((item) => !item.parentRegion),
        experiences: experiences.filter((item) => !item.parentRegion),
      }
    })
    const nestedRegionNames = new Set(
      groups.flatMap((group) => group.regions.map((region) => region.regionName)),
    )

    const groupedOthers = items
      .filter(
        (item) =>
          item.kind !== 'theme' &&
          !(item.kind === 'region' && nestedRegionNames.has(item.label)) &&
          !(item.kind === 'region' && item.parentTheme) &&
          !(item.kind === 'destination' && inferJourneyTheme(item)) &&
          !(item.kind === 'experience' && inferJourneyTheme(item)),
      )
      .reduce<Partial<Record<JourneyItemKind, typeof items>>>((groups, item) => {
        groups[item.kind] = [...(groups[item.kind] ?? []), item]
        return groups
      }, {})

    return {
      themeGroups: groups,
      otherGroupedItems: groupedOthers,
    }
  }, [items])
  const { contextItem, contextRegion, recommendations } = useMemo(
    () => getJourneyRecommendations(items, selectedContextItem),
    [items, selectedContextItem],
  )
  const activeContextId = selectedContextItem?.id ?? contextItem?.id

  function toJourneyId(kind: string, value: string) {
    return `${kind}:${value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  }

  function selectJourneyItem(item: JourneyItem) {
    setSelectedContextId(item.id)
  }

  function handleJourneyItemKeyDown(event: KeyboardEvent<HTMLElement>, item: JourneyItem) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    event.preventDefault()
    selectJourneyItem(item)
  }

  function removeJourneyItem(event: MouseEvent<HTMLButtonElement>, id: string) {
    event.stopPropagation()
    confirmRemoveItem(id)
    if (selectedContextId === id) {
      setSelectedContextId(null)
    }
  }

  function includeRecommendation(recommendation: JourneyRecommendation) {
    includeItem(recommendation.item)
    setSelectedContextId(recommendation.item.id)
  }

  function createContextItem(kind: JourneyItemKind, label: string, parentTheme?: string): JourneyItem {
    return {
      id: toJourneyId(kind, label),
      kind,
      label,
      parentTheme,
    }
  }

  function getJourneyItemClassName(item: JourneyItem, extraClassName = '') {
    return `my-journey-item${extraClassName ? ` ${extraClassName}` : ''}${activeContextId === item.id ? ' is-selected' : ''}`
  }

  function renderJourneyItem(
    item: JourneyItem,
    {
      className,
      meta,
      removable = true,
    }: {
      className?: string
      meta?: ReactNode
      removable?: boolean
    } = {},
  ) {
    return (
      <section
        className={getJourneyItemClassName(item, className)}
        role="button"
        tabIndex={0}
        aria-pressed={activeContextId === item.id}
        onClick={() => selectJourneyItem(item)}
        onKeyDown={(event) => handleJourneyItemKeyDown(event, item)}
      >
        <div>
          <h2>{item.label}</h2>
          {item.detail ? <p>{item.detail}</p> : null}
          {meta ?? (item.source ? <small>{item.source}</small> : null)}
        </div>
        {removable ? (
          <button type="button" onClick={(event) => removeJourneyItem(event, item.id)}>
            Remove
          </button>
        ) : null}
      </section>
    )
  }

  return (
    <main className="my-journey-page">
      <section className="my-journey-hero">
        <span>My Journey</span>
        <h1>
          The island is quietly
          <em>taking shape around you.</em>
        </h1>
        <p>
          Once you begin setting Expectations, the places, themes, and private moments that feel relevant are held here
          for later conversation with your concierge.
        </p>
      </section>

      {count === 0 ? (
        <section className="my-journey-empty">
          <h2>A remarkable journey is still waiting for its first signal.</h2>
          <p>
            Wander through Sri Lanka at your own pace. When an expectation begins to feel personal,
            Royale Isles Lanka will quietly gather the shape of your journey here.
          </p>
          <a href="/expectations">Begin Expectations</a>
        </section>
      ) : (
        <div className="my-journey-workspace">
          <aside className="my-journey-recommendations" aria-label="Recommended places for your journey">
            <span>Suggested Next</span>
            <h2>{contextRegion ? `Near ${contextRegion}` : 'Places That May Fit'}</h2>
            <p>
              {contextItem
                ? `Based on ${contextItem.label}, these are the next places and encounters worth considering.`
                : 'As your journey takes shape, we will suggest places that naturally follow your interests.'}
            </p>
            {recommendations.length > 0 ? (
              <div className="my-journey-recommendation-list">
                {recommendations.map((recommendation) => (
                  <button
                    className="my-journey-recommendation-card"
                    key={recommendation.id}
                    type="button"
                    onClick={() => includeRecommendation(recommendation)}
                  >
                    <span>{recommendation.kind === 'destination' ? 'Destination' : 'Experience'}</span>
                    <h3>{recommendation.label}</h3>
                    <p>{recommendation.detail}</p>
                    <small>{recommendation.reason}</small>
                  </button>
                ))}
              </div>
            ) : (
              <div className="my-journey-recommendation-empty">
                <p>
                  Choose a saved region, destination, or experience to unlock more precise recommendations.
                </p>
                <a href="/expectations">Refine Expectations</a>
              </div>
            )}
          </aside>

          <section className="my-journey-groups" aria-label="Included journey details">
          {themeGroups.map((group) => (
            <article key={group.themeName}>
              <span>{kindLabels.theme}</span>
              <div>
                {renderJourneyItem(group.themeItem ?? createContextItem('theme', group.themeName), {
                  removable: Boolean(group.themeItem),
                  meta: (
                    <small>
                      {group.regions.length > 0
                        ? `${group.regions.length} region${group.regions.length === 1 ? '' : 's'} held beneath this theme`
                        : group.destinations.length > 0
                          ? `${group.destinations.length} destination${group.destinations.length === 1 ? '' : 's'} held beneath this theme`
                        : group.experiences.length > 0
                          ? `${group.experiences.length} experience${group.experiences.length === 1 ? '' : 's'} held beneath this theme`
                          : 'Theme held for your journey'}
                    </small>
                  ),
                })}

                {group.regions.map((region) => (
                  <div className="my-journey-region-group" key={region.regionName}>
                    {renderJourneyItem(region.regionItem ?? createContextItem('region', region.regionName, group.themeName), {
                      className: 'my-journey-child-item',
                      removable: Boolean(region.regionItem),
                      meta:
                        region.destinations.length + region.experiences.length > 0 ? (
                          <small>
                            {region.destinations.length + region.experiences.length} place
                            {region.destinations.length + region.experiences.length === 1 ? '' : 's'} held beneath
                            this region
                          </small>
                        ) : region.regionItem?.source ? (
                          <small>{region.regionItem.source}</small>
                        ) : null,
                    })}
                    {region.destinations.map((item) => (
                      <div key={item.id}>{renderJourneyItem(item, { className: 'my-journey-child-item' })}</div>
                    ))}
                    {region.experiences.map((item) => (
                      <div key={item.id}>{renderJourneyItem(item, { className: 'my-journey-child-item' })}</div>
                    ))}
                  </div>
                ))}

                {group.destinations.map((item) => (
                  <div key={item.id}>{renderJourneyItem(item, { className: 'my-journey-child-item' })}</div>
                ))}

                {group.experiences.map((item) => (
                  <div key={item.id}>{renderJourneyItem(item, { className: 'my-journey-child-item' })}</div>
                ))}
              </div>
            </article>
          ))}

          {Object.entries(otherGroupedItems).map(([kind, groupItems]) => (
            <article key={kind}>
              <span>{kindLabels[kind as JourneyItemKind]}</span>
              <div>
                {groupItems?.map((item) => (
                  <div key={item.id}>{renderJourneyItem(item)}</div>
                ))}
              </div>
            </article>
          ))}
          </section>
        </div>
      )}
    </main>
  )
}
