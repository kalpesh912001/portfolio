import Image from 'next/image';
import React from 'react';
import diamondIcon from '../../../public/diamond1.svg';
import reactLogo from '../../../public/react-logo.png';
import ExperienceCard from '../ExperienceCard';
import { developer_tech, intern_tech } from '@/constants';

export default function index() {
    return (
        <div className='w-full m-auto flex flex-col items-center gap-5 sm:gap-0 px-4'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-start sm:gap-5'>
                <div className='flex items-start gap-5 justify-end sm:mr-[-1.25rem]'>
                    <ExperienceCard
                        designation='Software Developer'
                        company='RBIS Technologies PVT LTD'
                        location='Pune, Maharashtra, India'
                        duration='July 2023 - Present Day'
                        technologies={developer_tech}
                    />
                    <div className='hidden sm:flex flex-col items-center justify-start gap-2'>
                        <div className='w-[1px] h-[9.6rem] bg-slate-700'></div>
                        <Image src={diamondIcon} alt='' width={20} height={20} />
                        <div className='w-[1px] h-[11rem] bg-slate-700'></div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-start sm:gap-5'>
                <div></div>
                <div className='flex items-end gap-5 justify-start sm:ml-[-1.25rem]'>
                    <div className='hidden sm:flex flex-col items-center gap-2'>
                        <div className='w-[1px] h-[11rem] bg-slate-700'></div>
                        <Image src={diamondIcon} alt='' width={20} height={20} />
                        <div className='w-[1px] h-[9.6rem] bg-slate-700'></div>
                    </div>
                    <ExperienceCard
                        designation='Software Developer Intern'
                        company='RBIS Technologies PVT LTD'
                        location='Pune, Maharashtra, India'
                        duration='January 2023 - June 2023'
                        technologies={intern_tech}
                    />
                </div>
            </div>
            {/* <div className='w-full m-auto flex justify-end gap-5'>
                <div className='flex flex-col items-center justify-start gap-2'>
                    <div className='w-[1px] h-[9rem] bg-slate-700'></div>
                    <Image src={diamondIcon} alt='' width={20} height={20} />
                    <div className='w-[1px] h-[9rem] bg-slate-700'></div>
                </div>
                <div className='w-[25rem] h-[20rem] border rounded-lg'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sequi quaerat alias? Assumenda minima amet quasi? Sequi hic accusantium beatae!
                </div>

            </div> */}
        </div>
    )
}
