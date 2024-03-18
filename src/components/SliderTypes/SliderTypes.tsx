import React from 'react'
import SwipeProduct from '../SwipeProduct/SwipeProduct'
import { Text } from '@/common/Text/Text'
import styles from './SliderTypes.module.css'

const SliderTypes = () => {
    return (

        <div className={styles.container} >

            <div className={styles.divTitle} >
                <Text className={styles.title}  >Tipos de departamentos del proyecto</Text>

            </div>

            <SwipeProduct />
        </div>

    )
}

export default SliderTypes