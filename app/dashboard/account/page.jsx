import React from 'react'
import security from "../../../public/images/2-factor-min.png"
import Link from 'next/link'
import Image from 'next/image'
import {FaAngleRight} from "react-icons/fa6"
import { myAccount } from '@/app/components/uidata';

const Account = () => {

  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold mb-1'>My Account</h1>
        <p className='text-[#718096] font-light '>Nsude Kenechi</p>

        <div className='grid grid-cols-3 gap-x-10'>
          <div className="">
            <Link href={"/"} className='block my-10'>
              <Image src={security} width={300} quality={100} className='rounded-xl' alt='security' />
            </Link>

            {myAccount.map((item, index) => (
              myAccount.length - 1 == index ? <Link key={index} href={item.href} className='px-5 py-4 border rounded-global flex items-center mb-5 justify-between'>
                <div className='text-red-500 flex items-center gap-x-2'>
                  {item.icon}
                  <span className='text-xs font-light capitalize'>{item.title}</span>
                </div>

                <FaAngleRight />

              </Link> : <Link key={index} href={item.href} className='gap-x-2 px-5 py-4 border rounded-global flex items-center mb-5'>
                {item.icon}
                <span className='text-xs font-light capitalize'>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account