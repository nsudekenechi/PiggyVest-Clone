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

export default function Home() {
  return (
    <main className="bg-[#f2f7f8]">
      <header>
        <Navbar />
        <div className="grid grid-cols-6 md:pt-[10vh] md:px-10">
          <div className="col-span-2 flex flex-col pt-[20vh] ">
            <h1 className="text-5xl font-bold leading-tight mb-5">The Better Way to Save & Invest </h1>
            <p className="leading-relaxed text-xl">Piggyvest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <div className="flex items-center gap-x-5 my-5">

              <Link href={"/signup"} className='flex items-center btn bg-[#122231] text-white normal-case hover:bg-[#122231] '>
                <AiFillApple size={25} /> Get on iPhone
              </Link>
              <Link href={"/signup"} className='flex items-center btn bg-[#122231] text-white normal-case hover:bg-[#122231] '>
                <Image src={playStore} width={20} alt="playstore"/>
                Get on Andriod
              </Link>
            </div>
          </div>
          <div className="col-span-4 flex justify-end  ">
            <div className="relative cursor-pointer animate-bounceSmall">
              <Image src={womanPicture} width={500} quality={100} alt="Woman Picture" />
              <div className="">
                <Image src={safelock} alt="safelock" width={200} className="absolute top-[20vh] -left-20"/>
                <Image src={targetsavings} width={200} alt="targetsavings" className="absolute top-[10vh] -right-5"/>
                <Image src={flexnaira} width={200} alt="flexnaira" className="absolute top-[50vh] -left-20"/>
                <Image src={investify} width={200} alt="investify" className="absolute top-[50vh] -right-5"/>
                <Image src={piggybank} width={200} alt="piggybank" className="absolute top-[90%] left-[30%]"/>

              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  )
}
