import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
