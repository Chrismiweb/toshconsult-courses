import Image from "next/image"
import img1 from '../image/Rectangle 3.png'
import img2 from '../image/Rectangle 5.png'
import img3 from '../image/Rectangle 4.png'
import img4 from '../image/Rectangle 6.png'
import Link from "next/link"


export default function CourseHero(){
    return(
        <div className="w-[100%] bg-[#F8E7F8] gap-[20px] py-[60px] flex flex-col justify-center items-center">
            <div className="w-[90%] lg:w-[80%] flex">
                <div className="w-[25%] h-[180px] hidden lg:flex">
                    <Image src ={img1} alt =''/>
                </div>
                <div className="flex flex-col  gap-[20px] justify-center items-center">
                    <div className="text-center font-semibold border-1 border-[#FB9B02] text-black px-[15px] rounded-[30px] py-[5px] border bg-[#FEF3C7]">Welcome To ToshConsult</div>
                    <h1 className="text-center w-[100%] text-black text-[40px] md:text-[60px] font-bold">Where Tech Dreams Take Flight!</h1>
                    <p className="text-center text-[#000000B2] font-medium w-[100%] text-[18px] lg:text-[16px]">Dive into the Future of Tech Education. Select Your Course, Apply Instantly, and Let&apos;s Begin the Transformation Journey Together!</p>
                </div>
                <div className="w-[25%] h-[180px] hidden lg:flex">
                    <Image src ={img2} alt =''/>
                </div>
            </div>
            <div className="flex w-[90%] lg:w-[80%] justify-evenly items-center">
                <div>
                    <Image className="w-[16vw] md:w-[12vw]" src ={img3} alt =''/>
                </div>
                <Link href = "/formPage">
                <button className="bg-black text-white text-[15px] rounded-[30px] py-[10px] px-[20px]">Get Started</button>
                
                </Link>
                <div>
                    <Image className="w-[16vw] md:w-[12vw]" src ={img4} alt =''/>
                </div>
            </div>
        </div>
    )
}