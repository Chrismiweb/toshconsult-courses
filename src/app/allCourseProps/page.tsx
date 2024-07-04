import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import img from '../image/tabler-icon-circle-check-filled.png'

export default function AllCourseProps(props:any){
    return(
        <div className = "w-[55%] rounded-t-[20px] h-[450px] bg-[#F8E7F8] py-[20px] px-[50px]">
            <h1 className="font-bold text-[30px] text-black">{props.header} </h1>
            <p className="text-[12px] text-[#000000B2] font-semibold">{props.text}</p>
            <div className="flex mt-[40px] gap-[40px]">
                <div className="flex gap-[10px] flex-col">
                    <p className="text-[#00000080] text-[12px]">{props.curriculum}</p>
                    <div className="flex items-center gap-2">
                        <Image className="w-[4vh]" src={props.img} alt="" />
                        <p className="text-black text-[16px] font-bold ">{props.date}</p>
                    </div>
                </div>
                <div className="flex gap-[10px] flex-col">
                    <p className="text-[#00000080] text-[12px]">{props.time}</p>
                    <div className="flex items-center gap-2">
                        <Image className="w-[4vh]" src={props.img} alt="" />
                        <p className="text-black text-[16px] font-bold ">{props.when}</p>
                    </div>
                </div>
            </div>
            <div className="flex mt-[30px] gap-[10px] flex-col">
                <p className="text-[#00000080] text-[12px]">{props.time}</p>
                <div className="flex items-center gap-2">
                    <Image className="w-[4vh]" src={props.img} alt="" />
                    <p className="text-black text-[16px] font-bold ">{props.duration}</p>
                </div>
            </div>
            <button className="bg-black mt-[30px] text-[13px] text-white py-[10px] px-[30px] rounded-[25px]">{props.btn}</button>
        </div>
    )
}