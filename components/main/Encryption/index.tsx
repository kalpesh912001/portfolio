"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

export default function Index() {
    return (
        <div className='flex relative items-center justify-center w-full h-full'>
            <div className='absolute w-auto h-auto top-0 z-[5]'>
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Performance
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        &{" "}
                    </span>
                    Security
                </motion.div>
            </div>
            <div className='flex flex-col items-center justify-center translate-y-[-3.125rem] absolute z-20 w-auto h-auto'>
                <Image
                    src={"/LockTop.png"}
                    alt='Lcok top'
                    width={50}
                    height={50}
                    className=' -translate-y-5 transition-all duration-200 group-hover:translate-y-11'
                />
                <Image
                    src={"/LockMain.png"}
                    alt='Lcok man'
                    width={50}
                    height={50}
                    className=' z-10'
                />
            </div>
            <div className='w-full flex items-start justify-center absolute'>
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload='false'
                    className='w-full h-auto'
                    src='/encryption.webm'
                />
            </div>
        </div>
    )
}
