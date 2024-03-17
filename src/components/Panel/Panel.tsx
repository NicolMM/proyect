import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { HiCash } from 'react-icons/hi'
import styles from './Panel.module.css'
import { Text } from '@/common/Text/Text'

const Panel = () => {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.secction_1}>
                    <Text className={styles.title} color='primary1--75'>¿Cómo invertir?</Text>
                    <Text className={styles.subTitle} color='primary1--100'> <HiCash size={"1.5rem"} className={styles.iconMoney} />HOY</Text>
                    <Text className={styles.subTitle} color='primary1--75'>Desde 10% inicial</Text>
                    <div className={styles.iconPlusSecction}>
                        <FaCirclePlus className={styles.iconPlus} size={'2rem'} />
                    </div>
                    <Text className={styles.subTitle} color='primary1--100'> <HiCash className={styles.iconMoney} size={"1.5rem"} />PREVIO A LA ENTREGA</Text>
                    <Text className={styles.subTitle + " " + styles.middle} color='primary1--75'>90% con crédito
                        hipotecario</Text>

                </div>

                <div className={styles.secction_2}>
                    <div className={styles.separa}>
                        <Text color='white' className={styles.subTitle_2} > Separa con</Text>

                    </div>
                    <div>
                        <Text color='white' className={styles.price}>S/ 3,000</Text>

                    </div>
                </div>



            </div>


        </>
    )
}

export default Panel