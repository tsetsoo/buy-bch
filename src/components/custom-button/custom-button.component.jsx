import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, inverted, color, ...otherProps }) => (
  <button
    className={color ? "custom-button-" + color : "custom-button"}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
