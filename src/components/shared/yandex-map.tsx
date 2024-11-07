'use client'

import React from 'react'
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps"

const YandexMap = ({isMobile} : {isMobile: boolean}) => {

    return (


        <YMaps
            query={{
                apikey: "8563feb8-9af3-42ab-9476-60b2814961b4"
            }}>
            <Map
                defaultState={{center: [55.669957, 37.480224], zoom: 13}}
                width={isMobile ? '31.5rem' : '54.375rem'}
                height={isMobile ? '17.75rem' : '24rem'}
            >
                <Placemark defaultGeometry={[55.669957, 37.480224]}/>
            </Map>
        </YMaps>

    )
}

export default YandexMap