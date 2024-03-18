import React from 'react'

import styles from './Product.module.css'
import InfoProduct from '../InfoProduct/InfoProduct';
import ImageProduct from '../ImageProduct/ImageProduct';
import Panel from '../Panel/Panel';


const Product = () => {
    return (

        <div className={styles.container}>
            <div className={styles.box}>
                <ImageProduct />
            </div>
            <div className={styles.box}>
                <InfoProduct />
            </div>
            <div className={styles.box}>
                <Panel />
            </div>

        </div>

    )
}

export default Product