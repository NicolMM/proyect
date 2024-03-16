import React from 'react'
import product from './product.png'
import Image, { StaticImageData } from "next/image";
import styles from './Product.module.css'


const Product = () => {
    return (

        <div className={styles.container}>
            <div>
                <Image
                    src={product}
                    alt="Circle Image"
                    // layout="responsive"
                    width={365}
                    height={400}
                    objectFit="cover"
                />
            </div>


            <div>
                <h2>PROYECTO</h2>
                <h1>MARSANO</h1>
                <hr></hr>
                <p>Departamentos desde S/ 260,000</p>
                <h3>Información  del Proyecto</h3>
                <hr></hr>
                <h3>Información  del Proyecto</h3>

            </div>
            <div>

            </div>

        </div>

    )
}

export default Product