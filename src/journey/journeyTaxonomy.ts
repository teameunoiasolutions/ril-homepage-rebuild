import type { JourneyItem } from './JourneyContext'

export const regionThemeFallbacks: Record<string, string> = {
  'South Coast': 'Ocean & Discovery',
  'East Coast': 'Ocean & Discovery',
  'Hill Country': 'Rail & Landscape',
  'Cultural Triangle': 'Heritage & Memory',
  'West Coast': 'Culture & Human Connection',
}

export const regionSignatureExperiences: Record<string, string> = {
  'South Coast': "The Mirissa Fishermen's Dawn",
  'Hill Country': 'A Private Tea Estate, Locked Before Dawn',
  'Cultural Triangle': 'The Sigiriya Dawn Ascent',
}

export const experienceThemeFallbacks: Record<string, string> = {
  'The Sigiriya Dawn Ascent': 'Heritage & Memory',
  'A Private Tea Estate, Locked Before Dawn': 'Rail & Landscape',
  'The Leopard Research Circuit': 'Wildlife & Wilderness',
  "The Mirissa Fishermen's Dawn": 'Ocean & Discovery',
  'A Private Kandyan Dance Rehearsal': 'Culture & Human Connection',
  'The Deep-Water Hour': 'Ocean & Discovery',
  'Sacred Fire, Private Vantage': 'Culture & Human Connection',
  'The Ancient Grammar of Healing': 'Wellness & Restoration',
  'Sinharaja at First Light': 'Wellness & Restoration',
}

export const experienceRegionFallbacks: Record<string, string> = {
  'The Sigiriya Dawn Ascent': 'Cultural Triangle',
  'A Private Tea Estate, Locked Before Dawn': 'Hill Country',
  'The Leopard Research Circuit': 'South Coast',
  "The Mirissa Fishermen's Dawn": 'South Coast',
  'A Private Kandyan Dance Rehearsal': 'Hill Country',
  'The Deep-Water Hour': 'South Coast',
  'Sacred Fire, Private Vantage': 'Hill Country',
  'The Ancient Grammar of Healing': 'West Coast',
  'Sinharaja at First Light': 'West Coast',
}

const regionSignals: Array<{ region: string; signals: string[] }> = [
  {
    region: 'South Coast',
    signals: [
      'south coast',
      'southern coast',
      'southern province',
      'mirissa',
      'galle',
      'weligama',
      'tangalle',
      'yala',
    ],
  },
  {
    region: 'East Coast',
    signals: ['east coast', 'eastern coast', 'trincomalee', 'pasikuda', 'nilaveli', 'arugam bay'],
  },
  {
    region: 'Hill Country',
    signals: ['hill country', 'hill province', 'kandy', 'nuwara eliya', 'ella', 'hatton', 'tea country'],
  },
  {
    region: 'Cultural Triangle',
    signals: ['cultural triangle', 'central province', 'sigiriya', 'anuradhapura', 'polonnaruwa', 'dambulla'],
  },
  {
    region: 'West Coast',
    signals: ['west coast', 'western coast', 'colombo', 'negombo', 'kalpitiya', 'bentota', 'sinharaja'],
  },
]

function normalize(value: string) {
  return value.toLowerCase()
}

export function inferJourneyRegion(item: Pick<JourneyItem, 'kind' | 'label' | 'detail' | 'source' | 'parentRegion'>) {
  if (item.kind === 'experience' && experienceRegionFallbacks[item.label]) {
    return experienceRegionFallbacks[item.label]
  }

  if (item.parentRegion) {
    return item.parentRegion
  }

  if (item.kind === 'region') {
    return item.label
  }

  const searchableText = normalize([item.label, item.detail, item.source].filter(Boolean).join(' '))
  if (searchableText.includes('sinharaja')) {
    return 'West Coast'
  }

  return regionSignals.find(({ signals }) => signals.some((signal) => searchableText.includes(signal)))?.region
}

export function inferJourneyTheme(item: Pick<JourneyItem, 'kind' | 'label' | 'parentTheme'>) {
  if (item.kind === 'experience' && experienceThemeFallbacks[item.label]) {
    return experienceThemeFallbacks[item.label]
  }

  if (item.parentTheme) {
    return item.parentTheme
  }

  if (item.kind === 'theme') {
    return item.label
  }

  return undefined
}

export function normalizeJourneyItem(item: JourneyItem): JourneyItem {
  if (item.kind === 'experience') {
    return {
      ...item,
      parentTheme: inferJourneyTheme(item),
      parentRegion: inferJourneyRegion(item),
    }
  }

  if (item.kind === 'region' && item.parentTheme) {
    const isExperienceAncestor =
      item.detail?.startsWith('A region shaping') || item.detail?.startsWith('A regional setting')

    if (!isExperienceAncestor) {
      const directRegionItem = { ...item }
      delete directRegionItem.parentTheme
      return directRegionItem
    }
  }

  return item
}
