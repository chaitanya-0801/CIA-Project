
import LandingPage from '../Component/Home/LandingPage'
import WhyChooseUs from '../Component/Home/WhyChooseUs'
import OurTeam from '../Component/Home/OurTeam'
import Contact from '../Component/Home/Contact'
import OurServices from '../Component/Home/OurServices'

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <WhyChooseUs />
      <OurServices />
      <OurTeam />

      <Contact />
    </div>
  )
}

export default HomePage
