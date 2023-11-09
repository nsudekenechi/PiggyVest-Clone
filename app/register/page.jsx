import React from 'react'
import logo from "../../public/images/piggyvest-logo.0b78a8fa.svg"
import Image from 'next/image'
import Link from 'next/link'
import loginIcon from "../../public/images/login-logo.png"
import loginIcon2 from "../../public/images/login-logo-2.png"
import loginIcon3 from "../../public/images/login-logo-3.png"
import loginIcon4 from "../../public/images/login-logo-4.png"
import { RiArrowDownSLine } from "react-icons/ri"
const Register = () => {
  const inputs = [
    {
      name: "Full Name",
      type: "text",
      placeholder: "Fullname"
    },
    {
      name: "Email Address",
      type: "email",
    },
    {
      name: "Phone Number",
      type: "text"
    },
    {
      name: "Password",
      type: "password"
    },
    {
      name: "Referrer Phone or Promo Code (Optional)",
      type: "text"
    },
    {
      name: "Phone Numbere",
      type: "text"
    }
  ]
  return (
    <main className='bg-[#062863]  flex flex-col justify-center items-center gap-y-10 p-10'>
      <Link href={"/"} className='relative z-10'>
        <Image src={logo} width={200} />
      </Link>

      <div className='relative z-10 bg-white w-[40%] p-10 rounded-t-3xl rounded-br-3xl'>
        <div className='text-center mb-10'>
          <h1 className='text-2xl font-bold text-[#083e9e]'>Create a Secure Account
            t</h1>
          <p className='text-sm font-light text-[#4a5568]'>Welcome to the future of Savings & Investments</p>
        </div>
        <form action="" className='flex flex-col gap-y-5'>
          {
            inputs.map((input, index) => (

              <div className='' key={index}>
                <label className='text-xs font-semibold'>{input.name} </label>
                <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md'>
                  <input type={input.type} className='w-[100%] bg-transparent outline-none placeholder:text-sm' placeholder={index == 4 ? "Referrer Phone or Code" : input.name} />
                </div>
              </div>
            ))
          }

          <div className=''>
            <label className='text-xs font-semibold '> How Did You Hear About Us? (Optional)
              <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md justify-between'>
                <input type={"text"} className='w-[100%] bg-transparent outline-none placeholder:text-sm' placeholder='Click to Select' disabled />
                <div className='border-black border-l flex justify-center items-center pl-3'>
                  <RiArrowDownSLine size={15} />
                </div>
              </div>
            </label>

          </div>

          <button className='mt-3 btn bg-[#0d60d8] p-4 text-white hover:bg-[#083e9e] rounded-bl-none'>CREATE ACCOUNT</button>
        </form>

      </div>
      <div className='relative z-10 flex flex-col justify-center items-center gap-y-3'>
        <Link href={"/login"} className='text-white text-xs'>
          Already have an account? Login
        </Link>

      </div>
      <div className='fixed left-0 -top-16 flex justify-between w-[100%]'>
        <Image src={loginIcon} width={200} quality={100} />
        <Image src={loginIcon2} width={200} quality={100} className='relative -right-[8.5%] top-14' />

      </div>

      <div className='fixed left-0 top-[70%] flex justify-between w-[100%]'>
        <Image src={loginIcon3} width={200} quality={100} className='relative -left-[6.5%] top-10' />
        <Image src={loginIcon4} width={200} quality={100} className='relative -right-[6.5%] top-0' />

      </div>
    </main>
  )
}

export default Register