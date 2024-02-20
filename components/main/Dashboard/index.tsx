import React from 'react';
import DashboardConent from '../../sub/DashboardContent';

export default function Index() {
    return (
        <div className='relative flex flex-col h-full w-full'>
            <video
                autoPlay
                loop
                muted
                className='rotate-180 absolute top-[-22.76rem] sm:top-[-20.3rem] left-0 z-[1] w-full h-full object-cover'
            >
                <source src='/blackhole.webm' type='video/webm' />
            </video>
            <DashboardConent />
        </div>
    )
}
