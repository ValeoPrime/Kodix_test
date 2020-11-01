import React from 'react'
import './button.sass'

const Button = (props) => {
    return (
        <button onClick={props.click || null} className='btn'>{props.children}</button>
    )
}

export default Button
