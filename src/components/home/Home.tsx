'use client'

import React from 'react'
import Hero from './Hero'
import { ServiceHeader, ServicesTabs } from './HomeServices'
import HomeAboutUs from './HomeAboutUs'
import PortfolioSection from './PortfolioSection'


const Home = () => {
    return (
        <section>
            <div className="z-10 sticky top-[83px] flex items-center h-svh lg:h-screen bg-background">
                <Hero />
            </div>
            <div id={"about"} className="z-20 sticky top-0 flex items-center h-svh lg:h-screen bg-background ">
                <ServiceHeader />
            </div>
            <div id={'#services'} className="z-20 sticky top-0 flex items-center h-svh lg:h-screen bg-background">
                <ServicesTabs />
            </div>
            <div id={"#projects"} className="z-30 sticky top-0 flex items-center h-svh lg:h-screen bg-background">
                <HomeAboutUs />
            </div>
            <div className="z-40 sticky top-0 flex items-center h-svh lg:h-screen bg-background">
                <PortfolioSection />
            </div>

        </section>
    )
}

export default Home
