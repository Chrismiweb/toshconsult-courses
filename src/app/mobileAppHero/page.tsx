import Image  from "next/image"
import Link from "next/link"
import img from '../image/mobile.png'
export default function MobileAppHero(){
    return(
        <div className="w-[100%] py-[60px] bg-white flex justify-center items-center">
            <div className="w-[90%] gap-[50px] md:gap-0 lg:w-[80%] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[50%] w-[100%] items-center md:items-start flex flex-col gap-[20px]">
                    <h1 className="lg:text-[60px] text-center md:text-start text-[40px] text-black font-bold ">Become a Mobile App Developer </h1>
                    <p className="text-[#000000B2] text-center md:text-start text-[15px] w-[85%]">Want to turn your app ideas into reality? Become a mobile app developer! Learn to code, build apps, and launch your career in this exciting field.  Get started today!</p>
                    <Link href = "/formPage">
                    <button className="text-white w-[100%] lg:w-[100%] px-[30px]  font-semibold bg-black py-[10px] rounded-[30px]">Get Started</button>

                    </Link>
                </div>
                <div className="md:w-[45%] w-[100%]">
                    <Image src={img} alt="" />
                </div>
            </div>
        </div>
    )
}