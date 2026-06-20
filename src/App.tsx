import { ExperienceDetailPage } from './components/ExperienceDetailPage/ExperienceDetailPage'
import { ExperiencesPage } from './components/ExperiencesPage/ExperiencesPage'
import { JournalArticlePage } from './components/JournalArticlePage/JournalArticlePage'
import { JournalLandingPage } from './components/JournalLandingPage/JournalLandingPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')

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
