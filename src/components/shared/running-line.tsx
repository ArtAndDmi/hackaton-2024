'use client'


import React from 'react'
import {cn} from "@/lib/utils"
import ColoredText from "@/components/ui/colored-text"

interface Props {
    className?: string
    items: string[]
}

export const RunningLine: React.FC<Props> = ({className = '', items}) => {
    return (
        <div className={cn(className, ' w-full  overflow-hidden whitespace-nowrap')}>
            <div className={'inline-flex animate-marquee1 text-carousel space-x-8'}>
                    {[
                        ...items
                    ].map((item, index) => (
                        <ColoredText
                            color={index % 3 === 0 && 'blue' || index % 3 === 1 && 'red' || index % 3 === 2 && 'yellow' || 'blue'}
                            className={`text-[1.75rem] py-[.5rem] font-bold m:py-[.5rem] px-[1rem] text${index+1}`}
                        >
                            {item}
                        </ColoredText>
                    ))}


            </div>
            <div className={'inline-flex animate-marquee1 text-carousel space-x-8 ml-8'}>
                {[
                    ...items
                ].map((item, index) => (
                    <ColoredText
                        color={index % 3 === 0 && 'blue' || index % 3 === 1 && 'red' || index % 3 === 2 && 'yellow' || 'blue'}
                        className={`text-[1.75rem] py-[.5rem] font-bold m:py-[.5rem] px-[1rem] text${index+1}`}
                    >
                        {item}
                    </ColoredText>
                ))}


            </div>
            <div className={'inline-flex animate-marquee1 text-carousel space-x-8 ml-8'}>
                {[
                    ...items
                ].map((item, index) => (
                    <ColoredText
                        color={index % 3 === 0 && 'blue' || index % 3 === 1 && 'red' || index % 3 === 2 && 'yellow' || 'blue'}
                        className={`text-[1.75rem] py-[.5rem] font-bold m:py-[.5rem] px-[1rem] text${index+1}`}
                    >
                        {item}
                    </ColoredText>
                ))}


            </div>
        </div>
    )
}

export default RunningLine
