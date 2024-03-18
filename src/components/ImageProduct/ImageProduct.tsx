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
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import Image, { StaticImageData } from "next/image";
import Button from '@/common/Button/Button';
import { PiFileTextFill } from 'react-icons/pi';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";
import { Swiper, useSwiper } from 'swiper/react';
import styles from './ImageProduct.module.css'

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

            <div className={styles.container}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        // clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                >


                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div >
                                <Image
                                    width={370}
                                    height={400}
                                    src={image.src}
                                    alt={image.alt}

                                />
                            </div>
                        </SwiperSlide>
                    ))}


                    <div style={{ display: "flex", justifyContent: "end", marginRight: "6px" }} className={styles.secctionButtons}>
                        <div
                        >
                            <Button type={'secundary'} size={'large'} style={{ zIndex: "2000", marginTop: "2.5rem", }}

                            >  <PiFileTextFill className={'icon'} />
                                ver ficha proyecto</Button>
                        </div>


                        <div className={`${styles["slider-controler"]}`} >
                            <div className={"swiper-button-prev slider-arrow"} style={{
                                color: 'white', marginTop: "12.5rem", left: "6%"
                            }}>
                                <Button type={'secundary'} size={'x-small'}><GrFormPrevious style={{ fontSize: "2.1rem", fontWeight: "700 !important" }} /></Button>
                            </div>
                        </div>
                        <div className={`${styles["slider-controler"]}`}   >
                            <div className="swiper-button-next slider-arrow" style={{ color: 'transparent', marginTop: "12.5rem", left: "19%" }}>
                                <Button type={'secundary'} size={'x-small'} ><GrFormNext />
                                </Button>
                            </div>


                        </div>
                    </div>

                    <div
                        style={{ display: "flex", justifyContent: "center" }}
                        className={styles.enable}
                    >
                        <Button type={'secundary'} size={'large'} style={{ zIndex: "2000", marginTop: "2.5rem", }}

                        >  <PiFileTextFill className={'icon'} />
                            ver ficha proyecto</Button>
                    </div>


                </Swiper>

            </div>


        </>
    )
}

export default ImageProduct