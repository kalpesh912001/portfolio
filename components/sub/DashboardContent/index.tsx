"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import Image from 'next/image';
import mainIconsdark from '../../../public/mainIconsdark.svg';
import redirectIcon from '../../../public/redirect-icon.png';
import phoneIcon from '../../../public/phone.svg';
import mail from '../../../public/mail.svg';

export default function index() {

    const openResume = () => {
        window.open('/KalpeshPatilResume.pdf', '_blank')
    }
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex mx-auto flex-row items-center justify-center px-6 sm:px-20 mt-[17rem] sm:mt-32 w-full z-[20]'
        >
            <div className='h-full mx-auto w-full flex flex-col gap-5 justify-center text-start'>
                {/* <motion.div
                    variants={slideInFromTop}
                    className='Welcome-
                    box py-[0.9rem] px-[8px] border border-[#7042f88b] opacity-[0.9] max-w-[12rem]'>
                    <SparklesIcon className='text-[#b49bff] mr-[0.625rem] h-5 w-5' />
                    <h1 className='Welcome-text1 text-[0.813rem]'>
                        Hello world
                    </h1>
                </motion.div> */}
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className=' flex flex-col gap-3 mt-6 text-[2.5rem] font-bold text-white max-w-[37.5rem] w-auto h-auto'>
                    <span>Hi, I Am Kalpesh</span>
                    <span className='text-nowrap '>A <span className='gradient-text'>Fullstack Developer</span>
                    </span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='text-gray-400 text-lg my-0 max-w-[37.5rem]'>
                    Passionate about crafting seamless and efficient web development experiences with expertise in both frontend and backend technologies.
                </motion.div>
                <motion.a
                    onClick={openResume}
                    variants={slideInFromLeft(1)}
                    className='flex justify-center items-center gap-2 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[12.5rem]'>
                    <span>Resume</span>
                    <Image src={redirectIcon} alt='' width={16} height={16} />

                </motion.a>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mt-5'>
                    <div className='flex items-center gap-2'>
                        <Image src={phoneIcon} alt='' width={18} height={18} />
                        <a href="tel:8857896324" className='text-white'>+91 8857896324</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={mail} alt='' width={18} height={18} />
                        <span className='text-white'>kalpeshspatil2001@gmail.com</span>
                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full sm:flex justify-center items-center hidden'>
                <Image src={mainIconsdark} alt='' width={650} height={650} />
            </motion.div>

        </motion.div>
    )
}
