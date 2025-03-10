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
        <section className='h-screen w-full py-10 px-8 bg-background'>
            <div className='w-11/12 mx-auto space-y-10 p-16 rounded-[60px] bg-primary relative z-10'>
                {
                    aboutUsData.map((data: AboutUsType, index: number) => (
                        <div key={index} className='text-center space-y-6'>
                            <h4 className='text-primary-2 font-crimson font-bold text-4xl'>{data.title}</h4>
                            <p className='text-white font-normal text-xl'>{data.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default HomeAboutUs