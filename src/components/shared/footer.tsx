'use client'

import React, {MutableRefObject} from 'react'
import {cn} from "@/lib/utils"
import ParticipateButton from "@/components/ui/participate-button"
import HeaderContainer from "@/components/ui/header-container"
import Figure from "@/components/ui/figure"
import YandexMap from "@/components/shared/yandex-map"
import {AGREEMENT_LINK, REG_LINK, STATE_LINK, TG_LINK} from "@/consts"
import Link from "next/link"

interface Props {
    className?: string
    ref: MutableRefObject<HTMLDivElement | null>
}

export const Footer: React.FC<Props> = ({className = '', ref}) => {
    return (
        <div ref={ref} className={cn('bg-bgBlue pt-[9.0rem] pb-[3rem] relative z-0 overflow-hidden m:pt-[5rem] m:pb-[2rem]', className)}>
            <Figure shapeId={10} right={-223} top={-92} color={'blue'} rotate={60}/>
            <Figure shapeId={6} left={1} top={1} color={'blue'} />
            <Figure shapeId={8} right={482} top={6} color={'blue'} />
            <Figure shapeId={5} left={-290} top={431} color={'blue'} rotate={80} />
            <Figure shapeId={11} left={92} bottom={-326} color={'blue'} rotate={50} />
            <Figure shapeId={1} right={605} bottom={-113} color={'blue'} rotate={150} />
            <Figure shapeId={9} right={40} bottom={57} color={'blue'} rotate={150} />

            <HeaderContainer className={'pt-[3rem] m:hidden'}>
                <div className={'flex justify-between items-center'}>
                    <p className={'font-druk-wide-cyr-bold text-[6.0rem] text-white leading-none'}>ЦИФРОВОЙ<br/>СУВЕРЕНИТЕТ</p>
                    <Link href={REG_LINK}>
                        <ParticipateButton color={'blue'} className={'py-6 px-16 text-[2.25rem]'} hasShadow>Участвовать</ParticipateButton>
                    </Link>
                </div>
                <p className={'text-white text-[1.75rem] mt-5'}>Национальный студенческий хакатон</p>
                <div className={'mt-16 flex gap-10'}>
                    <div className={'w-[54.375rem] h-[24.0rem] rounded-60 overflow-hidden'}>
                        <YandexMap isMobile={false}/>
                    </div>
                    <div className={'flex flex-col'}>
                        <p className={'font-druk-wide-cyr text-white text-[2.0rem] leading-none'}>МИРЭА - Российский <br/> технологический университет</p>
                        <p className={'mt-10 text-[1.75rem] text-white'}>г. Москва, проспект Вернадского, д. 78</p>
                        <p className={'mt-[0.8125rem] text-[1.75rem] text-white flex items-center gap-2'}>
                            <svg width="2.3rem" height="3.25rem" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.23241 23.9863H0V25.9643H6.47586H12.9517V23.9863H10.3936C11.3748 21.5109 13.3102 16.9118 13.3656 16.5389C13.4211 16.166 18 25.9222 18 25.9222L22.6385 16.5256C22.6385 16.5256 24.6922 21.6622 25.6002 23.9652L23.0483 23.9874V25.9643H29.5241H36V23.9863L33.7448 23.9847C30.6362 16.0625 24.3353 0.25 24.3353 0.25C23.5943 1.81457 18 13.5911 18 13.5911C18 13.5911 12.4109 1.81427 11.6716 0.251347C11.6716 0.251347 3.33116 21.5152 2.23241 23.9863Z" fill="#F7F4EF"/>
                            </svg>
                            Юго-западная
                        </p>
                        <div className={'self-end justify-self-end h-full flex relative'}>
                            <p className={'py-[0.625rem] px-4 font-extrabold text-white bg-black rounded-full absolute w-[20.9375rem] text-center text-[1.75rem] top-[1.25rem] left-[-17.5rem] rotate--13deg'}>Остались вопросы?</p>
                            <svg className={'absolute top-[6.25rem] right-[5.0rem]'} width="6.1875rem" height="4.3125rem" viewBox="0 0 99 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M84.2324 40.7559L93.8795 54.7178L79.9176 64.3648" stroke="#F7F4EF" strokeWidth="6" strokeLinecap="square"/>
                                <path d="M3.5 2C25.3734 41.9079 55.2626 52.0158 93.9737 53.8146" stroke="#F7F4EF" strokeWidth="6"/>
                            </svg>

                            <Link href={TG_LINK} className={'align-bottom mt-auto mb-[-1rem]'}>
                                <ParticipateButton color={'blue'} className={'w-16 h-16 align-bottom mt-auto flex items-center justify-center'}>
                                    <svg className={'translate-x-[-.1rem]'} width="1.875rem" height="1.375rem" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.992 1.88348C29.5767 5.74829 27.777 15.1412 26.8633 19.4708C26.4757 21.3053 25.7004 21.9169 24.9806 21.9902C23.3747 22.1126 22.1564 21.0607 20.6059 20.1557C18.1694 18.737 16.785 17.8564 14.4316 16.4866C11.6905 14.8966 13.4625 14.016 15.0407 12.5973C15.456 12.2304 22.544 6.53103 22.6825 6.01735C22.7017 5.93955 22.6992 5.85878 22.675 5.78205C22.6509 5.70532 22.6059 5.63495 22.544 5.57706C22.3779 5.45476 22.1564 5.50368 21.9626 5.52814C21.7134 5.57706 17.8372 7.85191 10.2784 12.3527C9.17093 13.0131 8.17417 13.3556 7.28817 13.3311C6.29141 13.3067 4.40866 12.8419 2.99659 12.4261C1.25227 11.9369 -0.104422 11.6678 0.00632816 10.8117C0.0617034 10.3714 0.753894 9.93108 2.05521 9.46632C10.14 6.3598 15.5114 4.3051 18.1971 3.32667C25.8942 0.489217 27.4724 0 28.5246 0C28.7461 0 29.2721 0.0489213 29.6044 0.293529C29.8813 0.489215 29.9643 0.758285 29.992 0.953972C29.9643 1.10074 30.0197 1.54103 29.992 1.88348Z" fill="#1C1528"/>
                                    </svg>

                                </ParticipateButton>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className={'flex gap-16 items-center mt-24'}>
                    <Link href={STATE_LINK} target={'_blank'}>
                        <span className={'text-[1.75rem] text-lightBlue'}>Положение о хакатоне</span>
                    </Link>
                    <Link href={AGREEMENT_LINK} target={'_blank'}>
                        <span className={'text-[1.75rem] text-lightBlue'}>Согласие на обработку персональных данных</span>
                    </Link>
                </div>
            </HeaderContainer>
            <HeaderContainer className={'hidden m:block'}>
                <p className={'text-[2.85rem] font-druk-wide-cyr-bold text-white leading-[3rem]'}>ЦИФРОВОЙ<br/>СУВЕРЕНИТЕТ</p>
                <p className={'text-[1.58rem] text-white mt-[1rem]'}>Национальный студенческий хакатон</p>
                <div className={'flex gap-[1.5rem] justify-center items-center mt-[2.5rem]'}>
                    <Link href={REG_LINK}>
                        <ParticipateButton color={'blue'} hasShadow className={'py-[1rem] px-[6rem] text-[1.5rem]'}>Участвовать</ParticipateButton>
                    </Link>
                    <Link href={TG_LINK}>
                        <ParticipateButton color={'blue'} hasShadow className={'w-[4rem] h-[4rem] flex items-center justify-center'}>
                            <svg className={'translate-x-[-.1rem]'} width="1.875rem" height="1.375rem" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.992 1.88348C29.5767 5.74829 27.777 15.1412 26.8633 19.4708C26.4757 21.3053 25.7004 21.9169 24.9806 21.9902C23.3747 22.1126 22.1564 21.0607 20.6059 20.1557C18.1694 18.737 16.785 17.8564 14.4316 16.4866C11.6905 14.8966 13.4625 14.016 15.0407 12.5973C15.456 12.2304 22.544 6.53103 22.6825 6.01735C22.7017 5.93955 22.6992 5.85878 22.675 5.78205C22.6509 5.70532 22.6059 5.63495 22.544 5.57706C22.3779 5.45476 22.1564 5.50368 21.9626 5.52814C21.7134 5.57706 17.8372 7.85191 10.2784 12.3527C9.17093 13.0131 8.17417 13.3556 7.28817 13.3311C6.29141 13.3067 4.40866 12.8419 2.99659 12.4261C1.25227 11.9369 -0.104422 11.6678 0.00632816 10.8117C0.0617034 10.3714 0.753894 9.93108 2.05521 9.46632C10.14 6.3598 15.5114 4.3051 18.1971 3.32667C25.8942 0.489217 27.4724 0 28.5246 0C28.7461 0 29.2721 0.0489213 29.6044 0.293529C29.8813 0.489215 29.9643 0.758285 29.992 0.953972C29.9643 1.10074 30.0197 1.54103 29.992 1.88348Z" fill="#1C1528"/>
                            </svg>
                        </ParticipateButton>
                    </Link>

                </div>
                <p className={'mt-[4rem] font-druk-wide-cyr text-[1.3rem] text-white'}>МИРЭА - Российский технологический университет</p>
                <p className={'text-[1.25rem] text-white mt-[.5rem]'}>г. Москва, проспект Вернадского, д. 78</p>
                <p className={'mt-[0] text-[1.25rem] text-white flex items-center gap-2'}>
                    <svg width="2.3rem" height="3.25rem" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.23241 23.9863H0V25.9643H6.47586H12.9517V23.9863H10.3936C11.3748 21.5109 13.3102 16.9118 13.3656 16.5389C13.4211 16.166 18 25.9222 18 25.9222L22.6385 16.5256C22.6385 16.5256 24.6922 21.6622 25.6002 23.9652L23.0483 23.9874V25.9643H29.5241H36V23.9863L33.7448 23.9847C30.6362 16.0625 24.3353 0.25 24.3353 0.25C23.5943 1.81457 18 13.5911 18 13.5911C18 13.5911 12.4109 1.81427 11.6716 0.251347C11.6716 0.251347 3.33116 21.5152 2.23241 23.9863Z" fill="#F7F4EF"/>
                    </svg>
                    Юго-западная
                </p>
                <div className={'w-[31.5rem]  h-[17.75rem] mt-[1rem] rounded-60 overflow-hidden'}>
                    <YandexMap isMobile={true}/>
                </div>

                <Link href={STATE_LINK} target={'_blank'}>
                    <p className={'text-[1.3rem] text-lightBlue mt-[4rem]'}>Положение о хакатоне</p>
                </Link>
                <Link href={AGREEMENT_LINK} target={'_blank'}>
                    <p className={'text-[1.3rem] text-lightBlue mt-[.75rem]'}>Согласие на обработку персональных данных</p>
                </Link>
            </HeaderContainer>

        </div>
    )
}

export default Footer
