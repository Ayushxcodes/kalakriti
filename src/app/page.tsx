import AboutSection from '@/components/Landing/AboutSection'
import Hero from '@/components/Landing/HeroSection'
import ProgramsSection from '@/components/Landing/ProgramSection'
import ShowcaseSection from '@/components/Landing/ShowcaseSection'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ShowcaseSection />
      <ProgramsSection />
    </div>
  )
}

export default Homepage