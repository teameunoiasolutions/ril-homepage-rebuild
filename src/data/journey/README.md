# Journey Mock Data Layer

This folder contains **representative prototype data** for the My Journey experience. It is designed so Saku can replace the mock repository internals with real API calls without rewriting UI components.

## Files

| File | Purpose |
|------|---------|
| `types.ts` | TypeScript contracts for destinations, experiences, connections, rhythms, recommendations, and itineraries |
| `adapters.ts` | Maps existing catalogue data (`journeyRegions.ts`, `experiences.ts`) into journey-layer types |
| `mockTravelConnections.ts` | Illustrative transfer rhythms between destinations |
| `mockJourneyRhythms.ts` | Editorial journey rhythm concepts (not commercial packages) |
| `mockRecommendations.ts` | Relationship-based editorial recommendations |
| `mockJourneyTypes.ts` | Shared discovery-world references and disclaimer copy |
| `index.ts` | Barrel exports |

## Repository

UI components should import from `src/services/journeyRepository.ts`, **not** from mock arrays directly.

```ts
import { journeyRepository } from '../../services/journeyRepository'
```

### Methods used by the UI

| Method | Used by |
|--------|---------|
| `getDestinations()` | Future Explore tab data loading |
| `getExperiences()` | Future experience filters |
| `getExperiencesForDestination()` | Detail panels |
| `getRecommendations()` | Contextual recommendation enrichment |
| `getTravelConnection()` | Connection lookup |
| `getTravelConnectionsForDestinations()` | Saved Journey tab transfer notes |
| `getSuggestedRhythm()` | Saved Journey tab “A Possible Rhythm” |
| `getJourneyRhythms()` | Guided Discovery rhythm suggestions |
| `generateIllustrativeItinerary()` | Saved Journey tab itinerary preview |

## Data contracts

### `Destination`

Canonical journey destination shape. Adapters populate this from `journeyRegions.ts` for the seven primary editorial regions.

Fields the backend must eventually supply:

- `id`, `name`, `regionId`, `regionName`, `shortDescription`
- `themeIds`, `experienceIds`
- `coordinates` or `mapPosition` for map rendering
- `recommendedNights`, `journeyOrder` (optional planning metadata)

### `JourneyExperience`

Representative encounter shape. Adapters populate from `experiences.ts`.

All mock experiences are marked `isRepresentative: true`.

### `TravelConnection`

Illustrative only (`isIllustrative: true`). **Must be replaced** with verified routing data.

UI copy uses cautious language: “Illustrative transfer rhythm”, “Approximate journey timing”.

### `SuggestedJourneyRhythm`

Editorial planning concepts — **not confirmed commercial offerings**. Do not expose as bookable packages.

### `IllustrativeItinerary`

Rule-based day/segment outline. **Not an operational itinerary.** No hotels, guides, prices, or availability.

## Replacing mock data with API calls

1. Keep `JourneyRepository` interface in `src/services/journeyRepository.ts`.
2. Create `ApiJourneyRepository` implementing the same methods.
3. Swap the exported singleton:

```ts
export const journeyRepository: JourneyRepository = new ApiJourneyRepository()
```

4. Preserve `JourneyContext` as the single source of truth for **saved user selections** (localStorage today, authenticated API later).
5. Move verified operational fields (exact durations, availability, pricing, partners) into API responses — do not surface them from mock files.

## Illustrative vs verified fields

| Illustrative (replace before production) | Verified (backend responsibility) |
|----------------------------------------|-----------------------------------|
| `TravelConnection.durationLabel` | Real transfer timings |
| `TravelConnection.note` | Confirmed routing notes |
| `SuggestedJourneyRhythm` entries | Client-approved journey products |
| `IllustrativeItinerary` segments | Day-by-day operational itinerary |
| `isRepresentative` experiences | Confirmed encounters with partners |
| `mockRecommendations` reasons | Curated or algorithmic recommendations |

## Saved state

User saves flow through `JourneyContext` (`src/journey/JourneyContext.tsx`) and persist under:

- `royale-isles-my-journey`

Do not introduce parallel storage keys (e.g. separate experience ID lists).

## Content to replace with client data

When the client confirms offerings, replace:

1. Journey rhythm titles and destination sequences in `mockJourneyRhythms.ts`
2. Transfer connections in `mockTravelConnections.ts`
3. Recommendation relationships in `mockRecommendations.ts`
4. Region segment summaries in `journeyRepository.ts` (`REGION_SEGMENT_SUMMARIES`)
5. Adapter-sourced catalogue content in `journeyRegions.ts` and `experiences.ts`
