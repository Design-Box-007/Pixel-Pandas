'use client'

import { images } from '@/data/assets'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'

const Hero = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
    
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 5])
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const [allowScroll, setAllowScroll] = useState(false)
    const [hideSection, setHideSection] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest >= 1) {
                setAllowScroll(true)
                setTimeout(() => setHideSection(true), 500) // Fade-out effect before removal
            } else {
                setAllowScroll(false)
                setHideSection(false)
            }
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <section 
            ref={containerRef} 
            className={`relative -z-10 flex items-center justify-center h-screen w-full ${allowScroll ? 'overflow-auto' : 'overflow-hidden'}`}>
            <motion.div 
                style={{ scale, opacity, y }}
                className="w-[25%] flex justify-center items-center fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <Image
                    src={images.Logo}
                    alt='Logo'
                    width={200}
                    height={200}
                    className='w-full h-auto'
                />
            </motion.div>
        </section>
    )
}

export default Hero