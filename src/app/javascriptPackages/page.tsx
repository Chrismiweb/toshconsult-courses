import img1 from '../image/Rectangle 29.png'
import img2 from '../image/Rectangle 30.png'
import img3 from '../image/Rectangle 31.png'
import img4 from '../image/nodejs.png'
import Link from 'next/link'
import Image from "next/image"
import { IoCheckmarkOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
export default function JavascriptPackages(){
    const packages = [
        {
            img: img1,
            topic: "Fundamental of javascript",
            sub: "The beginners courses to be a pro. in javascript",
            price: "50,000",
            discount: "50% OFF",
            fprice :"N100,000",
            mark: <IoCheckmarkOutline/>,
            crs1: "Data Fetching",
            crs2: "ES6",
            crs3: "OOP",
            crs4: "Looping",
            crs5: "JSON",
            crs6: "Data Objext",
            dot: <LuDot/>,
            beginner: "Beginner",
            dur: "3 weeks",
            time: "MON-FRI",
            btn1: "Request Code",
            btn2:"Start Course"
        },
        {
            img: img2,
            topic: "Fundamental HTML, CSS Framework",
            sub: "The beginners courses to be a pro. in Html, Css Framwork",
            // price: "50,000",
            // discount: "50% OFF",
            // fprice :"N100,000",
            mark: <IoCheckmarkOutline/>,
            crs1: "HTML Basics",
            crs2: "CSS Framework Introduction",
            crs3: "CSS Fundamentals ",
            crs4: "Building Simple Web Pages ",
            crs5: "Twailwind CSS",
            crs6: "Document Structure",
            dot: <LuDot/>,
            beginner: "Beginner",
            dur: "3 weeks",
            time: "MON-FRI",
            btn1: "Request Code",
            btn2:"Start Course"
        },
        {
            img: img3,
            topic: "Fundamental of react and hooks",
            sub: "The beginners courses to be a pro. in Reac.Js",
            price: "50,000",
            discount: "50% OFF",
            fprice :"N100,000",
            mark: <IoCheckmarkOutline/>,
            crs1: "Core React Concepts",
            crs2: "React Hooks",
            crs3: "Building React Applications",
            crs4: "State Management",
            crs5: "Firebase",
            crs6: "React Concept",
            dot: <LuDot/>,
            beginner: "Beginner",
            dur: "3 weeks",
            time: "MON-FRI",
            btn1: "Request Code",
            btn2:"Start Course"
        },
        {
            img: img4,
            topic: "Fundamental of Node.Js",
            sub: "The beginners courses to be a pro. in Node.Js",
            price: "50,000",
            discount: "50% OFF",
            fprice :"N100,000",
            mark: <IoCheckmarkOutline/>,
            crs1: "Routing",
            crs2: "Building APIs",
            crs3: "Databases",
            crs4: "Authentication and Authorization",
            crs5: "HTTP Module",
            crs6: "Static File Serving",
            dot: <LuDot/>,
            beginner: "Beginner",
            dur: "3 weeks",
            time: "MON-FRI",
            btn1: "Request Code",
            btn2:"Start Course"
        }
    ]
    return(
        <div className="w-[100%] bg-white flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-black font-bold w-[80%] lg:w-[45%] text-center">Our curated frontend development courses</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className='w-[100%] gap-[100px] pb-[100px] flex flex-col justify-center items-center'>
                {packages.map((p, index)=>(
                    <div key={index} className='flex w-[95%]  lg:w-[70%]'>
                        <div className='absolute w-[80%] md:w-[400px] md:h-[350px]'>
                            <Image className='w-[100%] rounded-[20px] h-[100%]' src={p.img} alt="" />
                        </div>
                        <div className='relative w-[90%] h-[100%] left-[25px] top-[20px] rounded-[20px] py-[40px] shadow-2xl px-[20px] bg-white md:left-[250px] md:top-[30px]  md:w-[480px]'>
                            <div className='w-[100%] flex flex-wrap md:flex-nowrap  justify-between items-center'>
                                <div className='flex flex-col w-[100%] '>
                                    <h1 className='font-bold text-black w-[100%] text-[20px] md:text-[25px] md:w-[80%] '>{p.topic}</h1>
                                    <p className='text-[12px] text-[#00000080] font-semibold'>{p.sub}</p>
                                </div>
                                {/* <div className='w-[50%]'>
                                    <p className='font-bold text-[15px] md:text-[20px] text-black'>{p.price}</p>
                                    <div className='flex w-[100%] justify-between items-center '>
                                        <p className='bg-[#FB9B02] text-[10px] rounded-[5px] px-[5px] font-semibold text-white'>{p.discount}</p>
                                        <p className='font-semibold text-[15px] line-through'>{p.fprice}</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className='flex flex-wrap w-[80%] gap-[20px] py-[20px]'>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <p className='text-black font-bold'>{p.mark}</p>
                                    <p className='font-semibold text-black text-[13px]'>{p.crs1}</p>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <p className='text-black font-bold'>{p.mark}</p>
                                    <p className='font-semibold text-black text-[13px]'>{p.crs2}</p>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <p className='text-black font-bold'>{p.mark}</p>
                                    <p className='font-semibold  text-black text-[13px]'>{p.crs3}</p>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <p className='text-black font-bold'>{p.mark}</p>
                                    <p className='font-semibold text-black text-[13px]'>{p.crs4}</p>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <p className='text-black font-bold'>{p.mark}</p>
                                    <p className='font-semibold text-black text-[13px]'>{p.crs5}</p>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <p className='text-black font-bold'>{p.mark}</p>
                                    <p className='font-semibold text-black text-[13px]'>{p.crs6}</p>
                                </div>
                            </div>
                            <div className='w-[100%] flex-wrap py-[15px] flex gap-[30px]'>
                                <div className='flex '>
                                    <p className='text-black'>{p.dot}</p>
                                    <p className='font-bold text-black text-[13px]'>{p.beginner}</p>
                                </div>
                                <div className='flex '>
                                    <p className='text-black'>{p.dot}</p>
                                    <p className='font-bold text-black text-[13px]'>{p.dur}</p>
                                </div>
                                <div className='flex '>
                                    <p className='text-black'>{p.dot}</p>
                                    <p className='font-bold text-black text-[13px]'>{p.time}</p>
                                </div>
                            </div>
                            <div className='w-[100%] flex md:flex-row flex-col gap-[20px] pt-[10px] justify-end md:pr-[40px]'>
                            <Link href = "/formPage">
                                <button className='bg-[#FB9B02] text-white font-semibold py-[10px] px-[20px] text-[13px] rounded-[30px]'>{p.btn1}</button>
                                
                                </Link>
                                <Link href = "/formPage">

                                <button className='bg-[black] text-white font-semibold py-[10px] px-[20px] text-[13px] rounded-[30px]'>{p.btn2}</button>
                                
                                </Link>

                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}