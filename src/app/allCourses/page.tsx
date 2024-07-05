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
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
                <AllCourseProps2
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
               
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
            <AllCourseProps2
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
                <AllCourseProps
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
                
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
                <AllCourseProps
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
                <AllCourseProps2
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
               
            </div>
            <div className="lg:w-[80%] w-[90%] gap-3 flex md:flex-row flex-col">
            <AllCourseProps2
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
                <AllCourseProps
                    header = "Frontend Development Masterclass"
                    text = "Dive into the world of frontend development. Learn HTML, CSS, and JavaScript. Master popular frameworks like React and Vue.js. Create responsive, user-friendly interfaces."
                    curriculum ="Curriculum"
                    img = {mark}
                    btn = "Get Started"
                    date = "02 SEPT Batches"
                    time = "Lesson time"
                    when = "MON - FRI"
                    duration ="Duration"
                />
            </div>
           
        </div>
    )
}