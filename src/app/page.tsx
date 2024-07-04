import Image from "next/image";
import Navbar from "./navbar/page";
import CourseHero from "./courseHero/page";
import CourseBrands from "./courseBrands/page";
import AllCourses from "./allCourses/page";

export default function Home() {
  return (
      <>
          <Navbar/> 
          <CourseHero/>     
          <CourseBrands/>
          <AllCourses/>
      </>
  );
}
