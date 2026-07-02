import type { IllustrativeItinerary } from '../../data/journey/types'

type IllustrativeItineraryPreviewProps = {
  itinerary: IllustrativeItinerary
}

export function IllustrativeItineraryPreview({ itinerary }: IllustrativeItineraryPreviewProps) {
  return (
    <section className="illustrative-itinerary" aria-labelledby="illustrative-itinerary-heading">
      <h2 id="illustrative-itinerary-heading">An Illustrative Journey Outline</h2>
      <div className="illustrative-itinerary__segments">
        {itinerary.segments.map((segment) => (
          <article key={`${segment.dayLabel}-${segment.regionName}`} className="illustrative-itinerary__segment">
            <span className="illustrative-itinerary__days">{segment.dayLabel}</span>
            <h3>{segment.regionName}</h3>
            <p>{segment.summary}</p>
          </article>
        ))}
      </div>
      <p className="illustrative-itinerary__note">{itinerary.note}</p>
    </section>
  )
}
