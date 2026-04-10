import React from 'react'
import Hero from '../components/home/Hero'
import SupportCards from '../components/home/SupportCards'
import HandicapSection from '../components/home/HandicapSection'
import ServiceSection from '../components/home/ServiceSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TestimonialSection from '../components/home/TestimonialSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SupportCards/>
      <HandicapSection/>
      <ServiceSection/>
      <WhyChooseUs/>
      <TestimonialSection/>
    </div>
  )
}

export default Home
