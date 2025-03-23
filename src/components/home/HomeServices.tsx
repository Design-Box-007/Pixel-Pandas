'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/data/assets';
import { ServiceTabs } from '@/types';

const data: ServiceTabs[] = [
    {
        id: "01",
        title: "Website Development",
        content: "At PixelPanda, we specialize in developing custom websites that are dynamic, responsive, and designed with your business goals in mind. Our team focuses on creating websites that not only look great but also provide seamless functionality across all devices. Whether you're launching an e-commerce platform, a corporate website, or a personal blog, we ensure your site is intuitive, user-friendly, and optimized for performance. By combining the latest web technologies with creative design, we bring your vision to life and help you connect with your audience in meaningful ways. From concept to launch, we provide end-to-end solutions that drive engagement and support your business growth."
    },
    {
        id: "02",
        title: "Website/Product Design",
        content: "At Pixel Panda, we specialize in creating innovative and user-centric product designs that bring your ideas to life. Our design process focuses on blending aesthetics with functionality to craft products that not only look exceptional but also deliver seamless user experiences. Whether you’re developing a new tech gadget, a mobile app, or a consumer product, our team works closely with you to ensure every detail aligns with your brand vision and meets the needs of your target audience. From concept to final design, we provide end-to-end solutions that help you stand out in the market and deliver products that are both beautiful and functional."
    },
    {
        id: "03",
        title: "ERP/CRM Solutions",
        content: "At Pixel Panda, we offer tailored ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) solutions designed to streamline your business operations and enhance customer engagement. Our ERP solutions integrate all core business functions, from finance to inventory management, enabling you to optimize processes, improve efficiency, and make data-driven decisions. Our CRM systems help you manage and analyze customer interactions, improve sales, and build stronger relationships with clients. Whether you're looking to enhance your internal operations or better serve your customers, we provide scalable, customizable solutions that drive growth, improve productivity, and deliver long-term value."
    },
    {
        id: "04",
        title: "SEO Services",
        content: "At Pixel Panda, we offer comprehensive SEO services designed to increase your online visibility and drive organic traffic to your website. Our team of SEO experts uses the latest strategies and techniques to optimize your website, ensuring it ranks higher on search engines and reaches your target audience effectively. From keyword research and on-page optimization to backlink building and content strategy, we provide a full suite of SEO services that improve your website’s performance and search engine rankings. Whether you're a small business looking to grow or an established brand seeking to maintain your online presence, our SEO solutions are tailored to deliver measurable results and long-term success."
    },
    {
        id: "05",
        title: "Graphic Designing",
        content: "At Pixel Panda, we offer creative graphic design services that help your brand stand out and communicate effectively. Our team of skilled designers combines artistry with strategy to craft visually stunning designs that captivate your audience. Whether you need branding, logo design, marketing materials, social media graphics, or website visuals, we ensure each design aligns with your brand identity and resonates with your target market. From concept to execution, our designs are not only aesthetically pleasing but also purposeful, designed to enhance your brand presence and drive engagement. Let us bring your ideas to life with compelling visuals that make an impact."
    },
    {
        id: "06",
        title: "Independent Software Solutions",
        content: "At Pixel Panda, we specialize in delivering independent software solutions that are customized to meet your unique business needs. Our team of expert developers works with you to create scalable, reliable, and high-performance software that operates seamlessly across various platforms and environments. Whether you require standalone applications, custom tools, or specialized software that integrates with your existing systems, we design solutions that drive efficiency, productivity, and innovation. Our independent software solutions are built with flexibility and adaptability in mind, ensuring they evolve alongside your business and technological advancements. Let us help you streamline operations and unlock new possibilities with solutions that are tailored specifically to your goals."
    }
];

export function ServicesTabs() {
    const [selectedTab, setSelectedTab] = useState(data[0]);

    return (
        <div className="max-w-6xl flex flex-col custom-h-screen md:flex-row items-center p-6 w-full mx-auto space-y-6 md:space-x-8 md:space-y-0">
            {/* Left Column - Tabs */}
            <div className="w-full md:w-[35%] flex flex-col space-y-2">
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
                className="w-full md:w-[65%] p-4 md:pl-6 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={selectedTab.id}
            >
                {/* <h2
                    className="text-2xl md:text-3xl font-semibold font-crimson-text bg-clip-text text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)'
                    }}
                >
                    {selectedTab.title}
                </h2> */}
                <p className="font-poppins text-base text-left md:text-lg font-normal text-black mt-2">
                    {selectedTab.content}
                </p>
                <button className="mt-4 px-4 py-2 bg-[#F9D776] text-primary font-semibold rounded-lg hover:bg-[#EFC65E]">
                    {"Let's Connect"}
                </button>
            </motion.div>
        </div>
    );
}

export function ServiceHeader() {
    return (
        <header className="max-w-6xl text-center custom-h-screen bg-rangoli-image bg-rangoli flex justify-center items-center w-full md:w-4/5 mx-auto">
            <motion.div
                className='w-full space-y-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Heading Animation (Top to Bottom) */}
                <motion.h1
                    className="font-gilroy font-semibold text-4xl md:text-5xl bg-clip-text text-transparent"
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
                    className="font-gilroy font-normal text-base md:text-xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {
                        "We specialize in crafting innovative software solutions that deliver real-world results. With a strong foundation in technology and design, we create custom software that not only meets the needs of your business but also enhances user experience and drives operational efficiency. Our team of experts works closely with you to understand your unique challenges, offering tailored solutions that combine functionality with aesthetic appeal. Whether you're looking for enterprise applications, mobile solutions, or web platforms, we provide the expertise and cutting-edge technology to bring your ideas to life and help you stay ahead in a competitive market"
                    }
                </motion.p>
            </motion.div>
        </header>
    )
}

const HomeServices = () => {
    return (
        <section className="w-full py-10 px-6 md:px-8 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-10">
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
