'use client';

import { images } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface NavLinksTypes {
    title: string;
    href: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks: NavLinksTypes[] = [
        { title: 'About Us', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Projects', href: '#projects' },
    ];

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-background px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className='relative z-50'>
                <Image src={images.Logo} alt="Logo" width={180} height={32} />
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-6">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="text-black hover:text-gray-600">
                            {link.title}
                        </Link>
                    </li>
                ))}
                <li>
                    <button className="bg-primary text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2">
                        <span>{"Let's Discuss"}</span>
                        <FaArrowRight />
                    </button>
                </li>
            </ul>

            {/* Mobile Hamburger Menu */}
            <button
                className="md:hidden text-black text-2xl relative z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center space-y-6 text-xl md:hidden z-40"
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-black hover:text-gray-600 text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <button className="bg-primary text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
                        <span>{"Let's Discuss"}</span>
                        <FaArrowRight />
                    </button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;