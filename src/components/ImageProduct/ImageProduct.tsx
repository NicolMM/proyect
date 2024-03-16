import React from 'react'
import product from './product.png'
import { createContext } from 'react';

import Image, { StaticImageData } from "next/image";
import Button from '@/common/Button/Button';
import { PiFileTextFill } from 'react-icons/pi';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper'; this will not work in recent version you have to add this instead
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import {Swiper, SwiperSlide} from 'swiper/react'; 



const ImageProduct = () => {


    const images = [
        { src: product, alt: 'First' },
        { src: product, alt: 'Second' },
        { src: product, alt: 'Third' },
        { src: product, alt: 'Fourth' }
    ]

    return (
        <><Image
            src={product}
            alt="Circle Image"
            // layout="responsive"
            width={365}
            height={400}
            objectFit="cover"
        />
            <Button type={'secundary'} size={'large'}>  <PiFileTextFill className={'icon'} />
                ver ficha proyecto</Button>
            <section className='py-12'>
                <div className='container'>
                    {/* <Swiper
                        navigation
                        pagination={{ type: 'fraction' }}
                        modules={[Navigation, Pagination]}
                        onSwiper={swiper => console.log(swiper)}
                        className='h-96 w-full rounded-lg'
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex h-full w-full items-center justify-center'>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className='block h-full w-full object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>
            </section>

        </>


    )
}

export default ImageProduct