import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="my-35 px-8 space-y-20 flex flex-col lg:flex-row">
      <div className='w-full lg:w-1/2 space-y-20'>
      <h1 className='font-bold font-crimson-pro text-4xl md:text-6xl text-transparent bg-clip-text'
          style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
        >
          Client Testimonial
        </h1>
        <div className='max-w-sm md:max-w-md lg:max-w-lg relative custom-box-shadow bg-white space-y-4 py-6 px-6 md:py-8 md:px-12 rounded-3xl mx-auto lg:mx-0'>
          <p className='font-normal font-poppins text-base md:text-lg'>
            {"The new CRM has transformed our operations, especially in managing appointments and patient communication on the go. It’s intuitive and has made our processes much more efficient."}
          </p>
          <div className='space-y-0.5 border-t-primary-2 border-t-2 pt-4'>
            <h6 className='font-semibold font-poppins text-lg md:text-2xl'>
              Dr. Ahmed Al Mansoori
            </h6>
            <p className='font-normal text-sm md:text-base font-poppins'>Head of MedCare Clinics</p>
          </div>
          <Image src={images.quote} width={80} height={80} className='absolute -top-10 left-2 w-12 md:w-16' alt='testimonial' />
          <Image src={images.testimonee1} width={100} height={100} className='absolute top-1/2 -translate-y-1/2 -right-10 w-16 md:w-24 h-16 md:h-24 object-cover border-4 md:border-8 border-white rounded-full' alt='testimonial' />
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <Image src={images.bigQuote} width={214} height={171} className='z-[9] w-[117px] h-[96px] lg:w-[214px] lg:h-[171px] absolute -top-10 right-0' alt='testimonial' />

        <div className='z-10 absolute top-0 left-2 w-[289px] h-[154px] lg:w-[520px] lg:h-[276px] border-[10px] border-solid border-white rounded-2xl'>
          <Image src={images.testimonialHero3} width={520} height={276} className='object-cover rounded-xl object-center w-full h-full' alt='testimonial' />
        </div>
        <div className='z-20 absolute top-1/2 -translate-y-1/2 right-0 w-[132px] h-[132px] lg:w-[236px] lg:h-[236px] border-[10px] border-solid border-white rounded-2xl'>
          <Image src={images.testimonialHero2} width={236} height={236} className='object-cover rounded-xl object-center w-full h-full' alt='testimonial' />
        </div>
        <div className='z-10 absolute bottom-0 right-14 lg:right-2 w-[294px] h-[180px] lg:w-[423px] lg:h-[203px] border-[10px] border-solid border-white rounded-2xl'>
          <Image src={images.testimonialHero1} width={423} height={203} className='object-cover rounded-xl object-center w-full h-full' alt='testimonial' />
        </div>

        <Image src={images.bigQuote} width={214} height={171} className='z-[9] w-[117px] h-[96px] lg:w-[214px] lg:h-[171px] absolute -bottom-24 left-0 lg:left-36 rotate-180' alt='testimonial' />
      </div>
    </section>

  )
}

export default Testimonials