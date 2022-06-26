import { useState } from "react"


const useProduct = () => {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter( prev => prev + 1 )
    }

    const decrease = () => {
        
        if ( counter == 0 ) return;

        setCounter( prev => prev - 1 )

    }
    return {
        counter,
        increase,
        decrease
    }
}

export default useProduct