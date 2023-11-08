"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from "../../public/images/logo.svg"
import { HiMenu } from "react-icons/hi"
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.onscroll = (ev) => {
            if (window.scrollY > 10) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }

        }
    }, [])
    return (
        <>
            {/* Nav For Medium/Laptop screens */}
            <nav className={`duration-1000 ${isSticky ? "bg-white shadow-md lg:py-5" : "bg-transparent lg:py-4"}  z-20  lg:px-10 hidden sticky top-0  lg:flex justify-between items-center`}>
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
            <nav className='  block lg:hidden  md:py-8 md:px-10 fixed z-10 left-0 w-[100%]  h-[100%] '>
                <ul className={`duration-1000 ${isSticky ? "bg-white shadow-md" : "bg-transparent"} flex items-center justify-between px-6 py-6 `}>
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

                <ul className={`bg-[#f2f7f8] flex flex-col   text-center gap-y-6  w-[100%] h-[100vh] px-6  py-20 relative ${showNav ? "opacity-100" : "opacity-0"}  duration-1000`}>
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