import AllCourseProps2 from "../AllCourseProps2/page"
import AllCourseProps from "../allCourseProps/page"
import mark from '../image/tabler-icon-circle-check-filled.png'
export default function AllCourses(){
    return(
        <div className="w-[100%] bg-white gap-5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-black font-bold w-[80%] lg:w-[45%] text-center">Best Courses Available To Choose</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
                {/* these are the props  */}
                <AllCourseProps
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link = "/frontend"
                />
                <AllCourseProps2
                    header = "Backend Development Masterclass"
                    text = "Explore server-side technologies, databases, and server management. Dive into languages like Node.js, Ruby on Rails, or Django. Build robust backend systems for web applications."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link ='/backend'
                />
               
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
            <AllCourseProps2
                    header = "Mobile App Development Course"
                    text = "Develop Android and iOS apps from scratch. Learn mobile UI/UX design principles. Work with frameworks like React Native or Flutter. Launch your apps on app stores."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link = '/mobileApp'
                />
                <AllCourseProps
                    header = "Python Full-Stack Development Course"
                    text = "Combine Python's versatility with frontend and backend technologies. Build dynamic websites using frameworks like Django and Flask. Develop interactive user interfaces with JavaScript."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link = "/python"

                />
                
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
                <AllCourseProps
                    header = "JavaScript Full-stack Development Course"
                    text = "Become proficient in both frontend and backend JavaScript technologies. Learn Node.js for server-side development. Use React or Angular for building modern, dynamic interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link = "/javascript"

                />
                <AllCourseProps2
                    header = "UI/UX Design Fundamentals Course"
                    text = "Master the art of user-centered design. Learn wireframing, prototyping, and user testing. Explore tools like Sketch and Adobe XD. Craft seamless and intuitive user experiences."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link = "/uiux"
                />
               
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
            <AllCourseProps2
                    header = "Digital Marketing Course"
                    text = "Unlock the power of online marketing. Learn SEO, social media marketing, email marketing, and PPC advertising. Analyze data, create compelling campaigns, and boost online presence."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link ='/digmark'
                />
                <AllCourseProps
                    header = "Wordpress Development Course"
                    text = "Master Wordpress from basics to advanced customization. Create responsive and SEO-friendly websites. Explore theme development, plugins, and e-commerce integration."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                    link = "/wordpress"

                />
            </div>
           
        </div>
    )
}