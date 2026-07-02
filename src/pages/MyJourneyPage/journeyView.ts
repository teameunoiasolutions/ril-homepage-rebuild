export type JourneyView = 'explore' | 'guided' | 'journey'

export function readJourneyView(defaultView: JourneyView = 'explore'): JourneyView {
  const params = new URLSearchParams(window.location.search)
  const view = params.get('view')
  if (view === 'explore' || view === 'guided' || view === 'journey') {
    return view
  }
  return defaultView
}

export function setJourneyView(view: JourneyView) {
  const url = new URL(window.location.href)
  url.searchParams.set('view', view)
  window.history.replaceState({}, '', url.toString())
}

export type MapFilterCategory = 'all' | 'worlds' | 'regions' | 'experiences' | 'saved'

export type MapFilterState = {
  category: MapFilterCategory
  secondaryId?: string
}
