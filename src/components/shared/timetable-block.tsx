'use client'

import React, {useState} from 'react'
import {cn} from "@/lib/utils"
import BlockContainer from "@/components/ui/block-container"
import ColoredText from "@/components/ui/colored-text"
import Figure from "@/components/ui/figure"

interface Props {
    className?: string
}

type EventBlock = {
    coloredText: string;
    color: string;
    otherText: string;
    img: string;
};

// Тип для каждого события
type Event = {
    time: string;
    name: string;
    block?: EventBlock; // Поле является опциональным, поскольку не все события содержат блок
};

// Тип для каждого дня
type DaySchedule = {
    name: string;
    nameColor: string;
    date: string;
    events: Event[];
};

// Тип для всего расписания
type Schedule = DaySchedule[];

export const TimetableBlock: React.FC<Props> = ({className = ''}) => {
    const [isOpen1, setIsOpen1] = useState(true)
    const [isOpen2, setIsOpen2] = useState(true)
    const [isOpen3, setIsOpen3] = useState(true)


    const toggleVisibility = (id: number) => {
        if (id === 1) {
            setIsOpen1(!isOpen1)
        }
        if (id === 2) {
            setIsOpen2(!isOpen2)
        }
        if (id === 3) {
            setIsOpen3(!isOpen3)
        }

    }

    const timetable: Schedule = [
        {
            name: 'День 1',
            nameColor: 'blue',
            date: '22 ноября',
            events: [
                {
                    time: '14:00-15:00',
                    name: 'Регистрация участников'
                },
                {
                    time: '15:00-15:30',
                    name: 'Торжественное открытие хакатона'
                },
                {
                    time: '15:30-16:00',
                    name: 'Публикация кейсов хакатона'
                },
                {
                    time: '16:00-17:00',
                    name: 'Решение задач участниками'
                },
                {
                    time: '17:00-18:00',
                    name: 'Q&A сессия, ответы на вопросы'
                },
                {
                    time: '18:00-19:00',
                    name: 'Ужин для участников'
                },
                {
                    time: '19:00-20:00',
                    name: 'Первый чекпоинт'
                },
                {
                    time: '20:00-22:00',
                    name: 'Решение задач участниками'
                }

            ]
        },
        {
            name: 'День 2',
            nameColor: 'yellow',
            date: '23 ноября',
            events: [
                {
                    time: '10:00-12:00',
                    name: 'Решение задач участниками'
                },
                {
                    time: '12:00-13:00',
                    name: 'Q&A сессия, ответы на вопросы'
                },
                {
                    time: '13:00-14:00',
                    name: 'Обед для участников'
                },
                {
                    time: '14:00-15:00',
                    name: 'Первый чекпоинт'
                },
                {
                    time: '15:00-19:00',
                    name: 'Решение задач участниками'
                },
                {
                    time: '19:00-20:00',
                    name: 'Второй чекпоинт'
                },
                {
                    time: '20:00-22:00',
                    name: 'Решение задач участниками'
                },
            ]
        },
        {
            name: 'День 3',
            nameColor: 'red',
            date: '24 ноября',
            events: [
                {
                    time: '10:00-13:00',
                    name: 'Решение задач участниками'
                },
                {
                    time: '13:00-14:00',
                    name: 'Обед для участников'
                },
                {
                    time: '14:00-14:30',
                    name: 'Стоп-код, подготовка к защитам'
                },
                {
                    time: '14:30-18:30',
                    name: 'Выступления участников с защитой решений по кейсам'
                },
                {
                    time: '18:30-19:30',
                    name: 'Мастер-класс «Следопыты цифрового леса: кто и как ‎охотится на ваши данные»',
                    block: {
                        coloredText: 'Андрей Масалович',
                        color: 'yellow',
                        otherText: ', ведущий эксперт по конкурентной разведке, президент консорциума «Инфорус».',
                        img: './timetable-1.png'
                    }
                },
                {
                    time: '19:00-20:00',
                    name: 'Итоги и награждение победителей'
                }
            ]
        }
    ]

    const getEventTimeColor = (mainLabelColor: "blue" | "red" | "yellow", index: number): "blue" | "red" | "yellow" => {
        if (mainLabelColor === 'blue') {
            if (index % 3 === 0) {
                return 'yellow'
            }
            if (index % 3 === 1) {
                return 'red'
            }
            if (index % 3 === 2) {
                return 'blue'
            }
        }
        if (mainLabelColor === 'yellow') {
            if (index % 3 === 0) {
                return 'red'
            }
            if (index % 3 === 1) {
                return 'blue'
            }
            if (index % 3 === 2) {
                return 'yellow'
            }
        }
        if (mainLabelColor === 'red') {
            if (index % 3 === 0) {
                return 'blue'
            }
            if (index % 3 === 1) {
                return 'yellow'
            }
            if (index % 3 === 2) {
                return 'red'
            }
        }
        return 'blue'
    }

    return (
        <div className={cn('bg-bgBlue relative overflow-hidden z-0', className)} id={'timetable'}>
            <Figure shapeId={1} right={-70} top={-390} color={'blue'} rotate={90}/>
            <Figure shapeId={3} right={527} top={71} color={'blue'}/>
            <Figure shapeId={7} left={1} top={251} color={'blue'}/>
            <Figure shapeId={8} right={66} top={473} color={'blue'}/>
            <Figure shapeId={6} left={352} top={798} color={'blue'}/>
            <Figure shapeId={4} right={474} top={1066} color={'blue'}/>
            <Figure shapeId={9} right={-274} top={1219} color={'blue'}/>
            <Figure shapeId={11} left={-117} top={1353} color={'blue'}/>
            <Figure shapeId={1} left={569} top={1610} color={'blue'}/>
            <Figure shapeId={10} right={74} top={1931} color={'blue'}/>
            <Figure shapeId={7} left={24} top={2122} color={'blue'}/>
            <Figure shapeId={2} right={653} top={2389} color={'blue'}/>
            <Figure shapeId={9} right={21} top={2669} color={'blue'}/>
            <Figure shapeId={4} left={338} top={2852} color={'blue'}/>

            <BlockContainer>
                <p className={'font-druk-wide-cyr text-[3.0rem] text-white pt-[9.0rem] pb-20 m:pt-[3rem] m:text-[1.8rem] m:pb-[3rem]'}>Расписание
                    хакатона</p>
                <div className={'flex flex-col gap-[5.0rem] pb-[9.0rem] m:gap-0 m:pb-[2rem]'}>
                    {
                        timetable.map((day, index) => (
                            <div className={'m:pb-[2rem]'} key={index}>
                                <div className={'mb-16 flex items-center m:mb-[2rem]'}>
                                    <ColoredText color={day.nameColor as "blue" | "red" | "yellow"}
                                                 className={'font-druk-wide-cyr text-[3.0rem] px-6 py-2 m:text-[1.8rem] m:px-[.75rem] m:py-[.25rem] m:text-center'}>
                                        {day.name}
                                    </ColoredText>
                                    <span
                                        className={'text-[3.0rem] font-druk-wide-cyr text-white ml-[1.75rem] m:ml-[1rem] m:text-[2rem]'}>{day.date}</span>
                                    <button
                                        className={'w-[4rem] h-[4rem] bg-black ml-[1.75rem] rounded-full text-white text-[4rem] flex items-center justify-center p-0 m:absolute m:right-[2rem]'}
                                        onClick={() => toggleVisibility(index + 1)}
                                    >
                                        {
                                            index === 0 && isOpen1 || index === 1 && isOpen2 || index === 2 && isOpen3
                                                ?
                                                <svg width="1.75rem" height="0.375rem" viewBox="0 0 28 6" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M-0.000122595 6L27.9999 6L27.9999 0L-0.00012207 -2.44784e-06L-0.000122595 6Z"
                                                          fill="white"/>
                                                </svg>

                                                : <svg width="1.75rem" height="1.75rem" viewBox="0 0 28 28" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M11.0002 28L11.0002 -2.62268e-07L17.0002 0L17.0002 28L11.0002 28Z"
                                                          fill="white"/>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M-5.24537e-07 17L28 17L28 11L0 11L-5.24537e-07 17Z"
                                                          fill="white"/>
                                                </svg>


                                        }
                                    </button>
                                </div>
                                <div
                                    className={`flex flex-col gap-10 m:gap-[1rem] m:mb-[1rem] overflow-hidden transition-[.2s] ease-in-out ${index === 0 && isOpen1 || index === 1 && isOpen2 || index === 2 && isOpen3 ? 'max-h-[50rem] m:max-h-[200rem]' : 'max-h-0'}`}
                                >
                                    {
                                        day.events.map((event, index) => (
                                            <>
                                                <div className={'flex items-center gap-10 relative m:hidden'}
                                                     key={index}>
                                                    {index !== 0 &&
                                                        <div
                                                            className={' absolute bottom-[1rem] left-[16.86rem] w-[0.3rem] z-0'}
                                                            style={{backgroundColor: '#869BFF', height: event.hasOwnProperty('block') ? '20rem' : '8.5rem'}}
                                                        >

                                                        </div>
                                                    }
                                                    <ColoredText
                                                        color={getEventTimeColor(day.nameColor as "blue" | "red" | "yellow", index)}
                                                        className={`text-[1.75rem] font-bold w-[12.5rem] text-center py-[0.625rem] px-0  ${event.hasOwnProperty('block') && 'mt-[-8rem]'}`}>{event.time}</ColoredText>
                                                    <div
                                                        className={`w-[4.0rem] h-[4.0rem] flex items-center justify-center z-10 ${event.hasOwnProperty('block') && 'mt-[-8rem]'}`}
                                                    >
                                                        <svg width="3rem" height="3rem" viewBox="0 0 64 64" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 0L40.6429 23.3571L64 32L40.6429 40.6429L32 64L23.3571 40.6429L0 32L23.3571 23.3571L32 0Z"
                                                                fill="#F7F4EF"/>
                                                        </svg>

                                                    </div>

                                                    <div className={'flex flex-col'}>
                                                        <p className={'font-druk-wide-cyr text-white text-[2.0rem] max-w-[61.25rem]'}>{event.name}</p>
                                                        {
                                                            event.hasOwnProperty('block') &&
                                                            <div className={'mt-[1rem] flex items-center gap-[1.25rem]'}>
                                                                <img src={event?.block?.img || ''} alt="" className={'w-[7rem] h-[7rem]'}/>
                                                                <p className={'text-white text-[1.25rem] w-[40rem]'}>

                                                                    <ColoredText
                                                                        color={event?.block?.color as  "blue" | "red" | "yellow"  || 'yellow'}
                                                                        className={'text-black  text-[1.25rem] font-bold  text-center px-[.2rem] py-[.1rem]'}
                                                                    >
                                                                        {event?.block?.coloredText || ''}
                                                                    </ColoredText>
                                                                    {event?.block?.otherText || ''}

                                                                </p>
                                                            </div>
                                                        }
                                                    </div>


                                                </div>
                                                <div className={'hidden  flex-col mt-[1.2rem] gap-0 relative m:flex '}>
                                                    {index !== 0 &&
                                                        <div
                                                            className={'rounded-full absolute h-[142%] bottom-[1.1rem] left-[.98rem] w-[0.3rem] z-0'}
                                                            style={{backgroundColor: '#869BFF'}}>

                                                        </div>
                                                    }
                                                    <div>
                                                        <ColoredText
                                                            color={getEventTimeColor(day.nameColor as "blue" | "red" | "yellow", index)}
                                                            className={'py-[.25rem] px-[.7rem] font-extrabold ml-[3rem] text-[1.5rem]'}
                                                        >
                                                            {event.time}
                                                        </ColoredText>

                                                    </div>
                                                    <div className={'flex items-center mt-[.5rem]'}>
                                                        <svg className={'z-10 translate-x-[-1rem]'} width="4.5rem"
                                                             height="2rem" viewBox="0 0 64 64" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 0L40.6429 23.3571L64 32L40.6429 40.6429L32 64L23.3571 40.6429L0 32L23.3571 23.3571L32 0Z"
                                                                fill="#F7F4EF"/>
                                                        </svg>
                                                            <p className={'font-druk-wide-cyr text-white text-[1.25rem] w-[29rem] m:ml-[-1rem]'}>{event.name}</p>
                                                    </div>
                                                    {
                                                        event.hasOwnProperty('block') &&
                                                        <div className={'mt-[1rem] flex items-center gap-[1.25rem] ml-[4.5rem]'}>
                                                            <img src={event?.block?.img || ''} alt="" className={'w-[7rem] h-[7rem]'}/>
                                                            <p className={'text-white text-[1.1rem] w-[100rem]'}>

                                                                <ColoredText
                                                                    color={event?.block?.color as "blue" | "red" | "yellow"  || 'yellow'}
                                                                    className={'text-black  text-[1.1rem] font-bold  text-center px-[.2rem] py-[.1rem]'}
                                                                >
                                                                    {event?.block?.coloredText || ''}
                                                                </ColoredText>
                                                                {event?.block?.otherText || ''}

                                                            </p>
                                                        </div>
                                                    }


                                                </div>
                                            </>

                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>

            </BlockContainer>
        </div>
    )
}

export default TimetableBlock
