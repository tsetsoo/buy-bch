import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Bulgarian from "../../lang/bg.json";
import English from "../../lang/en.json";

export const Context = React.createContext();

const messagesFromLocal = (locale) => {
  return /^bg\b/.test(locale) ? Bulgarian : English;
};

const currentLocale = navigator.language;

const IntlWrapper = (props) => {
  const [locale, setLocale] = useState(currentLocale);
  const [messages, setMessages] = useState(messagesFromLocal(currentLocale));

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    setMessages(messagesFromLocal(newLocale));
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default IntlWrapper;
