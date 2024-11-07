'use client'

import React, {useEffect, useState} from 'react'
import {cn} from "@/lib/utils"
import ColoredText from "@/components/ui/colored-text"
import BlockContainer from "@/components/ui/block-container"
import ParticipateButton from "@/components/ui/participate-button"
import TextWithBr from "@/components/ui/text-with-br"
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

export const CasesBlock: React.FC<Props> = ({className = ''}) => {
    const casesInfoDesk = [
        {
            title: 'Внутривузовская социальная сеть',
            description: 'Современные вузы сталкиваются с необходимостью взаимо-действия между студентами и преподавателями, а также с задачей учета и продвижения достижений студентов. Пред-лагается разработать внутривузовскую социальную сеть, кото-рая позволит централизовать информацию об участниках образовательного процесса, их достижениях и потребностях.',
            imgUrl: './case-1.png'
        },
        {
            title: 'Сканирование периметра сети',
            description: 'Предлагается разработать платформу для сканирования сети, функциональность которой позволяет выполнять портовое ска-нирование в пределах заданных доменов или подсетей, отоб-ражать список известных сервисов и служб, а также выявлять потенциальные уязвимости. Такой продукт будет полезен для регулярного мониторинга корпоративной инфраструктуры и соответствия требованиям стандартов ИБ.',
            imgUrl: './case-2.png'
        },

        {
            title: 'Визуальная среда разработки для микроконтроллеров «Рудирон»',
            description: 'Предлагается создать визуальную среду разработки для микро-контроллеров «Рудирон», в которой программы формируются с помощью отдельных блоков, каждый из которых выполняет определённую функцию. Это позволит упростить процесс соз-дания программ и сделать его доступным для широкого круга пользователей. Возможна модификация существующих реше-ний для блочного программирования.',
            imgUrl: './case-3.png'
        },
        {
            title: 'Информационная система электронного документооборота',
            description: 'Требуется разработать информационную систему электронного документооборота для структурирования документов в органи-зации и обеспечения взаимодействия сотрудников по их уп-равлению и согласованию. Система должна включать органи-зацию документов по папкам, учёт сотрудников с их полномо-чиями, поддержку различных видов документов и метаданных, возможность загрузки, редактирования и просмотра докумен-тов и по возможности другие дополнительные функции.',
            imgUrl: './case-4.png'
        },

        {
            title: 'Платформа управления доступом к вычислительным ресурсам',
            description: 'Вашей команде предлагается разработать систему бронирова-ния вычислительных ресурсов для внутреннего использования в университете. Основная задача — создать административную панель для управления доступом к серверам и мониторинга использования ресурсов. Также вам предстоит реализовать автоматизированную переустановку операционной системы с использованием технологий сетевой загрузки.',
            imgUrl: './case-5.png'
        },

    ]
    const casesInfoMobile = [
        {
            title: 'Социальная сеть внутри вуза',
            description: 'Современные вузы сталкиваются с необхо-димостью взаимодействия между студентами и преподавателями, а также с задачей учета и продвижения достижений студентов. Предла-гается разработать внутривузовскую социаль-ную сеть, которая позволит централизовать информацию об участниках образовательно-го процесса, их достижениях и потребностях.',
            imgUrl: './case-1.png'
        },
        {
            title: 'Сканирование периметра сетевой инфраструктуры',
            description: 'Предлагается разработать платформу для сканирования сети, функциональность кото-рой позволяет выполнять портовое сканиро- вание в пределах заданных доменов или под-сетей, отображать список известных сервисов и служб, а также выявлять потенциальные уязвимости. Такой продукт будет полезен для регулярного мониторинга корпоративной инфраструктуры и соответствия требованиям ИБ.',
            imgUrl: './case-2.png'
        },
        {
            title: 'Визуальная среда разработ-ки для микроконтроллеров',
            description: 'Предлагается создать визуальную среду раз-работки для микроконтроллеров «Рудирон», в которой программы формируются с помощью отдельных блоков, каждый из которых выпол-няет определённую функцию. Это позволит упростить процесс создания программ и сде-лать его доступным для широкого круга поль-зователей. Возможна модификация существу-ющих решений для блочного программиро-вания микроконтроллеров.',
            imgUrl: './case-3.png'
        },
        {
            title: 'Система электронного документооборота',
            description: 'Требуется разработать информационную сис-тему электронного документооборота для структурирования документов в организации и обеспечения взаимодействия сотрудников по их управлению и согласованию. Система должна включать организацию документов по папкам, учёт сотрудников с их полномочи-ями, поддержку различных видов документов и метаданных, возможность загрузки, реда-ктирования и просмотра документов и неко-торые другие дополнительные функции.',
            imgUrl: './case-4.png'
        },

        {
            title: 'Платформа управления доступом к вычислительным ресурсам парка серверов',
            description: 'Вашей команде предлагается разработать си-стему бронирования вычислительных ресур-сов для внутреннего использования в уни-верситете. Основная задача — создать адми-нистративную панель для управления досту-пом к серверам и мониторинга использова-ния ресурсов. Также вам предстоит реализо-вать автоматизированную переустановку опе-рационной системы с использованием техно-логий сетевой загрузки.',
            imgUrl: './case-5.png'
        },

    ]
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

    const [isWideScreen, setIsWideScreen] = useState(false)

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsWideScreen(window.innerWidth > 767)
        }

        checkScreenWidth()
        window.addEventListener('resize', checkScreenWidth)

        return () => window.removeEventListener('resize', checkScreenWidth)
    }, [])

    return (
        <div className={cn('pt-[9.0rem] relative m:pt-[4rem]', className)} id={'cases'}>
            <Figure shapeId={8} top={16} left={735}/>
            <Figure shapeId={9} bottom={-49} left={747}/>
            <Figure shapeId={1} top={285} left={84}/>
            <Figure shapeId={10} top={248} right={195}/>
            <Figure shapeId={3} bottom={-425} left={192} rotate={60}/>
            <Figure shapeId={6} bottom={-328} right={60}/>

            <BlockContainer>
                <p className={'font-druk-wide-cyr text-[3.0rem] flex items-center gap-3 m:text-[2rem]'}>
                    <ColoredText color={'yellow'}
                                 className={'px-6 py-[.7rem] pb-[.9rem] m:p-[.75rem] m:pt-[0.5rem] m:pb-[.75rem] m:mt-[.3rem]'}>Кейсы</ColoredText>
                    хакатона
                </p>
                <div className={'mt-16 flex items-center gap-5 m:m-[1rem]'}>
                    <div className={'w-16 h-16'}></div>
                    <div className={'w-16 h-16'}></div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,

                    }}
                    className="flex flex-col relative pt-[2rem] m:w-[100vw] m:ml-[-2.5rem]"
                    setApi={setApi}
                >
                    <CarouselPrevious className={'absolute top-[-4.2rem] left-[3rem] w-16 h-16 bg-black text-white'}>


                    </CarouselPrevious>

                    <CarouselNext
                        className={`z-20 absolute top-[-4.2rem] left-[8.3rem] w-16 h-16 bg-black text-white text-[3rem] active:opacity-90 hover:opacity-90`}/>

                    <div className="flex gap-[0.75rem] absolute top-[-2.5rem] left-[15rem]">
                        {Array.from({length: count}).map((_, index) => (
                            <div key={index}
                                 className={`w-[0.75rem] h-[0.75rem] rounded-full ${isWideScreen ? index + 1 === current ? 'bg-pagination-active' : 'bg-pagination' : index + 1 === current ? 'bg-pagination-active' : 'bg-pagination'}`}></div>
                        ))}
                    </div>
                    <CarouselContent className={'z-10  m:mt-[1.5rem] m:ml-[1rem]'}>
                        {casesInfoDesk.map((caseInfo, index) => (
                            <CarouselItem key={index}
                                          className={`basis-[49.5rem] m:basis-[95%]  m:pl-[5%] ${index + 1 === casesInfoMobile.length && 'm:mr-[5%]'}`}>
                                <div className={'w-[45.75rem] m:hidden'}>
                                    <img src={caseInfo.imgUrl} alt={''}
                                         className={'w-[45.75rem] bg-black h-[29.875rem] rounded-60 mb-[2.375rem] 1680:w-full m:w-[100%] m:h-[20rem] m:mb-[1rem]'}></img>
                                    <p className={'font-druk-wide-cyr text-[1.875rem] w-full mb-5 m:text-[1.5rem] m:leading-[1.6rem] m:mb-[1rem]'}>{caseInfo.title}</p>
                                    <p className={'text-[1.35rem] leading-32 text-justify m:text-[1.25rem] m:leading-[1.8rem]'}>{caseInfo.description}</p>
                                </div>
                                <div className={`hidden w-[45.75rem] m:block m:w-[100%] m:pr-[1rem] `}>
                                    <img src={casesInfoMobile[index].imgUrl} alt={''}
                                         className={'w-[45.75rem] bg-black h-[29.875rem] rounded-60 mb-[2.375rem] 1680:w-full m:w-[100%] m:h-[20rem] m:mb-[1rem]'}></img>
                                    <p className={'font-druk-wide-cyr text-[1.875rem] w-full mb-5 m:text-[1.5rem] m:leading-[1.6rem] m:mb-[1rem]'}>{casesInfoMobile[index].title}</p>
                                    <p className={'text-[1.25rem] leading-32 text-justify m:text-[1.25rem] m:leading-[1.8rem]'}>{casesInfoMobile[index].description}</p>
                                </div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </BlockContainer>

        </div>
    )
}

export default CasesBlock
