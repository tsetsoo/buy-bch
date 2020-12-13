import React, { useContext, useState } from "react";

import logo from "../../assets/assets_images_poype-logo-light.png";
import { Context } from "../intl-wrapper/intl-wrapper.component";

import { useIntl } from "react-intl";

import "./header.styles.scss";

const options = {
  bg: { value: "bg-BG", label: "БГ" },
  en: { value: "en", label: "EN" },
};

const Header = () => {
  const setInitialState = () => {
    return /^bg\b/.test(context.locale) ? options["bg"] : options["en"];
  };
  const context = useContext(Context);
  const [currentLanguage, setCurrentLanguage] = useState(setInitialState());

  const intl = useIntl();

  const toggleLanguage = () => {
    const language =
      currentLanguage.label === options["bg"].label ? "en" : "bg";

    setCurrentLanguage(options[language]);
    context.selectLanguage(options[language].value);
  };

  return (
    <div className="header-container">
      <a href="https://www.poype.io/">
        <img alt="Poype Logo" className="brand-logo" src={logo} />
      </a>
      <div className="powered-text">
        {intl.formatMessage({ id: "header.heading" })}
      </div>
      <div className="language" onClick={() => toggleLanguage()}>
        {currentLanguage.label}
      </div>
    </div>
  );
};

export default Header;
