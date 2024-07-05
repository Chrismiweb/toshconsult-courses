"use client"
import { useState } from "react"

export default function CourseFaq(){
    const questions = [
        {
            number : "01.",
            questiob : "Frequently asked question",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            icon : "+"
        },
        {
            number : "02.",
            questiob : "Frequently asked question",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

            icon : "+"
        },
        {
            number : "03.",
            questiob : "Frequently asked question",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

            icon : "+"
        },
        {
            number : "04.",
            questiob : "Frequently asked question",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

            icon : "+"
        },
        {
            number : "05.",
            questiob : "Frequently asked question",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

            icon : "+"
        },
        {
            number : "06.",
            questiob : "Frequently asn",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

            icon : "+"
        },
        {
            number : "07.",
            questiob : "Frequently asked question",
            answer : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            icon : "+"
        },
    ]
    const [answer, setAnswer] = useState(null)
    function handleAnswe(indexes:any){
        setAnswer(answer === indexes ? null : indexes)
    }
    return(
        <div className="w-[100%] bg-white gap-5 py-[60px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] font-bold w-[80%] lg:w-[60%] text-center">Frequently asked question</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="md:w-[80%] w-[90%] flex flex-col gap-[30px] justify-center items-center">
                {questions.map((q, index)=>(
                    <div className="w-[90%] md:w-[80%]">
                        <div onClick={()=>handleAnswe(index)} key={index} className="flex items-center justify-between md:px-[50px] lg:px-[100px] w-[100%]">
                            <div className="flex gap-[20px] justify-center items-center">
                                <h1 className="font-bold text-[23px]">{q.number}</h1>
                                <p className="font-semibold text-[13px]">{q.questiob}</p>
                            </div>
                            <button className=" w-[35px] h-[35px] flex justify-center items-center text-[20px] rounded-full border-black border-2">{q.icon}</button>

                        </div>
                        {
                            answer === index && 
                            <div className="w-[100%] py-[25px] md:px-[50px] lg:px-[100px] justify-center items-center flex">
                                <p className="font-semibold text-[13px]">{q.answer}</p>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}