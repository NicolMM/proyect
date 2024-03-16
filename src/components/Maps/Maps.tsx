"use client"; // This is a client component 👈🏽

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader';


export const Maps = () => {



    const mapRef = React.useRef<HTMLDivElement>(null)
    useEffect(() => {




        const initMap = async () => {


            const loader = new Loader({

                version: 'weekly',
                apiKey: "AIzaSyBWg3BmRiGirXLCbqioeMkbBXTQKJAVnvo"
            })

            const { Map } = await loader.importLibrary('maps')

            const {Marker}= await loader.importLibrary('marker') 
            const position = {
                lat: -12.112721,
                lng: -77.012128
            }

            const mapOptions= {
                center: position,
                zoom: 17,
                mapId: "MY_PROYECT"
            }


            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const marker= new Marker({
                map,
                position:position
            })
        }


        initMap()

    }, [])




    return <>

        <div style={{ height: "600px" }} ref={mapRef}></div>
    </>
}

export default React.memo(Maps)