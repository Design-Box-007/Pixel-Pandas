import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const ProjectOverview = () => {
    return (
        <section className='my-8 flex flex-col lg:flex-row items-center px-4 md:px-8'>
            <div className='w-full lg:w-1/2 relative flex justify-center'>
                <Image src={'/images/circle.svg'} alt='circle' width={630} height={630} className='w-3/4 md:w-2/3 lg:w-auto' />
                <Image src={images.projectOverview1} className='absolute top-0 right-0 w-1/3 md:w-1/4' alt='overview1' width={277} height={178} />
                <Image src={images.projectOverview2} className='absolute top-1/2 -translate-y-1/2 left-0 w-1/2 md:w-2/3' alt='overview2' width={458} height={346} />
                <Image src={images.projectOverview3} className='absolute -bottom-2 right-1/2 translate-x-1/2 w-1/4 md:w-1/3' alt='overview3' width={243} height={243} />
            </div>
            <div className='w-full lg:w-1/2 p-4 md:p-8 space-y-5 text-center lg:text-left'>
                <button className='px-4 py-2 font-medium font-poppins text-[#8B8354] bg-primary-2 rounded-full'>Healthcare</button>
                <h2
                    style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
                    className='font-bold font-crimson-pro text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text'
                >
                    Project Overview
                </h2>
                <p className='font-poppins text-lg md:text-xl font-normal'>
                    To develop a custom CRM platform that streamlines patient management, enhances communication, and improves data accuracy across multiple clinics. Develop a user-friendly CRM platform that allows healthcare providers to manage patient records, appointments, and communications efficiently on mobile devices.
                </p>
            </div>
        </section>
    )
}

export default ProjectOverview