import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { FaHandPointRight } from 'react-icons/fa'

const outcomeData: string[] = [
    "30% increase in appointment attendance due to automated reminders.",
    "20% reduction in administrative workload, allowing staff to focus more on patient care.",
    "Positive feedback from clinic staff on the ease of use of the mobile CRM.",
    "Increased patient satisfaction by 25% due to improved communication.",
    "Reduced scheduling errors by 40%.",
    "Enhanced data accuracy, reducing billing errors by 30%.",
]

const outcomeData2: string[] = [
    "Discovery & Planning: 2 months",
    "Design & Development: 6 months",
    "Testing & Launch: 2 months",
]

const PortfolioOutcome = () => {
    return (
        <section className="my-20 px-4 md:px-8 space-y-16 max-w-[1440px] mx-auto">
            <div className='flex flex-col md:flex-row gap-12 items-center'>
                <div className='space-y-8 flex-[2] w-full lg:w-1/2'>
                    <h1 className='font-bold text-[48px] md:text-[64px] leading-tight text-transparent bg-clip-text text-center md:text-left'
                        style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
                    >Outcome</h1>
                    <ul className='space-y-6'>
                        {outcomeData.map((data, index) => (
                            <li key={index} className='font-normal text-base md:text-xl flex items-center gap-4'>
                                <FaHandPointRight className='text-primary' />
                                <span>{data}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='relative flex-1 flex justify-center w-11/12 lg:w-1/2 min-h-[337px] h-[337px]'>
                    <div className='absolute top-10 right-0 border-4 rounded-3xl overflow-hidden border-white h-[250px] w-[250px] md:w-[332px]'>
                        <Image
                            src={images.projectOutcome1}
                            width={332}
                            height={332}
                            alt="outcome1"
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='absolute -bottom-12 left-12 border-4 rounded-3xl overflow-hidden border-white h-[172px] w-[172px] md:w-[229px]'>
                        <Image
                            src={images.projectOutcome2}
                            width={229}
                            height={229}
                            alt="outcome2"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <ul className='space-y-4 flex-1 text-center md:text-left'>
                    {outcomeData2.map((data, index) => (
                        <li key={index} className='text-white rounded-xl primary-gradient py-3 px-5 font-semibold font-poppins text-lg md:text-xl'>
                            {data}
                        </li>
                    ))}
                </ul>
                <p className='font-normal font-poppins text-lg md:text-xl text-primary text-center md:text-left max-w-[600px] px-4 md:px-10'>
                    We designed and developed a custom CRM platform that integrated with their existing systems, automated key processes, and provided a centralized platform for all patient-related activities.
                </p>
            </div>
        </section>
    )
}

export default PortfolioOutcome
