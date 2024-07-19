'use client';
import logo from '../image/logo (2).png'
import Image from 'next/image'
import img1 from '../image/Group 13.png'
import img2 from '../image/Group 15.png'
import img3 from '../image/Group 16 (1).png'
import img4 from '../image/Group 17.png'
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Footer(){
    const [year, setYear] = useState(Number);

    useEffect(() => {
      const date = new Date().getFullYear();
      setYear(date)
    }, [])
    return(
        <div className='custom-gradient bg-black gap-[50px] lg:gap-[20px] w-[100%] flex flex-col border-t-2 py-[40px] justify-center items-center'>
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
                <div className='py-[30px] flex flex-col gap-3'>
                    <h1 className='lg:text-[22px] text-white text-[30px]  font-semibold'>Contact</h1>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Enquiries: support@toshconsultinc.com</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Partnership: partnership@toshconsultinc.com</p>
                    <p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Admin: admin@toshconsultinc.com</p>
                </div>
                {/* <div className='py-[30px] flex flex-col gap-3'>
                    <h1 className='lg:text-[22px] text-[30px] text-white font-semibold'>Product</h1>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>TismaBiz</p></Link>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>FreeQuery</p></Link>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>FalconPay</p></Link>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Alphabills</p></Link>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>SmartFarmers</p></Link>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>EasyTechAfrica</p></Link>
                    <Link href="/"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Course For Children</p></Link>
                </div> */}
                <div className='py-[30px] flex flex-col gap-3'>
                    <h1 className='lg:text-[22px] text-[30px] text-white font-semibold'>Courses</h1>
                    <Link href="/frontend"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Frontend Development</p></Link>
                    <Link href="/backend"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Backend Development</p></Link>
                    <Link href="/mobileApp"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Mobile App Development</p></Link>
                    <Link href="/uiux"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>UI/UX Design</p></Link>
                    <Link href="/digmark"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Digital Marketing</p></Link>
                    <Link href="/python"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Python Full-Stack Development</p></Link>
                    <Link href="/javascript"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Javascript Full-Stack Development</p></Link>
                    <Link href="/wordpress"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Wordpress Development</p></Link>


                </div>
                <div className='py-[30px] flex flex-col gap-3'>
                    <h1 className='lg:text-[22px] text-[30px] text-white font-semibold'>About</h1>
                    <Link href="/about"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>About Us</p></Link>
                    <Link href="/contact"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>Contact Us</p></Link>
                    <Link href="/faq"><p className='lg:text-[13px] text-[18px] font-semibold text-[#FFFFFFB2] cursor-pointer'>FAQ</p></Link>
                </div>
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