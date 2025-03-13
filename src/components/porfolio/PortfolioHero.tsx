import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const PortfolioHero = () => {
    return (
        <section className='px-4 md:px-8 space-y-8 max-w-[1440px] mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='font-crimson-pro font-black text-primary text-[48px] md:text-[96px] lg:text-[128px] leading-[1] text-center md:text-left'>
                    <h1>Custom</h1>
                    <h1>Application</h1>
                </div>
                <div className='w-full md:w-[50%]'>
                    <Image
                        src={images.porfolioHero1}
                        alt='hero1'
                        width={599}
                        height={316}
                        className='w-full h-auto object-center object-cover'
                    />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center md:justify-normal gap-8 items-center'>
                <div className='w-full md:w-[50%]'>
                    <Image
                        src={images.porfolioHero2}
                        alt='hero2'
                        width={851}
                        height={350}
                        className='w-full h-auto object-center object-cover'
                    />
                </div>
                <div className='space-y-4 text-center md:text-left'>
                    <button className='px-4 py-2 font-medium font-poppins text-[#8B8354] bg-primary-2 rounded-full'>Healthcare</button>
                    <h1 className='font-crimson-pro font-semibold text-3xl md:text-5xl text-primary'>MedHealth Clinics</h1>
                </div>
            </div>
            <div className='space-y-3 font-normal font-poppins text-lg md:text-xl text-center'>
                <p>Revolutionizing patient management and enhancing operational efficiency for MedHealth Clinics with a tailor-made CRM solution.</p>
                <p>MedHealth Clinics is a leading healthcare provider in the UAE, offering comprehensive medical services across multiple locations. Their mission is to provide top-notch healthcare with a focus on patient satisfaction and operational excellence.</p>
            </div>
        </section>
    )
}

export default PortfolioHero