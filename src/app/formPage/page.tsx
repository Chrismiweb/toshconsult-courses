import { FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from '../image/logo.png'
export default function FormPage(){
    return(
        
    <div className="w-[100%] bg-white flex-col gap-[50px] py-[50px] flex justify-center items-center">
        <div>
            <Image src={logo} alt="" />
        </div>
         <div className="lg:w-[65%] w-[90%] rounded-lg bg-[#FEF9E3] py-[20px] px-[30px]">
            <h1 className="text-[#FB9B02] font-bold">Register For Our Training</h1>
        </div>    
        <form className="lg:w-[65%] w-[90%]  flex flex-col gap-[25px]">
            <div className="w-[100%] gap-[20px] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">FULL NAME</p>
                    <input type="text" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
                <div className="md:w-[48%] w-[100%] flex flex-col gap-[10px]">
                    <p className="font-medium text-[13px] text-black">EMAIL</p>
                    <input type="email" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
            </div>
            <div className="w-[100%] flex flex-col gap-[10px]">
                <p className="font-medium text-[13px] text-black">CHOOSE COURSE</p>
                <input type="text" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
            </div> 
            <div className="w-[100%] gap-[20px] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">STATE</p>
                    <input type="text" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">CITY</p>
                    <input type="text" className="border w-[100%] text-[13px] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
            </div>
            <div className="w-[100%] gap-[20px] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">STATE</p>
                    <select className="border text-[13px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px]  rounded-[10px]" >
                       <option className="text-[13px]" value="">Select Course Type</option>
                       <option className="text-[13px]" value="">Frontend Development</option>
                       <option className="text-[13px]" value="">Backend Development</option>
                       <option className="text-[13px]" value="">Python Full-Stack Development</option>
                       <option className="text-[13px]" value="">UI/UX Design</option>
                       <option className="text-[13px]" value="">Mobile App Development</option>
                       <option className="text-[13px]" value="">Javascript Full-Stack Development</option>
                       <option className="text-[13px]" value="">Digital Marketing</option>
                       <option className="text-[13px]" value="">Wordpress Development</option>




                    </select>
                </div> 
                <div className="md:w-[48%] w-[100%] flex flex-col md:gap-[10px]">
                    <p className="font-medium text-[13px] text-black">CITY</p>
                    <input type="text" className="border text-[13px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
                </div> 
            </div>

            <div className=" w-[100%] flex flex-col gap-[10px]">
                <p className="font-medium text-[13px] text-black">WHY DO YOU WANT TO LEARN THIS COURSE?</p>
                <p className="text-[#00000080] text-[11px] font-semibold">The Question Is Meant To Help Us Familiarize With Your Interest And Specifics Skills.</p>
                <textarea className="border h-[200px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
            </div>    
            <p className="text-[#00000080] text-[11px] font-semibold">Submit Your Application For Our Team To Review. Our Team Will Get Back To You Within 24 Hours.</p>
            <button className="bg-[#FB9B02] transition-all duration-1000 hover:bg-[#d49633] w-[40%] lg:w-[15%] rounded-[10px] py-[12px] text-[white] font-semibold">Send Now</button>                   
        </form>
        <Link href='/'>
            <p className="text-[#FB9B02] py-[30px] underline font-semibold text-center cursor-pointer text-[17px] w-[100%]">Back To Home</p>
        </Link>            
    </div>
    )
}