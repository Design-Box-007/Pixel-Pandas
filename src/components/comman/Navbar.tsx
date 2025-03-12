import { images } from '@/data/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface NavLinksTypes {
    title: string
    href: string
}

const Navbar = () => {
    const navLinks: NavLinksTypes[] = [
        { title: "About Us", href: "#about" },
        { title: "Services", href: "#services" },
        { title: "Projects", href: "#projects" },
    ]

    return (
        <nav className="flex w-full items-center bg-background z-30 justify-between px-6 py-6 fixed top-0 right-0 left-0">
            {/* Logo */}
            <div>
                <Image
                    src={images.Logo}
                    alt="Logo"
                    width={251}
                    height={32}
                />
            </div>

            {/* Navigation Links + Button */}
            <ul className="flex items-center space-x-6">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="text-black hover:text-gray-600">
                            {link.title}
                        </Link>
                    </li>
                ))}

                {/* Call-to-Action Button */}
                <li>
                    <button className="bg-primary text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2">
                        <span>{"Let's Discuss"}</span>
                        <FaArrowRight />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
