import React from 'react';
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import SkillProvider from '../../sub/SkillDataProvider';
import SkillText from '@/components/sub/SkillText';

export default function index() {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[24rem] py-20'
            style={{ transform: "scale(0.9)" }}>
            <SkillText />
            <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Frontend_skill.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Backend_skill.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Full_stack.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Other_skill.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 flex items-center justify-center bg-cover'>
                    <video
                        className='w-[100%] h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/cards-video.webm'
                    />

                </div>
            </div>
        </section>
    )
}