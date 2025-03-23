import { NavbarLinks, SocialMediaLinks } from "@/types";
import { FaFacebook, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const navLinks: NavbarLinks[] = [
    { title: "About Us", link: "#about", },
    { title: "Services", link: "#services", },
    { title: 'Projects', link: '#projects' },
    { title: 'Portfolio', link: '/portfolio' }
];



const socialMedia: SocialMediaLinks[] = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
    { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
];

const contactUsEmail: string = "connectwithdesignbox@gmail.com";
const contactUsPhoneNumber: string = "+971 508 89 2829";
const contactUsAddress: string = "177, Red Avenue, Al Garhoud, Dubai-UAE";
const contactUsAddressLink: string = "https://maps.app.goo.gl/NFFgWUMxdULSk4Pa6";


export {
    navLinks,
    socialMedia,
    contactUsEmail,
    contactUsPhoneNumber,
    contactUsAddress,
    contactUsAddressLink,
}
