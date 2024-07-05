import Image from "next/image";
import Navbar from "./navbar/page";
import CourseHero from "./courseHero/page";
import CourseBrands from "./courseBrands/page";
import AllCourses from "./allCourses/page";
import CourseService from "./courseService/page";
import Footer from "./footer/page";
import CourseFaq from "./courseFaq/page";

export default function Home() {
  return (
      <>
          <Navbar/> 
          <CourseHero/>     
          <CourseBrands/>
          <AllCourses/>
          <CourseService/>
          <CourseFaq/>
          <Footer/>

      </>
  );
}
