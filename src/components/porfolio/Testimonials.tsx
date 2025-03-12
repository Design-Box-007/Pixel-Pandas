import { images } from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="my-35 px-8 space-y-20 flex flex-row">
      <div className='w-1/2 space-y-8'>
        <h1 className='font-bold font-crimson-pro text-[64px] leading-[2] text-transparent bg-clip-text'
          style={{ backgroundImage: "linear-gradient(90.03deg, #194a26 0.02%, #8B8354 99.36%)" }}
        >
          Client Testimonial
        </h1>
        <div className='w-[77%] relative custom-box-shadow bg-white space-y-2.5 py-8 px-12 rounded-3xl'>
          <p className='font-normal font-poppins text-xl'>
            {"The new CRM has transformed our operations, especially in managing appointments and patient communication on the go. It’s intuitive and has made our processes much more efficient."}
          </p>
          <div className='space-y-0.5 border-t-primary-2 border-t-2 pt-4'>
            <h6 className='font-semibold font-primary font-poppins text-2xl'>
              Dr. Ahmed Al Mansoori
            </h6>
            <p className='font-normal text-base font-poppins'>Head of MedCare Clinics</p>
          </div>

          <Image src={images.quote} width={100} height={100} className='absolute -top-14 left-2' alt='testimonial' />
          <Image src={images.testimonee1} width={134} height={134} className='absolute top-1/2 -translate-y-1/2 -right-16 w-[134px] h-[134px] object-cover border-8 border-white rounded-full' alt='testimonial' />
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image src={images.bigQuote} width={214} height={171} className='z-[9] absolute -top-10 right-0' alt='testimonial' />

        <div className='z-10 absolute top-0 left-2 w-[520px] h-[276px] border-[10px] border-solid border-white rounded-2xl'>
          <Image src={images.testimonialHero3} width={520} height={276} className='object-cover rounded-xl object-center w-full h-full' alt='testimonial' />
        </div>
        <div className='z-20 absolute top-1/2 -translate-y-1/2 right-0 w-[236px] h-[236px] border-[10px] border-solid border-white rounded-2xl'>
          <Image src={images.testimonialHero2} width={236} height={236} className='object-cover rounded-xl object-center w-full h-full' alt='testimonial' />
        </div>
        <div className='z-10 absolute bottom-0 right-2 w-[423px] h-[203px] border-[10px] border-solid border-white rounded-2xl'>
          <Image src={images.testimonialHero1} width={423} height={203} className='object-cover rounded-xl object-center w-full h-full' alt='testimonial' />
        </div>

        <Image src={images.bigQuote} width={214} height={171} className='z-[9] absolute -bottom-24 left-36 rotate-180' alt='testimonial' />
      </div>
    </section>

  )
}

export default Testimonials