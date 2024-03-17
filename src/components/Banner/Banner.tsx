import React from 'react'
import styles from './Banner.module.css'
import { Text } from '@/common/Text/Text'
import Button from '@/common/Button/Button'

const Banner = () => {
    return (
        <div className={styles.container}
        >
            <Text color="white" variant='h1' type='typography-subtitle_minor'
                className={styles.title}
            >¿Te interesa invertir en este proyecto?</Text>
            <Button type={'primary'} size={'medium'}>AGENDAR CITA </Button>
        </div>
    )
}

export default Banner