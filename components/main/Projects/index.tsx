import React from 'react';
import ProjectCard from '../../sub/ProjectCard';

export default function index() {
    return (
        <div className='flex flex-col items-center justify-center py-20 px-20'>
            <h1 className='text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-[0.875rem] px-[0.625rem]'>
                <ProjectCard
                    src='/NextWebsite.png'
                    title='Modern Next.js Portfolio'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis numquam, quas sapiente reiciendis incidunt!'
                />
                <ProjectCard
                    src='/CardImage.png'
                    title='Interactive Website Cards'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis numquam, quas sapiente reiciendis incidunt! consectetur adipisicing elit. '
                />
                <ProjectCard
                    src='/SpaceWebsite.png'
                    title='Space Theme Website'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis numquam, quas sapiente reiciendis incidunt! quas sapiente reiciendis'
                />
            </div>
        </div>
    )
}
