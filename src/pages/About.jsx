import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutInfo from '../components/About/AboutInfo'
import VisionMission from '../components/About/VisionMission'
import FoundationJourney from '../components/About/FoundationJourney'
import CoreServices from '../components/About/CoreServices'
import FounderMessage from '../components/About/FounderMessage'
import AboutCta from '../components/About/AboutCta'
import Commitee from '../components/About/Commitee'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutInfo/>
      <Commitee/>
      <VisionMission/>
      <FoundationJourney/>
      <CoreServices/>
      <FounderMessage/>
      <AboutCta/>
    </div>
  )
}

export default About
