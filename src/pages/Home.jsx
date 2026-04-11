import React from 'react'
import Hero from '../components/home/Hero'
import SupportCards from '../components/home/SupportCards'
import HandicapSection from '../components/home/HandicapSection'
import ServiceSection from '../components/home/ServiceSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TestimonialSection from '../components/home/TestimonialSection'
import CtaSection from '../components/home/CtaSection'
import StatsSection from '../components/home/StatsSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SupportCards/>
      <HandicapSection/>
      <ServiceSection/>
      <WhyChooseUs/>
      <StatsSection/>
      <TestimonialSection/>
      <CtaSection/>
    </div>
  )
}

export default Home
