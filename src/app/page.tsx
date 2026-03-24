import AboutSection from '@/components/Landing/AboutSection'
import Hero from '@/components/Landing/HeroSection'
import ShowcaseSection from '@/components/Landing/ShowcaseSection'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ShowcaseSection />
    </div>
  )
}

export default Homepage