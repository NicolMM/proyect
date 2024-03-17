import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { PiFileTextFill } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { GrSwim } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { MdOutdoorGrill } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import styles from './InfoProduct.module.css'
import { Text } from '@/common/Text/Text';
import { MdLocalMovies } from "react-icons/md";

// import Text from '../../'

const InfoProduct = () => {
    return (
        <div className={styles.container}>
            <Text type='typography-subtitle_minor' variant='h2' color='secondary1--100'>PROYECTO</Text>
            <Text type='typography-title_major' variant='h1' color='primary1--75'>Marsano</Text>


            <div className={styles.infoMapSecction}>

                <div className={styles.mapSecction}>
                    <MdLocationOn className={styles.iconLocation} />
                    <Text type='typography-subtitle_minor' variant='h2' color='secondary1--75'>Surquillo</Text>
                </div>

                <Text className={styles.map} type='typography-subtitle_minor' color='primary2--100'>Ver Mapa</Text>

            </div>


            <hr className={styles.lineSolid}></hr>

            <Text type='typography-subtitle_minor' variant='h4' color='primary1--75'>Departamentos desde S/ 260,000</Text>

            <Text type='typography-subtitle_accordion' variant='h3' color='primary1--50' className={styles.subTitle}>Información  del Proyecto</Text>

            <div className={styles.divSecction}>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< TbTriangleSquareCircleFilled className={styles.iconInfo} />Año</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>2020</Text>
                </div>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}> < FaBuilding className={styles.iconInfo} />Edificio</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Navarrete</Text>
                </div>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< FaRegCalendarCheck className={styles.iconInfo} />Pisos</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>21</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><TfiRulerAlt2 className={styles.iconInfo} />Tamaño m2</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>48 m2</Text>
                </div>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< IoIosBed className={styles.iconInfo} />Dormitorios</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>2</Text>
                </div>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< FaBath className={styles.iconInfo} />Baños</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>2</Text>
                </div>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< PiFileTextFill className={styles.iconInfo} />Alquiler</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Con Alquiler</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><LiaUmbrellaBeachSolid className={styles.iconInfo} />Áreas comunes</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>

            </div>

            <hr className={styles.lineSolid}></hr>



            <Text type='typography-subtitle_accordion' variant='h3' color='primary1--50'  className={styles.subTitle}>Áreas comunes</Text>

            <div className={styles.divSecction}>

                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><GrSwim className={styles.iconInfo} />Piscina</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< CgGym className={styles.iconInfo} />Gym</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><FaBriefcase className={styles.iconInfo} />Coworking</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><MdLocalMovies className={styles.iconInfo} />Cine</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}>< MdOutdoorGrill className={styles.iconInfo} />Parillas</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><MdGroups className={styles.iconInfo} />SUM</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
                <div className={styles.iconInfoSecction}>
                    <Text color='gray' variant='p2' className={styles.title}><BiCycling className={styles.iconInfo} />Bicicletas</Text>
                    <Text color='primary1--50' variant='p2' className={styles.description}>Sí</Text>
                </div>
            </div>


        </div>
    )
}

export default InfoProduct