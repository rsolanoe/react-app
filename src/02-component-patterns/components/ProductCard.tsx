// IMPORTACIONES
import { createContext } from 'react';

import useProduct from '../hooks/useProduct';

import { ProductContextProps, ProductCardProps } from '../interfaces/ProductInterface';

import styles from '../styles/styles.module.css'


// CONTEXTO
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext 


// COMPONENTE
export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increase, decrease } = useProduct({ onChange, product, value })

    return (
        <Provider value={{ counter, increase, decrease, product }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}