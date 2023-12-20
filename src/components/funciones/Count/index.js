import React, {  useState } from "react"
import '../../../page/home/home.css'

const Count = () => {

    let [count, setCounter] = useState(1)

    const suma = () => {
        setCounter(count + 1)
    }

    const resta = () => {
        if (count <= 1) {
            count = 1
        } else {
            setCounter(count - 1)
        }
    }

    return (
        <div className='seccion-counter'>
            <strong className='text-counter'>Quantity</strong>
            <div className='contenedor-counter'>
                <button className='button-counter' onClick={suma}>+</button>
                <p className='counter'>{count}</p>
                <button className='button-counter' onClick={resta}>-</button>
            </div>
        </div>
    )
}

export default Count