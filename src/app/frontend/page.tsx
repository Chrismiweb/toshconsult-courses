import FrontendAchievement from "../frontendAchievement/page";
import FrontendHero from "../frontendHero/page";
import FrontendPackages from "../frontendPackages/page";
import Navbar from "../navbar/page";

export default function Frontend(){
    return(
        <>
            <Navbar/>
            <FrontendHero/>
            <FrontendAchievement/>
            <FrontendPackages/>
            
        </>
    )
}