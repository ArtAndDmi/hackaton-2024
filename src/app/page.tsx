'use client'

import Header from "@/components/shared/header"
import CasesBlock from "@/components/shared/cases-block"
import ParticipantsBlock from "@/components/shared/participants-block"
import PrizesBlock from "@/components/shared/prizes-block"
import TimetableBlock from "@/components/shared/timetable-block"
import ExpertsBlock from "@/components/shared/experts-block"
import PartnersBlock from "@/components/shared/partners-block"
import QuestionsBlock from "@/components/shared/questions-block"
import Footer from "@/components/shared/footer"
import PhotosBlock from "@/components/shared/photos-block"
import useInView from "@/hooks/useInView"

export default function Home() {
    const {ref, isIntersecting: isInView} = useInView({threshold: 0.8})


    return (
        <div>
            <Header footerInView={isInView}/>
            <CasesBlock />
            <ParticipantsBlock />
            <PrizesBlock />
            <TimetableBlock />
            <ExpertsBlock />
            <PartnersBlock />
            <QuestionsBlock />
            <PhotosBlock />
            <Footer ref={ref}/>
        </div>
    )
}
