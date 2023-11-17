import React from 'react'
import logo from "../../public/images/piggyvest-logo.0b78a8fa.svg"
import Image from 'next/image'
import Link from 'next/link'
import loginIcon from "../../public/images/login-logo.png"
import loginIcon2 from "../../public/images/login-logo-2.png"
import loginIcon3 from "../../public/images/login-logo-3.png"
import loginIcon4 from "../../public/images/login-logo-4.png"
import Form from './Form'
const page = () => {

    return (
        <main className='bg-[#062863]  flex flex-col justify-center items-center gap-y-10 p-10'>
            <Link href={"/"} className='relative z-10'>
                <Image src={logo} width={200} alt='logo' />
            </Link>

            <div className='relative z-10 bg-white w-[37%] p-10 rounded-t-3xl rounded-br-3xl'>
                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-bold text-[#083e9e]'>Login to your account</h1>
                    <p className='text-sm font-light text-[#4a5568]'>Securely login to your PiggyVest</p>
                </div>

                <Form />
            </div>
            <div className='relative z-10 flex flex-col justify-center items-center gap-y-3'>
                <Link href={"/register"} className='text-white text-xs'>
                    Don&apos;t  have an account? Register
                </Link>
                <Link href={"/"} className='text-white text-xs'>
                    Forgot Password?
                </Link>
            </div>
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

export default page