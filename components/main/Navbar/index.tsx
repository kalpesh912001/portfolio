import React from 'react'
import Image from 'next/image';
import Navlogo from '../../../public/NavLogo.png';
import Navlogo1 from '../../../public/react-logo.png';
import { Socials } from '@/constants';
export default function Index() {
    return (
        <div className='w-full h-[4.063rem] fixed top-0 shadow-lg shadow-[#2A0E65]/50 bg-[#03001417] backdrop-blur-md z-50 px-[10px]'>
            <div className='w-full h-full flex justify-between items-center m-auto px-[10px]'>
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
                <div className='w-[31.25rem] h-full flex items-center justify-between md:mr-20'>
                    <div className='w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[0.938rem] px-[1.25rem] py-[0.625rem] rounded-full text-gray-200'>
                        <a href="#about-me" className="cursor-pointer">About me</a>
                        <a href="#skills" className="cursor-pointer">Skills</a>
                        <a href="#projects" className="cursor-pointer">Projects</a>
                    </div>
                </div>
                <div className='flex gap-5'>
                    {
                        Socials.map((social) => {
                            return (
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    key={social.name}
                                    width={24}
                                    height={24}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
