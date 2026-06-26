import { type ReactNode, useEffect, useRef, useState } from 'react'
import mapboxgl, { type LngLatBoundsLike, type LngLatLike, type Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapControls } from './MapControls'
import './TravelMap.css'

const SRI_LANKA_CENTER: LngLatLike = [80.74, 7.62]
const SRI_LANKA_BOUNDS: LngLatBoundsLike = [
  [78.95, 5.45],
  [82.25, 10.15],
]

export type TravelMapProps = {
  children?: ReactNode | ((map: Map) => ReactNode)
  className?: string
  center?: LngLatLike
  maxBounds?: LngLatBoundsLike
  maxZoom?: number
  minZoom?: number
  onMapReady?: (map: Map) => void
  styleUrl?: string
  zoom?: number
}

export function TravelMap({
  children,
  className,
  center = SRI_LANKA_CENTER,
  maxBounds = SRI_LANKA_BOUNDS,
  maxZoom = 14,
  minZoom = 6.25,
  onMapReady,
  styleUrl = 'mapbox://styles/mapbox/streets-v12',
  zoom = 7.25,
}: TravelMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<Map | null>(null)
  const [mapInstance, setMapInstance] = useState<Map | null>(null)
  const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

  useEffect(() => {
    if (!containerRef.current || !accessToken || mapRef.current) {
      return
    }

    mapboxgl.accessToken = accessToken

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: styleUrl,
      center,
      zoom,
      minZoom,
      maxZoom,
      maxBounds,
    })

    mapRef.current = map

    const handleMapLoad = () => {
      setMapInstance(map)
      onMapReady?.(map)
    }

    if (map.loaded()) {
      handleMapLoad()
    } else {
      map.once('load', handleMapLoad)
    }

    return () => {
      map.off('load', handleMapLoad)
      map.remove()
      mapRef.current = null
      setMapInstance(null)
    }
  }, [accessToken, center, maxBounds, maxZoom, minZoom, onMapReady, styleUrl, zoom])

  if (!accessToken) {
    return (
      <div className={`travel-map travel-map--empty ${className ?? ''}`.trim()} role="status">
        Mapbox access token is not configured.
      </div>
    )
  }

  return (
    <div className={`travel-map ${className ?? ''}`.trim()}>
      <div ref={containerRef} className="travel-map__canvas" aria-label="Interactive map of Sri Lanka" />
      {mapInstance ? (
        <>
          <MapControls map={mapInstance} />
          {typeof children === 'function' ? children(mapInstance) : children}
        </>
      ) : null}
    </div>
  )
}
