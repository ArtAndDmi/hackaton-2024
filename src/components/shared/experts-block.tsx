'use client'

import React from 'react'
import {cn} from "@/lib/utils"
import BlockContainer from "@/components/ui/block-container"
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

export const ExpertsBlock: React.FC<Props> = ({className = ''}) => {

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

    const expertsDesk = [
        {
            title: 'Денис Горин',
            description: 'Заместитель директора Инсти-тута кибербезопасности и циф-ровых технологий РТУ МИРЭА.',
            color: 'blue',
            img: './expert-1.png'
        },
        {
            title: 'Вадим Горбатов',
            description: 'Инженер отдела конструиро-вания технологий защиты ин-формации в Группе Астра.',
            color: 'yellow',
            img: './expert-2.png'
        },
        {
            title: 'Андрей Масалович',
            description: 'Президент консорциума «Инфо-рус», ведущий эксперт по Ин-тернет-разведке.',
            color: 'red',
            img: './expert-3.png'
        },
        {
            title: 'Алексей Голобурдин',
            description: 'Основатель и руководитель компаний Диджитализируй! и Salesbeat,  автор YouTube канала и курса для разработчиков.',
            color: 'blue',
            img: './expert-4.png'
        },
        {
            title: 'Никита Соболев',
            description: 'Python Core Developer, разра-ботчик свободного ПО.',
            color: 'yellow',
            img: './expert-5.png'
        },
        {
            title: 'Николай Хитров',
            description: 'Team Lead в Точка Банке, спикер сообщества Moscow Python.',
            color: 'red',
            img: './expert-15.png'
        },
        {
            title: 'Евгений Афонасьев',
            description: 'Team Lead в Avito.Tech, спикер конференций PyCon, PiterPy.',
            color: 'blue',
            img: './expert-16.png'
        },
        {
            title: 'Юрий Денисов',
            description: 'Руководитель отдела разработки робототехники «ПК Аквариус»',
            color: 'yellow',
            img: './expert-17.png'
        },
        {
            title: 'Александр Дворянский',
            description: 'Директор по информационной безопасности ГК «Элемент».',
            color: 'blue',
            img: './expert-6.png'
        },
        {
            title: 'Дмитрий Яценко',
            description: 'Сертифицированный тренер по продуктам компании Arenadata.',
            color: 'yellow',
            img: './expert-7.png'
        },
        {
            title: 'Никита Котиков',
            description: 'Руководитель направления раз-вития бизнеса CICADA8, МТС.',
            color: 'red',
            img: './expert-8.png'
        },
        {
            title: 'Сергей Лесько',
            description: 'Ведущий разработчик Лабора-тории Касперского, доктор тех-нических наук, автор более 80 научных публикаций.',
            color: 'yellow',
            img: './expert-10.png'
        },
        {
            title: 'Даниил Неслуховский',
            description: 'Заместитель директора в компа-нии Элитриум.',
            color: 'blue',
            img: './expert-9.png'
        },
        {
            title: 'Денис Панов',
            description: 'Инженер отдела конструиро-вания технологий защиты ин-формации в Группе Астра.',
            color: 'red',
            img: './expert-14.png'
        },
        {
            title: 'Егор Раков',
            description: 'Middle Backend-разработчик на Python, эксперт по архитектуре программного кода.',
            color: 'yellow',
            img: './expert-13.png'
        },
        {
            title: 'Илья Порсев',
            description: 'Сертифицированный препода-ватель Astra Linux, доцент ка-федры КБ-3 «Разработка прог-раммных решений и системное программирование»',
            color: 'blue',
            img: './expert-11.png'
        }
    ]

    const expertsMobile = [
        {
            title: 'Денис Горин',
            description: 'Заместитель директора Инсти-тута кибербезопасности и циф-ровых технологий РТУ МИРЭА.',
            color: 'blue',
            img: './expert-1.png'
        },
        {
            title: 'Вадим Горбатов',
            description: 'Инженер отдела конструиро-вания технологий защиты ин-формации в Группе Астра.',
            color: 'yellow',
            img: './expert-2.png'
        },
        {
            title: 'Андрей Масалович',
            description: 'Президент консорциума «Инфо-рус», ведущий эксперт по Ин-тернет-разведке.',
            color: 'red',
            img: './expert-3.png'
        },
        {
            title: 'Алексей Голобурдин',
            description: 'Основатель и руководитель компаний Диджитализируй! и Salesbeat,  автор YouTube канала и курса для разработчиков.',
            color: 'blue',
            img: './expert-4.png'
        },
        {
            title: 'Никита Соболев',
            description: 'Python Core Developer, разра-ботчик свободного ПО.',
            color: 'yellow',
            img: './expert-5.png'
        },
        {
            title: 'Николай Хитров',
            description: 'Team Lead в Точка Банке, спикер сообщества Moscow Python.',
            color: 'red',
            img: './expert-15.png'
        },
        {
            title: 'Евгений Афонасьев',
            description: 'Team Lead в Avito.Tech, спикер конференций PyCon, PiterPy.',
            color: 'blue',
            img: './expert-16.png'
        },
        {
            title: 'Юрий Денисов',
            description: 'Руководитель отдела разработки робототехники «ПК Аквариус»',
            color: 'yellow',
            img: './expert-17.png'
        },
        {
            title: 'Александр Дворянский',
            description: 'Директор по информационной безопасности ГК «Элемент».',
            color: 'blue',
            img: './expert-6.png'
        },
        {
            title: 'Дмитрий Яценко',
            description: 'Сертифицированный тренер по продуктам компании Arenadata.',
            color: 'yellow',
            img: './expert-7.png'
        },
        {
            title: 'Никита Котиков',
            description: 'Руководитель направления раз-вития бизнеса CICADA8, МТС.',
            color: 'red',
            img: './expert-8.png'
        },
        {
            title: 'Сергей Лесько',
            description: 'Ведущий разработчик Лабора-тории Касперского, доктор тех-нических наук, автор более 80 научных публикаций.',
            color: 'yellow',
            img: './expert-10.png'
        },
        {
            title: 'Даниил Неслуховский',
            description: 'Заместитель директора в компа-нии Элитриум.',
            color: 'blue',
            img: './expert-9.png'
        },
        {
            title: 'Денис Панов',
            description: 'Инженер отдела конструиро-вания технологий защиты ин-формации в Группе Астра.',
            color: 'red',
            img: './expert-14.png'
        },
        {
            title: 'Егор Раков',
            description: 'Middle Backend-разработчик на Python, эксперт по архитектуре программного кода.',
            color: 'yellow',
            img: './expert-13.png'
        },
        {
            title: 'Илья Порсев',
            description: 'Сертифицированный препода-ватель Astra Linux, доцент ка-федры КБ-3 «Разработка прог-раммных решений и системное программирование»',
            color: 'blue',
            img: './expert-11.png'
        }
    ]

    return (
        <div className={cn('py-[9.25rem] relative overflow-hidden m:py-[5rem] m:pb-[1rem]', className)} id={'experts'}>
            <Figure shapeId={4} left={338} top={-333}/>
            <Figure shapeId={8} right={456} top={29}/>
            <Figure shapeId={7} right={-239} top={62} rotate={30}/>
            <Figure shapeId={1} left={249} top={321}/>
            <Figure shapeId={6} right={460} top={675}/>
            <Figure shapeId={11} right={-188} top={885}/>
            <Figure shapeId={7} left={452} top={1151}/>
            <Figure shapeId={9} left={-195} top={932}/>
            <Figure shapeId={6} left={-400} top={23} rotate={120}/>
            <Figure shapeId={3} right={162} top={1488}/>
            <Figure shapeId={2} right={-197} bottom={280}/>
            <Figure shapeId={8} left={8} bottom={570}/>
            <Figure shapeId={4} right={730} bottom={463}/>
            <Figure shapeId={6} right={316} bottom={-52} rotate={135}/>
            <Figure shapeId={9} left={-126} bottom={-164} rotate={135}/>
            <Figure shapeId={7} left={404} bottom={56} rotate={135}/>


            <BlockContainer>
                <p className={'font-druk-wide-cyr text-[3.0rem] flex items-center gap-3 m:hidden'}>
                    Встречайте наших
                    <ColoredText color={'blue'} className={' px-6 py-[.7rem] pb-[.9rem]'}>экспертов</ColoredText>
                </p>
                <p className={'hidden font-druk-wide-cyr text-[3.0rem] items-center gap-3 m:text-[2rem] m:flex'}>
                    Наши
                    <ColoredText color={'blue'}
                                 className={'px-6 m:p-[.75rem] m:pt-[0.25rem] m:pt-[0.5rem] m:pb-[.75rem] text-black'}>эксперты</ColoredText>

                </p>
                <div className={'grid grid-cols-4 gap-10 mt-20 m:hidden'}>
                    {
                        expertsDesk.map(expert => (
                            <div>
                                <div className={cn(
                                    {
                                        'bg-lightBlue': expert.color === 'blue',
                                        'bg-lightRed': expert.color === 'red',
                                        'bg-lightYellow': expert.color === 'yellow'
                                    },
                                    'h-[22.0rem] rounded-60 overflow-hidden relative'
                                )}>
                                    <img src={expert.img} alt={expert.title} className={'absolute bottom-0'}/>
                                </div>
                                <p className={'font-druk-wide-cyr text-[1.1rem] w-full my-3'}>{expert.title}</p>
                                <p className={'text-[1.25rem] leading-32 text-justify'}>{expert.description}</p>
                            </div>
                        ))
                    }
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className=" w-[100vw] hidden flex-col relative mt-[6rem] m:flex"
                    setApi={setApi}
                >
                    <CarouselPrevious className={'absolute top-[-2.17rem] left-[0.2rem] w-16 h-16 bg-black text-white'}>
                        <svg width="3rem" height="3rem" viewBox="0 0 31 34" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 5L5 17M5 17L17 29M5 17H27.5" stroke="#FCF8F4" strokeWidth="6"
                                  strokeLinecap="square"/>
                        </svg>

                    </CarouselPrevious>

                    <CarouselNext
                                  className={'z-20 absolute top-[-2.17rem] left-[5.3rem] w-16 h-16 bg-black text-white text-[3rem] active:opacity-90 hover:opacity-90'}/>

                    <div className="absolute top-[-3rem] left-[11rem] text-[1.25rem]">
                        {`${current} / ${expertsDesk.length}`}
                    </div>
                    <CarouselContent className={'z-10 m:mt-[1.5rem]'}>
                        {expertsDesk.map((expert, index) => (
                            <CarouselItem key={index} className="basis-[49.5rem] m:basis-[65%]">
                                <div className={'w-[45.75rem] pt-[1rem] m:w-[100%] m:hidden'}>
                                    <img src={expert.img} alt={''} className={cn({
                                        'bg-lightBlue': expert.color === 'blue',
                                        'bg-lightRed': expert.color === 'red',
                                        'bg-lightYellow': expert.color === 'yellow'
                                    }, `w-[45.75rem] h-[29.875rem] rounded-60 mb-[2.375rem] 1680:w-full m:w-auto m:h-[22rem] m:mb-[1.25rem] `)}></img>
                                    <p className={'font-druk-wide-cyr text-[1.875rem] w-full mb-5 m:text-[1.3rem] m:mb-[.75rem] '}>{expert.title}</p>
                                    <p className={'text-[1.25rem] leading-32 text-justify m:text-[1.3rem] m:leading-[1.8rem]'}>{expert.description}</p>
                                </div>
                                <div className={'hidden w-[45.75rem] pt-[1rem] m:w-[23rem] m:block'}>
                                    <div className={cn(
                                        `w-[45.75rem] h-[29.875rem] rounded-60 mb-[2.375rem] 1680:w-full m:w-[22rem] m:h-[22rem] relative m:m-0 overflow-hidden`,
                                        {
                                            'bg-lightBlue': expertsMobile[index].color === 'blue',
                                            'bg-lightRed': expertsMobile[index].color === 'red',
                                            'bg-lightYellow': expertsMobile[index].color === 'yellow',
                                        }
                                    )}>
                                        <img src={expertsMobile[index].img} alt={''} className={`absolute w-full h-auto bottom-0 left-[-50%] translate-x-[50%]`}></img>
                                    </div>
                                    <p className={'font-druk-wide-cyr text-[1.875rem] w-full mb-5 m:text-[1.3rem] mt-[1rem] m:mb-[.75rem] '}>{expertsMobile[index].title}</p>
                                    <p className={'text-[1.25rem] leading-32 text-justify m:text-[1.25rem] m:leading-[1.8rem] m:w-[95%]'}>{expertsMobile[index].description}</p>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>

                </Carousel>
            </BlockContainer>
        </div>
    )
}

export default ExpertsBlock
