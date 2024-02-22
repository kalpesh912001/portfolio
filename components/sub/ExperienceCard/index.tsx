import Image from 'next/image';
import React from 'react';
import reactLogo from '../../../public/react-logo.png';
import locationIcon from '../../../public/map-pin.svg';
import companyBuilding from '../../../public/company-icon.svg';

interface Props {
    designation: string;
    company: string;
    location: string;
    duration: string;
    technologies: any[]
}

export default function index(props: Props) {
    const { designation, company, location, duration, technologies } = props;
    return (
        <div className='w-[30rem] h-auto rounded-xl border flex gap-5 p-5'>
            <div className='flex items-start justify-center'>
                <div className='border p-3 rounded-lg flex justify-center items-center bg-slate-300'>
                    <Image src={companyBuilding} alt='' width={80} height={80} />
                </div>
            </div>

            <div className='flex flex-col gap-6 items-start justify-start'>
                <div className='flex flex-col gap-2.5 items-start justify-start'>
                    <span className='text-[1.7rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-teal-300 font-[600]'>{designation}</span>
                    <div className='flex gap-2 items-center justify-start'>
                        <Image src={companyBuilding} alt='' width={20} height={20} />
                        <span className='text-[1.2rem] text-[#FFFFFF]'>{company}</span>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <Image src={locationIcon} alt='' width={18} height={18} />
                        <span className='text-[1rem] text-[#FFFFFF]'>{location}</span>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <span className='text-[1.1rem] text-[#c7c7c7d2]'>{duration}</span>
                    <span className='text-[1.1rem] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, officiis!</span>
                </div>
                <div className='flex items-center gap-2'>
                    {
                        technologies.map((item, index) => {
                            return (
                                <div key={index} className='p-1 flex items-center justify-center border rounded-lg'>
                                    <Image src={item} alt="" width={18} height={18} className='max-h-[18px] max-w-[18px]' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
