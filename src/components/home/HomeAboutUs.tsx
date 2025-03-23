"use client";

import { images } from "@/data/assets";
import { AboutUsType } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const aboutUsData: AboutUsType[] = [
    {
        title: "Who We Are",
        content:
            "We are Pixel Panda, a modern software studio driven by innovation and simplicity. Specializing in web, app, and software solutions, we bring your ideas to life with precision, creativity, and purpose. Our focus is on crafting experiences that inspire, connect, and deliver lasting impact.",
    },
    {
        title: "Behind the Brand",
        content:
            "At the heart of Pixel Panda is a team of passionate designers, developers, and strategists dedicated to pushing boundaries. We believe in merging art and technology to create digital solutions that are as functional as they are beautiful. With every project, we strive to transform ideas into meaningful experiences, one pixel at a time.",
    },
];

const HomeAboutUs = () => {
    return (
        <section className="custom-h-screen w-full py-10 px-4 md:px-8 flex items-center lg:items-end bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-10 p-3 md:p-16 rounded-3xl bg-primary relative z-10">
                {aboutUsData.map((data: AboutUsType, index: number) => (
                    <div key={index} className="text-center space-y-6">
                        <h4 className="text-primary-2 font-crimson-pro font-bold text-xl">{data.title}</h4>
                        <p className="text-white font-normal text-base">{data.content}</p>
                    </div>
                ))}
            </div>

            <Image
                src={images.Bamboo}
                alt="bamboo"
                width={150}
                height={250}
                className="absolute left-0 bottom-0 hidden md:block"
            />
            <Image
                src={images.Bamboo}
                alt="bamboo"
                width={150}
                height={250}
                className="absolute -right-8 -bottom-60 scale-x-[-1] hidden md:block"
            />

            {/* Animated Panda Image with whileInView */}
            <motion.div
                initial={{ top: "100px", opacity: 0 }}
                whileInView={{ top: "0px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // Only triggers once when 20% of the section is visible
                className="absolute left-1/2 -translate-x-1/2"
            >
                <Image src={images.pandaCircle} alt="panda" width={200} height={200} />
            </motion.div>
        </section>
    );
};

export default HomeAboutUs;
