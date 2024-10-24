import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";

/// TODO: Define props for Buttonbar
const Buttonbar = ({ position, padding, buttonLeft, buttonRight }) => {
  let flPosition = "center";
  if (position === "left") flPosition = "flex-start";
  if (position === "right") flPosition = "flex-end";

  const style = {
    justifyContent: flPosition,
    padding: padding,
  };

  const clickHandler = () => {};

  return (
    <div className="Buttonbar" style={style}>
      <Button
        label={buttonLeft.label}
        size={buttonLeft.size}
        backgroundColor={buttonLeft.backgroundColor}
        color={buttonLeft.color}
        onClick={clickHandler}
      />

      <Button
        label={buttonRight.label}
        size={buttonRight.size}
        backgroundColor={buttonRight.backgroundColor}
        color={buttonRight.color}
        onClick={clickHandler}
      />
    </div>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

const exceptionClasses = ["button", "regular"];

Buttonbar.propTypes = {
  position: PropTypes.oneOf(["left", "center", "right"]),
  padding: PropTypes.number,
  buttonLeft: PropTypes.objectOf({
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
  }),
  buttonRight: PropTypes.objectOf({
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default Buttonbar;
