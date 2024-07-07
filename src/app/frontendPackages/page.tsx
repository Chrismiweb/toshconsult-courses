import img1 from '../image/Rectangle 29.png'
import Image from "next/image"
export default function FrontendPackages(){
    const packages = [
        {
            img: img1
        }
    ]
    return(
        <div className="w-[100%] flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-black font-bold w-[80%] lg:w-[45%] text-center">Our curated frontend development courses</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className='w-[100%] flex flex-col justify-center items-center'>
                {packages.map((p, index)=>(
                    <div key={index} className='flex w-[80%]  justify-center items-center bg-red-200'>
                        <div className='w-[350px] h-[300px] bg-red-100'>
                            <Image className='w-[100%] h-[100%]' src={p.img} alt="" />
                        </div>
                        <div className='bg-red-300 relative right-[100px] top-[40px] w-[480px] h-[280px]'>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}