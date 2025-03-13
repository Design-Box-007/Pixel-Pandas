import { images } from '@/data/assets';
import Image from 'next/image';
import React from 'react'

interface AboutUsType {
    title: string;
    content: string;
}

const aboutUsData: AboutUsType[] = [
    { title: "Who We Are", content: "We are Pixel Panda, a modern software studio driven by innovation and simplicity. Specializing in web, app, and software solutions, we bring your ideas to life with precision, creativity, and purpose. Our focus is on crafting experiences that inspire, connect, and deliver lasting impact." },
    { title: "Behind the Brand", content: "At the heart of Pixel Panda is a team of passionate designers, developers, and strategists dedicated to pushing boundaries. We believe in merging art and technology to create digital solutions that are as functional as they are beautiful. With every project, we strive to transform ideas into meaningful experiences, one pixel at a time." }
]

const HomeAboutUs = () => {
    return (
        <section className="min-h-screen w-full py-10 px-4 md:px-8 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-10 p-6 md:p-16 rounded-3xl bg-primary relative z-10">
                {aboutUsData.map((data: AboutUsType, index: number) => (
                    <div key={index} className="text-center space-y-6">
                        <h4 className="text-primary-2 font-crimson-pro font-bold text-3xl md:text-4xl">{data.title}</h4>
                        <p className="text-white font-normal text-lg md:text-xl">{data.content}</p>
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
        </section>
    );
};

export default HomeAboutUs