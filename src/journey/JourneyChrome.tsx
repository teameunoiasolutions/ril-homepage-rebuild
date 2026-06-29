import { useEffect, useMemo, useState } from 'react'
import { useJourney, type JourneyItemKind } from './JourneyContext'
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
        Everything you explore is quietly included in My Journey, where you can review and refine it whenever you are
        ready.
      </p>
    </aside>
  )
}

export function MyJourneyPage() {
  const { items, count, confirmRemoveItem } = useJourney()

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

  return (
    <main className="my-journey-page">
      <section className="my-journey-hero">
        <span>My Journey</span>
        <h1>
          The island is quietly
          <em>taking shape around you.</em>
        </h1>
        <p>
          As you explore Royale Isles Lanka, the places, themes, and experiences that catch your attention are held here
          for later conversation with your concierge.
        </p>
      </section>

      {count === 0 ? (
        <section className="my-journey-empty">
          <h2>Nothing has needed remembering yet.</h2>
          <p>
            Begin with Discover Sri Lanka or the experience collection. As something feels right, it will appear here
            without asking you to organise a thing.
          </p>
          <a href="/discover-sri-lanka">Discover Sri Lanka</a>
        </section>
      ) : (
        <section className="my-journey-groups" aria-label="Included journey details">
          {themeGroups.map((group) => (
            <article key={group.themeName}>
              <span>{kindLabels.theme}</span>
              <div>
                <section>
                  <div>
                    <h2>{group.themeName}</h2>
                    {group.themeItem?.detail ? <p>{group.themeItem.detail}</p> : null}
                    <small>
                      {group.regions.length > 0
                        ? `${group.regions.length} region${group.regions.length === 1 ? '' : 's'} held beneath this theme`
                        : group.destinations.length > 0
                          ? `${group.destinations.length} destination${group.destinations.length === 1 ? '' : 's'} held beneath this theme`
                        : group.experiences.length > 0
                          ? `${group.experiences.length} experience${group.experiences.length === 1 ? '' : 's'} held beneath this theme`
                          : 'Theme held for your journey'}
                    </small>
                  </div>
                  {group.themeItem ? (
                    <button type="button" onClick={() => confirmRemoveItem(group.themeItem.id)}>
                      Remove from Journey
                    </button>
                  ) : null}
                </section>

                {group.regions.map((region) => (
                  <div className="my-journey-region-group" key={region.regionName}>
                    <section className="my-journey-child-item">
                      <div>
                        <h2>{region.regionName}</h2>
                        {region.regionItem?.detail ? <p>{region.regionItem.detail}</p> : null}
                        {region.experiences.length > 0 ? (
                          <small>
                            {region.experiences.length} experience{region.experiences.length === 1 ? '' : 's'} held beneath
                            this region
                          </small>
                        ) : region.regionItem?.source ? (
                          <small>{region.regionItem.source}</small>
                        ) : null}
                      </div>
                      {region.regionItem ? (
                        <button type="button" onClick={() => confirmRemoveItem(region.regionItem.id)}>
                          Remove from Journey
                        </button>
                      ) : null}
                    </section>
                    {region.destinations.map((item) => (
                      <section className="my-journey-child-item" key={item.id}>
                        <div>
                          <h2>{item.label}</h2>
                          {item.detail ? <p>{item.detail}</p> : null}
                          {item.source ? <small>{item.source}</small> : null}
                        </div>
                        <button type="button" onClick={() => confirmRemoveItem(item.id)}>
                          Remove from Journey
                        </button>
                      </section>
                    ))}
                    {region.experiences.map((item) => (
                      <section className="my-journey-child-item" key={item.id}>
                        <div>
                          <h2>{item.label}</h2>
                          {item.detail ? <p>{item.detail}</p> : null}
                          {item.source ? <small>{item.source}</small> : null}
                        </div>
                        <button type="button" onClick={() => confirmRemoveItem(item.id)}>
                          Remove from Journey
                        </button>
                      </section>
                    ))}
                  </div>
                ))}

                {group.destinations.map((item) => (
                  <section className="my-journey-child-item" key={item.id}>
                    <div>
                      <h2>{item.label}</h2>
                      {item.detail ? <p>{item.detail}</p> : null}
                      {item.source ? <small>{item.source}</small> : null}
                    </div>
                    <button type="button" onClick={() => confirmRemoveItem(item.id)}>
                      Remove from Journey
                    </button>
                  </section>
                ))}

                {group.experiences.map((item) => (
                  <section className="my-journey-child-item" key={item.id}>
                    <div>
                      <h2>{item.label}</h2>
                      {item.detail ? <p>{item.detail}</p> : null}
                      {item.source ? <small>{item.source}</small> : null}
                    </div>
                    <button type="button" onClick={() => confirmRemoveItem(item.id)}>
                      Remove from Journey
                    </button>
                  </section>
                ))}
              </div>
            </article>
          ))}

          {Object.entries(otherGroupedItems).map(([kind, groupItems]) => (
            <article key={kind}>
              <span>{kindLabels[kind as JourneyItemKind]}</span>
              <div>
                {groupItems?.map((item) => (
                  <section key={item.id}>
                    <div>
                      <h2>{item.label}</h2>
                      {item.detail ? <p>{item.detail}</p> : null}
                      {item.source ? <small>{item.source}</small> : null}
                    </div>
                    <button type="button" onClick={() => confirmRemoveItem(item.id)}>
                      Remove from Journey
                    </button>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
