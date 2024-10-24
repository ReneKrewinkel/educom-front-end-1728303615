import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Label
const Label = ({label, color}) => {

    const style = {
        color: color === "muted" ? "rgba(0,0,0,0.5)" : "#000"
    }

    return(
        <div className="Label" style={style}>{label}</div>
    )

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

Label.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(["black", "muted"])
}

export default Label