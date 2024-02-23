'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInTop, slideInFromLeft, slideInFromTop } from '@/utils/motion';
import useScreenWidth from '../../../utils/useScreenWidth';
interface Props {
    percent: number;
    lable: string;
    image: string;
}
export default function SkillChart(props: Props) {
    const { screenWidth } = useScreenWidth();
    const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const { percent, lable, image } = props;
    const [skillData, setSkillData] = useState<any>({
        series: [percent || 0],
        options: {
            chart: {
                height: 280,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: false,
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#595cff',
                            offsetY: 0
                        },
                        value: {
                            show: true,
                            fontSize: '25px',
                            fontWeight: 400,
                            color: '#FFFFFF',
                            offsetY: 16,
                            formatter: function (val: any) {
                                return val + '%'
                            }
                        },
                    }
                },
            },
            // labels: ['Cricket'],
            fill: {
                // colors: ['#9C27B0']
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ['#595cff', '#c6f8ff'], // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 100],
                    colorStops: []
                }

            },
        }

    });

    return (
        <motion.div
            variants={slideInFromLeft(0.3)}
            className='flex flex-col items-center justify-start gap-2 sm:gap-3 !px-[-10px] py-2 rounded-lg shadow-lg cursor-pointer backdrop-blur-sm bg-[#FFFFFF] bg-opacity-10 sm:zoom-animation'>
            <ReactApexChart
                options={skillData.options as any || {}}
                series={skillData.series || []}
                type="radialBar"
                width={screenWidth <= 575 ? 180 : 220}
                height={screenWidth <= 575 ? 180 : 220}
            />
            <div className='flex items-center justify-center gap-2 mb-4'>
                <Image src={image} alt='' width={25} height={25} className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' />
                <span className='text-white text-[1rem] sm:text-[1.2rem]'>{lable}</span>
            </div>
        </motion.div>
    )
}
