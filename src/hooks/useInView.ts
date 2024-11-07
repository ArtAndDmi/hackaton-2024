import {useState, useEffect, MutableRefObject, useRef} from 'react'


function useInView(options: any) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, options)

        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, [ref, options])

    return {ref, isIntersecting}
}

// export default useInView

export default useInView
