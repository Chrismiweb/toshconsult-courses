import img1 from '../image/Rectangle 29.png'
import Image from "next/image"
export default function FrontendPackages(){
    const packages = [
        {
            img: img1,
            topic: "Fundamental of javascript",
            price: "50,000",
            discount: "50% OFF",
            fprice :"N100,000",
            mark: "mark",
            crs1: "Data Fetching",
            crs2: "Varaible",
            crs3: "mapping",
            crs4: "Looping",
            crs5: "JSON",
            crs6: "Data Objext",
            beginner: ". Beginner",
            dur: ". 3 weeks",
            time: "MON-FRI",
            btn1: "Request Code",
            btn2:"Start Course"
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
                    <div key={index} className='flex w-[95%]  lg:w-[80%]  justify-center items-center '>
                        <div className='w-[50%] md:w-[900px] lg:w-[350px] md:h-[300px]'>
                            <Image className='w-[100%] h-[100%]' src={p.img} alt="" />
                        </div>
                        <div className='relative rounded-[20px] py-[20px] shadow-2xl px-[20px] bg-white right-[100px] top-[40px] md:w-[950px]  lg:w-[480px] md:h-[280px]'>
                            <div className='w-[100%] flex justify-between items-center'>
                                <h1 className='font-bold text-black w-[40%] md:text-[20px] lg:text-[25px]'>{p.topic}</h1>
                                <div className='w-[40%]'>
                                    <p className='font-bold text-[20px] text-black'>{p.price}</p>
                                    <div className='flex gap-[10px]'>
                                        <p className='bg-[#FB9B02]  py-[3px] text-[10px] rounded-[5px] px-[5px] font-semibold text-white'>{p.discount}</p>
                                        <p>{p.fprice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}