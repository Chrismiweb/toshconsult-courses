import AllCourseProps2 from "../AllCourseProps2/page"
import AllCourseProps from "../allCourseProps/page"
import mark from '../image/tabler-icon-circle-check-filled.png'
export default function AllCourses(){
    return(
        <div className="w-[100%] bg-white gap-5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="text-[40px] font-bold w-[65%] text-center">Best Courses Available To Choose</h1>
                <p className="w-[60%] text-[#000000B2] text-center text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="w-[80%] gap-3 flex">
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
            <div className="w-[80%] gap-3 flex">
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
            <div className="w-[80%] gap-3 flex">
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
            <div className="w-[80%] gap-3 flex">
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