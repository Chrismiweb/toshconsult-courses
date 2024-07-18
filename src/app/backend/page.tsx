import BackendHero from "../backendHero/page";
import BackendPackages from "../backendPackages/page";
import BackendSect2 from "../backendSect2/page";
import FrontendWhy from "../frontendWhy/page";
import FrontendSteps from "../frontendSteps/page";
import FrontendReview from "../frontendReview/page";
import CourseEnroll from "../courseEnroll/page";
import Footer from "../footer/page";

import Navbar from "../navbar/page";
import BackendPric from "../backendPric/page";

export default function Backend(){
    return(
        <>
            <Navbar/>
            <BackendHero/>
            <BackendSect2/>
            <BackendPric/>
            <BackendPackages/>
            
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            
            
        </>
    )
}