'use client';
import logo from '../image/logo (2).png'
import Image from 'next/image'
import img1 from '../image/Group 13.png'
import img2 from '../image/Group 15.png'
import img3 from '../image/Group 16 (1).png'
import img4 from '../image/Group 17.png'
import { useState, useEffect } from 'react'

export default function Footer(){
    const [year, setYear] = useState(Number);

    useEffect(() => {
      const date = new Date().getFullYear();
      setYear(date)
    }, [])
    
    const footMenu = [
        {
            head: "Contact",
            page1:"Enquiries: support@toshconsultinc.com",
            page2:"Partnership: partnership@toshconsultinc.com",
            page3: "Admin: admin@toshconsultinc.com"
        },
        {
            head: "Product",
            page1:"TismaBiz",
            page2:"FreeQuery",
            page3: "FalconPay",
            page4: "Alphabills",
            page5: "SmartFarmers",
            page6: "EasyTechAfrica",
            page7: "Course For Children",
        },
        {
            head: "Servcies",
            page1:"Website Development",
            page2:"Mobile App Development",
            page3: "Digital Marketing",
            page4: "Software Development",
            page5: "UI/UX Design",
            page6: "SEO Management",
            page7: "Social Media Management",
        },
        {
            head: "About",
            page1:"About Us",
            page2:"Contact Us",
            page3: "FAQ",
            
        }
    ]
    return(
        <div className='custom-gradien bg-black gap-[50px] lg:gap-[20px] w-[100%] flex flex-col border-t-2 py-[40px] justify-center items-center'>
            <div className='lg:w-[80%] w-[90%] gap-[40px] flex lg:flex-row flex-col justify-between lg:items-center '>
                <div>
                    <Image className='lg:w-[7vw] w-[30%]' src={logo} alt="" />
                </div>
                <div className='flex gap-[20px]  '>
                    <Image className='lg:w-[3vw] w-[10%] cursor-pointer' src={img1} alt="" />
                    <Image className='lg:w-[3vw] w-[10%] cursor-pointer' src={img2} alt="" />
                    <Image className='lg:w-[3vw] w-[10%] cursor-pointer' src={img4} alt="" />
                    <Image className='lg:w-[3vw] w-[10%] cursor-pointer' src={img3} alt="" />
                </div>
            </div>
            <div className='lg:w-[80%] w-[90%] flex flex-col lg:flex-row justify-between '>
                {footMenu.map((menu, index)=>(
                <div key={index} className='py-[30px] flex flex-col gap-3'>
                    <h1 className='lg:text-[22px] text-[30px] text-black font-semibold'>{menu.head}</h1>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page1}</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page2}</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page3}</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page4}</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page5}</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page6}</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>{menu.page7}</p>
                </div>
                ))}
            </div>
            <div className='w-[90%] lg:w-[80%] flex flex-col gap-[10px]'>
                <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2]'>30B, Ibrahim Taiwo Road, Ilorin, Kwara, NG</p>
                <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2]'>08103856846</p>
                <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2]'>info@toshconsult.com</p>
            </div>
            <h1 className='lg:text-[13px] text-[18px] text-center py-[30px] font-semibold text-[#FFFFFFB2] w-[90%]'>Copyright © 2015 - {year} || All Rights Reserved.</h1>
        </div>
    )
}