import { useContext } from 'react'
import Third from './Third'
import { CartContext } from './cntext/CartContext';

export default function Second() {

    const myContext = useContext(CartContext);

    console.log(myContext);


    return (
        <div>
            <Third />
        </div>
    )
}
