import React from 'react'
import logo from "../../public/images/piggyvest-logo.0b78a8fa.svg"
import Link from "next/link"
import Image from 'next/image'
import loginIcon from "../../public/images/login-logo.png"
import loginIcon2 from "../../public/images/login-logo-2.png"
import loginIcon3 from "../../public/images/login-logo-3.png"
import loginIcon4 from "../../public/images/login-logo-4.png"

const layout = ({ children }) => {
    return (

        <main className='bg-[#062863]  flex flex-col justify-center items-center gap-y-10 p-10  z-20'>
                <Link href={"/"} className=''>
                    <Image src={logo} width={200} alt='logo' />
                </Link>

                {children}

            <div className='fixed left-0 -top-16 flex justify-between w-[100%]'>
                <Image src={loginIcon} width={200} quality={100} alt='loginIcon' />
                <Image src={loginIcon2} width={200} quality={100} className='relative -right-[8.5%] top-14' alt='loginIcon2' />

            </div>

            <div className='fixed left-0 top-[70%] flex justify-between w-[100%]'>
                <Image src={loginIcon3} width={200} quality={100} className='relative -left-[6.5%] top-10' alt='loginIcon3' />
                <Image src={loginIcon4} width={200} quality={100} className='relative -right-[6.5%] top-0' alt='loginIcon4' />
            </div>
        </main>

    )
}

export default layout