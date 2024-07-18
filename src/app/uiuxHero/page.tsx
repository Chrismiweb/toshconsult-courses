import Image  from "next/image"
import img from '../image/uiux.png'
export default function UiuxHero(){
    return(
        <div className="w-[100%] py-[60px] bg-white flex justify-center items-center">
            <div className="w-[90%] gap-[50px] md:gap-0 lg:w-[80%] flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-[50%] w-[100%] items-center md:items-start flex flex-col gap-[20px]">
                    <h1 className="lg:text-[60px] text-center md:text-start text-[40px] text-black font-bold ">Become a UI/UX Designer</h1>
                    <p className="text-[#000000B2] text-center md:text-start text-[15px] w-[85%]">Craft experiences users love! Become a UI/UX designer.  Learn design, usability, and turn ideas into intuitive interfaces.  Design your future!</p>
                    <button className="text-white w-[50%] lg:w-[30%] hover:bg-gray-700 font-semibold bg-black py-[10px] rounded-[30px]">Get Started</button>
                </div>
                <div className="md:w-[45%] w-[100%]">
                    <Image className="rounded-[20px]" src={img} alt="" />
                </div>
            </div>
        </div>
    )
}