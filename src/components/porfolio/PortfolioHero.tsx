import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const PortfolioHero = () => {
    return (
        <section className='px-8 space-y-8'>
            <div className='flex flex-row md:flex wrap justify-between items-center'>
                <div className='font-crimson-pro font-black text-primary text-[128px] leading-[120px]'>
                    <h1>Custom</h1>
                    <h1>Application</h1>
                </div>
                <div>
                    <Image
                        src={images.porfolioHero1}
                        alt='hero1'
                        width={599}
                        height={316}
                        className='w-full h-full object-center object-cover'
                    />
                </div>
            </div>
            <div className='flex flex-row md:flex-wrap justify-normal gap-8 items-center'>
                <div className=''>
                    <Image
                        src={images.porfolioHero2}
                        alt='hero1'
                        width={851}
                        height={350}
                        className='w-full h-full object-center object-cover'
                    />
                </div>
                <div className='space-y-4'>
                    <button className='px-4 py-2 font-medium font-poppins text-[#8B8354] bg-primary-2 rounded-full'>Healthcare</button>
                    <h1 className='font-crimson-pro font-semibold text-5xl text-primary'>MedHealth Clinics</h1>
                </div>
                <div className='space-y-3 font-normal font-poppins text-xl text-center'>
                    <p>Revolutionizing patient management and enhancing operational efficiency for MedHealth Clinics with a tailor-made CRM solution.</p>
                    <p>MedHealth Clinics is a leading healthcare provider in the UAE, offering comprehensive medical services across multiple locations. Their mission is to provide top-notch healthcare with a focus on patient satisfaction and operational excellence.</p>
                </div>
            </div>
        </section>
    )
}

export default PortfolioHero