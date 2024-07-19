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
import JavascriptHero from "../javascriptHero/page";
import JavascriptPackages from "../javascriptPackages/page";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Javascript Full-Stack Development | Toshconsult Technologies Inc",
    description: "Want to learn Javascript? Build entire websites! Become a Javascript Full-Stack Developer. Learn front-end, back-end & databases. Code your dream career!",
  };


export default function MobileApp(){
    return(
        <>
            <Navbar/>
            <JavascriptHero/>
            <PythonPrice/>
            <JavascriptPackages/>
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            
            
        </>
    )
}