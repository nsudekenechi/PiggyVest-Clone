"use client";
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
const Modal = ({ children,color }) => {
    const router = useRouter()
    return (
        <div className='fixed bg-[rgba(0,0,0,.4)] w-[100%] h-[100%] z-[100] flex justify-end' >
            <motion.div initial={{translateX:"50%"}} animate={{translateX:"0%"}} transition={{duration: 0.4}} className='bg-white w-[35%] '>
                <div className={`flex justify-end mb-10 ${color}`} >
                    <IoIosClose size={50} className='cursor-pointer'  onClick={()=> router.back()}/>
                </div>
                {children}
            </motion.div>
        </div>
    )
}

export default Modal;