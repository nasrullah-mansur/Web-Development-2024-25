/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'


const Input = forwardRef((props, ref) => {

    const handleClick = () => {
        ref.current.style.backgroundColor = 'red';
    }

    return (

        <div>
            <input ref={ref} type="text" className="border" />
            <br />
            <br />
            <br />

            <button onClick={handleClick} className="border">Click to focus</button>
        </div>

    )
})

export default Input;
