import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'



export const ProductButtons = () => {

    const { counter, decrease, increase } = useContext( ProductContext )
    
    return (
        <div className={ styles.buttonsContainer }>
            <button onClick={ decrease } className={ styles.buttonMinus }>-</button>
            <div className={ styles.countLabel }>{ counter }</div>
            <button onClick={ increase } className={styles.buttonAdd}>+</button>
        </div>
    )
}