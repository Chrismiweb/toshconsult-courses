"use client";
import Image from "next/image";
import logo from '../image/logo (2).png';
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [dropdown, setDropdown] = useState({ courses: false, resources: false });

    function toggleMenu() {
        setMenu(!menu);
    }

    function showDropdown(key: string) {
        setDropdown(prev => ({ ...prev, [key]: true }));
    }

    function hideDropdown(key: string) {
        setDropdown(prev => ({ ...prev, [key]: false }));
    }

    return (
        <div className='custom-gradient bg-black w-full flex-col justify-center flex items-center'>
            <div className="w-4/5 py-5 flex justify-between items-center">
                <div>
                    <Image className="w-[18vw] md:w-[7vw]" src={logo} alt="Logo" />
                </div>
                <div className='hidden md:flex md:items-center md:justify-center md:gap-8 md:font-medium md:text-sm'>
                    <Link href='/'><p className="text-white">Home</p></Link>
                    <div 
                        onMouseOver={() => showDropdown('courses')} 
                        onMouseLeave={() => hideDropdown('courses')} 
                        className="relative"
                    >
                        <p className="text-white flex items-center cursor-pointer">Course <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {dropdown.courses && (
                            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 rounded z-50">
                                <Link href='/course1'><p className="text-black px-4 py-2 hover:bg-gray-200">Course 1</p></Link>
                                <Link href='/course2'><p className="text-black px-4 py-2 hover:bg-gray-200">Course 2</p></Link>
                            </div>
                        )}
                    </div>
                    <Link href='/'><p className="text-white">About</p></Link>
                    <Link href='/'><p className="text-white">Students Project</p></Link>
                    <div 
                        onMouseOver={() => showDropdown('resources')} 
                        onMouseLeave={() => hideDropdown('resources')} 
                        className="relative"
                    >
                        <p className="text-white flex items-center cursor-pointer">Resources <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {dropdown.resources && (
                            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 rounded z-50">
                                <Link href='/resource1'><p className="text-black px-4 py-2 hover:bg-gray-200">Resource 1</p></Link>
                                <Link href='/resource2'><p className="text-black px-4 py-2 hover:bg-gray-200">Resource 2</p></Link>
                            </div>
                        )}
                    </div>
                </div>
                <Link href='/contact'>
                    <button className='hidden md:flex py-2 px-6 text-sm rounded-xl font-bold hover:bg-[#dd9015] transition duration-300 text-white bg-[#FB9B02]'>Apply Now</button>
                </Link>
                <button onClick={toggleMenu} className="text-white text-3xl lg:hidden"><MdMenu /></button>
            </div>
            {menu && (
                <div className='flex flex-col h-[100vh] gap-[20px] pt-[30px] items-center md:hidden'>
                    <Link href='/'><p className="text-white text-[20px] font-semibold">Home</p></Link>
                    <div 
                        onClick={() => showDropdown('courses')} 
                        className="relative"
                    >
                        <p className="text-white flex text-[20px] font-semibold items-center cursor-pointer">Course <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {dropdown.courses && (
                            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 rounded">
                                <Link href='/course1'><p className="text-black text-[20px] font-semibold px-4 py-2 hover:bg-gray-200">Course 1</p></Link>
                                <Link href='/course2'><p className="text-black text-[20px] font-semibold px-4 py-2 hover:bg-gray-200">Course 2</p></Link>
                            </div>
                        )}
                    </div>
                    <Link href='/'><p className="text-white text-[20px] font-semibold">About</p></Link>
                    <Link href='/'><p className="text-white text-[20px] font-semibold">Students Project</p></Link>
                    <div 
                        onClick={() => showDropdown('resources')} 
                        className="relative"
                    >
                        <p className="text-white flex text-[20px] font-semibold items-center cursor-pointer">Resources <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {dropdown.resources && (
                            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 rounded">
                                <Link href='/resource1'><p className="text-black text-[20px] font-semibold px-4 py-2 hover:bg-gray-200">Resource 1</p></Link>
                                <Link href='/resource2'><p className="text-black text-[20px] font-semibold px-4 py-2 hover:bg-gray-200">Resource 2</p></Link>
                            </div>
                        )}
                    </div>
                    <Link href='/contact'>
                        <button className='py-2 text-sm rounded-xl text-[20px] font-semibold font-bold hover:bg-[#dd9015] transition duration-300 text-white px-6 bg-[#FB9B02]'>Apply Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
