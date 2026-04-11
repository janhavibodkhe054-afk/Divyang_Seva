import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutInfo from '../components/About/AboutInfo'
import VisionMission from '../components/About/VisionMission'
import FoundationJourney from '../components/About/FoundationJourney'
import CoreServices from '../components/About/CoreServices'
import FounderMessage from '../components/About/FounderMessage'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutInfo/>
      <VisionMission/>
      <FoundationJourney/>
      <CoreServices/>
      <FounderMessage/>
    </div>
  )
}

export default About
