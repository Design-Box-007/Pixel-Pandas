'use client'

import React from 'react'
import Hero from './Hero'
import Image from 'next/image'
import { images } from '@/data/assets'
import HomeServices from './HomeServices'
import HomeAboutUs from './HomeAboutUs'

const Home = () => {
    return (
        <section className='relative'>
            <Hero />
            <HomeServices/>
            <HomeAboutUs/>F

            <Image
                src={images.Bamboo}
                alt='bamboo'
                width={221}
                height={394}
                className='fixed left-0 bottom-0'
            />
            <Image
                src={images.Bamboo}
                alt='bamboo'
                width={221}
                height={394}
                className='fixed -right-16 -bottom-96 scale-x-[-1]'
            />
        </section>
    )
}

export default Home