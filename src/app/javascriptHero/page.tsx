import Image  from "next/image"
import img from '../image/python2.png'
export default function JavascriptHero(){
    return(
        <div className="w-[100%] py-[60px] bg-white flex justify-center items-center">
            <div className="w-[90%] gap-[50px] md:gap-0 lg:w-[80%] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[50%] w-[100%] items-center md:items-start flex flex-col gap-[20px]">
                    <h1 className="lg:text-[60px] text-center md:text-start text-[40px] text-black font-bold ">Become a Javascript Full-Stack Developer </h1>
                    <p className="text-[#000000B2] text-center md:text-start text-[15px] w-[85%]">Want to learn Javascript? Build entire websites! Become a Javascript Full-Stack Developer. Learn front-end, back-end & databases. Code your dream career!</p>
                    <button className="text-white w-[50%] lg:w-[30%] hover:bg-gray-700 font-semibold bg-black py-[10px] rounded-[30px]">Get Started</button>
                </div>
                <div className="md:w-[45%] w-[100%]">
                    <Image className="rounded-[20px]" src={img} alt="" />
                </div>
            </div>
        </div>
    )
}