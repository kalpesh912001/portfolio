import React from 'react';
import Image from 'next/image';
import companyBuilding from '../../../public/company-icon.svg';
import eyeIcon from '../../../public/eye.svg';
interface Props {
    projectData: {
        title: string,
        image: string,
        clientCompany: string,
        projectUrl?: string,
        projectPeriod: string,
        technologies: string[],
        description: string
    }
}

export default function Index(props: Props) {
    const { projectData } = props;
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-[1.5rem] border border-[#7042f861] md:border-none rounded-lg md:rounded-none md:gap-[2rem] items-start w-[100%] m-auto'>
            <div className='w-full flex justify-end'>
                <img src={`${projectData?.image}`} alt='' width={500} height={500} className='rounded-t-lg md:rounded-lg w-[500px] h-[300px] border border-[#7042f861] bg-[#794dff07]' />
            </div>
            <div className='flex flex-col justify-between h-full gap-3 md:max-w-[70%] px-3 pb-5 md:px-0 md:pb-0'>
                {/* bg-gradient-to-r from-purple-500 to-cyan-500 */}
                <div className='flex flex-col gap-0.5'>
                    <div className='flex items-center justify-between'>
                        <div className='w-fit text-[1.8rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-teal-300 font-[600]'>{projectData.title}</div>
                        {
                            projectData?.projectUrl &&
                            <a href={projectData?.projectUrl} target='_blank' rel="noopener noreferrer">
                                <div className='border p-1.5 rounded-md cursor-pointer hover:opacity-[0.6]'>
                                    <Image src={eyeIcon} alt='' width={20} height={20} />
                                </div>
                            </a>
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={companyBuilding} alt='' width={18} height={18} />
                        <div className='text-[0.8rem] text-white'>{projectData.clientCompany}</div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='text-gray-400 text-sm'>{projectData.projectPeriod}</div>
                </div>
                <div className='flex items-center flex-wrap gap-2 md:max-w-[24rem]'>

                    {
                        projectData.technologies?.map((technology, index) => {
                            return (
                                <div
                                    key={index}
                                    className='py-1 px-2 w-fit border border-[#7042f861] rounded-sm flex justify-center items-center'>
                                    <div className=' text-xs text-center text-[#9365fd]'>{technology}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-[0.9rem] text-white'>{projectData.description}</div>
            </div>
        </div>
    )
}
