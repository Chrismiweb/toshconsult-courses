import BackendHero from "../backendHero/page";
import BackendPackages from "../backendPackages/page";
import BackendSect2 from "../backendSect2/page";
import FrontendWhy from "../frontendWhy/page";
import FrontendSteps from "../frontendSteps/page";
import FrontendReview from "../frontendReview/page";
import CourseEnroll from "../courseEnroll/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import PythonHero from "../pythonHero/page";
import PythonPrice from "../pythonPrice/page";
import PythonPackages from "../pythonPackages/page";
import UiuxHero from "../uiuxHero/page";
import UiuxPrice from "../uiuxPrice/page";
import UiuxPackages from "../uiuxPackages/page";
import DigMarkHero from "../digmarkHero/page";
import DigPackages from "../digMarkPackages/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing | Toshconsult Technologies Inc",
    description: "Launch your digital marketing career! Master the skills to grow brands online. Learn SEO, social media, and analytics. Become a sought-after marketing pro.",
  };



export default function Digmark(){
    return(
        <>
            <Navbar/>
            <DigMarkHero/>
            <UiuxPrice/>
            <DigPackages/>
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            
            
        </>
    )
}