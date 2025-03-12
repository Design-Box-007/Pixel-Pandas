import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const ProjectOverview = () => {
    return (
        <section className='my-8 flex flex-row items-center '>
            <div className='w-1/2 relative'>
                <Image src={'/images/circle.svg'} alt='circle' width={630} height={630} />



                <Image src={images.projectOverview1} className='absolute top-0 right-0' alt='circle' width={277} height={178} />
                <Image src={images.projectOverview2} className='absolute top-1/2 -translate-y-1/2 left-0' alt='circle' width={458} height={346} />
                <Image src={images.projectOverview3} className='absolute -bottom-2 right-1/2 translate-x-1/2' alt='circle' width={243} height={243} />
            </div>
            <div className='w-1/2 p-8 space-y-5'>
                <button className='px-4 py-2 font-medium font-poppins text-[#8B8354] bg-primary-2 rounded-full'>Healthcare</button>
                <h2
                    style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
                    className='font-bold font-crimson-pro text-8xl text-transparent bg-clip-text'
                >
                    Project Overview</h2>
                <p className='font-poppins text-xl font-normal'>To develop a custom CRM platform that streamlines patient management, enhances communication, and improves data accuracy across multiple clinics and Develop a user-friendly CRM platform that allows healthcare providers to manage patient records, appointments, and communications efficiently on mobile devices.</p>
            </div>
        </section>
    )
}

export default ProjectOverview