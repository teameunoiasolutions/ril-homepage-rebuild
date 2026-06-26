import blueWhaleSunset from '../assets/experiences/blue-whale-sunset.jpg'
import brassLamp from '../assets/experiences/brass-lamp.jpg'
import galleFort from '../assets/experiences/galle-fort.jpg'
import kandyanDancer from '../assets/experiences/kandyan-dancer.jpg'
import mirissaBoats from '../assets/experiences/mirissa-boats.jpg'
import monks from '../assets/experiences/monks.jpg'
import oilLamps from '../assets/experiences/oil-lamps.jpg'
import poolVilla from '../assets/experiences/pool-villa.jpg'
import sigiriyaDawn from '../assets/experiences/sigiriya-dawn.jpg'
import teaEstate from '../assets/experiences/tea-estate.jpg'

export type Destination = {
  id: string
  name: string
  province: string
  district: string
  /** Mapbox coordinates are stored as [longitude, latitude]. */
  coordinates: [number, number]
  heroImage: string
  shortDescription: string
  themes: string[]
  moods: string[]
  bestMonths: string[]
  experiences: string[]
  journalArticles: string[]
  hotels: string[]
}

export const destinations: Destination[] = [
  {
    id: 'colombo',
    name: 'Colombo',
    province: 'Western Province',
    district: 'Colombo',
    coordinates: [79.8612, 6.9271],
    heroImage: poolVilla,
    shortDescription: 'A coastal capital of garden villas, galleries, old clubs and modern island rhythm.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'galle',
    name: 'Galle',
    province: 'Southern Province',
    district: 'Galle',
    coordinates: [80.217, 6.0535],
    heroImage: galleFort,
    shortDescription: 'Fort walls, sea air and ochre lanes shaped by centuries of ocean trade.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'tangalle',
    name: 'Tangalle',
    province: 'Southern Province',
    district: 'Hambantota',
    coordinates: [80.7911, 6.024],
    heroImage: mirissaBoats,
    shortDescription: 'Quiet southern beaches, coconut shade and long, unhurried days beside the Indian Ocean.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'ella',
    name: 'Ella',
    province: 'Uva Province',
    district: 'Badulla',
    coordinates: [81.0463, 6.8667],
    heroImage: teaEstate,
    shortDescription: 'Mist-covered mountains, tea estates and slow railway journeys through the hills.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    province: 'Central Province',
    district: 'Nuwara Eliya',
    coordinates: [80.7829, 6.9497],
    heroImage: blueWhaleSunset,
    shortDescription: 'Cool highland air, tea country rituals and soft mornings above emerald valleys.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'kandy',
    name: 'Kandy',
    province: 'Central Province',
    district: 'Kandy',
    coordinates: [80.6337, 7.2906],
    heroImage: kandyanDancer,
    shortDescription: 'A sacred hill capital of temple bells, lake reflections and living Kandyan culture.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    province: 'Central Province',
    district: 'Matale',
    coordinates: [80.7603, 7.957],
    heroImage: sigiriyaDawn,
    shortDescription: 'Ancient gardens, jungle silence and a rock citadel rising from morning gold.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    province: 'North Central Province',
    district: 'Anuradhapura',
    coordinates: [80.4037, 8.3114],
    heroImage: oilLamps,
    shortDescription: 'Sacred stupas, moonstones and ancient reservoirs under wide northern skies.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    province: 'Eastern Province',
    district: 'Trincomalee',
    coordinates: [81.233, 8.5874],
    heroImage: monks,
    shortDescription: 'Eastern coves, temple cliffs and luminous blue water at the edge of the island.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
  {
    id: 'jaffna',
    name: 'Jaffna',
    province: 'Northern Province',
    district: 'Jaffna',
    coordinates: [80.0255, 9.6615],
    heroImage: brassLamp,
    shortDescription: 'Northern light, Tamil heritage, palmyrah landscapes and a culture of quiet resilience.',
    themes: [],
    moods: [],
    bestMonths: [],
    experiences: [],
    journalArticles: [],
    hotels: [],
  },
]
