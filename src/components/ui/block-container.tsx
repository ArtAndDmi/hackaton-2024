import React from 'react'
import {cn} from "@/lib/utils"

interface Props {
    className?: string
    children: React.ReactNode

}

export const BlockContainer: React.FC<Props> = ({className = '', children}) => {
    return (
        <div className={cn('w-[95.5rem] mx-auto m:w-[100vw] m:px-[2.5rem]', className)}>
            {children}
        </div>
    )
}

export default BlockContainer
