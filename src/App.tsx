import { ExperienceDetailPage } from './components/ExperienceDetailPage/ExperienceDetailPage'
import { ExperiencesPage } from './components/ExperiencesPage/ExperiencesPage'
import { Homepage } from './components/Homepage/Homepage'
import { JournalArticlePage } from './components/JournalArticlePage/JournalArticlePage'
import { JournalLandingPage } from './components/JournalLandingPage/JournalLandingPage'

function App() {
  const rawPath = window.location.pathname.replace(/\/$/, '')
  const path = rawPath === '' ? '/' : rawPath

  if (path === '/') {
    return <Homepage />
  }

  if (path === '/experiences') {
    return <ExperiencesPage />
  }

  if (path === '/experiences/the-sigiriya-dawn-ascent') {
    return <ExperienceDetailPage />
  }

  if (path === '/journal') {
    return <JournalLandingPage />
  }

  if (path === '/journal/the-sigiriya-dawn-ascent') {
    return <JournalArticlePage />
  }

  return <ExperiencesPage />
}

export default App
