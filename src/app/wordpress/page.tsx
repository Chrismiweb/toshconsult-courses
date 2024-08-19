import BackendHero from "../backendHero/page";
import BackendPackages from "../backendPackages/page";
import FrontendWhy from "../frontendWhy/page";
import FrontendSteps from "../frontendSteps/page";
import FrontendReview from "../frontendReview/page";
import CourseEnroll from "../courseEnroll/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import UiuxHero from "../uiuxHero/page";
import UiuxPrice from "../uiuxPrice/page";
import UiuxPackages from "../uiuxPackages/page";
import WordpressHero from "../wordpressHero/page";
import WordpressPrice from "../wordpressPrice/page";
import WordpressPackages from "../wordpressPackage/page";
import WhatsappFloat from "../whatsappFloat/page";

import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Wordpress Development | Toshconsult Technologies Inc",
    description: "Love building websites? WordPress powers millions! Become a developer - craft themes, plugins & more. Build a career in high demand. Get started today!",
  };



export default function Wordpress(){
    return(
        <>
            <Navbar/>
            <WordpressHero/>
            <WordpressPrice/>
            <WordpressPackages/>
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            <WhatsappFloat/>
            
            
        </>
    )
}