"use client"; // This is a client component 👈🏽

import React from 'react'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import { GrFormNextLink, GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";
import { Swiper, useSwiper } from 'swiper/react';

import Image, { StaticImageData } from "next/image";

import styles from './style.module.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '@/common/Button/Button';
const SwipeProduct = () => {
    const images = [
        // { src: im, alt: 'First' },
        { src: image1, alt: 'Second' },
        { src: image2, alt: 'Third' },
        { src: image3, alt: 'Fourth' },
        { src: image4, alt: 'Second' },
        { src: image5, alt: 'Third' },
        { src: image6, alt: 'Fourth' },
        // { src: image7, alt: 'Second' },
        // { src: image8, alt: 'Third' },

    ]

    return (
        <>

            <div className={styles.container}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}

                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        // depth: 100,
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
                >

                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <Image
                                    className={styles.img_}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow" style={{
                            marginTop: "12.2rem", left: "40%", zIndex: 2000, color: "transparent"
                        }}>
                            <Button type={'third'} size={'small'} ><GrLinkPrevious style={{ padding: "0.2rem", color: "rgb(100, 100, 100)", fontWeight: "bold" }} size={'1.5rem'} />
                            </Button>
                        </div>
                        <div className="swiper-button-next slider-arrow" style={{
                            color: 'transparent', marginTop: "12.2rem", right: "37%", zIndex: 2000
                        }}>
                            <Button type={'third'} size={'small'}  ><GrLinkNext style={{ padding: "0.2rem", color: "rgb(100, 100, 100)", }} /> </Button>
                        </div>

                        <div style={{
                            color: 'transparent', marginTop: "4rem",
                        }}
                        
                        >

                            <div className="swiper-pagination pagination" style={{ position: "absolute", }}></div>

                        </div>

                    </div>
                </Swiper>
            </div >

        </>


    )
}

export default SwipeProduct