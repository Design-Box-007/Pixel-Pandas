"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { images } from "@/data/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";


interface PortfolioCard {
    id: string;
    title: string;
    tagLine: string;
    imgSrc: string;
    description: string;
    tags: string[];
}

const portfolioCards: PortfolioCard[] = [
    {
        id: "01",
        title: "Housing Quest",
        tagLine: "Elevating Real Estate in Dubai",
        imgSrc: images.PorfolioMock,
        description: "A sleek, sophisticated platform for Housing Quest, designed to highlight luxury real estate offerings in Dubai. The use of white, gold, and black creates an elegant aesthetic that appeals to discerning clients.",
        tags: ["Custom Design", "Software Development", "Branding & Identity"]
    },
    {
        id: "02",
        title: "AI Solutions",
        tagLine: "Revolutionizing AI in Healthcare",
        imgSrc: images.PorfolioMock,
        description: "A cutting-edge AI-powered platform transforming healthcare with intelligent automation, predictive diagnostics, and streamlined patient care.",
        tags: ["Machine Learning", "Healthcare AI", "Software Development"]
    },
    {
        id: "03",
        title: "Green Tech",
        tagLine: "Innovating Sustainable Energy",
        imgSrc: images.PorfolioMock,
        description: "A breakthrough solution in sustainable energy, leveraging innovative technology to drive eco-friendly and renewable energy sources for a greener future.",
        tags: ["Sustainable Energy", "Renewable Tech", "Environmental Impact"]
    },
    {
        id: "04",
        title: "Smart Home Automation",
        tagLine: "Next-Gen Smart Living",
        imgSrc: images.PorfolioMock,
        description: "An advanced smart home automation system designed to bring convenience, security, and energy efficiency to modern homes.",
        tags: ["IoT", "Smart Devices", "Home Security"]
    },
    {
        id: "05",
        title: "FinTech Platform",
        tagLine: "Redefining Digital Banking",
        imgSrc: images.PorfolioMock,
        description: "A comprehensive fintech platform that integrates seamless digital banking experiences with AI-driven financial solutions for businesses and individuals.",
        tags: ["FinTech", "Digital Payments", "AI Integration"]
    },
    {
        id: "06",
        title: "E-Learning Hub",
        tagLine: "Revolutionizing Online Education",
        imgSrc: images.PorfolioMock,
        description: "An interactive e-learning platform providing personalized learning experiences, virtual classrooms, and AI-driven content recommendations.",
        tags: ["E-Learning", "AI-Powered Education", "Virtual Classrooms"]
    },
    {
        id: "07",
        title: "Cybersecurity Suite",
        tagLine: "Next-Level Digital Security",
        imgSrc: images.PorfolioMock,
        description: "A powerful cybersecurity solution protecting businesses from cyber threats with AI-driven threat detection and real-time monitoring.",
        tags: ["Cybersecurity", "Threat Detection", "AI Security"]
    },
    {
        id: "08",
        title: "E-Commerce Platform",
        tagLine: "Empowering Digital Retail",
        imgSrc: images.PorfolioMock,
        description: "A seamless e-commerce solution enabling businesses to build, manage, and scale online stores with advanced analytics and AI-driven recommendations.",
        tags: ["E-Commerce", "AI Recommendations", "Business Analytics"]
    }
];

const PortfolioCardComponent: React.FC<{ portfolio: PortfolioCard; onClick: () => void }> = ({ portfolio, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            className="p-4 text-primary min-h-[500px] bg-transparent flex flex-col justify-between gap-4 cursor-pointer"
        >
            <div className="text-4xl font-bold custom-stroke-primary text-transparent">{portfolio.id}</div>
            <button className="text-base w-fit font-medium font-poppins py-2 px-4 border border-primary rounded-full">
                {portfolio.title}
            </button>
            <p
                className="text-2xl h-16 font-semibold font-poppins bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90.03deg, #5A613F 0.02%, #8B8354 99.36%)" }}
            >
                {portfolio.tagLine}
            </p>

            {/* Image Wrapper with Centered Button */}
            <div className="relative w-full h-auto group overflow-hidden rounded-lg">
                <Image
                    src={portfolio.imgSrc}
                    alt={portfolio.title}
                    width={424}
                    height={255}
                    className="rounded-lg w-full h-auto object-center object-cover transition-all duration-300 ease-in-out group-hover:brightness-75"
                />

                {/* Centered Button */}
                <button
                    onClick={onClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  inset-0 flex items-center justify-center h-12 ${isHovered ? "w-44" : "w-12"
                        } bg-primary text-white font-medium font-poppins rounded-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 overflow-hidden`}
                >
                    {/* Arrow Icon (Hidden on Hover) */}
                    <FaArrowRight
                        className={`absolute transition-all duration-300 ease-in-out ${isHovered ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
                            }`}
                    />

                    {/* View More Text (Shown on Hover) */}
                    <span
                        className={`absolute transition-all duration-300 ease-in-out ${isHovered ? "opacity-100 translate-x-4" : "opacity-0 translate-x-0"
                            }`}
                    >
                        View More
                    </span>
                </button>
            </div>
        </div>
    );
};


const PortfolioPopup: React.FC<{ data: PortfolioCard; onClose: () => void }> = ({ data, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 font-poppins flex items-center justify-center bg-opacity-30 backdrop-blur-lg z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="w-full max-w-lg bg-[#F8F3E8] p-6 rounded-2xl shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-xl">&times;</button>

                {/* Image */}
                <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
                    <Image src={data.imgSrc} alt={data.title} width={666} height={315} className="w-full h-full object-cover" />
                </div>

                {/* Project ID */}
                <div className="mt-4 text-lg font-bold custom-stroke-primary text-transparent">{data.id}</div>

                {/* Tag */}
                <div className="inline-block bg-yellow-300 text-gray-800 font-medium px-4 py-1 rounded-full mt-2">
                    {data.tagLine}
                </div>

                {/* Title */}
                <h2 className="mt-3 text-xl font-bold text-[#5A613F]">{data.title}</h2>

                {/* Description */}
                <p className="mt-2 text-gray-700 text-sm">
                    {data.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-4">
                    {data.tags.map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-[#6B6644] text-white text-xs rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};




const PortfolioSection = () => {
    const swiperRef = useRef<SwiperClass | null>(null);

    const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioCard | null>(null);

    return (
        <section className="min-h-screen w-full py-10 px-8 space-y-4 bg-background flex flex-col items-center">
            <h1 className="font-crimson-pro font-semibold text-6xl text-center bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90.03deg, #5A613F 0.02%, #8B8354 99.36%)" }}>
                Where Creativity Meets Innovation
            </h1>

            {/* Swiper Component */}
            <div className="w-full">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="my-5"
                >
                    {portfolioCards.map((portfolio: PortfolioCard, index: number) => (
                        <SwiperSlide key={index}>
                            <PortfolioCardComponent key={portfolio.id} portfolio={portfolio} onClick={() => setSelectedPortfolio(portfolio)} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <AnimatePresence>
                {selectedPortfolio && (
                    <PortfolioPopup data={selectedPortfolio} onClose={() => setSelectedPortfolio(null)} />
                )}
            </AnimatePresence>

            {/* Custom Navigation Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="px-6 py-3 bg-transparent border-primary border text-primary rounded-full shadow-md hover:bg-primary hover:text-white transition"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="px-6 py-3 bg-transparent border-primary border text-primary rounded-full shadow-md hover:bg-primary hover:text-white transition"
                >
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default PortfolioSection;
