import React, { useContext } from "react";
import "./header.styles.scss";
import { Context } from "../intl-wrapper/intl-wrapper.component";

const Header = () => {
  const context = useContext(Context);

  return (
    <div className="header-container">
      <div className="options-container">
        <div className="option" onClick={() => context.selectLanguage("bg-BG")}>
          Български
        </div>
        <div className="option" onClick={() => context.selectLanguage("en")}>
          English
        </div>
      </div>
    </div>
  );
};

export default Header;
