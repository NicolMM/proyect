import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Text } from '@/common/Text/Text';
import Image, { StaticImageData } from "next/image";

import { FaFacebookF } from "react-icons/fa6";
import logo from './logo.png'



import styles from './Footer.module.css'
import Button from '@/common/Button/Button';
const Footer = () => {
    return (
        <>

            <div className={styles.container}>

                <div className={styles.secction_1}>

                    <div className={styles.secction_links}>

                        <div className={styles.secction_links_title} >
                            <Text className={styles.titleLinks}>SIGUENOS EN REDES</Text>

                        </div>

                        <div className={styles.secction_links_icons} >

                            <div className={styles.divIcon}>
                                <FaFacebookF className={styles.icon} size={"1.5rem"} />
                            </div>

                            <div className={styles.divIcon}>
                                <FaInstagram className={styles.icon} />
                            </div>

                            <div className={styles.divIcon}>
                                <FaLinkedinIn className={styles.icon} />
                            </div>

                            <div className={styles.divIcon}>
                                <FaYoutube className={styles.icon} />
                            </div>
                        </div>


                    </div>

                    <div className={styles.secction_saveDate}>
                        <Text className={styles.titleLinks}>¿Tienes alguna duda?</Text>

                        <Button type={'primary'} size={'small'} style={{
                            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
                        }}>Agenda una cita</Button>
                    </div>
                </div>




                <hr></hr>

                <div className={styles.secction_2}>
                    <div className={styles.secctionOptions}>
                        <Text className={styles.option}>Sobre Nosotros</Text>
                        <Text className={styles.option}>Proper Rentas</Text>
                        <Text className={styles.option}>Blog: Aprende Inversión</Text>
                        <Text className={styles.option}>Workshops</Text>
                        <Text className={styles.option}>Propiedades</Text>
                        <Text className={styles.option}>Simulador Bancario</Text>
                        <Text className={styles.option}>Preguntas Frecuentes: Proper Inversión</Text>
                        <Text className={styles.option}>Preguntas Frecuentes: Proper rentas</Text>
                        <Text className={styles.option}>Términos y condiciones</Text>
                        <Text className={styles.option}>Intranet</Text>
                    </div>

                    <div className={styles.secctionLogo}>

                        <Image src={logo} alt="Circle Image" width={145} height={40} />
                    </div>

                </div>





            </div>


        </>
    )
}

export default Footer