import React from 'react'

import styles from './Product.module.css'
import InfoProduct from '../InfoProduct/InfoProduct';
import { FaCirclePlus } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import Button from '@/common/Button/Button';
import ImageProduct from '../ImageProduct/ImageProduct';


const Product = () => {
    return (

        <div className={styles.container}>
            <div>
                <ImageProduct />
            </div>
            <div>
                <InfoProduct />
            </div>
            <div>
                
                <FaCirclePlus />
                <HiCash />

            </div>

        </div>

    )
}

export default Product