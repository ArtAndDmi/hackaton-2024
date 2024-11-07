'use client'

import {useEffect, useState} from 'react'

const useIsGalaxyFold = () => {
    const [isGalaxyFold, setIsGalaxyFold] = useState(false)

    useEffect(() => {
        const checkIsGalaxyFold = () => {
            //@ts-ignore
            const userAgent = navigator.userAgent || navigator.vendor || window.opera

            const isFoldUserAgent =
                userAgent.includes('SM-F900') || // Galaxy Fold
                userAgent.includes('SM-F916') || // Galaxy Z Fold 2
                userAgent.includes('SM-F926')   // Galaxy Z Fold 3
                const screenWidth = window.screen.width
                const screenHeight = window.screen.height
                const isFoldScreen =
                    (screenWidth === 1536 && screenHeight === 2152) ||
                    (screenWidth === 1768 && screenHeight === 2208)

                setIsGalaxyFold(isFoldUserAgent && isFoldScreen)


        }

        checkIsGalaxyFold()
            window.addEventListener('resize', checkIsGalaxyFold)

            return () => {
                window.removeEventListener('resize', checkIsGalaxyFold)
            }



    }, [])

    return isGalaxyFold
}

export default useIsGalaxyFold
