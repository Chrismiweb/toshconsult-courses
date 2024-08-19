"use client";
import { FormEvent, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from '../image/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import WhatsappFloat from "../whatsappFloat/page";

  import 'react-toastify/dist/ReactToastify.css';

export default function FormPage(){
    const[fullName, setFullName] = useState("")
    const[email, setEmail] = useState("")
    const[chooseCourse, setChooseCourse] = useState("")
    const[state, setState] = useState("")
    const[city, setCity] = useState("")
    const[courseType, setCourseType] = useState("")
    const[other, setOther] = useState("")
    const[message, setMessage] = useState("")
    const[ sending, setIsSending] = useState(false)


   

    async function fetchApi(e:any){
        if(!fullName || !email || !chooseCourse || !state || !city || !courseType || !message || !other){
           return toast.warn("Please fill all credentials")
        }
        setIsSending(true)
        e.preventDefault()
        try {
            // const baseUrl = "https://forms-io.onrender.com/submit-form/21a6cf9a-0088-40fd-84d0-9ddc0f73064b";
        const baseUrl = "https://forms-io.onrender.com/submit-form/990a2d13-ad8c-4729-b97e-1f06a5301f8f";

            const response: any = await fetch(baseUrl,{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify({email, fullName, chooseCourse, state, city, courseType,other, message})
            })
            .then((res)=>(res.json))
        if(response){
            // console.log(response.message)
            // console.log(response.message)
            toast.success("Your Message have been sent successfully"); 
            setIsSending(false)
            // alert("message sent successfully")
        }
       
        } catch (error) {
            // console.log("error message" + message)
            // console.log("another error message" + error)
            toast.error("Your message could not be sent. Please try again later")
        }
    }


    return(
    <div className="w-[100%] bg-white flex-col gap-[50px] py-[50px] flex justify-center items-center">
        <ToastContainer/>
        <div>
            <Image src={logo} alt="" />
        </div>
         <div className="lg:w-[65%] w-[90%] rounded-lg bg-[#FEF9E3] py-[20px] px-[30px]">
            <h1 className="text-[#FB9B02] font-bold">Register For Our Training</h1>
        </div>    
        <form 
        // action="https://forms-io.onrender.com/submit-form/21a6cf9a-0088-40fd-84d0-9ddc0f73064b"
        // method="POST"
        className="lg:w-[65%] w-[90%]  flex flex-col gap-[25px]">
            <div className="w-[100%] gap-[20px] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">FULL NAME</p>
                    <input onChange={(e)=>setFullName(e.target.value)} required type="text" name="fullName" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
                <div className="md:w-[48%] w-[100%] flex flex-col gap-[10px]">
                    <p className="font-medium text-[13px] text-black">EMAIL</p>
                    <input onChange={(e)=>setEmail(e.target.value)} required type="email" name = "email" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
            </div>
            <div className="w-[100%] flex flex-col gap-[10px]">
                <p className="font-medium text-[13px] text-black">CHOOSE COURSE</p>
                <input onChange={(e)=>setChooseCourse(e.target.value)} required type="text" name="chooseCourse" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
            </div> 
            <div className="w-[100%] gap-[20px] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">STATE</p>
                    <input onChange={(e)=>setState(e.target.value)} required type="text" name="state" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">CITY</p>
                    <input onChange={(e)=>setCity(e.target.value)} required type="text" name="city" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
            </div>
            <div className="w-[100%] gap-[20px] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">COURSE TYPE</p>
                    <select onChange={(e)=>setCourseType(e.target.value)} required name = "courseType" className="border text-[13px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px]  rounded-[10px]" >
                       <option className="text-[13px]" value="">Select Course Type</option>
                       <option className="text-[13px]" value="Frontend Development">Frontend Development</option>
                       <option className="text-[13px]" value="Backend Development">Backend Development</option>
                       <option className="text-[13px]" value="Python Full-Stack Development">Python Full-Stack Development</option>
                       <option className="text-[13px]" value="UI/UX Design">UI/UX Design</option>
                       <option className="text-[13px]" value="Mobile App Development">Mobile App Development</option>
                       <option className="text-[13px]" value="Javascript Full-Stack Development">Javascript Full-Stack Development</option>
                       <option className="text-[13px]" value="Digital Marketing">Digital Marketing</option>
                       <option className="text-[13px]" value="Wordpress Development">Wordpress Development</option>
                    </select>
                </div> 
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">OTHERS</p>
                    <input onChange={(e)=>setOther(e.target.value)} required type="text" name= "others" className="border text-[13px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
            </div>

            <div className=" w-[100%] flex flex-col gap-[10px]">
                <p className="font-medium text-[13px] text-black">WHY DO YOU WANT TO LEARN THIS COURSE?</p>
                <p className="text-[#00000080] text-[11px] font-semibold">The Question Is Meant To Help Us Familiarize With Your Interest And Specifics Skills.</p>
                <textarea onChange={(e)=>setMessage(e.target.value)}  required  name = "message" className="border h-[200px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
            </div>    
            <p className="text-[#00000080] text-[11px] font-semibold">Submit Your Application For Our Team To Review. Our Team Will Get Back To You Within 24 Hours.</p>
            <button type="submit" onClick={fetchApi} className="bg-[#FB9B02] transition-all duration-1000 hover:bg-[#d49633] w-[40%] lg:w-[15%] rounded-[10px] py-[12px] text-[white] font-semibold">{sending ? "sending..." : "Send"}</button>                   
        </form>
        <Link href='/'>
            <p className="text-[#FB9B02] py-[30px] underline font-semibold text-center cursor-pointer text-[17px] w-[100%]">Back To Home</p>
        </Link>            
        <WhatsappFloat/>
    </div>
    )
}