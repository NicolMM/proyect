import React from 'react'

import styles from './Product.module.css'
import InfoProduct from '../InfoProduct/InfoProduct';
import ImageProduct from '../ImageProduct/ImageProduct';
import Panel from '../Panel/Panel';


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
                <Panel />
            </div>

        </div>

    )
}

export default Product