import Image from 'next/image';
import React from 'react'


interface ProcessApproachCardsType {
    title: string;
    content: string;
}

const processApproachData: ProcessApproachCardsType[] = [
    {
        title: "Discovery and Research",
        content: "Conducted detailed consultations with MedHealth’s management and staff to understand their specific needs and challenges. Performed an audit of existing systems to identify integration points."
    },
    {
        title: "Design and Development",
        content: "Using Agile methodology, we iterated on the design, ensuring the CRM platform was user-friendly and met all functional requirements. Prototyping and usability testing were integral to this phase."
    },
    {
        title: "Testing and Iteration",
        content: "The CRM was tested extensively in a staging environment with real data to ensure accuracy and reliability. Feedback from clinic staff led to several key improvements before the final launch."
    },
    {
        title: "Launch and Implementation",
        content: "The platform was rolled out across all clinic locations, with comprehensive training provided to staff. Ongoing support was established to address any issues post-launch."
    }
]

const ProcessAndApporachCards: React.FC<ProcessApproachCardsType> = ({ title, content }) => {
    return (
        <div className='border rounded-4xl border-primary-2 py-16 px-10 space-y-4 relative z-20 bg-background backdrop-blur-md'>
            <h4 className='font-semibold font-crimson-pro text-3xl'>{title}</h4>
            <p className='font-normal font-poppins text-xl'>{content}</p>
        </div>
    )
}

const ProcessAndApporach = () => {
    return (
        <section className='my-35 relative h-screen mx-auto space-y-12 w-11/12 lg:w-4/5'>
            <h1
                className="font-crimson-pro font-semibold text-6xl bg-clip-text text-center text-transparent"
                style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
            >
                Process and Approach
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    processApproachData.map((data: ProcessApproachCardsType, index: number) => (
                        <ProcessAndApporachCards title={data.title} content={data.content} key={index} />
                    ))
                }
            </div>

            <Image src={'/images/circle.svg'} alt='circle' width={630} height={630} className='absolute z-10 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full' />
        </section>
    )
}

export default ProcessAndApporach


