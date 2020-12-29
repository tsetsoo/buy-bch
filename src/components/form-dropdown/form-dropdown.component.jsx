import React, { useState, useEffect, useRef } from "react";

import "./form-dropdown.styles.scss";

const FormDropdown = ({ value, handleChange, label, dropdownValues }) => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleDropdownChange = (value) => {
    handleChange(value);
    setOpen(false);
  };

  const handleToggle = (e) => {
    e.target.focus();
    setOpen(!open);
  };

  const handleBlur = (e) => {
    // firefox onBlur issue workaround
    if (
      e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget
    ) {
      return;
    }

    if (open) {
      setOpen(false);
    }
  };

  return (
    <div className="dropdown-container" ref={container}>
      <div className="dropdown-btn" onClick={handleToggle} onBlur={handleBlur}>
        <label className={`${value ? "shrink" : ""} form-dropdown-label`}>
          {label}
        </label>
        <div className="dropdown-value">{value}</div>
        <div className="arrow" />
      </div>

      <div className="dropdown-list" hidden={!open}>
        {dropdownValues.map((value, index) => (
          <div
            className="option"
            onClick={() => handleDropdownChange(value)}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormDropdown;
