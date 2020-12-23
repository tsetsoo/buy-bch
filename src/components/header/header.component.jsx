import React, { useContext, useState } from "react";

import logo from "../../assets/assets_images_poype-logo-light.png";
import { Context } from "../intl-wrapper/intl-wrapper.component";

import { useIntl } from "react-intl";

import "./header.styles.scss";

const labels = {
  bg: "БГ",
  en: "EN",
};

const options = {
  bg: { value: "bg-BG", label: labels.bg },
  en: { value: "en", label: labels.en },
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

    setLanguage(language);
  };

  const setLanguage = (language) => {
    setCurrentLanguage(options[language]);
    context.selectLanguage(options[language].value);
  };

  const getLanguageClasses = (language) => {
    return currentLanguage.label === language ? "option active" : "option";
  };

  return (
    <div className="header-container">
      <a href="https://www.poype.io/">
        <img alt="Poype Logo" className="brand-logo" src={logo} />
      </a>
      <div className="powered-text">
        {intl.formatMessage({ id: "header.heading" })}
      </div>
      <div className="language-phone" onClick={() => toggleLanguage()}>
        {currentLanguage.label}
      </div>
      <div className="language-desktop">
        <div
          className={getLanguageClasses(labels.en)}
          onClick={() => setLanguage("en")}
        >
          {labels.en}
        </div>
        <div
          className={getLanguageClasses(labels.bg)}
          onClick={() => setLanguage("bg")}
        >
          {labels.bg}
        </div>
      </div>
    </div>
  );
};

export default Header;
