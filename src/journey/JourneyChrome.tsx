import { useEffect, useState } from 'react'
import { useJourney } from './JourneyContext'
import './JourneyChrome.css'

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
