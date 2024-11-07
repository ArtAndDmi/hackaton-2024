'use client'

import React, {useEffect, useState} from 'react'
import ParticipateButton from "@/components/ui/participate-button"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {REG_LINK, TG_LINK} from "@/consts"
import useIsGalaxyFold from "@/hooks/useIsGalaxyFold"

interface Props {
    className?: string
    top: boolean
}

export const MenuButton: React.FC<Props> = ({className = '', top}) => {
    const [isVisible, setIsVisible] = useState(false)
    const isGalaxyFold = useIsGalaxyFold()
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden'

            const preventScroll = (e: any) => e.preventDefault()
            window.addEventListener('wheel', preventScroll, {passive: false})
            window.addEventListener('touchmove', preventScroll, {passive: false})

            return () => {
                document.body.style.overflow = ''
                window.removeEventListener('wheel', preventScroll)
                window.removeEventListener('touchmove', preventScroll)
            }
        } else {
            document.body.style.overflow = ''
        }
    }, [isVisible])

    const handleScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            setIsVisible(false)
            element.scrollIntoView({behavior: 'smooth'})
        }
    }


    return (
        <>
        {
            isGalaxyFold ?
                <div>
                    <Button className={
                        'font-druk-wide-cyr rounded-full text-black transition-[.2s] btn-bg btn-font flex items-center justify-center text-[1.125rem] m:w-[4rem] m:h-[4rem] bg-lightBlue p-0 m-0 '
                    } size={'lg'} onClick={() => setIsVisible(true)}>
                        <svg width="1.75rem" height="1.25rem" viewBox="0 0 28 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 4H0V0H28V4Z" fill="#1C1528"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 12H0V8H28V12Z" fill="#1C1528"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 20H0V16H28V20Z" fill="#1C1528"/>
                        </svg>
                    </Button>

                    <div
                        className={`fixed w-[100vw] ${top ? 'top-0 pt-[1rem] h-[100vh] ' : 'top-[-2rem] pt-[2rem] h-[105vh] ml-[-.5rem]'} left-0 overflow-auto bg-white z-[100] pl-[1.5rem] pt-[1rem] duration-200 ${isVisible ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                        <div className={`flex gap-3 items-center mt-[1rem]`}>
                            <svg className={`w-[4rem] h-auto`} width="68" height="80" viewBox="0 0 68 80" fill="none"
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
                            className={'w-full flex flex-col items-start p-[1.3rem] text-[1.5rem] mt-[0]'}>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('cases')}>Кейсы</span>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('prizes')}>Призы</span>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('timetable')}>Расписание</span>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('experts')}>Эксперты</span>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('partners')}>Партнеры</span>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('questions')}>FAQ</span>
                            <span className={'py-[1vh] cursor-pointer'} onClick={() => handleScroll('photos')}>Архив 2023</span>
                        </nav>

                        <div className={'flex gap-8 items-center mt-[5vh]'}>
                            <Link href={REG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={`w-[27rem] text-center py-[1.625rem] px-10 text-[2.25rem] m:text-[1.5rem] m:py-[1rem] m:px-[3rem]`}
                                                   hasShadow>
                                    Участвовать
                                </ParticipateButton>
                            </Link>

                            <Link href={TG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={' flex items-center justify-center m:h-[4rem] m:w-[4rem]'}
                                                   hasShadow>
                                    <svg width="2rem" height="1.5rem" viewBox="0 0 48 36" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M47.629 3.40453C46.9771 9.65452 44.1519 24.8444 42.7176 31.846C42.1091 34.8127 40.8921 35.8016 39.762 35.9203C37.2411 36.1181 35.3286 34.4172 32.8946 32.9535C29.0698 30.6592 26.8966 29.2352 23.2021 27.02C18.8991 24.4488 21.6808 23.0248 24.1583 20.7305C24.8103 20.1371 35.9371 10.9203 36.1545 10.0896C36.1846 9.96383 36.1806 9.83321 36.1428 9.70912C36.1049 9.58504 36.0343 9.47125 35.9371 9.37762C35.6763 9.17984 35.3286 9.25895 35.0244 9.29851C34.6332 9.37762 28.5482 13.0564 16.6824 20.3349C14.9439 21.4029 13.3791 21.9567 11.9883 21.9172C10.4236 21.8776 7.468 21.126 5.25132 20.4536C2.51307 19.6624 0.383318 19.2273 0.557175 17.8428C0.644104 17.1308 1.73071 16.4188 3.77354 15.6672C16.4651 10.6434 24.8972 7.32066 29.1132 5.73839C41.1963 1.14978 43.6738 0.358643 45.3254 0.358643C45.6731 0.358643 46.499 0.437756 47.0205 0.833325C47.4552 1.14978 47.5856 1.58491 47.629 1.90136C47.5856 2.13871 47.6725 2.85073 47.629 3.40453Z"
                                            fill="#1C1528"/>
                                    </svg>

                                </ParticipateButton>
                            </Link>
                            <Button className={
                                `absolute top-[2.5rem] right-[2.5rem] font-druk-wide-cyr rounded-full text-black transition-[.2s] btn-bg btn-font flex items-center justify-center text-[1.125rem] m:w-[4rem] m:h-[4rem] bg-lightBlue p-0 m-0 ${top ? '' : 'mt-[.5rem]'}`
                            } size={'lg'} onClick={() => setIsVisible(false)}>
                                <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M20.4857 23.3137L0.686709 3.51471L3.51514 0.686279L23.3141 20.4853L20.4857 23.3137Z"
                                          fill="#1C1528"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M20.4847 23.3137L0.685733 3.51471L3.51416 0.686279L23.3131 20.4853L20.4847 23.3137Z"
                                          fill="#1C1528"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M23.313 3.51479L3.51397 23.3138L0.685547 20.4854L20.4845 0.686362L23.313 3.51479Z"
                                          fill="#1C1528"/>
                                </svg>

                            </Button>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <Button className={
                        'font-druk-wide-cyr rounded-full text-black transition-[.2s] btn-bg btn-font flex items-center justify-center text-[1.125rem] m:w-[4rem] m:h-[4rem] bg-lightBlue p-0 m-0 '
                    } size={'lg'} onClick={() => setIsVisible(true)}>
                        <svg width="1.75rem" height="1.25rem" viewBox="0 0 28 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 4H0V0H28V4Z" fill="#1C1528"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 12H0V8H28V12Z" fill="#1C1528"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 20H0V16H28V20Z" fill="#1C1528"/>
                        </svg>
                    </Button>

                    <div
                        className={`fixed w-[100vw] ${top ? 'top-0 pt-[1rem] h-[100vh] ' : 'top-[-2rem] pt-[2rem] h-[105vh] ml-[-.5rem]'} left-0 overflow-auto bg-white z-[100] pl-[1.5rem] pt-[1rem] duration-200 ${isVisible ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                        <div className={`flex gap-3 items-center mt-[1rem] mb-[2rem]`}>
                            <svg className={`w-[4rem] h-auto`} width="68" height="80" viewBox="0 0 68 80" fill="none"
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
                            className={'w-full flex flex-col items-start p-[1.3rem] text-[1.5rem] mt-[0]'}>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('cases')}>Кейсы</span>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('prizes')}>Призы</span>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('timetable')}>Расписание</span>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('experts')}>Эксперты</span>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('partners')}>Партнеры</span>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('questions')}>FAQ</span>
                            <span className={'py-[1.5rem] cursor-pointer'} onClick={() => handleScroll('photos')}>Архив 2023</span>
                        </nav>

                        <div className={'flex gap-8 items-center mt-[5rem]'}>
                            <Link href={REG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={`w-[27rem] text-center py-[1.625rem] px-10 text-[2.25rem] m:text-[1.5rem] m:py-[1rem] m:px-[3rem]`}
                                                   hasShadow>
                                    Участвовать
                                </ParticipateButton>
                            </Link>

                            <Link href={TG_LINK} target={'_blank'}>
                                <ParticipateButton color={'blue'}
                                                   className={' flex items-center justify-center m:h-[4rem] m:w-[4rem]'}
                                                   hasShadow>
                                    <svg width="2rem" height="1.5rem" viewBox="0 0 48 36" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M47.629 3.40453C46.9771 9.65452 44.1519 24.8444 42.7176 31.846C42.1091 34.8127 40.8921 35.8016 39.762 35.9203C37.2411 36.1181 35.3286 34.4172 32.8946 32.9535C29.0698 30.6592 26.8966 29.2352 23.2021 27.02C18.8991 24.4488 21.6808 23.0248 24.1583 20.7305C24.8103 20.1371 35.9371 10.9203 36.1545 10.0896C36.1846 9.96383 36.1806 9.83321 36.1428 9.70912C36.1049 9.58504 36.0343 9.47125 35.9371 9.37762C35.6763 9.17984 35.3286 9.25895 35.0244 9.29851C34.6332 9.37762 28.5482 13.0564 16.6824 20.3349C14.9439 21.4029 13.3791 21.9567 11.9883 21.9172C10.4236 21.8776 7.468 21.126 5.25132 20.4536C2.51307 19.6624 0.383318 19.2273 0.557175 17.8428C0.644104 17.1308 1.73071 16.4188 3.77354 15.6672C16.4651 10.6434 24.8972 7.32066 29.1132 5.73839C41.1963 1.14978 43.6738 0.358643 45.3254 0.358643C45.6731 0.358643 46.499 0.437756 47.0205 0.833325C47.4552 1.14978 47.5856 1.58491 47.629 1.90136C47.5856 2.13871 47.6725 2.85073 47.629 3.40453Z"
                                            fill="#1C1528"/>
                                    </svg>

                                </ParticipateButton>
                            </Link>
                            <Button className={
                                `absolute top-[2.5rem] right-[2.5rem] font-druk-wide-cyr rounded-full text-black transition-[.2s] btn-bg btn-font flex items-center justify-center text-[1.125rem] m:w-[4rem] m:h-[4rem] bg-lightBlue p-0 m-0 ${top ? '' : 'mt-[.5rem]'}`
                            } size={'lg'} onClick={() => setIsVisible(false)}>
                                <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M20.4857 23.3137L0.686709 3.51471L3.51514 0.686279L23.3141 20.4853L20.4857 23.3137Z"
                                          fill="#1C1528"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M20.4847 23.3137L0.685733 3.51471L3.51416 0.686279L23.3131 20.4853L20.4847 23.3137Z"
                                          fill="#1C1528"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M23.313 3.51479L3.51397 23.3138L0.685547 20.4854L20.4845 0.686362L23.313 3.51479Z"
                                          fill="#1C1528"/>
                                </svg>

                            </Button>
                        </div>
                    </div>
                </div>

        }




            </>

    )
}

export default MenuButton
