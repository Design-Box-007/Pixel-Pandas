'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/data/assets';

interface ServiceTabs {
    id: string;
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
        <div className="flex flex-col md:flex-row items-center p-6 w-full mx-auto space-y-6 md:space-x-8 md:space-y-0">
            {/* Left Column - Tabs */}
            <div className="w-full md:w-1/2 flex flex-col space-y-2">
                {data.map((item: ServiceTabs) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedTab(item)}
                        className={`flex items-center p-3 text-base md:text-lg font-semibold rounded-l-full transition-all duration-300 ${selectedTab.id === item.id
                            ? 'bg-primary text-primary-2'
                            : 'bg-primary-2 text-primary'
                            }`}
                    >
                        <span
                            className={`mr-3 font-bold text-transparent ${selectedTab.id === item.id
                                ? 'custom-stroke-primary-2'
                                : 'custom-stroke-primary'
                                }`}
                        >
                            {item.id}
                        </span>
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Right Column - Content */}
            <motion.div
                className="w-full md:w-1/2 p-4 md:pl-6 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={selectedTab.id}
            >
                <h2
                    className="text-2xl md:text-3xl font-semibold font-crimson-text bg-clip-text text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)'
                    }}
                >
                    {selectedTab.title}
                </h2>
                <p className="font-poppins text-base md:text-lg font-normal text-black mt-2">
                    {selectedTab.content}
                </p>
                <button className="mt-4 px-4 py-2 bg-[#F9D776] text-primary font-semibold rounded-lg hover:bg-[#EFC65E]">
                    {"Let's Connect"}
                </button>
            </motion.div>
        </div>
    );
}

const HomeServices = () => {
    return (
        <section className="w-full py-10 px-6 md:px-8 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-10">
                <header className="text-center h-screen bg-rangoli-image bg-rangoli flex justify-center items-center w-full md:w-4/5 mx-auto">
                    <motion.div
                        className='w-full space-y-6'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Heading Animation (Top to Bottom) */}
                        <motion.h1
                            className="font-crimson-pro font-semibold text-4xl md:text-5xl bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)' }}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            Building Solutions that Drive Results
                        </motion.h1>

                        {/* Paragraph Animation (Bottom to Top) */}
                        <motion.p
                            className="font-poppins font-normal text-lg md:text-xl"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Our development expertise brings designs to life. We deliver cutting-edge solutions that are as functional as they are beautiful.
                        </motion.p>
                    </motion.div>
                </header>
                <ServicesTabs />
            </div>

            {/* Background Decorative Images */}
            <Image
                src={images.Bamboo}
                alt="bamboo"
                width={180}
                height={320}
                className="absolute left-0 bottom-0 hidden sm:block"
            />
            <Image
                src={images.Bamboo}
                alt="bamboo"
                width={180}
                height={320}
                className="absolute -right-12 -bottom-64 sm:-right-16 sm:-bottom-96 scale-x-[-1]"
            />
        </section>
    );
};

export default HomeServices;
