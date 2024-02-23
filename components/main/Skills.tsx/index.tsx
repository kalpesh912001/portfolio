import React from 'react';
import { Skills } from '@/constants'
import SkillText from '@/components/sub/SkillText';
import SkillChart from '@/components/sub/SkillChart/SkillChart';

export default function index() {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden '
            style={{ transform: "scale(0.9)" }} >
            <SkillText />
            <div className='grid grid-cols-3 sm:flex justify-center flex-wrap mt-4 gap-y-4 sm:gap-y-8 gap-x-4 sm:gap-x-8 items-center'>
                {
                    Skills.map((item, index) => {
                        return (
                            <SkillChart
                                key={index}
                                percent={item.percent}
                                image={item.Image}
                                lable={item.skill_name}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
