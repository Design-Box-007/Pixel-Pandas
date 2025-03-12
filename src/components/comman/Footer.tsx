import { images } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='min-h-screen space-y-24 w-full py-10 px-8 bg-background relative overflow-hidden'>

            <div className='h-full w-full flex flex-col justify-center gap-8 items-center'>
                <div className='text-center'>
                    <h1 className='font-semibold font-crimson-pro text-primary text-[180px]'>
                        {"Let’s Talk"}
                    </h1>
                    <p className='font-normal font-poppins text-xl text-primary'>{"Let’s craft a unique experience together. Get in touch today to start your journey with Us"}</p>
                </div>

                {/* style={{background: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)"}} */}
                <div className="flex items-center rounded-full border border-primary w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Let us know about your magic"
                        className="flex-1 bg-transparent px-4 py-2 text-[#8A7B66] outline-none placeholder:text-[#B0A58D]"
                    />
                    <button className="text-white px-6 py-3 rounded-full text-sm font-medium"
                        style={{ background: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
                    >
                        Reach Out
                    </button>
                </div>
            </div>

            <div className='max-w-md mx-auto'>
                <div className='flex flex-row justify-center gap-4 items-center w-11/12 mx-auto'>
                    <a href='' className='p-4'>
                        <FaRegEnvelope size={32} />
                    </a>
                    <a href='' className='p-4'>
                        <FaInstagram size={32} />
                    </a>
                    <a href='' className='p-4'>
                        <FaFacebook size={32} />
                    </a>
                </div>

                <div className='flex flex-row justify-center gap-8 items-center w-full text-center'>
                    <Link href={'#about'} className='p-4'>
                        About
                    </Link>
                    <Link href={'#services'} className='p-4'>
                        Services
                    </Link>
                    <Link href={'#projects'} className='p-4'>
                        Projects
                    </Link>
                </div>
            </div>


            <Image
                src={images.Bamboo}
                alt='bamboo'
                width={221}
                height={394}
                className='absolute left-0 bottom-0 z-20'
            />
            <Image
                src={images.Bamboo}
                alt='bamboo'
                width={221}
                height={394}
                className='absolute -right-16 -bottom-80 scale-x-[-1] z-20'
            />

            <div className='absolute w-full left-0 right-0 bottom-0 z-10'>
                <div className='relative w-full'>
                    <Image
                        src={images.FooterEllipse}
                        alt='alt'
                        width={221}
                        height={394}
                        className='absolute w-full -bottom-8 left-0 right-0 z-10'
                    />

                    <h5 className='relative z-20 text-center text-[#8B8354] text-xl font-normal my-8'>Pixel Panda</h5>
                </div>
            </div>

        </footer>
    )
}

export default Footer;