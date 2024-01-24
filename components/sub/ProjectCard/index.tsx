import React from 'react';
import Image from 'next/image';

interface Props {
    src: string,
    title: string,
    description: string
}

export default function Index(props: Props) {
    const { src, title, description } = props;
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer'>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    )
}
