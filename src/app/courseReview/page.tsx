"use client"
import Image from "next/image"
import pics1 from '../image/Ellipse 8.png'
import vids1 from '../image/Group 3.png'
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import next from "next"
export default function CourseReview(){
    const review = [
        {
            comment : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            pics: pics1,
            name: "Bitero Chrismi",
            position: "Frontend developer, MSME Ecosystem",
            video : vids1
        },
        {
            comment : " your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            pics: pics1,
            name: "Akinloye Fawas",
            position: "Frontend developer, MSME Ecosystem",
            video : vids1
        },
        {
            comment : "empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            pics: pics1,
            name: "Mr Tolu Asiwaju",
            position: "Frontend developer, MSME Ecosystem",
            video : vids1
        },

    ]
  
    const [currentState, setCurrentState] = useState(0)
    function handleNext(){
        setCurrentState((prev)=>(prev + 1) % review.length)
    }
    function handlePrevious(){
        setCurrentState((prev)=>(prev - 1 + review.length ) % review.length)
    }
    return(
        <div className="w-[100%] bg-white flex flex-col justify-center items-center">
            <div className = "w-[90%] lg:w-[80%]  flex">
                {/* {review.map((r, index)=>( */}
                   <div className="flex flex-col gap-[30px] w-[100%] justify-center items-center">
                        <div  className="w-[100%] justify-between gap-[20px] flex flex-col-reverse md:flex-row">
                            <div className="md:w-[60%] shadow-md shadow-slate-400 py-[50px] px-[40px] h-[350px] rounded-[10px]">
                                <p className="text-black text-[15px]">{review[currentState].comment}</p>
                                <div className="flex mt-[70px] gap-[20px]">
                                    <div className="w-[10%] ">
                                        <Image src={review[currentState].pics} alt="" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[19px]">{review[currentState].name}</p>
                                        <p className="text-[#000000B2] text-[13px] font-medium">{review[currentState].position}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] md:w-[38%] h-[350px] ">
                                <Image className="h-full" src={review[currentState].video} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <button onClick={handlePrevious} className="font-bold text-black text-[30px] lg:text-[20px]"><FaArrowLeft/></button>
                            <button onClick={handleNext}  className="font-bold text-black text-[30px] lg:text-[20px]"><FaArrowRight /></button>
                        </div>
                   </div>
                {/* ))} */}

            </div>
        </div>
    )
}