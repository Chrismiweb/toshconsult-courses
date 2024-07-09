import Image from "next/image"
import line from '../image/Line 1.png'
export default function FrontendSteps(){
    
    return(
        <div className="w-[100%] py-[60px] bg-white flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-black font-bold w-[80%]  lg:w-[45%] text-center">Steps to get started</h1>
                <p className="lg:w-[50%] w-[85%] text-[#00000099] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="lg:w-[80%] w-[90%] flex justify-between items-center">
                <div className="flex flex-col items-center lg:items-start justify-center w-[20%]">
                    <h1 className="text-[#00000033] text-[30px] md:text-[60px] lg:text-[90px] font-bold">01.</h1>
                    <p className="text-black w-[100%] text-[10px] text-center lg:text-left md:text-[15px] font-medium">Choose your prefered course</p>
                </div>
                <div className="lg:w-[15%] w-[10%]">
                    <Image  src={line} alt="" />
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center w-[20%]">
                    <h1 className="text-[#00000033] text-[30px] md:text-[60px] lg:text-[90px] font-bold">02.</h1>
                    <p className="text-black w-[100%] text-[10px] text-center lg:text-left md:text-[15px] font-medium">Reach out to us to purchase course</p>
                </div>
                <div className="lg:w-[15%] w-[10%] ">
                    <Image src={line} alt="" />
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center w-[20%]">
                    <h1 className="text-[#00000033] text-[30px] md:text-[60px] lg:text-[90px] font-bold">03.</h1>
                    <p className="text-black w-[100%] text-[10px] text-center lg:text-left md:text-[15px] font-medium">Start learning and become professional</p>
                </div>
            </div>
           
        </div>
    )
}