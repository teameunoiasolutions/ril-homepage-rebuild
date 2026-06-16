import { CommonQuestions } from './components/CommonQuestions/CommonQuestions'
import { DiscoveryGuide } from './components/DiscoveryGuide/DiscoveryGuide'
import { FeaturedExperiences } from './components/FeaturedExperiences/FeaturedExperiences'
import { HomeHero } from './components/HomeHero/HomeHero'
import { PersonalInvitation } from './components/PersonalInvitation/PersonalInvitation'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { TheJournal } from './components/TheJournal/TheJournal'
import { TravellerDiscovery } from './components/TravellerDiscovery/TravellerDiscovery'
import { TravellerTestimonials } from './components/TravellerTestimonials/TravellerTestimonials'
import { WhySriLanka } from './components/WhySriLanka/WhySriLanka'
import { WhyWeExist } from './components/WhyWeExist/WhyWeExist'

function App() {
  return (
    <>
      <HomeHero />
      <TravellerDiscovery />
      <WhyWeExist />
      <FeaturedExperiences />
      <WhySriLanka />
      <TheJournal />
      <TravellerTestimonials />
      <PersonalInvitation />
      <DiscoveryGuide />
      <CommonQuestions />
      <SiteFooter />
    </>
  )
}

export default App
