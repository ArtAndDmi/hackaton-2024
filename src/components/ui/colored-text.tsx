import React from 'react'
import {cn} from "@/lib/utils"

interface Props {
    className?: string
    children: React.ReactNode
    color: 'blue' | 'red' | 'yellow'
}

export const ColoredText: React.FC<Props> = ({className = '', children, color}) => {

    return (
        <span
            className={cn(
                'leading-none rounded-full font-medium',
                {
                    'bg-lightRed': color === 'red',
                    'bg-lightBlue': color === 'blue',
                    'bg-lightYellow': color === 'yellow'
                },
                className
            )}
        >
            {children}
        </span>
    )
}

export default ColoredText
