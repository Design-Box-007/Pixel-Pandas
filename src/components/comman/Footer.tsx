import { images } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='min-h-screen space-y-24 w-full py-10 px-4 md:px-8 bg-background relative overflow-hidden'>

            {/* Heading & Input Section */}
            <div className='h-full w-full flex flex-col justify-center gap-8 items-center text-center'>
                <h1 className='font-semibold font-crimson-pro text-primary text-6xl md:text-[180px] leading-none'>
                    {"Let’s Talk"}
                </h1>
                <p className='font-normal font-poppins text-lg md:text-xl text-primary max-w-2xl'>
                    {"Let’s craft a unique experience together. Get in touch today to start your journey with Us"}
                </p>

                {/* Input & Button */}
                <div className="flex md:flex-row items-center gap-3 md:gap-0 rounded-full border border-primary w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Let us know about your magic"
                        className="flex-1 bg-transparent px-4 py-3 text-[#8A7B66] outline-none placeholder:text-[#B0A58D] w-full md:w-auto"
                    />
                    <button 
                        className="text-white px-6 py-4 rounded-full text-sm font-medium w-fit lg:w-full md:w-auto"
                        style={{ background: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
                    >
                        Reach Out
                    </button>
                </div>
            </div>

            {/* Social Links & Navigation */}
            <div className='max-w-md mx-auto'>
                <div className='flex flex-wrap justify-center gap-4 items-center w-11/12 mx-auto'>
                    <a href='' className='p-4'>
                        <FaRegEnvelope size={28} />
                    </a>
                    <a href='' className='p-4'>
                        <FaInstagram size={28} />
                    </a>
                    <a href='' className='p-4'>
                        <FaFacebook size={28} />
                    </a>
                </div>

                <div className='flex flex-wrap justify-center gap-6 items-center w-full text-center text-sm md:text-base'>
                    <Link href={'#about'} className='p-2 md:p-4'>
                        About
                    </Link>
                    <Link href={'#services'} className='p-2 md:p-4'>
                        Services
                    </Link>
                    <Link href={'#projects'} className='p-2 md:p-4'>
                        Projects
                    </Link>
                </div>
            </div>

            {/* Background Images */}
            <Image
                src={images.Bamboo}
                alt='bamboo'
                width={180}
                height={320}
                className='absolute left-0 bottom-0 z-20 hidden md:block'
            />
            <Image
                src={images.Bamboo}
                alt='bamboo'
                width={180}
                height={320}
                className='absolute -right-12 -bottom-40 scale-x-[-1] z-20 hidden md:block'
            />

            {/* Footer Decorative Section */}
            <div className='absolute w-full left-0 right-0 bottom-0 z-10'>
                <div className='relative w-full'>
                    <Image
                        src={images.FooterEllipse}
                        alt='alt'
                        width={221}
                        height={394}
                        className='absolute w-full -bottom-8 left-0 right-0 z-10'
                    />
                    <h5 className='relative z-20 text-center text-[#8B8354] text-base md:text-xl font-normal my-6'>
                        Pixel Panda
                    </h5>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
