'use client'

import React from 'react'
import {cn} from "@/lib/utils"
import BlockContainer from "@/components/ui/block-container"
import ColoredText from "@/components/ui/colored-text"
import Figure from "@/components/ui/figure"

interface Props {
    className?: string
}

export const ParticipantsBlock: React.FC<Props> = ({className = ''}) => {
    return (
        <div className={cn('pt-[9.75rem]  relative m:pt-[6rem]', className)} id={'participants'}>
            <Figure shapeId={8} left={-267} top={332}   />
            <Figure shapeId={4} right={-270} bottom={80}   />
            <Figure shapeId={7} right={780} bottom={30}  rotate={60}  />
            <Figure shapeId={2} left={254} bottom={-367}   />
            <BlockContainer>
                <p className={'font-druk-wide-cyr text-[3.0rem] flex items-center gap-3 m:hidden'}>
                    Кто может
                    <ColoredText color={'blue'} className={'px-6 py-[.7rem] pb-[.9rem] m:p-[.75rem] m:pt-[.5rem] m:pb-[.8rem]'}>участвовать</ColoredText>
                    в хакатоне
                </p>
                <p className={'hidden font-druk-wide-cyr text-[3.0rem] items-center gap-3 m:text-[2rem] m:flex'}>
                    <ColoredText color={'blue'} className={'px-6 m:p-[1rem] m:pt-[.5rem] m:pb-[.8rem] m:mt-[.3rem]'}>Участники</ColoredText>
                    хакатона
                </p>
                <div className={'flex items-center justify-between gap-10 relative mt-[2rem] mb-[9.0rem] 1680:w-[100vw] 1680:translate-x-[-10%] 1680:px-[3%] m:w-full m:flex-col m:mb-[4rem]'}>
                    <div className={'h-[28.5rem] w-[105rem]  flex justify-center relative m:w-[96vw] m:h-[23rem]'}>

                        <svg className={'absolute w-full right-0 m:hidden'} width="48.75rem" height="28.5625rem" viewBox="0 0 780 457" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M382.158 371.338C476.841 432.025 583.625 434.301 620.786 376.429C631.945 359.114 635.48 338.345 632.552 316.116C691.313 327.388 743.002 314.94 766.528 278.129C803.688 220.258 756.983 124.132 662.3 63.445C567.618 2.75835 460.833 0.482407 423.673 58.3537C412.513 75.6689 408.978 96.4383 411.906 118.667C353.145 107.395 301.457 119.843 277.93 156.654C240.77 214.525 287.475 310.651 382.158 371.338Z" fill="#FF9E81"/>
                            <path d="M201.953 39.6124L241.444 0L276.25 43.7337L328.015 22.29L343.348 76.0241L399.365 75.9715L392.966 131.548L444.753 152.856L417.513 201.794L457.246 241.269L413.392 276.092L434.939 327.72L381.102 343.19L381.258 399.069L325.578 392.808L304.253 444.474L255.331 417.355L215.84 456.967L181.034 413.234L129.389 434.66L113.935 380.943L58.0397 380.979L64.4378 325.403L12.6518 304.094L39.7706 255.173L0.158203 215.681L44.0123 180.858L22.4653 129.231L76.1823 113.777L76.1467 57.8815L131.706 64.1592L153.031 12.4936L201.953 39.6124Z" fill="#FFDD75"/>
                        </svg>
                        <svg className={'hidden m:block absolute w-full right-0'} width="34.375rem" height="23.125rem" viewBox="0 0 550 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M443.574 343.95C523.172 303.89 567.787 232.053 543.279 183.422C535.962 168.843 523.214 158.068 506.863 151.107C538.252 115.614 550.601 75.3836 534.967 44.5253C510.458 -4.10632 426.023 -11.0105 346.426 29.0499C266.828 69.1103 222.213 140.947 246.721 189.578C254.038 204.157 266.786 214.932 283.137 221.893C251.748 257.386 239.399 297.616 255.033 328.475C279.542 377.106 363.977 384.01 443.574 343.95Z" fill="#FF9E81"/>
                            <path d="M182.29 27.4398L218.424 0.977487L240.694 39.817L284.346 29.2219L289.959 73.5755L334.377 80.4098L322.537 123.552L361 146.751L333.445 182.088L360.139 218.166L321.13 240.307L331.926 283.759L287.358 289.378L280.678 333.564L237.296 321.781L214.097 360L178.613 332.56L142.479 359.023L120.209 320.183L76.6542 330.779L70.9431 286.424L26.6228 279.592L38.463 236.449L0 213.251L27.4579 177.912L0.860687 141.835L39.8701 119.694L29.0735 76.2428L73.544 70.6218L80.3221 26.4373L123.607 38.219L146.806 0L182.29 27.4398Z" fill="#FFDD75"/>
                        </svg>


                        <p className={'font-druk-wide-cyr pt-[7.875rem] text-[3.0rem] text-center w-[37.5rem] z-30 m:text-[2rem] m:mt-[0rem]'}>Студенты вузов <br/> и колледжей</p>
                        <p className={'absolute px-6 py-3 text-[1.5rem] bg-white text-black font-druk-wide-cyr rounded-full rotate-7deg bottom-[6.25rem] left-[3.8rem] m:text-[1.1rem] m:bottom-[4rem] m:left-[5rem]'}>от
                            3 до 4 человек в команде</p>
                    </div>
                    <div className={'flex gap-[1.75rem] w-[101rem] h-auto  m:h-auto m:relative m:w-full'}>
                        <svg className={'m:absolute m:w-[2.25rem] m:h-[2.25rem] m:top-[.8rem] m:left-[0rem]'} width="7rem" height="7rem" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.7578 0.983398L41.4007 24.3405L64.7578 32.9834L41.4007 41.6263L32.7578 64.9834L24.1149 41.6263L0.757812 32.9834L24.1149 24.3405L32.7578 0.983398Z" fill="#1C1528"/>
                        </svg>

                        <div className={'mt-[1rem] m:pl-[3rem]'}>
                            <p className={'font-druk-wide-cyr text-[2.0rem] m:text-[1.25rem]'}>Хакатон пройдет оффлайн</p>

                            <p className={'text-[1.25rem] mt-5 m:hidden'}>
                                <ColoredText color={'yellow'} className={'p-1 font-extrabold'}>В кампусе МИРЭА</ColoredText> — Российского технологического университета по адресу г. Москва, проспект<br/> Вернадского, д. 78
                            </p>
                            <p className={'hidden text-[1.2rem] mt-5 m:block'}>
                                <ColoredText color={'yellow'} className={'p-1 font-extrabold'}>В кампусе МИРЭА</ColoredText> — Российского<br/> технологического университета по адресу<br/> г. Москва, проспект Вернадского, д. 78
                            </p>

                            <p className={'text-[1.25rem] mt-5 m:hidden'}>
                                Отбор команд проводится по результатам <br/>  анкетирования  на основании <ColoredText color={'red'} className={'p-1 mt-1 font-extrabold'}>навыков и опыта</ColoredText>
                            </p>

                            <p className={'hidden text-[1.25rem] mt-5 m:block'}>
                                Отбор команд проводится по анкете на основании <ColoredText color={'red'} className={'p-1 mt-1 font-extrabold'}>навыков и опыта</ColoredText>
                            </p>
                        </div>
                    </div>
                </div>
            </BlockContainer>



        </div>
    )
}

export default ParticipantsBlock
