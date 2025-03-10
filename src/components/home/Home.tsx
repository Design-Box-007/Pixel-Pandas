'use client'

import React from 'react'
import Hero from './Hero'
import HomeServices from './HomeServices'
import HomeAboutUs from './HomeAboutUs'
import PortfolioSection from './PortfolioSection'

const Home = () => {
    return (
        <section>
            <Hero />
            <HomeServices />
            <HomeAboutUs />
            <PortfolioSection />
        </section>
    )
}

export default Home