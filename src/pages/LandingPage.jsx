import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import SocialProof from '../components/SocialProof.jsx'
import ProblemSolution from '../components/ProblemSolution.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import InteractiveDemo from '../components/InteractiveDemo.jsx'
import EarlyAccessCTA from '../components/EarlyAccessCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <FeatureGrid />
        <InteractiveDemo />
        <EarlyAccessCTA />
      </main>
      <Footer />
    </>
  )
}
