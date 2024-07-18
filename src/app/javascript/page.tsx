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