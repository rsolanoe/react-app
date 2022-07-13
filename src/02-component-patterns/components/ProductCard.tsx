// IMPORTACIONES
import { createContext } from 'react';

import useProduct from '../hooks/useProduct';

import { ProductContextProps, ProductCardProps } from '../interfaces/ProductInterface';

import styles from '../styles/styles.module.css'


// CONTEXTO
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext 


// COMPONENTE
export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increase, decrease, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{ counter, increase, decrease, product, maxCount }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        reset,
                        maxCount: initialValues?.maxCount,
                        product,
                        increase,
                        decrease 
                    }) 
                }
            </div>
        </Provider>
    )
}