import React from 'react'
import Link from 'next/link'
import Form from './Form'
const page = () => {

    return (
        <>
            <div className='relative z-10 bg-white w-[37%] p-10 rounded-t-3xl rounded-br-3xl'>
                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-bold text-[#083e9e]'>Login to your account</h1>
                    <p className='text-sm font-light text-[#4a5568]'>Securely login to your PiggyVest</p>
                </div>

                <Form />
            </div>
            <div className=' flex flex-col justify-center items-center gap-y-3'>
                <Link href={"/register"} className='text-white text-xs'>
                    Don&apos;t  have an account? Register
                </Link>
                <Link href={"/"} className='text-white text-xs'>
                    Forgot Password?
                </Link>
            </div>



        </>
    )
}

export default page