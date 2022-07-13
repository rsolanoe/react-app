import { useEffect, useState, useRef } from 'react';
import { InitialValues, onChangeArg, Product } from '../interfaces/ProductInterface';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArg ) => void
    value?: number
    initialValues?: InitialValues
}


const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value )
    const isMounted = useRef( false )

    const increase = ( ) => {

        if ( counter === initialValues?.maxCount ) return

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

    const reset = () => {
        setCounter( initialValues?.count || value )
    }

   
    useEffect(() => {
        if ( !isMounted.current ) return
        setCounter( value )

    }, [ value ])


    // useEffect(() => {
    //     console.log('second')
    //     isMounted.current = true
    
    // }, [])

        
    return {
        counter,
        decrease,
        increase,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}

export default useProduct