import { IconType } from "react-icons";

interface NavbarLinks {
    title: string;
    link: string;
}

interface SocialMediaLinks {
    link: string;
    icon: IconType;
}

interface AboutUsType {
    title: string;
    content: string;
}
interface ServiceTabs {
    id: string;
    title: string;
    content: string;
}
interface PortfolioCard {
    id: string;
    title: string;
    tagLine: string;
    imgSrc: string;
    description: string;
    tags: string[];
}
interface ProcessApproachCardsType {
    title: string;
    content: string;
}


export type {
    NavbarLinks,
    SocialMediaLinks,
    AboutUsType,
    ServiceTabs,
    PortfolioCard,
    ProcessApproachCardsType,
};