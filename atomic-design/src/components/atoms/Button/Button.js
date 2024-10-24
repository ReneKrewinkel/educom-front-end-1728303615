import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props for Button
const Button = ({ label, size, color, backgroundColor, onClick }) => {
  let p = 10;
  if (size === "small") p = 5;
  if (size === "large") p = 20;

  const style = {
    padding: p,
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <button onClick={onClick} className="Button" style={style}>
      {label}
    </button>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

const exceptionClasses = ["button", "regular"];

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
