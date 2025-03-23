'use client'

import { images } from '@/data/assets'
import { AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Hero = () => {

    const [showSecondImage, setShowSecondImage] = useState(false);
    const [fadeOutSecondImage, setFadeOutSecondImage] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showBamboo, setShowBamboo] = useState(false); // New state to control bamboo visibility

    useEffect(() => {
        const showSecondImageTimer = setTimeout(() => setShowSecondImage(true), 2000); // Show second image after 2 seconds

        if (showSecondImage) {
            const fadeOutTimer = setTimeout(() => {
                setFadeOutSecondImage(true); // Trigger fade-out for the second image
                setTimeout(() => setShowText(true), 2000); // Show text after the second image fades out
                setTimeout(() => setShowBamboo(true), 100); // Show bamboo after second image fades out
            }, 3000); // Fade-out starts 3 seconds after the second image appears

            return () => clearTimeout(fadeOutTimer);
        }

        return () => clearTimeout(showSecondImageTimer);
    }, [showSecondImage]);


    const expandVariants = {
        initial: { opacity: 0, width: "100px", height: "100px", scale: 1 },
        animate: { opacity: 1, width: "110%", height: "110%" },
        exit: { opacity: 0, width: "110%", height: "110%" },
    };

    const fadeInVariants = {
        initial: { opacity: 0, width: "110%", height: "110%" },
        animate: { opacity: 1, width: "110%", height: "110%" },
        exit: { opacity: 0, width: "110%", height: "110%" },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: i * 0.5 }, // Stagger each text element by 0.5s
        }),
    };

    return (
        <div className="relative w-full h-screen -top-[70px] rounded-[20px] shadow-[inset_0_0_8px_rgba(0,0,0,0.15)] flex justify-center items-center bg-white">
            <div className="absolute inset-0 z-10 flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                    <AnimatePresence>
                        {!showSecondImage && (
                            <motion.img
                                src={images.LoadOne}
                                alt="LoadOne"
                                className="absolute w-auto h-auto"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={expandVariants}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showSecondImage && !fadeOutSecondImage && (
                            <motion.img
                                src={images.LoadTwo}
                                alt="LoadTwo"
                                className="absolute w-auto h-auto"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeInVariants}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            />
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showBamboo && (
                            <>
                                <motion.img
                                    src={images.BambooLeft}
                                    alt="bg-BambooLeft"
                                    className="absolute w-auto h-full -left-30"
                                    initial={{ opacity: 0, scale: 0.5, x: -300 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                                <motion.img
                                    src={images.BambooRight}
                                    alt="bg-BambooRight"
                                    className="absolute w-auto h-full -right-30"
                                    initial={{ opacity: 0, scale: 0.5, x: 300 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                            </>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showText && (
                            <div className="h-full flex flex-col items-center justify-center">
                                <motion.h1
                                    className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[86px] font-medium text-black text-center"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    custom={0}
                                    variants={textVariants}
                                >
                                    We Craft Experience
                                </motion.h1>
                                <motion.h2
                                    className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[86px] font-medium text-black text-center"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    custom={1}
                                    variants={textVariants}
                                >
                                    That Shapes Ideas Into
                                </motion.h2>
                                <motion.h2
                                    className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[86px] font-medium text-primary text-center"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    custom={2}
                                    variants={textVariants}
                                >
                                    Revolutions
                                </motion.h2>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>

    )
}

export default Hero