'use client'

import React from 'react'
import BlockContainer from "@/components/ui/block-container"
import {cn} from "@/lib/utils"
import ColoredText from "@/components/ui/colored-text"
import Figure from "@/components/ui/figure"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"

interface Props {
    className?: string
}

export const PartnersBlock: React.FC<Props> = ({className = ''}) => {
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

    const partnersDesk = [
        {
            imgUrl: './partner-1.png',
            description: 'Ведущий российский разработчик плат-форм сбора и хранения данных для ком-паний, которые хотят изменить бизнес с помощью цифровизации процессов и сложной аналитики, основанной на ис-пользовании больших данных.'
        },
        {
            imgUrl: './partner-2.png',
            description: 'Компания разрабатывает комплексные IT-системы для бизнеса, оцифровывая все бизнес-процессы и переводя их в единую информационную систему. Это обеспечивает прозрачность управле-ния и позволяет руководству прини-мать решения на основе цифровых показателей компании.'
        },
        {
            imgUrl: './partner-3.png',
            description: 'Крупнейший российский разработчик и производитель компьютерной техники и ИТ-решений, системообразующее пред-приятие радиоэлектронной промыш-ленности РФ. Обеспечивает полный производственный цикл выпуска высо-котехнологичного оборудования.'
        },
        {
            imgUrl: './partner-4.png',
            description: 'Российский разработчик программного обеспечения и микроэлектроники для информационной безопасности корпо-ративных сетей разного размера, в том числе для коммерческих предприятий и государственных органов с распреде-ленной сетевой инфраструктурой.'
        },
        {
            imgUrl: './partner-5.png',
            description: 'Многопрофильная российская компа-ния с обширным опытом в цифрови-зации стратегических отраслей эконо-мики и реализации крупномасштабных проектов для бизнеса и государства. Является производителем высокотехно-логичного оборудования.'
        },
        {
            imgUrl: './partner-6.png',
            description: 'Московская IT-компания, оказывающая услуги по разработке, внедрению и поддержке программных коробочных решений, аудиту информационной бе-зопасности, а также экспертизе кон-трольно-кассовой техники.'
        },
    ]

    const partnersMobile = [
        {
            imgUrl: './partner-1.png',
            description: 'Ведущий российский разработчик платформ сбора и хранения данных для компаний, которые хотят изменить бизнес с помощью цифровизации про-цессов и сложной аналитики, осно-ванной на использовании Big Data.'
        },
        {
            imgUrl: './partner-2.png',
            description: 'Компания разрабатывает комплексные IT-системы для бизнеса, оцифровывая все бизнес-процессы и переводя их в единую информационную систему. Это обеспечивает прозрачность управле-ния и позволяет руководству прини-мать решения на основе цифровых показателей компании.'
        },
        {
            imgUrl: './partner-3.png',
            description: 'Крупнейший российский разработчик и производитель компьютерной техни-ки и ИТ-решений, системообразующее предприятие радиоэлектронной про-мышленности РФ. Обеспечивает пол-ный производственный цикл выпуска высокотехнологичного оборудования.'
        },
        {
            imgUrl: './partner-4.png',
            description: 'Российский разработчик программно-го обеспечения и микроэлектроники для информационной безопасности корпоративных сетей разного размера, в том числе для коммерческих пред-приятий и государственных органов с распределенной инфраструктурой.'
        },
        {
            imgUrl: './partner-5.png',
            description: 'Международная компания, работаю-щая в сфере информационной безо-пасности более 25 лет. За это время прошли путь от производителя анти-вирусов до поставщика всесторонней защиты для бизнеса и частных поль-зователей.'
        },
        {
            imgUrl: './partner-6.png',
            description: 'Московская IT-компания, оказывающая услуги по разработке, внедрению и поддержке программных коробочных решений, аудиту информационной бе-зопасности, а также экспертизе кон-трольно-кассовой техники.'
        },
    ]
    return (
        <div className={cn('bg-bgBlue pt-[9.0rem] pb-[9rem] overflow-hidden relative z-0 m:py-[5rem]', className)} id={'partners'}>
            <Figure shapeId={9} left={-126} top={-288} color={'blue'} rotate={135} />
            <Figure shapeId={6} right={316} top={-378} color={'blue'} rotate={135} />
            <Figure shapeId={2} right={20} top={20} color={'blue'} />
            <Figure shapeId={3} left={622} top={68} color={'blue'} />
            <Figure shapeId={1} left={-147} top={304} color={'blue'} />
            <Figure shapeId={7} right={345} top={442} color={'blue'} />
            <Figure shapeId={11} left={-252} bottom={-271} color={'blue'} />
            <Figure shapeId={6} right={-155} bottom={140} color={'blue'} />
            <Figure shapeId={8} left={321} bottom={30} color={'blue'} rotate={30} />
            <Figure shapeId={9} right={458} bottom={-244} color={'blue'} />

            <BlockContainer>
                <p className={'font-druk-wide-cyr text-[3.0rem] text-white flex items-center gap-3 pb-16 m:hidden'}>
                    <ColoredText color={'yellow'} className={'px-6 text-black py-[.7rem] pb-[.9rem]'}>Партнеры</ColoredText>
                    хакатона
                </p>
                <p className={'hidden font-druk-wide-cyr text-[3.0rem] items-center text-white gap-3 m:text-[2rem] m:flex'}>
                    <ColoredText color={'yellow'} className={'px-6 m:p-[.75rem] m:pt-[0.5rem] m:pb-[.75rem] text-black'}>Партнеры</ColoredText>
                    хакатона
                </p>
                <div className={'grid grid-cols-3 gap-5 m:hidden'}>

                    <div>
                        <div className={'pt-[2.5rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-center items-center'}>
                            <img src={partnersDesk[0].imgUrl} alt="" className={'w-[23.25rem]'}/>
                            <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.2rem] w-full text-justify'}>{partnersDesk[0].description}</p>
                        </div>

                        <div className={'h-[28rem] pt-[3rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-center items-center mt-[1.25rem]'}>
                            <img src={partnersDesk[1].imgUrl} alt="" className={'w-[8.125rem]'}/>
                            <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.25rem] w-full text-justify'}>
                                {partnersDesk[1].description }
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={'pt-[2.5rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-center items-center'}>
                            <img src={partnersDesk[2].imgUrl} alt="" className={'w-[20.4375rem]'}/>
                            <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.2rem] w-full text-justify'}>
                                {partnersDesk[2].description }
                            </p>

                        </div>
                        <div className={'h-[26rem] pt-[2.5rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-center items-center mt-[2rem]'}>
                            <img src={partnersDesk[3].imgUrl} alt="" className={'w-[30.375rem]'}/>
                            <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.22rem] w-full text-justify'}>
                                {partnersDesk[3].description}
                            </p>

                        </div>
                    </div>
                    <div>
                        <div className={'pt-[2.5rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-center items-center'}>
                            <img src={partnersDesk[4].imgUrl} alt="" className={'w-[26.25rem]'}/>
                            <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.2rem] w-full text-justify'}>
                                {partnersDesk[4].description}
                            </p>
                        </div>
                        <div className={'h-[24.1875rem] pt-[2.5rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-center items-center  mt-[3rem]'}>
                            <img src={partnersDesk[5].imgUrl} alt="" className={'w-[16.6875rem]'}/>
                            <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.2rem] w-full text-justify'}>
                                {partnersDesk[5].description}
                            </p>
                        </div>
                    </div>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className=" w-full hidden flex-col relative mt-[6rem] m:flex"
                    setApi={setApi}
                >
                    <CarouselPrevious  className={'absolute top-[-2.17rem] left-[0.2rem] w-16 h-16 bg-black text-white'}>
                        <svg width="3rem" height="3rem" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 5L5 17M5 17L17 29M5 17H27.5" stroke="#FCF8F4" strokeWidth="6" strokeLinecap="square"/>
                        </svg>

                    </CarouselPrevious>

                    <CarouselNext
                        className={'z-20 absolute top-[-2.17rem] left-[5.3rem] w-16 h-16 bg-black text-white text-[3rem] active:opacity-90 hover:opacity-90'}/>

                    <div className="flex gap-[1rem] absolute top-[-2.5rem] left-[12rem]">
                        {Array.from({ length: partnersDesk.length }).map((_, index) => (
                            <div key={index} className={`w-[0.5rem] h-[0.5rem] rounded-full ${index + 1 === current ? 'bg-white' : 'bg-lightBlue'}`}></div>
                        ))}
                    </div>
                    <CarouselContent className={'z-10 m:mt-[1.5rem]'}>
                        {partnersMobile.map((partner, index) => (
                            <CarouselItem key={index} className="basis-[49.5rem] m:basis-[100%]">
                                <div className={'pt-[2.5rem] px-[2.375rem] bg-white rounded-60 flex flex-col justify-start items-center'}>
                                    <img src={partner.imgUrl} alt=""
                                         className={index === 0 && 'w-[23.25rem]' || index === 1 && 'w-[8.125rem]' ||  index === 2 && 'w-[16.375rem]' ||  index === 3 && 'w-[22.375rem]' ||  index === 4 && 'w-[26.25rem]'  || index === 5 && 'w-[16.75rem]' || ''}
                                    />
                                    <p className={'mt-[1.25rem] pb-[2.5rem] text-[1.25rem] w-full text-justify'}>{partner.description}</p>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </BlockContainer>
        </div>
    )
}

export default PartnersBlock
