import React from 'react';
import styles from './Maps.module.css'
import { MdLocationOn } from 'react-icons/md';
import { Text } from '@/common/Text/Text';

const Map = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mapSecction}>
                <MdLocationOn className={styles.iconLocation} size={"1.5rem"} />
                <Text className={styles.title} color='primary1--50'>Ubicación del proyecto</Text>
            </div>
            <iframe
                width="100%"
                height="430px"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCyIbtv5aLtHXXxoPtEzYDfzpRUDL27hGA&center=-12.112721%2C-77.012128&zoom=16`}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Map;
