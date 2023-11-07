"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "../../public/images/logo.svg"
import { HiMenu } from "react-icons/hi"
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            {/* Nav For Medium/Laptop screens */}
            <nav className=' lg:py-5 lg:px-10 hidden  lg:flex justify-between items-center'>
                <ul className='flex items-center gap-x-20'>
                    <li>
                        <Link href={"/"}>
                            <Image src={Logo} width={180} alt='PiggyVest Logo' />
                        </Link>
                    </li>
                    <ul className='flex gap-x-5'>
                        <li>
                            <Link href={"/save"}>Save</Link>
                        </li>
                        <li>
                            <Link href={"/invest"}>Invest</Link>
                        </li>
                        <li>
                            <Link href={"/stories"}>Stories</Link>
                        </li>
                        <li>
                            <Link href={"/faqs"}>FAQs</Link>
                        </li>
                        <li>
                            <Link href={"/resources"}>Resources</Link>
                        </li>
                    </ul>
                </ul>

                <ul className='flex items-center gap-x-5'>
                    <li>
                        <Link href={"/signup"} className='btn btn-outline normal-case hover:text-[#122231] hover:bg-transparent'>
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link href={"/signup"} className='btn btn-neutral normal-case bg-[#122231] text-white'>
                            Create free account
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Nav For Mobile */}
            <nav className='block lg:hidden px-6 py-6 md:py-8 md:px-10 fixed left-0 w-[100%]  '>
                <ul className='flex items-center justify-between '>
                    <li>
                        <Link href={"/"}>
                            <Image src={Logo} width={150} alt='PiggyVest Logo' />
                        </Link>
                    </li>
                    <li onClick={() => setShowNav(!showNav)} className='flex flex-col gap-y-2 items-center'>
                        {/* <HiMenu size={40} /> */}
                        <span className={` duration-500 h-[2px] w-6 bg-black ${showNav ? "rotate-[40deg]" : ""}`}></span>
                        <span className={`duration-500 h-[2px] w-6 bg-black ${showNav ? "hidden" : ""}`}></span>
                        <span className={` duration-500 relative h-[2px] w-6 bg-black ${showNav ? "rotate-[-40deg] top-[-10px]" : ""}`}></span>
                    </li>
                </ul>

                <ul className={`flex flex-col   text-center gap-y-6  w-[100%]   py-20 relative ${showNav ? "opacity-100" : "opacity-0"}  duration-1000`}>
                    <li>
                        <Link href={"/save"}>Save</Link>
                    </li>
                    <li>
                        <Link href={"/invest"}>Invest</Link>
                    </li>
                    <li>
                        <Link href={"/stories"}>Stories</Link>
                    </li>
                    <li>
                        <Link href={"/faqs"}>FAQs</Link>
                    </li>
                    <li>
                        <Link href={"/resources"}>Resources</Link>
                    </li>
                    <li>
                        <Link href={"/signup"} className='btn btn-outline normal-case hover:text-[#122231] hover:bg-transparent w-[100%] btn-lg '>
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link href={"/signup"} className='btn btn-neutral normal-case bg-[#122231] text-white w-[100%]  btn-lg'>
                            Create free account
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar