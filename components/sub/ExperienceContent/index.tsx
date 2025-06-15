import Image from 'next/image';
import React from 'react';
import ExperienceCard from '../ExperienceCard';
import { neosoftTech, intern_tech, rbisTech } from '@/constants';

export default function index() {
    return (
        <div className='w-full m-auto flex flex-col items-center gap-5 sm:gap-0 px-4'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-start sm:gap-5'>
                <div className='flex items-start gap-5 justify-end sm:mr-[-1.25rem]'>
                    <ExperienceCard
                        designation='NextJS Developer'
                        company='Neosoft PVT LTD'
                        location='Mumbai, Maharashtra, India'
                        duration='January 2025 - Present'
                        technologies={neosoftTech}
                        companyLogo='/neosoft-logo.png'
                    />
                    <div className='hidden sm:flex flex-col items-center justify-start gap-2'>
                        <div className='w-[1px] h-[9.6rem] bg-slate-700'></div>
                        <Image src="/diamond1.svg" alt='' width={20} height={20} />
                        <div className='w-[1px] h-[11rem] bg-slate-700'></div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-start sm:gap-5'>
                <div></div>
                <div className='flex items-start gap-5 justify-end sm:ml-[-1.25rem]'>
                    <div className='hidden sm:flex flex-col items-center justify-start gap-2'>
                        <div className='w-[1px] h-[9.6rem] bg-slate-700'></div>
                        <Image src="/diamond1.svg" alt='' width={20} height={20} />
                        <div className='w-[1px] h-[11rem] bg-slate-700'></div>
                    </div>
                    <ExperienceCard
                        designation='Software Developer'
                        company='RBIS Technologies PVT LTD'
                        location='Pune, Maharashtra, India'
                        duration='July 2023 - December 2024'
                        technologies={rbisTech}
                        companyLogo='/rbis-logo1.png'
                    />

                </div>

            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-start sm:gap-5'>
                <div className='flex items-end gap-5 justify-start sm:mr-[-1.25rem]'>

                    <ExperienceCard
                        designation='Software Developer Intern'
                        company='RBIS Technologies PVT LTD'
                        location='Pune, Maharashtra, India'
                        duration='January 2023 - June 2023'
                        technologies={intern_tech}
                        companyLogo='/rbis-logo1.png'
                    />
                    <div className='hidden sm:flex flex-col items-center gap-2'>
                        <div className='w-[1px] h-[11rem] bg-slate-700'></div>
                        <Image src="/diamond1.svg" alt='' width={20} height={20} />
                        <div className='w-[1px] h-[9.6rem] bg-slate-700'></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
