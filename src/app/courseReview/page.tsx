"use client"
import Image from "next/image"
import pics1 from '../image/Ellipse 8.png'
import vids1 from '../image/vid1.png'
import vids2 from '../image/vid2.png'
import vids3 from '../image/vid3.png'

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
// import FacebookVideoEmbed from '../FacebookVideoEmbed';
import next from "next"
export default function CourseReview(){
//     const embedCode = `
//     <iframe 
//       src="https://www.facebook.com/reel/1909893339396849/?mibextid=rS40aB7S9Ucbxw6v" 
//       width="560" 
//       height="315" 
//       style="border:none;overflow:hidden" 
//       scrolling="no" 
//       frameborder="0" 
//       allowTransparency="true" 
//       allow="encrypted-media" 
//       allowFullScreen="true">
//     </iframe>
//   `;
    const review = [
        {
            comment : "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            pics: pics1,
            name: "Bitero Chrismi",
            position: "Frontend developer, MSME Ecosystem",
            video : vids1,
            link: "https://www.facebook.com/reel/1909893339396849/?mibextid=rS40aB7S9Ucbxw6v"
        },
        {
            comment : " Toshconsult Technologies Inc built me to become high paid developer in multi-millionaire company in Lagos",
            pics: pics1,
            name: "Mr John",
            position: "Frontend developer, MSME Ecosystem",
            video : vids2,
            link:"https://www.facebook.com/100090879831825/posts/183585191347474/?mibextid=rS40aB7S9Ucbxw6v"
        },
        {
            comment : "empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",
            pics: pics1,
            name: "Mr Tolu Asiwaju",
            position: "Frontend developer, MSME Ecosystem",
            video : vids3,
            link:"https://www.facebook.com/100090879831825/posts/154398564266137/?mibextid=rS40aB7S9Ucbxw6v"
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
                   <div className="flex flex-col gap-[30px] w-[100%] justify-between items-center">
                        <div  className="w-[100%] justify-between gap-[20px] flex flex-col-reverse md:flex-row">
                            <div className="md:w-[100%] shadow-md shadow-slate-400 py-[50px] px-[40px] h-[350px] rounded-[10px]">
                                <p className="text-black text-[15px]">{review[currentState].comment}</p>
                                <div className="flex mt-[70px] gap-[20px]">
                                    {/* <div className="w-[10%] ">
                                        <Image src={review[currentState].pics} alt="" />
                                    </div> */}
                                    <div>
                                        <p className="font-semibold text-black text-[19px]">{review[currentState].name}</p>
                                        <p className="text-[#000000B2] text-[13px] font-medium">{review[currentState].position}</p>

                                    </div>
                                </div>
                            </div>
                            <a target="_blank" className="w-[100%] rounded-[20px] cursor-pointer md:w-[40%] h-[350px]" href={review[currentState].link}>
                                <div className="relative rounded-[20px] w-[100%] cursor-pointer flex justify-center items-center h-[350px] ">
                                    <Image className="h-full rounded-[20px] w-[100%] object-cover" src={review[currentState].video} alt="" layout="fill" />
                                    <div className="absolute rounded-[20px] inset-0 bg-black opacity-50 "></div>
                                    <IoPlayCircle className="absolute text-white text-[50px]" />
                                </div>
                            </a>
                            
                        </div>
                        <div className="flex gap-[20px]">
                            <button onClick={handlePrevious} className="font-bold text-black text-[30px] lg:text-[20px]"><FaArrowLeft/></button>
                            <button onClick={handleNext}  className="font-bold text-black text-[30px] lg:text-[20px]"><FaArrowRight /></button>
                        </div>
                   </div>
                {/* ))} */}

            </div>
            {/* <div>
      <h1>Welcome to My Next.js Site</h1>
      <FacebookVideoEmbed embedCode={embedCode} />
    </div>
            */}
        </div>
    )
}