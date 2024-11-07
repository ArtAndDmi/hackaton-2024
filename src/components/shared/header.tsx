'use client'

import React, {useEffect, useRef, useState} from 'react'
import ParticipateButton from "@/components/ui/participate-button"
import {cn} from "@/lib/utils"
import HeaderContainer from "@/components/ui/header-container"
import Figure from "@/components/ui/figure"
import useInView from "@/hooks/useInView"
import MenuButton from "@/components/shared/menu-button"
import Link from "next/link"
import {REG_LINK, TG_LINK} from "@/consts"
import ColoredText from "@/components/ui/colored-text"
import RunningLine from "@/components/shared/running-line"

interface Props {
    className?: string
    footerInView: boolean
}

export const Header: React.FC<Props> = ({className = '', footerInView}) => {
    const {ref, isIntersecting: isInView} = useInView({threshold: 0})
    const [start, setStart] = useState(false)

    const handleScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    useEffect(() => {
        setTimeout(() => setStart(true), 1000)
    }, [])
    // min-h-[48.75rem]

    return (
        <div className={'m:duration-200 m:max-h-[80.25rem] m:min-h-[66.75rem] m:h-[100svh] m:flex m:flex-col m:justify-between'}>
            <div className={''} ref={ref}>
                <Figure left={34} top={-54} shapeId={1}/>
                <Figure left={602} top={-180} shapeId={2} className={'m:hidden'}/>
                {/*<Figure right={7} top={8}  shapeId={3} className={'m:hidden'}/>*/}

                <HeaderContainer>

                    <header
                        className={cn(` w-[114rem] px-[2rem] py-[1rem] rounded-full max-w-[1920px] items-center justify-between mt-[3.125rem] fixed top-[-2rem] left-[50%] translate-x-[-50%] z-50 translate-y-[-150%] bg-white duration-200 flex ${!isInView && !footerInView && 'z-50 translate-y-[0]'} m:top-[-2rem] m:w-[35rem] m:left-[0rem] m:mx-[.5rem] m:translate-x-[0] ${start ? 'flex' : 'hidden'}`, className)}>
                        <div className={'flex gap-3 items-center'}>
                            <svg className={'w-[4rem] h-auto'} width="68" height="80" viewBox="0 0 68 80" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.798 40.2632L67.596 22.9161V31.6217L36.2304 47.6885V54.6658L67.596 38.4709V62.0271L33.798 79.8863L17.9232 71.6511V32.1929L33.798 40.2632Z"
                                    fill="#1C1528"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M67.5958 15.7467L33.7979 0L0 15.7467L0.00033883 15.7468L0 15.7468V31.686L11.6501 37.7667V21.6821L33.7979 32.9659L67.5958 15.7467Z"
                                      fill="#1C1528"/>
                            </svg>

                            <div
                                className={'flex items-center gap-[3rem] font-druk-wide-cyr-bold text-[1.25rem] w-[14.375rem] ml-3'}>
                                ЦИФРОВОЙ
                                СУВЕРЕНИТЕТ
                            </div>
                        </div>

                        <nav
                            className={'flex items-center gap-[1rem] bg-lightGray rounded-full px-[1rem] py-[.5rem] text-[1.125rem] m:hidden'}>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue w-[8rem] text-center hover:font-extrabold rounded-full duration-200'}
                                  onClick={() => handleScroll('cases')}>Кейсы</span>
                            <span className={'py-4 leading-none hover:font-extrabold text-center w-[8rem] cursor-pointer hover:bg-lightBlue rounded-full duration-200'}
                                  onClick={() => handleScroll('prizes')}>Призы</span>
                            <span className={'py-4 leading-none hover:font-extrabold text-center w-[11rem] cursor-pointer hover:bg-lightBlue rounded-full duration-200'}
                                  onClick={() => handleScroll('timetable')}>Расписание</span>
                            <span className={'py-4 leading-none hover:font-extrabold text-center w-[8rem] cursor-pointer hover:bg-lightBlue rounded-full duration-200'}
                                  onClick={() => handleScroll('experts')}>Эксперты</span>
                            <span className={'py-4 leading-none hover:font-extrabold text-center w-[8rem] cursor-pointer hover:bg-lightBlue rounded-full duration-200'}
                                  onClick={() => handleScroll('partners')}>Партнеры</span>
                            <span className={'py-4 leading-none hover:font-extrabold text-center w-[6rem] cursor-pointer hover:bg-lightBlue rounded-full duration-200'}
                                  onClick={() => handleScroll('questions')}>FAQ</span>
                            <span className={'py-4 leading-none hover:font-extrabold text-center w-[10rem] cursor-pointer hover:bg-lightBlue rounded-full duration-200'}
                                  onClick={() => handleScroll('photos')}>Архив 2023</span>
                        </nav>

                        <div className={'flex gap-3 items-center'}>

                            <Link href={TG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={'w-[3.3125rem] h-[3.3125rem] flex items-center justify-center text-[1.125rem] m:w-[4rem] m:h-[4rem] m:hidden'}>
                                    <svg className={'translate-x-[-.1rem]'} width="3rem" height="1.1875rem"
                                         viewBox="0 0 24 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.9936 1.55223C23.6614 4.73732 22.2216 12.4783 21.4906 16.0464C21.1805 17.5583 20.5603 18.0623 19.9844 18.1228C18.6997 18.2236 17.7251 17.3567 16.4847 16.6109C14.5355 15.4417 13.428 14.7159 11.5453 13.587C9.3524 12.2767 10.77 11.551 12.0326 10.3818C12.3648 10.0794 18.0352 5.3824 18.146 4.95907C18.1614 4.89495 18.1593 4.82838 18.14 4.76515C18.1207 4.70191 18.0847 4.64392 18.0352 4.59621C17.9023 4.49542 17.7251 4.53573 17.5701 4.55589C17.3707 4.59621 14.2697 6.47098 8.22275 10.1802C7.33674 10.7245 6.53934 11.0067 5.83053 10.9866C5.03313 10.9664 3.52693 10.5834 2.39727 10.2407C1.00182 9.8375 -0.0835378 9.61576 0.00506253 8.9102C0.0493627 8.54734 0.603115 8.18448 1.64417 7.80146C8.11199 5.24129 12.4091 3.54795 14.5577 2.7416C20.7154 0.403178 21.978 0 22.8197 0C22.9969 0 23.4177 0.0403174 23.6835 0.241906C23.905 0.403176 23.9715 0.624924 23.9936 0.786195C23.9715 0.907147 24.0158 1.27001 23.9936 1.55223Z"
                                            fill="#1C1528"/>
                                    </svg>
                                </ParticipateButton>
                            </Link>


                            <Link href={REG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={'py-[1rem] px-[2.7rem] text-[1.125rem] m:hidden'}>
                                    Участвовать
                                </ParticipateButton>
                            </Link>


                            <div className={'hidden m:flex'}>
                                <MenuButton top={false}/>
                            </div>
                        </div>

                    </header>


                    <header
                        className={cn('w-full flex items-center justify-between mt-[3.125rem] m:mt-[2rem]', className)}>
                        <div className={'flex gap-3 items-center'}>
                            <svg className={'w-[4rem] h-auto'} width="68" height="80" viewBox="0 0 68 80" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.798 40.2632L67.596 22.9161V31.6217L36.2304 47.6885V54.6658L67.596 38.4709V62.0271L33.798 79.8863L17.9232 71.6511V32.1929L33.798 40.2632Z"
                                    fill="#1C1528"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M67.5958 15.7467L33.7979 0L0 15.7467L0.00033883 15.7468L0 15.7468V31.686L11.6501 37.7667V21.6821L33.7979 32.9659L67.5958 15.7467Z"
                                      fill="#1C1528"/>
                            </svg>

                            <div
                                className={'flex items-center gap-[3rem] font-druk-wide-cyr-bold text-[1.25rem] w-[14.375rem] ml-3'}>
                                ЦИФРОВОЙ
                                СУВЕРЕНИТЕТ
                            </div>
                        </div>

                        <nav
                            className={'flex items-center gap-[1rem] bg-lightGray rounded-full p-[.5rem] text-[1.125rem] m:hidden'}>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[8rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('cases')}>Кейсы</span>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[8rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('prizes')}>Призы</span>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[11rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('timetable')}>Расписание</span>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[8rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('experts')}>Эксперты</span>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[8rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('partners')}>Партнеры</span>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[6rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('questions')}>FAQ</span>
                            <span className={'py-4 leading-none cursor-pointer hover:bg-lightBlue hover:font-extrabold text-center w-[10rem] rounded-full duration-200'}
                                  onClick={() => handleScroll('photos')}>Архив 2023</span>

                        </nav>

                        <div className={'flex gap-3'}>
                            <Link href={TG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={'w-[3.3125rem] h-[3.3125rem] flex items-center justify-center text-[1.125rem] m:w-[4rem] m:h-[4rem] m:hidden'}>
                                    <svg className={'translate-x-[-.1rem]'} width="3rem" height="1.1875rem"
                                         viewBox="0 0 24 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.9936 1.55223C23.6614 4.73732 22.2216 12.4783 21.4906 16.0464C21.1805 17.5583 20.5603 18.0623 19.9844 18.1228C18.6997 18.2236 17.7251 17.3567 16.4847 16.6109C14.5355 15.4417 13.428 14.7159 11.5453 13.587C9.3524 12.2767 10.77 11.551 12.0326 10.3818C12.3648 10.0794 18.0352 5.3824 18.146 4.95907C18.1614 4.89495 18.1593 4.82838 18.14 4.76515C18.1207 4.70191 18.0847 4.64392 18.0352 4.59621C17.9023 4.49542 17.7251 4.53573 17.5701 4.55589C17.3707 4.59621 14.2697 6.47098 8.22275 10.1802C7.33674 10.7245 6.53934 11.0067 5.83053 10.9866C5.03313 10.9664 3.52693 10.5834 2.39727 10.2407C1.00182 9.8375 -0.0835378 9.61576 0.00506253 8.9102C0.0493627 8.54734 0.603115 8.18448 1.64417 7.80146C8.11199 5.24129 12.4091 3.54795 14.5577 2.7416C20.7154 0.403178 21.978 0 22.8197 0C22.9969 0 23.4177 0.0403174 23.6835 0.241906C23.905 0.403176 23.9715 0.624924 23.9936 0.786195C23.9715 0.907147 24.0158 1.27001 23.9936 1.55223Z"
                                            fill="#1C1528"/>
                                    </svg>
                                </ParticipateButton>
                            </Link>


                            <Link href={REG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={'py-[1rem] px-[2.7rem] text-[1.125rem] m:hidden'}>
                                    Участвовать
                                </ParticipateButton>
                            </Link>
                            <div className={'hidden m:flex'}>
                                <MenuButton top={true}/>

                            </div>
                        </div>

                    </header>
                </HeaderContainer>
            </div>
            <div className={cn('pt-[6rem] relative m:pt-[3rem]', className)}>
                <Figure shapeId={4} bottom={60} left={338}/>
                <Figure shapeId={5} bottom={135} right={524}/>
                <Figure shapeId={6} bottom={-206} right={-61}/>
                <Figure shapeId={7} bottom={-236} left={-153}/>
                <HeaderContainer className={'m:mb-[3rem]'}>
                    <div className={'flex items-center text-[2rem] gap-3 mb-5 m:justify-between m:text-[1.45rem]'}>
                        <span>22-24 НОЯБРЯ</span>
                        <div className={'w-3 h-3 bg-lightBlue rounded-full'}></div>
                        <span>РТУ МИРЭА</span>
                        <div className={'w-3 h-3 bg-lightRed rounded-full'}></div>
                        <span>Оффлайн</span>
                    </div>

                    <div className={'relative'}>
                        <p className={'text-[6.875rem] font-druk-wide-cyr-bold leading-[7rem] m-0 relative m:text-[2.8rem] m:leading-[3rem] m:mt-[1rem]'}>
                            ЦИФРОВОЙ
                            СУВЕРЕНИТЕТ
                        </p>
                        <ColoredText color={'yellow'}
                                     className={'p-5 py-[.5rem] rounded-40 text-[4rem] absolute top-[-.5rem] rotate-19deg left-[65rem] font-druk-wide-cyr m:text-[1.5rem] m:px-[.8rem] m:left-auto m:right-[0rem] m:pt-[.5rem] m:pb-[.5rem] rounded-[1rem] m:top-[-.5rem] m:rounded-[1rem]'}>
                            3.0
                        </ColoredText>
                        <img src={'./main-1.png'} alt=""
                             className={'absolute w-[31.625rem] top-[10.3125rem] left-[62.625rem] m:w-[28rem] m:left-[-5rem] m:top-[10rem]'}/>
                        <img src={'./main-2.png'} alt=""
                             className={'absolute w-[25.0rem] top-[-20px] left-[82.875rem] m:w-[18rem] m:left-[16rem] m:top-[8rem] '}/>
                        <img src={'./main-3.png'} alt=""
                             className={'absolute w-[14.375rem] left-[91.375rem] top-[21.875rem] m:w-[12rem] m:left-[16rem] m:top-[24rem] '}/>

                    </div>
                    <p className={'mt-5 text-[2.0rem] mb-24 m:mb-[26rem] m:text-[1.55rem]'}>Национальный студенческий
                        хакатон</p>
                    <div className={'flex gap-8 items-center '}>
                        <Link href={REG_LINK}>
                            <ParticipateButton color={'blue'}
                                               className={'py-[1.625rem] px-10 text-[2.25rem] m:text-[1.5rem] m:py-[1rem] m:px-[3rem]'}
                                               hasShadow>
                                <div className={'flex gap-4 items-center'}>
                                    Участвовать
                                    <svg width="3.5rem" height="3.5rem" viewBox="0 0 48 48" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="48" height="48" rx="24" fill="#F7F4EF"/>
                                        <path d="M23 14L33.2857 24.2857M33.2857 24.2857L23 34.5714M28.2857 24.2857H13"
                                              stroke="#1C1528" stroke-width="4" stroke-linecap="square"/>
                                    </svg>
                                </div>

                            </ParticipateButton>
                        </Link>

                        <Link href={TG_LINK}>
                            <ParticipateButton color={'blue'}
                                               className={'h-[6.5rem] w-[6.5rem] flex items-center justify-center m:h-[5.5rem] m:w-[5.5rem]'}
                                               hasShadow>
                                <svg className={'translate-x-[-.1rem]'} width="3rem" height="2.25rem"
                                     viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.629 3.40453C46.9771 9.65452 44.1519 24.8444 42.7176 31.846C42.1091 34.8127 40.8921 35.8016 39.762 35.9203C37.2411 36.1181 35.3286 34.4172 32.8946 32.9535C29.0698 30.6592 26.8966 29.2352 23.2021 27.02C18.8991 24.4488 21.6808 23.0248 24.1583 20.7305C24.8103 20.1371 35.9371 10.9203 36.1545 10.0896C36.1846 9.96383 36.1806 9.83321 36.1428 9.70912C36.1049 9.58504 36.0343 9.47125 35.9371 9.37762C35.6763 9.17984 35.3286 9.25895 35.0244 9.29851C34.6332 9.37762 28.5482 13.0564 16.6824 20.3349C14.9439 21.4029 13.3791 21.9567 11.9883 21.9172C10.4236 21.8776 7.468 21.126 5.25132 20.4536C2.51307 19.6624 0.383318 19.2273 0.557175 17.8428C0.644104 17.1308 1.73071 16.4188 3.77354 15.6672C16.4651 10.6434 24.8972 7.32066 29.1132 5.73839C41.1963 1.14978 43.6738 0.358643 45.3254 0.358643C45.6731 0.358643 46.499 0.437756 47.0205 0.833325C47.4552 1.14978 47.5856 1.58491 47.629 1.90136C47.5856 2.13871 47.6725 2.85073 47.629 3.40453Z"
                                        fill="#1C1528"/>
                                </svg>

                            </ParticipateButton>
                        </Link>

                    </div>
                    <p className={'mt-5 text-[1.7rem] mb-24 1680:mb-[12.5rem] m:text-[1.5rem] m:mb-[.5rem] m:w-[25rem]'}>Регистрация
                        команд открыта <br className={'hidden m:block'}/>до 18 НОЯБРЯ</p>


                </HeaderContainer>


            </div>
            <RunningLine
                items={['Проекты для науки и бизнеса', 'Опыт командной разработки', 'Развитие отечественного ПО']} className={'m:translate-y-[-1rem]'}/>

        </div>

    )
}

export default Header
