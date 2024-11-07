import React from 'react'
import {cn} from "@/lib/utils"

interface Props {
    className?: string
    children: React.ReactNode
}

export const HeaderContainer: React.FC<Props> = ({className = '', children}) => {
    return (
        <div className={cn(
            'w-full px-[6%] max-w-[1920px] mx-auto',
            className)}>
            {children}
        </div>
    )
}

export default HeaderContainer
