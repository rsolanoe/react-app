// IMPORTACIONES
import { createContext } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/ProductInterface';

import styles from '../styles/styles.module.css'


// CONTEXTO
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext 


// COMPONENTE
export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increase, decrease } = useProduct()

    return (
        <Provider value={{ counter, increase, decrease, product }}>
            <div className={styles.productCard}>
            
                {children}
                
            </div>
        </Provider>
    )
}