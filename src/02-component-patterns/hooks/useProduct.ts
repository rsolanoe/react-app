import { useEffect, useState } from "react"
import { onChangeArg, Product } from '../interfaces/ProductInterface';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArg ) => void
    value?: number
}


const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCounter] = useState(value)

    const increase = ( ) => {

        const newValue = counter + 1

        setCounter( newValue )

        onChange && onChange({ count: newValue, product})

    }

    const decrease = () => {
        
        if ( counter == 0 ) return;

        const newValue = counter - 1

        setCounter( newValue )

        onChange && onChange({ count: newValue, product})

    }

    useEffect(() => {
        setCounter( value )
    }, [ value ])
    
    return {
        counter,
        increase,
        decrease
    }
}

export default useProduct