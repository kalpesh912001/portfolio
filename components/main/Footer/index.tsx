import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';
import phoneLogo from '../../../public/phone.svg'
import mail from '../../../public/mail.svg';

export default function index() {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                    {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div> */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        {
                            Socials.map((item, index) => {
                                return (
                                    <a href={item.link}
                                        target="_blank"
                                        className="flex flex-row items-center my-[15px] cursor-pointer">
                                        <Image src={item.src} alt='' width={16} height={16} />
                                        <span className="text-[15px] ml-[6px]">{item.name}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Image src={phoneLogo} alt='' width={16} height={16} />
                            <span className="text-[15px] ml-[6px]">+91 8857896324</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Image src={mail} alt='' width={16} height={16} />
                            <span className="text-[15px] ml-[6px]">kalpeshspatil2001@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; portfolio-lovat-zeta-28 Dev 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}
