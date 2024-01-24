"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import mainIconsdark from '../../../public/mainIconsdark.svg'

export default function index() {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-7 sm:px-20 mt-36 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center mx-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[0.9rem] px-[8px] border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b49bff] mr-[0.625rem] h-5 w-5' />
                    <h1 className='Welcome-text text-[0.813rem]'>
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[37.5rem] w-auto h-auto'>
                    <span>Providing
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                        project experience
                    </span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='text-gray-400 text-lg my-5 max-w-[37.5rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus
                    facilis earum amet dolorum dolore. Perferendis, eveniet consectetur.
                </motion.div>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[12.5rem]'>
                    Learn More!
                </motion.a>

            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <Image src={mainIconsdark} alt='' width={650} height={650} />
            </motion.div>

        </motion.div>
    )
}
