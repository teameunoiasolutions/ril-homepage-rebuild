import type { ReactNode } from 'react'
import { AboutPage } from './components/AboutPage/AboutPage'
import { ConciergeDesk } from './components/ConciergeDesk/ConciergeDesk'
import { ExperienceDetailPage } from './components/ExperienceDetailPage/ExperienceDetailPage'
import { ExperiencesPage } from './components/ExperiencesPage/ExperiencesPage'
import { Homepage } from './components/Homepage/Homepage'
import { JournalArticlePage } from './components/JournalArticlePage/JournalArticlePage'
import { JournalLandingPage } from './components/JournalLandingPage/JournalLandingPage'
import { PageLayout } from './components/PageLayout/PageLayout'
import { TravelPreparationPage } from './components/TravelPreparationPage/TravelPreparationPage'
import { TravellerDiscovery } from './components/TravellerDiscovery/TravellerDiscovery'

function App() {
  const rawPath = window.location.pathname.replace(/\/$/, '')
  const path = rawPath === '' ? '/' : rawPath

  const renderPage = (page: ReactNode) => <PageLayout>{page}</PageLayout>

  if (path === '/') {
    return renderPage(<Homepage />)
  }

  if (path === '/concierge') {
    return <ConciergeDesk />
  }

  if (path === '/experiences') {
    return renderPage(<ExperiencesPage />)
  }

  if (path === '/experiences/the-sigiriya-dawn-ascent') {
    return renderPage(<ExperienceDetailPage />)
  }

  if (path === '/journal') {
    return renderPage(<JournalLandingPage />)
  }

  if (path === '/journal/the-sigiriya-dawn-ascent') {
    return renderPage(<JournalArticlePage />)
  }

  if (path === '/about') {
    return renderPage(<AboutPage />)
  }

  if (path === '/travel-preparation') {
    return renderPage(<TravelPreparationPage />)
  }

  // if (path === '/traveller-discovery') {
  //   return renderPage(<TravellerDiscovery />)
  // }

  return renderPage(<Homepage />)
}

export default App
