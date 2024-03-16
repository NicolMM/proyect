import React from 'react'
import Image, { StaticImageData } from "next/image";
import logo from './logo.png'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>

        <Image src={logo} alt="Circle Image" width={145} height={40} />


      </div>
      <div className={styles.linkSecction}>
        WORKSHOP LINK
      </div>
    </>
  )
}

export default NavBar