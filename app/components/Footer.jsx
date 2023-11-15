import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../public/images/logo-footer.svg"
import compliance from "../../public/images/compliance.webp"
import { motion } from 'framer-motion'
import { footerLinks } from './uidata'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi"
const Footer = ({ fadeUp }) => {
    const footerSocialIcons = [
        {
            icon: BiLogoFacebook
        },
        {
            icon: BiLogoInstagram
        },
        {
            icon: BiLogoTwitter
        },
        {
            icon: BiLogoTiktok
        },
        {
            icon: BiLogoYoutube
        }]
    return (
        <motion.footer
            transition={{ type: "spring" }}
            variants={fadeUp} initial={"initial"}
            whileInView={"animate"}
            className='px-5  md:px-32 lg:px-10 pb-24 bg-white text-sm font-light'>
            <section className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 '>
                <div className='col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <ul className='flex flex-col gap-y-5'>
                        <li className=''>
                            <Link href={"/"}>
                                <Image src={Logo} width={180} alt='PiggyVest Logo' />
                            </Link>
                        </li>
                        <li className='mx-auto '>
                            <Image src={compliance} width={100} alt='Compliance Logo' />

                        </li>
                    </ul>
                    <div className='col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            footerLinks.map((item, index) => (
                                <ul className='flex flex-col gap-y-3 ' key={index}>
                                    <li className='font-bold '>{item.name}</li>
                                    {item.links.map((link, index) => (
                                        <li className='font-light' key={index}>
                                            <Link href={link.url}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-y-5 lg:items-end'>
                    <ul className='flex text-[#122231] gap-x-5 text-2xl'>
                        {
                            footerSocialIcons.map((item, index) => (
                                <li key={index}>
                                    <Link href={""} >
                                        <item.icon/>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                    <Link href={""} className='text-right text-sm font-light'>
                        Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                    </Link>
                    <Link href={""} className='text-right text-sm font-light'>
                        contact@piggyvest.com
                    </Link>
                    <Link href={""} className='text-right text-sm font-light'>
                        +234 700 933 933 933
                    </Link>
                </div>
            </section>
            <hr className='my-10' />
            <section className='  text-xs leading-relaxed'>
                <p className='w-[70%]'>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
                <p className='w-[35%] my-5'>PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>

                <p className='text-blue-700'>2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
            </section>
        </motion.footer>
    )
}

export default Footer