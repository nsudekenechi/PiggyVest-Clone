import React from 'react'
import logo from "../../public/images/piggyvest-logo.0b78a8fa.svg"
import Image from 'next/image'
import Link from 'next/link'
import loginIcon from "../../public/images/login-logo.png"
import loginIcon2 from "../../public/images/login-logo-2.png"
import loginIcon3 from "../../public/images/login-logo-3.png"
import loginIcon4 from "../../public/images/login-logo-4.png"
const page = () => {
    return (
        <main className='bg-[#062863]  flex flex-col justify-center items-center gap-y-10 p-10'>
            <Link href={"/"} className='relative z-10'>
                <Image src={logo} width={200} />
            </Link>

            <div className='relative z-10 bg-white w-[37%] p-10 rounded-t-3xl rounded-br-3xl'>
                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-bold text-[#083e9e]'>Login to your account</h1>
                    <p className='text-sm font-light text-[#4a5568]'>Securely login to your PiggyVest</p>
                </div>
                <form action="" className='flex flex-col gap-y-5'>

                    <div className=''>
                        <label className='text-xs font-semibold'>Email or Phone Number</label>
                        <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md'>
                            <input type="text" className='w-[100%] bg-transparent outline-none' />
                        </div>
                    </div>

                    <div className=''>
                        <label className='text-xs font-semibold'>Password</label>
                        <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md'>
                            <input type="password" className='w-[100%] bg-transparent outline-none' />
                        </div>
                    </div>
                    <button className='mt-3 btn bg-[#0d60d8] p-4 text-white hover:bg-[#083e9e] rounded-bl-none'>LOG IN</button>
                </form>

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
                <Image src={loginIcon} width={200} quality={100}/>
                <Image src={loginIcon2} width={200} quality={100} className='relative -right-[8.5%] top-14'/>

            </div>

            <div className='fixed left-0 top-[70%] flex justify-between w-[100%]'>
                <Image src={loginIcon3} width={200} quality={100} className='relative -left-[6.5%] top-10'/>
                <Image src={loginIcon4} width={200} quality={100} className='relative -right-[6.5%] top-0'/>

            </div>
        </main>
    )
}

export default page