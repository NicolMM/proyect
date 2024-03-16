"use client"; // This is a client component 👈🏽
import React, { useRef } from 'react'
import product from './product.png'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import image7 from './image7.png'
import image8 from './image8.png'
import './ImageProduct.css'

import { createContext } from 'react';

import Image, { StaticImageData } from "next/image";
import Button from '@/common/Button/Button';
import { PiFileTextFill } from 'react-icons/pi';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper'; this will not work in recent version you have to add this instead
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";
import { Swiper, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ImageProduct = () => {



    const images = [
        { src: product, alt: 'First' },
        { src: image1, alt: 'Second' },
        { src: image2, alt: 'Third' },
        { src: image3, alt: 'Fourth' },
        { src: image4, alt: 'Second' },
        { src: image5, alt: 'Third' },
        { src: image6, alt: 'Fourth' },
        { src: image7, alt: 'Second' },
        { src: image8, alt: 'Third' },

    ]

    return (
        <>
            <Button type={'secundary'} size={'large'}>  <PiFileTextFill className={'icon'} />
                ver ficha proyecto</Button>
            <div style={{ width: "400px" }}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1}
                    // slidesPerGroup={2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        // clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"

                // onClick={console.log('first')}
                >


                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={400}
                                    height={400}
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}


                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <button className="arrow-back-outline">BACK</button>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <button className="arrow-forward-outline">FORWARD</button>
                        </div>
                    </div>


                </Swiper>
            </div>
        </>
    )
}

export default ImageProduct