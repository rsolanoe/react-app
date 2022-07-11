import { useState } from "react";
import { onChangeArg, ProductInCart } from "../interfaces/ProductInterface";



const useShoppingCart = () => {
    
    const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: onChangeArg) => {

        setShoppingCart( oldShoppingCart => {

            if ( count === 0 ) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart
                return rest
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count}
            }

        })

    };
    
    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShoppingCart