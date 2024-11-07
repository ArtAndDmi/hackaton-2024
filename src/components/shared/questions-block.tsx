'use client'

import React from 'react'
import {cn} from "@/lib/utils"
import ColoredText from "@/components/ui/colored-text"
import BlockContainer from "@/components/ui/block-container"
import Figure from "@/components/ui/figure"

interface Props {
    className?: string
}

export const QuestionsBlock: React.FC<Props> = ({className = ''}) => {
    const questionsDesk = [
        {
            question: 'Могут ли участвовать студенты не из Москвы?',
            answer: 'Да, могут. Иногородним студентам мы предоставляем проживание в Москве на время проведения хакатона.'
        },
        {
            question: 'Студенты вузов и колледжей соревнуются независимо?',
            answer: 'Команды студентов вузов и колледжей соревнуются в одном рейтинге в рамках выбранного кейса.'
        },
        {
            question: 'Когда завершается регистрация новых участников?',
            answer: 'Зарегистрироваться на хакатон вы сможете до 18 ноября 23:00.'
        },
        {
            question: 'Можно ли изменить состав команды?',
            answer: 'Изменить состав команды можно до начала хакатона, повторно заполнив форму регистрации.'
        },
    ]
    const questionsMobile = [
        {
            question: 'Могут ли участвовать студенты не из Москвы?',
            answer: 'Да, могут. Иногородним студентам мы предоставляем проживание в Москве на время проведения хакатона.'
        },
        {
            question: 'Студенты вузов и колледжей соревнуются независимо?',
            answer: 'Команды студентов вузов и колледжей соревнуются в одном рейтинге в рамках выбранного кейса.'
        },
        {
            question: 'Когда завершается регистрация новых участников?',
            answer: 'Зарегистрироваться на хакатон вы сможете до 18 ноября 23:00.'
        },
        {
            question: 'Можно ли изменить состав команды?',
            answer: 'Изменить состав команды можно до начала хакатона заполнив форму регистрации.'
        },
    ]

    return (
        <div className={cn('relative overflow-hidden', className)} id={'questions'}>
            <Figure shapeId={9} right={458} top={-208}  />
            <Figure shapeId={11} left={-252} top={-239}  />
            <Figure shapeId={2} left={352} top={17}  />
            <Figure shapeId={1} right={-28} top={26}  />
            <Figure shapeId={4} right={637} bottom={1}  />
            <Figure shapeId={6} left={-36} bottom={-189}  />



            <BlockContainer className={'m:hidden'}>
                <p className={'font-druk-wide-cyr text-[3.0rem] flex items-center gap-3 pt-[9.0rem] pb-16 m:hidden'}>
                    Часто задаваемые
                    <ColoredText color={'yellow'} className={'px-6 py-[.7rem] pb-[.9rem]'}>вопросы</ColoredText>
                </p>


                <div className={'flex flex-col gap-12'}>
                    {
                        questionsDesk.map((question, i) => (
                            <div>
                                <ColoredText
                                    color={i % 3 === 0 && 'red' || i % 3 === 0 && 'blue' || i % 3 === 0 && 'yellow' || 'blue'}
                                    className={'font-druk-wide-cyr text-[1.75rem] py-[.75rem] px-6'}
                                >
                                    {question.question}
                                </ColoredText>
                                <p className={'mt-6 text-[1.25rem]'}>{question.answer}</p>
                            </div>
                        ))
                    }
                </div>
            </BlockContainer>

            <BlockContainer className={'hidden m:block'}>
                <div className={'hidden font-druk-wide-cyr text-[3.0rem] mt-[5rem] gap-3 flex-col items-start m:text-[2rem] m:flex'}>
                    Часто задаваемые
                    <ColoredText color={'yellow'} className={'m:p-[.75rem] m:pt-[0.5rem] m:pb-[.75rem] text-black'}>вопросы</ColoredText>
                </div>
                <div>
                    {
                        questionsMobile.map((question, index) => (
                            <div className={''}>
                                <p className={`font-druk-wide-cyr p-[1rem] px-[2rem] text-center ${index % 3 === 0 ? 'bg-lightRed' : index % 3 === 1 ? 'bg-lightBlue' : 'bg-lightYellow'} rounded-full mt-[2.1875rem]  text-[1.2rem] leading-[1.65rem]`}>{question.question}</p>
                                <p className={'text-[1.3rem] mt-[0.75rem]'}>{question.answer}</p>
                            </div>
                        ))
                    }
                </div>
            </BlockContainer>

        </div>
    )
}

export default QuestionsBlock
