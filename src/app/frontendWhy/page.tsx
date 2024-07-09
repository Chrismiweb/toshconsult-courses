import icon1 from '../image/Vector.png'
import icon2 from '../image/Vector (1).png'
import icon3 from '../image/Vector (2).png'
import Image from 'next/image'

export default function FrontendWhy(){
    const content = [
        {
            icon: icon1,
            header: "Advance learning",
            con: "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

        },
        {
            icon: icon2,
            header: "Internship placement",
            con: "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

        },
        {
            icon: icon3,
            header: "Interactive community",
            con: "At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.",

        },
    ]
    return(
        <div className="w-[100%] py-[50px] bg-[#121212] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-white font-bold w-[80%]  lg:w-[45%] text-center">Why you should take this course</h1>
                <p className="lg:w-[50%] w-[85%] text-[#FFFFFFB2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className='w-[90%] lg:w-[80%] gap-[20px] md:gap-0 flex flex-col md:flex-row justify-between items-center'>
                {content.map((c, index)=>(
                    <div className='bg-[#00000080] rounded-[20px] h-[350px] px-[10px] py-[20px] w-[85%] md:w-[32%] lg:w-[30%] flex flex-col gap-[20px]' key={index}>
                        <div>
                            <Image src={c.icon} alt="" />
                        </div>
                        <h1 className='mt-[30px] text-white font-bold  text-[17px]'>{c.header}</h1>
                        <p className='text-[#FFFFFFB2] font-semibold text-[13px]'>{c.con}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}