import React from 'react';
import ExperienceContent from '../../sub/ExperienceContent';

export default function Index() {


    return (
        <section id='experience'>
        <div className='flex flex-col items-center'>
            <h1 className='text-[2.5rem] font-semibold text-blue-500 py-20'>
                Work Experience
            </h1>
            <ExperienceContent />
            </div>
        </section>
    )
}