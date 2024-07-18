import BackendHero from "../backendHero/page";
import BackendPackages from "../backendPackages/page";
import BackendSect2 from "../backendSect2/page";
import FrontendWhy from "../frontendWhy/page";
import FrontendSteps from "../frontendSteps/page";
import FrontendReview from "../frontendReview/page";
import CourseEnroll from "../courseEnroll/page";
import Footer from "../footer/page";

import Navbar from "../navbar/page";
import MobileAppHero from "../mobileAppHero/page";
import FrontendAchievement from "../frontendAchievement/page";
import MobileAppPackages from "../mobileAppPackages/page";
import MobileAppPrice from "../mobileAppPrice/page";

export default function MobileApp(){
    return(
        <>
            <Navbar/>
            <MobileAppHero/>
            <MobileAppPrice/>
            <MobileAppPackages/>
            <FrontendWhy/>
            <FrontendSteps/>
            <FrontendReview/>
            <CourseEnroll/>
            <Footer/>
            
            
        </>
    )
}