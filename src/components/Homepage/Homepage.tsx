import { CommonQuestions } from '../CommonQuestions/CommonQuestions'
import { DiscoveryGuide } from '../DiscoveryGuide/DiscoveryGuide'
import { FeaturedExperiences } from '../FeaturedExperiences/FeaturedExperiences'
import { HomeHero } from '../HomeHero/HomeHero'
import { PersonalInvitation } from '../PersonalInvitation/PersonalInvitation'
import { TheJournal } from '../TheJournal/TheJournal'
import { TravellerDiscovery } from '../TravellerDiscovery/TravellerDiscovery'
import { TravellerTestimonials } from '../TravellerTestimonials/TravellerTestimonials'
import { WhySriLanka } from '../WhySriLanka/WhySriLanka'
import { WhyWeExist } from '../WhyWeExist/WhyWeExist'
import { SiteFooter } from '../SiteFooter/SiteFooter'

export function Homepage() {
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
