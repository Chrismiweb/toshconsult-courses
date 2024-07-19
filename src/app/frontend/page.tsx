import CourseEnroll from "../courseEnroll/page";
import Footer from "../footer/page";
import FrontendAchievement from "../frontendAchievement/page";
import FrontendHero from "../frontendHero/page";
import FrontendPackages from "../frontendPackages/page";
import FrontendReview from "../frontendReview/page";
import FrontendSteps from "../frontendSteps/page";
import FrontendWhy from "../frontendWhy/page";
import Navbar from "../navbar/page";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Frontend Development | Toshconsult Technologies Inc",
    description: "LWant to turn designs into reality? Become a frontend developer! Code interactive websites & apps users love. High demand, high reward. Get started today!",
  };

export default function Frontend(){
    return(
        <>
            <Navbar/>
            <FrontendHero/>
            <FrontendAchievement/>
            <FrontendPackages/>
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            
        </>
    )
}