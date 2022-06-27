import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import { ProductTitleProps } from "../interfaces/ProductInterface"

import styles from '../styles/styles.module.css'


export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {
    console.log(style);
    const { product } = useContext( ProductContext )

    return (
        <p style={style} className={ `${styles.productDescription} ${ className ? className : '' }` }>{ title ? title : product.title }</p>
    )

}