import React from 'react';
import DashboardConent from '../../sub/DashboardContent';

export default function Index() {
    return (
        <div className='relative flex flex-col h-full w-full justify-between'>
            <video
                autoPlay
                loop
                muted
                className='rotate-180 absolute top-[-17.7rem] sm:top-[-20.3rem] overflow sm:left-0 z-[1] w-full h-full object-cover'
            >
                <source src='/blackhole.webm' type='video/webm' />
            </video>
            <DashboardConent />
        </div>
    )
}
