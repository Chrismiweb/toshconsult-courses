import Image  from "next/image"
import img from '../image/Group 30.png'
export default function FrontendHero(){
    return(
        <div className="w-[100%] bg-white flex justify-center items-center">
            <div className="w-[80%] flex justify-between items-center">
                <div className="w-[50%]">
                    <h1 className="text-[60px] text-black font-bold ">Become a frontend professional </h1>
                    <p className="text-[#000000B2] text-[15px] w-[85%]">Dive into the Future of Tech Education. Select Your Course, Apply Instantly.</p>
                    <button className="text-white bg-black py-[10px] px-[25px]">Get Started</button>
                </div>
                <div className="w-[40%]">
                    <Image src={img} alt="" />
                </div>
            </div>
        </div>
    )
}