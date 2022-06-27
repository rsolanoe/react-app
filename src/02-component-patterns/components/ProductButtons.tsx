import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import { ProductBtnProps } from "../interfaces/ProductInterface"



export const ProductButtons = ({ className }: ProductBtnProps ) => {

    const { counter, decrease, increase } = useContext( ProductContext )
    
    return (
        <div className={ `${ styles.buttonsContainer } ${ className ? className : '' }` }>
            <button onClick={ decrease } className={ styles.buttonMinus }>-</button>
            <div className={ styles.countLabel }>{ counter }</div>
            <button onClick={ increase } className={styles.buttonAdd}>+</button>
        </div>
    )
}