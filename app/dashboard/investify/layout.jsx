"use client";
import React from 'react'
import avatar from "../../../public/images/dashboard_avatar.png"
import Image from 'next/image'
import Link from 'next/link'
import { BiInfoCircle } from 'react-icons/bi'
import styles from "./style.module.css"
import { usePathname } from 'next/navigation'
import { dashboardInvest } from '@/app/components/uidata';
const layout = ({children}) => {
    const path = usePathname();
    return (
        <div>
            <header>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>Investify</h1>
                    </div>
                    <Image src={avatar} width={60} quality={100} />
                </div>
            </header>
            <main className='grid grid-cols-1 lg:grid-cols-3 gap-x-10 py-10'>
                <div className="col-span-2 border  rounded-global mb-20">
                    <div className='px-5 py-8'>
                        <p className='text-xs uppercase mb-2'>Total Balance</p>
                        <p className='text-4xl text-[#7913e5] font-bold'>
                            ₦0.00
                        </p>
                    </div>
                    <Link href={""} className="flex gap-x-3 border-t p-3 justify-center items-center hover:text-[#083e9e]">
                        <BiInfoCircle size={25} />  <p>Learn More</p>
                    </Link>
                </div>
                <div className="border p-5 h-fit rounded-global">
                    <p className='text-xs uppercase '>expected roi</p>
                    <h1 className='text-2xl text-[#7913e5] my-2'>Up to 25%</h1>
                    <p className='text-xs  mb-2'>Per Annum</p>

                </div>

                <div className="col-span-2 border rounded-global ">
                    <div className='p-3 flex border-b relative gap-x-10'>
                        {dashboardInvest.map((item, index) => (
                            <Link key={index} href={item.href} className={`flex items-center text-sm gap-x-2 ${path == item.href ? styles.active : 'text-gray-400'}`}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="" width="25px" xmlns="http://www.w3.org/2000/svg">
                                    {item.icon}
                                </svg>

                                {item.title}
                            </Link>
                        ))}




                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            </main>

        </div>
    )
}

export default layout