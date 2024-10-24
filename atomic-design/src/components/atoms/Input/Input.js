import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Input
const Input = ({type, placeholder, padding, width, onChange}) => {

    let p = 5
    if (padding === "small") p = 2
    if (padding === "large") p = 10

    const style = {
        padding: p,
        width: `${width}%`
    }

    return(
        <div>
            <input className="Input"
            style={style}
            type={type}
            onChange={onChange}
            placeholder={placeholder}/>
        </div>
    )

}

Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "email", "url", "password"]),
    placeholder: PropTypes.string,
    padding: PropTypes.oneOf(["small", "medium", "large"]),
    width: PropTypes.number,
    onChange: PropTypes.func
}

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = [
    "small",
    "medium",
    "large"
]

const exceptionClasses = [
    "button",
    "regular"
]

export default Input