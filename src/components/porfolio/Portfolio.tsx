import React from 'react'
import PortfolioHero from './PortfolioHero'
import ProjectOverview from './ProjectOverview'
import ProcessAndApporach from './ProcessAndApporach'
import PortfolioOutcome from './PortfolioOutcome'
import Testimonials from './Testimonials'

const Portfolio = () => {
  return (
    <section className='pt-[83px]'>
      <PortfolioHero />
      <ProjectOverview />
      <ProcessAndApporach />
      <PortfolioOutcome />
      <Testimonials />
    </section>
  )
}

export default Portfolio