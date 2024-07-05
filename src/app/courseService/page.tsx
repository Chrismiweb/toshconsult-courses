import icon1 from '../image/Group 24.png'
import icon2 from '../image/Group 29.png'
import icon3 from '../image/Group 26.png'
import icon4 from '../image/Group 28.png'
import icon5 from '../image/Group 27.png'


import Image from 'next/image'
export default function CourseService(){
    const skill = [
        {
            icon: icon1,
            name: "Web development"
        },
        {
            icon: icon2,
            name: "Digital marketing"
        },
        
        {
            icon: icon3,
            name: "UI/UX design"
        },
        {
            icon: icon4,
            name: "Software development"
        },
        {
            icon: icon5,
            name: "Mobile app development"
        },
        // {
            
        //     reach: "Reach Out"
        // },
    ]
    return(
        <div className="w-[100%] py-[30px] bg-white gap-5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[40px] items-center">
                <h1 className="md:text-[40px] text-black text-[30px] font-bold w-[80%] lg:w-[45%] text-center">Enrich your business with our expert sofware solutions</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="lg:w-[80%] w-[90%] rounded-[20px] bg-[#F8E7F8] items-center justify-center gap-[30px] px-[2px] md:px-[10px] lg:px-[50px] py-[80px] lg:py-[100px] flex flex-wrap">
                {skill.map((sk, index)=>(
                        <div className='flex justify-center py-[20px] rounded-[20px] items-center gap-[10px] bg-white px-[12px]' key={index}>
                            <div>
                                <Image className='w-[5vw] lg:w-[2vw]' src={sk.icon} alt="" />
                            </div>
                            <p className='font-bold text-black text-[16px] md:text-[18px]'>{sk.name}</p>
                        </div>
                ))}
                <div>
                    <button className="flex font-bold text-[18px] justify-center py-[12px] rounded-[20px] text-white items-center gap-[10px] bg-black px-[20px]">Reach Out</button>
                </div>
            </div>
        </div>
    )
}