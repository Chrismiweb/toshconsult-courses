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
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "UI/UX Design | Toshconsult Technologies Inc",
    description: "Craft experiences users love! Become a UI/UX designer. Learn design, usability, and turn ideas into intuitive interfaces. Design your future!",
  };



export default function MobileApp(){
    return(
        <>
            <Navbar/>
            <UiuxHero/>
            <UiuxPrice/>
            <UiuxPackages/>
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            
            
        </>
    )
}