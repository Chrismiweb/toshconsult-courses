"use client"
import { useState } from "react"

export default function CourseFaq(){
    const questions = [
        {
            number : "01.",
            question:"Will there be any assignments or projects?",
            answer: "Yes, the course will likely include hands-on assignments and projects to solidify your learning. You'll build practical applications and apply your newly acquired skills.",
            icon : "+"
        },
        {
            number : "02.",
            question:"Will I receive a certificate upon completion?",
            answer: "Upon successful completion of the course, you will receive a certificate of completion for your training",

            icon : "+"
        },
        {
            number : "03.",
            question:"What resources will be provided to support my learning?",
            answer: "We will provide you additional resources such as online tutorials, code repositories, or access to online forums and communities to continue learning after the course.",

            icon : "+"
        },
        {
            number : "04.",
            question : "What are the career support options after completing the course?",
            answer : "We provide career guidance services, portfolio building workshops, and connections with potential employers to help you start your career.",

            icon : "+"
        },
        {
            number : "05.",
            question: "Is there any one-on-one support available during the course?",
            answer : "Yes, at Toshconsult Technology Inc we offer access to instructors and teaching assistants for additional guidance and support during your learning journey.",

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
                <h1 className="md:text-[40px] text-black text-[30px] font-bold w-[80%] lg:w-[60%] text-center">Frequently asked question</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="md:w-[80%] w-[90%] flex flex-col gap-[30px] justify-center items-center">
                {questions.map((q, index)=>(
                    <div key={index} className="w-[90%] md:w-[80%]">
                        <div onClick={()=>handleAnswe(index)} key={index} className="flex cursor-pointer items-center justify-between md:px-[50px] lg:px-[100px] w-[100%]">
                            <div className="flex w-[100%] gap-[20px]  items-center">
                                <h1 className="font-bold text-black text-[23px]">{q.number}</h1>
                                <p className="font-semibold text-black text-[13px]">{q.question}</p>
                            </div>
                            <button className=" w-[35px] text-black h-[35px] flex justify-center items-center text-[20px] rounded-full border-black border-2">{answer === index ? "-" : q.icon}</button>

                        </div>
                        {
                            answer === index && 
                            <div className="w-[100%] py-[25px] md:px-[50px] lg:px-[100px] justify-center items-center flex">
                                <p className="font-semibold text-black text-[13px]">{q.answer}</p>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}