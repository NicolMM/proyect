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
// import Text from '../../'

const InfoProduct = () => {
    return (
        <>
            <Text type='typography-subtitle_minor' variant='h2' color='secondary1--100'>PROYECTO</Text>
            <Text type='typography-title_major' variant='h1' color='primary1--75'>Marsano</Text>


            <div className={styles.infoMapSecction}>

                <div className={styles.mapSecction}>
                    <MdLocationOn className={styles.iconLocation} />
                    <Text type='typography-subtitle_minor' variant='h2' color='secondary1--75'>Surquillo</Text>
                </div>

                <Text className={styles.map} type='typography-subtitle_minor' color='primary2--100'>Ver Mapa</Text>

            </div>


            <hr></hr>

            <Text type='typography-subtitle_minor' variant='h2' color='primary1--75'>Departamentos desde S/ 260,000</Text>

            <Text type='typography-subtitle_accordion' variant='h3' color='primary1--50'>Información  del Proyecto</Text>

            <FaBuilding />
            <FaBath />
            <IoIosBed />
            <FaRegCalendarCheck />
            <PiFileTextFill />
            <LiaUmbrellaBeachSolid />
            <TfiRulerAlt2 />
            <TbTriangleSquareCircleFilled />
            <Text type='typography-subtitle_accordion' variant='h3' color='primary1--50'>Áreas comunes</Text>

            <GrSwim />
            <CgGym />
            <FaBriefcase />
            <MdGroups />

            <MdOutdoorGrill />

            <BiCycling />




            <hr></hr>
        </>
    )
}

export default InfoProduct