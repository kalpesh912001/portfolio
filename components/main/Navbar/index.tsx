"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Navlogo1 from '../../../public/react-logo.png';
import { Socials } from '../../../constants';
import downArrow from '../../../public/downArrow.svg';

export default function Index() {
    const [showSocials, setShowSocials] = useState<boolean>(false); 

    return (
        <div className='w-full h-[4.063rem] fixed top-0 shadow-lg shadow-[#2A0E65]/50 bg-[#03001417] backdrop-blur-md z-50 px-[10px]'>
            <div className='w-full h-full flex justify-between items-center m-auto px-[10px] gap-4'>
                <a href='#about-me' className='w-auto h-auto flex items-center'>
                    <Image
                        alt='logo'
                        src={Navlogo1}
                        width={40}
                        height={40}
                        className=' cursor-pointer hover:animate-slowspin'
                    />
                    <span className='font-bold ml hidden md:block text-gray-300'>Portfolio</span>
                </a>
                <div className='w-[35.25rem] h-full flex items-center justify-between'>
                    <div className='w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-[1.25rem] py-[0.625rem] rounded-full text-gray-200'>
                        <a href="#about-me" className="cursor-pointer">About me</a>
                        <a href="#experience" className="cursor-pointer">Experience</a>
                        <a href="#skills" className="cursor-pointer">Skills</a>
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center relative'>
                    <div className='sm:flex gap-5 hidden'>
                        {
                            Socials.map((social) => {
                                return (
                                    <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                                        <Image
                                            src={social.src}
                                            alt={social.name}
                                            key={social.name}
                                            width={24}
                                            height={24}
                                            className=' cursor-pointer'
                                        />
                                    </a>
                                )
                            })
                        }
                    </div>
                    <Image
                        src={downArrow}
                        alt=''
                        width={30}
                        height={30}
                        className={`sm:hidden ${showSocials ? 'rotate-180 duration-300' : 'duration-300'}`}
                        onClick={() => setShowSocials(!showSocials)} />
                    <div className={`absolute top-[2.3rem] flex flex-col mt-3 gap-4 sm:hidden ${showSocials ? 'right-[0rem] duration-300' : 'right-[-3rem] duration-300'}`}>
                        {
                            Socials.map((social) => {
                                return (
                                    <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                                        <Image
                                            src={social.src}
                                            alt={social.name}
                                            key={social.name}
                                            width={22}
                                            height={22}
                                            className=' cursor-pointer'
                                        />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
