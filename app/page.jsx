import Link from "next/link";
import Navbar from "./components/Navbar";
import { AiFillApple } from "react-icons/ai"
import Image from "next/image";
import playStore from "../public/images/google-icon.svg"
import womanPicture from "../public/images/pexels-ketut-subiyanto-4350099.avif"
import safelock from "../public/images/safelock.avif"
import targetsavings from "../public/images/targetsavings.avif"
import flexnaira from "../public/images/flexnaira.avif"
import investify from "../public/images/investify.avif"
import piggybank from "../public/images/piggybank.avif"
import securityLock from "../public/images/securitylock.svg"
import { buildSavings } from "./components/uidata";

import BuildSavings from "./components/BuildSavings";

export default function Home() {
  

  return (
    <main className="bg-[#f2f7f8]">
      <Navbar />
      {/* Header */}
      <header className="relative top-[200px] lg:top-0 grid grid-cols-2  items-end lg:grid-cols-6  px-6  md:px-10 gap-y-20">
        <div className="col-span-2 flex flex-col  text-center lg:text-left ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">The Better Way to Save & Invest </h1>
          <p className="leading-relaxed text-lg md:text-xl">Piggyvest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
          <div className="flex justify-center lg:justify-normal items-center gap-x-5 my-5">

            <Link href={"/signup"} className='flex items-center btn bg-[#122231] text-white normal-case hover:bg-[#122231] '>
              <AiFillApple size={25} /> Get on iPhone
            </Link>
            <Link href={"/signup"} className='flex items-center btn bg-[#122231] text-white normal-case hover:bg-[#122231] '>
              <Image src={playStore} width={20} alt="playstore" />
              Get on Andriod
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:flex justify-end  ">
          <div className="relative cursor-pointer animate-bounceSmall flex justify-center lg:top-20">
            <Image src={womanPicture} width={500} quality={100} alt="Woman Picture" />

            <div className="flex items-center absolute justify-between w-[100%] top-[25%]">
              <Image src={safelock} alt="safelock" width={100} quality={100} className=" w-[40%] md:w-[30%]  top-[20%] -left-2  md:left-20  lg:-left-20 relative" />
              <Image src={targetsavings} width={100} quality={100} alt="targetsavings" className="w-[40%] md:w-[30%] relative  -right-2 md:right-20  lg:-right-4" />

            </div>

            <div className="flex items-center absolute justify-between w-[100%] top-[55%]">
              <Image src={investify} alt="safelock" width={100} quality={100} className=" w-[40%] md:w-[30%]  top-[20%] -left-2  md:left-20  lg:-left-20 relative" />
              <Image src={flexnaira} width={100} quality={100} alt="targetsavings" className="w-[40%] md:w-[30%] relative  -right-2 md:right-20  lg:-right-4" />

            </div>

            <div className="flex items-center absolute justify-center w-[100%] top-[100%]">

              <Image src={piggybank} width={100} quality={100} alt="piggybank" className="w-[40%] md:w-[30%] absolute " />
            </div>

          </div>
        </div>
      </header>
      {/* Main */}
      <main className="px-6  md:px-10 py-40">
        <div className="grid grid-cols-3 py-32">
          <div className="flex items-center gap-x-5 col-span-2">
            <Image src={securityLock} width={100} />
            <div>
              <h1 className="text-2xl font-bold ">Your security is our priority</h1>
              <p className="my-3 text-sm">PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
              <div className="flex gap-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <Link href="/security" className="font-bold">
                  More on security measures
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-10 items-center">
          <div className="px-28 text-center">
            <h1 className="font-bold text-5xl leading-snug mb-5">5 ways to build your savings</h1>
            <p className="leading-relaxed text-xl" >Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          </div>

          {
            buildSavings.map((item, index) => (
              <BuildSavings item={{item,index}} key={index}/>
            ))
          }
        </div>
      </main>
    </main>
  )
}
