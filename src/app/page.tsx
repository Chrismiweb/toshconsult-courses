import Image from "next/image";
import Navbar from "./navbar/page";
import CourseHero from "./courseHero/page";
import CourseBrands from "./courseBrands/page";
import AllCourses from "./allCourses/page";
import CourseService from "./courseService/page";
import Footer from "./footer/page";
import CourseFaq from "./courseFaq/page";
import CourseEnroll from "./courseEnroll/page";
import CourseReview from "./courseReview/page";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Course page | Toshconsult Technologies Inc",
    description: "Unlock your potential and achieve your goals with our comprehensive Digtial courses. Enroll now and start learning!",
  };

export default function Home() {
  return (
      <>
          <Navbar/> 
          <CourseHero/>     
          <CourseBrands/>
          <AllCourses/>
          <CourseService/>
          <CourseReview/>
          <CourseFaq/>
          <CourseEnroll/>
          <Footer/>
      </>
  );
}
