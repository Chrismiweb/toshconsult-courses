"use client";
import Image from "next/image";
import logo from '../image/logo (2).png';
import Link from "next/link";
import img1 from '../image/tabler-icon-code.png'
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [course, setCourse] = useState(false);
    const [resource, setResource] = useState(false);

    
    const [dropdown, setDropdown] = useState({ courses: false, resources: false });

    function toggleMenu() {
        setMenu(!menu);
    }
    function toggleCourse(){
        setCourse(!course)
    }
    function toggleResource(){
        setResource(!resource)
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
                <div className='hidden lg:flex md:items-center md:justify-center md:gap-8 md:font-medium md:text-sm'>
                    <Link href='/'><p className="text-white">Home</p></Link>
                    <div 
                        // onMouseOver={() => showDropdown('courses')} 
                        // onMouseLeave={() => hideDropdown('courses')} 
                        // onClick={()=> showDropdown('courses')}
                        onClick={toggleCourse}
                        className="relative"
                    >
                        <p className="text-white flex items-center cursor-pointer">Course <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {course && (
                            <div className="absolute grid grid-cols-2 w-[500px] top-full left-0 bg-white shadow-lg mt-2 py-2 rounded z-50">
                            <Link href='/frontend'><p className="text-black px-4 py-2 hover:bg-gray-200">Frontend Devlopment</p></Link>
                            <Link href='/backend'><p className="text-black px-4 py-2 hover:bg-gray-200">Backend Development</p></Link>
                            <Link href='/mobileApp'><p className="text-black px-4 py-2 hover:bg-gray-200">Mobile App Development</p></Link>
                            <Link href='/python'><p className="text-black px-4 py-2 hover:bg-gray-200">Python Full-Stack Development</p></Link>
                            <Link href='/javascript'><p className="text-black px-4 py-2 hover:bg-gray-200">JavaScript Full-stack Development</p></Link>
                            <Link href='/uiux'><p className="text-black px-4 py-2 hover:bg-gray-200">UI/UX Design Fundamentals Course</p></Link>
                            <Link href='/digmark'><p className="text-black px-4 py-2 hover:bg-gray-200">Digital Marketing Course</p></Link>
                            <Link href='/wordpress'><p className="text-black px-4 py-2 hover:bg-gray-200">Wordpress Development Course</p></Link>



                            </div>
                
                        )}
                    </div>
                    <Link href='/about'><p className="text-white">About</p></Link>
                    <Link href='/'><p className="text-white">Students Project</p></Link>
                    <div 
                        // onMouseOver={() => showDropdown('resources')} 
                        // onMouseLeave={() => hideDropdown('resources')} 
                        // onClick={()=>showDropdown('resources')}
                        onClick={toggleResource}
                        className="relative"
                    >
                        <p className="text-white flex items-center cursor-pointer">Resources <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {resource && (
                            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 rounded z-50">
                                <Link href='/resource1'><p className="text-black px-4 py-2 hover:bg-gray-200">Resource 1</p></Link>
                                <Link href='/resource2'><p className="text-black px-4 py-2 hover:bg-gray-200">Resource 2</p></Link>
                            </div>
                        )}
                    </div>
                </div>
                <Link href='/formPage'>
                    <button className='hidden lg:flex py-2 px-6 text-sm rounded-xl font-bold hover:bg-[#dd9015] transition duration-300 text-white bg-[#FB9B02]'>Apply Now</button>
                </Link>
                <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">{menu ? <IoClose/> : <MdMenu/>} </button>
            </div>
            {menu && (
                <div className='flex w-[100%] flex-col h-[100vh] gap-[20px] pt-[30px] items-center lg:hidden'>
                    <Link href='/'><p className="text-white text-[20px] font-semibold">Home</p></Link>
                    <div 
                        // onClick={() => showDropdown('courses')} 
                        onClick={toggleCourse}
                        className="relative w-[100%] flex-col flex justify-center items-center"
                    >
                        <p className="text-white flex text-[20px] font-semibold items-center cursor-pointer">Course <RiArrowDropDownLine className="text-white font-bold text-lg" /></p>
                        {course && (
                           <div className=" flex-col justify-center items-center gap-[18px] flex w-[90%] top-full  bg-black shadow-lg mt-2 py-2 rounded z-50">
                           <Link href='/frontend'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">Frontend Devlopment</p></Link>
                           <Link href='/backend'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">Backend Development</p></Link>
                           <Link href='/mobileApp'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">Mobile App Development</p></Link>
                           <Link href='/python'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">Python Full-Stack Development</p></Link>
                           <Link href='/javascript'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">JavaScript Full-stack Development</p></Link>
                           <Link href='/uiux'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">UI/UX Design Fundamentals Course</p></Link>
                           <Link href='/digmark'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">Digital Marketing Course</p></Link>
                           <Link href='/wordpress'><p className="text-white flex text-[18px] font-semibold items-center cursor-pointer">Wordpress Development Course</p></Link>

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
                                {/* <Link href='/resource1'><p className="text-black text-[20px] font-semibold px-4 py-2 hover:bg-gray-200">Resource 1</p></Link>
                                <Link href='/resource2'><p className="text-black text-[20px] font-semibold px-4 py-2 hover:bg-gray-200">Resource 2</p></Link> */}
                            </div>
                        )}
                    </div>
                    <Link href='/formPage'>
                        <button className='py-2 text-sm rounded-xl text-[20px] font-semibold  hover:bg-[#dd9015] transition duration-300 text-white px-6 bg-[#FB9B02]'>Apply Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
}



// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { MdMenu } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
// import logo from '../image/logo (2).png';
// import img1 from '../image/tabler-icon-code.png';

// export default function Navbar() {
//     const [menu, setMenu] = useState(false);
//     const [dropdown, setDropdown] = useState({ courses: false, resources: false });

//     const toggleMenu = () => setMenu(!menu);
//     const showDropdown = (key) => setDropdown(prev => ({ ...prev, [key]: true }));
//     const hideDropdown = (key) => setDropdown(prev => ({ ...prev, [key]: false }));

//     const DropdownMenu = ({ keyName, items }) => (
//         dropdown[keyName] && (
//             <div className="absolute gap-4 flex flex-wrap w-[400px] lg:w-[500px] top-full left-0 bg-white shadow-lg mt-2 py-2 rounded z-50">
//                 {items.map((item, index) => (
//                     <Link href={item.link} key={index}>
//                         <div className="flex gap-[10px] cursor-pointer justify-center items-center w-[50%]">
//                             <div className="w-[10%]">
//                                 <Image className="w-[100%]" src={img1} alt="" />
//                             </div>
//                             <p className="text-black text-[12px]">{item.label}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         )
//     );

//     return (
//         <div className='custom-gradient bg-black w-full flex-col justify-center flex items-center'>
//             <div className="w-4/5 py-5 flex justify-between items-center">
//                 <Image className="w-[18vw] md:w-[7vw]" src={logo} alt="Logo" />
//                 <div className='hidden lg:flex md:items-center md:justify-center md:gap-8 md:font-medium md:text-sm'>
//                     <Link href='/'><p className="text-white">Home</p></Link>
//                     <div
//                         onMouseOver={() => showDropdown('courses')}
//                         onMouseLeave={() => hideDropdown('courses')}
//                         className="relative"
//                     >
//                         <p className="text-white flex items-center cursor-pointer">
//                             Courses <RiArrowDropDownLine className="text-white font-bold text-lg" />
//                         </p>
//                         <DropdownMenu
//                             keyName="courses"
//                             items={[
//                                 { label: 'Frontend development', link: '/frontend' },
//                                 { label: 'Backend development', link: '/frontend' },
//                                 { label: 'UI/UX design', link: '/frontend' },
//                                 { label: 'Mobile app development', link: '/frontend' },
//                                 { label: 'Python fullstack', link: '/frontend' },
//                                 { label: 'Wordpress development', link: '/frontend' },
//                                 { label: 'Javascript fullstack', link: '/frontend' }
//                             ]}
//                         />
//                     </div>
//                     <Link href='/'><p className="text-white">About</p></Link>
//                     <Link href='/'><p className="text-white">Students Project</p></Link>
//                     <div
//                         onMouseOver={() => showDropdown('resources')}
//                         onMouseLeave={() => hideDropdown('resources')}
//                         className="relative"
//                     >
//                         <p className="text-white flex items-center cursor-pointer">
//                             Resources <RiArrowDropDownLine className="text-white font-bold text-lg" />
//                         </p>
//                         <DropdownMenu
//                             keyName="resources"
//                             items={[
//                                 { label: 'Resource 1', link: '/resource1' },
//                                 { label: 'Resource 2', link: '/resource2' }
//                             ]}
//                         />
//                     </div>
//                 </div>
//                 <Link href='/contact'>
//                     <button className='hidden lg:flex py-2 px-6 text-sm rounded-xl font-bold hover:bg-[#dd9015] transition duration-300 text-white bg-[#FB9B02]'>
//                         Apply Now
//                     </button>
//                 </Link>
//                 <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
//                     {menu ? <IoClose /> : <MdMenu />}
//                 </button>
//             </div>
//             {menu && (
//                 <div className='flex flex-col h-[100vh] gap-[20px] pt-[30px] items-center lg:hidden'>
//                     <Link href='/'><p className="text-white text-[20px] font-semibold">Home</p></Link>
//                     <div onClick={() => showDropdown('courses')} className="relative">
//                         <p className="text-white flex text-[20px] font-semibold items-center cursor-pointer">
//                             Courses <RiArrowDropDownLine className="text-white font-bold text-lg" />
//                         </p>
//                         <DropdownMenu
//                             keyName="courses"
//                             items={[
//                                 { label: 'Frontend development', link: '/frontend' },
//                                 { label: 'Backend development', link: '/frontend' },
//                                 { label: 'UI/UX design', link: '/frontend' },
//                                 { label: 'Mobile app development', link: '/frontend' },
//                                 { label: 'Python fullstack', link: '/frontend' },
//                                 { label: 'Wordpress development', link: '/frontend' },
//                                 { label: 'Javascript fullstack', link: '/frontend' }
//                             ]}
//                         />
//                     </div>
//                     <Link href='/'><p className="text-white text-[20px] font-semibold">About</p></Link>
//                     <Link href='/'><p className="text-white text-[20px] font-semibold">Students Project</p></Link>
//                     <div onClick={() => showDropdown('resources')} className="relative">
//                         <p className="text-white flex text-[20px] font-semibold items-center cursor-pointer">
//                             Resources <RiArrowDropDownLine className="text-white font-bold text-lg" />
//                         </p>
//                         <DropdownMenu
//                             keyName="resources"
//                             items={[
//                                 { label: 'Resource 1', link: '/resource1' },
//                                 { label: 'Resource 2', link: '/resource2' }
//                             ]}
//                         />
//                     </div>
//                     <Link href='/contact'>
//                         <button className='py-2 text-sm rounded-xl text-[20px] font-semibold hover:bg-[#dd9015] transition duration-300 text-white px-6 bg-[#FB9B02]'>
//                             Apply Now
//                         </button>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// }
