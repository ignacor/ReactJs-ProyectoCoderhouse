import React, { useEffect } from 'react'
import styles from './style.module.css'

const ItemDetail = ({ item}) => {

    return (
        <div className={styles.contenedor}>
            <div className={styles.imaagecont}>
            <h5 className={styles.title} >{item.title}</h5>
            <img src={item.image} className={styles.image}/>
            </div>
            <div >
            <p className={styles.descripcioncont}>
                Descripcion: {item.description}
            </p>
            <p className={styles.preciocont} >
                Precio: {item.price}
            </p>
            </div>
        </div>
    )
}

export default ItemDetail