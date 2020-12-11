import React from "react";

import "./form-input.styles.scss";

const FormInput = ({
  handleChange,
  label,
  shrink,
  children,
  containerClasses,
  ...otherProps
}) => (
  <div className={`${containerClasses ? containerClasses : ""} group`}>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    {children}
  </div>
);

export default FormInput;
