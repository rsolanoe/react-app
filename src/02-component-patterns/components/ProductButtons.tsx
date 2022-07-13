import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import { ProductBtnProps } from "../interfaces/ProductInterface"



export const ProductButtons = ({ className, style }: ProductBtnProps ) => {

    // maxCount
    const { counter, decrease, increase, maxCount } = useContext( ProductContext )

    const isMaxReached = useCallback(
      () => !!maxCount  &&  counter === maxCount ,
      [ counter, maxCount ],
    )

    // isMaxReached = useCallback, [ count, maxCount ]
    
    return (
        <div style={style && style } className={ `${ styles.buttonsContainer } ${ className ? className : '' }` }>
            <button onClick={ decrease } className={ styles.buttonMinus }>-</button>
            <div className={ styles.countLabel }>{ counter }</div>
            <button onClick={ increase } className={`${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }>+</button>
        </div>
    )
}