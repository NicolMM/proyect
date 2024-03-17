import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { HiCash } from 'react-icons/hi'
import styles from './Panel.module.css'
import { Text } from '@/common/Text/Text'

const Panel = () => {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.secction}>



                    <Text className={styles.title} color='primary1--75'>¿Cómo invertir?</Text>

                    <Text className={styles.title} color='primary1--75'><FaCirclePlus />HOY</Text>

                    <Text className={styles.title} color='primary1--75'>Desde 10% inicial</Text>

                    <HiCash />

                    <Text className={styles.title} color='primary1--75'><FaCirclePlus />PREVIO A LA ENTREGA</Text>

                    <Text className={styles.title} color='primary1--75'>90% con crédito
                        hipotecario</Text>

                </div>


            </div>


        </>
    )
}

export default Panel