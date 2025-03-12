import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { FaHandPointRight, FaIcicles } from 'react-icons/fa'

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
        <section className="my-35 px-8 space-y-20">
            <div className='flex flex-row'>
                <div className='space-y-10'>
                    <h1 className='font-bold text-[64px] leading-[2] text-transparent bg-clip-text'
                        style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
                    >OutCome</h1>
                    <ul className='space-y-8'>
                        {outcomeData.map((data: string, index: number) => (
                            <li key={index} className='font-normal text-xl flex flex-row justify-start items-center gap-4'>
                                <FaHandPointRight />
                                <span>{data}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='relative flex-1'>
                    <div className='absolute top-20 right-0 border-4 rounded-3xl overflow-hidden border-white'>
                        <Image
                            src={images.projectOutcome1}
                            width={332}
                            height={332}
                            alt="outcome1"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='absolute bottom-0 left-0 border-4 rounded-3xl overflow-hidden border-white'>
                        <Image
                            src={images.projectOutcome2}
                            width={229}
                            height={229}
                            alt="outcome2"
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <ul className='space-y-6 flex-1'>
                    {
                        outcomeData2.map((data: string, index) => (
                            <li key={index} className='text-white rounded-xl primary-gradient py-4 px-6 font-semibold font-poppins text-xl'>
                                {data}
                            </li>
                        ))
                    }
                </ul>
                <p className='font-normal font-poppins text-xl p-10 text-primary flex-1'>
                    {
                        "We designed and developed a custom CRM platform that integrated with their existing systems, automated key processes, and provided a centralized platform for all patient-related activities."
                    }
                </p>
            </div>
        </section>
    )
}

export default PortfolioOutcome





