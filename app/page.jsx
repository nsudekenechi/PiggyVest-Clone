// Dependencises Imports
import Link from "next/link";
import Image from "next/image";

// Image Imports
import playStore from "../public/images/google-icon.svg"
import womanPicture from "../public/images/pexels-ketut-subiyanto-4350099.avif"
import safelock from "../public/images/safelock.avif"
import targetsavings from "../public/images/targetsavings.avif"
import flexnaira from "../public/images/flexnaira.avif"
import investify from "../public/images/investify.avif"
import piggybank from "../public/images/piggybank.avif"
import securityLock from "../public/images/securitylock.svg"
import myInvestments from "../public/images/myInvestments.avif"
import stories_phone from '../public/images/stories_phone.png'


// Components Imports
import { buildSavings, featuredLogos } from "./components/uidata";
import BuildSavings from "./components/BuildSavings";

import Navbar from "./components/Navbar";
import { AiFillApple } from "react-icons/ai"
import Footer from "./components/Footer";
export default function Home() {

  return (
    <main className="bg-[#f2f7f8]">
      <Navbar />
      {/* Header */}
      <header className="relative top-[200px] lg:top-0 grid grid-cols-2  items-end lg:grid-cols-6  px-5  md:px-10 gap-y-20">
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
      {/* Header ENds */}

      {/* Build your savings */}
      <main className="px-5  md:px-32 lg:px-10 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-40 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-x-5 col-span-2 text-center lg:text-left gap-y-10">
            <Image src={securityLock} width={100} alt="securitylock"/>
            <div>
              <h1 className="text-3xl lg:text-2xl font-bold ">Your security is our priority</h1>
              <p className="my-3 text-lg lg:text-sm">PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
              <div className="flex gap-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <Link href="/security" className="font-bold">
                  More on security measures
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center">
          <div className=" md:px-28 text-center">
            <h1 className="font-bold text-3xl  lg:text-4xl leading-snug mb-5">5 ways to build your savings</h1>
            <p className="leading-relaxed text-xl  lg:text-2xl" >Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          </div>

          {
            buildSavings.map((item, index) => (
              <BuildSavings item={{ item, index }} key={index} />
            ))
          }
        </div>
      </main>
      {/* Build your savings ends  */}


      {/* Diverse ways to invests */}
      <main className="px-5  md:px-32 lg:px-10 py-40 bg-white">
        <div className="text-center mb-20">
          <h1 className="font-bold text-2xl lg:text-5xl mb-3">Diverse ways to invest</h1>
          <p className="text-lg lg:text-2xl font-light">Grow your money and invest for your future confidently</p>
        </div>

        <div className="text-center lg:text-left bg-[#7913e5] text-white rounded-3xl grid grid-cols-1 md:grid-cols-2 h-[80vh] overflow-hidden ">
          <div className="flex flex-col items-center lg:items-start justify-between px-[2rem] py-[4rem] lg:p-[4rem] gap-y-5 lg:gap-y-0">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold mb-10 lg:mb-5">Earn Up to 25% returns</h1>
              <p className="text-[#fed6f1] lg:pr-40 text-lg lg:text-xl font-light">Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
            </div>
            <div className="flex gap-x-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <Link href="/security" className="font-bold">
                More on security measures
              </Link>
            </div>
          </div>
          <div className="flex justify-end p-[1rem]  lg:p-[4rem] lg:pb-0">
            <Image src={myInvestments} width={400} className="" alt="myinvestments"/>
          </div>
        </div>
      </main>
      {/* Diverse ways to invests ends*/}


      {/* Meet our saver of the month */}
      <main className="px-5  md:px-32 lg:px-10 pt-40">
        <div className="text-center mb-20  px-3 lg:px-32">
          <h1 className="font-bold text-3xl lg:text-5xl mb-5">Meet Our Saver of the Month</h1>
          <p className="text-lg lg:text-2xl font-light">Every month, we shine a spotlight on one saver, asking them about their savings culture and how piggyvest has helped them.</p>
        </div>
        <div className="flex lg:justify-center">
          <iframe className="w-[100%] lg:w-[50%] h-[400px] rounded-xl" src="https://www.youtube.com/embed/8XzCzC9pFGM?si=iZFqVYUILv6Tefsg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>

        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-5 pt-20 lg:pt-40 items-center ">
          <div className="col-span-2 order-2 lg:order-1">
            <Image src={stories_phone} width={0} className="w-100%]" alt="stories phone"/>
          </div>
          <div className="col-span-3 lg:px-20 order-1 lg:order-2">
            <h1 className="text-center lg:text-left text-3xl lg:text-4xl font-bold  mb-10">Join 4+ million people who save and invest with us</h1>
            <div className="flex gap-x-10">
              <Link href={"/signup"} className='duration-500 hover:-translate-y-3 flex items-center btn text-xs  bg-transparent border-[#ccc] text-black normal-case hover:bg-transparent hover:border-[#ccc]  rounded-2xl'>
                <AiFillApple size={25} /> Get on iPhone
              </Link>
              <Link href={"/signup"} className='duration-500 hover:-translate-y-3 flex items-center btn  text-xs bg-transparent border-[#ccc] text-black normal-case hover:bg-transparent hover:border-[#ccc] rounded-2xl'>
                <Image src={playStore} width={20} alt="playstore" />
                Get on Andriod
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* Meet our saver of the month ends */}

      {/* Featured in  */}
      <main className=" px-10   md:px-32 lg:px-10 py-10 " style={{
        background: "linear-gradient(180deg,#f2f8f4,#fff 33.01%)"
      }}>
        <h1 className="text-center font-bold text-3xl">As featured in</h1>
        <div className="py-10 gap-16 grid  grid-cols-2 lg:grid-cols-6 items-center lg:px-10">
          {
            featuredLogos.map((item, index) => (
              <Link href={""} className=" flex justify-center" key={index}>
                <Image src={item.logo} width={0} className={`${index <= 2 ? "w-[200px]" : "w-[90px]"}`} alt="techPoint" />
              </Link>
            ))
          }


        </div>
      </main>
      {/* Featured in ends here */}

      {/* Footer */}
      <Footer />
      {/* Footer Ends */}
    </main>
  )
}
