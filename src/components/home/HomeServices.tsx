'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion'

interface ServiceTabs {
    id: string
    title: string;
    content: string;
}

const data: ServiceTabs[] = [
    { id: '01', title: 'Website Development', content: 'At Pixel Pandas, we specialize in creating dynamic, responsive, and user-friendly websites tailored to your business needs. Whether you’re looking for an e-commerce platform, corporate site, or a personal blog, we bring your vision to life with innovative web solutions.' },
    { id: '02', title: 'Website & Product Design', content: 'Our design team crafts visually stunning and functional designs that enhance user experience and engagement.' },
    { id: '03', title: 'ERP/CRM Solutions', content: 'We develop integrated ERP and CRM solutions to streamline your business processes and enhance productivity.' },
    { id: '04', title: 'SEO Services', content: 'Improve your search engine ranking and drive organic traffic with our expert SEO services.' },
    { id: '05', title: 'Graphic Designing', content: 'Our graphic design services create compelling visuals that communicate your brand message effectively.' },
    { id: '06', title: 'Independent Software Solutions', content: 'Custom software solutions tailored to meet your specific business requirements and challenges.' }
];

function ServicesTabs() {
    const [selectedTab, setSelectedTab] = useState(data[0]);

    return (
        <div className="flex items-center p-6 w-full mx-auto space-x-8">
            {/* Left Column - Tabs */}
            <div className="w-1/2 flex flex-col space-y-2">
                {data.map((item: ServiceTabs, index: number) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(item)}
                        className={`flex items-center p-3 text-lg font-semibold rounded-l-full transition-all duration-300 ${selectedTab.id === item.id
                            ? 'bg-primary text-primary-2'
                            : 'bg-primary-2 text-primary'
                            }`}
                    >
                        <span className={`mr-3 font-bold text-transparent ${selectedTab.id === item.id
                            ? 'custom-stroke-primary-2'
                            : 'custom-stroke-primary'
                            }`}>{item.id}</span> {item.title}
                    </button>
                ))}
            </div>

            {/* Right Column - Content */}
            <motion.div
                className="w-1/2 pl-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={selectedTab.id}
            >
                <h2 className="text-3xl font-semibold font-crimson bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90.03deg, #5A613F 0.02%, #8B8354 99.36%)" }}
                >
                    {selectedTab.title}</h2>
                <p className="font-poppins text-lg font-normal text-black">{selectedTab.content}</p>
                <button className="mt-4 px-4 py-2 bg-[#F9D776] text-primary font-semibold rounded-lg hover:bg-[#EFC65E]">
                    Let's Connect
                </button>
            </motion.div>
        </div >
    );
}



const HomeServices = () => {
    return (
        <section className='h-screen w-full py-10 px-8 bg-background'>
            <div className='lg:w-3/4 mx-auto space-y-10'>
                <header className='text-center space-y-6 w-4/5 mx-auto'>
                    <h1
                        className="font-crimson font-semibold text-5xl bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90.03deg, #5A613F 0.02%, #8B8354 99.36%)" }}
                    >
                        Building Solutions that Drive Results
                    </h1>
                    <p className='font-poppins font-normal text-xl'>Our development expertise brings designs to life. We deliver cutting-edge solutions that are as functional as they are beautiful.</p>
                </header>
                <ServicesTabs />
            </div>
        </section>
    )
}

export default HomeServices