import React from 'react';
import ProjectCard from '../../sub/ProjectCard';
import { projectsContent } from '@/constants';

export default function index() {
    return (
        <div className='flex flex-col items-center justify-center mx-4 md:px-20 pb-7'
            id="projects"
        >
            <h1 className='text-[2.5rem] font-semibold text-blue-500 py-20'>
                Projects
            </h1>
            <div className='h-full w-full flex flex-col gap-[3rem] px-[0.625rem]'>
                <ProjectCard
                    projectData={projectsContent.aeroc}
                />
                <ProjectCard
                    projectData={projectsContent.sunstore}
                />
                <ProjectCard
                    projectData={projectsContent.aggregator} />
            </div>
        </div>
    )
}
