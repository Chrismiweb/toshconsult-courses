import CourseEnroll from "../courseEnroll/page";
import Footer from "../footer/page";
import FrontendAchievement from "../frontendAchievement/page";
import FrontendHero from "../frontendHero/page";
import FrontendPackages from "../frontendPackages/page";
import FrontendReview from "../frontendReview/page";
import FrontendSteps from "../frontendSteps/page";
import FrontendWhy from "../frontendWhy/page";
import Navbar from "../navbar/page";

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