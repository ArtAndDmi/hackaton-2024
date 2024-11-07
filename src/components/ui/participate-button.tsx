
import React from 'react'
import {cn} from "@/lib/utils"

interface Props {
    className?: string
    color: 'blue' | 'black'
    children: React.ReactNode
    hasShadow?: boolean
}

export const ParticipateButton: React.FC<Props> = ({className = '', hasShadow = false, color, children}) => {
    return (
        <button
            className={cn(
                'font-druk-wide-cyr rounded-full text-black transition-[.2s] ',
                {
                    'btn-bg btn-font': color === 'blue',
                    'bg-black text-white': color === 'black',
                    'shadow-6': hasShadow
                },
                className
            )}
        >
            {children}
        </button>
    )
}

export default ParticipateButton
