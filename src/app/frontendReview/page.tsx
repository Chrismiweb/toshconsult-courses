import Image from "next/image"
import img1 from '../image/vid1.png'
import img2 from '../image/Group 34.png'
import img3 from '../image/Group 37.png'
import img4 from '../image/vid2.png'
import img5 from '../image/Group 35.png'
import img6 from '../image/Group 38.png'
import img7 from '../image/vid3.png'
import img8 from '../image/Group 36.png'
import img9 from '../image/Group 39.png'
import { IoPlayCircle } from "react-icons/io5";

export default function FrontendReview(){
    const review1 = [
        {
            pics: img1,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem",
            link: "https://www.facebook.com/reel/1909893339396849/?mibextid=rS40aB7S9Ucbxw6v"

        },
        {
            pics: img2,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem"
        },
        {
            pics: img3,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem"
        },
    ]
    const review2 = [
        {
            pics: img4,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem",
            link:"https://www.facebook.com/100090879831825/posts/183585191347474/?mibextid=rS40aB7S9Ucbxw6v"


        },
        {
            pics: img5,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem"
        },
        {
            pics: img6,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem"
        },
    ]
    const review3 = [
        {
            pics: img7,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem",
            link:"https://www.facebook.com/100090879831825/posts/154398564266137/?mibextid=rS40aB7S9Ucbxw6v"

        },
        {
            pics: img8,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem"
        },
        {
            pics: img9,
            name: "Gbadegesin farouq",
            rev: "Frontend developer, MSMEs Ecosystem"
        },
    ]
    return(
        <div className="w-[100%] py-[60px] bg-white flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center py-[30px] items-center">
                <h1 className="md:text-[40px] text-[30px] text-black font-bold w-[80%]  lg:w-[45%] text-center">What our students are saying</h1>
                <p className="lg:w-[50%] w-[85%] text-[#00000099] text-center text-[16px] lg:text-[12px] font-semibold">At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.</p>
            </div>
             <div className="lg:w-[80%] gap-[30px] md:gap-0 w-[90%] flex-col items-center md:flex-row justify-center flex md:justify-around lg:justify-evenly">
                <div className="md:w-[25%] w-[80%] gap-[30px] flex flex-col">
                    {review1.map((r, index)=>(
                        <div className="w-[100%] gap-[7px] flex flex-col" key={index}>
                            <a target="_blank" href={r.link}>
                                <div className="h-[350px] cursor-pointer flex justify-center items-center rounded-[20px] overflow-hidden">
                                    <Image className="w-[full] h-full object-cover" src={r.pics} alt="" />
                                    <IoPlayCircle className="absolute text-white text-[50px]" />
                                </div>
                            </a>
                            <h1 className="font-bold text-[16px]">{r.name}</h1>
                            <p className="text-[12px] font-semibold text-[#00000080]">{r.rev}</p>
                        </div>
                    ))}
                </div>
                <div className="md:w-[25%] w-[80%] md:mt-[70px] gap-[30px] flex flex-col">
                    {review2.map((r, index)=>(
                        <div className="w-[100%] gap-[7px] flex flex-col" key={index}>
                             <a target="_blank" href={r.link}>
                                <div className="h-[350px] cursor-pointer flex justify-center items-center rounded-[20px] overflow-hidden">
                                    <Image className="w-[full] h-full object-cover" src={r.pics} alt="" />
                                    <IoPlayCircle className="absolute text-white text-[50px]" />
                                </div>
                            </a>
                            <h1 className="font-bold text-[15px]">{r.name}</h1>
                            <p className="text-[12px] font-semibold text-[#00000080]">{r.rev}</p>
                        </div>
                    ))}
                </div>
                <div className="md:w-[25%] w-[80%]  md:mt-[140px] gap-[30px] flex flex-col">
                    {review3.map((r, index)=>(
                        <div className="w-[100%] gap-[7px] flex flex-col" key={index}>
                             <a target="_blank" href={r.link}>
                                <div className="h-[350px] cursor-pointer flex justify-center items-center rounded-[20px] overflow-hidden">
                                    <Image className="w-[full] h-full object-cover" src={r.pics} alt="" />
                                    <IoPlayCircle className="absolute text-white text-[50px]" />
                                </div>
                            </a>
                            <h1 className="font-bold text-[15px]">{r.name}</h1>
                            <p className="text-[12px] font-semibold text-[#00000080]">{r.rev}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}