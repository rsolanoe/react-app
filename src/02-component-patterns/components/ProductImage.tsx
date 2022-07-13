import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { ProductImgProps } from "../interfaces/ProductInterface"


export const ProductImage = ({ img, className }: ProductImgProps ) => {

    const { product } = useContext( ProductContext )
    
    let imgToShow: string = noImage

    if ( img ) {
        imgToShow = img
    }
    
    if ( product?.img ) {
        imgToShow = product.img
    } 

    return (
        <img className={`${styles.productImg} ${className ? className : '' }`} src={ imgToShow } alt="Product Image" />
    )
}