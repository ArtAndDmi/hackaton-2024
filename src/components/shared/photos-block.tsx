'use client'

import React from 'react'
import {cn} from "@/lib/utils"
import Figure from "@/components/ui/figure"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import BlockContainer from "@/components/ui/block-container"
import Link from "next/link"
import {PHOTO_LINK} from "@/consts"

interface Props {
    className?: string
}

export const PhotosBlock: React.FC<Props> = ({className = ''}) => {
    const casesInfo = [
        {
            title: 'Информационная безопасность1',
            description: 'Для всех участников финального этапа хакатона пройдут\nсоревнования по информационной безопасности в формате\nJeopardy CTF, где командам предстоит соперничество в решении\nпрактических заданий по нахождению уязвимостей, реверс-\nинжинирингу, разведке по открытым источникам, криптографии,\nстеганографии и расследованию компьютерных инцидентов.',
            imgUrl: './photo-1.jpeg'
        },
        {
            title: 'Информационная безопасность2',
            description: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в фор-мате   Jeopardy CTF, где командам предстоит соперни-чество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследова-нию компьютерных инцидентов.',
            imgUrl: './photo-2.jpeg'
        },

        {
            title: 'Информационная безопасность3',
            description: 'Для всех участников финального этапа хакатона пройдут\nсоревнования по информационной безопасности в формате\nJeopardy CTF, где командам предстоит соперничество в решении\nпрактических заданий по нахождению уязвимостей, реверс-\nинжинирингу, разведке по открытым источникам, криптографии,\nстеганографии и расследованию компьютерных инцидентов.',
            imgUrl: './photo-3.jpeg'
        },
        {
            title: 'Информационная безопасность4',
            description: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в фор-мате   Jeopardy CTF, где командам предстоит соперни-чество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследова-нию компьютерных инцидентов.',
            imgUrl: './photo-4.jpeg'
        },

        {
            title: 'Информационная безопасность5',
            description: 'Для всех участников финального этапа хакатона пройдут\nсоревнования по информационной безопасности в формате\nJeopardy CTF, где командам предстоит соперничество в решении\nпрактических заданий по нахождению уязвимостей, реверс-\nинжинирингу, разведке по открытым источникам, криптографии,\nстеганографии и расследованию компьютерных инцидентов.',
            imgUrl: './photo-5.jpeg'
        },
        {
            title: 'Информационная безопасность6',
            description: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в фор-мате   Jeopardy CTF, где командам предстоит соперни-чество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследова-нию компьютерных инцидентов.',
            imgUrl: './photo-6.jpeg'
        },
    ]

    const [apiDesk, setApiDesk] = React.useState<CarouselApi>()
    const [currentDesk, setCurrentDesk] = React.useState(0)
    const [countDesk, setCountDesk] = React.useState(0)


    React.useEffect(() => {
        if (!apiDesk) {
            return
        }

        setCountDesk(apiDesk.scrollSnapList().length)
        setCurrentDesk(apiDesk.selectedScrollSnap() + 1)

        apiDesk.on("select", () => {
            setCurrentDesk(apiDesk.selectedScrollSnap() + 1)
        })
    }, [apiDesk])

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)


    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className={cn('py-[9rem] pb-[5rem] relative m:py-[5rem]', className)} id={'photos'}>
            <Figure shapeId={5} right={60} top={-162}  rotate={45}/>
            <Figure shapeId={7} left={533} top={48}  rotate={11}/>
            <Figure shapeId={7} left={533} top={48}  rotate={11}/>
            <Figure shapeId={1} left={-128} top={333}  rotate={11}/>
            <Figure shapeId={4} left={624} bottom={48}  />
            <Figure shapeId={11} right={213} bottom={120}  />
            <Figure shapeId={10} right={-223} bottom={-455}  rotate={60}/>
            <BlockContainer>
                <p className={'font-druk-wide-cyr text-[3.0rem] flex items-center gap-3 m:hidden'}>
                    Цифровой суверенитет — 2023
                </p>
                <p className={'font-druk-wide-cyr text-[2rem] hidden items-center gap-3 m:flex'}>
                    Цифровой суверенитет — 2023
                </p>
                <div className={'mt-16 flex items-center gap-5 m:mt-0'}>
                    <div className={'w-16 h-16'}></div>
                    <div className={'w-16 h-16'}></div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="flex flex-col pt-[2rem] relative m:hidden"
                    setApi={setApiDesk}
                >
                    <CarouselPrevious className={'absolute top-[-4.17rem] left-[0.2rem] w-16 h-16 bg-black text-white'}>
                        <svg width="3rem" height="3rem" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 5L5 17M5 17L17 29M5 17H27.5" stroke="#FCF8F4" strokeWidth="6" strokeLinecap="square"/>
                        </svg>

                    </CarouselPrevious>
                    <Link href={PHOTO_LINK}>
                        <button className={'absolute top-[-4.17rem] right-[0.2rem] text-[1.25rem] rounded-full font-druk-wide-cyr px-[2.5rem] py-[1.25rem]  bg-black text-white'}>
                            Ознакомиться со всей галереей
                        </button>
                    </Link>


                    <CarouselNext
                        className={'z-20 absolute top-[-4.17rem] left-[5.3rem] w-16 h-16 bg-black text-white text-[3rem] active:opacity-90 hover:opacity-90'}/>

                    <div className="flex gap-[0.75rem] absolute top-[-2.5rem] left-[12rem] m:hidden">
                        {Array.from({ length: casesInfo.length }).map((_, index) => (
                            <div key={index} className={`w-[0.75rem] h-[0.75rem] rounded-full ${index + 1 === currentDesk ? 'bg-pagination-active' : 'bg-pagination'}`}></div>
                        ))}
                    </div>
                    <CarouselContent className={'z-10 '}>
                        {casesInfo.map((caseInfo, index) => (
                            <CarouselItem key={index} className="basis-[49.5rem]">
                                <div className={'w-[45.75rem]'}>
                                    <img src={caseInfo.imgUrl} alt={''}
                                        className={'w-[45.75rem] bg-black h-[29.875rem] rounded-60 mb-[2.375rem] 1680:w-full m:w-[85vw] m:h-[25rem] m:mt-[2rem]'}></img>


                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,

                    }}
                    className="w-[100%] hidden flex-col relative mt-[2rem] m:flex"
                    setApi={setApi}
                >
                    <CarouselPrevious  className={'absolute top-[-2.17rem] left-[0.2rem] w-16 h-16 bg-black text-white'}>
                        <svg width="3rem" height="3rem" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 5L5 17M5 17L17 29M5 17H27.5" stroke="#FCF8F4" strokeWidth="6" strokeLinecap="square"/>
                        </svg>

                    </CarouselPrevious>

                    <CarouselNext
                        className={'z-20 absolute top-[-2.17rem] left-[5.3rem] w-16 h-16 bg-black text-white text-[3rem] active:opacity-90 hover:opacity-90'}/>

                    <div className="absolute top-[-3rem] left-[11rem] text-[1.25rem]">
                        {`${current} / ${casesInfo.length}`}
                    </div>
                    <Link href={PHOTO_LINK}>
                        <button className="bg-black text-white font-druk-wide-cyr px-[1rem] py-[1.25rem] rounded-full  absolute top-[-4.5rem] right-[0] text-[1.25rem]">
                            Вся галерея
                        </button>
                    </Link>

                    <CarouselContent className={'z-10 m:mt-[1.5rem] w-[90vw]'}>
                        {casesInfo.map((caseItem, index) => (
                            <CarouselItem key={index} className="basis-[49.5rem] m:basis-[100%]">
                                <img src={caseItem.imgUrl} className={'w-[98%] h-[20rem] rounded-60'} alt=""/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </BlockContainer>
        </div>
    )
}

export default PhotosBlock
