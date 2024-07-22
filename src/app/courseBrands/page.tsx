import Image from "next/image"
import img from '../image/image 1.png'
import img1 from '../image/Group 19.png'
import img2 from '../image/Group 20.png'
import img3 from '../image/Group 21.png'
import img4 from '../image/Group 22.png'
import img5 from '../image/Group 23.png'
import img6 from '../image/Group 18.png'


export default function CourseBrands(){
    const content = [
        {
            image: img1,
            header: "Expert Guidance",
            text : "Learn from Industry Professionals Dedicated to Your Success"
        },
        {
            image: img2,
            header: "Hands-on Experience",
            text : "Apply Your Skills to Practical, Hands-on Projects for Deep Learning"
        },
        {
            image: img3,
            header: "Personalized Learning",
            text : "Customized Learning Paths to Match Your Learning Pace and Goals"
        },
        {
            image: img5,
            header: "Industry Relevance",
            text : "Stay Ahead with the Latest Technologies and Industry Trends"
        },
        {
            image: img4,
            header: "Career Support",
            text : "Boost Your Career with Our Exclusive Job Placement Support"
        },
       
        {
            image: img6,
            header: "Community Engagement",
            text : "Connect with Peers, Collaborate on Projects, and Expand Your Network"
        },
    ]
    return(
        <div className="w-[100%] bg-white flex flex-col justify-center items-center">
            <div className="flex flex-col px-[30px] w-[100%] gap-[40px] justify-center items-center py-[60px]">
                <p className="text-center text-black font-semibold text-[18px] lg:text-[15px]">Loves by brands and partners</p>
                <div className="flex flex-wrap w-[100%] justify-center items-center gap-[5px] lg:gap-[30px]">
                    <p className="font-bold text-[15px] md:text-[30px] text-[#000000B2]">MSME</p>
                    <p className="font-bold">|</p>
                    <p className="font-bold text-[15px] md:text-[30px] text-[#000000B2]">Formserver</p>
                    <p className="font-bold">|</p>
                    <p className="font-bold text-[15px] md:text-[30px] text-[#000000B2]">Web3 Horizons</p>
                    {/* <Image className="w-[50px] md:w-[150px]" src={img} alt =''/>
                    <Image className="w-[50px] md:w-[150px]" src={img} alt =''/>
                    <Image className="w-[50px] md:w-[150px]" src={img} alt =''/>
                    <Image className="w-[50px] md:w-[150px]" src={img} alt =''/> */}
                </div>
            </div>
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-black font-bold w-[80%] lg:w-[45%] text-center">Elevate Your Skills, Transform Your Future</h1>
                <p className="lg:w-[50%] w-[85%] text-[#000000B2] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
            <div className="w-[80%] py-[50px] gap-[30px] flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
                {content.map((cnt, index)=>(
                <div className="flex gap-2 justify-center w-[100%]" key={index}>
                    <div className="w-[20%]">
                        <Image  src={cnt.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-black text-[15px]">{cnt.header}</h1>
                        <p className="text-[11px] font-semibold text-[#000000B2]">{cnt.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}